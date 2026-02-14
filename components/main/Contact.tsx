"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full py-20 px-6 md:px-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="text-center mb-16">
          <motion.h2
            variants={slideInFromLeft(0.3)}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Touch</span>
          </motion.h2>
          <motion.p
            variants={slideInFromLeft(0.5)}
            className="text-gray-400 max-w-[600px] mx-auto"
          >
            Have a question or want to work together? I'd love to hear from you. Feel free to reach out!
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <motion.div
            variants={slideInFromLeft(0.7)}
            className="flex-1 flex flex-col justify-center gap-8"
          >
            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                <MapPinIcon className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Location</h3>
                <p className="text-gray-400">Kathmandu, Nepal</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                <EnvelopeIcon className="h-6 w-6 text-cyan-500" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <p className="text-gray-400">shrestharohan495@gmail.com</p>
              </div>
            </div>

            <div className="pt-8 border-t border-[#7042f861]">
              <p className="text-gray-400 text-sm">
                I typically reply within 24 hours. Looking forward to connecting with you!
              </p>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            variants={slideInFromRight(0.7)}
            className="flex-1 bg-[#0300145e] border border-[#7042f861] rounded-lg p-8 relative z-10"
          >
            {submitted ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-5xl mb-4">✨</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
                  <p className="text-gray-400">Your message has been sent. I'll get back to you soon!</p>
                </div>
              </div>
              ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 pointer-events-auto">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-[#1a0033] border border-[#7042f861] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors relative z-20"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full bg-[#1a0033] border border-[#7042f861] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors relative z-20"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message..."
                    rows={5}
                    className="w-full bg-[#1a0033] border border-[#7042f861] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none relative z-20"
                  />
                </div>

                {error && <p className="text-red-400 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="button-primary py-3 text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
