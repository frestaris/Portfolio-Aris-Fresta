import { useEffect, useState } from "react";
import Card from "./Card";
import budget1 from "../assets/budgetmate1.png";
import budget2 from "../assets/budgetmate2.png";
import budget3 from "../assets/budgetmate3.png";
import eCommerce1 from "../assets/eCommerce1.png";
import eCommerce2 from "../assets/eCommerce2.png";
import eCommerce3 from "../assets/eCommerce3.png";
import dentist1 from "../assets/dentist1.png";
import dentist2 from "../assets/dentist2.png";
import dentist3 from "../assets/dentist3.png";
import gym1 from "../assets/gym1.png";
import gym2 from "../assets/gym2.png";
import gym3 from "../assets/gym3.png";
import rentcar1 from "../assets/car-rental1.png";
import rentcar2 from "../assets/car-rental2.png";
import rentcar3 from "../assets/car-rental3.png";
import ask1 from "../assets/ask1.png";
import ask2 from "../assets/ask2.png";
import ask3 from "../assets/ask3.png";
import restaurant1 from "../assets/restaurant-1.png";
import restaurant2 from "../assets/restaurant-2.png";
import restaurant3 from "../assets/restaurant-3.png";
import quickpop1 from "../assets/quickpop-1.png";
import quickpop2 from "../assets/quickpop-2.png";
import quickpop3 from "../assets/quickpop-3.png";
import "./Projects.css";

const projectData = [
  {
    id: 1,
    title: "Quick Pop",
    live: "https://quick-pop.vercel.app/",
    images: [quickpop1, quickpop2, quickpop3],
    technologies: [
      "Html",
      "Tailwind CSS",
      "Redux",
      "PostgreSQL",
      "Supabase",
      "Google Cloud APIs",
      "Geolocation",
      "Express.js",
      "React",
      "Node.js",
      "Stripe",
      "Cloudinary",
      "Bcrypt",
      "Jsonwebtoken",
    ],
  },
  {
    id: 2,
    title: "Rental Car",
    linkUrl: "https://github.com/frestaris/Mern_Rental_Car",
    live: "https://mern-rental-car-frontend.vercel.app/",
    images: [rentcar1, rentcar2, rentcar3],
    technologies: [
      "Html",
      "Tailwind CSS",
      "Redux",
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Stripe",
      "Cloudinary",
      "Bcrypt",
      "Jsonwebtoken",
    ],
  },
  {
    id: 3,
    title: "e-Commerce Plants",
    linkUrl:
      "https://github.com/frestaris/Full-stack-e-commerce--Plants-website--React",
    live: "https://full-stack-e-commerce-plants-website-react.vercel.app/",
    images: [eCommerce1, eCommerce2, eCommerce3],
    technologies: [
      "Html",
      "Tailwind CSS",
      "Redux",
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Stripe",
      "Cloudinary",
      "Bcrypt",
      "Jsonwebtoken",
    ],
  },
  {
    id: 4,
    title: "Dentist Website",
    linkUrl: "https://github.com/frestaris/Dentist-Website",
    live: "https://dentist-website-frontend.vercel.app/",
    images: [dentist1, dentist2, dentist3],
    technologies: [
      "Html",
      "Tailwind CSS",
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
    ],
  },
  {
    id: 5,
    title: "BudgetMate",
    linkUrl: "https://github.com/frestaris/budgetmate",
    live: "https://budgetmate-frontend.vercel.app/",
    images: [budget1, budget2, budget3],
    technologies: [
      "Html",
      "Flowbite CSS",
      "Redux",
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Firebase",
      "Bcrypt",
      "Jsonwebtoken",
    ],
  },
  {
    id: 6,
    title: "Restaurant Website",
    linkUrl: "https://github.com/frestaris/react-restaurant-app",
    live: "https://react-app-restaurant-website-sample.netlify.app/",
    images: [restaurant1, restaurant2, restaurant3],
    technologies: ["Html", "Ant Design", "Redux", "React"],
  },
  {
    id: 7,
    title: "Ask",
    linkUrl: "https://github.com/frestaris/ask",
    live: "https://ask-frontend-virid.vercel.app/",
    images: [ask1, ask2, ask3],
    technologies: [
      "Html",
      "Bootstrap CSS",
      "Redux",
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Firebase",
      "Bcrypt",
      "Jsonwebtoken",
    ],
  },
  {
    id: 8,
    title: "Gym Website",
    linkUrl: "https://github.com/frestaris/Gym-React",
    live: "https://brosgym.netlify.app/",
    images: [gym1, gym2, gym3],
    technologies: ["Html", "Bootstrap CSS", "React"],
  },
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(
    Array(projectData.length).fill(false)
  );

  useEffect(() => {
    const handleScroll = () => {
      const projects = document.querySelectorAll(".project-card");

      projects.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
          setVisibleProjects((prev) => {
            const newProjects = [...prev];
            newProjects[index] = true;
            return newProjects;
          });
        } else {
          setVisibleProjects((prev) => {
            const newProjects = [...prev];
            newProjects[index] = false;
            return newProjects;
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="projects" className="container mt-5">
      <div className="text-center pb-5">
        <p>Browse My Recent</p>
        <h1>Projects</h1>
      </div>
      <div className="row justify-content-center">
        {projectData.map((project, index) => (
          <div key={project.id} className="col-12 col-md-6 col-lg-4 mb-4">
            <Card
              className={`project-card ${
                visibleProjects[index] ? "visible" : ""
              }`}
              id={project.id}
              title={project.title}
              linkUrl={project.linkUrl}
              live={project.live}
              image={project.images}
              technologies={project.technologies}
            />
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Projects;
