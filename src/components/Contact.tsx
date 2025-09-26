import { useState } from "react"
import { Mail, Phone, MapPin, ExternalLink, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    })
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "anekallugovardana@gmail.com",
      href: "mailto:anekallugovardana@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8555820946",
      href: "tel:+918555820946"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tirupati, Andhra Pradesh",
      href: "#"
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      description: "Check out my latest projects and contributions"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      description: "Connect with me professionally"
    },
    {
      icon: ExternalLink,
      label: "LeetCode",
      href: "#",
      description: "View my coding problem solutions"
    }
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="glow-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work together!
          </p>
        </div>

        {/* Centered Section */}
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-12">
          
          {/* Contact Details */}
          <div className="card-hover p-8 text-center w-full">
            <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
            <div className="space-y-6 flex flex-col items-center">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4 w-full max-w-md">
                  <div className="p-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg flex items-center justify-center">
                    <info.icon size={20} />
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <a 
                      href={info.href}
                      className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="card-hover p-8 text-center w-full">
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2">Available for Opportunities</h4>
            <p className="text-muted-foreground">
              I'm currently seeking full-time opportunities in web development. 
              Let's discuss how I can contribute to your team!
            </p>
          </div>

          {/* Call to Action */}
<div className="card-hover p-8 text-center w-full">
  <h3 className="text-2xl font-bold text-primary mb-4">Ready to Start a Project?</h3>
  <p className="text-muted-foreground mb-6">
    Whether you need a web application, want to discuss a collaboration, 
    or just want to say hello, I'd love to hear from you!
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <a href="mailto:anekallugovardana@gmail.com">
      <Button className="btn-hero">
        <Mail className="mr-2" size={16} />
        Email Me
      </Button>
    </a>
    <a href="tel:+918555820946">
      <Button variant="outline" className="btn-outline-hero">
        <Phone className="mr-2" size={16} />
        Schedule Call
      </Button>
    </a>
  </div>
</div>

        </div>
      </div>
    </section>
  )
}
