import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// IMPORTANT:
// This component is VALID for React (Vite / CRA)
// SEO meta tags should be placed in index.html OR handled via react-helmet

export default function Portfolio() {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setStatus("Message sent successfully.");
        e.target.reset();
      })
      .catch(() => {
        setStatus("Failed to send message. Please email directly.");
      });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src="/profile.jpg"
            alt="Adarsh Kumar – Freelance Web Developer"
            className="rounded-2xl shadow-xl w-64 mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold mb-4">Adarsh Kumar</h1>
            <p className="text-lg mb-4">
              Global Freelance Web Developer & Video Editor helping businesses grow worldwide.
            </p>
            <Button asChild className="rounded-full px-8">
              <a
                href="/Adarsh_Kumar_Global_Freelancer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-lg">
          I’m Adarsh Kumar from Patna, Bihar (India), working as a freelancer with
          clients in the US, Australia, and Europe. I build fast, reliable websites
          and professional video content that helps businesses build trust and grow online.
        </p>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Responsive Website Development",
              "Website Redesign & Performance Optimization",
              "Professional Business Video Editing",
              "Ongoing Website Support & Maintenance",
            ].map((service, i) => (
              <Card key={i} className="rounded-2xl shadow-md">
                <CardContent className="p-6 text-lg">{service}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-8">Selected Work</h2>
        <div className="grid gap-6">
          <a href="https://booksvidya.com" target="_blank" rel="noopener noreferrer">
            <Card className="rounded-2xl hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">Books Vidya</h3>
                <p className="text-sm text-slate-600">Educational Website</p>
              </CardContent>
            </Card>
          </a>

          <a href="https://varadmudra.com" target="_blank" rel="noopener noreferrer">
            <Card className="rounded-2xl hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">Varad Mudra</h3>
                <p className="text-sm text-slate-600">Business Website</p>
              </CardContent>
            </Card>
          </a>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center">What Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <p className="italic text-slate-700">“Adarsh delivered our website exactly as needed. Clean, fast, and professional.”</p>
                <p className="mt-4 font-semibold">— Business Owner</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <p className="italic text-slate-700">“Great communication and very reliable. Would definitely work with him again.”</p>
                <p className="mt-4 font-semibold">— Real Estate Client</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-gradient-to-br from-slate-100 to-slate-200 py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src="/profile.jpg"
            alt="Adarsh Kumar contact"
            className="rounded-2xl shadow-lg w-72 mx-auto"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />

          <div>
            <h2 className="text-3xl font-semibold mb-4">Let’s Work Together</h2>
            <p className="text-slate-600 mb-6">
              Have a project or idea? I help businesses globally with websites and professional video content.
            </p>

            <form onSubmit={sendEmail} className="grid gap-4">
              <input name="name" placeholder="Your Name" required className="p-3 rounded-lg border" />
              <input name="email" type="email" placeholder="Your Email" required className="p-3 rounded-lg border" />
              <textarea name="message" placeholder="Tell me about your project" required className="p-3 rounded-lg border" />
              <Button type="submit" className="w-fit px-8">Send Message</Button>
              {status && <p className="text-sm text-slate-600">{status}</p>}
            </form>

            <p className="mt-4 text-sm text-slate-600">Or email directly: <b>adarsh.devcut@gmail.com</b></p>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-slate-500">
        © 2026 Adarsh Kumar · Working Globally
      </footer>
    </div>
  );
}
