import React, { useRef } from 'react';
import { cn } from '../lib/utils';
import Image from 'next/image';

interface ChatAnimationProps {
  className?: string;
}

const ChatAnimation: React.FC<ChatAnimationProps> = ({ className }) => {
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="relative w-[285px] h-[400px] -mt-8 isolate">
      <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 via-blue-900 to-rose-600 rounded-3xl opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 to-rose-500/30 animate-pulse-slow" />
      </div>

      <div className={cn([
        'relative w-full h-full overflow-hidden rounded-3xl bg-gradient-to-br from-black/90 to-black/50 backdrop-blur-lg shadow-2xl border border-blue-500/20',
        className
      ])}>
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/80 to-black/40 backdrop-blur-sm z-10 flex items-center px-3 border-b border-blue-500/20">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mr-2">
              <Image 
                src="/assets/aria-icon.svg" 
                alt="" 
                width={16}
                height={16}
              />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Hello Aria</div>
              <div className="text-[10px] text-blue-100/80 flex items-center mt-0.5">
                <span className="rounded-full size-2 bg-gradient-to-tr from-blue-300 to-blue-700 animate-pulse mr-1" />
                Online
              </div>
            </div>
          </div>
        </div>

        <div 
          ref={messagesContainerRef}
          className="chat-animation-container flex flex-col overflow-y-auto h-[calc(100%-6rem)] pt-14 px-3 no-scrollbar overscroll-contain"
          onWheel={(e) => e.stopPropagation()}
        >
          <div className="space-y-2" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/80 to-black/40 backdrop-blur-sm z-10 border-t border-blue-500/20 flex items-center px-3">
          <div className="flex-1 h-8 bg-blue-950/20 rounded-full px-3 py-1.5 text-xs text-white flex items-center border border-blue-500/20 transition-all duration-300">
            <input
              ref={inputRef}
              type="text"
              value=""
              readOnly
              className="w-full bg-transparent outline-none text-white/90 placeholder-white/40 font-bold overflow-x-auto whitespace-nowrap"
              placeholder="Type a message..."
            />
          </div>
          <button 
            className="w-8 h-8 rounded-full ml-2 flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:opacity-90 bg-blue-950/20 opacity-70"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatAnimation;