import React, { useState } from "react";
import "../styles/FaqPage.css";

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What time does the conference start?",
      answer: "Check-in begins at 5pm for each night of the conference."
    },
    {
      question: "Will you live stream?",
      answer: "While it is our goal to provide a livestream option for future conferences, there is currently not a livestream option."
    },
    {
      question: "Can I pay at the door?",
      answer: "Due to limited seating and food all tickets will need to be purchased in advance."
    },
    {
      question: "Is there a group discount?",
      answer: "If you register a group there is a $5 discount per student. Reach out to amarler@harvestonline.church to get the discount code."
    },
    {
      question: "Can I register now and pay later?",
      answer: "Youth & Young adult pastors who are bringing their group can register now and pay later. Please reach out to amarler@harvestonline.church"
    },
    {
      question: "Do youth pastors get in for free?",
      answer: "Yes! Every youth/young adult pastor & spouse get in for free."
    },
    {
      question: "Where do I park once I arrive?",
      answer: "There is a place for you to park here 225 Fourth St, Turlock CA 95380"
    },
    {
      question: "Are meals for all 5 nights included in the ticket price?",
      answer: "Yes!"
    },
    {
      question: "For students with dietary restrictions, can we bring their food in?",
      answer: "Yes!"
    },
    {
      question: "If I register and cannot make it, will you provide a refund?",
      answer: "No, all purchases are final. If you cannot make it you can gift or donate your ticket to someone else."
    },
    {
      question: "Will there be merch available?",
      answer: "Limited merch will be available for purchase at the conference. Once we are sold out, we are out."
    },
    {
      question: "Who do I contact if I have more questions?",
      answer: "For all questions pertaining to the conference please contact amarler@harvestonline.church"
    }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqpage">
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <button 
              className={`regularfont faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
              <span className="arrow">{activeIndex === index ? '✧' : '✦'}</span>
            </button>
            {activeIndex === index && (
              <div className="innerfont faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
