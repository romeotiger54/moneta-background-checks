export function TrustedBySection() {
  const industries = [
    "Academic Institutions",
    "Corporations", 
    "Medical Offices",
    "Entertainment",
    "Financial Services",
    "Fortune 500 Cos.",
    "Government",
    "Private Equity"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">
            Trusted by Leading Institutions
          </h2>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
            Moneta proudly serves clients across various industries nationwide and internationally, providing trusted
            intelligence and background check services. Following are just a few areas we service:
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-lg hover:bg-slate-50 transition-colors duration-200"
            >
              <span className="text-slate-700 font-medium">{industry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
