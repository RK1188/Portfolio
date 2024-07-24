  import React from "react";
  import "./Contact.css";
  import theme_pattern from "../../assets/theme_pattern.svg";
  import mail from "../../assets/mail_icon.svg";
  import location from "../../assets/location_icon.svg";
  import call from "../../assets/call_icon.svg";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  const Contact = () => {
    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);

      formData.append("access_key", "d0b4fc14-d948-4721-bd97-65770bf1de3c");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error("Something went wrong, please try again later.");
      }
    };

    return (
      <div id='contact' className="contact">
        <ToastContainer />
        <div className="contact-title">
          <h1>Get in touch</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I am currently available to take on a new project</p>
            <div className="contact-details">
              <div className="contact-detail">
                <img src={mail} alt="" /><p>ranjithrk1188@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src={location} alt="" /><p>Coimbatore, Tamil Nadu</p>
              </div>
              <div className="contact-detail">
                <img src={call} alt=""/><p>9629856959</p>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="contact-right">
            <label>Your Name</label>
            <input type="text" placeholder="Enter Your Name" name='name' />
            <label>Your Email</label>
            <input type="email" placeholder="Enter your email" name='email' />
            <label>Write Your Message Here</label>
            <textarea name='message' rows='8' placeholder="Enter your message" />
            <button type='submit' className="contact-submit">Submit</button>
          </form>
        </div>
      </div>
    );
  };

  export default Contact;
//   import React from "react";
// import "./Contact.css";
// import theme_pattern from "../../assets/theme_pattern.svg";
// import mail from "../../assets/mail_icon.svg";
// import location from "../../assets/location_icon.svg";
// import call from "../../assets/call_icon.svg";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import emailjs from 'emailjs-com';

// const Contact = () => {
//   const onSubmit = (event) => {
//     event.preventDefault();

//     emailjs.sendForm('service_omaaxl9', 'YOUR_TEMPLATE_ID', event.target, 'YOUR_USER_ID')
//       .then((result) => {
//         toast.success("Message sent successfully!");
//       }, (error) => {
//         toast.error("Something went wrong, please try again later.");
//       });

//     event.target.reset();
//   };

//   return (
//     <div id='contact' className="contact">
//       <ToastContainer />
//       <div className="contact-title">
//         <h1>Get in touch</h1>
//         <img src={theme_pattern} alt="" />
//       </div>
//       <div className="contact-section">
//         <div className="contact-left">
//           <h1>Let's talk</h1>
//           <p>I am currently available to take on a new project</p>
//           <div className="contact-details">
//             <div className="contact-detail">
//               <img src={mail} alt="" /><p>ranjithrk1188@gmail.com</p>
//             </div>
//             <div className="contact-detail">
//               <img src={location} alt="" /><p>Coimbatore, Tamil Nadu</p>
//             </div>
//             <div className="contact-detail">
//               <img src={call} alt=""/><p>9629856959</p>
//             </div>
//           </div>
//         </div>
//         <form onSubmit={onSubmit} className="contact-right">
//           <label>Your Name</label>
//           <input type="text" placeholder="Enter Your Name" name='name' />
//           <label>Your Email</label>
//           <input type="email" placeholder="Enter your email" name='email' />
//           <label>Write Your Message Here</label>
//           <textarea name='message' rows='8' placeholder="Enter your message" />
//           <button type='submit' className="contact-submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

