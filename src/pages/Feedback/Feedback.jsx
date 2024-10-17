import React , {useState , useEffect} from "react";
import feedbackCss from './feedback css/feedback.module.css'
import div1 from '../../assets/images/3.jpeg'
import div4 from '../../assets/images/2.jpeg'
import div2 from '../../assets/images/1.jpeg'
import img from '../../assets/images/feedback-banner-img.jpg'

function Feedback() {

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
      alert('Feedback Successfully Sent!')
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
      <div className={feedbackCss.feedback_section}>
        <div className={feedbackCss.banner}>
          <img src={img} alt="" />
          <h1 className={feedbackCss.bannerH1}>Feedback Form</h1>
        </div>
        <div className={`${feedbackCss.feedback}`}>

          <div id={feedbackCss.feedback_form_container}>
            <form id={feedbackCss.feedback_form} onSubmit={handleSubmit}>
              <div className={feedbackCss.form_group}>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter Your Name"
                  className={feedNameErr ? feedbackCss.error : ''}
                  value={feedName}
                  onChange={handleNameChange}
                />
                {feedNameErr && <span className={feedbackCss.error_msg}>{feedNameErr}</span>}
              </div>

              <div className={feedbackCss.form_group}>
                <input
                  id="email"
                  type="text"
                  placeholder="Enter Your Email"
                  className={feedEmailErr ? feedbackCss.error : ''}
                  value={feedEmail}
                  onChange={(e) => {
                    setFeedEmail(e.target.value);
                    if (emailRegex.test(e.target.value)) setFeedEmailErr('');
                    if (e.target.value) setFeedEmailErr('');
                  }}
                />
                {feedEmailErr && <span className={feedbackCss.error_msg}>{feedEmailErr}</span>}
              </div>

              <div className={feedbackCss.form_group}>
                <textarea
                  id="message"
                  placeholder="Enter Your Message"
                  className={feedMsgErr ? feedbackCss.error : ''}
                  value={feedMsg}
                  onChange={(e) => {
                    setFeedMsg(e.target.value);
                    if (e.target.value) setFeedMsgErr('');
                  }}
                />
                {feedMsgErr && <span className={feedbackCss.error_msg}>{feedMsgErr}</span>}
              </div>

              <button type="submit" id={feedbackCss.submit_btn}>Submit</button>            </form>

            {successMsg && (
              <div id="formMsg">
                <p>{successMsg}</p>
              </div>
            )}
          </div>

          <div className={feedbackCss.parent}>
            <img src={div1} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback