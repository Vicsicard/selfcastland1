import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PhoneIcon, DocumentTextIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter } from 'react-icons/fa';

// Enhanced Dashboard Component
const EnhancedDashboard = () => {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform perspective-1000">
      {/* Dashboard Header */}
      <div className="bg-primary px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex space-x-1 sm:space-x-2 mr-2 sm:mr-4">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
          </div>
          <h3 className="text-white font-montserrat font-semibold text-xs sm:text-sm md:text-base">Self Cast Dashboard</h3>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-xs sm:text-sm">SC</div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Sidebar */}
          <div className="md:col-span-3 bg-gray-50 rounded-lg p-3 md:p-4">
            <h4 className="font-montserrat font-semibold mb-2 sm:mb-4 text-primary text-sm sm:text-base">Content Library</h4>
            <ul className="space-y-3">
              <li className="flex items-center p-1 sm:p-2 bg-accent bg-opacity-10 rounded">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                <span className="font-medium text-xs sm:text-sm">Bio/About</span>
              </li>
              <li className="flex items-center p-1 sm:p-2 hover:bg-gray-100 rounded">
                <span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>
                <span className="text-xs sm:text-sm">Blog Posts (4)</span>
              </li>
              <li className="flex items-center p-1 sm:p-2 hover:bg-gray-100 rounded">
                <span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>
                <span className="text-xs sm:text-sm">Social Media (4)</span>
              </li>
              <li className="flex items-center p-1 sm:p-2 hover:bg-gray-100 rounded">
                <span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>
                <span className="text-xs sm:text-sm">Analytics</span>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="font-montserrat font-semibold mb-2 sm:mb-4 text-primary text-sm sm:text-base">Quick Actions</h4>
              <button className="w-full bg-accent text-primary font-medium py-1 sm:py-2 rounded mb-2 text-xs sm:text-sm">+ New Post</button>
              <button className="w-full bg-gray-100 text-gray-700 font-medium py-1 sm:py-2 rounded text-xs sm:text-sm">Schedule Content</button>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-9 mt-4 md:mt-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-montserrat font-bold text-sm sm:text-base md:text-xl">Professional Bio</h2>
              <div className="flex space-x-2">
                <button className="px-2 sm:px-3 py-1 bg-gray-100 rounded text-xs sm:text-sm">Preview</button>
                <button className="px-2 sm:px-3 py-1 bg-accent text-primary rounded text-xs sm:text-sm font-medium">Publish</button>
              </div>
            </div>

            {/* Content Editor */}
            <div className="bg-white border rounded-lg p-4 mb-6">
              <h3 className="font-montserrat font-semibold text-sm sm:text-base md:text-lg mb-2">About Sarah Johnson</h3>
              <div className="space-y-3">
                <p className="text-gray-700 text-xs sm:text-sm md:text-base">Sarah Johnson is a seasoned marketing consultant with over 10 years of experience helping businesses develop effective marketing strategies...</p>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base">Specializing in digital transformation and brand development, Sarah has worked with clients across various industries including technology, healthcare, and finance...</p>
                <div className="h-4 bg-gray-200 rounded w-3/4 mt-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mt-2"></div>
              </div>
            </div>

            {/* Content Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-xs sm:text-sm font-medium text-gray-500">Word Count</h4>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary">247</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-xs sm:text-sm font-medium text-gray-500">Reading Time</h4>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary">2 min</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-xs sm:text-sm font-medium text-gray-500">SEO Score</h4>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-accent">92%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EnhancedHero = ({ onCtaClick }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(226, 184, 87, 0.4)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.95 }
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-secondary py-12 md:py-20 px-4 md:px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{ 
            backgroundImage: 'linear-gradient(#0B0B0B 1px, transparent 1px), linear-gradient(to right, #0B0B0B 1px, transparent 1px)',
            backgroundSize: '40px 40px' 
          }}></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl leading-tight"
          >
            Turn a <span className="relative inline-block">
              <span className="relative z-10 text-accent">20-Minute Call</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-accent opacity-20 rounded"></span>
            </span> Into <br className="hidden md:block" /> 
            <span className="text-primary">1 Month of Content</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.div 
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-dark max-w-2xl mx-auto relative"
          >
            <div className="bg-white bg-opacity-70 backdrop-blur-sm px-6 py-4 rounded-xl shadow-sm">
              <h3 className="font-montserrat font-semibold mb-3 text-center">
                <span className="bg-accent bg-opacity-10 px-4 py-1 rounded-full">
                  For <span className="font-bold text-accent text-xl">$99</span> <span className="text-sm">(no contract)</span> you get:
                </span>
              </h3>
              <ul className="space-y-3 text-left">
                <motion.li 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-accent bg-opacity-20 rounded-full flex items-center justify-center">
                    <DocumentTextIcon className="w-4 h-4 text-accent" />
                  </span>
                  <span><span className="font-semibold">Bio/About page</span> that captures your unique value</span>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-accent bg-opacity-20 rounded-full flex items-center justify-center">
                    <DocumentTextIcon className="w-4 h-4 text-accent" />
                  </span>
                  <span><span className="font-semibold">4 custom blogs</span> tailored to your expertise</span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-accent bg-opacity-20 rounded-full flex items-center justify-center mt-1">
                    <DocumentTextIcon className="w-4 h-4 text-accent" />
                  </span>
                  <span>
                    <span className="font-semibold">4 social media posts</span> for:
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="flex items-center gap-1 bg-[#0077b5] text-white px-2 py-1 rounded-md text-sm">
                        <FaLinkedin /> LinkedIn
                      </span>
                      <span className="flex items-center gap-1 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white px-2 py-1 rounded-md text-sm">
                        <FaInstagram /> Instagram
                      </span>
                      <span className="flex items-center gap-1 bg-[#1877F2] text-white px-2 py-1 rounded-md text-sm">
                        <FaFacebookSquare /> Facebook
                      </span>
                      <span className="flex items-center gap-1 bg-black text-white px-2 py-1 rounded-md text-sm">
                        <FaTwitter /> Twitter/X
                      </span>
                    </div>
                  </span>
                </motion.li>
              </ul>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="mt-8 md:mt-12">
            <motion.a
              href="https://buy.stripe.com/eVq28r1LKdkBcSM70ycwg14"
              onClick={onCtaClick}
              className="inline-block bg-gradient-to-r from-accent to-accent-light text-primary font-montserrat font-semibold px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-lg shadow-lg text-sm sm:text-base relative overflow-hidden group"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              data-testid="hero-cta"
            >
              <motion.span 
                className="absolute inset-0 w-full h-full bg-white opacity-20"
                initial={{ width: 0, left: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
              ></motion.span>
              <span className="flex items-center justify-center relative z-10">
                <span>Start for <span className="font-bold">$99</span></span>
                <motion.svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </span>
            </motion.a>
          </motion.div>
          {/* Dashboard Preview */}
          <motion.div 
            variants={itemVariants}
            className="mt-10 md:mt-16 max-w-5xl mx-auto"
          >
            <div className="relative">
              {/* Process Icons */}
              <div className="absolute -top-16 sm:-top-20 left-0 right-0 flex justify-center space-x-8 sm:space-x-16 md:space-x-32 z-10">
                <motion.div 
                  variants={floatingVariants}
                  initial="initial"
                  animate="animate"
                  className="flex flex-col items-center"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full shadow-xl border border-accent border-opacity-20 flex items-center justify-center">
                    <PhoneIcon className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                  </div>
                  <p className="mt-2 text-xs sm:text-sm font-medium bg-white bg-opacity-70 px-2 py-1 rounded-full shadow-sm">20-Min Call</p>
                </motion.div>

                <motion.div 
                  variants={floatingVariants}
                  initial="initial"
                  animate="animate"
                  style={{ animationDelay: "1s" }}
                  className="flex flex-col items-center"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full shadow-xl border border-accent border-opacity-20 flex items-center justify-center">
                    <DocumentTextIcon className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                  </div>
                  <p className="mt-2 text-xs sm:text-sm font-medium bg-white bg-opacity-70 px-2 py-1 rounded-full shadow-sm">Content Creation</p>
                </motion.div>

                <motion.div 
                  variants={floatingVariants}
                  initial="initial"
                  animate="animate"
                  style={{ animationDelay: "2s" }}
                  className="flex flex-col items-center"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full shadow-xl border border-accent border-opacity-20 flex items-center justify-center">
                    <ChatBubbleBottomCenterTextIcon className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                  </div>
                  <p className="mt-2 text-xs sm:text-sm font-medium bg-white bg-opacity-70 px-2 py-1 rounded-full shadow-sm">Publish</p>
                </motion.div>
              </div>

              {/* Dashboard Mockup */}
              <div className="mt-24 sm:mt-28 md:mt-32 pt-6 sm:pt-8 relative">
                <EnhancedDashboard />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedHero;
