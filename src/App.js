import React, { useState, useEffect } from 'react';

const TuitupouLanding = () => {
  // Custom SVG Icons
  const RobotIcon = ({ className, size = 24 }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C12.6 2 13 2.4 13 3V4H16C17.1 4 18 4.9 18 6V8C20.2 8 22 9.8 22 12V18C22 20.2 20.2 22 18 22H6C3.8 22 2 20.2 2 18V12C2 9.8 3.8 8 6 8V6C6 4.9 6.9 4 8 4H11V3C11 2.4 11.4 2 12 2M16 12C16.6 12 17 12.4 17 13S16.6 14 16 14 15 13.6 15 13 15.4 12 16 12M8 12C8.6 12 9 12.4 9 13S8.6 14 8 14 7 13.6 7 13 7.4 12 8 12M10 17H14V18H10V17Z"/>
    </svg>
  );

  const LaptopIcon = ({ className, size = 24 }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 6H20C21.1 6 22 6.9 22 8V16C22 17.1 21.1 18 20 18H17L19 21V22H5V21L7 18H4C2.9 18 2 17.1 2 16V8C2 6.9 2.9 6 4 6M4 8V16H20V8H4Z"/>
    </svg>
  );

  const CalculatorIcon = ({ className, size = 24 }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 2H17C18.1 2 19 2.9 19 4V20C19 21.1 18.1 22 17 22H7C5.9 22 5 21.1 5 20V4C5 2.9 5.9 2 7 2M7 4V8H17V4H7M7 10V12H9V10H7M11 10V12H13V10H11M15 10V12H17V10H15M7 14V16H9V14H7M11 14V16H13V14H11M15 14V20H17V14H15M7 18V20H9V18H7M11 18V20H13V18H11Z"/>
    </svg>
  );

  const CogIcon = ({ className, size = 24 }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5A3.5 3.5 0 0 1 15.5 12A3.5 3.5 0 0 1 12 15.5M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12S19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.96 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.5 2.42C14.46 2.18 14.25 2 14 2H10C9.75 2 9.54 2.18 9.5 2.42L9.13 5.07C8.52 5.32 7.96 5.66 7.44 6.05L4.95 5.05C4.73 4.96 4.46 5.05 4.34 5.27L2.34 8.73C2.21 8.95 2.27 9.22 2.46 9.37L4.57 11.02C4.53 11.34 4.5 11.67 4.5 12S4.53 12.66 4.57 12.98L2.46 14.63C2.27 14.78 2.21 15.05 2.34 15.27L4.34 18.73C4.46 18.95 4.73 19.03 4.95 18.95L7.44 17.94C7.96 18.34 8.52 18.68 9.13 18.93L9.5 21.58C9.54 21.82 9.75 22 10 22H14C14.25 22 14.46 21.82 14.5 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.94L19.05 18.95C19.27 19.03 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98Z"/>
    </svg>
  );

  const ChartIcon = ({ className, size = 24 }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 21H2V3H4V19H6V17H10V19H12V16H16V19H18V17H22V21M16 15H12V9H16V15M10 14H6V12H10V14Z"/>
    </svg>
  );

  const ShieldIcon = ({ className, size = 24 }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"/>
    </svg>
  );

  const MenuIcon = ({ className, size = 24 }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 6H21V8H3V6M3 11H21V13H3V11M3 16H21V18H3V16Z"/>
    </svg>
  );

  const CloseIcon = ({ className, size = 24 }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/>
    </svg>
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-8 gap-4 h-full animate-pulse">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="bg-cyan-500 opacity-10 rounded animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
            ))}
          </div>
        </div>
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <RobotIcon className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Tuitupou Solutions
                </h1>
                <p className="text-xs text-gray-400">Tech × Accounting × AI</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['services', 'innovation', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 capitalize font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-200"></span>
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Let's Talk
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-lg border-t border-gray-700 shadow-2xl">
              <div className="px-4 py-6 space-y-4">
                {['services', 'innovation', 'about', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors capitalize font-medium py-2"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-300">Now Building: AI Lead Generator</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold leading-tight">
              <span className="block">Where</span>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Technology
              </span>
              <span className="block">Meets Finance</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              The world's first consultancy combining <span className="text-cyan-400 font-semibold">full-stack development</span>, 
              <span className="text-purple-400 font-semibold"> QA automation</span>, 
              <span className="text-pink-400 font-semibold"> accounting expertise</span>, and 
              <span className="text-cyan-400 font-semibold"> AI engineering</span> under one roof.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('services')}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-200 shadow-2xl"
              >
                Explore Solutions
              </button>
              <button
                onClick={() => scrollToSection('innovation')}
                className="border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200"
              >
                See Innovation
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
              {[
                { label: 'Full-Stack Dev', icon: LaptopIcon, color: 'text-cyan-400' },
                { label: 'QA Automation', icon: CogIcon, color: 'text-purple-400' },
                { label: 'Accounting', icon: CalculatorIcon, color: 'text-pink-400' },
                { label: 'AI Engineering', icon: RobotIcon, color: 'text-green-400' }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <item.icon className={`${item.color} mx-auto mb-2 group-hover:scale-110 transition-transform duration-200`} size={32} />
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Revolutionary Services
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Breaking boundaries with integrated solutions that traditional consultancies can't match
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: LaptopIcon,
                title: 'Full-Stack Development',
                description: 'End-to-end web applications with cutting-edge frameworks, cloud architecture, and scalable solutions.',
                color: 'from-cyan-500 to-blue-500',
                features: ['React/Next.js', 'Node.js/Python', 'Cloud Deployment', 'API Integration']
              },
              {
                icon: CogIcon,
                title: 'QA Automation',
                description: 'Intelligent testing frameworks that ensure bulletproof applications with automated CI/CD pipelines.',
                color: 'from-purple-500 to-indigo-500',
                features: ['Test Automation', 'CI/CD Pipelines', 'Performance Testing', 'Quality Assurance']
              },
              {
                icon: CalculatorIcon,
                title: 'Accounting Solutions',
                description: 'Precise financial management with automated bookkeeping and compliance-focused strategies.',
                color: 'from-pink-500 to-rose-500',
                features: ['Bookkeeping', 'Tax Preparation', 'Financial Analysis', 'Compliance']
              },
              {
                icon: RobotIcon,
                title: 'AI Engineering',
                description: 'Custom AI agents and automation solutions that transform how your business operates.',
                color: 'from-green-500 to-emerald-500',
                features: ['AI Agents', 'Process Automation', 'Machine Learning', 'Predictive Analytics']
              },
              {
                icon: ChartIcon,
                title: 'Business Intelligence',
                description: 'Data-driven insights combining financial metrics with technical performance analytics.',
                color: 'from-orange-500 to-red-500',
                features: ['Data Analytics', 'KPI Dashboards', 'Reporting', 'Insights']
              },
              {
                icon: ShieldIcon,
                title: 'Security & Compliance',
                description: 'Enterprise-grade security implementations with financial compliance and data protection.',
                color: 'from-teal-500 to-cyan-500',
                features: ['Security Audits', 'Data Protection', 'Compliance', 'Risk Assessment']
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <service.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></span>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section id="innovation" className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Innovation in Progress
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Currently building the future of business automation with AI
            </p>
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl p-8 md:p-12 border border-gray-600">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <RobotIcon className="text-cyan-400" size={48} />
                  <div>
                    <h3 className="text-3xl font-bold text-white">AI Lead Generator & Qualifier</h3>
                    <p className="text-cyan-400 font-semibold">Currently in Development</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  The first of many AI agents designed to revolutionize business operations. This intelligent system will 
                  automatically identify, engage, and qualify potential leads while maintaining human-like interactions.
                </p>
                <div className="space-y-4">
                  {[
                    'Automated lead identification across multiple channels',
                    'Intelligent conversation handling with natural language processing',
                    'Advanced qualification scoring based on custom criteria',
                    'Seamless CRM integration and handoff to sales teams'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5">
                        ✓
                      </span>
                      <p className="text-gray-300">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-gray-900 rounded-2xl p-6 border border-gray-600">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-gray-400 text-sm ml-4">AI Agent Console</span>
                  </div>
                  <div className="font-mono text-sm space-y-2">
                    <div className="text-cyan-400">$ ai-agent --mode=lead-generation</div>
                    <div className="text-gray-300">Initializing AI Lead Generator...</div>
                    <div className="text-green-400">✓ Natural Language Processing: Active</div>
                    <div className="text-green-400">✓ Lead Qualification: Running</div>
                    <div className="text-green-400">✓ CRM Integration: Connected</div>
                    <div className="text-purple-400">Qualified leads today: 47</div>
                    <div className="text-cyan-400 animate-pulse">Processing new prospects...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Breaking Industry Barriers
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The first consultancy to unite technology and finance in ways never seen before
            </p>
          </div>

          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white mb-6">Why This Matters</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Traditional consultancies force businesses to work with separate providers for technology, 
                  testing, accounting, and AI solutions. This creates communication gaps, integration 
                  nightmares, and missed opportunities.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  At Tuitupou Solutions, we're pioneering a new approach where these disciplines work 
                  seamlessly together, creating solutions that are more than the sum of their parts.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
                    <p className="text-gray-400">Integrated Solutions</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">1st</div>
                    <p className="text-gray-400">Of Its Kind</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl p-6 border border-gray-600">
                  <h4 className="text-xl font-bold text-white mb-4">The Integrated Advantage</h4>
                  <div className="space-y-3">
                    {[
                      'Financial data directly informs technical architecture',
                      'QA processes include financial compliance testing',
                      'AI solutions leverage both technical and financial insights',
                      'Unified reporting across all business dimensions'
                    ].map((advantage, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2"></span>
                        <p className="text-gray-300 text-sm">{advantage}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Innovate?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Let's discuss how integrated tech and accounting solutions can transform your business
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 md:p-12">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">Project Type</label>
                <select className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all">
                  <option>Full-Stack Development</option>
                  <option>QA Automation</option>
                  <option>Accounting Solutions</option>
                  <option>AI Engineering</option>
                  <option>Integrated Consulting</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                  placeholder="Tell me about your project and how I can help..."
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-4 rounded-xl font-semibold text-lg transform hover:scale-[1.02] transition-all duration-200 shadow-2xl"
              >
                Start the Conversation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <RobotIcon className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Tuitupou Solutions
                </h1>
                <p className="text-xs text-gray-400">Innovating at the intersection of Tech & Finance</p>
              </div>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © {new Date().getFullYear()} Tuitupou Tech & Accounting Solutions. 
              <br className="md:hidden" />
              <span className="text-cyan-400 ml-1">Breaking boundaries, building futures.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TuitupouLanding;