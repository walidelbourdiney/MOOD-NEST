import React from "react";
import ButtonJournaling from "./ButtonJournaling";
import { FaHeart, FaChartPie, FaCloudSun, FaHistory } from "react-icons/fa";

const Heading = () => {
  const features = [
    {
      icon: <FaHeart className="text-4xl text-[var(--color-primary)]" />,
      title: "Smart Journaling",
      description: "Express your thoughts freely and receive AI-powered insights to better understand your emotions."
    },
    {
      icon: <FaChartPie className="text-4xl text-[var(--color-primary)]" />,
      title: "Mood Tracking",
      description: "Track your emotional journey with our intuitive emoji system and visualize patterns through beautiful charts."
    },
    {
      icon: <FaCloudSun className="text-4xl text-[var(--color-primary)]" />,
      title: "Weather Integration",
      description: "Understand how weather affects your mood and track correlations between environmental factors and emotions."
    },
    {
      icon: <FaHistory className="text-4xl text-[var(--color-primary)]" />,
      title: "Personal History",
      description: "Save your favorite entries, filter by mood, and reflect on your emotional growth over time."
    }
  ];

  return (
    <div className="Home flex flex-col bg-bg min-h-screen">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 md:px-8 py-12">
        <header className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-8 container mx-auto font-audiowide text-[var(--color-primary)] drop-shadow-lg">
          <h1>Mood Nest</h1>
        </header>

        <main className="container mx-auto flex flex-col items-center text-center mt-10">
          <div className="bg-[var(--color-bg-transparent)] text-[var(--color-text)] drop-shadow-lg max-w-[95%] sm:max-w-[80%] md:max-w-[65%] lg:max-w-[50%] p-5 sm:p-6 md:p-8 rounded-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-Mono text-[var(--color-secondary)] leading-relaxed">
              Welcome to <br /> Mood Nest 🌿 Your <br /> Safe Space to <br /> Reflect
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-Mono text-[var(--color-accent)] mt-3">
              Track your mood, breathe, and grow.
            </p>
          </div>

          <div className="mt-12 sm:mt-16 md:mt-20">
            <ButtonJournaling />
          </div>
        </main>
      </section>

      {/* Features Section */}
      <section className="bg-[var(--color-bg-transparent)] py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] text-center mb-12">
            Your Mental Wellness Journey Starts Here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[var(--color-bg)] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-secondary)] text-center mb-2">
                  {feature.title}
                </h3>
                <p className="text-[var(--color-text)] text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] text-center mb-12">
            Why Choose Mood Nest?
          </h2>
          <div className="space-y-8">
            <div className="bg-[var(--color-bg-transparent)] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[var(--color-secondary)] mb-3">
                AI-Powered Insights
              </h3>
              <p className="text-[var(--color-text)]">
                Get personalized emotional analysis and recommendations based on your journal entries. Our AI helps you understand your patterns and suggests helpful coping strategies.
              </p>
            </div>
            <div className="bg-[var(--color-bg-transparent)] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[var(--color-secondary)] mb-3">
                Privacy & Security
              </h3>
              <p className="text-[var(--color-text)]">
                Your thoughts are private and secure. We use local storage to keep your data on your device, ensuring your journal entries remain personal and protected.
              </p>
            </div>
            <div className="bg-[var(--color-bg-transparent)] p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[var(--color-secondary)] mb-3">
                Beautiful & Intuitive Design
              </h3>
              <p className="text-[var(--color-text)]">
                A calming, user-friendly interface that makes journaling a pleasure. Track your mood with emojis, view insights through beautiful charts, and organize your thoughts effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--color-bg-transparent)] py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-[var(--color-text)] mb-8 max-w-2xl mx-auto">
            Join and found your safe space for emotional expression and growth.
          </p>
          <ButtonJournaling />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-base sm:text-lg md:text-xl font-Mono text-primary text-center container mx-auto rounded py-4 px-4">
        <p>
          Your mind deserves kindness. Let Mood Nest be your retreat for self-care and growth.
        </p>
      </footer>
    </div>
  );
};

export default Heading;
