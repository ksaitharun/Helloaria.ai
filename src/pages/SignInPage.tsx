'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import ariaIcon from '/public/assets/aria-icon.svg'; // adjust if needed

const SignInPage = () => {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (phone === '9985474932' && pin === '12345') {
      router.push('/dashboard');
    } else {
      setError('Invalid phone number or PIN');
    }
  };

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-6">
        <button 
          onClick={() => router.push('/')}
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-12"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>

        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block relative mb-6">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-rose-500 rounded-full opacity-20 blur-lg" />
              <Image src={ariaIcon} alt="Aria" width={64} height={64} className="relative" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-gray-400">Sign in to access your dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 bg-black/50 border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500/50 text-white"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="pin" className="block text-sm font-medium text-gray-300 mb-2">
                PIN
              </label>
              <input
                type="password"
                id="pin"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full px-4 py-3 bg-black/50 border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500/50 text-white"
                placeholder="Enter your PIN"
                maxLength={5}
              />
            </div>

            {error && (
              <p className="text-rose-500 text-sm">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-rose-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:opacity-90"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
