import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Alert } from './ui/alert';
import { Lock, Eye, EyeOff } from 'lucide-react';

interface PasswordProtectionProps {
  children: React.ReactNode;
}

const CORRECT_PASSWORD = 'portfolio2024'; // In a real app, this would be more secure

export function PasswordProtection({ children }: PasswordProtectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));

    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      setError('Incorrect password. Please try again.');
    }
    
    setIsLoading(false);
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <main className="pt-20">
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <Card className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <Lock className="h-8 w-8 text-gray-600" />
            </div>
            <h1 className="text-2xl mb-2">Protected Content</h1>
            <p className="text-gray-600">
              Please enter the password to view my project portfolio.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <Alert className="border-red-200 bg-red-50">
                <p className="text-red-800 text-sm">{error}</p>
              </Alert>
            )}

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading || !password.trim()}
            >
              {isLoading ? 'Verifying...' : 'Access Portfolio'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Need access? Contact me at{' '}
              <a href="mailto:alex.chen.ux@email.com" className="text-black hover:underline">
                alex.chen.ux@email.com
              </a>
            </p>
          </div>
        </Card>
      </div>
    </main>
  );
}