import React, { useState } from 'react';
import { Bell, ListTodo, Image, MessageCircle, Globe, LayoutDashboard } from 'lucide-react';
import FeatureDialog from './FeatureDialog';
import type { Message } from './FeatureDialog';

interface FeaturesProps {
  isVisible: boolean;
}

const Features: React.FC<FeaturesProps> = ({ isVisible }) => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features: {
    icon: any;
    title: string;
    description: string;
    color: string;
    messages: Message[];
  }[] = [
      {
        icon: Bell,
        title: "AI-powered Reminders",
        description: "Set reminders in seconds with natural language processing.",
        color: "bg-gradient-to-r from-blue-400 to-rose-400",
        messages: [
          { sender: 'user', text: "Remind me about the team meeting tomorrow at 3 PM" },
          { sender: 'ai', text: "I'll remind you about the team meeting tomorrow at 3 PM", highlight: "3 PM" },
          { sender: 'user', text: "Thanks!" },
          { sender: 'ai', text: "You're welcome! I'll notify you 15 minutes before." }
        ]
      },
      {
        icon: ListTodo,
        title: "To-Do List on WhatsApp",
        description: "Manage tasks without switching apps, right in your chat.",
        color: "bg-gradient-to-r from-rose-400 to-blue-400",
        messages: [
          { sender: 'user', text: "Add 'Review project proposal' to my todo list" },
          { sender: 'ai', text: "Task added to your todo list ✓" },
          { sender: 'user', text: "Show my tasks for today" },
          { sender: 'ai', text: "1. Review project proposal\n2. Team meeting at 3 PM" }
        ]
      },
      {
        icon: Image,
        title: "Image Recognition",
        description: "Extract text and analyze images with advanced AI capabilities.",
        color: "bg-gradient-to-r from-blue-400 to-rose-400",
        messages: [
          { sender: 'user', text: "Analyze this receipt image" },
          { sender: 'ai', text: "Total amount: $42.50\nDate: March 15, 2024\nStore: Coffee Shop" },
          { sender: 'user', text: "Save it to expenses" },
          { sender: 'ai', text: "Receipt saved to March expenses ✓" }
        ]
      },
      {
        icon: MessageCircle,
        title: "Auto Messages",
        description: "Schedule and automate messages to friends and colleagues.",
        color: "bg-gradient-to-r from-rose-400 to-blue-400",
        messages: [
          { sender: 'user', text: "Schedule 'Happy Birthday!' message to Sarah tomorrow 9 AM" },
          { sender: 'ai', text: "Birthday message scheduled for Sarah tomorrow at 9 AM ✓" },
          { sender: 'user', text: "Show my scheduled messages" },
          { sender: 'ai', text: "1. Sarah - Birthday wish - Tomorrow 9 AM" }
        ]
      },
      {
        icon: Globe,
        title: "Google Integrations",
        description: "Connect with Calendar, Drive, and other Google services.",
        color: "bg-gradient-to-r from-blue-400 to-rose-400",
        messages: [
          { sender: 'user', text: "Check my calendar for next week" },
          { sender: 'ai', text: "You have 3 meetings:\n1. Project Review - Monday\n2. Client Call - Wednesday\n3. Team Sync - Friday" },
          { sender: 'user', text: "Share the project doc with team" },
          { sender: 'ai', text: "Project document shared via Google Drive ✓" }
        ]
      },
      {
        icon: LayoutDashboard,
        title: "Personal Dashboard",
        description: "Track tasks, reminders, and productivity in one place.",
        color: "bg-gradient-to-r from-rose-400 to-blue-400",
        messages: [
          { sender: 'user', text: "Show my dashboard summary" },
          { sender: 'ai', text: "Today's Overview:\n- 5 tasks completed\n- 2 meetings scheduled\n- 3 reminders set" },
          { sender: 'user', text: "How's my productivity this week?" },
          { sender: 'ai', text: "You've completed 85% of your tasks - Great job! 🎉" }
        ]
      }
    ];

  return (
    <div id="features" className="relative py-16 overflow-hidden md:py-24">
      <div className="container px-4 mx-auto md:px-6">
        <h2 className="mb-8 text-3xl font-bold text-center text-transparent md:text-4xl md:mb-16 bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400">
          Key Features
        </h2>

        <div className="grid max-w-6xl grid-cols-1 gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const showDialog = activeFeature === index;
            const position = index < 3 ? 'bottom' : 'top';

            return (
              <div
                key={index}
                className={`relative h-[220px] md:h-[280px] ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}
                style={{
                  animationDelay: `${0.2 + index * 0.1}s`,
                  zIndex: showDialog ? 40 : 10
                }}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className="flex flex-col h-full p-4 transition-all duration-300 border bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-lg rounded-2xl md:p-6 border-blue-500/20 hover:border-blue-500/40 hover:-translate-y-2 group">
                  <div className="flex items-center justify-center mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 transition-opacity duration-300 opacity-50 blur-xl group-hover:opacity-100" style={{ background: feature.color }} />
                      <div className={`relative w-12 md:w-16 h-12 md:h-16 rounded-2xl flex items-center justify-center ${feature.color}`}>
                        <Icon className="w-6 h-6 text-white md:w-8 md:h-8" />
                      </div>
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-center text-white transition-all duration-300 md:text-xl md:mb-3 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-rose-400 line-clamp-1">
                    {feature.title}
                  </h3>
                  <p className="flex-grow text-sm text-center text-gray-400 transition-colors duration-300 group-hover:text-gray-300 line-clamp-2">
                    {feature.description}
                  </p>

                  <FeatureDialog
                    messages={feature.messages}
                    isVisible={showDialog}
                    position={position}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced background effects */}
      <div className="absolute rounded-full top-1/2 -right-32 w-96 h-96 bg-blue-500/10 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 rounded-full -left-32 w-96 h-96 bg-rose-500/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent -z-10" />
    </div>
  );
};

export default Features;
