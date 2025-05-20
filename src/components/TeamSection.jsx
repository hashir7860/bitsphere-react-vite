import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = React.useState(null);

  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      photo: 'https://invozone-backend.s3.us-east-1.amazonaws.com/Rectangle_19829_81dcf601de.webp',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        github: '#',
      },
      bio: 'Visionary leader with 15+ years of experience in tech innovation and business strategy.'
    },
    {
      name: 'Jane Smith',
      role: 'Lead Developer',
      photo: 'https://invozone-backend.s3.us-east-1.amazonaws.com/Rectangle_19829_81dcf601de.webp',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        github: '#',
      },
      bio: 'Full-stack developer specializing in React, Node.js, and cloud architecture.'
    },
    {
      name: 'Michael Lee',
      role: 'Product Manager',
      photo: 'https://invozone-backend.s3.us-east-1.amazonaws.com/Rectangle_19829_81dcf601de.webp',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        github: '#',
      },
      bio: 'Product strategist focused on user-centered design and agile methodologies.'
    },
    {
      name: 'Sarah Connor',
      role: 'UX/UI Designer',
      photo: 'https://invozone-backend.s3.us-east-1.amazonaws.com/Rectangle_19829_81dcf601de.webp',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        github: '#',
      },
      bio: 'Creative designer passionate about creating intuitive and beautiful user experiences.'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-blue-600">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The talented professionals behind our success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              onHoverStart={() => setHoveredMember(index)}
              onHoverEnd={() => setHoveredMember(null)}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                <div className="relative pt-8 px-8">
                  <div className="relative w-32 h-32 mx-auto">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                      animate={{
                        scale: hoveredMember === index ? 1.05 : 1,
                        opacity: hoveredMember === index ? 0.2 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full border-4 border-white relative z-10"
                    />
                  </div>
                </div>

                <div className="p-6 text-center flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  
                  <AnimatePresence>
                    {hoveredMember === index && (
                      <motion.p
                        className="text-gray-600 text-sm mb-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {member.bio}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div className="pb-6 px-6">
                  <div className="flex justify-center gap-4">
                    <motion.a
                      href={member.socialLinks.linkedin}
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                      whileHover={{ y: -3 }}
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={20} />
                    </motion.a>
                    <motion.a
                      href={member.socialLinks.twitter}
                      className="text-gray-500 hover:text-blue-400 transition-colors"
                      whileHover={{ y: -3 }}
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter size={20} />
                    </motion.a>
                    <motion.a
                      href={member.socialLinks.github}
                      className="text-gray-500 hover:text-gray-800 transition-colors"
                      whileHover={{ y: -3 }}
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={`mailto:${member.name.split(' ').join('.').toLowerCase()}@example.com`}
                      className="text-gray-500 hover:text-red-500 transition-colors"
                      whileHover={{ y: -3 }}
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">Want to join our talented team?</p>
          <motion.button
            className="bg-gradient-to-r  from-blue-400 to-blue-600 cursor-pointer hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Open Positions
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;