export function CoreServicesSection() {
  const services = [
    {
      title: "AML Compliance",
      features: [
        "Sanctions screening",
        "PEP & adverse media monitoring", 
        "Ongoing compliance monitoring"
      ],
      description: "Ensure compliance with rules & regulations, i.e. Bank Secrecy Act, etc.",
      buttonText: "Compliance Solutions"
    },
    {
      title: "Background Checks",
      features: [
        "Pre- & Post-Hire executive screening",
        "Board member background checks",
        "Pre-deal leadership team vetting"
      ],
      description: "Simple to order background checks, emphasizing human interaction and old-school smarts.",
      buttonText: "Screening Solutions"
    },
    {
      title: "NYS DFS Licensing",
      features: [
        "30+ year provider of DFS checks",
        "Trusted by leading financial orgs",
        "Flat-fee services"
      ],
      description: "Be guided through DFS' rigorous background check processes.",
      buttonText: "DFS Licensing Checks"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Core Services
          </h2>
          <p className="text-xl text-slate-600">
            Moneta delivers fast, FCRA-compliant background checks from coast to coast.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6">
              <div className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {service.title}
                </h3>
              </div>
              
              {/* Features List */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* CTA Button */}
              <button className="w-full border border-slate-300 text-slate-700 hover:bg-slate-50 py-2 px-4 rounded-md transition-colors duration-200">
                {service.buttonText}
                <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
