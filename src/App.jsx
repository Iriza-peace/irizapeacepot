import React from 'react';
import './App.css';
import iriza from './assets/iriza.png';
import Projects from './components/Projects';
import Testimonies from './components/Testimonies';
import ContactUs from './components/ContactUs';
import Footer from './components/footer'

function App() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTestimonies = () => {
    const testimoniesSection = document.getElementById('testimonies-section');
    if (testimoniesSection) {
      testimoniesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToContacts = () => {
    const contactsSection = document.getElementById('contacts-section');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <div className="App relative">
      <div className="flex font-['Poppins'] flex-wrap space-x-z">
        <div>
          <p className='m-6'>IRIZA PEACE</p>
        </div>
        <div className="m-6 font-medium text-black-400 space-x-24 absolute z-10">
         
          <a href="#" className="hover:underline" onClick={scrollToProjects}>Projects</a>
          <a href="#" className="hover:underline" onclick={scrollToTestimonies}>Testimonies</a>
          <a href="#" className="hover:underline" onClick={scrollToContacts}>Contacts</a>
        </div>
      </div>
      <div>
        <div className='m-16'>
          <p className='font-bold text-yellow-400 m-6'>UI UX DESIGNER</p>
          <p className='font-bold text-6xl m-6'>Hello, my name is</p>
          <p className='font-bold text-6xl m-6'>IRIZA PEACE 🥴</p>
          <p className='font-light mx-6 my-3 text-gray-600'>Short text with details about you,</p>
          <p className='font-light mx-6 my-3 text-gray-600'>what you do or your professional career.</p>
          <p className='font-light mx-6 my-3 text-gray-600'>You can add more information on the about page.</p>

          <div className="m-6">
            <a href="#" class="text-black hover:bg-yellow-400 hover:text-white ring-2 ring-yellow-400 font-medium rounded-lg text-sm px-16 py-2.5 mr-4 mb-2" onClick={scrollToProjects}>PROJECTS</a>
            <a href="#" class="text-black hover:bg-yellow-400 hover:text-white ring-2 ring-yellow-400 font-medium rounded-lg text-sm px-16 py-2.5 mr-4 mb-2">LINKED IN</a>
          </div>
        </div>
        <div className='absolute top-0 right-0'>
          <img src={iriza} alt="irizaphoto" />
        </div>
      </div>

      <div className='space-y-12'>
        <h1 id="projects-section" className='font-bold text-3xl underline decoration-yellow-400 flex items-center justify-center'>PROJECTS</h1>
        <Projects />
        <h1 id="testimonies-section" className='font-bold text-3xl underline decoration-yellow-400 flex items-center justify-center'>TESTIMONIES</h1>
        <Testimonies />
        <h1 id="contacts-section"className='font-bold text-3xl underline decoration-yellow-400 flex items-center justify-center'>CONTACT ME</h1>
        <ContactUs />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
