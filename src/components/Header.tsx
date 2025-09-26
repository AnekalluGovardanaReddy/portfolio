import { useState, useEffect } from "react"
import { Menu, X, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./ThemeToggle"
import { Link, useHref } from "react-router-dom"

export function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "About", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience & Education", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-medium border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold glow-text">
          Govardana Reddy
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Button
  variant="outline"
  size="sm"
  className="hidden sm:flex items-center gap-2 hover:scale-105 transition-transform"
  onClick={() => window.open("https://drive.google.com/file/d/1bMfnfPIHCYmOgU5eMJX_WUXv1PB638PY/view?usp=sharing", "_blank")}
>
  <Download size={16} />
  Resume
</Button>

          
          <ThemeToggle />

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 shadow-medium animate-fade-in">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-lg hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="outline" className="w-full mt-4 justify-center gap-2">
              <Download size={16} />
              Download Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}