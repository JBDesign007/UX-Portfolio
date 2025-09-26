import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Download, Mail, Linkedin, MapPin, Phone } from 'lucide-react';
import { BehanceIcon } from './icons/BehanceIcon';

const experience = [
  {
    title: 'Senior UX/UI Designer',
    company: 'TechFlow Solutions',
    duration: 'Jan 2023 - Present',
    location: 'Remote',
    description: 'Lead designer for B2B SaaS products, managing design systems and user research initiatives. Collaborated with cross-functional teams to deliver user-centered solutions.',
    achievements: [
      'Led redesign of core product resulting in 40% increase in user engagement',
      'Established design system used across 8 product teams',
      'Mentored 2 junior designers and conducted design workshops'
    ]
  },
  {
    title: 'UX/UI Designer',
    company: 'Digital Innovations Inc.',
    duration: 'Mar 2022 - Dec 2022',
    location: 'San Francisco, CA',
    description: 'Designed mobile and web applications for fintech and e-commerce clients. Conducted user research and usability testing to inform design decisions.',
    achievements: [
      'Improved mobile app conversion rates by 35% through UX optimization',
      'Conducted user interviews with 50+ participants across 5 projects',
      'Collaborated with development teams using agile methodologies'
    ]
  },
  {
    title: 'Junior UX Designer',
    company: 'StartupCo',
    duration: 'Jun 2021 - Feb 2022',
    location: 'New York, NY',
    description: 'First design role focusing on consumer mobile applications. Worked closely with product managers to translate requirements into intuitive user experiences.',
    achievements: [
      'Designed onboarding flow that reduced drop-off rate by 25%',
      'Created wireframes and prototypes for 3 mobile applications',
      'Participated in design sprints and user testing sessions'
    ]
  }
];

const education = [
  {
    degree: 'Bachelor of Fine Arts in Digital Design',
    school: 'University of California, Berkeley',
    duration: '2017 - 2021',
    details: 'Graduated Magna Cum Laude, Focus on User Experience Design and Human-Computer Interaction'
  },
  {
    degree: 'UX Design Certificate',
    school: 'Google UX Design Professional Certificate',
    duration: '2021',
    details: 'Comprehensive program covering user research, wireframing, prototyping, and usability testing'
  }
];

const skills = {
  'Design Tools': ['Figma', 'Sketch', 'Adobe Creative Suite', 'Principle', 'ProtoPie', 'Framer'],
  'Research & Testing': ['User Interviews', 'Usability Testing', 'A/B Testing', 'Maze', 'Lookback', 'Hotjar'],
  'Collaboration': ['Design Systems', 'Agile/Scrum', 'Cross-functional Teams', 'Design Workshops'],
  'Technical': ['HTML/CSS', 'JavaScript Basics', 'Design Handoff', 'Responsive Design']
};

const certifications = [
  'Google UX Design Professional Certificate (2021)',
  'Certified Usability Analyst (CUA) - HFI (2022)',
  'Design Systems Certification - InVision (2023)'
];

export function Resume() {
  const handleDownloadResume = () => {
    // In a real application, this would trigger a PDF download
    alert('Resume download would start here. In a real app, this would be a PDF file.');
  };

  return (
    <main className="pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4">Resume</h1>
          <p className="text-lg text-gray-600 mb-6">
            UX/UI Designer with 3+ years of experience creating user-centered digital solutions
          </p>
          <Button onClick={handleDownloadResume} className="mb-8">
            <Download className="mr-2 h-4 w-4" />
            Download PDF Resume
          </Button>
        </div>

        {/* Contact Info */}
        <Card className="p-6 mb-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl">Alex Chen</h2>
            <p className="text-lg text-gray-600">Senior UX/UI Designer</p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>alex.chen.ux@email.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                <span>linkedin.com/in/alexchen-ux</span>
              </div>
              <div className="flex items-center gap-2">
                <BehanceIcon className="h-4 w-4" />
                <span>behance.net/alexchen-ux</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-2xl mb-4">Professional Summary</h2>
          <Card className="p-6">
            <p className="text-gray-600 leading-relaxed">
              Passionate UX/UI Designer with 3+ years of experience designing user-centered digital products for web and mobile platforms. 
              Proven track record of improving user engagement and conversion rates through research-driven design solutions. 
              Experienced in leading design systems, conducting user research, and collaborating with cross-functional teams in agile environments. 
              Strong advocate for accessibility and inclusive design principles.
            </p>
          </Card>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-2xl mb-6">Professional Experience</h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index} className="p-6">
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg">{job.title}</h3>
                      <p className="text-gray-600">{job.company}</p>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <p>{job.duration}</p>
                      <p>{job.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                </div>
                
                <div>
                  <h4 className="text-sm mb-2 text-gray-700">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl mb-6">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg mb-1">{edu.degree}</h3>
                    <p className="text-gray-600 mb-2">{edu.school}</p>
                    <p className="text-sm text-gray-500">{edu.details}</p>
                  </div>
                  <Badge variant="outline">{edu.duration}</Badge>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-2xl mb-6">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="p-6">
                <h3 className="text-lg mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-8">
          <h2 className="text-2xl mb-6">Certifications</h2>
          <Card className="p-6">
            <ul className="space-y-2">
              {certifications.map((cert, index) => (
                <li key={index} className="text-gray-600 flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        {/* Notable Projects */}
        <section className="mb-8">
          <h2 className="text-2xl mb-6">Notable Projects</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-6">
              <h3 className="text-lg mb-2">Finova Banking App Redesign</h3>
              <p className="text-sm text-gray-600 mb-3">
                Complete mobile banking app redesign that improved transaction completion rates by 78% and achieved WCAG 2.1 AA compliance.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Mobile Design</Badge>
                <Badge variant="outline" className="text-xs">Accessibility</Badge>
                <Badge variant="outline" className="text-xs">User Research</Badge>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg mb-2">FitTrack Wellness Platform</h3>
              <p className="text-sm text-gray-600 mb-3">
                Comprehensive fitness app with social features that increased user engagement by 65% and achieved 4.8-star rating.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Mobile Design</Badge>
                <Badge variant="outline" className="text-xs">Social Features</Badge>
                <Badge variant="outline" className="text-xs">Prototyping</Badge>
              </div>
            </Card>
          </div>
        </section>

        {/* Download CTA */}
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">
            Interested in working together? Let's connect!
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button onClick={handleDownloadResume}>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:alex.chen.ux@email.com">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}