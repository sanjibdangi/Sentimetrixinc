import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { User, GraduationCap, Briefcase, Shield } from 'lucide-react';
import drKagan from 'figma:asset/8dec5072d40cd45ee96602bd488fd8e70fd093b3.png';

const leadership = {
  name: 'Dr. Vadim Kagan',
  title: 'Founder & Chief Scientist',
  education: 'PhD Computer Science & AI',
  expertise: 'Machine Learning • Natural Language Processing • Computer Vision • Predictive Analytics',
  bio: 'Leading AI researcher with 18+ years developing innovative machine learning solutions for healthcare and defense sectors. Published author with multiple patents in sentiment analysis and automated activity recognition. Principal investigator on $11M+ in federal contracts including NIH, Army, and DARPA programs.',
  photo: drKagan
};

const teamMembers = [
  { name: 'Sarah Chen', title: 'VP Engineering', spec: 'Deep Learning & Neural Networks' },
  { name: 'Michael Torres', title: 'Director Healthcare AI', spec: 'Clinical ML Applications' },
  { name: 'Dr. Emily Rodriguez', title: 'Principal Data Scientist', spec: 'NLP & Sentiment Analysis' },
  { name: 'James Patterson', title: 'Director Defense Solutions', spec: 'Intelligence Analytics' },
  { name: 'Dr. Priya Sharma', title: 'Senior ML Engineer', spec: 'Computer Vision Systems' },
  { name: 'David Kim', title: 'Solutions Architect', spec: 'Enterprise Integration' }
];

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="team" className="relative py-20 md:py-24 bg-gradient-to-b from-[#0a0e27] to-[#0f1729] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>

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
            Leadership
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Intelligence Operations Team
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
            Academic excellence combined with operational deployment experience
          </p>
        </motion.div>

        {/* Leadership Profile - Large Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-2xl"></div>
            
            <div className="relative grid lg:grid-cols-5 gap-0 bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] border border-cyan-500/30 overflow-hidden">
              {/* Photo Side */}
              <div className="lg:col-span-2 relative">
                <div className="aspect-[4/5] lg:aspect-auto lg:h-full">
                  <img
                    src={leadership.photo}
                    alt={leadership.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-transparent to-transparent lg:bg-gradient-to-r"></div>
                </div>
              </div>

              {/* Info Side */}
              <div className="lg:col-span-3 p-8 md:p-12">
                <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
                  Principal Investigator
                </div>

                <h3 className="text-4xl md:text-5xl font-bold text-white mb-3 uppercase tracking-wide">{leadership.name}</h3>
                <div className="text-xl text-[#00d4ff] font-bold uppercase tracking-wide mb-8">{leadership.title}</div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                      <GraduationCap size={20} className="text-[#00d4ff]" />
                    </div>
                    <span className="text-gray-300 font-medium text-lg">{leadership.education}</span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                      <Briefcase size={20} className="text-[#00d4ff]" />
                    </div>
                    <span className="text-gray-300 text-lg">{leadership.expertise}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                      <Shield size={20} className="text-cyan-400" />
                    </div>
                    <span className="text-cyan-400 font-bold uppercase tracking-wide">Security Clearance Available</span>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed text-lg mb-8">
                  {leadership.bio}
                </p>

                <div className="flex flex-wrap gap-3">
                  {['NIH Grants', 'DARPA Programs', 'VA Research', 'Army Contracts'].map((item) => (
                    <div key={item} className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
                      <span className="text-cyan-400 font-bold uppercase tracking-wide text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm">
              Core Team
            </div>
            <h3 className="text-3xl font-bold text-white uppercase tracking-wide">Expert Personnel</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 blur-xl transition-all"></div>
                <div className="relative bg-gradient-to-br from-[#1a1f3a] to-[#0f1729] border border-cyan-500/20 p-6 group-hover:border-cyan-500/50 transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center mx-auto mb-4 text-[#00d4ff] text-xl font-bold font-mono">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-1 text-center uppercase tracking-wide">{member.name}</h4>
                  <div className="text-xs text-[#00d4ff] font-bold mb-3 text-center uppercase tracking-wider">{member.title}</div>
                  <div className="text-xs text-gray-500 text-center">{member.spec}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}