import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight, Lock } from 'lucide-react';

const projects = [
  {
    id: 'finova-banking',
    title: 'Finova Banking App',
    description: 'Complete redesign of a mobile banking application with focus on accessibility and user trust. Implemented biometric authentication and simplified transaction flows.',
    image: 'https://images.unsplash.com/photo-1642055509518-adafcad1d22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1ODc3NDEzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Mobile App',
    duration: '4 months',
    tools: ['Figma', 'Principle', 'Maze'],
    year: '2024',
    isProtected: true
  },
  {
    id: 'shopwise-dashboard',
    title: 'ShopWise E-commerce Dashboard',
    description: 'Admin dashboard for e-commerce platform with advanced analytics and inventory management. Reduced task completion time by 40% through improved information architecture.',
    image: 'https://images.unsplash.com/photo-1657256031812-4702fe316f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwd2Vic2l0ZSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTg3MTY3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Web Dashboard',
    duration: '3 months',
    tools: ['Figma', 'FigJam', 'Hotjar'],
    year: '2024',
    isProtected: false
  },
  {
    id: 'fittrack-wellness',
    title: 'FitTrack Wellness App',
    description: 'Comprehensive fitness and wellness tracking app with personalized workout plans. Integrated social features to increase user engagement by 65%.',
    image: 'https://images.unsplash.com/photo-1591311630200-ffa9120a540f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwbW9ja3VwfGVufDF8fHx8MTc1ODc3NDEzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Mobile App',
    duration: '5 months',
    tools: ['Figma', 'ProtoPie', 'Lookback'],
    year: '2023',
    isProtected: true
  },
  {
    id: 'foodie-delivery',
    title: 'Foodie Delivery Platform',
    description: 'Food delivery app redesign focusing on restaurant discovery and order tracking. Improved conversion rate by 28% through enhanced search and filtering.',
    image: 'https://images.unsplash.com/photo-1663153206138-cc0f166f82af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHAlMjBkZXNpZ248ZW58MXx8fHwxNzU4Nzc0MTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Mobile App',
    duration: '3 months',
    tools: ['Figma', 'Sketch', 'InVision'],
    year: '2023',
    isProtected: false
  },
  {
    id: 'wanderlust-travel',
    title: 'Wanderlust Travel Booking',
    description: 'Travel booking website with immersive destination exploration and trip planning tools. Reduced booking abandonment rate by 35% through streamlined checkout flow.',
    image: 'https://images.unsplash.com/photo-1673515335048-ace62cf73a26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29raW5nJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NTg3NzQxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Website',
    duration: '6 months',
    tools: ['Figma', 'Adobe XD', 'Usability Hub'],
    year: '2023',
    isProtected: true
  },
  {
    id: 'taskflow-productivity',
    title: 'TaskFlow Productivity Suite',
    description: 'Team productivity platform with advanced project management and collaboration features. Increased team efficiency by 45% through intuitive task organization.',
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4NzQ0MDI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Web App',
    duration: '4 months',
    tools: ['Figma', 'Framer', 'Optimal Workshop'],
    year: '2022',
    isProtected: false
  }
];

const categories = ['All', 'Mobile App', 'Web Dashboard', 'Website', 'Web App'];

export function Projects() {
  return (
    <main className="pt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="space-y-6 mb-12">
          <h1 className="text-4xl">All Projects</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            A collection of digital experiences I've designed over the past 3 years, 
            focusing on user-centered solutions for mobile and web platforms.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <Badge 
              key={category} 
              variant={category === 'All' ? 'default' : 'secondary'}
              className="px-4 py-2 cursor-pointer hover:bg-black hover:text-white transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden group cursor-pointer relative">
              <Link to={`/project/${project.id}`}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.isProtected && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                        <Lock className="h-3 w-3" />
                        Protected
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{project.category}</Badge>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl group-hover:text-gray-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex flex-wrap gap-2">
                      {project.tools.slice(0, 2).map((tool) => (
                        <span key={tool} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 2 && (
                        <span className="text-xs text-gray-500">
                          +{project.tools.length - 2} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500 group-hover:text-black transition-colors">
                      <span className="mr-2">View Project</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}