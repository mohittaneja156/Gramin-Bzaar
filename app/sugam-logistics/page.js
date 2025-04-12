"use client";

import { useEffect, useState } from 'react';
import Script from 'next/script';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';

export default function SugamLogistics() {
  const [activeTab, setActiveTab] = useState('booking');
  const router = useRouter();
  const [selectedPartnerId, setSelectedPartnerId] = useState(null);

  useEffect(() => {
    // Initialize Lucide icons after component mounts
    try {
      if (typeof window !== 'undefined') {
        // Add a small delay to ensure DOM is fully loaded
        const timer = setTimeout(() => {
          if (window.lucide) {
            window.lucide.createIcons();
            console.log("Lucide icons initialized for Sugam Logistics.");
          }
        }, 100);
        
        // Add event listener for page visibility changes
        document.addEventListener('visibilitychange', () => {
          if (!document.hidden && window.lucide) {
            window.lucide.createIcons();
          }
        });
        
        return () => {
          clearTimeout(timer);
          document.removeEventListener('visibilitychange', () => {});
        };
      }
    } catch (error) {
      console.error("Error initializing Lucide icons:", error);
    }
  }, []);

  // Tab switching function
  const switchTab = (tabId) => {
    setActiveTab(tabId);
    console.log(`Switched to tab: ${tabId}`);
    // Scroll to top when switching tabs
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Placeholder functions
  const navigateApp = (page, element, event) => {
    if (event) event.preventDefault();
    if (page === 'home') {
      router.push('/');
    } else if (page === 'avsar') {
      router.push('/avsar-setu');
    } else if (page === 'kaushal') {
      router.push('/kaushal-kendra');
    } else if (page === 'logistics') {
      // Already on logistics page
    } else {
      alert(`(Placeholder) Navigating to: ${page}`);
      console.log(`Navigating to: ${page}`);
    }
    
    // Set active state
    const navItems = document.querySelectorAll('.bottom-nav a.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    if (element) element.classList.add('active');
  };

  const selectPartner = (partnerCardId) => {
    setSelectedPartnerId(partnerCardId);
    console.log(`Selected partner: ${partnerCardId}`);
  };

  const makePayment = () => {
    alert('(Placeholder) Redirecting to payment gateway...');
    console.log('Initiating payment');
  };

  const handleBooking = (event) => {
    event.preventDefault();
    alert('(Placeholder) Booking submitted successfully!');
    console.log('Booking form submitted');
  };

  const trackShipment = (trackingId) => {
    alert(`(Placeholder) Tracking shipment: ${trackingId}`);
    console.log(`Tracking shipment: ${trackingId}`);
  };

  const viewGuide = (guideId) => {
    alert(`(Placeholder) Opening guide: ${guideId}`);
    console.log(`Opening guide: ${guideId}`);
  };

  const joinPooling = (poolId) => {
    alert(`(Placeholder) Joining pooling opportunity: ${poolId}`);
    console.log(`Joining pooling opportunity: ${poolId}`);
  };

  const startNewBooking = () => {
    switchTab('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    router.push('/');
  };

  return (
    <>
      <Script src="https://unpkg.com/lucide@latest" strategy="afterInteractive" />
      
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <button className={styles.backButton} onClick={goBack}>
              <i data-lucide="chevron-left"></i>
            </button>
            <div>
              <h1 className={styles.headerTitle}>
                <i data-lucide="truck"></i> सुगम लॉजिस्टिक्स
              </h1>
              <p className={styles.headerSubtitle}>
                आसान और किफायती शिपिंग और डिलीवरी सेवाएँ
              </p>
            </div>
          </div>
        </div>

        <div className={styles.tabs}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'booking' ? styles.active : ''}`}
            onClick={() => switchTab('booking')}
          >
            <i data-lucide="package-plus"></i>
            <span>नई बुकिंग</span>
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'shipments' ? styles.active : ''}`}
            onClick={() => switchTab('shipments')}
          >
            <i data-lucide="history"></i>
            <span>मेरे शिपमेंट</span>
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'packaging' ? styles.active : ''}`}
            onClick={() => switchTab('packaging')}
          >
            <i data-lucide="box"></i>
            <span>पैकेजिंग गाइड</span>
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'pooling' ? styles.active : ''}`}
            onClick={() => switchTab('pooling')}
          >
            <i data-lucide="users-round"></i>
            <span>पूलिंग अवसर</span>
          </button>
        </div>

        {/* Booking Tab Content */}
        <div className={`${styles.tabContent} ${activeTab === 'booking' ? styles.active : ''}`}>
          <form id="booking-form" onSubmit={handleBooking}>
            <div className={styles.formCard}>
              <div className={styles.formSection}>
                <div className={styles.formSectionTitle}><i data-lucide="map-pin"></i>शिपमेंट विवरण</div>
                <div className={styles.formGroup}>
                  <label htmlFor="pickup-address">पिकअप पता</label>
                  <div className={styles.inputWrapper}>
                    <i className={styles.inputIcon} data-lucide="home"></i>
                    <input 
                      type="text" 
                      id="pickup-address" 
                      name="pickup_address" 
                      defaultValue="आशा SHG, रामपुर गाँव, राजस्थान" 
                      required 
                      placeholder="अपना पिकअप पता दर्ज करें"
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="delivery-address">डिलीवरी पता</label>
                  <div className={styles.inputWrapper}>
                    <i className={styles.inputIcon} data-lucide="map"></i>
                    <input 
                      type="text" 
                      id="delivery-address" 
                      name="delivery_address" 
                      required 
                      placeholder="ग्राहक का पूरा पता पिनकोड सहित"
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label>पैकेज का वज़न (अनुमानित)</label>
                  <div className={`${styles.inputWrapper} ${styles.selectWrapper}`}>
                    <i className={styles.inputIcon} data-lucide="scale"></i>
                    <select id="package-weight" name="package_weight" required>
                      <option value="" disabled selected>वज़न चुनें...</option>
                      <option value="<1kg">&lt; 1 किग्रा</option>
                      <option value="1-5kg">1-5 किग्रा</option>
                      <option value="5-10kg">5-10 किग्रा</option>
                      <option value="10-20kg">10-20 किग्रा</option>
                      <option value=">20kg">&gt; 20 किग्रा</option>
                    </select>
                  </div>
                </div>
                <div className={styles.inlineFields}>
                  <div className={styles.formGroup}>
                    <label htmlFor="package-length">लंबाई (cm)</label>
                    <div className={styles.inputWrapper}>
                      <i className={styles.inputIcon} data-lucide="ruler"></i>
                      <input type="number" id="package-length" name="length" placeholder="उदा. 20" />
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="package-width">चौड़ाई (cm)</label>
                    <div className={styles.inputWrapper}>
                      <i className={styles.inputIcon} data-lucide="ruler"></i>
                      <input type="number" id="package-width" name="width" placeholder="उदा. 15" />
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="package-height">ऊंचाई (cm)</label>
                    <div className={styles.inputWrapper}>
                      <i className={styles.inputIcon} data-lucide="ruler"></i>
                      <input type="number" id="package-height" name="height" placeholder="उदा. 10" />
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.formSection}>
                <div className={styles.formSectionTitle}><i data-lucide="truck"></i>लॉजिस्टिक्स पार्टनर चुनें</div>
                <div className={styles.partnerOptionsList}>
                  <div 
                    className={`${styles.partnerOptionCard} ${selectedPartnerId === 'partner-1' ? styles.selected : ''}`} 
                    id="partner-1" 
                    onClick={() => selectPartner('partner-1')}
                  >
                    <div className={styles.partnerLogo}><i data-lucide="truck"></i></div>
                    <div className={styles.partnerDetails}>
                      <div className={styles.partnerName}>इंडिया पोस्ट (स्पीड पोस्ट)</div>
                      <div className={styles.partnerRating}><i data-lucide="star"></i> 4.2 (रेटिंग)</div>
                      <div className={styles.partnerPrice}>₹ 180 (अनुमानित)</div>
                    </div>
                    <i data-lucide={selectedPartnerId === 'partner-1' ? 'check-circle-2' : 'circle'} className={styles.selectIndicator}></i>
                  </div>
                  <div 
                    className={`${styles.partnerOptionCard} ${selectedPartnerId === 'partner-2' ? styles.selected : ''}`} 
                    id="partner-2" 
                    onClick={() => selectPartner('partner-2')}
                  >
                    <div className={styles.partnerLogo}><i data-lucide="zap"></i></div>
                    <div className={styles.partnerDetails}>
                      <div className={styles.partnerName}>डेल्हीवरी (एक्सप्रेस)</div>
                      <div className={styles.partnerRating}><i data-lucide="star"></i> 4.5 (रेटिंग)</div>
                      <div className={styles.partnerPrice}>₹ 250 (अनुमानित)</div>
                    </div>
                    <i data-lucide={selectedPartnerId === 'partner-2' ? 'check-circle-2' : 'circle'} className={styles.selectIndicator}></i>
                  </div>
                  <div 
                    className={`${styles.partnerOptionCard} ${selectedPartnerId === 'partner-3' ? styles.selected : ''}`} 
                    id="partner-3" 
                    onClick={() => selectPartner('partner-3')}
                  >
                    <div className={styles.partnerLogo}><i data-lucide="package"></i></div>
                    <div className={styles.partnerDetails}>
                      <div className={styles.partnerName}>ईकॉम एक्सप्रेस (स्टैंडर्ड)</div>
                      <div className={styles.partnerRating}><i data-lucide="star"></i> 4.0 (रेटिंग)</div>
                      <div className={styles.partnerPrice}>₹ 150 (अनुमानित)</div>
                    </div>
                    <i data-lucide={selectedPartnerId === 'partner-3' ? 'check-circle-2' : 'circle'} className={styles.selectIndicator}></i>
                  </div>
                </div>
                <input type="hidden" id="selected-partner" name="selected_partner" value={selectedPartnerId || ''} />
              </div>

              <div className={styles.formSection}>
                <div className={styles.formSectionTitle}><i data-lucide="credit-card"></i>भुगतान</div>
                <p className={styles.paymentDesc}>शिपमेंट बुक करने के लिए भुगतान पूरा करें।</p>
                <div className={styles.paymentOptions}>
                  <p className={styles.paymentPlaceholder}>(यहां भुगतान विकल्प दिखाएं - UPI, नेट बैंकिंग आदि)</p>
                  <button 
                    type="button" 
                    className={`${styles.submitBtn} ${styles.paymentBtn}`} 
                    onClick={makePayment}
                  >
                    अभी भुगतान करें
                  </button>
                </div>
              </div>

              <button 
                type="submit" 
                className={styles.submitBtn} 
                disabled={!selectedPartnerId}
                id="book-shipment-btn"
              >
                शिपमेंट बुक करें
              </button>
            </div>
          </form>
        </div>

        {/* Shipments Tab Content */}
        <div className={`${styles.tabContent} ${activeTab === 'shipments' ? styles.active : ''}`}>
          <h2 className={styles.sectionTitle}><i data-lucide="history"></i>आपके हाल के शिपमेंट्स</h2>
          <div className={styles.shipmentList}>
            <div className={`${styles.shipmentCard} ${styles.statusTransit}`}>
              <div className={styles.shipmentHeader}>
                <span className={styles.trackingId}>AWB789012345</span>
                <span className={styles.shipmentDate}>01 अप्रैल 2025</span>
              </div>
              <div className={styles.shipmentDetails}>
                <div className={`${styles.shipmentIcon} ${styles.statusTransit}`}><i data-lucide="truck"></i></div>
                <div className={styles.shipmentInfo}>
                  <div className={styles.shipmentDestination}>दिल्ली बुटीक, दिल्ली</div>
                  <div className={`${styles.shipmentStatusText} ${styles.statusTransit}`}>इन ट्रांजिट (रास्ते में)</div>
                </div>
              </div>
              <button className={styles.trackBtn} onClick={() => trackShipment('AWB789012345')}>
                <i data-lucide="map-pin"></i> ट्रैक करें
              </button>
            </div>
            <div className={`${styles.shipmentCard} ${styles.statusDelivered}`}>
              <div className={styles.shipmentHeader}>
                <span className={styles.trackingId}>AWB654321098</span>
                <span className={styles.shipmentDate}>28 मार्च 2025</span>
              </div>
              <div className={styles.shipmentDetails}>
                <div className={`${styles.shipmentIcon} ${styles.statusDelivered}`}><i data-lucide="package-check"></i></div>
                <div className={styles.shipmentInfo}>
                  <div className={styles.shipmentDestination}>जयपुर ग्राहक, राजस्थान</div>
                  <div className={`${styles.shipmentStatusText} ${styles.statusDelivered}`}>डिलीवर हो गया</div>
                </div>
              </div>
            </div>
            <div className={`${styles.shipmentCard} ${styles.statusPending}`}>
              <div className={styles.shipmentHeader}>
                <span className={styles.trackingId}>AWB112233445</span>
                <span className={styles.shipmentDate}>03 अप्रैल 2025</span>
              </div>
              <div className={styles.shipmentDetails}>
                <div className={`${styles.shipmentIcon} ${styles.statusPending}`}><i data-lucide="circle-dot"></i></div>
                <div className={styles.shipmentInfo}>
                  <div className={styles.shipmentDestination}>मुंबई कॉर्पोरेट, महाराष्ट्र</div>
                  <div className={`${styles.shipmentStatusText} ${styles.statusPending}`}>पिकअप लंबित है</div>
                </div>
              </div>
              <button className={`${styles.trackBtn} ${styles.warningBtn}`} onClick={() => trackShipment('AWB112233445')}>
                <i data-lucide="alert-circle"></i> स्थिति देखें
              </button>
            </div>
          </div>
        </div>

        {/* Packaging Guide Tab Content */}
        <div className={`${styles.tabContent} ${activeTab === 'packaging' ? styles.active : ''}`}>
          <h2 className={styles.sectionTitle}><i data-lucide="gift"></i>पैकेजिंग संबंधी सहायता</h2>
          <div className={styles.guideList}>
            <div className={styles.guideCard} onClick={() => viewGuide('standard_packaging')}>
              <div className={styles.guideIconContainer}><i data-lucide="package"></i></div>
              <div className={styles.guideContent}>
                <div className={styles.guideTitle}>मानक पैकेजिंग कैसे करें (वीडियो)</div>
                <div className={styles.guideDesc}>शिपमेंट के लिए अपने उत्पादों को सुरक्षित रूप से पैक करने का तरीका जानें।</div>
              </div>
              <i data-lucide="play-circle" className={styles.chevronIcon}></i>
            </div>
            <div className={styles.guideCard} onClick={() => viewGuide('fragile_items')}>
              <div className={styles.guideIconContainer}><i data-lucide="glass-water"></i></div>
              <div className={styles.guideContent}>
                <div className={styles.guideTitle}>नाजुक वस्तुओं की पैकिंग (इन्फोग्राफिक)</div>
                <div className={styles.guideDesc}>कांच, मिट्टी के बर्तन आदि जैसी नाजुक वस्तुओं को पैक करने के टिप्स।</div>
              </div>
              <i data-lucide="image" className={styles.chevronIcon}></i>
            </div>
            <div className={styles.guideCard} onClick={() => viewGuide('liquid_items')}>
              <div className={styles.guideIconContainer}><i data-lucide="droplet"></i></div>
              <div className={styles.guideContent}>
                <div className={styles.guideTitle}>तरल पदार्थ पैक करना (चेकलिस्ट)</div>
                <div className={styles.guideDesc}>लीकेज रोकने के लिए अचार, तेल आदि पैक करने के निर्देश।</div>
              </div>
              <i data-lucide="list-checks" className={styles.chevronIcon}></i>
            </div>
          </div>
        </div>

        {/* Pooling Tab Content */}
        <div className={`${styles.tabContent} ${activeTab === 'pooling' ? styles.active : ''}`}>
          <h2 className={styles.sectionTitle}><i data-lucide="coins"></i>लागत बचाएं: शिपमेंट पूलिंग</h2>
          <p className={styles.poolingDesc}>
            अपने आस-पास के अन्य उद्यमियों के साथ मिलकर शिपमेंट भेजें और लॉजिस्टिक्स लागत पर <strong>40% तक</strong> बचाएं! नीचे उपलब्ध अवसर देखें।
          </p>
          <div className={styles.poolingList}>
            <div className={styles.poolingCard}>
              <div className={styles.poolingHeader}>
                <div className={styles.poolingDestination}>दिल्ली क्षेत्र</div>
                <div className={styles.poolingSaving}><i data-lucide="trending-down"></i> ~₹350 बचत</div>
              </div>
              <div className={styles.poolingDetails}>
                अगले <strong>2 दिनों</strong> में दिल्ली जाने वाले शिपमेंट के लिए पूल। न्यूनतम <strong>5 किग्रा</strong> आवश्यक। पिकअप हब: <strong>रामपुर केंद्र</strong>।
              </div>
              <button className={styles.joinPoolingBtn} onClick={() => joinPooling('pool_delhi_01')}>
                <i data-lucide="plus"></i> शामिल हों / पूछताछ करें
              </button>
            </div>
            <div className={styles.poolingCard}>
              <div className={styles.poolingHeader}>
                <div className={styles.poolingDestination}>मुंबई क्षेत्र</div>
                <div className={styles.poolingSaving}><i data-lucide="trending-down"></i> ~₹420 बचत</div>
              </div>
              <div className={styles.poolingDetails}>
                अगले सप्ताह मुंबई जाने वाले शिपमेंट के लिए पूल। न्यूनतम <strong>10 किग्रा</strong> आवश्यक। पिकअप हब: <strong>रामपुर केंद्र</strong>।
              </div>
              <button className={styles.joinPoolingBtn} onClick={() => joinPooling('pool_mumbai_02')}>
                <i data-lucide="plus"></i> शामिल हों / पूछताछ करें
              </button>
            </div>
            <p className={styles.noMorePooling}>वर्तमान में आपके क्षेत्र के लिए कोई अन्य पूलिंग अवसर उपलब्ध नहीं है।</p>
          </div>
        </div>
      </div>

      <div className={styles.floatButton} onClick={startNewBooking}>
        <i data-lucide="plus"></i>
      </div>

      <div className={styles.bottomNav}>
        <a href="#home" className={styles.navItem} onClick={(e) => navigateApp('home', e.currentTarget, e)}>
          <i data-lucide="home" className={styles.navIcon}></i> <div>होम</div>
        </a>
        <a href="#avsar" className={styles.navItem} onClick={(e) => navigateApp('avsar', e.currentTarget, e)}>
          <i data-lucide="briefcase" className={styles.navIcon}></i> <div>अवसर सेतु</div>
        </a>
        <div className={styles.navItem + ' ' + styles.fabPlaceholder}></div>
        <a href="#kaushal" className={styles.navItem} onClick={(e) => navigateApp('kaushal', e.currentTarget, e)}>
          <i data-lucide="book-open-text" className={styles.navIcon}></i> <div>कौशल केंद्र</div>
        </a>
        <a href="#logistics" className={`${styles.navItem} ${styles.active}`} onClick={(e) => navigateApp('logistics', e.currentTarget, e)}>
          <i data-lucide="truck" className={styles.navIcon}></i> <div>सुगम लॉजिस्टिक्स</div>
        </a>
      </div>
    </>
  );
}