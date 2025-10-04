import { Mail, Phone, MapPin, Linkedin, ExternalLink, Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import { BehanceIcon } from './icons/BehanceIcon';

export function Contact() {
  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-50 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gray-50 rounded-full blur-3xl opacity-35"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full mb-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span className="text-sm font-medium">Available for new projects</span>
          </div>
          <h1 className="mb-8 text-5xl md:text-6xl lg:text-7xl">Get In Touch</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            I'm always open to discussing new opportunities, collaborating on interesting projects, 
            or simply connecting with fellow designers and developers. Feel free to reach out!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {/* Email Card */}
          <Card className="group p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 bg-white">
            <div className="flex items-start gap-5">
              <div className="bg-black text-white p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="mb-3 text-gray-900">Email</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Drop me a line anytime - I typically respond within 24 hours.
                </p>
                <a 
                  href="mailto:alex.chen.ux@gmail.com" 
                  className="inline-flex items-center gap-2 text-black hover:text-gray-600 group-hover:gap-3 transition-all duration-200"
                >
                  alex.chen.ux@gmail.com
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Card>

          {/* Phone Card */}
          <Card className="group p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 bg-white">
            <div className="flex items-start gap-5">
              <div className="bg-black text-white p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="mb-3 text-gray-900">Phone</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Available for calls Monday through Friday, 9 AM - 6 PM PST.
                </p>
                <a 
                  href="tel:+1-555-123-4567" 
                  className="inline-flex items-center gap-2 text-black hover:text-gray-600 group-hover:gap-3 transition-all duration-200"
                >
                  +1 (555) 123-4567
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Card>

          {/* Location Card */}
          <Card className="group p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 bg-white">
            <div className="flex items-start gap-5">
              <div className="bg-black text-white p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="mb-3 text-gray-900">Location</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Based in San Francisco, open to remote work and travel opportunities.
                </p>
                <span className="text-black">San Francisco, CA</span>
              </div>
            </div>
          </Card>

          {/* LinkedIn Card */}
          <Card className="group p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 bg-white">
            <div className="flex items-start gap-5">
              <div className="bg-black text-white p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Linkedin className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="mb-3 text-gray-900">LinkedIn</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Connect with me professionally and see my latest updates.
                </p>
                <a 
                  href="https://linkedin.com/in/alexchen-ux" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-black hover:text-gray-600 group-hover:gap-3 transition-all duration-200"
                >
                  linkedin.com/in/alexchen-ux
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Card>
        </div>

        {/* Social Links Section */}
        <div className="text-center mb-16">
          <h2 className="mb-12">Let's Connect</h2>
          <div className="flex justify-center gap-4">
            <a 
              href="https://linkedin.com/in/alexchen-ux" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white border-2 border-gray-200 text-black p-6 rounded-2xl hover:border-black hover:bg-black hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Linkedin className="h-8 w-8 group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a 
              href="https://behance.net/alexchen-ux" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white border-2 border-gray-200 text-black p-6 rounded-2xl hover:border-black hover:bg-black hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <BehanceIcon className="h-8 w-8 group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a 
              href="mailto:alex.chen.ux@gmail.com"
              className="group bg-white border-2 border-gray-200 text-black p-6 rounded-2xl hover:border-black hover:bg-black hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Mail className="h-8 w-8 group-hover:scale-110 transition-transform duration-200" />
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <Card className="p-12 bg-black text-white border-0 relative overflow-hidden">
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm">Open to opportunities</span>
              </div>
              <h3 className="mb-6 text-white">Looking for collaboration?</h3>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                I'm currently available for freelance projects and full-time opportunities. 
                Whether you need UX/UI design, user research, or design system development, 
                I'd love to hear about your project and discuss how we can work together.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}