import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { 
  Activity, MessageSquare, TrendingUp, Users, 
  Heart, BarChart3, FileSearch, Brain, ArrowRight, Sparkles
} from 'lucide-react';
import pathMLLogo from 'figma:asset/3581453ba825389cd473c2596a842d5ff9e5716a.png';
import pathMLScreenshot from 'figma:asset/a655420b6f3b3286b7ae2d8038b61d1222c4ce1f.png';

const services = [
  {
    icon: Activity,
    title: 'PathML',
    subtitle: 'Scalable, Automated Video Analysis',
    description: 'PathML is a cutting-edge, AI-powered desktop application that provides rapid, consistent, and privacy-secure analysis of video data of human physical activity.',
    features: ['Real-time Processing', 'Clinical Validation', 'HIPAA Compliant', 'Privacy-Secure'],
    image: pathMLScreenshot,
    logo: pathMLLogo,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: MessageSquare,
    title: 'SentiGrade',
    subtitle: 'Enterprise Sentiment Intelligence',
    description: 'Advanced NLP engine delivering granular sentiment scoring across documents, reviews, and communication channels with deep contextual understanding and multi-language support.',
    features: ['Multi-Language NLP', 'Contextual Analysis', 'API Integration', 'Custom Training'],
    image: 'https://images.unsplash.com/photo-1657974361095-4d5f3fb381fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW50aW1lbnQlMjBhbmFseXNpcyUyMHNvY2lhbCUyMG1lZGlhJTIwZGF0YXxlbnwxfHx8fDE3NzE1MTI2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    icon: TrendingUp,
    title: 'SenteMotion',
    subtitle: 'Movement Intelligence Platform',
    description: 'Precision mobility analytics combining sensor fusion with machine learning for comprehensive movement assessment, gait analysis, and predictive fall detection modeling.',
    features: ['Sensor Fusion', 'Gait Analysis', 'Fall Prediction', 'Progress Tracking'],
    image: 'https://images.unsplash.com/photo-1758202292826-c40e172eed1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMG1lZGljYWwlMjBBSXxlbnwxfHx8fDE3NzE1MTI2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: BarChart3,
    title: 'SentiSocial',
    subtitle: 'Social Media Intelligence',
    description: 'Real-time social media monitoring and analysis platform identifying trends, threats, and opportunities across all major platforms. DARPA competition winner for bot detection.',
    features: ['Real-time Monitor', 'Threat Detection', 'Trend Forecast', 'Network Analysis'],
    image: 'https://images.unsplash.com/photo-1759203977871-02585c46a9c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWZlbnNlJTIwbWlsaXRhcnklMjB0ZWNobm9sb2d5JTIwZGlnaXRhbHxlbnwxfHx8fDE3NzE1MTI2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-emerald-500 to-teal-600'
  },
];

const capabilities = [
  { icon: Activity, title: 'Mobility Assessment', desc: 'Computer vision for movement analysis' },
  { icon: MessageSquare, title: 'NLP & Sentiment', desc: 'Opinion mining and emotion detection' },
  { icon: TrendingUp, title: 'Predictive Models', desc: 'Statistical forecasting and analytics' },
  { icon: Users, title: 'Activity Analysis', desc: 'Automated behavior detection systems' },
  { icon: Heart, title: 'Healthcare Analytics', desc: 'Clinical decision support systems' },
  { icon: BarChart3, title: 'Social Intelligence', desc: 'Real-time social platform monitoring' },
  { icon: FileSearch, title: 'Text Classification', desc: 'Automated intelligence extraction' },
  { icon: Brain, title: 'Deep Learning', desc: 'Neural networks for pattern detection' },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="services" className="py-20 md:py-24 bg-gradient-to-b from-[#0a0e27] via-[#0f1729] to-[#0a0e27] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-500/5 rounded-full blur-[200px]"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(0, 212, 255, 1) 1px, transparent 1px),
          linear-gradient(rgba(0, 212, 255, 1) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-8 rounded-full backdrop-blur-sm shadow-[0_0_30px_rgba(0,212,255,0.2)]"
          >
            <Sparkles size={16} className="animate-pulse" />
            AI-Powered Platforms
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[0.95]">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Intelligence Solutions
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
            Battle-tested platforms validated through federal contracts, clinical trials, and competitive evaluations
          </p>
        </motion.div>

        {/* Featured Platforms */}
        <div className="space-y-32 mb-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                  className="relative group"
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-4 bg-gradient-to-r ${service.color} opacity-20 group-hover:opacity-30 rounded-2xl blur-3xl transition-all duration-500`}></div>
                  
                  {/* Main Image Container */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-[#0a0e27]/40 via-transparent to-transparent`}></div>
                      
                      {/* Animated Border */}
                      <div className="absolute inset-0 rounded-2xl border border-cyan-500/20 group-hover:border-cyan-500/50 transition-all"></div>
                    </div>

                    {/* Logo Overlay */}
                    {service.logo && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                        className="absolute top-8 left-8"
                      >
                        <img src={service.logo} alt={`${service.title} Logo`} className="h-16 drop-shadow-2xl" />
                      </motion.div>
                    )}

                    {/* Status Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                      className="absolute top-8 right-8 flex items-center gap-3 px-5 py-3 bg-[#0a0e27]/90 border border-cyan-500/50 backdrop-blur-xl rounded-full shadow-lg"
                    >
                      <div className="relative">
                        <div className="w-3 h-3 bg-[#00d4ff] rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 w-3 h-3 bg-[#00d4ff] rounded-full animate-ping"></div>
                      </div>
                      <span className="text-sm text-cyan-400 font-bold uppercase tracking-wider">Operational</span>
                    </motion.div>

                    {/* Features Pills at Bottom */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                      className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-2"
                    >
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="px-4 py-2 bg-[#0a0e27]/80 border border-cyan-500/30 backdrop-blur-xl rounded-full"
                        >
                          <span className="text-xs text-cyan-400 font-bold uppercase tracking-wide">{feature}</span>
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Decorative Elements */}
                  <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br ${service.color} opacity-20 rounded-full blur-2xl`}></div>
                  <div className={`absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br ${service.color} opacity-20 rounded-full blur-2xl`}></div>
                </motion.div>
              </div>

              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className={`inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gradient-to-r ${service.color} bg-opacity-10 border border-cyan-500/30 rounded-full`}>
                  <service.icon className="text-[#00d4ff]" size={20} />
                  <span className="text-sm text-cyan-400 font-bold uppercase tracking-wider">Platform</span>
                </div>

                <h3 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-xl text-[#00d4ff] font-semibold mb-6 tracking-wide">
                  {service.subtitle}
                </p>

                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  {service.description}
                </p>

                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${service.color} text-white font-bold hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] transition-all uppercase tracking-wide rounded-full`}
                >
                  Request a Demo
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Core Capabilities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-cyan-500/10 border border-cyan-500/30 text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-6 rounded-full">
              Core Capabilities
            </div>
            <h3 className="text-4xl font-bold text-white">Comprehensive AI Services</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.05 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-xl blur-xl transition-all"></div>
                <div className="relative bg-gradient-to-br from-[#1a1f3a]/50 to-[#0a0e27]/50 border border-cyan-500/20 p-6 rounded-xl group-hover:border-cyan-500/50 transition-all backdrop-blur-sm">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <cap.icon className="text-[#00d4ff]" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">{cap.title}</h4>
                  <p className="text-sm text-gray-400">{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}