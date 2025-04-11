"use client";

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';

export default function AvsarSetu() {
  const [activeTab, setActiveTab] = useState('tenders');
  const router = useRouter();

  useEffect(() => {
    // Initialize Lucide icons after component mounts
    try {
      if (typeof window !== 'undefined' && window.lucide) {
        window.lucide.createIcons();
        console.log("Lucide icons initialized for Avsar Setu.");
      }
    } catch (error) {
      console.error("Error initializing Lucide icons:", error);
    }
  }, []);

  // Tab switching function
  const switchTab = (tabId) => {
    setActiveTab(tabId);
    console.log(`Switched to tab: ${tabId}`);
  };

  // Placeholder functions
  const navigateTo = (section) => {
    alert(`(Placeholder) Navigating to resource/section: ${section}`);
    console.log(`Navigating to: ${section}`);
  };

  const viewTenderDetails = (tenderId) => {
    alert(`(Placeholder) Viewing details for Tender ID: ${tenderId}`);
    console.log(`Viewing tender: ${tenderId}`);
  };

  const viewProfile = (profileId) => {
    alert(`(Placeholder) Viewing B2B Profile ID: ${profileId}`);
    console.log(`Viewing profile: ${profileId}`);
  };

  const submitB2BRequirement = () => {
    alert('(Placeholder) Submitting B2B Requirement...');
    console.log('Submit B2B Requirement clicked');
    // Add form validation and submission logic here in a real app
  };

  const openFABAction = () => {
    // Example: Link FAB to posting a B2B Requirement or another primary action
    alert('(Placeholder) Opening action from FAB (e.g., Post B2B Need)...');
    console.log('FAB clicked - potential action: Post B2B Requirement');
    // Switch to B2B tab
    switchTab('b2b');
  };

  const goBack = () => {
    router.back();
  };

  return (
    <>
      <Script src="https://unpkg.com/lucide@latest" strategy="afterInteractive" />

      <div className={styles.container}>
        <div className={styles.header}>
          <button className={styles.backButton} onClick={goBack}>
            <i data-lucide="chevron-left"></i>
          </button>
          <h1 className={styles.headerTitle}>
            <i data-lucide="briefcase"></i> अवसर सेतु
          </h1>
          <p className={styles.headerSubtitle}>
            सरकारी और कॉर्पोरेट खरीद, B2B बाज़ार और सहायता तक पहुंचें।
          </p>
        </div>

        <div className={styles.tabs}>
          <button
            className={`${styles.tabButton} ${activeTab === 'tenders' ? styles.active : ''}`}
            onClick={() => switchTab('tenders')}
          >
            <i data-lucide="file-text"></i>
            टेंडर खोजें
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'b2b' ? styles.active : ''}`}
            onClick={() => switchTab('b2b')}
          >
            <i data-lucide="users"></i>
            B2B कनेक्ट
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'resources' ? styles.active : ''}`}
            onClick={() => switchTab('resources')}
          >
            <i data-lucide="help-circle"></i>
            सलाह/सहायता
          </button>
        </div>

        {/* Tenders Tab Content */}
        <div className={`${styles.tabContent} ${activeTab === 'tenders' ? styles.active : ''}`}>
          <h2 className={styles.sectionTitle}>
            <i data-lucide="megaphone"></i> नवीनतम टेंडर सूचनाएँ
          </h2>

          <div className={styles.tenderCard}>
            <div className={styles.tenderIconContainer}>
              <i data-lucide="file-text"></i>
            </div>
            <div className={styles.tenderDetails}>
              <h3 className={styles.tenderTitle}>जूट बैग के लिए GeM टेंडर</h3>
              <div className={styles.tenderMeta}>
                <span><i data-lucide="tag"></i> जूट उत्पाद</span>
                <span><i data-lucide="map-pin"></i> राज्य स्तरीय</span>
                <span><i data-lucide="calendar"></i> अंतिम तिथि: 25 अप्रैल</span>
              </div>
              <button className={styles.detailsBtn} onClick={() => viewTenderDetails('JT001')}>
                विवरण देखें <i data-lucide="arrow-right"></i>
              </button>
            </div>
          </div>

          <div className={styles.tenderCard}>
            <div className={styles.tenderIconContainer}>
              <i data-lucide="file-text"></i>
            </div>
            <div className={styles.tenderDetails}>
              <h3 className={styles.tenderTitle}>कॉर्पोरेट गिफ्टिंग हेतु हस्तशिल्प</h3>
              <div className={styles.tenderMeta}>
                <span><i data-lucide="tag"></i> हस्तशिल्प</span>
                <span><i data-lucide="building"></i> ABC कॉर्पोरेशन</span>
                <span><i data-lucide="map-pin"></i> राष्ट्रीय</span>
              </div>
              <button className={styles.detailsBtn} onClick={() => viewTenderDetails('HC002')}>
                विवरण देखें <i data-lucide="arrow-right"></i>
              </button>
            </div>
          </div>

          <div className={styles.tenderCard}>
            <div className={styles.tenderIconContainer}>
              <i data-lucide="file-text"></i>
            </div>
            <div className={styles.tenderDetails}>
              <h3 className={styles.tenderTitle}>स्कूल यूनिफॉर्म सिलाई टेंडर</h3>
              <div className={styles.tenderMeta}>
                <span><i data-lucide="tag"></i> परिधान</span>
                <span><i data-lucide="map-pin"></i> जिला स्तरीय (कानपुर)</span>
                <span><i data-lucide="calendar"></i> अंतिम तिथि: 30 अप्रैल</span>
              </div>
              <button className={styles.detailsBtn} onClick={() => viewTenderDetails('UN003')}>
                विवरण देखें <i data-lucide="arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        {/* B2B Connect Tab Content */}
        <div className={`${styles.tabContent} ${activeTab === 'b2b' ? styles.active : ''}`}>
          <h2 className={styles.sectionTitle}>
            <i data-lucide="handshake"></i> B2B कनेक्शन
          </h2>

          <div className={styles.b2bCard}>
            <div className={`${styles.b2bIconContainer} ${styles.buyerIcon}`}>
              <i data-lucide="shopping-cart"></i>
            </div>
            <h3 className={styles.b2bTitle}>खरीदारों से जुड़ें</h3>
            <p className={styles.b2bDesc}>
              होटल, रिटेलर्स, कॉर्पोरेट और अन्य B2B खरीदारों से सीधे संपर्क करें।
            </p>
            <button className={styles.submitBtn} onClick={() => viewProfile('buyers')}>
              खरीदार प्रोफाइल देखें
            </button>
          </div>

          <div className={styles.b2bCard}>
            <div className={`${styles.b2bIconContainer} ${styles.supplierIcon}`}>
              <i data-lucide="package"></i>
            </div>
            <h3 className={styles.b2bTitle}>आपूर्तिकर्ता बनें</h3>
            <p className={styles.b2bDesc}>
              अपने उत्पादों को B2B मार्केटप्लेस पर लिस्ट करें और नए ग्राहक पाएं।
            </p>
            <button className={styles.submitBtn} onClick={() => viewProfile('suppliers')}>
              आपूर्तिकर्ता प्रोफाइल देखें
            </button>
          </div>

          <div className={styles.formSection}>
            <h3 className={styles.formTitle}>
              <i data-lucide="clipboard-list"></i> अपनी आवश्यकता पोस्ट करें
            </h3>
            <div className={styles.formGroup}>
              <label>उत्पाद श्रेणी</label>
              <select>
                <option>हस्तशिल्प</option>
                <option>वस्त्र और परिधान</option>
                <option>खाद्य उत्पाद</option>
                <option>जूट उत्पाद</option>
                <option>अन्य</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>विवरण</label>
              <textarea placeholder="अपनी आवश्यकता का विस्तृत विवरण दें..."></textarea>
            </div>
            <div className={styles.formGroup}>
              <label>मात्रा</label>
              <input type="text" placeholder="उदाहरण: 100 पीस" />
            </div>
            <div className={styles.formGroup}>
              <label>संपर्क विवरण</label>
              <input type="text" placeholder="फोन नंबर या ईमेल" />
            </div>
            <button className={styles.submitBtn} onClick={submitB2BRequirement}>
              आवश्यकता पोस्ट करें
            </button>
          </div>
        </div>

        {/* Resources Tab Content */}
        <div className={`${styles.tabContent} ${activeTab === 'resources' ? styles.active : ''}`}>
          <h2 className={styles.sectionTitle}>
            <i data-lucide="book-open"></i> उपयोगी संसाधन
          </h2>

          <div className={styles.resourceCard} onClick={() => navigateTo('tender_docs')}>
            <div className={`${styles.resourceIconContainer} ${styles.docs}`}>
              <i data-lucide="file-text"></i>
            </div>
            <div className={styles.resourceContent}>
              <h3 className={styles.resourceTitle}>टेंडर दस्तावेज़ गाइड</h3>
              <p className={styles.resourceDesc}>
                सरकारी टेंडर के लिए आवश्यक दस्तावेज़ और प्रक्रिया।
              </p>
            </div>
            <i data-lucide="chevron-right" className={styles.chevronIcon}></i>
          </div>

          <div className={styles.resourceCard} onClick={() => navigateTo('gem_guide')}>
            <div className={`${styles.resourceIconContainer} ${styles.gem}`}>
              <i data-lucide="shopping-bag"></i>
            </div>
            <div className={styles.resourceContent}>
              <h3 className={styles.resourceTitle}>GeM पोर्टल गाइड</h3>
              <p className={styles.resourceDesc}>
                GeM पर पंजीकरण और बिक्री करने का पूरा प्रशिक्षण।
              </p>
            </div>
            <i data-lucide="chevron-right" className={styles.chevronIcon}></i>
          </div>

          <div className={styles.resourceCard} onClick={() => navigateTo('kendra_help')}>
            <div className={`${styles.resourceIconContainer} ${styles.kendra}`}>
              <i data-lucide="help-circle"></i>
            </div>
            <div className={styles.resourceContent}>
              <h3 className={styles.resourceTitle}>सहायता केंद्र</h3>
              <p className={styles.resourceDesc}>
                अक्सर पूछे जाने वाले प्रश्न और सहायता संपर्क।
              </p>
            </div>
            <i data-lucide="chevron-right" className={styles.chevronIcon}></i>
          </div>

          <div className={styles.resourceCard} onClick={() => navigateTo('bidding_tips')}>
            <div className={`${styles.resourceIconContainer} ${styles.bidding}`}>
              <i data-lucide="lightbulb"></i>
            </div>
            <div className={styles.resourceContent}>
              <h3 className={styles.resourceTitle}>बिडिंग टिप्स</h3>
              <p className={styles.resourceDesc}>
                सफल बोली लगाने के लिए व्यावहारिक सुझाव।
              </p>
            </div>
            <i data-lucide="chevron-right" className={styles.chevronIcon}></i>
          </div>
        </div>

        {/* Add bottom padding for scrolling space */}
        <div className={styles.bottomPadding}></div>
      </div>

      {/* Floating Action Button */}
      <div className={styles.floatButton} onClick={openFABAction}>
        <i data-lucide="plus"></i>
      </div>

      {/* Bottom Navigation */}
      <div className={styles.bottomNav}>
        <a href="/" className={styles.navItem}>
          <i data-lucide="home" className={styles.navIcon}></i>
          <div>होम</div>
        </a>
        <a href="#" className={`${styles.navItem} ${styles.active}`}>
          <i data-lucide="briefcase" className={styles.navIcon}></i>
          <div>अवसर सेतु</div>
        </a>
        <div className={styles.fabPlaceholder}></div>
        <a href="#" className={styles.navItem}>
          <i data-lucide="book-open" className={styles.navIcon}></i>
          <div>कौशल केंद्र</div>
        </a>
        <a href="#" className={styles.navItem}>
          <i data-lucide="truck" className={styles.navIcon}></i>
          <div>सुगम लॉजिस्टिक्स</div>
        </a>
      </div>
    </>
  
  );
}