import React, { useState, useEffect, useRef } from "react";
import "../styles/styles.css"; // Uses the same CSS as Privacy Policy
import help from "../assets/help.png";

const faqResponses = {
  pricing: ["We offer different photography packages starting from ₹5,000. Let us know your requirements!"],
  location: ["We are located in Karad, Maharashtra, and provide services across India."],
  technical: ["Our team uses high-end cameras and software for the best quality photos."],
  booking: ["You can book a session through our website, Instagram, or WhatsApp."],
  cancellation: ["Cancellations made 72 hours before the shoot are eligible for a refund, minus processing fees."],
  contact: ["You can contact us via 📞 Phone: +91 7757984048 or 📧 Email: pranavpatangext@gmail.com."]
};

// Keywords mapping for easy recognition
const keywordMapping = {
  pricing: ["price", "pricing", "cost", "money", "rates"],
  location: ["location", "place", "where", "address"],
  technical: ["technical", "quality", "camera", "editing"],
  booking: ["book", "booking", "schedule", "appointment"],
  cancellation: ["cancel", "refund", "cancellation"],
  contact: ["chat", "help", "agent", "support", "talk", "contact"]
};

const Help = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today? 😊", sender: "bot" },
    { text: "Try keywords like Pricing, Location, Booking, Technical, Cancellation, or Contact.", sender: "bot" }
  ]);
  const [userInput, setUserInput] = useState("");
  const chatContainerRef = useRef(null);

  // Auto-scroll chat window (ONLY inside chat container)
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleUserInput = () => {
    if (!userInput.trim()) return;

    const userMessage = userInput.toLowerCase();
    let response = "I'm sorry, I didn't understand. Please try again or contact us.";

    for (const category in keywordMapping) {
      if (keywordMapping[category].some((word) => userMessage.includes(word))) {
        response = faqResponses[category][0];
        break;
      }
    }

    setMessages([...messages, { text: userInput, sender: "user" }, { text: response, sender: "bot" }]);
    setUserInput("");
  };

  const handleQuickReply = (keyword) => {
    setMessages([...messages, { text: keyword, sender: "user" }, { text: faqResponses[keyword][0], sender: "bot" }]);
  };

  return (
    <div className="privacy-page"> {/* Reusing the same CSS class */}
            <img src={help} alt="help" className="help-image" />
      <h1 className="privacy-title">Help & Support</h1>
      <div className="privacy-content"> {/* Keeps consistent styling */}
        
        {/* Chat Container with Fixed Height and Scrollable */}
        <div className="chat-container" ref={chatContainerRef}>
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>{msg.text}</div>
          ))}
        </div>

        <div className="chat-options">
          {Object.keys(faqResponses).map((key) => (
            <button key={key} onClick={() => handleQuickReply(key)}>{key.charAt(0).toUpperCase() + key.slice(1)}</button>
          ))}
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your question..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleUserInput()}
          />
          <button onClick={handleUserInput}>Send</button>
        </div>

        <div className="contact-options">
          <button onClick={() => handleQuickReply("contact")}>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Help;
