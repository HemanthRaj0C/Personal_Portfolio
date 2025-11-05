"use client";

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { useState, useEffect } from "react";

export default function ContactMePage() {
  const [gridSize, setGridSize] = useState({ rows: 20, cols: 35 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isFormFocused, setIsFormFocused] = useState(false);

  useEffect(() => {
    const calculateGrid = () => {
      const cellSize = 56;
      const rows = Math.ceil(window.innerHeight / cellSize) + 2;
      const cols = Math.ceil(window.innerWidth / cellSize) + 2;
      setGridSize({ rows, cols });
    };

    calculateGrid();
    window.addEventListener("resize", calculateGrid);
    return () => window.removeEventListener("resize", calculateGrid);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Simulate API call - replace with your actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Success
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full pt-8 bg-black min-h-screen overflow-x-hidden">
      {/* Background Ripple Effect */}
      <BackgroundRippleEffect
        rows={gridSize.rows}
        cols={gridSize.cols}
        cellSize={56}
      />

      {/* Main Content */}
      <main className={`relative z-10 flex min-h-screen items-center justify-center p-4 sm:p-8 py-24 transition-all ${isFormFocused ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div className="w-full max-w-2xl pointer-events-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-400">
              Have a question or want to work together? I'd love to hear from you.
            </p>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            onFocus={() => setIsFormFocused(true)}
            onBlur={() => setIsFormFocused(false)}
            className="space-y-6 bg-neutral-950/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-800/50 shadow-2xl"
          >
            {/* Name Field */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-neutral-900/80 border border-neutral-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 cursor-target"
                placeholder="John Doe"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-neutral-900/80 border border-neutral-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 cursor-target"
                placeholder="john@example.com"
              />
            </div>

            {/* Subject Field */}
            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-neutral-900/80 border border-neutral-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 cursor-target"
                placeholder="Project Inquiry"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-neutral-900/80 border border-neutral-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none cursor-target"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-target transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>

            {/* Status Messages */}
            {submitStatus.type && (
              <div
                className={`p-4 rounded-lg text-center ${
                  submitStatus.type === "success"
                    ? "bg-green-500/10 border border-green-500/50 text-green-400"
                    : "bg-red-500/10 border border-red-500/50 text-red-400"
                }`}
              >
                {submitStatus.message}
              </div>
            )}
          </form>

          {/* Additional Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm cursor-target">
              You can also reach me at{" "}
              <a
                href="mailto:your.email@example.com"
                className="text-white hover:text-gray-300 transition-colors underline cursor-target"
              >
                your.email@example.com
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
