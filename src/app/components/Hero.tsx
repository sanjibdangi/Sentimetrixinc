import { ArrowRight, Shield } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onContactClick: () => void;
}

export function Hero({ onContactClick }: HeroProps) {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-[#0a0e27] overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(0, 212, 255, 0.2) 1px, transparent 1px),
            linear-gradient(rgba(0, 212, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center flex-wrap gap-2 px-3 sm:px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 mb-8 backdrop-blur-sm"
            >
              <Shield className="text-[#00d4ff] flex-shrink-0" size={16} />
              <span className="text-xs sm:text-sm font-bold text-cyan-400 uppercase tracking-wider">Since 2006 • $11M Federal Contracts</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-[0.95] tracking-tight"
            >
              Intelligence
              <span className="block text-[#00d4ff] mt-2">Through AI</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed"
            >
              Advanced machine learning extracting actionable intelligence from complex data. 
              Validated by <span className="text-cyan-400 font-semibold">NIH</span> and <span className="text-cyan-400 font-semibold">DARPA</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <button
                onClick={onContactClick}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00d4ff] text-[#0a0e27] font-bold hover:bg-[#00b8e6] transition-all uppercase tracking-wide shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:shadow-[0_0_40px_rgba(0,212,255,0.5)]"
              >
                Deploy Solutions
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-cyan-500/50 text-cyan-400 font-bold hover:border-cyan-500 hover:bg-cyan-500/10 transition-all uppercase tracking-wide"
              >
                View Platforms
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 sm:gap-8"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#00d4ff] mb-2 font-mono">18+</div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Years</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#00d4ff] mb-2 font-mono">50+</div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Contracts</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#00d4ff] mb-2 font-mono">94%</div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Accuracy</div>
              </div>
            </motion.div>
          </div>

          {/* Right - Large Visual Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1764336312138-14a5368a6cd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29yayUyMGJsdWV8ZW58MXx8fHwxNzcxNDkyNzgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AI Neural Network"
                className="w-full h-auto shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0e27]/60 via-transparent to-cyan-500/20"></div>
              
              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-[#0a0e27]/90 border border-cyan-500/50 backdrop-blur-md p-3 sm:p-4 z-10"
              >
                <div className="text-xl sm:text-2xl font-bold text-white font-mono whitespace-nowrap">1.2M+</div>
                <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wide whitespace-nowrap">Data Points</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 bg-[#0a0e27]/90 border border-cyan-500/50 backdrop-blur-md p-3 sm:p-4 z-10"
              >
                <div className="text-xl sm:text-2xl font-bold text-white font-mono whitespace-nowrap">Real-Time</div>
                <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wide whitespace-nowrap">Processing</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}