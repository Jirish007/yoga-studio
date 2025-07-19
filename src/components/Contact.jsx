export default function Contact() {
  return (
    <section className="container my-5" id="contact">
      <h2 className="text-center mb-4">Get In Touch</h2>
      <form className="mx-auto" style={{ maxWidth: "600px" }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input type="text" id="name" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" id="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea id="message" className="form-control" rows="4" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          <i className="bi bi-send me-2"></i>Send Message
        </button>
      </form>
    </section>
  );
}
