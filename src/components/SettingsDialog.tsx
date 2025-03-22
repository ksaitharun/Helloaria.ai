import React from 'react';
import { X } from 'lucide-react';

interface SettingsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  plan: string;
  timezone: string;
}

const SettingsDialog: React.FC<SettingsDialogProps> = ({ isOpen, onClose, plan, timezone }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-black/80 to-black/40 rounded-2xl max-w-lg w-full overflow-hidden border border-blue-500/20 relative">
        {/* Header - Fixed */}
        <div className="sticky top-0 bg-black/20 backdrop-blur-sm z-10 p-6 border-b border-blue-500/20 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Settings</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors duration-300"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>
        
        {/* Content - Scrollable */}
        <div className="overflow-y-auto max-h-[calc(100vh-16rem)] scrollbar-hide">
          <div className="p-6 space-y-6">
            {/* Plan Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Your Plan</h3>
              <div className="bg-white/5 rounded-lg p-4 border border-blue-500/20">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{plan === 'pro' ? 'Pro Plan' : 'Basic Plan'}</p>
                    <p className="text-sm text-gray-400">
                      {plan === 'pro' ? '₹129/month' : '₹89/month'}
                    </p>
                  </div>
                  <a 
                    href="/manage-subscription" 
                    target="_blank"
                    className="px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg text-blue-400 text-sm transition-colors"
                  >
                    Manage Plan
                  </a>
                </div>
              </div>
            </div>

            {/* Timezone Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Timezone</h3>
              <div className="bg-white/5 rounded-lg p-4 border border-blue-500/20">
                <p className="font-medium">{timezone}</p>
                <p className="text-sm text-gray-400 mt-1">
                  All reminders and events will be set according to this timezone
                </p>
              </div>
            </div>

            {/* Account Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Account</h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4 border border-blue-500/20">
                  <p className="font-medium">Phone Number</p>
                  <p className="text-sm text-gray-400">+919985474932</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-blue-500/20">
                  <p className="font-medium">Language</p>
                  <p className="text-sm text-gray-400">English</p>
                </div>
              </div>
            </div>

            {/* Notifications Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Notifications</h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4 border border-blue-500/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Task Reminders</p>
                      <p className="text-sm text-gray-400">Get notified about upcoming tasks</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                    </label>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-blue-500/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Calendar Updates</p>
                      <p className="text-sm text-gray-400">Get notified about calendar changes</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Privacy</h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4 border border-blue-500/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Share Usage Data</p>
                      <p className="text-sm text-gray-400">Help us improve Hello Aria</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div>
              <h3 className="text-lg font-semibold text-rose-500 mb-4">Danger Zone</h3>
              <div className="bg-rose-500/10 rounded-lg p-4 border border-rose-500/20">
                <p className="text-sm text-gray-400 mb-4">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                <button className="px-4 py-2 bg-rose-500/10 hover:bg-rose-500/20 rounded-lg text-rose-500 text-sm transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsDialog;