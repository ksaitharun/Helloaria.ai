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
    <div className="relative py-24 overflow-hidden ">
      <div className="container px-6 mx-auto">
        <h2 className="mb-16 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400">
          What Our Users Say
        </h2>

        <div
          ref={testimonialRef}
          className="relative testimonials-container"
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card w-full flex-shrink-0 ${index === activeTestimonial ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
                  }`}
              >
                <div className="max-w-2xl p-8 mx-auto transition-all duration-300 border bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-lg rounded-2xl border-blue-500/20 hover:border-blue-500/40 hover:-translate-y-2 group">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <div className="flex items-center justify-center w-12 h-12 text-lg font-bold text-white rounded-full bg-gradient-to-r from-blue-400 to-rose-400">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div className="flex-1 ml-4">
                      <h3 className="text-xl font-semibold text-white transition-all duration-300 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-rose-400">
                        {testimonial.name}
                      </h3>
                      <div className="flex items-center mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                            strokeWidth={0}
                          />
                        ))}
                      </div>
                    </div>
                    <Quote className="w-8 h-8 ml-auto transition-colors duration-300 text-white/40 group-hover:text-white/60" />
                  </div>
                  <p className="text-lg leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4 space-x-2 z-[1000]">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeTestimonial
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
      <div className="absolute rounded-full top-1/2 -right-32 w-96 h-96 bg-blue-500/10 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 rounded-full -left-32 w-96 h-96 bg-rose-500/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent -z-10" />
    </div>
  );
};

export default Testimonials;