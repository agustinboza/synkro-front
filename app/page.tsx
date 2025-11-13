'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 })
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 })
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.2 })
  const contactInView = useInView(contactRef, { once: true, amount: 0.2 })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      
      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      }
      
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 20,
          y: (e.clientY / window.innerHeight - 0.5) * 20,
        })
      }

      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])
  
  // Complex multi-directional light movements
  const light1X = useTransform(scrollYProgress, [0, 0.5, 1], [0, 150, 0])
  const light1Y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -100, 200])
  const light1Rotate = useTransform(scrollYProgress, [0, 1], [0, 45])
  const light1BeamRotate = useTransform(scrollYProgress, [0, 1], [-15, 15])
  
  const light2X = useTransform(scrollYProgress, [0, 0.5, 1], [0, -120, 0])
  const light2Y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 150, -100])
  const light2Rotate = useTransform(scrollYProgress, [0, 1], [0, -30])
  const light2BeamRotate = useTransform(scrollYProgress, [0, 1], [20, -20])
  
  const light3X = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 100, -80, 0])
  const light3Y = useTransform(scrollYProgress, [0, 1], [0, 180])
  const light3Rotate = useTransform(scrollYProgress, [0, 1], [0, 60])
  const light3BeamRotate = useTransform(scrollYProgress, [0, 1], [-25, 25])
  
  const light4X = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, -100, 120, 0])
  const light4Y = useTransform(scrollYProgress, [0, 1], [0, -150])
  const light4Rotate = useTransform(scrollYProgress, [0, 1], [0, -45])
  const light4BeamRotate = useTransform(scrollYProgress, [0, 1], [15, -15])
  
  const light5X = useTransform(scrollYProgress, [0, 0.6, 1], [0, 80, -60])
  const light5Y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const light5Rotate = useTransform(scrollYProgress, [0, 1], [0, 90])
  const light5BeamRotate = useTransform(scrollYProgress, [0, 1], [-30, 30])
  
  const light6X = useTransform(scrollYProgress, [0, 0.5, 1], [0, -90, 70])
  const light6Y = useTransform(scrollYProgress, [0, 1], [0, -180])
  const light6Rotate = useTransform(scrollYProgress, [0, 1], [0, -60])
  const light6BeamRotate = useTransform(scrollYProgress, [0, 1], [25, -25])

  return (
    <main className="relative min-h-screen bg-dark-bg overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20 pointer-events-none" />
      
      {/* Robotic Moving Head Lights - Cool Dynamic Version */}
      <div className="hidden md:block fixed inset-0 overflow-hidden pointer-events-none z-0" style={{ transform: 'translateZ(0)', willChange: 'transform' }}>
        {/* Light 1 - Left side - Blue/Cyan */}
        <motion.div
          className="robotic-light-modern"
          style={{
            top: '8%',
            left: '8%',
            x: light1X,
            y: light1Y,
            rotate: light1Rotate,
          }}
        >
          <div className="modern-light-core modern-light-blue">
            <div className="light-housing" />
            <div className="light-lens-ring" />
            <div className="light-inner-core" />
            <motion.div
              className="light-rotating-ring"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <motion.div 
            className="modern-light-beam modern-beam-blue" 
            style={{ 
              rotate: light1BeamRotate,
            }} 
          />
        </motion.div>

        {/* Light 2 - Left center - Red/Pink */}
        <motion.div
          className="robotic-light-modern"
          style={{
            top: '12%',
            left: '22%',
            x: light2X,
            y: light2Y,
            rotate: light2Rotate,
          }}
        >
          <div className="modern-light-core modern-light-purple">
            <div className="light-housing" />
            <div className="light-lens-ring" />
            <div className="light-inner-core" />
            <motion.div
              className="light-rotating-ring"
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <motion.div 
            className="modern-light-beam modern-beam-purple" 
            style={{ 
              rotate: light2BeamRotate,
            }} 
          />
        </motion.div>

        {/* Light 3 - Center left - Purple */}
        <motion.div
          className="robotic-light-modern"
          style={{
            top: '6%',
            left: '38%',
            x: light3X,
            y: light3Y,
            rotate: light3Rotate,
          }}
        >
          <div className="modern-light-core modern-light-purple">
            <div className="light-housing" />
            <div className="light-lens-ring" />
            <div className="light-inner-core" />
            <motion.div
              className="light-rotating-ring"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <motion.div 
            className="modern-light-beam modern-beam-purple" 
            style={{ 
              rotate: light3BeamRotate,
            }} 
          />
        </motion.div>

        {/* Light 4 - Center right - Green */}
        <motion.div
          className="robotic-light-modern"
          style={{
            top: '10%',
            right: '38%',
            x: light4X,
            y: light4Y,
            rotate: light4Rotate,
          }}
        >
          <div className="modern-light-core modern-light-blue">
            <div className="light-housing" />
            <div className="light-lens-ring" />
            <div className="light-inner-core" />
            <motion.div
              className="light-rotating-ring"
              animate={{ rotate: -360 }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <motion.div 
            className="modern-light-beam modern-beam-blue" 
            style={{ 
              rotate: light4BeamRotate,
            }} 
          />
        </motion.div>

        {/* Light 5 - Right center - Blue */}
        <motion.div
          className="robotic-light-modern"
          style={{
            top: '8%',
            right: '22%',
            x: light5X,
            y: light5Y,
            rotate: light5Rotate,
          }}
        >
          <div className="modern-light-core modern-light-blue">
            <div className="light-housing" />
            <div className="light-lens-ring" />
            <div className="light-inner-core" />
            <motion.div
              className="light-rotating-ring"
              animate={{ rotate: 360 }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <motion.div 
            className="modern-light-beam modern-beam-blue" 
            style={{ 
              rotate: light5BeamRotate,
            }} 
          />
        </motion.div>

        {/* Light 6 - Right side - Pink/Red */}
        <motion.div
          className="robotic-light-modern"
          style={{
            top: '14%',
            right: '8%',
            x: light6X,
            y: light6Y,
            rotate: light6Rotate,
          }}
        >
          <div className="modern-light-core modern-light-purple">
            <div className="light-housing" />
            <div className="light-lens-ring" />
            <div className="light-inner-core" />
            <motion.div
              className="light-rotating-ring"
              animate={{ rotate: -360 }}
              transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <motion.div 
            className="modern-light-beam modern-beam-purple" 
            style={{ 
              rotate: light6BeamRotate,
            }} 
          />
        </motion.div>
      </div>
      
      {/* Laser Grid Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`grid-h-${i}`}
            className="absolute laser-grid-line"
            style={{
              left: 0,
              top: `${(i + 1) * 12.5}%`,
              width: '100%',
              height: '1px',
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`grid-v-${i}`}
            className="absolute laser-grid-line"
            style={{
              top: 0,
              left: `${(i + 1) * 7.7}%`,
              width: '1px',
              height: '100%',
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Sweeping Laser Beams */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Horizontal sweeping lasers */}
        <motion.div
          className="laser-beam laser-sweep"
          style={{
            width: '300px',
            height: '2px',
            top: '20%',
          }}
          animate={{
            y: [0, windowSize.height * 0.6, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="laser-beam laser-sweep-reverse"
          style={{
            width: '400px',
            height: '2px',
            top: '60%',
          }}
          animate={{
            y: [0, -windowSize.height * 0.4, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="laser-beam laser-sweep"
          style={{
            width: '250px',
            height: '2px',
            top: '80%',
          }}
          animate={{
            y: [0, windowSize.height * 0.3, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Vertical sweeping lasers */}
        <motion.div
          className="laser-beam-vertical laser-sweep-vertical"
          style={{
            left: '15%',
            top: 0,
          }}
          animate={{
            x: [0, windowSize.width * 0.7, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="laser-beam-vertical laser-sweep-vertical"
          style={{
            left: '85%',
            top: 0,
          }}
          animate={{
            x: [0, -windowSize.width * 0.7, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Laser Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`laser-particle-${i}`}
            className="laser-particle"
            initial={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
            }}
            animate={{
              x: [
                Math.random() * windowSize.width,
                Math.random() * windowSize.width,
                Math.random() * windowSize.width,
              ],
              y: [
                Math.random() * windowSize.height,
                Math.random() * windowSize.height,
                Math.random() * windowSize.height,
              ],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
            }}
            animate={{
              y: [null, Math.random() * windowSize.height],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 epic-navbar"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-blue-900/20 to-pink-900/30 opacity-50" />
        <div className="absolute inset-0 bg-dark-bg/90 backdrop-blur-xl" />
        
        {/* Animated border glow */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-px"
          animate={{
            background: [
              'linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.8), transparent)',
              'linear-gradient(90deg, transparent, rgba(240, 147, 251, 0.8), transparent)',
              'linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.8), transparent)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating particles in navbar */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`nav-particle-${i}`}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: '50%',
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <motion.div
              className="text-3xl font-bold gradient-text epic-logo"
              animate={{
                textShadow: [
                  '0 0 20px rgba(102, 126, 234, 0.5)',
                  '0 0 30px rgba(240, 147, 251, 0.5)',
                  '0 0 20px rgba(102, 126, 234, 0.5)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              SYNkRO
            </motion.div>
            {/* Glow effect behind logo */}
            <motion.div
              className="absolute inset-0 blur-xl opacity-50"
              style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              SYNkRO
            </motion.div>
          </motion.div>
          
          <div className="hidden md:flex gap-10 items-center">
            {['Services', 'About', 'Portfolio', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ 
                  scale: 1.15,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                className="relative epic-nav-link group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <span className="relative z-10 text-white/90 group-hover:text-white font-medium text-sm tracking-wider uppercase">
                  {item}
                </span>
                {/* Underline effect */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 blur-md opacity-0 group-hover:opacity-50"
                  style={{
                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.5), rgba(240, 147, 251, 0.5))',
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
            
            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(102, 126, 234, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="ml-6 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-sm text-white relative overflow-hidden epic-nav-button"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.7,
                type: "spring",
                stiffness: 200,
              }}
            >
              <span className="relative z-10">Get Started</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center"
      >
        <motion.div
          style={{ opacity, scale, y }}
          className="text-center px-6 z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6">
              <span className="gradient-text">Synkro</span>
              <br />
              <span className="text-white">Producciones</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto"
          >
            We transform visions into reality, creating immersive events that
            captivate and inspire
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-6 justify-center flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold glow hover:shadow-lg transition-all"
            >
              Start Your Event
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/30 rounded-full font-semibold hover:border-white/60 hover:bg-white/5 transition-all"
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Animated geometric shapes with laser effects */}
        <motion.div
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          className="absolute top-20 right-20 w-64 h-64 border border-purple-500/30 rounded-lg rotate-45"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {/* Laser corner effects */}
          <motion.div
            className="absolute -top-1 -left-1 w-3 h-3 bg-purple-500 rounded-full laser-pulse"
            style={{
              boxShadow: '0 0 20px rgba(102, 126, 234, 0.8)',
            }}
          />
          <motion.div
            className="absolute -bottom-1 -right-1 w-3 h-3 bg-pink-500 rounded-full laser-pulse"
            style={{
              boxShadow: '0 0 20px rgba(240, 147, 251, 0.8)',
              animationDelay: '1s',
            }}
          />
        </motion.div>
        <motion.div
          style={{
            x: -mousePosition.x,
            y: -mousePosition.y,
          }}
          className="absolute bottom-20 left-20 w-96 h-96 border border-pink-500/20 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Rotating laser points on circle */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-500 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: '0 192px',
                boxShadow: '0 0 15px rgba(102, 126, 234, 0.8)',
              }}
              animate={{
                rotate: [i * 45, i * 45 + 360],
                x: [0, 0],
                y: [-192, -192],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>

        {/* Diagonal laser beams in hero */}
        <motion.div
          className="laser-beam"
          style={{
            width: '200px',
            height: '2px',
            top: '30%',
            left: '-200px',
            transform: 'rotate(45deg)',
          }}
          animate={{
            x: [0, windowSize.width + 400],
            y: [0, windowSize.height + 400],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 2,
          }}
        />
        <motion.div
          className="laser-beam"
          style={{
            width: '250px',
            height: '2px',
            top: '70%',
            right: '-250px',
            transform: 'rotate(-45deg)',
          }}
          animate={{
            x: [0, -(windowSize.width + 500)],
            y: [0, windowSize.height + 500],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 3,
          }}
        />
      </section>

      {/* Laser divider between sections */}
      <div className="relative w-full h-px overflow-hidden">
        <motion.div
          className="laser-beam"
          style={{
            width: '100%',
            height: '2px',
          }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Services Section */}
      <section
        id="services"
        ref={servicesRef}
        className="relative py-32 px-6"
      >
        {/* Laser accent beams */}
        <motion.div
          className="laser-beam-vertical"
          style={{
            left: '10%',
            top: 0,
            height: '100%',
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="laser-beam-vertical"
          style={{
            right: '10%',
            top: 0,
            height: '100%',
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-white/60">
              End-to-end event production solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Event Design',
                description:
                  'Creative concepts and stunning visual designs that bring your vision to life',
                iconType: 'design',
              },
              {
                title: 'Technical Production',
                description:
                  'State-of-the-art audio, video, and lighting systems for flawless execution',
                iconType: 'tech',
              },
              {
                title: 'Live Experiences',
                description:
                  'Immersive experiences that engage and captivate your audience',
                iconType: 'live',
              },
            ].map((service, index) => {
              const gradientId = `gradient-${service.iconType}-${index}`
              
              const renderIcon = () => {
                if (service.iconType === 'design') {
                  return (
                    <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <motion.path
                        d="M32 8L12 20V44L32 56L52 44V20L32 8Z"
                        stroke={`url(#${gradientId})`}
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={servicesInView ? { pathLength: 1 } : {}}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                      <motion.circle
                        cx="24"
                        cy="28"
                        r="3"
                        fill={`url(#${gradientId})`}
                        initial={{ scale: 0 }}
                        animate={servicesInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.8 }}
                      />
                      <motion.circle
                        cx="32"
                        cy="28"
                        r="3"
                        fill={`url(#${gradientId})`}
                        initial={{ scale: 0 }}
                        animate={servicesInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1 }}
                      />
                      <motion.circle
                        cx="40"
                        cy="28"
                        r="3"
                        fill={`url(#${gradientId})`}
                        initial={{ scale: 0 }}
                        animate={servicesInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1.2 }}
                      />
                      <motion.path
                        d="M20 36L32 42L44 36"
                        stroke={`url(#${gradientId})`}
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={servicesInView ? { pathLength: 1 } : {}}
                        transition={{ duration: 0.8, delay: 1.4 }}
                      />
                      <defs>
                        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#667eea" />
                          <stop offset="50%" stopColor="#764ba2" />
                          <stop offset="100%" stopColor="#f093fb" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )
                } else if (service.iconType === 'tech') {
                  return (
                    <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <motion.rect
                        x="12"
                        y="16"
                        width="40"
                        height="32"
                        rx="2"
                        stroke={`url(#${gradientId})`}
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={servicesInView ? { pathLength: 1 } : {}}
                        transition={{ duration: 1, delay: 0.4 }}
                      />
                      <motion.rect
                        x="16"
                        y="20"
                        width="32"
                        height="20"
                        rx="1"
                        fill={`url(#${gradientId})`}
                        fillOpacity="0.2"
                        initial={{ scale: 0 }}
                        animate={servicesInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      />
                      <motion.circle
                        cx="26"
                        cy="30"
                        r="2"
                        fill={`url(#${gradientId})`}
                        initial={{ scale: 0 }}
                        animate={servicesInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 1.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
                      />
                      <motion.circle
                        cx="32"
                        cy="30"
                        r="2"
                        fill={`url(#${gradientId})`}
                        initial={{ scale: 0 }}
                        animate={servicesInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 1.4, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
                      />
                      <motion.circle
                        cx="38"
                        cy="30"
                        r="2"
                        fill={`url(#${gradientId})`}
                        initial={{ scale: 0 }}
                        animate={servicesInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 1.6, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
                      />
                      <motion.path
                        d="M20 44L24 48L28 44"
                        stroke={`url(#${gradientId})`}
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={servicesInView ? { pathLength: 1 } : {}}
                        transition={{ duration: 0.6, delay: 1.8 }}
                      />
                      <motion.path
                        d="M36 44L40 48L44 44"
                        stroke={`url(#${gradientId})`}
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={servicesInView ? { pathLength: 1 } : {}}
                        transition={{ duration: 0.6, delay: 2 }}
                      />
                      <defs>
                        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#667eea" />
                          <stop offset="50%" stopColor="#764ba2" />
                          <stop offset="100%" stopColor="#f093fb" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )
                } else {
                  return (
                    <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <motion.path
                        d="M32 12L36 24L48 24L38 32L42 44L32 36L22 44L26 32L16 24L28 24L32 12Z"
                        fill={`url(#${gradientId})`}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={servicesInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      />
                      <motion.path
                        d="M20 20L22 26L28 26L23 30L25 36L20 32L15 36L17 30L12 26L18 26L20 20Z"
                        fill={`url(#${gradientId})`}
                        fillOpacity="0.6"
                        initial={{ scale: 0, rotate: 180 }}
                        animate={servicesInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ duration: 0.6, delay: 1 }}
                      />
                      <motion.path
                        d="M44 20L46 26L52 26L47 30L49 36L44 32L39 36L41 30L36 26L42 26L44 20Z"
                        fill={`url(#${gradientId})`}
                        fillOpacity="0.6"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={servicesInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ duration: 0.6, delay: 1.2 }}
                      />
                      <motion.circle
                        cx="32"
                        cy="50"
                        r="3"
                        fill={`url(#${gradientId})`}
                        initial={{ scale: 0 }}
                        animate={servicesInView ? { scale: [0, 1.2, 1] } : {}}
                        transition={{ duration: 0.5, delay: 1.4, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
                      />
                      <defs>
                        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#667eea" />
                          <stop offset="50%" stopColor="#764ba2" />
                          <stop offset="100%" stopColor="#f093fb" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )
                }
              }

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-dark-card p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all cursor-pointer group"
                >
                  <motion.div
                    className="mb-6 flex justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {renderIcon()}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all">
                    {service.title}
                  </h3>
                  <p className="text-white/60">{service.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Laser divider */}
      <div className="relative w-full h-px overflow-hidden bg-dark-surface">
        <motion.div
          className="laser-beam"
          style={{
            width: '100%',
            height: '2px',
          }}
          animate={{
            x: ['100%', '-100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* About Section */}
      <section
        id="about"
        ref={aboutRef}
        className="relative py-32 px-6 bg-dark-surface/30"
        style={{ isolation: 'isolate', willChange: 'auto' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Crafting <span className="gradient-text">Excellence</span>
              </h2>
              <p className="text-lg text-white/70 mb-6">
                With years of experience in the industry, we've mastered the art
                of creating events that leave lasting impressions. Our team of
                creative professionals and technical experts work together to
                deliver seamless, unforgettable experiences.
              </p>
              <p className="text-lg text-white/70">
                From intimate gatherings to large-scale productions, we bring
                innovation, precision, and passion to every project.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative h-96"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl blur-2xl opacity-50" />
              <div className="relative h-full bg-dark-card/20 rounded-2xl border border-white/20 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 border-4 border-purple-500/50 rounded-full"
                  style={{ willChange: 'transform', transform: 'translate3d(0, 0, 0)' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Laser divider */}
      <div className="relative w-full h-px overflow-hidden">
        <motion.div
          className="laser-beam"
          style={{
            width: '100%',
            height: '2px',
          }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Stats Section */}
      <section className="relative py-32 px-6">
        {/* Rotating laser beams around stats */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`stat-laser-${i}`}
              className="laser-beam"
              style={{
                width: '150px',
                height: '2px',
                top: '50%',
                left: '50%',
                transformOrigin: '0 0',
              }}
              animate={{
                rotate: [i * 90, i * 90 + 360],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Events Produced' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Awards Won' },
              { number: '15+', label: 'Years Experience' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="text-5xl md:text-6xl font-bold gradient-text mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-white/60 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Laser divider */}
      <div className="relative w-full h-px overflow-hidden bg-dark-surface">
        <motion.div
          className="laser-beam"
          style={{
            width: '100%',
            height: '2px',
          }}
          animate={{
            x: ['100%', '-100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className="relative py-32 px-6 bg-dark-surface"
      >
        {/* Converging laser beams effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`contact-laser-${i}`}
              className="laser-beam"
              style={{
                width: '200px',
                height: '2px',
                top: '50%',
                left: '50%',
                transformOrigin: '0 0',
              }}
              animate={{
                rotate: [i * 30, i * 30 + 360],
                opacity: [0.2, 0.7, 0.2],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Create <span className="gradient-text">Magic</span>
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Ready to bring your event vision to life? Get in touch with us
              today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg glow hover:shadow-lg transition-all"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-white/60">
          <p>© 2024 Synkro. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

