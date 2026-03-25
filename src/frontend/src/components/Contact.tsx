import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

export default function Contact() {
  const { actor } = useActor();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      if (actor) {
        await actor.submitContactForm(form.name, form.email, form.message);
      }
      toast.success("Message sent! I'll get back to you soon. 🌿");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2
          className="section-title text-foreground"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          Get In Touch
        </h2>
        <p className="section-subtitle text-foreground/50">
          Let&rsquo;s build something together
        </p>

        <div className="glass-card rounded-3xl p-8 md:p-12 shadow-glass">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              data-ocid="contact.form"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[#4CAF50] text-xs font-semibold uppercase tracking-widest mb-2"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  placeholder="Himanshu Jaiswar"
                  data-ocid="contact.name.input"
                  className="w-full bg-white/10 border border-[#4CAF50]/30 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#4CAF50] focus:bg-white/15 transition-all duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-[#4CAF50] text-xs font-semibold uppercase tracking-widest mb-2"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  placeholder="hello@example.com"
                  data-ocid="contact.email.input"
                  className="w-full bg-white/10 border border-[#4CAF50]/30 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#4CAF50] focus:bg-white/15 transition-all duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[#4CAF50] text-xs font-semibold uppercase tracking-widest mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  placeholder="I'd love to collaborate on..."
                  rows={5}
                  data-ocid="contact.message.textarea"
                  className="w-full bg-white/10 border border-[#4CAF50]/30 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#4CAF50] focus:bg-white/15 transition-all duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                data-ocid="contact.submit.button"
                className="pill-btn w-full bg-[#4CAF50] hover:bg-[#2E7D32] disabled:opacity-50 text-white text-sm flex items-center justify-center gap-2 py-3 shadow-md hover:shadow-card-hover transition-all duration-300"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
              {loading && (
                <p
                  className="text-center text-white/50 text-xs"
                  data-ocid="contact.loading_state"
                >
                  Sending your message...
                </p>
              )}
            </form>

            {/* Contact info */}
            <div className="flex flex-col justify-center gap-8">
              <div>
                <h3
                  className="text-2xl font-extrabold text-[#4CAF50] uppercase tracking-wide mb-2"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Say Hello 🌿
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  I&rsquo;m always open to new opportunities, collaborations, or
                  just a friendly conversation.
                </p>
              </div>

              <div className="space-y-5">
                <a
                  href="mailto:jaiwarhimanshu48@gmail.com"
                  className="flex items-center gap-4 group"
                  data-ocid="contact.email.link"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#4CAF50]/20 border border-[#4CAF50]/30 flex items-center justify-center group-hover:bg-[#4CAF50]/40 transition-colors">
                    <Mail className="w-5 h-5 text-[#4CAF50]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest">
                      Email
                    </p>
                    <p className="text-white font-semibold text-sm">
                      jaiwarhimanshu48@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+919321992310"
                  className="flex items-center gap-4 group"
                  data-ocid="contact.phone.link"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#81D4FA]/20 border border-[#81D4FA]/30 flex items-center justify-center group-hover:bg-[#81D4FA]/40 transition-colors">
                    <Phone className="w-5 h-5 text-[#81D4FA]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest">
                      Phone
                    </p>
                    <p className="text-white font-semibold text-sm">
                      +91 93219 92310
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#A5D6A7]/20 border border-[#A5D6A7]/30 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#A5D6A7]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest">
                      Location
                    </p>
                    <p className="text-white font-semibold text-sm">
                      Mumbai, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
