import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Target, Award, Shield, Zap } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="relative py-20 md:py-24 bg-gradient-to-b from-[#0f1729] to-[#0a0e27] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Large Image Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="relative h-[400px] md:h-[500px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1762279389083-abf71f22d338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzE0ODc3MjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Machine Learning Visualization"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e27]/90 via-[#0a0e27]/60 to-transparent"></div>
            
            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center py-8 sm:py-12">
              <div className="max-w-2xl px-4 sm:px-6 md:px-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6 backdrop-blur-sm">
                    Mission Profile
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    Transforming Data Into Intelligence
                  </h2>
                  
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                    Since 2006, we've deployed machine learning systems extracting actionable 
                    intelligence from complex data environments across healthcare, defense, and federal operations.
                  </p>

                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    <div className="px-4 sm:px-5 py-2 bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
                      <span className="text-cyan-400 font-bold uppercase tracking-wide text-xs sm:text-sm">Healthcare AI</span>
                    </div>
                    <div className="px-4 sm:px-5 py-2 bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
                      <span className="text-cyan-400 font-bold uppercase tracking-wide text-xs sm:text-sm">Defense Intel</span>
                    </div>
                    <div className="px-4 sm:px-5 py-2 bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
                      <span className="text-cyan-400 font-bold uppercase tracking-wide text-xs sm:text-sm">Federal Systems</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: Target,
              title: 'Dual-Domain Expertise',
              description: 'Healthcare + Defense intelligence with real-world deployment'
            },
            {
              icon: Award,
              title: 'NIH/VA Validated',
              description: 'Clinical validation from National Institutes of Health systems'
            },
            {
              icon: Shield,
              title: 'DARPA Proven',
              description: 'Award-winning performance in DARPA competitions'
            },
            {
              icon: Zap,
              title: 'Rapid Deploy',
              description: 'Production-ready platforms for immediate integration'
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group relative bg-gradient-to-br from-[#1a1f3a]/50 to-[#0a0e27]/50 border border-cyan-500/20 p-8 hover:border-cyan-500/50 transition-all backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-cyan-500/10 transition-all"></div>
              
              <div className="relative">
                <div className="w-14 h-14 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all">
                  <item.icon className="text-[#00d4ff]" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}