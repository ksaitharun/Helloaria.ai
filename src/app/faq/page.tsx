'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import Footer from '@/components/Footer'

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const faqs = [
    {
      question: "What is Hello Aria?",
      answer: "Hello Aria is an AI-powered WhatsApp assistant designed to enhance productivity by managing tasks, setting reminders, and integrating seamlessly with tools like Google Calendar and Google Drive. It functions as your personal productivity partner, helping you stay organized through natural language interactions."
    },
    {
      question: "How does Hello Aria integrate with WhatsApp?",
      answer: "Hello Aria functions as a chatbot within WhatsApp, allowing you to interact using natural language to manage tasks, set reminders, and access other productivity features directly through chat. Simply save our WhatsApp number (+91 70754 71676) and start chatting to use all features."
    },
    {
      question: "What features does Hello Aria offer?",
      answer: "Hello Aria offers numerous productivity features including:\n• Task Management: Organize and prioritize tasks efficiently\n• Automated Messaging: Schedule messages to be sent at specific times\n• Calendar Integration: Sync with Google Calendar for seamless scheduling\n• File Management: Access and manage files through Google Drive integration\n• Flight Status Updates: Receive real-time flight information\n• OCR Quick Notes: Extract text from images for quick note-taking"
    },
    {
      question: "How can I get started with Hello Aria?",
      answer: "Getting started with Hello Aria is simple:\n1. Save our WhatsApp number (+91 70754 71676)\n2. Send a message to start the chat\n3. Follow the quick setup instructions\n4. Start using Hello Aria for your tasks and reminders!"
    },
    {
      question: "Is Hello Aria free to use?",
      answer: "Hello Aria offers two plans:\n• Basic Plan (₹89/month): Includes basic reminders, simple to-do lists, and text notes\n• Pro Plan (₹129/month): Includes advanced AI features, unlimited tasks, OCR capabilities, and priority support"
    },
    {
      question: "How does Hello Aria handle my data?",
      answer: "Hello Aria takes data privacy seriously. We use end-to-end encryption for messages, and your data is protected according to strict privacy standards. We never store or process the content of your messages, and all integrations (like Google Calendar) require explicit permission from you."
    },
    {
      question: "Can Hello Aria assist with team collaboration?",
      answer: "Yes! Hello Aria's features support team collaboration through:\n• Shared task management\n• Team reminders and notifications\n• Collaborative scheduling\n• File sharing and organization\nMaking it perfect for both individual users and teams."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your Hello Aria subscription at any time through:\n• WhatsApp chat commands\n• Emailing billing@realityrift.co\nYour service will continue until the end of your current billing period."
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500">
            Frequently Asked Questions
          </h1>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-indigo-400 transition-transform duration-300",
                      openQuestion === index ? "rotate-180" : ""
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openQuestion === index ? "max-h-96" : "max-h-0"
                  )}
                >
                  <div className="px-6 pb-4 text-gray-300 whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer 
        showPrivacyPolicy={showPrivacyPolicy}
        setShowPrivacyPolicy={setShowPrivacyPolicy}
      />
    </div>
  );
}