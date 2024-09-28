import { useRef, useState } from "react";

const Contact = () => {
  const forms = useRef();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [messageType, setMessageType] = useState("")
  const [fadeOut, setFadeOut] = useState(false); 

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");
    setFadeOut(false);

    try {
      const res = await fetch(`https://portfolio-1-9luk.onrender.com/api/form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (res.status === 200) {
        setResponseMessage("Message Sent!");
        setMessageType('success');
        setForm({ name: "", email: "", message: "" });
      } else {
        setResponseMessage(
          "Failed to send message. Please try again.\n" + res.statusText
        );
        setMessageType('error');
      }
      setTimeout(() => setFadeOut(true), 3000);
    } catch (err) {
      setResponseMessage("Error sending email.\n" + err.message);
      setMessageType('error');
      setTimeout(() => setFadeOut(true), 3000);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
      <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen" />
        <div className="contact-container">
          <h3 className="head-text">Get in Touch</h3>
          <p className="text-lg text-white-600 mt-3">
            Want to work with me? I&apos;d love to hear from you. Here&apos;s
            how you can reach me...
          </p>
          <form
            ref={forms}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">FullName</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Your Name"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Email"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Message</span>
              <input
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I'd like to work with you..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
          {responseMessage && (
            <p className={`mt-2 ease-in-out ${fadeOut ? 'fade-out': messageType === 'success' ? 'text-green-400' : 'text-red-500'}`}>{responseMessage}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
