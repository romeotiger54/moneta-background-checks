export function CallToActionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
          Mitigate risks associated with hiring decisions and investment transactions.
        </h2>
        
        <p className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto">
          Join the 50+ Fortune 500 companies who trust Moneta to protect their most important investments.
        </p>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-10 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 mb-16">
          <svg className="w-5 h-5 mr-3 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Get Expert Assessment Within 24 Hours
        </button>

        <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 shadow-md">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-slate-900 mb-2 text-lg">24-Hour Response Guaranteed</h3>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 shadow-md">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-bold text-slate-900 mb-2 text-lg">100% Confidential Process</h3>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 shadow-md">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-slate-900 mb-2 text-lg">Never Outsourced, Always Reliable</h3>
          </div>
        </div>

        <div className="text-center border-t pt-8">
          <p className="text-slate-700 mb-2 font-medium">Start a plan for your organization today.</p>
          <p className="text-slate-600">
            (212) 721-4470 or{" "}
            <a href="mailto:admin@monetabackgroundchecks.com" className="text-blue-600 underline hover:text-blue-800">
              admin@monetabackgroundchecks.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
