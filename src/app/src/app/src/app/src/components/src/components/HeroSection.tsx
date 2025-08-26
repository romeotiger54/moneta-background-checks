export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden min-h-[600px]">
      {/* Background curved bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-20 text-white fill-current"
        >
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"/>
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center lg:text-left lg:max-w-4xl">
          {/* Experience Badge */}
          <div className="flex justify-center lg:justify-start mb-8">
            <div className="bg-white/20 text-white border border-white/30 px-8 py-3 text-base font-medium rounded-full">
              30 Years of Proven Expertise
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
            Delivering Insights
            <br />
            that Power Your
            <br />
            Critical Business
            <br />
            Decisions
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
            America's trusted background checks and intelligence services
            provider for corporations, financial institutions, and
            organizations.
          </p>
        </div>
      </div>
      
      {/* Background pattern for visual interest */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-blue-600/10 to-transparent hidden lg:block"></div>
    </section>
  );
}
