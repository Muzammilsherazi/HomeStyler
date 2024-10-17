import React, { useState , useEffect} from "react";
import contactCss from './contact css/contact.module.css';
import img from '../../assets/images/contact-banner-img.jpg'


function Contact(props) {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
}, []);


  const [feedName, setFeedName] = useState('');
  const [feedEmail, setFeedEmail] = useState('');
  const [feedMsg, setFeedMsg] = useState('');

  const [feedNameErr, setFeedNameErr] = useState('');
  const [feedEmailErr, setFeedEmailErr] = useState('');
  const [feedMsgErr, setFeedMsgErr] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    // Reset errors before validation
    setFeedNameErr('');
    setFeedEmailErr('');
    setFeedMsgErr('');

    if (feedName === '') {
      setFeedNameErr('Please enter name!');
      hasError = true;
    }
    if (feedEmail === '') {
      setFeedEmailErr('Please enter email!');
      hasError = true;
    } else if (!emailRegex.test(feedEmail)) {
      setFeedEmailErr('Please enter a valid email!');
      hasError = true;
    }
    if (feedMsg === '') {
      setFeedMsgErr('Please write your message!');
      hasError = true;
    }

    if (!hasError) {
      alert("Thank you for contacting us!")
      setSuccessMsg('Feedback Successfully Sent!');
      // Clear the input fields
      setFeedName('');
      setFeedEmail('');
      setFeedMsg('');

      // Hide success message after 2 seconds
      setTimeout(() => {
        setSuccessMsg('');
      }, 2000);
    }
  };

  // Function to allow only alphabetic characters and spaces
  const handleNameChange = (e) => {
    const { value } = e.target;
    const regex = /^[a-zA-Z\s]*$/; // Allow letters and spaces only
    if (regex.test(value)) {
      setFeedName(value);
      setFeedNameErr('');
    } else {
      setFeedNameErr('Name can only contain letters and spaces.');
    }
  };

  return (
    <>
      <div className={contactCss.contact_section}>
        <div className={contactCss.banner}>
          <img src={img} alt="" />
          <h1 className={contactCss.bannerH1}>Contact Us</h1>
        </div>
        <div className={contactCss.contact_us}>

          <div id={contactCss.feedback_form_container}>
            <form id={contactCss.feedback_form} onSubmit={handleSubmit}>
              <div className={contactCss.form_group}>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter Your Name"
                  className={feedNameErr ? contactCss.error : ''}
                  value={feedName}
                  onChange={handleNameChange}
                />
                {feedNameErr && <span className={contactCss.error_msg}>{feedNameErr}</span>}
              </div>

              <div className={contactCss.form_group}>
                <input
                  id="email"
                  type="text"
                  placeholder="Enter Your Email"
                  className={feedEmailErr ? contactCss.error : ''}
                  value={feedEmail}
                  onChange={(e) => {
                    setFeedEmail(e.target.value);
                    if (emailRegex.test(e.target.value)) setFeedEmailErr('');
                    if (e.target.value) setFeedEmailErr('');
                  }}
                />
                {feedEmailErr && <span className={contactCss.error_msg}>{feedEmailErr}</span>}
              </div>

              <div className={contactCss.form_group}>
                <textarea
                  id="message"
                  placeholder="Enter Your Message"
                  className={feedMsgErr ? contactCss.error : ''}
                  value={feedMsg}
                  onChange={(e) => {
                    setFeedMsg(e.target.value);
                    if (e.target.value) setFeedMsgErr('');
                  }}
                />
                {feedMsgErr && <span className={contactCss.error_msg}>{feedMsgErr}</span>}
              </div>

              <button type="submit" id={contactCss.submit_btn} >Submit</button>            </form>

            {successMsg && (
              <div id="formMsg">
                <p>{successMsg}</p>
              </div>
            )}
          </div>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924237.7102832987!2d66.49592655461542!3d25.19298358086938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1726566632175!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </>
  );
}

export default Contact;