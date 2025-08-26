export function TestimonialsSection() {
  const testimonials = [
    {
      rating: 5,
      text: "...Moneta Intelligence service and professionalism is second-to-none. As a large company with tight timelines and high demands, we need the best in the business. Moneta Intelligence is just that. They are thorough and efficient, communicating with clients throughout the process. We would not use anyone else.",
      author: "Managing Director",
      title: "Officer",
      company: "Private Equity"
    },
    {
      rating: 5,
      text: "I worked very closely with Moneta during my years at [intentionally left blank] Capital. They always provided us with outstanding due diligence investigations, background checks and analysis. Diana Moneta and her team are highly skilled and professional, and they were always willing to go the extra mile...",
      author: "Principal", 
      title: "Officer",
      company: "LIHTC"
    },
    {
      rating: 5,
      text: "Moneta has always provided us with excellent service and has gone above and beyond to accommodate our requests for expedited searches when needed. I would highly recommend Diana and her firm.",
      author: "Compliance Officer",
      title: "Compliance Officer", 
      company: "Private Equity"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300 h-full rounded-lg p-8 flex flex-col">
              {/* Star Rating */}
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-slate-700 italic mb-8 leading-relaxed
