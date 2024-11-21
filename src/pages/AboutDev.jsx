import { Helmet } from "react-helmet";
import {
  FaReact,
  FaCss3Alt,
  FaDatabase,
  FaJs,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";

const AboutDev = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <Helmet>
        <title>Discount PRO || About Page</title>
      </Helmet>

     
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Hi! I'm Arman Mia, a passionate web developer with a focus on
          building modern, user-friendly applications. I specialize in frontend
          technologies like React, Tailwind CSS, and JavaScript, and enjoy
          tackling complex problems while creating seamless user experiences.
        </p>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
          My goal is to build intuitive and efficient apps that help users in
          meaningful ways. In my free time, I enjoy exploring new tech trends
          and experimenting with different tools to enhance my skill set.
        </p>
      </div>

     
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          My Projects
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Here are a few of the projects I’ve worked on. Click on the project
          titles to explore more about them:
        </p>

        {/* Project 1 */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="w-full md:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                className="w-full h-48 object-cover rounded-t-lg"
                src={project2}
                alt="Project 1"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Dragon News
              </h3>
              <p className="text-gray-600 mt-2">
                Stay updated with the latest news, trends, and updates in the
                tech world, from gadget releases to industry insights.
              </p>
              <a
                href="https://dragon-news-auth-project.netlify.app/category/01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-4 block"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="w-full md:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                className="w-full h-48 object-cover rounded-t-lg"
                src={project1}
                alt="Project 2"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                BPL-DREAM 11
              </h3>
              <p className="text-gray-600 mt-2">
                A fantasy cricket app that lets users create and manage their
                dream teams.
              </p>
              <a
                href="https://ph-a7-bpl-dream-11.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-4 block"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-gray-50 py-12 mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Skills
        </h2>
        <p className="text-lg md:w-1/2 mx-auto text-gray-600 mb-8 text-center">
          I’m constantly learning and expanding my skills to stay up-to-date
          with modern web development practices. Below are the core skills I use
          to build amazing projects:
        </p>

        {/* Skills List */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="skill-card p-4 bg-white rounded-lg shadow-md text-center">
            <FaReact className="text-4xl mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">React</h3>
            <p className="text-gray-600">
              Building modern, dynamic user interfaces.
            </p>
          </div>
          <div className="skill-card p-4 bg-white rounded-lg shadow-md text-center">
            <FaCss3Alt className="text-4xl  mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Tailwind CSS
            </h3>
            <p className="text-gray-600">
              Designing beautiful, responsive layouts quickly.
            </p>
          </div>
          <div className="skill-card p-4 bg-white rounded-lg shadow-md text-center">
            <FaDatabase className="text-4xl mx-auto text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Firebase</h3>
            <p className="text-gray-600">
              Cloud-based database and authentication for web apps.
            </p>
          </div>
          <div className="skill-card p-4 bg-white rounded-lg shadow-md text-center">
            <FaJs className="text-4xl mx-auto text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">JavaScript</h3>
            <p className="text-gray-600">
              Developing interactive and functional applications.
            </p>
          </div>
          <div className="skill-card p-4 bg-white rounded-lg shadow-md text-center">
            <FaNodeJs className="text-4xl mx-auto text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Node.js</h3>
            <p className="text-gray-600">
              Backend development for scalable applications.
            </p>
          </div>
          <div className="skill-card p-4 bg-white rounded-lg shadow-md text-center">
            <FaGithub className="text-4xl mx-auto text-black mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Git/GitHub</h3>
            <p className="text-gray-600">
              Managing code versions and collaborating on projects.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Let’s Connect
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Feel free to reach out to me for collaboration or just to chat about
          technology.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/arman-miaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/arman-mia-am/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutDev;
