import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'About', id: 'about' },
        { label: 'Team', id: 'team' },
        { label: 'Performance', id: 'performance' },
        { label: 'Contact', id: 'contact' },
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Healthcare AI' },
        { label: 'Defense Intel' },
        { label: 'Sentiment Analysis' },
        { label: 'Predictive Models' },
      ]
    },
    {
      title: 'Platforms',
      links: [
        { label: 'PathML' },
        { label: 'SentiGrade' },
        { label: 'SenteMotion' },
        { label: 'SentiSocial' },
      ]
    }
  ];

  return (
    <footer className="bg-[#0a0e27] border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-2xl font-bold tracking-tight">
                <span className="text-white">SENTI</span>
                <span className="text-[#00d4ff]">METRIX</span>
              </div>
              <div className="h-6 w-px bg-cyan-500/30"></div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">
                Intelligence AI
              </div>
            </div>
            
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Advanced machine learning intelligence systems for healthcare, defense, and government. 
              Operational since 2006. $11M+ in federal contracts delivered.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <a
                href="https://maps.google.com/?q=6017+Southport+Dr+Bethesda+MD+20814"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-gray-500 hover:text-[#00d4ff] transition-colors"
              >
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>6017 Southport Dr, Bethesda, MD 20814</span>
              </a>
              
              <a
                href="tel:2404985285"
                className="flex items-center gap-2 text-gray-500 hover:text-[#00d4ff] transition-colors"
              >
                <Phone size={16} />
                <span>(240) 498-5285</span>
              </a>
              
              <a
                href="mailto:kagan@sentimetrix.com"
                className="flex items-center gap-2 text-gray-500 hover:text-[#00d4ff] transition-colors"
              >
                <Mail size={16} />
                <span>kagan@sentimetrix.com</span>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.id ? (
                      <button
                        onClick={() => {
                          const element = document.getElementById(link.id);
                          if (element) {
                            const offset = 80;
                            const elementPosition = element.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.pageYOffset - offset;
                            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                          }
                        }}
                        className="text-sm text-gray-500 hover:text-[#00d4ff] transition-colors text-left uppercase tracking-wide"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <span className="text-sm text-gray-500 uppercase tracking-wide">{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p>© {currentYear} SentiMetrix, Inc. All rights reserved.</p>
              <div className="hidden sm:block h-4 w-px bg-cyan-500/20"></div>
              <p className="font-mono">UEI: QC8LYF3ND8A4 | CAGE: 513B0</p>
            </div>
            <div className="flex gap-6 uppercase tracking-wider">
              <a href="#" className="hover:text-[#00d4ff] transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-[#00d4ff] transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}