import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    clearance: '',
    projectType: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', organization: '', clearance: '', projectType: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      icon: MapPin,
      title: 'Facility Location',
      value: '6017 Southport Dr\nBethesda, MD 20814',
    },
    {
      icon: Phone,
      title: 'Direct Line',
      value: '(240) 498-5285',
      link: 'tel:2404985285',
    },
    {
      icon: Mail,
      title: 'Electronic Mail',
      value: 'kagan@sentimetrix.com',
      link: 'mailto:kagan@sentimetrix.com',
    },
    {
      icon: Clock,
      title: 'Operations Hours',
      value: 'Monday - Friday\n0900 - 1800 EST',
    }
  ];

  const projectTypes = [
    'Healthcare AI/ML',
    'Defense & Intelligence',
    'Federal Government',
    'Sentiment Analysis',
    'Predictive Modeling',
    'Social Media Intelligence',
    'Custom Development',
    'Other'
  ];

  return (
    <section id="contact" className="relative py-20 md:py-24 bg-gradient-to-b from-[#0a0e27] to-[#0f1729] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>

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
            Establish Contact
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Deploy Intelligence Solutions
          </h2>
          
          <p className="text-xl text-gray-400 leading-relaxed">
            Contact our operations team to discuss your machine learning intelligence requirements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] border border-cyan-500/30 p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0a0e27] border border-cyan-500/30 text-white focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] outline-none transition-all placeholder:text-gray-600"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0a0e27] border border-cyan-500/30 text-white focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] outline-none transition-all placeholder:text-gray-600"
                      placeholder="john.doe@agency.gov"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a0e27] border border-cyan-500/30 text-white focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] outline-none transition-all placeholder:text-gray-600"
                      placeholder="(888) 217-8989"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a0e27] border border-cyan-500/30 text-white focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] outline-none transition-all placeholder:text-gray-600"
                      placeholder="Organization Name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0a0e27] border border-cyan-500/30 text-white focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] outline-none transition-all"
                    >
                      <option value="">Select project type...</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="clearance" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Clearance Level
                    </label>
                    <select
                      id="clearance"
                      name="clearance"
                      value={formData.clearance}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a0e27] border border-cyan-500/30 text-white focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] outline-none transition-all"
                    >
                      <option value="">Select if applicable...</option>
                      <option value="none">None / Unclassified</option>
                      <option value="confidential">Confidential</option>
                      <option value="secret">Secret</option>
                      <option value="topsecret">Top Secret</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Project Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-cyan-500/30 text-white focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] outline-none resize-none transition-all placeholder:text-gray-600"
                    placeholder="Describe your machine learning intelligence requirements..."
                  />
                </div>

                <div className="flex items-start gap-3 p-4 bg-cyan-500/5 border border-cyan-500/20">
                  <AlertCircle className="text-cyan-400 flex-shrink-0 mt-0.5" size={18} />
                  <p className="text-xs text-gray-400 leading-relaxed">
                    All communications are handled with appropriate operational security. 
                    Classified information should not be transmitted via this form.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#00d4ff] text-[#0a0e27] font-bold hover:bg-[#00b8e6] transition-colors uppercase tracking-wide shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:shadow-[0_0_40px_rgba(0,212,255,0.5)]"
                >
                  <span>Transmit Message</span>
                  <Send size={18} />
                </button>
              </form>
            ) : (
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 p-12 text-center">
                <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-cyan-400" size={32} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">Message Transmitted</h4>
                <p className="text-gray-400">Operations team will respond within 24 hours.</p>
              </div>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 flex flex-col justify-between"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-gradient-to-br from-[#1a1f3a] to-[#0f1729] border border-cyan-500/20 p-6 hover:border-cyan-500/50 transition-all flex-1 flex items-center"
              >
                <div className="flex items-start gap-4 w-full">
                  <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                    <method.icon className="text-[#00d4ff]" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{method.title}</h4>
                    {method.link ? (
                      <a 
                        href={method.link}
                        className="text-sm text-white hover:text-[#00d4ff] transition-colors break-words font-medium"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-sm text-white break-words font-medium whitespace-pre-line">{method.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Federal Contracts */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 p-6 flex-1 flex flex-col justify-center">
              <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-wide">
                Federal Contract Inquiries
              </h4>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                For GSA Schedule, IDIQ, or BPA opportunities, contact our contracts division.
              </p>
              <a
                href="mailto:contracts@sentimetrix.com"
                className="inline-block w-full text-center px-6 py-3 bg-[#00d4ff] text-[#0a0e27] font-bold hover:bg-[#00b8e6] transition-colors uppercase tracking-wide text-xs shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]"
              >
                contracts@sentimetrix.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}