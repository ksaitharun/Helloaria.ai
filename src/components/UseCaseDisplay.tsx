import React, { useState, useEffect } from 'react';
import { Calendar, FileSearch, Plane, Bell } from 'lucide-react';

const useCases = [
  {
    icon: Calendar,
    text: "Schedule a meeting at 10 AM tomorrow",
    integration: "Google Calendar",
    color: "#4285F4",
    logo: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1">
        <path d="M17 4V3H15V4H9V3H7V4H3V20H21V4H17ZM19 18H5V8H19V18Z" fill="#4285F4"/>
        <rect x="6" y="10" width="4" height="4" fill="#4285F4"/>
      </svg>
    )
  },
  {
    icon: FileSearch,
    text: "Find my 'Report.pdf' in Drive",
    integration: "Google Drive",
    color: "#0F9D58",
    logo: (
      <svg viewBox="0 0 87.3 78" className="w-4 h-4 mr-1">
        <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
        <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0-1.2 4.5h27.5z" fill="#00ac47"/>
        <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
        <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
        <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
        <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
      </svg>
    )
  },
  {
    icon: Plane,
    text: "Track my Indigo flight 6E-123",
    integration: "Flight Status",
    color: "#6366F1",
    logo: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1" fill="none">
        <path d="M21 15.1L12.7 22H11.3L9.5 19.6V22H8.1L6.5 19.5L4.9 22H3.5V19.6L1.7 22H0.3L2.1 15.1C1.5 13.9 1.1 12.6 1.1 11.2C1.1 7.3 4.2 4.1 8.1 4.1C9.5 4.1 10.8 4.5 12 5.1L21 0.3V1.7L18.6 3.5H21V4.9L18.5 6.5L21 8.1V9.5L18.6 11.3L21 13.7V15.1Z" fill="#6366F1"/>
        <path d="M8.1 18.9C12 18.9 15.1 15.8 15.1 11.9C15.1 8 12 4.9 8.1 4.9C4.2 4.9 1.1 8 1.1 11.9C1.1 15.8 4.2 18.9 8.1 18.9Z" fill="#818CF8"/>
      </svg>
    )
  },
  {
    icon: Bell,
    text: "Remind me to submit my assignment at 8 PM",
    integration: "WhatsApp Reminder",
    color: "#25D366",
    logo: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M20.463 3.488C18.217 1.24 15.231 0.001 12.05 0C5.495 0 0.16 5.334 0.157 11.892C0.156 13.993 0.677 16.043 1.667 17.864L0.067 24L6.344 22.432C8.09 23.337 10.042 23.812 12.039 23.813H12.05C18.603 23.813 23.939 18.478 23.942 11.919C23.944 8.743 22.709 5.735 20.463 3.488ZM12.05 21.785H12.041C10.264 21.784 8.527 21.336 6.977 20.483L6.617 20.271L2.863 21.235L3.845 17.581L3.612 17.206C2.681 15.592 2.189 13.772 2.19 11.893C2.193 6.454 6.614 2.028 12.059 2.028C14.737 2.029 17.245 3.064 19.143 4.963C21.041 6.862 22.074 9.371 22.073 12.054C22.07 17.494 17.488 21.785 12.05 21.785Z" fill="#25D366"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M17.707 14.398C17.411 14.25 15.924 13.519 15.653 13.421C15.382 13.323 15.185 13.274 14.988 13.57C14.791 13.866 14.209 14.548 14.037 14.745C13.865 14.942 13.693 14.967 13.397 14.819C13.101 14.671 12.108 14.337 10.931 13.281C10.01 12.456 9.379 11.436 9.207 11.14C9.035 10.844 9.189 10.684 9.337 10.536C9.471 10.402 9.634 10.184 9.782 10.012C9.93 9.84 9.979 9.717 10.077 9.52C10.175 9.323 10.126 9.151 10.052 9.003C9.979 8.855 9.351 7.366 9.105 6.774C8.865 5.968 8.619 6.09 8.437 6.09C8.265 6.09 8.068 6.065 7.871 6.065C7.674 6.065 7.354 6.139 7.083 6.435C6.812 6.731 6.032 7.462 6.032 8.951C6.032 10.44 7.108 11.88 7.256 12.077C7.404 12.274 9.376 15.321 12.409 16.487C13.012 16.748 13.482 16.901 13.85 17.015C14.457 17.204 15.012 17.18 15.45 17.105C15.937 17.021 17.138 16.37 17.384 15.679C17.63 14.988 17.63 14.396 17.556 14.274C17.482 14.152 17.285 14.078 16.989 13.93L17.707 14.398Z" fill="#25D366"/>
      </svg>
    )
  }
];

const UseCaseDisplay: React.FC = () => {
  const [activeUseCase, setActiveUseCase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUseCase((prev) => (prev + 1) % useCases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="use-case-display bg-gradient-to-br from-black/80 to-blue-950/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 transition-all duration-500">
      {useCases.map((useCase, index) => {
        const Icon = useCase.icon;
        return (
          <div
            key={index}
            className={`flex items-center space-x-4 transition-all duration-500 ${
              index === activeUseCase ? 'opacity-100 transform-none' : 'opacity-0 absolute top-0 left-0'
            }`}
            style={{
              transform: index === activeUseCase ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <div 
              className="flex-shrink-0 p-3 rounded-lg relative group"
              style={{ backgroundColor: `${useCase.color}20` }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" 
                style={{ color: useCase.color }} 
              />
              
              <Icon 
                className="w-8 h-8 transition-colors duration-300 relative z-10"
                style={{ color: useCase.color }}
              />
            </div>
            <div>
              <div className="flex items-center mb-1">
                {useCase.logo}
                <p className="text-sm font-medium" style={{ color: useCase.color }}>
                  {useCase.integration}
                </p>
              </div>
              <p className="text-white text-lg">{useCase.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UseCaseDisplay;