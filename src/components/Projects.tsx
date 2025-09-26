import { ExternalLink, Github, Car, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import carRentalImage from "../images/carrental.png"
import expenceTracker from "../images/expencetracker.png"

export function Projects() {
  const projects = [
    {
      title: "Car Rental System",
      description:
        "Full-stack car rental application with JWT authentication, role-based access, and comprehensive admin dashboard for managing cars, bookings, and users with analytics.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "JWT",
        "Tailwind CSS",
        "Multer",
        "ImageKit",
      ],
      features: [
        "JWT Authentication & Role-based Access",
        "CRUD Operations for Cars, Users & Bookings",
        "Image Upload with Multer/ImageKit",
        "Admin Dashboard with Analytics",
        "Responsive React + Tailwind Frontend",
      ],
      icon: Car,
      gradient: "from-blue-500 to-cyan-500",
      liveUrl: "https://car-rental-frontend-umber.vercel.app/",
      githubUrl:
        "https://github.com/AnekalluGovardanaReddy/Car-Rental-Frontend",
      image: carRentalImage,
    },
    {
      title: "Expense Tracker",
      description:
        "Secure personal finance tracker with JWT authentication, scalable RESTful APIs, and interactive dashboard providing actionable financial insights for users.",
      technologies: [
        "MERN Stack",
        "JWT",
        "React Charts",
        "Multer",
        "Tailwind CSS",
      ],
      features: [
        "Secure JWT Authentication",
        "CRUD Operations with Category Filtering",
        "Receipt Upload via Multer",
        "Interactive Charts & Analytics",
        "Responsive Cross-device Design",
      ],
      icon: DollarSign,
      gradient: "from-green-500 to-emerald-500",
      liveUrl: "https://expense-tracker-frontend-zeta-sand.vercel.app/",
      githubUrl:
        "https://github.com/AnekalluGovardanaReddy/ExpenseTracker_Frontend",
      image: expenceTracker,
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Major <span className="glow-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world applications built with modern technologies and best
            practices
          </p>
        </div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card p-8 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              } lg:flex items-center gap-12`}
            >
              {/* Project Visual */}
<div className="lg:w-1/2 mb-8 lg:mb-0">
  <img
    src={project.image}
    alt={`${project.title} screenshot`}
    className="rounded-2xl shadow-lg mx-auto w-full object-cover"
  />
</div>


              {/* Project Details */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  {/* <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p> */}
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-badge text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    className="btn-hero group"
                    onClick={() =>
                      window.open(project.liveUrl, "_blank", "noopener,noreferrer")
                    }
                  >
                    <ExternalLink
                      className="mr-2 group-hover:rotate-45 transition-transform"
                      size={16}
                    />
                    Live Demo
                  </Button>

                  <Button
                    variant="outline"
                    className="btn-outline-hero group"
                    onClick={() =>
                      window.open(project.githubUrl, "_blank", "noopener,noreferrer")
                    }
                  >
                    <Github
                      className="mr-2 group-hover:scale-110 transition-transform"
                      size={16}
                    />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Teaser */}
        <div className="text-center mt-16">
          <div className="card-hover p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              View All My Projects
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm constantly working on new projects and learning new
              technologies. Check my GitHub for the latest updates and
              experiments.
            </p>
            <Button
              variant="outline"
              className="btn-outline-hero group"
              onClick={() =>
                window.open("https://github.com/AnekalluGovardanaReddy")
              }
            >
              <Github
                className="mr-2 group-hover:scale-110 transition-transform"
                size={16}
              />
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
