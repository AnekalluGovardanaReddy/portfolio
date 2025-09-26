import { Heart, Code2, Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks =[
    { label: "About", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience & Education", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold glow-text mb-4">
              Govardana Reddy
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Passionate Full Stack Developer specializing in MERN stack. 
              Creating innovative web solutions with modern technologies.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/AnekalluGovardanaReddy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/anekallu-govardanareddy-494376247/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:anekallugovardana@gmail.com"
                className="p-2 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <a 
                  href="mailto:anekallugovardana@gmail.com"
                  className="hover:text-primary transition-colors duration-300"
                >
                  anekallugovardana@gmail.com
                </a>
              </p>
              <p>
                <a 
                  href="tel:+918555820946"
                  className="hover:text-primary transition-colors duration-300"
                >
                  +91 8555820946
                </a>
              </p>
              <p>Tirupati, Andhra Pradesh</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 mb-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>© {currentYear} Made with</span>
            <Heart className="text-red-500 animate-pulse" size={16} />
            <span>by Govardana Reddy</span>
          </div>

          

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="hover:bg-primary/10 hover:scale-110 transition-all duration-300 group"
          >
            <ArrowUp className="group-hover:-translate-y-1 transition-transform" size={16} />
            <span className="ml-1">Back to Top</span>
          </Button>
        </div>

        {/* Success Message */}
        <div className="text-center mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
          <p className="text-accent font-semibold">
            🚀 Ready to collaborate? Let's build something amazing together!
          </p>
        </div>
      </div>
    </footer>
  )
}
