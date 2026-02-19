import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Building2, Award, DollarSign, CheckCircle, Target } from 'lucide-react';

const contracts = [
  {
    agency: 'National Institutes of Health',
    agencyCode: 'NIH',
    totalValue: 6.2,
    projects: [
      { title: 'Automated Mobility Assessment System', value: 2.8, duration: '2018-2022' },
      { title: 'NLP for Clinical Notes', value: 1.9, duration: '2019-2023' },
      { title: 'Sentiment Analysis for Mental Health', value: 1.5, duration: '2020-2024' }
    ]
  },
  {
    agency: 'U.S. Army',
    agencyCode: 'ARMY',
    totalValue: 5.3,
    projects: [
      { title: 'Social Media Intelligence Platform', value: 3.2, duration: '2017-2021' },
      { title: 'Predictive Analytics for Readiness', value: 2.1, duration: '2019-2023' }
    ]
  }
];

export function Performance() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="performance" className="relative py-20 md:py-24 bg-gradient-to-b from-[#0f1729] to-[#0a0e27] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>

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
            Track Record
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Proven Federal Performance
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
            Over $11M in successful federal contract delivery with measurable impact
          </p>
        </motion.div>

        {/* Visual Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {[
            { label: 'Total Contract Value', value: '$11.5M', icon: DollarSign },
            { label: 'Successful Projects', value: '50+', icon: CheckCircle },
            { label: 'Client Agencies', value: '8', icon: Building2 }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] border border-cyan-500/30 p-8 text-center group-hover:border-cyan-500/50 transition-all">
                <div className="w-14 h-14 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-[#00d4ff]" size={28} />
                </div>
                <div className="text-4xl font-bold text-[#00d4ff] mb-2 font-mono">{stat.value}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contract Details by Agency */}
        <div className="space-y-12">
          {contracts.map((agency, agencyIndex) => (
            <motion.div
              key={agency.agency}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + agencyIndex * 0.2 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] border border-cyan-500/30 overflow-hidden">
                {/* Agency Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-8 border-b border-cyan-500/20">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                      <Building2 className="text-[#00d4ff]" size={28} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white uppercase tracking-wide">{agency.agency}</h3>
                      <div className="text-sm text-cyan-400 font-mono font-bold mt-1">{agency.agencyCode}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-[#00d4ff] font-mono">${agency.totalValue}M</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider mt-1">Total Value</div>
                  </div>
                </div>

                {/* Projects */}
                <div className="p-8">
                  <div className="space-y-6">
                    {agency.projects.map((project, projectIndex) => (
                      <motion.div
                        key={project.title}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 + agencyIndex * 0.2 + projectIndex * 0.1 }}
                        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 bg-[#0a0e27]/50 border border-cyan-500/10 hover:border-cyan-500/30 transition-all group/project"
                      >
                        <div className="flex items-start gap-4 flex-1">
                          <Target className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                          <div>
                            <h4 className="text-lg font-bold text-white mb-1 uppercase tracking-wide group-hover/project:text-cyan-400 transition-colors">
                              {project.title}
                            </h4>
                            <div className="text-sm text-gray-500 font-mono">{project.duration}</div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <DollarSign className="text-[#00d4ff]" size={20} />
                            <span className="text-xl sm:text-2xl font-bold text-[#00d4ff] font-mono whitespace-nowrap">${project.value}M</span>
                          </div>
                          <div className="flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 flex-shrink-0">
                            <CheckCircle size={16} className="text-cyan-400 flex-shrink-0" />
                            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider whitespace-nowrap">Completed</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm">
              Competition Results
            </div>
            <h3 className="text-3xl font-bold text-white uppercase tracking-wide">Awards & Recognition</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'DARPA Twitter Bot Challenge', achievement: '1st Place - Bot Detection', year: '2019' },
              { title: 'NGRID Competition', achievement: 'Winner - Predictive Modeling', year: '2020' }
            ].map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] border border-cyan-500/30 p-10 text-center group-hover:border-cyan-500/50 transition-all">
                  <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-6">
                    <Award className="text-[#00d4ff]" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3 uppercase tracking-wide">{award.title}</h4>
                  <div className="text-base font-bold text-[#00d4ff] mb-2 uppercase tracking-wider">{award.achievement}</div>
                  <div className="text-sm text-gray-500 font-mono">{award.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}