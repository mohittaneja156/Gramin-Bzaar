"use client";

import { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, Send, Mic, Image, Paperclip, 
  Bot, User, RefreshCw, ThumbsUp, ThumbsDown,
  Lightbulb, HelpCircle, Sparkles, Globe
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Script from 'next/script';
import styles from './styles.module.css';

export default function SahayakBot() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'नमस्ते! मैं आपका सहायक बॉट हूँ। आप किस विषय में मदद चाहते हैं?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState('hindi'); // Default language
  const [suggestions] = useState({
    hindi: [
      'GeM पोर्टल पर रजिस्टर कैसे करें?',
      'उत्पाद की अच्छी फोटो कैसे लें?',
      'शिपिंग के लिए पैकेजिंग कैसे करें?',
      'ऑनलाइन पेमेंट कैसे स्वीकारें?'
    ],
    english: [
      'How to register on GeM portal?',
      'How to take good product photos?',
      'How to package items for shipping?',
      'How to accept online payments?'
    ]
  });
  
  const router = useRouter();
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  
  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Initialize Lucide icons
  useEffect(() => {
    if (typeof window !== 'undefined' && window.lucide) {
      window.lucide.createIcons();
    }
  }, []);
  
  const goBack = () => {
    router.push('/');
  };
  
  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    // Add user message to chat
    const userMessage = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    try {
      // Use our proxy API route instead of calling Groq directly
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'meta-llama/llama-4-maverick-17b-128e-instruct', // Updated to a valid Groq model
          messages: [
            {
              role: 'system',
              content: `You are a helpful assistant for rural entrepreneurs in India. 
                        Respond in ${language === 'hindi' ? 'Hindi' : 'English'} language. 
                        Keep responses concise, practical and focused on small business needs.
                        Format your responses with proper line breaks and bullet points when listing items.`
            },
            ...messages.map(msg => ({
              role: msg.role,
              content: msg.content
            })),
            { role: 'user', content: inputMessage }
          ],
          temperature: 0.7,
          max_tokens: 1000
        })
      });
      
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      
      const data = await response.json();
      const botResponse = {
        role: 'assistant',
        content: data.choices[0].message.content,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        role: 'assistant',
        content: language === 'hindi' 
          ? 'माफ़ करें, एक त्रुटि हुई है। कृपया थोड़ी देर बाद फिर से प्रयास करें।' 
          : 'Sorry, an error occurred. Please try again later.',
        timestamp: new Date(),
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const handleSuggestionClick = (suggestion) => {
    setInputMessage(suggestion);
  };
  
  const handleAttachFile = () => {
    fileInputRef.current.click();
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Handle file upload logic here
      alert(language === 'hindi' ? `फ़ाइल चुनी गई: ${file.name}` : `File selected: ${file.name}`);
    }
  };
  
  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString(language === 'hindi' ? 'hi-IN' : 'en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'hindi' ? 'english' : 'hindi';
    setLanguage(newLanguage);
    
    // Add a system message about language change
    const systemMessage = {
      role: 'assistant',
      content: newLanguage === 'hindi' 
        ? 'भाषा हिंदी में बदल दी गई है। मैं अब हिंदी में उत्तर दूंगा।' 
        : 'Language changed to English. I will now respond in English.',
      timestamp: new Date(),
      isSystem: true
    };
    
    setMessages(prev => [...prev, systemMessage]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <button className={styles.backButton} onClick={goBack}>
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
          <div className={styles.headerTextContainer}>
            <h1 className={styles.headerTitle}>
              <Bot size={24} strokeWidth={2} /> सहायक बॉट
            </h1>
            <p className={styles.headerSubtitle}>
              {language === 'hindi' 
                ? 'आपके सवालों के उत्तर और व्यापार सहायता' 
                : 'Answers to your questions and business support'}
            </p>
          </div>
          <button className={styles.languageToggle} onClick={toggleLanguage} title={language === 'hindi' ? 'Switch to English' : 'हिंदी में बदलें'}>
            <Globe size={20} strokeWidth={2} />
            <span>{language === 'hindi' ? 'EN' : 'हिं'}</span>
          </button>
        </div>
      </div>

      <div className={styles.chatContainer}>
        <div className={styles.messagesContainer}>
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`${styles.messageWrapper} ${message.role === 'user' ? styles.userMessage : styles.botMessage} ${message.isError ? styles.errorMessage : ''} ${message.isSystem ? styles.systemMessage : ''}`}
            >
              <div className={styles.messageAvatar}>
                {message.role === 'user' ? 
                  <User size={18} strokeWidth={2} /> : 
                  <Bot size={18} strokeWidth={2} />
                }
              </div>
              <div className={styles.messageContent}>
                <div className={styles.messageText}>{message.content}</div>
                <div className={styles.messageTime}>{formatTime(message.timestamp)}</div>
                
                {message.role === 'assistant' && !message.isError && !message.isSystem && (
                  <div className={styles.messageActions}>
                    <button className={styles.actionButton} title={language === 'hindi' ? 'उपयोगी' : 'Helpful'}>
                      <ThumbsUp size={14} strokeWidth={2} />
                    </button>
                    <button className={styles.actionButton} title={language === 'hindi' ? 'अनुपयोगी' : 'Not helpful'}>
                      <ThumbsDown size={14} strokeWidth={2} />
                    </button>
                    <button className={styles.actionButton} title={language === 'hindi' ? 'दोबारा जवाब दें' : 'Regenerate'}>
                      <RefreshCw size={14} strokeWidth={2} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className={`${styles.messageWrapper} ${styles.botMessage}`}>
              <div className={styles.messageAvatar}>
                <Bot size={18} strokeWidth={2} />
              </div>
              <div className={styles.messageContent}>
                <div className={styles.typingIndicator}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <div className={styles.inputSection}>
        {messages.length === 1 && (
          <div className={styles.suggestionsContainer}>
            <div className={styles.suggestionsTitle}>
              <Lightbulb size={16} strokeWidth={2} />
              <span>{language === 'hindi' ? 'आप ये पूछ सकते हैं:' : 'You can ask:'}</span>
            </div>
            <div className={styles.suggestionsList}>
              {suggestions[language].map((suggestion, index) => (
                <button 
                  key={index} 
                  className={styles.suggestionButton}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div className={styles.inputContainer}>
          <button className={styles.attachButton} onClick={handleAttachFile}>
            <Paperclip size={20} strokeWidth={2} />
          </button>
          <input 
            type="file" 
            ref={fileInputRef} 
            style={{ display: 'none' }} 
            onChange={handleFileChange}
          />
          <button className={styles.imageButton}>
            <Image size={20} strokeWidth={2} />
          </button>
          <textarea
            className={styles.messageInput}
            placeholder={language === 'hindi' ? 'अपना सवाल यहां टाइप करें...' : 'Type your question here...'}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            rows={1}
          />
          <button 
            className={`${styles.sendButton} ${inputMessage.trim() ? styles.active : ''}`}
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
          >
            <Send size={20} strokeWidth={2} />
          </button>
        </div>
        
        <div className={styles.poweredBy}>
          <Sparkles size={14} strokeWidth={2} />
          <span>Powered by Groq & Llama 4</span>
        </div>
      </div>
      
      <Script
        src="https://unpkg.com/lucide@latest"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.lucide) {
            window.lucide.createIcons();
          }
        }}
      />
    </div>
  );
}