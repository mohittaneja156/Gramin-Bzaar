"use client";

import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/navigation'; // Add router import

export default function Home() {
  const [showSearch, setShowSearch] = useState(false);
  const router = useRouter(); // Initialize router
  const lucideLoaded = useRef(false);
  
  // Function to initialize Lucide icons
  const initializeLucideIcons = () => {
    try {
      if (typeof window !== 'undefined' && window.lucide) {
        window.lucide.createIcons();
        console.log("Lucide icons initialized.");
        lucideLoaded.current = true;
      }
    } catch (error) {
      console.error("Error initializing Lucide icons:", error);
    }
  };
  
  useEffect(() => {
    // Initialize Lucide icons after component mounts
    initializeLucideIcons();
    
    // Set up a retry mechanism
    const iconCheckInterval = setInterval(() => {
      if (!lucideLoaded.current) {
        console.log("Retrying Lucide icon initialization...");
        initializeLucideIcons();
      } else {
        clearInterval(iconCheckInterval);
      }
    }, 500);
    
    // Add event listeners for detail buttons and highlight cards
    document
      .querySelectorAll(".details-btn, .highlight-card")
      .forEach((el) => {
        // Prevent adding duplicate listeners if navigateTo is already handling it
        if (
          !el.hasAttribute("onclick") ||
          !el.getAttribute("onclick").includes("navigateTo")
        ) {
          el.addEventListener("click", () => {
            alert("यह सुविधा जल्द ही उपलब्ध होगी!");
          });
        }
      });

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      clearInterval(iconCheckInterval);
      document
        .querySelectorAll(".details-btn, .highlight-card")
        .forEach((el) => {
          el.removeEventListener("click", () => {
            alert("यह सुविधा जल्द ही उपलब्ध होगी!");
          });
        });
    };
  }, []);

  // Navigation functions
  const navigateTo = (section) => {
    // Handle navigation to different sections of the app
    if (section === 'opportunities') {
      // Navigate to Avsar Setu page
      router.push('/avsar-setu');
    } else if (section === 'showcase') {
      // Navigate to Saral Showcase page
      router.push('/saral-showcase');
    } else {
      // For other sections, keep the placeholder alert
      alert(`(Placeholder) Navigating to: ${section}`);
      console.log(`Navigating to: ${section}`);
    }
  };

  const addProduct = () => {
    alert("(Placeholder) Opening Add Product screen...");
    console.log("Add Product FAB clicked");
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const closeSearch = (e) => {
    // Close search when clicking outside the search area
    if (!e.target.closest('.search-container') && !e.target.closest('.search-toggle')) {
      setShowSearch(false);
    }
  };

  useEffect(() => {
    // Add event listener for closing search when clicking outside
    if (showSearch) {
      document.addEventListener('click', closeSearch);
    }
    
    return () => {
      document.removeEventListener('click', closeSearch);
    };
  }, [showSearch]);

  const setActive = (element, event) => {
    event.preventDefault(); // Prevent default '#' link behavior

    // Update selector to work with both bottom and top navigation
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.remove("active");
    });

    // Add active class to the clicked item
    element.classList.add("active");
  };

  // Add this function to handle script load event
  const handleScriptLoad = () => {
    console.log("Lucide script loaded");
    // Initialize icons after script is loaded
    setTimeout(initializeLucideIcons, 100);
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ग्रामीण बाज़ार कनेक्ट - होम</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Script 
        src="https://unpkg.com/lucide@latest" 
        strategy="afterInteractive" 
        onLoad={handleScriptLoad}
      />

      <style jsx global>{`
        /* --- CSS Variables for Theming --- */
        :root {
          --primary: #14b8a6; /* Teal */
          --primary-light: #5eead4; /* Lighter Teal */
          --secondary: #ec4899; /* Pink */
          --accent: #0f766e; /* Darker Teal */
          --light-bg: #f0fdfa; /* Very Light Teal */
          --text-dark: #1f2937; /* Dark Gray */
          --text-light: #6b7280; /* Medium Gray */
          --card-bg: #ffffff;
          --warning: #f59e0b; /* Amber */
          --info: #3b82f6; /* Blue */
          --danger: #ef4444; /* Red */ /* Added for potential future use */
        }

        /* --- Global Reset and Font --- */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Poppins", "Noto Sans Devanagari", sans-serif;
        }

        /* --- Body Styling --- */
        body {
          background-color: var(--light-bg);
          color: var(--text-dark);
          padding-bottom: 80px; /* Space for bottom nav */
        }

        /* --- Main Container --- */
        .container {
          max-width: 480px; /* Mobile-first constraint */
          margin: 0 auto;
          padding: 0 15px; /* Side padding */
        }

        /* --- Header Styling --- */
        .header {
          background: linear-gradient(135deg, var(--primary), var(--primary-light));
          color: white;
          padding: 25px 20px;
          border-radius: 0 0 30px 30px; /* Rounded bottom corners */
          margin-bottom: 20px;
          box-shadow: 0 4px 15px rgba(20, 184, 166, 0.3);
          position: relative;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .header-left {
          flex: 1;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .icon-button {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .icon-button:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .icon-button i {
          width: 20px;
          height: 20px;
          color: white;
          stroke-width: 2;
        }

        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: 2px solid rgba(255, 255, 255, 0.7);
        }

        .avatar i {
          width: 24px;
          height: 24px;
          color: var(--primary);
          stroke-width: 2;
        }

        /* Search styles */
        .search-container {
          position: absolute;
          top: 80px;
          left: 0;
          right: 0;
          padding: 0 20px;
          z-index: 10;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(-20px);
          pointer-events: none;
        }

        .search-container.active {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }

        .search-box {
          background: white;
          border-radius: 15px;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
          width: 100%;
        }

        .search-box input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 16px;
          padding: 0 10px;
          color: var(--text-dark);
        }

        .search-box i {
          width: 20px;
          height: 20px;
          color: var(--text-light);
          stroke-width: 2;
        }

        /* --- Alert Card Styling (for Orders, Opportunities etc.) --- */
        .alert-card {
          background: var(--card-bg);
          border-radius: 15px;
          padding: 15px;
          margin: 20px 0;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.07);
          border-left: 5px solid var(--primary); /* Default: Teal for new orders */
        }

        .alert-card.warning {
          /* For tenders/opportunities */
          border-left-color: var(--warning);
        }

        .alert-card.info {
          /* For shipments/updates */
          border-left-color: var(--info);
        }

        .alert-card h3 {
          font-size: 14px;
          color: var(--text-light);
          margin-bottom: 10px;
          font-weight: 500;
          display: flex;
          align-items: center;
        }

        .alert-card h3 i {
          /* Icon in title */
          width: 16px;
          height: 16px;
          margin-right: 6px;
          stroke-width: 2;
        }

        /* Specific icon colors based on alert type */
        .alert-card h3 .icon-primary {
          color: var(--primary);
        }
        .alert-card h3 .icon-warning {
          color: var(--warning);
        }
        .alert-card h3 .icon-info {
          color: var(--info);
        }

        .alert-info {
          display: flex;
          align-items: center;
        }

        .alert-icon-container {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          background: linear-gradient(
            135deg,
            var(--primary),
            var(--primary-light)
          ); /* Teal gradient */
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          color: white;
          flex-shrink: 0;
        }

        .alert-icon-container.warning {
          background: linear-gradient(
            135deg,
            var(--warning),
            #fbbf24
          ); /* Amber gradient */
        }

        .alert-icon-container.info {
          background: linear-gradient(
            135deg,
            var(--info),
            #60a5fa
          ); /* Blue gradient */
        }

        .alert-icon-container i {
          width: 32px;
          height: 32px;
          stroke-width: 2;
        }

        .alert-text {
          flex: 1;
        }

        .alert-text p {
          margin-bottom: 5px;
          font-size: 14px;
          line-height: 1.5;
        }

        .alert-text .highlight {
          /* For emphasizing order value etc. */
          font-weight: 600;
          color: var(--text-dark);
        }

        .details-btn {
          background: none;
          border: none;
          color: var(--accent); /* Darker Teal */
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          margin-top: 8px;
        }

        .details-btn i {
          width: 14px;
          height: 14px;
          margin-left: 4px;
          stroke-width: 2.5;
        }

        /* --- Feature Grid Styling (For Core Platform Features) --- */
        .feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr; /* 2 columns */
          gap: 15px;
          margin-bottom: 25px;
        }

        .feature-card {
          background: var(--card-bg);
          border-radius: 15px;
          padding: 20px 15px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
        }

        .feature-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
        }

        .feature-icon-container {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px;
          color: white;
        }

        /* Icon container background colors for features */
        .icon-bg-showcase {
          background: linear-gradient(135deg, #f97316, #fbbf24);
        } /* Orange/Amber */
        .icon-bg-logistics {
          background: linear-gradient(135deg, #3b82f6, #60a5fa);
        } /* Blue */
        .icon-bg-opportunities {
          background: linear-gradient(135deg, var(--secondary), #f9a8d4);
        } /* Pink */
        .icon-bg-skills {
          background: linear-gradient(135deg, #8b5cf6, #c4b5fd);
        } /* Purple */

        .feature-icon-container i {
          width: 28px; /* Icon size */
          height: 28px;
          stroke-width: 2;
        }

        .feature-title {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 3px;
          color: var(--text-dark);
        }

        .feature-subtitle {
          font-size: 11px;
          color: var(--text-light);
          line-height: 1.3;
        }

        /* --- Highlights/Tasks Section Styling --- */
        .highlights-section {
          margin-bottom: 25px;
        }

        .section-title {
          color: var(--accent); /* Dark teal accent */
          margin-bottom: 15px;
          font-size: 18px;
          font-weight: 600;
          display: flex;
          align-items: center;
        }

        .section-title i {
          width: 20px;
          height: 20px;
          margin-right: 8px;
          stroke-width: 2;
          color: var(--primary);
        }

        .highlight-card {
          background: var(--card-bg);
          border-radius: 15px;
          padding: 15px;
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
          border: 1px solid #e5e7eb; /* Light border */
          cursor: pointer;
          transition: border-color 0.2s ease;
        }

        .highlight-card:hover {
          border-color: var(--primary-light);
        }

        .highlight-icon-container {
          width: 45px;
          height: 45px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          flex-shrink: 0;
          color: white;
        }

        /* Highlight icon colors */
        .highlight-icon-container.learn {
          background: var(--accent);
        } /* Dark Teal */
        .highlight-icon-container.task {
          background: var(--secondary);
        } /* Pink */
        .highlight-icon-container.community {
          background: var(--info);
        } /* Blue */
        .highlight-icon-container.tip {
          background: var(--warning);
        } /* Amber */

        .highlight-icon-container i {
          width: 24px;
          height: 24px;
          stroke-width: 2;
        }

        .highlight-content {
          flex: 1;
        }

        .highlight-title {
          font-weight: 500;
          margin-bottom: 4px;
          font-size: 14px;
          color: var(--text-dark);
        }

        .highlight-desc {
          font-size: 12px;
          color: var(--text-light);
          line-height: 1.4;
        }

        /* --- Bottom Navigation Styling --- */
        .bottom-nav {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          max-width: 480px; /* Match container */
          margin: 0 auto; /* Center nav on wider screens if needed */
          background: white;
          display: flex;
          height: 65px;
          padding: 5px 0;
          box-shadow: 0 -3px 15px rgba(0, 0, 0, 0.08);
          border-top: 1px solid #f0f0f0;
          z-index: 100;
        }

        .nav-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 5px 0;
          color: var(--text-light);
          text-decoration: none;
          font-size: 10px;
          font-weight: 500;
          transition: color 0.2s ease;
          position: relative; /* Needed for potential notification dots */
        }

        .nav-item:hover {
          color: var(--primary);
        }

        .nav-icon {
          margin-bottom: 4px;
          width: 24px;
          height: 24px;
          stroke-width: 2;
        }

        .nav-item.active {
          color: var(--primary);
          font-weight: 600;
        }

        .nav-item.active .nav-icon {
          stroke-width: 2.5; /* Bolden active icon */
        }

        /* Placeholder for FAB alignment */
        .nav-item.fab-placeholder {
          flex: 1.2; /* Make central space slightly wider for FAB */
        }

        /* --- Floating Action Button Styling --- */
        .float-button {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--secondary), #f9a8d4); /* Pink gradient */
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 6px 15px rgba(236, 72, 153, 0.4);
          border: 3px solid white;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          z-index: 101;
        }

        .float-button:hover {
          transform: translateX(-50%) scale(1.05);
          box-shadow: 0 8px 20px rgba(236, 72, 153, 0.5);
        }

        .float-button i {
          width: 28px;
          height: 28px;
          stroke-width: 2.5;
        }
      `}</style>

      <div className="container">
        <div className="header">
          <div className="header-content">
            <div className="header-left">
              <div className="greeting">नमस्ते, राधा जी!</div>
              <div className="business-info">
                <i data-lucide="store"></i>
                <span>टोकरी बुनाई यूनिट, आशा SHG</span>
              </div>
            </div>
            <div className="header-right">
              <button className="icon-button search-toggle" onClick={toggleSearch}>
                <i data-lucide="search"></i>
              </button>
              <div className="avatar">
                <i data-lucide="user"></i>
              </div>
            </div>
          </div>
          
          <div className={`search-container ${showSearch ? 'active' : ''}`}>
            <div className="search-box">
              <i data-lucide="search"></i>
              <input type="text" placeholder="उत्पाद, ऑर्डर, या अवसर खोजें..." autoFocus={showSearch} />
            </div>
          </div>
        </div>

        <div className="alert-card">
          <h3>
            <i data-lucide="shopping-cart" className="icon-primary"></i> नया ऑर्डर
            आया है!
          </h3>
          <div className="alert-info">
            <div className="alert-icon-container">
              <i data-lucide="package-check"></i>
            </div>
            <div className="alert-text">
              <p>
                <span className="highlight">दिल्ली बुटीक</span> से
                <span className="highlight">₹ 15,000</span> का ऑर्डर।
              </p>
              <p>उत्पाद: हाथ से बुनी सजावटी टोकरियाँ (30 पीस)</p>
              <button className="details-btn">
                विवरण देखें <i data-lucide="arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="alert-card warning">
          <h3>
            <i data-lucide="megaphone" className="icon-warning"></i> नया अवसर (टेंडर)
          </h3>
          <div className="alert-info">
            <div className="alert-icon-container warning">
              <i data-lucide="file-text"></i>
            </div>
            <div className="alert-text">
              <p>
                GeM पोर्टल पर <span className="highlight">जूट बैग</span> के लिए नया
                टेंडर।
              </p>
              <p>स्थान: राज्य स्तरीय</p>
              <button className="details-btn">
                अधिक जानें <i data-lucide="arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="feature-grid">
          <div className="feature-card" onClick={() => navigateTo('showcase')}>
            <div className="feature-icon-container icon-bg-showcase">
              <i data-lucide="store"></i>
            </div>
            <div className="feature-title">सरल शोकेस</div>
            <div className="feature-subtitle">प्रोफ़ाइल, उत्पाद सूची, ई-कॉमर्स</div>
          </div>
          <div className="feature-card" onClick={() => navigateTo('logistics')}>
            <div className="feature-icon-container icon-bg-logistics">
              <i data-lucide="truck"></i>
            </div>
            <div className="feature-title">सुगम लॉजिस्टिक्स</div>
            <div className="feature-subtitle">शिपिंग बुकिंग, ट्रैकिंग, लागत बचत</div>
          </div>
          <div className="feature-card" onClick={() => navigateTo('opportunities')}>
            <div className="feature-icon-container icon-bg-opportunities">
              <i data-lucide="briefcase"></i>
            </div>
            <div className="feature-title">अवसर सेतु</div>
            <div className="feature-subtitle">टेंडर, B2B खरीदार, दस्तावेज़ मदद</div>
          </div>
          <div className="feature-card" onClick={() => navigateTo('skills')}>
            <div className="feature-icon-container icon-bg-skills">
              <i data-lucide="book-open-text"></i>
            </div>
            <div className="feature-title">कौशल केंद्र</div>
            <div className="feature-subtitle">सीखें, पूछें, सहायता पाएं</div>
          </div>
        </div>

        <div className="highlights-section">
          <h2 className="section-title">
            <i data-lucide="list-checks"></i> आपकी सहायता के लिए
          </h2>
          <div className="highlight-card" onClick={() => navigateTo('learn_module')}>
            <div className="highlight-icon-container learn">
              <i data-lucide="graduation-cap"></i>
            </div>
            <div className="highlight-content">
              <div className="highlight-title">नया सीखने का मॉड्यूल</div>
              <div className="highlight-desc">
                उत्पाद की अच्छी तस्वीरें कैसे लें - वीडियो देखें।
              </div>
            </div>
            <i
              data-lucide="chevron-right"
              style={{ color: 'var(--text-light)', marginLeft: 'auto' }}
            ></i>
          </div>
          <div className="highlight-card" onClick={() => navigateTo('packing_task')}>
            <div className="highlight-icon-container task">
              <i data-lucide="package-plus"></i>
            </div>
            <div className="highlight-content">
              <div className="highlight-title">कार्य: ऑर्डर पैक करें</div>
              <div className="highlight-desc">
                दिल्ली बुटीक का ऑर्डर शिपमेंट के लिए तैयार करें।
              </div>
            </div>
            <i
              data-lucide="chevron-right"
              style={{ color: 'var(--text-light)', marginLeft: 'auto' }}
            ></i>
          </div>
          <div className="highlight-card" onClick={() => navigateTo('community_forum')}>
            <div className="highlight-icon-container community">
              <i data-lucide="message-circle"></i>
            </div>
            <div className="highlight-content">
              <div className="highlight-title">सामुदायिक प्रश्न</div>
              <div className="highlight-desc">
                क्या कोई GeM पंजीकरण में मदद कर सकता है?
              </div>
            </div>
            <i
              data-lucide="chevron-right"
              style={{ color: 'var(--text-light)', marginLeft: 'auto' }}
            ></i>
          </div>
          <div className="highlight-card" onClick={() => navigateTo('packaging_tip')}>
            <div className="highlight-icon-container tip">
              <i data-lucide="lightbulb"></i>
            </div>
            <div className="highlight-content">
              <div className="highlight-title">पैकेजिंग टिप</div>
              <div className="highlight-desc">
                नाजुक वस्तुओं के लिए बबल रैप का प्रयोग करें।
              </div>
            </div>
            <i
              data-lucide="chevron-right"
              style={{ color: 'var(--text-light)', marginLeft: 'auto' }}
            ></i>
          </div>
        </div>
      </div>

      <div className="float-button" onClick={addProduct}>
        <i data-lucide="plus"></i>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <a
          href="#"
          className="nav-item active"
          onClick={(e) => setActive(e.currentTarget, e)}
        >
          <i data-lucide="home" className="nav-icon"></i>
          <div>होम</div>
        </a>
        <a
          href="#"
          className="nav-item"
          onClick={(e) => {
            setActive(e.currentTarget, e);
            navigateTo('opportunities');
          }}
        >
          <i data-lucide="briefcase" className="nav-icon"></i>
          <div>अवसर सेतु</div>
        </a>
        <div className="nav-item fab-placeholder"></div>
        <a
          href="#"
          className="nav-item"
          onClick={(e) => {
            setActive(e.currentTarget, e);
            navigateTo('skills');
          }}
        >
          <i data-lucide="book-open" className="nav-icon"></i>
          <div>कौशल केंद्र</div>
        </a>
        <a
          href="#"
          className="nav-item"
          onClick={(e) => {
            setActive(e.currentTarget, e);
            navigateTo('logistics');
          }}
        >
          <i data-lucide="truck" className="nav-icon"></i>
          <div>सुगम लॉजिस्टिक्स</div>
        </a>
      </div>
    </>
  );
}