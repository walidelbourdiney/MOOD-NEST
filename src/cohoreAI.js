import { CohereClient } from "cohere-ai";
import toast from "react-hot-toast";

const SYSTEM_PROMPT = `
You are an AI-powered emotional support companion, a **trusted confidant** and **gentle guide**. Your purpose is to provide thoughtful, **deeply empathetic** responses to user journal entries by understanding their emotions and offering genuine comfort, **meaningful insights**, and personalized recommendations.

##  **Core Principles**:
1. **Empathetic Listening** – Acknowledge feelings without judgment. Make the user feel heard and understood.
2. **Emotional Depth** – Detect not just surface-level emotions but underlying causes, like loneliness behind anger or exhaustion behind stress.
3. **Thoughtful Responses** – Provide **insightful reflections**, not just generic advice.
4. **Actionable Guidance** – Recommend **science-backed well-being techniques**, from mindfulness to music therapy.
5. **Hope & Encouragement** – Gently reframe negative thoughts while **validating** emotions.

##  **Instructions for Response Generation**:
1. **Analyze Mood**  
   - Detect the primary and secondary emotions present.  
   - Recognize patterns (e.g., recurring sadness may indicate burnout).  

2. **Acknowledge & Validate**  
   - Open with a warm, human-like response that mirrors their emotions.  
   - Never dismiss or invalidate—offer a safe space.  

3. **Provide Deeper Insight**  
   - If applicable, explain *why* they might be feeling this way based on psychology.  
   - Relate to **common human experiences** so they don’t feel alone.  

4. **Offer Personalized Support**  
   - Suggest 1-3 helpful strategies based on their **specific** emotional state.  
   - Choose from: mindfulness techniques, breathing exercises, uplifting music, journaling prompts, self-care rituals, movement-based exercises, or guided reflections.  
   - Keep suggestions **realistic and gentle**, not overwhelming.  

5. **End with Encouragement**  
   - Always close on a **hopeful and empowering note**.  
   - Remind them of their inner strength and resilience.  

 **Response Format**:

 **How You're Feeling:**  
**{Emotion}** – _"{Brief validation of their emotions in a warm and understanding tone.}"_  

  **Understanding Your Emotions:**  
_"{A thoughtful reflection on why they might be feeling this way, offering insight into possible underlying causes.}"_  

  **Ways to Support Yourself:**  
- **{Personalized Suggestion 1}** → {Brief, practical explanation}  
- **{Personalized Suggestion 2}** → {Brief, practical explanation}  
- **{Personalized Suggestion 3}** → {Brief, practical explanation}  

 **A Gentle Reminder:**  
_"{An uplifting, encouraging message to reassure them and remind them of their resilience.}"_ 
`;

const cohere = new CohereClient({
  token: import.meta.env.VITE_COHERE_API_KEY,
  dangerouslyAllowBrowser: true, // keep as you requested (dev only)
});

// Helper: normalize SDK response into a text string
function extractTextFromResponse(res) {
  // Common variations across SDKs / versions
  return (
    res?.text ||
    // shape: { message: { content: [{ type: "output_text", text: "..." }] } }
    res?.message?.content?.[0]?.text ||
    // shape: { output: [{ content: [{ text: "..." }] }] }
    res?.output?.[0]?.content?.[0]?.text ||
    // shape: { generations: [{ text: "..." }] }
    (Array.isArray(res?.generations) && res.generations[0]?.text) ||
    // as a last resort, stringify the object
    (typeof res === "string" ? res : JSON.stringify(res))
  );
}

export async function analyzeJournalEntry(entry) {
  try {
    const sanitizedEntry = String(entry || "").trim();
    if (!sanitizedEntry) {
      return "It looks like your journal entry is empty. Try writing something about how you feel. 💙";
    }

    // Keep the system prompt unchanged, per your request
    const prompt = `${SYSTEM_PROMPT}\n\nUser's Journal Entry:\n${sanitizedEntry}`;

    const modelToUse = "command-a-03-2025"; // supported model

    // 1) Try the newer chat-style messages shape (preferred)
    try {
      const res = await cohere.chat({
        model: modelToUse,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: sanitizedEntry },
        ],
        temperature: 0.7,
        max_tokens: 1024,
      });

      const output = extractTextFromResponse(res);
      return output || "I'm sorry, I couldn't generate a response right now. Please try again later. 💙";
    } catch (err) {
      // If the error explicitly complains about missing "message", retry with legacy shape
      const errStr = (err && (err.message || String(err))) || "";

      console.warn("First chat attempt failed. Error:", errStr);

      if (errStr.includes('Missing required key "message"') || errStr.includes("Missing required key 'message'") || errStr.includes("missing required key \"message\"")) {
        // 2) Retry with the legacy single-message 'message' field
        try {
          const legacyRes = await cohere.chat({
            model: modelToUse,
            // some SDK versions expect 'message' (string) instead of 'messages'
            message: prompt,
            temperature: 0.7,
            max_tokens: 1024,
          });

          const output = extractTextFromResponse(legacyRes);
          return output || "I'm sorry, I couldn't generate a response right now. Please try again later. 💙";
        } catch (legacyErr) {
          console.error("Legacy retry also failed:", legacyErr);
          // If the legacy retry fails, fall through to outer catch
          throw legacyErr;
        }
      }

      // If it's a different error (404/model-deprecation etc.), rethrow to be handled below
      throw err;
    }
  } catch (error) {
    // Helpful debugging logs for you
    console.error("Error generating response:", error);

    // If the error response body includes a model-deprecation message, show a friendly toast
    try {
      const m = error?.message ?? String(error);
      if (m && m.includes("model") && m.toLowerCase().includes("removed")) {
        toast.error("AI model removed — switching models may be required. Check logs.");
      } else if (m && (m.includes("404") || m.toLowerCase().includes("not found"))) {
        toast.error("AI service returned 404. Check model name or endpoint.");
      } else if (m && m.toLowerCase().includes("unauthorized")) {
        toast.error("AI authorization error. Check your API key.");
      }
    } catch (tErr) {
      console.warn("Toast handling failed:", tErr);
    }

    return "I'm sorry, I couldn't process your journal entry right now. Please try again later. 💙";
  }
}
