import React from 'react';
import { cn } from '../lib/utils';

interface Message {
  text: string;
  sender: 'user' | 'ai';
  highlight?: string;
}

interface FeatureDialogProps {
  messages: Message[];
  isVisible: boolean;
  position: 'top' | 'bottom';
}

const FeatureDialog: React.FC<FeatureDialogProps> = ({ messages, isVisible, position }) => {
  if (!isVisible) return null;

  return (
    <div 
      className={cn(
        "absolute left-1/2 -translate-x-1/2 w-72 bg-black/90 backdrop-blur-lg rounded-xl p-4 border border-indigo-500/30 shadow-2xl",
        position === 'top' ? "-top-[280px]" : "-bottom-[280px]",
        "z-50" // Higher z-index to ensure dialogs are always on top
      )}
      style={{ pointerEvents: 'none' }} // Prevents dialog from blocking hover state
    >
      <div className="space-y-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={cn(
              "p-2 rounded-lg text-sm max-w-[80%] animate-fadeIn",
              message.sender === 'user' 
                ? "ml-auto bg-indigo-500 text-white rounded-br-none"
                : "bg-white/10 text-white rounded-bl-none"
            )}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {message.highlight ? (
              <span className="text-cosmic-accent font-medium">{message.highlight}</span>
            ) : message.text}
          </div>
        ))}
      </div>
      <div 
        className={cn(
          "absolute left-1/2 w-4 h-4 bg-black/90 border-indigo-500/30",
          position === 'top' 
            ? "bottom-[-8px] border-b border-r rotate-45" 
            : "top-[-8px] border-t border-l rotate-45"
        )}
        style={{ transform: 'translateX(-50%) rotate(45deg)' }}
      />
    </div>
  );
};

export default FeatureDialog;