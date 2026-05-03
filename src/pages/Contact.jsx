export const Contact = () => {
  const handleFormSubmit = (formData) => {
    // console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            name="username"
            autoComplete="off"
            className="form-control"
            required
          />

          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            autoComplete="off"
            className="form-control"
            required
          />

          <textarea
            className="form-control"
            name="message"
            rows="10"
            placeholder="Enter you message"
            autoComplete="off"
            required
          />

          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
