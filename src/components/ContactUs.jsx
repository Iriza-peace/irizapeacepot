import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {

  const [isSent, setIsSent] = useState(false);

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lhecwwm',
     'template_2bfinh7',
      form.current,
     '2Og9mgfzgdJsaahjp')
      .then((result) => {
        console.log(result.text);
        console.log("message sent")
        setIsSent(true); 
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
       {isSent ? (
        <div className="text-green-500 text-2xl flex justify-center items-center text-bold ">MESSAGE SENT SUCCESSFULLY😉</div>
      ) : (
      <div className="flex justify-center items-center ">
      <form ref={form} onSubmit={sendEmail} className="w-1/3 px-5 py-8 bg-[#1f2937] border border-md text-white">
      <h1 className=" p-4 font-bold text-3xl  ">HAVE A PROJECT YOU WANT TO DO WITH ME 😊🥴 ?</h1>
        <label className="block p-4 font-bold text-yellow-400">NAME</label>
        <input type="text" name="user_name" className="block text-black w-full bg-gray-100  rounded-md  py-4" />
        <label className="block p-4 font-bold text-yellow-400">Email</label>
        <input type="email" name="user_email" className="block text-black w-full bg-gray-100  rounded-md py-4"/>
        <label className="block p-4 font-bold text-yellow-400">Message</label>
        <textarea name="message" className="block text-black w-full border bg-gray-100  rounded-md"  />
        <p className='py-6'>
        <input type="submit" value="SEND" className=" block w-1/3 border-2 p-4 border-yellow-400 rounded-full text-xl font-md " />
        </p>
      </form>
    </div>
      )}
    </div>


  );
};
export default ContactUs;