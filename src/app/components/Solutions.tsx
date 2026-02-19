import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Camera, MessageCircle, TrendingUp, Share2, Lock, ArrowRight } from 'lucide-react';
import pathMLLogo from 'figma:asset/3581453ba825389cd473c2596a842d5ff9e5716a.png';
import humanAnalysis from 'figma:asset/9113a0fca04c1c9487b1cee7c7007eddf70d8a25.png';

const solutions = [
  {
    icon: Camera,
    name: 'PathML',
    tagline: 'Automated Human Activity Analysis',
    description: 'Advanced computer vision platform for real-time detection, tracking, and classification of human movements and behaviors from video streams. NIH/VA validated for clinical deployment.',
    features: ['Real-time Processing', 'Clinical Validation', 'HIPAA Compliant', 'Mobility Scoring'],
    image: humanAnalysis,
    logo: pathMLLogo
  },
  {
    icon: MessageCircle,
    name: 'SentiGrade',
    tagline: 'Enterprise Sentiment Analysis',
    description: 'Natural language processing engine delivering granular sentiment scoring across documents, reviews, and communication channels with contextual understanding.',
    features: ['Multi-Language', 'Contextual Analysis', 'API Integration', 'Custom Training'],
    image: 'https://images.unsplash.com/photo-1657974361095-4d5f3fb381fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW50aW1lbnQlMjBhbmFseXNpcyUyMHNvY2lhbCUyMG1lZGlhJTIwZGF0YXxlbnwxfHx8fDE3NzE1MTI2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: TrendingUp,
    name: 'SenteMotion',
    tagline: 'Movement Intelligence Platform',
    description: 'Precision mobility analytics combining sensor fusion with machine learning for comprehensive movement assessment and predictive modeling.',
    features: ['Sensor Fusion', 'Gait Analysis', 'Fall Prediction', 'Progress Tracking'],
    image: 'https://images.unsplash.com/photo-1758202292826-c40e172eed1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMG1lZGljYWwlMjBBSXxlbnwxfHx8fDE3NzE1MTI2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    icon: Share2,
    name: 'SentiSocial',
    tagline: 'Social Media Intelligence',
    description: 'Real-time social media monitoring and analysis platform identifying trends, threats, and opportunities across all major platforms. DARPA competition winner.',
    features: ['Real-time Monitor', 'Threat Detection', 'Trend Forecast', 'Network Analysis'],
    image: 'https://images.unsplash.com/photo-1759203977871-02585c46a9c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWZlbnNlJTIwbWlsaXRhcnklMjB0ZWNobm9sb2d5JTIwZGlnaXRhbHxlbnwxfHx8fDE3NzE1MTI2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
];

export function Solutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="solutions" className="relative py-20 md:py-24 bg-gradient-to-b from-[#0a0e27] via-[#0f1729] to-[#0a0e27] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
            AI Platforms
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Production-Ready Solutions
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
            Battle-tested intelligence platforms validated through federal contracts and clinical trials
          </p>
        </motion.div>

        {/* Solutions - Alternating Layout with Large Images */}
        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.name}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative group">
                  <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                    <img
                      src={solution.image}
                      alt={solution.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0e27]/70 via-transparent to-cyan-500/30"></div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#0a0e27]/90 border border-cyan-500/50 backdrop-blur-md">
                      <div className="w-2 h-2 bg-[#00d4ff] rounded-full animate-pulse"></div>
                      <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider">Operational</span>
                    </div>

                    {/* Logo Overlay (for PathML) */}
                    {solution.logo && (
                      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                        <img src={solution.logo} alt={`${solution.name} Logo`} className="h-10 sm:h-12 opacity-90" />
                      </div>
                    )}
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                </div>
              </div>

              {/* Content Side */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-3 sm:gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                    <solution.icon className="text-[#00d4ff]" size={24} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase tracking-wide break-words">{solution.name}</h3>
                    <p className="text-xs sm:text-sm text-cyan-400 uppercase tracking-wider break-words">{solution.tagline}</p>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
                  {solution.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-cyan-500/5 border border-cyan-500/20"
                    >
                      <div className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-gray-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-cyan-500/50 text-cyan-400 font-bold hover:bg-cyan-500/10 hover:border-cyan-500 transition-all uppercase tracking-wide text-sm sm:text-base"
                >
                  <Lock size={16} className="flex-shrink-0" />
                  Request Access
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}