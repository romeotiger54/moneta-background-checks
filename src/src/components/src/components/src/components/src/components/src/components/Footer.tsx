export function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Moneta Intelligence</h3>
            <div className="space-y-2 text-blue-200 text-sm">
              <p>Moneta is considered a CRA (Consumer Reporting Agency) per NYS Dept. of Licensing.</p>
              <p>NYS PI Lic. Unique ID No.11000226243</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Executive Background Checks</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investment Due Diligence</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compliance Monitoring</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DFS Licensing Checks</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Notable Cases</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact & Customers */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-blue-200 text-sm mb-6">
              <p><a href="tel:18002165198" className="hover:text-white transition-colors">(800) 216-5198</a></p>
              <p><a href="tel:12127214470" className="hover:text-white transition-colors">(212) 721-4470</a></p>
              <p><a href="mailto:admin@monetabackgroundchecks.com" className="hover:text-white transition-colors">admin@monetabackgroundchecks.com</a></p>
            </div>

            <h4 className="font-semibold mb-4">Customers</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Get Started</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FCRA Compliance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Order Forms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Professional Association */}
        <div className="mt-12 text-center">
          <p className="text-blue-200 text-sm mb-4">We are proud members of</p>
          <div className="flex justify-center">
            {/* PBSA Logo placeholder */}
            <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold">PBSA</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-700">
          {/* Copyright */}
          <div className="text-center text-blue-200 text-sm">
            <p>© 2025 Moneta Intelligence Group/Investigative Consultants International, LLC All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
