import React, { useState } from "react";
import ReactMarkdown from "react-markdown"; // for styling text property
import useNotesStore from "../stores/useNoteStore";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { format } from "date-fns"; // For formatting timestamps

const JournalingHistory = () => {
  const feelings = [
    { name: "Happiness", emoji: "😊" },
    { name: "Sadness", emoji: "😢" },
    { name: "Anger", emoji: "😠" },
    { name: "Fear", emoji: "😨" },
    { name: "Surprise", emoji: "😯" },
    { name: "Disgust", emoji: "🤢" },
  ];
  const { deleteNote, notes, clearNotes } = useNotesStore();
  const [selectedMood, setSelectedMood] = useState("");

  const filteredElements = selectedMood
    ? notes.filter((note) => note.mood === selectedMood)
    : notes;

  const moodCounts = notes.reduce((acc, note) => {
    acc[note.mood] = (acc[note.mood] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(moodCounts).map(([mood, count]) => ({
    name: mood,
    value: count,
  }));

  const COLORS = [
    "#004225", // Primary
    "#007a5e", // Secondary
    "#c5a880", // Accent
    "#f8f9f3", // Background
    "#1c1c1c", // Text
    "#8f8f8f", // Neutral (fallback)
  ];

  return (
    <div className="flex flex-col container justify-center items-center mx-auto gap-6 p-4">
      {notes.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 ">
            Mood Distribution
          </h2>
          {/* Pie Chart */}
          <div className="w-full max-w-2xl ">
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  fill="#8884d8"
                  label={({ name, percent }) =>
                    `${name} (${(percent * 100).toFixed(0)}%)`
                  }
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* Journaling Notes */}

          <h3 className="text-lg text-[var(--color-text)] mb-4">
            Filter your journal history by mood?
          </h3>

          <div className="flex flex-wrap justify-center gap-4 p-4 bg-[var(--color-bg-transparent)] rounded-lg shadow-md">
            {feelings.map(({ name, emoji }) => (
              <button
                key={name}
                onClick={() => setSelectedMood(name)}
                className="w-16 h-16 flex items-center justify-center text-2xl rounded-full border-2 border-[var(--color-secondary)] bg-[var(--color-bg)] shadow-md transition-all duration-300 transform hover:scale-110 hover:bg-[var(--color-secondary)] hover:text-white focus:ring-4 focus:ring-[var(--color-secondary)] active:bg-[var(--color-primary)]"
              >
                {emoji}
              </button>
            ))}
          </div>

          <p className="mt-4 text-xl text-[var(--color-accent)]">
            {selectedMood
              ? `Showing journal entries where you felt ${selectedMood.toLowerCase()}. Take a moment to reflect on your journey.`
              : "Tap an emoji to view journal entries matching that mood."}
          </p>

          {filteredElements
            .slice()
            .reverse()
            .map((note) => (
              <div
                key={note.id}
                className="flex flex-col container justify-center items-center shadow-2xl bg-bg gap-6 text-left p-4 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                  {note.mood}
                </h3>
                <div className="prose max-w-none text-[var(--color-text)] px-4">
                  <ReactMarkdown>{note.text}</ReactMarkdown>
                </div>
                <div className="flex justify-between items-center  w-[90%] mt-4">
                  <button
                    onClick={() => deleteNote(note.id)}
                    className="bg-[var(--color-primary)] text-[var(--color-accent)] px-6 py-3 rounded-md cursor-pointer shadow-md hover:bg-[var(--color-secondary)] transition hover:text-black"
                  >
                    Delete
                  </button>
                  {/* Timestamp */}
                  <p className="text-sm text-[var(--color-text)] italic bg-accent p-2 rounded-2xl">
                    {format(new Date(note.timestamp), "MMM dd, yyyy HH:mm")}
                  </p>
                </div>
              </div>
            ))}
          <button
            onClick={clearNotes}
            className="bg-[var(--color-primary)] text-[var(--color-accent)] px-6 py-3 rounded-md  cursor-pointer  shadow-md hover:bg-[var(--color-secondary)] transition hover:text-black"
          >
            Clear All Notes!
          </button>
        </>
      ) : (
        <h2 className=" text-primary text-xl mt-72">
          Your journey starts here once you begin journaling, your history will
          appear. 😊
        </h2>
      )}
    </div>
  );
};

export default JournalingHistory;
