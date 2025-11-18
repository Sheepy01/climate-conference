import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle, AlertCircle, BookOpen, Image, Users, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PaperSubmissionGuidelines = () => {
  const guidelines = {
    general: {
      icon: <FileText className="w-6 h-6" />,
      title: "General Submission Guidelines",
      items: [
        "All papers must be original and not simultaneously submitted to another journal or conference",
        "Use the specific Springer template for conference proceedings",
        "Page length: 8-10 pages for full papers",
        "Similarity index must be below 10%",
        "Include clear title, author details, abstract, and keywords"
      ]
    },
    structure: {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Manuscript Structure",
      items: [
        "Title and Author Details",
        "Abstract and Keywords", 
        "Introduction and Literature Review",
        "Methodology and Experimental Work",
        "Result Analysis and Conclusion",
        "References"
      ]
    },
    authorship: {
      icon: <Users className="w-6 h-6" />,
      title: "Authorship Guidelines",
      items: [
        "Include only Department, College/University, City, and Country",
        "Do not include author's position or title",
        "All co-authors must approve the submission",
        "Corresponding author signs Springer Nature Licence to Publish",
        "No changes to authorship after submission"
      ]
    },
    figures: {
      icon: <Image className="w-6 h-6" />,
      title: "Figures & Tables",
      items: [
        "Minimum 600 dpi resolution for all figures",
        "Use vector graphics (EPS, SVG) for diagrams",
        "Figure captions below figures",
        "Table captions above tables",
        "Proper cross-referencing within text"
      ]
    },
    poster: {
      icon: <Shield className="w-6 h-6" />,
      title: "Poster Guidelines",
      items: [
        "800-1200 dpi resolution for line drawings",
        "Use consistent, readable font sizes",
        "Define abbreviations at first mention",
        "Embed figures and tables within document",
        "Obtain authorization for copyrighted materials"
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const navigate = useNavigate();

  const submitHandler = (url) => {
    window.open(url);
  }

  return (
    <section id="paper-submission" className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200 shadow-sm mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FileText className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">Submission Guidelines</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Paper Submission{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Guidelines
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Comprehensive guidelines for preparing and submitting your research paper to ICC1H 2026
          </motion.p>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-12 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Important Notice</h3>
              <p className="text-blue-800 leading-relaxed">
                All papers must be original and not simultaneously submitted to another journal or conference. 
                Authors must submit original, unpublished work using the specific Springer template, typically between 8-10 pages. 
                Ensure a similarity index is below 10% and that all authors have approved the submission.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Guidelines Grid */}
        <motion.div
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(guidelines).map(([key, section]) => (
            <motion.div
              key={key}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 overflow-hidden group"
              variants={itemVariants}
              whileHover="hover"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                <div className="flex items-center gap-3">
                  <div className="text-white p-2 bg-white/20 rounded-lg">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{section.title}</h3>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <ul className="space-y-3">
                  {section.items.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3 text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-green-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:via-green-500/5 group-hover:to-purple-500/5 transition-all duration-500 opacity-0 group-hover:opacity-100 -z-10"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Requirements Section */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-green-600 to-green-700 p-8">
            <h3 className="text-2xl font-bold text-white text-center">
              Detailed Submission Requirements
            </h3>
          </div>

          <div className="p-8 grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-green-600" />
                  Manuscript Preparation
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">•</span>
                    <span>Use the specific Springer template for the conference proceedings series</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">•</span>
                    <span>Follow the page limit specified by the conference (10–15 pages for full papers)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">•</span>
                    <span>Use the decimal system for headings, with no more than three levels</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Image className="w-5 h-5 text-blue-600" />
                  Figures & Tables
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>All figures must be clear, legible with at least 600 dpi resolution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>Use vector graphics (EPS, SVG) for diagrams whenever possible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>Figure captions go below figures, table captions go above tables</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-purple-600" />
                  Submission Format
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold">•</span>
                    <span>Submit in specified electronic format (Microsoft Word or PDF)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold">•</span>
                    <span>If using TeX, convert special characters to correct code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold">•</span>
                    <span>Obtain and provide authorization for copyrighted materials</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-amber-600" />
                  Text & Formatting
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>Use consistent, readable font size throughout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>Define abbreviations at first mention and use consistently</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>Ensure captions begin with 'Fig.' in bold followed by figure number</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white shadow-2xl">
            <Download className="w-12 h-12 mx-auto mb-4" />
            <h4 className="text-2xl font-bold mb-4">Ready to Submit Your Paper?</h4>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Download the Springer template and ensure your paper meets all submission guidelines before proceeding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => submitHandler('https://easychair.org/conferences/?conf=icc1h')} className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                Submit Paper
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaperSubmissionGuidelines;