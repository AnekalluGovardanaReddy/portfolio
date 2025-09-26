import { Code2, Database, Globe, Settings, GitBranch, Smartphone } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["Java", "JavaScript", "HTML", "CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frontend",
      icon: Globe,
      skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "MySQL", "MongoDB Atlas"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Tools",
      icon: Settings,
      skills: ["Git", "GitHub", "VS Code", "Postman", "Multer", "ImageKit"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Deployment",
      icon: GitBranch,
      skills: ["Vercel", "Render", "Git Version Control"],
      color: "from-indigo-500 to-blue-500"
    }
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="glow-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in modern web development technologies and tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="card-hover p-8 group"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="skill-badge group-hover:scale-105 transition-all duration-300"
                    style={{ 
                      animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s`,
                      transitionDelay: `${skillIndex * 0.05}s` 
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Achievements */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="card-hover p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">Key Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center space-x-3 p-4 bg-accent/10 rounded-lg">
                <Code2 className="text-accent" size={24} />
                <span className="text-lg font-semibold">150+ DSA Problems Solved</span>
              </div>
              <div className="flex items-center justify-center space-x-3 p-4 bg-secondary/10 rounded-lg">
                <Smartphone className="text-secondary" size={24} />
                <span className="text-lg font-semibold">Skilled in Java and MERN Stack </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}