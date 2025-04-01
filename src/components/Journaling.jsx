import React, { useState, useEffect, useRef } from "react";
import { analyzeJournalEntry } from "../cohoreAI";
import ReactMarkdown from "react-markdown";
import useNotesStore from "../stores/useNoteStore";
import { FaHeart } from "react-icons/fa";
import toast from 'react-hot-toast';

const Journaling = () => {
  const { addNote, addFav } = useNotesStore();
  const targetRef = useRef(null);
  const [entry, setEntry] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [resLoading, setResLoading] = useState(false);
  const [mood, setMood] = useState("Neutral");
  const [favorites, setFavorites] = useState(false);

  const addFavorite = () => {
    if (!favorites) {
      setFavorites(true);
      addFav(response, mood);
      toast.success('Added to favorites');
    }
  };

  useEffect(() => {
    if (response) {
      setResLoading(true);
      const timer = setTimeout(() => setResLoading(false), 4000);
      const scrollTimer = setTimeout(() => {
        targetRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => {
        clearTimeout(timer);
        clearTimeout(scrollTimer);
      };
    }
  }, [response]);

  const feelings = [
    { name: "Happiness", emoji: "😊" },
    { name: "Sadness", emoji: "😢" },
    { name: "Anger", emoji: "😠" },
    { name: "Fear", emoji: "😨" },
    { name: "Surprise", emoji: "😯" },
    { name: "Disgust", emoji: "🤢" },
  ];

  const handleAnalyze = async () => {
    if (!entry.trim()) {
      toast.error("Please enter a journal entry!");
      return;
    }
    setLoading(true);
    try {
      const aiResponse = await analyzeJournalEntry(entry);
      setResponse(aiResponse);
      addNote(aiResponse, mood);
      setEntry("");
      setFavorites(false);
    } catch (error) {
      console.error("AI Error:", error);
      setResponse("Oops! Something went wrong. Please try again. 💙");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto my-16 p-8">
      <div className="space-y-8">
        {/* Welcome Message */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-medium text-[var(--color-primary)]">Welcome to Your Safe Space</h2>
          <p className="text-[var(--color-text)] text-lg">
            Take a moment to breathe and express yourself freely. No judgment, just understanding.
          </p>
        </div>

        {/* Mood Selection */}
        <div className="text-center space-y-4">
          <h3 className="text-lg text-[var(--color-text)]">How are you feeling?</h3>
          <p className="text-[var(--color-accent)] text-sm">
            {mood === "Neutral" 
              ? "Feeling neutral? That's perfectly fine! You can start writing right away."
              : `You're feeling ${mood.toLowerCase()}. Take a moment to reflect on that.`}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {feelings.map(({ name, emoji }) => (
              <button
                key={name}
                onClick={() => setMood(name)}
                className={`w-12 h-12 flex items-center justify-center text-xl rounded-full transition-all duration-200 ${
                  mood === name 
                    ? "bg-[var(--color-primary)] text-white scale-110" 
                    : "bg-[var(--color-bg-transparent)] hover:bg-[var(--color-secondary)] hover:text-white"
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Journal Entry */}
        <div className="space-y-4">
          <div className="space-y-2">
            <textarea
              rows="6"
              className="w-full p-4 text-lg rounded-lg bg-[var(--color-bg-transparent)] text-[var(--color-text)] border border-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all duration-200"
              placeholder="Write whatever comes to mind. Your thoughts are safe here..."
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
            />
            <p className="text-sm text-[var(--color-accent)] text-center">
              Don't worry about perfect writing. Just let your thoughts flow naturally.
            </p>
          </div>
          <button
            className="w-full py-3 bg-[var(--color-primary)] text-white rounded-lg font-medium hover:bg-[var(--color-secondary)] transition-colors duration-200 disabled:opacity-50"
            onClick={handleAnalyze}
            disabled={loading}
          >
            {loading ? "Processing..." : "Reflect & Get Insights"}
          </button>
        </div>

        {/* AI Response */}
        {response && (
          <div className="mt-8 space-y-4" ref={targetRef}>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-[var(--color-secondary)]">Your Personal Insights</h3>
              <FaHeart
                className={`cursor-pointer text-xl transition-colors duration-200 ${
                  favorites ? "text-red-500" : "text-gray-400 hover:text-red-400"
                }`}
                onClick={addFavorite}
              />
            </div>
            <div className={`bg-[var(--color-bg-transparent)] p-6 rounded-lg text-[var(--color-text)] ${
              resLoading ? "animate-pulse" : ""
            }`}>
              <ReactMarkdown>{response}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Journaling;
