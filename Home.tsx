import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Mail, Linkedin, Lock } from 'lucide-react';
import { BehanceIcon } from './icons/BehanceIcon';

const projects = [
  {
    id: 'finova-banking',
    title: 'Finova Banking App',
    description: 'Complete redesign of a mobile banking application with focus on accessibility and user trust',
    image: 'https://images.unsplash.com/photo-1642055509518-adafcad1d22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1ODc3NDEzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Mobile App',
    duration: '4 months',
    isProtected: true
  },
  {
    id: 'shopwise-dashboard',
    title: 'ShopWise E-commerce Dashboard',
    description: 'Admin dashboard for e-commerce platform with advanced analytics and inventory management',
    image: 'https://images.unsplash.com/photo-1657256031812-4702fe316f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwd2Vic2l0ZSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTg3MTY3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Web Dashboard',
    duration: '3 months',
    isProtected: false
  },
  {
    id: 'fittrack-wellness',
    title: 'FitTrack Wellness App',
    description: 'Comprehensive fitness and wellness tracking app with personalized workout plans',
    image: 'https://images.unsplash.com/photo-1591311630200-ffa9120a540f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwbW9ja3VwfGVufDF8fHx8MTc1ODc3NDEzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Mobile App',
    duration: '5 months',
    isProtected: true
  },
  {
    id: 'foodie-delivery',
    title: 'Foodie Delivery Platform',
    description: 'Food delivery app redesign focusing on restaurant discovery and order tracking',
    image: 'https://images.unsplash.com/photo-1663153206138-cc0f166f82af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU4Nzc0MTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Mobile App',
    duration: '3 months',
    isProtected: false
  },
  {
    id: 'wanderlust-travel',
    title: 'Wanderlust Travel Booking',
    description: 'Travel booking website with immersive destination exploration and trip planning tools',
    image: 'https://images.unsplash.com/photo-1673515335048-ace62cf73a26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29raW5nJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NTg3NzQxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Website',
    duration: '6 months',
    isProtected: true
  },
  {
    id: 'taskflow-productivity',
    title: 'TaskFlow Productivity Suite',
    description: 'Team productivity platform with advanced project management and collaboration features',
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4NzQ0MDI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Web App',
    duration: '4 months',
    isProtected: false
  }
];

export function Home() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl tracking-tight">
                UX Designer crafting
                <span className="block">meaningful experiences</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                I'm Alex Chen, a UX/UI designer with 3+ years of experience creating 
                user-centered digital solutions for mobile apps and web platforms.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Button asChild>
                <Link to="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
          
          <div className="lg:justify-self-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1744901581831-3ffe7d3d05f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBVWCUyMGRlc2lnbmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU4Nzc0MTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Alex Chen - UX Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-black text-white px-4 py-2 rounded-lg">
                <p className="text-sm">3+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl">Featured Projects</h2>
              {projects.some(project => project.isProtected) && (
                <Badge variant="outline" className="text-xs">
                  <Lock className="h-3 w-3 mr-1" />
                  Some Protected
                </Badge>
              )}
            </div>
            <Button variant="outline" asChild>
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
          
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large featured project */}
            <Card className="md:col-span-2 p-0 overflow-hidden group cursor-pointer relative">
              <Link to={`/project/${projects[0].id}`}>
                <div className="relative aspect-[16/10]">
                  <ImageWithFallback
                    src={projects[0].image}
                    alt={projects[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {projects[0].isProtected && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                        <Lock className="h-3 w-3" />
                        Protected
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm opacity-80 mb-2">{projects[0].category} • {projects[0].duration}</p>
                    <h3 className="text-xl mb-2">{projects[0].title}</h3>
                    <p className="text-sm opacity-90 max-w-md">{projects[0].description}</p>
                  </div>
                </div>
              </Link>
            </Card>
            
            {/* Smaller project cards */}
            {projects.slice(1, 3).map((project) => (
              <Card key={project.id} className="p-0 overflow-hidden group cursor-pointer relative">
                <Link to={`/project/${project.id}`}>
                  <div className="relative aspect-square">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {project.isProtected && (
                      <div className="absolute top-3 right-3">
                        <div className="bg-black/50 backdrop-blur-sm text-white p-1 rounded text-xs">
                          <Lock className="h-3 w-3" />
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-xs opacity-80 mb-1">{project.category}</p>
                      <h3 className="text-sm mb-1">{project.title}</h3>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
            
            {/* Medium project cards */}
            {projects.slice(3, 6).map((project, index) => (
              <Card key={project.id} className={`p-0 overflow-hidden group cursor-pointer relative ${index === 0 ? 'md:col-span-2' : ''}`}>
                <Link to={`/project/${project.id}`}>
                  <div className={`relative ${index === 0 ? 'aspect-[16/9]' : 'aspect-square'}`}>
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {project.isProtected && (
                      <div className={`absolute ${index === 0 ? 'top-4 right-4' : 'top-3 right-3'}`}>
                        <div className="bg-black/50 backdrop-blur-sm text-white p-1 rounded text-xs">
                          <Lock className="h-3 w-3" />
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-xs opacity-80 mb-1">{project.category}</p>
                      <h3 className={`mb-1 ${index === 0 ? 'text-lg' : 'text-sm'}`}>{project.title}</h3>
                      {index === 0 && <p className="text-sm opacity-90 max-w-md">{project.description}</p>}
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl">Let's Work Together</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Let's discuss how we can create something amazing together.
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            <Button variant="outline" asChild>
              <a href="mailto:alex.chen.ux@email.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://linkedin.com/in/alexchen-ux" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://behance.net/alexchen-ux" target="_blank" rel="noopener noreferrer">
                <BehanceIcon className="mr-2 h-4 w-4" />
                Behance
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}