import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Building2, Mail, Hash } from 'lucide-react';

export function CorporateData() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const corporateInfo = [
    { label: 'UEI', value: 'QC8LYF3ND8A4' },
    { label: 'CAGE Code', value: '513B0' },
    { label: 'Business Type', value: 'Small Business' },
  ];

  const contactInfo = [
    { label: 'POC', value: 'Vadim Kagan' },
    { label: 'Phone', value: '(240) 498-5285' },
    { label: 'Email', value: 'kagan@sentimetrix.com' },
    { label: 'Website', value: 'www.sentimetrix.com' },
    { label: 'Address', value: '6017 Southport Dr, Bethesda, MD 20814' },
  ];

  const naicsCodes = [
    { code: '541715', label: 'R&D in Physical, Engineering, and Life Sciences', primary: true },
    { code: '541690', label: 'Scientific & Technical Consulting Services', primary: false },
    { code: '541511', label: 'Custom Computer Programming Services', primary: false },
    { code: '541512', label: 'Computer Systems Design Services', primary: false },
    { code: '541330', label: 'Engineering Services', primary: false },
    { code: '611420', label: 'Computer Training', primary: false }
  ];

  return (
    <section id="credentials" className="relative py-20 md:py-24 bg-gradient-to-b from-[#0f1729] to-[#0a0e27] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
            Classification Data
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Federal Contractor Credentials
          </h2>
          
          <p className="text-xl text-gray-400 leading-relaxed">
            Complete certification details and federal contractor identifiers
          </p>
        </motion.div>

        {/* Unified Credential Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-12"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-2xl"></div>
          
          <div className="relative bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] border border-cyan-500/30 overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-px bg-cyan-500/20">
              {/* Left Column: Corporate Identifiers + NAICS Codes Stacked */}
              <div className="lg:col-span-2 flex flex-col gap-px">
                {/* Corporate Identifiers */}
                <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] p-6 sm:p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                      <Building2 className="text-[#00d4ff]" size={22} />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide">Corporate Identifiers</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {corporateInfo.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-4 bg-[#0a0e27]/50 border-l-2 border-cyan-500/50"
                      >
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-wide">{item.label}</span>
                        <span className="text-base font-bold text-white font-mono">{item.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* NAICS Codes */}
                <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] p-6 sm:p-8 lg:p-10 flex-1">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                      <Hash className="text-[#00d4ff]" size={22} />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide">NAICS Codes</h3>
                  </div>
                  
                  <div className="grid gap-3">
                    {naicsCodes.map((item, index) => (
                      <motion.div
                        key={item.code}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
                        className={`p-4 border-l-2 ${
                          item.primary
                            ? 'bg-cyan-500/10 border-cyan-500'
                            : 'bg-[#0a0e27]/30 border-cyan-500/30'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className={`font-mono font-bold text-sm ${
                            item.primary ? 'text-[#00d4ff]' : 'text-cyan-400'
                          }`}>
                            {item.code}
                          </span>
                          {item.primary && (
                            <span className="text-xs font-bold text-[#00d4ff] uppercase tracking-wider px-2 py-1 bg-cyan-500/20 border border-cyan-500/50">
                              Primary
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-400">{item.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Information (Full Height) */}
              <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                      <Mail className="text-[#00d4ff]" size={22} />
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide">Contact Information</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        className="p-5 bg-[#0a0e27]/50 border-l-2 border-cyan-500/50 hover:border-cyan-500 transition-all"
                      >
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">{item.label}</div>
                        <div className="text-sm font-bold text-white leading-relaxed">{item.value}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Federal Contracts CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 p-6 mt-6"
                >
                  <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-wide">
                    Contract Opportunities
                  </h4>
                  <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                    Explore partnership opportunities through GSA Schedule and IDIQ vehicles
                  </p>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full px-6 py-3 bg-[#00d4ff] text-[#0a0e27] font-bold hover:bg-[#00b8e6] transition-colors uppercase tracking-wide text-xs shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]"
                  >
                    Contact Contracts Team
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">Ready for Deployment?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Qualified and ready to support federal, state, and commercial AI/ML projects
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00d4ff] text-[#0a0e27] font-bold hover:bg-[#00b8e6] transition-colors uppercase tracking-wide shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:shadow-[0_0_40px_rgba(0,212,255,0.5)]"
          >
            Initiate Contact
          </button>
        </motion.div>
      </div>
    </section>
  );
}