import { RevealOnScroll } from "../RevealOnScroll.jsx";
import { h2Style} from "../../styles.js";

export const Contact = () => {
  const handleEmailClick = (e) => {
    e.preventDefault();

    const username = "terminal";
    const domain = "calamitas.dev";
    const subject = encodeURIComponent("Contact from your website");
    const body = encodeURIComponent("Hi,\n\nI found your website and wanted to get in touch.\n\nThanks!")

    window.location.href = `mailto:${username}@${domain}?subject=${subject}&body=${body}`;

  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className={h2Style}>Contact Me</h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-center text-gray-300 mb-6">
              Have a question, want to collaborate, or just want to get in touch?
              Click the button below to send me an email.
            </p>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleEmailClick}
                className="bg-coral-red-600 text-xl font-bold text-white py-3 px-6 rounded transition relative overflow-hidden hover:-translate-y-0.5
                              hover:shadow-[0_0_15px_rgba(136, 20, 21, 0.4)]"
              >
                Send Email
              </button>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
