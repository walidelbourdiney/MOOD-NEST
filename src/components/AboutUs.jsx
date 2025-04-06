import React from "react";
import { FaHeart, FaCode, FaLightbulb, FaUsers } from "react-icons/fa";
import walid from "../assets/walid.jpg";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Walid Ezzat",
      role: "Founder & Developer",
      bio: "Passionate about mental health and technology, Walid created Mood Nest to help people better understand and manage their emotions through journaling and AI-powered insights.",
      image: walid,
    },
    // Add more team members as needed
  ];

  const values = [
    {
      icon: <FaHeart className="text-3xl text-[var(--color-primary)]" />,
      title: "Empathy First",
      description: "We believe in creating a safe, judgment-free space where users can express themselves authentically."
    },
    {
      icon: <FaCode className="text-3xl text-[var(--color-primary)]" />,
      title: "Innovation",
      description: "Leveraging cutting-edge AI technology to provide meaningful insights and personalized support."
    },
    {
      icon: <FaLightbulb className="text-3xl text-[var(--color-primary)]" />,
      title: "User-Centered Design",
      description: "Every feature is thoughtfully designed with the user's mental well-being and experience in mind."
    },
    {
      icon: <FaUsers className="text-3xl text-[var(--color-primary)]" />,
      title: "Community",
      description: "Building a supportive environment where users can feel connected and understood."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto my-16 p-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
          About Mood Nest
        </h1>
        <p className="text-lg text-[var(--color-text)] max-w-3xl mx-auto">
          Mood Nest is more than just a journaling app—it's a companion on your journey to emotional well-being. 
          We combine the power of AI with thoughtful design to create a space where you can safely explore your thoughts and feelings.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-16 bg-[var(--color-bg-transparent)] p-8 rounded-xl text-center">
        <h2 className="text-2xl font-semibold text-[var(--color-secondary)] mb-4">Our Mission</h2>
        <p className="text-[var(--color-text)] text-lg leading-relaxed">
          At Mood Nest, our mission is to make mental wellness accessible, engaging, and effective for everyone. 
          We believe that understanding your emotions is the first step toward better mental health, and we're committed 
          to providing the tools and insights you need on that journey.
        </p>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-secondary)] mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-[var(--color-bg-transparent)] p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-medium text-[var(--color-primary)] mb-2">{value.title}</h3>
              <p className="text-[var(--color-text)]">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-[var(--color-secondary)] mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-[var(--color-bg-transparent)] p-6 rounded-xl text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-[var(--color-bg)] border-2 border-[var(--color-primary)]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                  style={{ imageRendering: "auto" }}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/150?text=Team+Member";
                  }}
                />
              </div>
              <h3 className="text-xl font-medium text-[var(--color-primary)]">{member.name}</h3>
              <p className="text-[var(--color-accent)] mb-3">{member.role}</p>
              <p className="text-[var(--color-text)]">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="mb-16 bg-[var(--color-bg-transparent)] p-8 rounded-xl text-center">
        <h2 className="text-2xl font-semibold text-[var(--color-secondary)] mb-4">Our Story</h2>
        <div className="space-y-4 text-[var(--color-text)]">
          <p>
            Mood Nest was born from a personal journey of self-discovery and a desire to make mental wellness more accessible. 
            After experiencing the transformative power of journaling and emotional awareness, we set out to create a tool that 
            would help others on their own mental health journeys.
          </p>
          <p>
            What started as a simple journaling app has evolved into a comprehensive mental wellness platform, powered by 
            advanced AI technology. We've carefully designed every feature to provide not just a place to write, but a 
            companion that offers insights, tracks patterns, and supports your emotional growth.
          </p>
          <p>
            Today, Mood Nest continues to grow and evolve, guided by our commitment to user privacy, emotional well-being, 
            and technological innovation. We're grateful to be part of your mental wellness journey.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold text-[var(--color-secondary)] mb-4">Get in Touch</h2>
        <p className="text-[var(--color-text)] mb-6">
          Have questions, feedback, or suggestions? We'd love to hear from you!
        </p>
        <a 
          href="mailto:walidelbourdiney25@gmail.com" 
          className="inline-block px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg font-medium hover:bg-[var(--color-secondary)] transition-colors duration-200"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutUs; 