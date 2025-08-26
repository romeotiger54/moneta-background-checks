export function StatsSection() {
  const stats = [
    {
      number: "100%",
      label: "Client Satisfaction",
      subtitle: "Since 1995"
    },
    {
      number: "50+", 
      label: "Fortune 500 Clients",
      subtitle: "Trusted by Industry Leaders"
    },
    {
      number: "250",
      label: "Countries Served",
      subtitle: ""
    },
    {
      number: "30 Years",
      label: "in Business,",
      subtitle: "Proven Track Record"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Just the Facts
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-white font-semibold text-lg">
                  {stat.label}
                </div>
                {stat.subtitle && (
                  <div className="text-blue-200 text-sm mt-1">
                    {stat.subtitle}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
