import React, { useState } from "react";

/**
 * FAQAccordion Component
 * ----------------------
 * Renders an accessible, animated accordion for frequently asked questions.
 * 
 * Props:
 * - faqs (Array<{ question: string, answer: string }>): list of FAQ items
 */
export default function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="ca-faq-list">
      {faqs.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`ca-faq-item ${isOpen ? "open" : ""}`}
            onClick={() => toggleFAQ(idx)}
          >
            <div className="ca-faq-question">
              <span className="ca-faq-q-text">{item.question}</span>
              <span className="ca-faq-toggle-icon">{isOpen ? "−" : "+"}</span>
            </div>
            {isOpen && (
              <div className="ca-faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
