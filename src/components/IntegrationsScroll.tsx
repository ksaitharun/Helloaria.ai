import React from 'react';
import { Calendar, FileSearch, Plane, Bell, MessageSquare, FileText, Clock, Mail } from 'lucide-react';

const integrations = [
  {
    name: 'Google Calendar',
    icon: Calendar,
    color: '#4285F4'
  },
  {
    name: 'Google Drive',
    icon: FileSearch,
    color: '#0F9D58'
  },
  {
    name: 'Flight Status',
    icon: Plane,
    color: '#6366F1'
  },
  {
    name: 'WhatsApp',
    icon: MessageSquare,
    color: '#25D366'
  },
  {
    name: 'Notes',
    icon: FileText,
    color: '#FF9800'
  },
  {
    name: 'Reminders',
    icon: Bell,
    color: '#EA4335'
  },
  {
    name: 'Gmail',
    icon: Mail,
    color: '#DB4437'
  },
  {
    name: 'Tasks',
    icon: Clock,
    color: '#4285F4'
  }
];

const IntegrationsScroll: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-900 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-900 to-transparent z-10" />
      
      {/* Scrolling Container */}
      <div className="flex animate-scroll">
        {/* First Set */}
        <div className="flex space-x-4 pr-4">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <div
                key={`${integration.name}-1-${index}`}
                className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300"
                style={{ whiteSpace: 'nowrap' }}
              >
                <Icon className="w-4 h-4" style={{ color: integration.color }} />
                <span className="text-sm text-white/80">{integration.name}</span>
              </div>
            );
          })}
        </div>
        
        {/* Second Set (Clone for seamless loop) */}
        <div className="flex space-x-4 pr-4">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <div
                key={`${integration.name}-2-${index}`}
                className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300"
                style={{ whiteSpace: 'nowrap' }}
              >
                <Icon className="w-4 h-4" style={{ color: integration.color }} />
                <span className="text-sm text-white/80">{integration.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IntegrationsScroll;