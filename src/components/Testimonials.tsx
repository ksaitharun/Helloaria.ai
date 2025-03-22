import React, { useRef } from 'react';
import { Quote, Star } from 'lucide-react';

interface TestimonialsProps {
  isVisible: boolean;
  activeTestimonial: number;
  setActiveTestimonial: (index: number) => void;
  testimonials: Array<{
    name: string;
    rating: number;
    text: string;
  }>;
}

const Testimonials: React.FC<TestimonialsProps> = ({ 
  isVisible, 
  activeTestimonial, 
  setActiveTestimonial,
  testimonials 
}) => {
  const testimonialRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-rose-400">
          What Our Users Say
        </h2>
        
        <div 
          ref={testimonialRef}
          className="testimonials-container relative"
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card w-full flex-shrink-0 ${
                  index === activeTestimonial ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
                }`}
              >
                <div className="max-w-2xl mx-auto bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-2 group">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-rose-400 flex items-center justify-center text-lg font-bold text-white">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-xl font-semibold text-white group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-rose-400 transition-all duration-300">
                        {testimonial.name}
                      </h3>
                      <div className="flex items-center mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-4 h-4 fill-current text-yellow-400" 
                            strokeWidth={0}
                          />
                        ))}
                      </div>
                    </div>
                    <Quote className="w-8 h-8 ml-auto text-white/40 group-hover:text-white/60 transition-colors duration-300" />
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-gradient-to-r from-blue-400 to-rose-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced background effects */}
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent -z-10" />
    </div>
  );
};

export default Testimonials;