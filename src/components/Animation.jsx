import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket, FaMagic, FaCogs, FaPalette, FaGem, FaUserAstronaut } from 'react-icons/fa';

const Animation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0, scale: 0.7, rotateX: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateX: 0,
      transition: { duration: 1.2, type: 'spring', stiffness: 80 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, type: 'spring', stiffness: 120 }
    },
    hover: { 
      scale: 1.1, 
      rotate: 2,
      boxShadow: '0px 15px 30px rgba(0,0,0,0.3)',
      transition: { duration: 0.3 }
    }
  };

  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: { duration: 20, repeat: Infinity, ease: 'linear' }
    }
  };

  const bounceVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        type: 'spring',
        bounce: 0.4
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'animations', 'cards', 'features'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Animation helpers for showcase
  const pulseAnim = {
    animate: { scale: [1, 1.08, 1], opacity: [1, 0.8, 1] },
    transition: { duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }
  };
  const slideAnim = {
    initial: { x: '-100vw' },
    whileInView: { x: 0 },
    transition: { duration: 1, type: 'spring', stiffness: 80 }
  };
  const bounceAnim = {
    animate: { y: [0, -20, 0] },
    transition: { duration: 1, repeat: Infinity, ease: 'easeInOut' }
  };
  const morphAnim = {
    animate: { borderRadius: ['32px', '50%', '32px'], scale: [1, 1.12, 1] },
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
  };
  const floatAnim = {
    animate: { y: [0, -16, 0] },
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
  };
  const flipAnim = {
    animate: { rotateY: [0, 360] },
    transition: { duration: 4, repeat: Infinity, ease: 'linear' }
  };

  const sections = {
    home: (
      <motion.section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-200 to-pink-100 p-8 overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated background shapes */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-400 opacity-30 rounded-full blur-3xl z-0"
          animate={{ x: [0, 40, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400 opacity-30 rounded-full blur-3xl z-0"
          animate={{ x: [0, -40, 0], y: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative z-10 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 drop-shadow-lg"
            variants={heroVariants}
          >
            <span className="inline-flex items-center gap-3">
              <FaRocket className="text-blue-500 animate-bounce" />
              Modern Animation Studio
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-700 max-w-2xl mx-auto mb-8"
            variants={itemVariants}
          >
            Elevate your web presence with stunning, interactive animations and beautiful UI cards. Explore our showcase of modern, professional effects and layouts.
          </motion.p>
          <motion.div
            className="flex justify-center gap-4"
            variants={itemVariants}
          >
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('animations').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Animations
            </motion.button>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('cards').scrollIntoView({ behavior: 'smooth' })}
            >
              View Cards
            </motion.button>
          </motion.div>
          <motion.div className="mt-16 flex justify-center gap-8">
            <motion.div
              className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-xl"
              whileHover={{ scale: 1.1, rotate: 8 }}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaMagic className="text-white text-4xl" />
            </motion.div>
            <motion.div
              className="w-24 h-24 bg-gradient-to-br from-pink-500 to-yellow-400 rounded-3xl flex items-center justify-center shadow-xl"
              whileHover={{ scale: 1.1, rotate: -8 }}
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaPalette className="text-white text-4xl" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    ),
    whychoose: (
      <motion.section
        id="whychoose"
        className="min-h-screen p-8 bg-white flex flex-col items-center justify-center"
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Why Choose Us?</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl w-full justify-items-center mx-auto">
          {/* Slide In Animation */}
          <motion.div
            className="flex flex-col items-center bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-2xl shadow-xl p-8"
            {...slideAnim}
          >
            <FaRocket className="text-5xl mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold mb-2">Fast & Modern</h3>
            <p className="text-lg">Experience blazing fast, modern web animations that engage and delight users.</p>
          </motion.div>
          {/* Pulse Animation */}
          <motion.div
            className="flex flex-col items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-2xl shadow-xl p-8"
            {...pulseAnim}
          >
            <FaGem className="text-5xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">Premium Quality</h3>
            <p className="text-lg">Our animations are crafted for a premium, professional look and feel.</p>
          </motion.div>
          {/* Morph Animation */}
          <motion.div
            className="flex flex-col items-center bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded-2xl shadow-xl p-8"
            {...morphAnim}
          >
            <FaMagic className="text-5xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">Magical Effects</h3>
            <p className="text-lg">Add a touch of magic to your site with interactive, morphing effects.</p>
          </motion.div>
          {/* Bounce Animation - New Card */}
          <motion.div
            className="flex flex-col items-center bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-2xl shadow-xl p-8"
            {...bounceAnim}
          >
            <FaUserAstronaut className="text-5xl mb-4" />
            <h3 className="text-2xl font-bold mb-2">Innovative Team</h3>
            <p className="text-lg">Our creative experts push boundaries to deliver unique, innovative solutions for your brand.</p>
          </motion.div>
        </div>
      </motion.section>
    ),
    cards: (
      <motion.section
        id="cards"
        className="relative min-h-screen p-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated background shapes */}
        <motion.div
          className="absolute -top-32 left-0 w-96 h-96 bg-purple-300 opacity-20 rounded-full blur-3xl z-0"
          animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-32 right-0 w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-3xl z-0"
          animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        />
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12 relative z-10">Our Animated Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
          {[
            {
              title: 'Creative Studio',
              desc: 'Design, animate, and launch your ideas with our creative tools.',
              icon: <FaPalette className="text-pink-500 text-4xl" />, 
              color: 'from-pink-100 to-pink-300',
              cta: 'Start Designing',
              img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
              anim: bounceAnim
            },
            {
              title: 'Automation Engine',
              desc: 'Automate workflows and boost productivity with smart motion.',
              icon: <FaCogs className="text-blue-500 text-4xl" />, 
              color: 'from-blue-100 to-blue-300',
              cta: 'Automate Now',
              img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
              anim: floatAnim
            },
            {
              title: 'Premium Portfolio',
              desc: 'Showcase your work with elegant, animated cards and effects.',
              icon: <FaGem className="text-purple-500 text-4xl" />, 
              color: 'from-purple-100 to-purple-300',
              cta: 'View Portfolio',
              img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
              anim: flipAnim
            },
            {
              title: 'AI Assistant',
              desc: 'Integrate AI-powered features and smart suggestions.',
              icon: <FaUserAstronaut className="text-yellow-500 text-4xl" />, 
              color: 'from-yellow-100 to-yellow-300',
              cta: 'Try AI',
              img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
              anim: pulseAnim
            },
            {
              title: 'Magic Effects',
              desc: 'Add magical, interactive effects to delight your users.',
              icon: <FaMagic className="text-indigo-500 text-4xl" />, 
              color: 'from-indigo-100 to-indigo-300',
              cta: 'See Magic',
              img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
              anim: morphAnim
            },
            {
              title: 'Launch Platform',
              desc: 'Deploy your projects with confidence and style.',
              icon: <FaRocket className="text-green-500 text-4xl" />, 
              color: 'from-green-100 to-green-300',
              cta: 'Launch Now',
              img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
              anim: slideAnim
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              className={`relative bg-gradient-to-br ${card.color} rounded-3xl shadow-2xl overflow-hidden group border border-gray-200`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              whileHover="hover"
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              {...card.anim}
            >
              <img src={card.img} alt={card.title} className="w-full h-40 object-cover object-center rounded-t-3xl group-hover:scale-105 transition-transform duration-500" />
              <div className="p-6 flex flex-col items-center">
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">{card.title}</h3>
                <p className="text-gray-600 text-center mb-4">{card.desc}</p>
                <AnimatePresence>
                  {hoveredCard === index && (
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mt-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold shadow-lg"
                      transition={{ duration: 0.3 }}
                    >
                      {card.cta}
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    ),
    features: (
      <motion.section
        id="features"
        className="min-h-screen p-8 bg-gradient-to-br from-purple-100 to-blue-100 flex flex-col items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Feature Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl w-full">
          {/* Bounce Animation */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center"
            variants={bounceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <FaCogs className="text-4xl text-blue-500 mb-3 animate-spin-slow" />
            <h3 className="text-xl font-bold mb-2">Gesture-Based Interactions</h3>
            <p className="text-gray-600 text-center">Interact with components using drag, tap, and hover gestures for a natural feel.</p>
          </motion.div>
          {/* Flip Animation */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center"
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          >
            <FaUserAstronaut className="text-4xl text-yellow-500 mb-3" />
            <h3 className="text-xl font-bold mb-2">AI-Powered Suggestions</h3>
            <p className="text-gray-600 text-center">Smart, context-aware suggestions to boost your productivity and creativity.</p>
          </motion.div>
        </div>
      </motion.section>
    )
  };

  return (
    <div className="font-sans">
      <motion.header
        className="bg-gradient-to-r from-[#232946] to-[#3b3b5b] text-white px-6 py-4 sticky top-0 z-20 shadow-xl border-b border-[#232946]/30"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.h1
            className="text-3xl md:text-4xl font-extrabold tracking-tight flex items-center gap-2"
            whileHover={{ scale: 1.04 }}
          >
            <span className="bg-gradient-to-r from-[#eebbc3] to-[#b8c1ec] bg-clip-text text-transparent">Animotion</span>
            <span className="hidden md:inline text-[#eebbc3] font-black">•</span>
            <span className="hidden md:inline text-lg font-medium text-[#b8c1ec]">Showcase</span>
          </motion.h1>
          <nav className="hidden md:flex space-x-8">
            {['home', 'whychoose', 'cards', 'features'].map(section => (
              <motion.button
                key={section}
                className={`text-lg px-2 py-1 rounded transition-colors duration-200 ${activeSection === section ? 'bg-[#eebbc3] text-[#232946]' : 'text-white hover:bg-[#b8c1ec] hover:text-[#232946]'}`}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  setActiveSection(section);
                  document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {section === 'whychoose' ? 'Why Choose Us' : section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.button>
            ))}
          </nav>
          <motion.button
            className="md:hidden text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </motion.button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden bg-[#232946] p-4 mt-2 rounded-b-lg border-t border-[#b8c1ec]/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
            >
              {['home', 'whychoose', 'cards', 'features'].map(section => (
                <motion.button
                  key={section}
                  className="block w-full text-left py-2 text-white hover:text-[#eebbc3]"
                  whileHover={{ x: 10 }}
                  onClick={() => {
                    setActiveSection(section);
                    setIsMenuOpen(false);
                    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {section === 'whychoose' ? 'Why Choose Us' : section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      <main>
        {/* Home Section */}
        {sections.home}
        {/* Why Choose Us Section (always visible) */}
        {sections.whychoose}
        {/* Cards Section (showcase all animation types) */}
        {sections.cards}
        {/* Features Section */}
        {sections.features}
      </main>

      <motion.footer
        className="bg-gradient-to-r from-[#232946] to-[#3b3b5b] text-[#b8c1ec] text-center py-10 px-4 border-t border-[#232946]/30 mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-lg font-medium">&copy; 2025 <span className="text-[#eebbc3] font-bold">Animotion</span>. Crafted with <span className="text-[#eebbc3]">React</span> & <span className="text-[#eebbc3]">Framer Motion</span>.</p>
          <motion.button
            className="mt-4 md:mt-0 px-8 py-3 bg-gradient-to-r from-[#eebbc3] to-[#b8c1ec] text-[#232946] rounded-full text-lg font-semibold shadow hover:from-[#b8c1ec] hover:to-[#eebbc3] transition-colors duration-300"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
          >
            Back to Top
          </motion.button>
        </div>
      </motion.footer>
    </div>
  );
};

export default Animation;