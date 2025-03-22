import React from 'react';

const ChatLoader = () => {
  return (
    <div className="flex items-center space-x-2 w-16 bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-3 rounded-2xl border border-blue-500/20">
      <div className="w-2 h-2 bg-blue-400/80 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
      <div className="w-2 h-2 bg-blue-400/80 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
      <div className="w-2 h-2 bg-blue-400/80 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
    </div>
  );
};

export default ChatLoader;