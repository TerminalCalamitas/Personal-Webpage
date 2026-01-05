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
        <div className="px-4 w-150 text-center">
          <h2 className={h2Style}>Contact Me</h2>

          <p className="text-white/70 max-w-xl mx-auto mb-10">
            Have a question, want to collaborate, or just want to get in touch?
            Click the button below to send me an email.
          </p>

          <button
            type="button"
            onClick={handleEmailClick}
            className=" bg-coral-red-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Send Email
          </button>

        </div>
      </RevealOnScroll>
    </section>
  );
};
