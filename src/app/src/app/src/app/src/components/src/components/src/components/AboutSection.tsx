export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Text */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              About Us
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Founded in 1995, Moneta specializes in background
              checks and intelligence services for businesses,
              institutions, and organizations nationwide and
              internationally.
            </p>
          </div>

          {/* Right Column - Trust Indicators */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Trusted by Industry Leaders
              </h3>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Finance, Healthcare, Education, Manufacturing, Entertainment,
              Pharmaceutical and more
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
