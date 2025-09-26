import { useParams, Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { PasswordProtection } from './PasswordProtection';
import { ArrowLeft, ArrowRight, ExternalLink, Play } from 'lucide-react';

const projectData: Record<string, any> = {
  'finova-banking': {
    isProtected: true,
    title: 'Finova Banking App',
    subtitle: 'Complete redesign of a mobile banking application',
    category: 'Mobile App',
    duration: '4 months',
    year: '2024',
    team: 'Solo Designer',
    tools: ['Figma', 'Principle', 'Maze', 'Whimsical'],
    image: 'https://images.unsplash.com/photo-1642055509518-adafcad1d22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1ODc3NDEzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    overview: 'Finova Bank approached me to redesign their existing mobile banking app, which was facing low user adoption and poor usability ratings. The challenge was to create a trustworthy, accessible, and intuitive banking experience while meeting strict financial regulations.',
    problem: 'The existing app had a 2.1-star rating with users complaining about complex navigation, poor accessibility, and lack of trust indicators. Transaction completion rates were only 45%, well below industry standards.',
    solution: 'I designed a clean, minimal interface with clear visual hierarchy, implemented biometric authentication for security, and created simplified user flows for common banking tasks. The new design focused on building user trust through transparency and clear communication.',
    process: [
      {
        title: 'Research & Discovery',
        description: 'Conducted user interviews with 15 banking customers, analyzed competitor apps, and reviewed accessibility guidelines. Identified key pain points in the current app experience.',
        duration: '2 weeks'
      },
      {
        title: 'Information Architecture',
        description: 'Created user journey maps and task flows for core banking functions. Reorganized the navigation structure based on user mental models and frequency of use.',
        duration: '1 week'
      },
      {
        title: 'Design & Prototyping',
        description: 'Developed wireframes, high-fidelity mockups, and interactive prototypes. Focused on accessibility compliance and created a comprehensive design system.',
        duration: '6 weeks'
      },
      {
        title: 'Testing & Iteration',
        description: 'Conducted usability testing with 12 participants using Maze. Iterated on designs based on feedback and tested again to validate improvements.',
        duration: '3 weeks'
      }
    ],
    outcomes: [
      'Increased transaction completion rate from 45% to 78%',
      'Improved app store rating from 2.1 to 4.6 stars',
      'Reduced customer support calls by 35%',
      'Achieved WCAG 2.1 AA accessibility compliance'
    ],
    images: [
      'https://images.unsplash.com/photo-1642055509518-adafcad1d22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1ODc3NDEzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4NzQ0MDI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ]
  },
  'shopwise-dashboard': {
    isProtected: false,
    title: 'ShopWise E-commerce Dashboard',
    subtitle: 'Admin dashboard for e-commerce platform',
    category: 'Web Dashboard',
    duration: '3 months',
    year: '2024',
    team: '2 Designers, 1 PM',
    tools: ['Figma', 'FigJam', 'Hotjar', 'Loom'],
    image: 'https://images.unsplash.com/photo-1657256031812-4702fe316f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwd2Vic2l0ZSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTg3MTY3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    overview: 'ShopWise needed a comprehensive admin dashboard to manage their growing e-commerce platform. The challenge was to design an interface that could handle complex data while remaining intuitive for non-technical users.',
    problem: 'Store administrators were struggling with the existing dashboard, taking 40% longer than necessary to complete routine tasks. Key metrics were buried in submenus, and the inventory management system was causing frequent errors.',
    solution: 'Created a data-driven dashboard with customizable widgets, clear visual hierarchy, and streamlined workflows. Implemented advanced filtering and bulk actions to handle large inventories efficiently.',
    process: [
      {
        title: 'Stakeholder Workshops',
        description: 'Facilitated workshops with store owners and admins to understand their daily workflows, pain points, and feature requirements. Mapped out current vs. desired task flows.',
        duration: '1 week'
      },
      {
        title: 'Data Analysis',
        description: 'Analyzed usage data from the existing dashboard using Hotjar. Identified the most-used features and common drop-off points in user journeys.',
        duration: '1 week'
      },
      {
        title: 'Design System',
        description: 'Developed a comprehensive design system for the dashboard, including data visualization standards, component library, and responsive grid system.',
        duration: '3 weeks'
      },
      {
        title: 'Prototyping & Testing',
        description: 'Built interactive prototypes and conducted remote usability sessions with 8 store administrators. Iterated on designs based on feedback.',
        duration: '4 weeks'
      }
    ],
    outcomes: [
      'Reduced task completion time by 40%',
      'Increased user satisfaction score from 6.2 to 8.9',
      'Decreased inventory management errors by 60%',
      'Improved daily active users by 25%'
    ],
    images: [
      'https://images.unsplash.com/photo-1657256031812-4702fe316f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwd2Vic2l0ZSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTg3MTY3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4NzQ0MDI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ]
  },
  'fittrack-wellness': {
    isProtected: true,
    title: 'FitTrack Wellness App',
    subtitle: 'Comprehensive fitness and wellness tracking platform',
    category: 'Mobile App',
    duration: '5 months',
    year: '2023',
    team: '3 Designers, 1 Researcher',
    tools: ['Figma', 'ProtoPie', 'Lookback', 'Miro'],
    image: 'https://images.unsplash.com/photo-1591311630200-ffa9120a540f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwbW9ja3VwfGVufDF8fHx8MTc1ODc3NDEzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    overview: 'FitTrack wanted to create a holistic wellness app that goes beyond simple fitness tracking. The goal was to build a platform that motivates users through social features and personalized content.',
    problem: 'Most fitness apps focus solely on tracking without providing motivation or community support. User retention rates in the fitness app category are notoriously low, with 80% of users abandoning apps within 3 months.',
    solution: 'Designed a comprehensive wellness platform with personalized workout plans, social challenges, progress sharing, and expert content. Created engaging micro-interactions and gamification elements to drive long-term engagement.',
    process: [
      {
        title: 'User Research',
        description: 'Conducted in-depth interviews with 20 fitness enthusiasts and beginners. Analyzed behavior patterns and motivations through diary studies and competitive analysis.',
        duration: '3 weeks'
      },
      {
        title: 'Persona Development',
        description: 'Created detailed user personas based on research findings. Identified key user journeys and pain points for different fitness levels and goals.',
        duration: '1 week'
      },
      {
        title: 'Feature Prioritization',
        description: 'Collaborated with product team to prioritize features based on user needs and business goals. Created detailed user stories and acceptance criteria.',
        duration: '2 weeks'
      },
      {
        title: 'Design & Iteration',
        description: 'Designed high-fidelity mockups and complex animations using ProtoPie. Conducted regular user testing sessions and iterated based on feedback.',
        duration: '12 weeks'
      }
    ],
    outcomes: [
      'Increased user engagement by 65%',
      'Improved 3-month retention rate to 45%',
      'Generated 2M+ social interactions in first year',
      'Achieved 4.8-star average rating across app stores'
    ],
    images: [
      'https://images.unsplash.com/photo-1591311630200-ffa9120a540f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwbW9ja3VwfGVufDF8fHx8MTc1ODc3NDEzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4NzQ0MDI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ]
  },
  'foodie-delivery': {
    isProtected: false,
    title: 'Foodie Delivery Platform',
    subtitle: 'Food delivery app focusing on discovery and tracking',
    category: 'Mobile App',
    duration: '3 months',
    year: '2023',
    team: 'Solo Designer',
    tools: ['Figma', 'Sketch', 'InVision', 'Zeplin'],
    image: 'https://images.unsplash.com/photo-1663153206138-cc0f166f82af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU4Nzc0MTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    overview: 'Foodie needed to differentiate their delivery app in a crowded market. The focus was on improving restaurant discovery and creating a superior order tracking experience.',
    problem: 'Users were struggling to find restaurants they liked, often abandoning the app due to choice overload. The existing order tracking was basic and didn\'t provide enough transparency about delivery status.',
    solution: 'Implemented smart filtering and recommendation algorithms with an intuitive interface. Created a comprehensive order tracking system with real-time updates and estimated delivery times.',
    process: [
      {
        title: 'Market Research',
        description: 'Analyzed top 10 food delivery apps, conducted user surveys with 50+ respondents, and identified key differentiators and opportunities in the market.',
        duration: '2 weeks'
      },
      {
        title: 'User Journey Mapping',
        description: 'Mapped detailed user journeys from app discovery to order completion. Identified friction points and opportunities for improvement.',
        duration: '1 week'
      },
      {
        title: 'Design Exploration',
        description: 'Created multiple design concepts for restaurant discovery and order tracking. Tested concepts with target users through clickable prototypes.',
        duration: '4 weeks'
      },
      {
        title: 'Implementation Support',
        description: 'Worked closely with development team to ensure proper implementation. Created detailed specifications and design handoff documentation.',
        duration: '5 weeks'
      }
    ],
    outcomes: [
      'Improved conversion rate by 28%',
      'Reduced app abandonment rate by 22%',
      'Increased average order value by 15%',
      'Enhanced customer satisfaction scores by 31%'
    ],
    images: [
      'https://images.unsplash.com/photo-1663153206138-cc0f166f82af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU4Nzc0MTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4NzQ0MDI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ]
  },
  'wanderlust-travel': {
    isProtected: true,
    title: 'Wanderlust Travel Booking',
    subtitle: 'Immersive travel booking and planning platform',
    category: 'Website',
    duration: '6 months',
    year: '2023',
    team: '4 Designers, 2 Researchers',
    tools: ['Figma', 'Adobe XD', 'Usability Hub', 'Optimal Workshop'],
    image: 'https://images.unsplash.com/photo-1673515335048-ace62cf73a26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29raW5nJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NTg3NzQxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    overview: 'Wanderlust wanted to create a travel booking platform that goes beyond simple reservations, focusing on destination inspiration and comprehensive trip planning.',
    problem: 'Existing travel booking sites were transactional and uninspiring. Users often felt overwhelmed by choices and lacked confidence in their booking decisions, leading to high abandonment rates.',
    solution: 'Designed an immersive platform with rich destination content, interactive trip planning tools, and a streamlined booking flow. Integrated social proof and expert recommendations to build user confidence.',
    process: [
      {
        title: 'Ethnographic Research',
        description: 'Conducted interviews with frequent travelers and first-time bookers. Observed booking behaviors and analyzed pain points in the travel planning process.',
        duration: '4 weeks'
      },
      {
        title: 'Information Architecture',
        description: 'Restructured the site architecture using card sorting and tree testing. Created intuitive navigation that supports both browsing and booking tasks.',
        duration: '2 weeks'
      },
      {
        title: 'Visual Design',
        description: 'Developed a visual language that evokes wanderlust and adventure. Created a comprehensive design system with flexible components for various content types.',
        duration: '6 weeks'
      },
      {
        title: 'Usability Testing',
        description: 'Conducted extensive usability testing with multiple user groups. Tested booking flows, search functionality, and destination discovery features.',
        duration: '4 weeks'
      }
    ],
    outcomes: [
      'Reduced booking abandonment rate by 35%',
      'Increased session duration by 120%',
      'Improved conversion rate by 42%',
      'Generated 50M+ page views in first year'
    ],
    images: [
      'https://images.unsplash.com/photo-1673515335048-ace62cf73a26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29raW5nJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NTg3NzQxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4NzQ0MDI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ]
  },
  'taskflow-productivity': {
    isProtected: false,
    title: 'TaskFlow Productivity Suite',
    subtitle: 'Team productivity and project management platform',
    category: 'Web App',
    duration: '4 months',
    year: '2022',
    team: '2 Designers, 1 Researcher',
    tools: ['Figma', 'Framer', 'Optimal Workshop', 'Dovetail'],
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4NzQ0MDI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    overview: 'TaskFlow needed a productivity platform that could compete with established players while offering unique collaboration features for modern remote teams.',
    problem: 'Teams were using multiple disconnected tools for project management, communication, and file sharing. This led to context switching, missed deadlines, and reduced productivity.',
    solution: 'Created an integrated platform that combines project management, real-time collaboration, and communication tools. Designed flexible workflows that adapt to different team structures and methodologies.',
    process: [
      {
        title: 'Competitive Analysis',
        description: 'Analyzed 15+ productivity tools and identified gaps in the market. Surveyed 100+ remote workers about their current tool usage and pain points.',
        duration: '2 weeks'
      },
      {
        title: 'Feature Definition',
        description: 'Collaborated with stakeholders to define core features and user stories. Prioritized features based on user needs and technical feasibility.',
        duration: '2 weeks'
      },
      {
        title: 'Design System Creation',
        description: 'Built a comprehensive design system optimized for productivity interfaces. Created reusable components and established interaction patterns.',
        duration: '4 weeks'
      },
      {
        title: 'Prototype & Test',
        description: 'Built high-fidelity prototypes using Framer. Conducted user testing with 5 remote teams over 2 weeks to validate design decisions.',
        duration: '6 weeks'
      }
    ],
    outcomes: [
      'Increased team efficiency by 45%',
      'Reduced tool switching by 60%',
      'Improved project delivery times by 30%',
      'Achieved 92% user satisfaction rating'
    ],
    images: [
      'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4NzQ0MDI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1657256031812-4702fe316f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwd2Vic2l0ZSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTg3MTY3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ]
  }
};

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectData[id] : null;

  if (!project) {
    return (
      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-2xl mb-4">Project not found</h1>
          <Button asChild>
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </main>
    );
  }

  const content = (
    <main className="pt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Back Button */}
        <Button variant="outline" asChild className="mb-8">
          <Link to="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        {/* Hero Section */}
        <div className="space-y-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  {project.category}
                </Badge>
                <h1 className="text-4xl">{project.title}</h1>
                <p className="text-lg text-gray-600">
                  {project.subtitle}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 py-6 border-t border-b border-gray-200">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Duration</p>
                  <p>{project.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Year</p>
                  <p>{project.year}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Team</p>
                  <p>{project.team}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Tools</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tools.map((tool: string, index: number) => (
                      <span key={tool} className="text-sm">
                        {tool}
                        {index < project.tools.length - 1 && ','}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:justify-self-end">
              <div className="relative aspect-[4/3] w-full max-w-lg rounded-xl overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Project Overview */}
        <section className="mb-16">
          <h2 className="text-2xl mb-6">Project Overview</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
            {project.overview}
          </p>
        </section>

        {/* Problem & Solution */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl mb-4 text-red-600">The Problem</h3>
              <p className="text-gray-600 leading-relaxed">
                {project.problem}
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl mb-4 text-green-600">The Solution</h3>
              <p className="text-gray-600 leading-relaxed">
                {project.solution}
              </p>
            </Card>
          </div>
        </section>

        {/* Process */}
        <section className="mb-16">
          <h2 className="text-2xl mb-8">Design Process</h2>
          <div className="space-y-6">
            {project.process.map((step: any, index: number) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg">{step.title}</h3>
                      <Badge variant="outline">{step.duration}</Badge>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Images/Videos Section */}
        <section className="mb-16">
          <h2 className="text-2xl mb-8">Design Showcase</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.images.map((image: string, index: number) => (
              <Card key={index} className="p-0 overflow-hidden group cursor-pointer">
                <div className="relative aspect-[4/3]">
                  <ImageWithFallback
                    src={image}
                    alt={`${project.title} design ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/50 text-white p-3 rounded-full">
                        <ExternalLink className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Video Placeholder */}
          <Card className="mt-6 p-0 overflow-hidden group cursor-pointer">
            <div className="relative aspect-video bg-gray-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full mb-4 inline-block">
                    <Play className="h-8 w-8" />
                  </div>
                  <p className="text-lg">Interactive Prototype Demo</p>
                  <p className="text-sm opacity-80">Click to view walkthrough</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Outcomes */}
        <section className="mb-16">
          <h2 className="text-2xl mb-8">Outcomes & Impact</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.outcomes.map((outcome: string, index: number) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">{outcome}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Next Project */}
        <section className="border-t border-gray-200 pt-16">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-2">Next Project</p>
              <h3 className="text-xl">View More Work</h3>
            </div>
            <Button asChild>
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );

  // If project is protected, wrap with password protection
  if (project.isProtected) {
    return (
      <PasswordProtection>
        {content}
      </PasswordProtection>
    );
  }

  return content;
}