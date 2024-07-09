import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contactForm" id="kontakt">
      <h1>Kontakt</h1>
      <h3>
        
        Budite slobodni da nas kontaktirate a mi ćemo Vam odgovoriti sa
        najboljom ponudom
      </h3>
      <form>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
