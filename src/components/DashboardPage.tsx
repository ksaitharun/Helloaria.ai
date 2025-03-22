'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  Bell, Calendar, CheckCircle, ListTodo, Mic, Image as ImageIcon,
  Users, Settings, LogOut, Mail, FileText, Globe, ChevronLeft, ChevronRight,
  Menu, X
} from 'lucide-react';
import SettingsDialog from './SettingsDialog';

interface Contact {
  id: string;
  name: string;
  phone: string;
  category: 'family' | 'friends' | 'work';
  initial: string;
}

interface Task {
  id: string;
  text: string;
  completed: boolean;
  date: string;
}

interface ListItem {
  id: string;
  text: string;
  completed: boolean;
}

type ListCategory = 'market' | 'work' | 'personal' | 'shopping';

const DashboardPage = () => {
  const router = useRouter();
  const [integrations, setIntegrations] = useState({
    calendar: false,
    drive: false,
    gmail: false,
    flight: false
  });
  const [activeContactTab, setActiveContactTab] = useState<'family' | 'friends' | 'work'>('family');
  const [activeListTab, setActiveListTab] = useState<ListCategory>('market');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', text: 'Login on Product Hunt', completed: false, date: 'Mar 19, 2025, 6:00 PM' },
    { id: '2', text: 'Cross-check your completed tasks for the day', completed: false, date: 'Mar 19, 2025, 9:30 PM' },
    { id: '3', text: 'Remove AWS support', completed: false, date: 'Apr 29, 2025, 9:00 AM' }
  ]);

  const [lists, setLists] = useState<Record<ListCategory, ListItem[]>>({
    market: [
      { id: '1', text: 'milk', completed: false },
      { id: '2', text: 'bread', completed: false },
      { id: '3', text: 'beans', completed: false }
    ],
    work: [
      { id: '1', text: 'Complete project docs', completed: false },
      { id: '2', text: 'Team meeting prep', completed: false },
      { id: '3', text: 'Client presentation', completed: false }
    ],
    personal: [
      { id: '1', text: 'Gym membership', completed: false },
      { id: '2', text: 'Book dentist', completed: false },
      { id: '3', text: 'Call mom', completed: false }
    ],
    shopping: [
      { id: '1', text: 'New headphones', completed: false },
      { id: '2', text: 'Winter jacket', completed: false },
      { id: '3', text: 'Running shoes', completed: false }
    ]
  });

  const [contacts, setContacts] = useState<Contact[]>([
    { id: '1', name: 'Dad', phone: '+91 89660 14358', category: 'family', initial: 'D' },
    { id: '2', name: 'Mom', phone: '+91 76740 14358', category: 'family', initial: 'M' },
    { id: '3', name: 'Sister', phone: '+91 87127 20957', category: 'family', initial: 'S' },
    { id: '4', name: 'Anna', phone: '+91 76740 14358', category: 'friends', initial: 'A' },
    { id: '5', name: 'Tony', phone: '+91 81868 52957', category: 'friends', initial: 'T' },
    { id: '6', name: 'Srinivas', phone: '+91 87127 20957', category: 'work', initial: 'S' },
    { id: '7', name: 'Nanda', phone: '+91 847-744-0001', category: 'work', initial: 'N' }
  ]);

  const filteredContacts = contacts.filter(contact => contact.category === activeContactTab);

  const handleLogout = () => {
    router.push('/');
  };

  const toggleIntegration = (key: keyof typeof integrations) => {
    setIntegrations(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleTaskComplete = (taskId: string) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const toggleListItemComplete = (itemId: string) => {
    setLists(prev => ({
      ...prev,
      [activeListTab]: prev[activeListTab].map(item =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
    }));
  };

  const addListItem = () => {
    const newItem: ListItem = {
      id: Date.now().toString(),
      text: '',
      completed: false
    };
    setLists(prev => ({
      ...prev,
      [activeListTab]: [...prev[activeListTab], newItem]
    }));
  };
  const addContact = () => {
    const newContact: Contact = {
      id: Date.now().toString(),
      name: 'New Contact',
      phone: '+91 ',
      category: activeContactTab,
      initial: 'N'
    };
    setContacts(prev => [...prev, newContact]);
  };

  const editContact = (contactId: string) => {
    console.log('Editing contact:', contactId);
  };

  const calendarEvents = [
    { time: '1:00 PM', title: 'Customer Onboarding Call - John' },
    { time: '3:00 PM', title: 'Engineering Cycle Meeting' },
    { time: '5:00 PM', title: 'Focused work time, wrap up the landing page design' },
    { time: '5:30 PM', title: 'Newsletter goes out' },
    { time: '8:00 PM', title: 'Tennis with Ji at Cuesta Park' },
  ];

  const goToPreviousDay = () => {
    setSelectedDate(prev => {
      const newDate = new Date(prev);
      newDate.setDate(prev.getDate() - 1);
      return newDate;
    });
  };

  const goToNextDay = () => {
    setSelectedDate(prev => {
      const newDate = new Date(prev);
      newDate.setDate(prev.getDate() + 1);
      return newDate;
    });
  };

  const goToToday = () => {
    setSelectedDate(new Date());
  };

  return (
    <div className="min-h-screen bg-black">
            {/* Settings Dialog */}
      <SettingsDialog 
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        plan="pro"
        timezone="Asia/Kolkata"
      />

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-lg border-b border-blue-500/20 z-50 flex items-center justify-between px-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 hover:bg-white/5 rounded-lg transition-colors"
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <div className="flex items-center space-x-3">
          <Image 
            src="/assets/aria-icon.svg" 
            alt="Aria" 
            width={32} 
            height={32} 
          />
          <div>
            <h1 className="text-lg font-bold">Hello Aria</h1>
            <p className="text-sm text-gray-400">Dashboard</p>
          </div>
        </div>
        <button 
          onClick={() => setIsSettingsOpen(true)}
          className="p-2 hover:bg-white/5 rounded-lg transition-colors"
        >
          <Settings className="w-6 h-6 text-gray-400" />
        </button>
      </div>
            {/* Sidebar */}
      <div className={`fixed left-0 top-0 bottom-0 w-64 bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-lg border-r border-blue-500/20 transform transition-transform duration-300 z-40 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}>
        <div className="p-6">
          <div className="hidden md:flex items-center space-x-3 mb-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-rose-500 rounded-full opacity-20 blur" />
              <Image 
                src="/assets/aria-icon.svg" 
                alt="Aria" 
                width={40} 
                height={40} 
                className="relative"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold">Hello Aria</h1>
              <p className="text-sm text-gray-400">Dashboard</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-blue-500/20">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-rose-500 flex items-center justify-center text-sm font-bold">
                T
              </div>
              <div>
                <p className="text-sm font-medium">Tharun</p>
                <p className="text-xs text-gray-400">+919985474932</p>
              </div>
            </div>
            <button 
              onClick={() => setIsSettingsOpen(true)}
              className="p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              <Settings className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-rose-500"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
            {/* Main Content */}
      <div className="md:ml-64 p-4 md:p-8 pt-20 md:pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Upcoming Reminders */}
          <div className="bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-blue-500/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Upcoming Reminders</h2>
              <span className="text-2xl font-bold text-blue-400">{tasks.length}</span>
            </div>
            <div className="space-y-4">
              {tasks.map(task => (
                <div key={task.id} className="flex items-start space-x-3">
                  <button
                    onClick={() => toggleTaskComplete(task.id)}
                    className={`w-5 h-5 rounded-full border-2 border-blue-400 flex-shrink-0 mt-0.5 transition-colors ${
                      task.completed ? 'bg-blue-400' : ''
                    }`}
                  />
                  <div>
                    <p className={`font-medium ${task.completed ? 'line-through text-gray-400' : ''}`}>
                      {task.text}
                    </p>
                    <p className="text-sm text-gray-400">{task.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>          {/* Lists */}
          <div className="bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-blue-500/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Lists</h2>
              <button 
                onClick={addListItem}
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Add Item
              </button>
            </div>

            {/* List Tabs */}
            <div className="flex space-x-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
              {(Object.keys(lists) as ListCategory[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveListTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                    activeListTab === tab
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              {lists[activeListTab as keyof typeof lists].map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <input 
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleListItemComplete(item.id)}
                    className="rounded border-blue-500/20"
                  />
                  <span className={item.completed ? 'line-through text-gray-400' : ''}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>          {/* Calendar */}
          <div className="bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-blue-500/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Calendar</h2>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={goToPreviousDay}
                  className="p-1 hover:bg-white/10 rounded transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-400" />
                </button>
                <button
                  onClick={goToToday}
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Today
                </button>
                <button 
                  onClick={goToNextDay}
                  className="p-1 hover:bg-white/10 rounded transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {calendarEvents.map((event, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-sm text-gray-400 w-16 flex-shrink-0">{event.time}</span>
                  <div className="flex-1 p-2 bg-white/5 rounded-lg">
                    <p className="text-sm">{event.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>          {/* Contacts with Tabs */}
          <div className="bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-blue-500/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Contacts</h2>
              <button 
                onClick={addContact}
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Add Contact
              </button>
            </div>
            
            {/* Tabs */}
            <div className="flex space-x-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
              {(['family', 'friends', 'work'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveContactTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeContactTab === tab
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {filteredContacts.map((contact) => (
                <div key={contact.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-rose-500 flex items-center justify-center text-sm font-bold">
                      {contact.initial}
                    </div>
                    <div>
                      <p className="font-medium">{contact.name}</p>
                      <p className="text-sm text-gray-400">{contact.phone}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => editContact(contact.id)}
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Edit
                  </button>
                </div>
              ))}
            </div>
          </div>          {/* Integrations */}
          <div className="bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-blue-500/20">
            <h2 className="text-lg font-semibold mb-6">Integrations</h2>
            <div className="space-y-4">
              {[
                {
                  key: 'calendar',
                  title: 'Google Calendar',
                  description: 'Sync your events',
                  icon: <Calendar className="w-5 h-5 text-[#4285F4]" />,
                  color: '#4285F4',
                },
                {
                  key: 'drive',
                  title: 'Google Drive',
                  description: 'Access your files',
                  icon: <FileText className="w-5 h-5 text-[#0F9D58]" />,
                  color: '#0F9D58',
                },
                {
                  key: 'gmail',
                  title: 'Gmail',
                  description: 'Manage emails',
                  icon: <Mail className="w-5 h-5 text-[#EA4335]" />,
                  color: '#EA4335',
                },
                {
                  key: 'flight',
                  title: 'Flight Status',
                  description: 'Track flights',
                  icon: <Globe className="w-5 h-5 text-[#6366F1]" />,
                  color: '#6366F1',
                },
              ].map(({ key, title, description, icon, color }) => (
                <div key={key} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8`} style={{ backgroundColor: `${color}1A`, borderRadius: '0.5rem' }}>
                      <div className="flex items-center justify-center w-full h-full">
                        {icon}
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">{title}</p>
                      <p className="text-xs text-gray-400">{description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleIntegration(key as keyof typeof integrations)}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                      integrations[key as keyof typeof integrations] ? `bg-[${color}]` : 'bg-gray-700'
                    }`}
                  >
                    <span
                      className={`absolute w-4 h-4 bg-white rounded-full top-1 transition-transform duration-300 ${
                        integrations[key as keyof typeof integrations] ? 'left-7' : 'left-1'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
