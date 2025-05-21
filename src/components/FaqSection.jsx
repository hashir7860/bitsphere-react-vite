import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of services including web development, UI/UX design, and app development tailored to your business needs.We offer a wide range of services including web development, UI/UX design, and app development tailored to your business needs.We offer a wide range of services including web development, UI/UX design, and app development tailored to your business needs.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines vary depending on complexity, but most projects are delivered within 2–6 weeks.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes! We provide maintenance and ongoing support after project delivery to ensure smooth performance.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "Our pricing is project-based. After a brief consultation, we provide a custom quote based on your requirements.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Absolutely! We’ve worked with clients from over 15 countries and can schedule meetings in your preferred timezone.",
  },
  {
    question: "Can I update my website after launch?",
    answer:
      "Yes, we build websites with CMS access or provide documentation so you can easily make edits yourself.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern frameworks like React, Next.js, Node.js, and Tailwind CSS. For design, we use Figma and Adobe Suite.",
  },
  {
    question: "How do I get started with you?",
    answer:
      "Just head over to our Contact section and send a message. We’ll schedule a free consultation to get things rolling!",
  },
];

const FaqItem = ({ faq }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-white p-5 rounded-xl duration-300 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center font-semibold">
        <h4 className="text-gray-800 text-lg">{faq.question}</h4>
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[oklch(62.3% 0.214 259.815)]"
        >
          {/* ⌄ */}
          <FaChevronDown />
        </motion.span>
      </div>
      {open && (
        <motion.p
          className="text-sm text-gray-800 mt-2"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          {faq.answer}
        </motion.p>
      )}
    </div>
  );
};

const FaqSection = () => {
  const half = Math.ceil(faqs.length / 2);
  const leftFAQs = faqs.slice(0, half);
  const rightFAQs = faqs.slice(half);

  return (
    <section className="py-24 bg-skyblue text-gray-800 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Frequently Asked Questions</h2>

        <div className="grid md:grid-cols-1 gap-6">
          <div className="space-y-4">
            {leftFAQs.map((faq, index) => (
              <FaqItem key={index} faq={faq} />
            ))}
          </div>

          {/* <div className="space-y-4">
            {rightFAQs.map((faq, index) => (
              <FaqItem key={index + half} faq={faq} />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
