import { useState, useEffect } from "react"
import { ArrowDown, Github, Linkedin, Mail, Code2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0)
  
  const titles = [
    "Full Stack Developer", 
    "Problem Solver",
    "Java Developer"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden animated-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          
          {/* Profile Image Placeholder */}
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-2 shadow-glow hover:scale-105 transition-transform duration-500">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
              <Code2 size={80} className="text-primary" />
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Anekallu{" "}
              <span className="glow-text">Govardana</span>{" "}
              Reddy
            </h1>
            
            <div className="text-2xl md:text-3xl text-muted-foreground h-12 flex items-center justify-center">
              <span className="typewriter-text">{titles[currentTitle]}</span>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Computer Science graduate with{" "}
              <span className="text-accent font-semibold">CGPA 9.45</span> and expertise in{" "}
              <span className="text-secondary font-semibold">MERN Stack</span> development.
              Passionate about creating impactful web applications.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              className="btn-hero group"
              size="lg"
            >
              <a href="#projects">View My Work</a>
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
            </Button>
            
            <a href="mailto:anekallugovardana@gmail.com">
              <Button
                variant="outline"
                className="btn-outline-hero"
                size="lg"
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </Button>
            </a>

          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
  {[
    { icon: Github, href: "https://github.com/AnekalluGovardanaReddy", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/anekallu-govardanareddy-494376247/", label: "LinkedIn" },
    { icon: ExternalLink, href: "https://leetcode.com/u/Govardana_657/", label: "LeetCode" }
  ].map((social, index) => (
    <a
      key={social.label}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Button
        variant="ghost"
        size="icon"
        className="w-12 h-12 rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300 hover:shadow-glow"
      >
        <social.icon size={24} />
      </Button>
    </a>
  ))}
</div>


          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-2xl mx-auto">
            {[
              { number: "9.45", label: "CGPA", suffix: "" },
              { number: "150", label: "DSA Problems", suffix: "+" },
              { number: "8", label: "Projects", suffix: "+" }
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className="card-hover p-6 text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}<span className="text-secondary">{stat.suffix}</span>
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}