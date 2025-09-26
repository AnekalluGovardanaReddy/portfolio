import { Briefcase, GraduationCap, Award, Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      type: "experience",
      title: "Web Full Stack Developer Intern",
      organization: "AICTE Virtual Internship",
      period: "Oct 2024 – Dec 2024",
      location: "Virtual",
      description: "Built an Expense Tracker application using the MERN stack with CRUD operations, real-time balance updates, and category-based expense tracking.",
      achievements: [
        "Integrated JWT authentication for secure user sessions",
        "Developed responsive UI with React and Tailwind CSS", 
        "Improved application security, usability, and efficiency"
      ],
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500"
    }
  ]

  const education = [
    {
      type: "education",
      title: "B.Tech in Computer Science And Engineering",
      organization: "Mohan Babu University",
      period: "2022 – 2026",
      location: "Tirupati, Andhra Pradesh",
      description: "Currently pursuing Bachelor's degree with excellent academic performance and strong foundation in computer science fundamentals.",
      achievements: [
        "Current CGPA: 9.45/10.0",
        "Strong coursework in DSA, DBMS, Computer Networks",
        "Active participation in coding competitions",
        "Consistent academic excellence"
      ],
      icon: GraduationCap,
      color: "from-green-500 to-emerald-500"
    },
    {
      type: "education", 
      title: "Intermediate in MPC",
      organization: "Oxford Junior College",
      period: "2019 – 2021",
      location: "Narasaraopet, Andhra Pradesh",
      description: "Completed intermediate education in Mathematics, Physics, and Chemistry with outstanding academic performance.",
      achievements: [
        "Scored 946/1000 marks (94.6%)",
        "Strong foundation in Mathematics and Physics",
        "Developed analytical and problem-solving skills",
        "Prepared foundation for engineering studies"
      ],
      icon: GraduationCap,
      color: "from-purple-500 to-violet-500"
    }
  ]

  const certifications = [
    {
      title: "Programming in Java",
      issuer: "NPTEL - IIT Kharagpur",
      description: "Comprehensive Java programming certification from premier Indian institution"
    },
    {
      title: "Young Professional Certification",
      issuer: "TCS iON Career Edge", 
      description: "Professional development and career readiness certification"
    },
    {
      title: "Gen AI Study Jams",
      issuer: "Google Cloud & Generative AI Labs",
      description: "Advanced training in Generative AI and Google Cloud technologies"
    }
  ]

  const allExperiences = [...experiences, ...education]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="glow-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey of continuous learning and professional growth
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {allExperiences.map((item, index) => (
              <div 
                key={index}
                className="timeline-item animate-slide-in-right"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="card-hover p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color} text-white flex-shrink-0`}>
                      <item.icon size={24} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                          <p className="text-primary font-semibold">{item.organization}</p>
                        </div>
                        
                        <div className="text-sm text-muted-foreground mt-2 sm:mt-0 sm:text-right">
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{item.period}</span>
                          </div>
                          <div className="flex items-center space-x-1 mt-1">
                            <MapPin size={14} />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>

                      <div className="space-y-2">
                        {item.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="glow-text">Certifications</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div 
                key={cert.title}
                className="card-hover p-6 text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <Award className="mx-auto text-accent group-hover:scale-110 transition-transform duration-300" size={48} />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{cert.title}</h4>
                <p className="text-primary font-semibold mb-3">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}