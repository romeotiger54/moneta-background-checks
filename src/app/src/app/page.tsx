export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-slate-800">
              Moneta
              <span className="text-sm font-normal text-slate-600 block leading-none">
                INTELLIGENCE GROUP
              </span>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium">
              Call Us (800) 216-5198
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/20 text-white border border-white/30 px-8 py-3 text-base font-medium rounded-full inline-block mb-8">
            30 Years of Proven Expertise
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
            Delivering Insights<br />
            that Power Your<br />
            Critical Business<br />
            Decisions
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            America's trusted background checks and intelligence services
            provider for corporations, financial institutions, and organizations.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">About Us</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Founded in 1995, Moneta specializes in background checks and intelligence 
                services for businesses, institutions, and organizations nationwide and internationally.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Trusted by Industry Leaders
              </h3>
              <p className="text-slate-700">
                Finance, Healthcare, Education, Manufacturing, Entertainment, Pharmaceutical and more
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Get Expert Assessment Within 24 Hours
          </h2>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-10 py-4 text-lg rounded-lg shadow-lg">
            Contact Us Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold mb-4">Moneta Intelligence</h3>
          <p className="text-blue-200 mb-4">
            (800) 216-5198 | admin@monetabackgroundchecks.com
          </p>
          <p className="text-blue-200 text-sm">
            © 2025 Moneta Intelligence Group. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
