'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

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
      <div className="container px-6 mx-auto">
        <button
          onClick={() => router.push('/')}
          className="inline-flex items-center mb-12 text-blue-400 transition-colors duration-300 hover:text-blue-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>

        <div className="max-w-md mx-auto">
          <div className="mb-8 text-center">
            <div className="relative inline-block mb-6">
              <div className="absolute rounded-full -inset-2 bg-gradient-to-r from-blue-500 to-rose-500 opacity-20 blur-lg" />
              <Image src={"/assets/aria-icon.svg"} alt="Aria" width={64} height={64} className="relative" />

            </div>
            <h1 className="mb-2 text-3xl font-bold">Welcome Back</h1>
            <p className="text-gray-400">Sign in to access your dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-300">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 text-white border rounded-lg bg-black/50 border-blue-500/20 focus:outline-none focus:border-blue-500/50"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="pin" className="block mb-2 text-sm font-medium text-gray-300">
                PIN
              </label>
              <input
                type="password"
                id="pin"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full px-4 py-3 text-white border rounded-lg bg-black/50 border-blue-500/20 focus:outline-none focus:border-blue-500/50"
                placeholder="Enter your PIN"
                maxLength={5}
              />
            </div>

            {error && (
              <p className="text-sm text-rose-500">{error}</p>
            )}

            <button
              type="submit"
              className="w-full px-6 py-3 font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-500 to-rose-500 hover:opacity-90"
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
