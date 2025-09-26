import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-black/10">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-medium">
            Alex Chen
          </Link>
          
          <div className="flex items-center gap-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-black' : 'text-gray-500 hover:text-black'}`}
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className={`transition-colors ${isActive('/projects') ? 'text-black' : 'text-gray-500 hover:text-black'}`}
            >
              Projects
            </Link>
            <Link 
              to="/resume" 
              className={`transition-colors ${isActive('/resume') ? 'text-black' : 'text-gray-500 hover:text-black'}`}
            >
              Resume
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${isActive('/contact') ? 'text-black' : 'text-gray-500 hover:text-black'}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}