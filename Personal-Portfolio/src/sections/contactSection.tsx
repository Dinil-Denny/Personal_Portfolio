import React, { useState } from "react";
import { Button } from "../components/ui/button";

const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    // Capture form reference BEFORE async operations — React nullifies
    // e.currentTarget after the handler yields, so we must grab it now.
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Append the access key safely
    formData.append("access_key", import.meta.env.WEB3FORMS_ACCESS_KEY || "");

    // Convert FormData to a standard JSON object (Web3Forms recommended for AJAX)
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: json
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        form.reset();
        
        // Reset success state after a few seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        console.error("Error submitting form:", data);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Error making request:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="w-full py-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-wide uppercase mb-4">
            Get in Touch
          </h2>
          <p className="text-white/80 text-lg md:text-xl">
            Have a project in mind or just want to say hi? I'd love to hear from you!
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            
            {/* Subject - useful for Web3Forms so you know what the email is about */}
            <input type="hidden" name="subject" value="New Contact Form Submission from Personal Portfolio" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-white font-medium ml-1">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-white font-medium ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-white font-medium ml-1">Message</label>
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all resize-none"
                placeholder="What would you like to discuss?"
              ></textarea>
            </div>

            <div className="flex flex-col items-center pt-6">
              <Button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className={`w-full md:w-auto px-12 py-7 rounded-full font-bold text-lg transition-all ${
                  status === "success" 
                    ? "bg-green-500 hover:bg-green-600 text-white" 
                    : "bg-brand-orange hover:bg-[#e06900] hover:scale-105 active:scale-95 text-white"
                } shadow-lg disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed`}
              >
                {status === "submitting" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
              </Button>
              
              {status === "error" && (
                <p className="text-red-400 mt-4 text-sm font-medium">
                  Oops! Something went wrong. Please try again later.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
