import React from 'react';
import Project1 from '../assets/project1.png';       // MIFOTRA
import Project2 from '../assets/project2.png';    // UGANDA PORTAL
import Project3 from '../assets/project3.png';    // RRA REDESIGN
import Project4 from '../assets/project4.png';    // FOOD HUB

function Projects() {
  const projectData = [
    {
      image: Project1,
      title: 'MIFOTRA – Government Service Design',
      description:
        'Led UI/UX design for public service digital systems, including dashboards and citizen platforms at MIFOTRA. Focused on accessibility, efficiency, and data visualization.',
      link: 'https://www.figma.com/proto/367POtmT2TsJ0HpirjviBn/SUPPORT?node-id=82-77360&p=f&t=nONMQwSkrdQg0x3B-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=344%3A80673', 
    },
    {
      image: Project2,
      title: 'E-Digital Service Portal',
      description:
        'Designed mobile-first UI for Uganda’s centralized government platform. Delivered high-fidelity prototypes, streamlined service flows, and supported multilingual accessibility.',
      link: 'https://www.behance.net/gallery/229007095/Eportal', 
    },
    {
      image: Project3,
      title: 'RRA Platform Redesign',
      description:
        'Redesigned Rwanda Revenue Authority’s mobile UI for a better user experience in tax services. Simplified navigation, improved responsiveness, and modernized dashboards.',
      link: 'https://www.behance.net/gallery/229004431/EBM-Version-2-Redesign', // Add Behance or preview link if available
    },
    {
      image: Project4,
      title: 'Food Hub App',
      description:
        'Created a vibrant, user-friendly food delivery app focused on reducing waste and empowering consumers. Managed full-cycle UI/UX design with brand assets and testing.',
      link: 'https://www.behance.net/gallery/180209235/FOOD-HUB',
    },
  ];

  return (
    <>
      {projectData.map((project, index) => (
        <div key={index} className="flex items-center justify-center my-8">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-white border-none rounded-lg shadow-xl md:flex-row md:max-w-3xl md:h-96 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover h-64 md:w-72 md:h-full md:rounded-none md:rounded-l-lg"
              src={project.image}
              alt={project.title}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project.description}
              </p>
              <p className="mt-6">
                <span className="text-white hover:bg-yellow-400 hover:text-white ring-2 ring-yellow-400 font-bold rounded-full text-md p-4 mr-4 mb-2">
                  VIEW PROJECT
                </span>
              </p>
            </div>
          </a>
        </div>
      ))}
    </>
  );
}

export default Projects;
