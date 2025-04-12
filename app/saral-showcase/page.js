"use client";

import { useEffect, useState } from 'react';
import Script from 'next/script';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';

export default function SaralShowcase() {
  const router = useRouter();

  useEffect(() => {
    // Initialize Lucide icons after component mounts
    try {
      if (typeof window !== 'undefined') {
        // Add a small delay to ensure DOM is fully loaded
        const timer = setTimeout(() => {
          if (window.lucide) {
            window.lucide.createIcons();
            console.log("Lucide icons initialized for Saral Showcase.");
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

  // Placeholder Functions
  const navigateTo = (page) => {
    if (page === 'home') {
      router.push('/');
    } else {
      alert(`(Placeholder) Navigating to: ${page}`);
      console.log(`Navigating to: ${page}`);
    }
  };
  
  const addProduct = () => {
    alert('(Placeholder) Opening Add Product screen...');
    console.log('Add Product action triggered');
  };
  
  const editProduct = (productId) => {
    alert(`(Placeholder) Editing Product ID: ${productId}`);
    console.log(`Editing Product ID: ${productId}`);
  };
  
  const deleteProduct = (productId) => {
    if (confirm(`क्या आप वाकई उत्पाद ID: ${productId} को हटाना चाहते हैं?`)) {
      alert(`(Placeholder) Deleting Product ID: ${productId}`);
      console.log(`Deleting Product ID: ${productId}`);
    }
  };
  
  const managePlatform = (platform) => {
    alert(`(Placeholder) Managing connection for: ${platform}`);
    console.log(`Managing connection for: ${platform}`);
  };
  
  const connectPlatform = (platform) => {
    alert(`(Placeholder) Initiating connection for: ${platform}`);
    console.log(`Initiating connection for: ${platform}`);
  };
  
  const updateVisibility = (type, isEnabled) => {
    alert(`(Placeholder) Setting ${type} visibility to: ${isEnabled}`);
    console.log(`Setting ${type} visibility to: ${isEnabled}`);
  };

  const setActive = (element, event) => {
    if(event) event.preventDefault();
    const navItems = document.querySelectorAll('.bottom-nav a.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
  };

  // Add openFABAction function
  const openFABAction = () => {
    alert('(Placeholder) Opening Add Product screen...');
    console.log('Add Product action triggered from FAB');
  };

  const goBack = () => {
    router.push('/'); // Navigate to home page
  };

  return (
    <>
      <Script src="https://unpkg.com/lucide@latest" strategy="afterInteractive" />
      
      <div className={styles.container}>
        <div className={styles.header}>
          {/* Add back button similar to AvsarSetu */}
          <button className={styles.backButton} onClick={goBack}>
            <i data-lucide="chevron-left"></i>
          </button>
          <div>
            <div className={styles.pageTitle}>सरल शोकेस</div>
            <div className={styles.pageSubtitle}>आपकी डिजिटल दुकान, उत्पाद और कनेक्शन</div>
          </div>
          <button className={styles.helpBtn} onClick={() => navigateTo('showcaseHelp')} title="सहायता">
            <i data-lucide="help-circle"></i>
          </button>
        </div>

        <div className={styles.profileSummaryCard}>
          <div className={styles.profilePicPlaceholder}> <i data-lucide="user-round"></i> </div>
          <div className={styles.profileInfo}>
            <div className={styles.profileName}>आशा SHG - टोकरी यूनिट</div>
            <div className={styles.profileDescSnippet}>हाथ से बनी सुंदर और टिकाऊ टोकरियाँ...</div>
            <button className={styles.editProfileBtn} onClick={() => navigateTo('editProfile')}>
              <i data-lucide="pencil"></i> प्रोफ़ाइल संपादित करें
            </button>
          </div>
        </div>

        <div className={styles.platformConnectionsSection}>
          <h2 className={styles.sectionTitle}>
            <i data-lucide="link"></i>
            ई-कॉमर्स प्लेटफॉर्म कनेक्शन
          </h2>
          <div className={styles.platformList}>
            <div className={styles.platformItem}>
              <div className={`${styles.platformIcon} ${styles.ondc}`}><i data-lucide="shopping-bag"></i></div>
              <div className={styles.platformDetails}>
                <div className={styles.platformName}>ONDC</div>
                <div className={`${styles.platformStatus} ${styles.statusConnected}`}>कनेक्टेड</div>
              </div>
              <button className={`${styles.platformActionBtn} ${styles.manage}`} onClick={() => managePlatform('ondc')}>प्रबंधित करें</button>
            </div>
            <div className={styles.platformItem}>
              <div className={`${styles.platformIcon} ${styles.flipkart}`}><i data-lucide="store"></i></div>
              <div className={styles.platformDetails}>
                <div className={styles.platformName}>Flipkart Samarth</div>
                <div className={`${styles.platformStatus} ${styles.statusDisconnected}`}>कनेक्ट नहीं है</div>
              </div>
              <button className={`${styles.platformActionBtn} ${styles.connect}`} onClick={() => connectPlatform('flipkart')}>कनेक्ट करें</button>
            </div>
            <div className={styles.platformItem}>
              <div className={`${styles.platformIcon} ${styles.amazon}`}><i data-lucide="shopping-cart"></i></div>
              <div className={styles.platformDetails}>
                <div className={styles.platformName}>Amazon Karigar</div>
                <div className={`${styles.platformStatus} ${styles.statusNeedsAction}`}>सत्यापन आवश्यक</div>
              </div>
              <button className={`${styles.platformActionBtn} ${styles.manage}`} onClick={() => managePlatform('amazon')}>प्रबंधित करें</button>
            </div>
            <div className={styles.platformItem}>
              <div className={`${styles.platformIcon} ${styles.whatsapp}`}><i data-lucide="message-circle"></i></div>
              <div className={styles.platformDetails}>
                <div className={styles.platformName}>WhatsApp Business</div>
                <div className={`${styles.platformStatus} ${styles.statusConnected}`}>कनेक्टेड (पूछताछ सक्षम)</div>
              </div>
              <button className={`${styles.platformActionBtn} ${styles.manage}`} onClick={() => managePlatform('whatsapp')}>प्रबंधित करें</button>
            </div>
          </div>
        </div>

        <div className={styles.visibilitySettingsSection}>
          <h2 className={styles.sectionTitle}>
            <i data-lucide="eye"></i>
            आपकी दुकान की दृश्यता
          </h2>
          <div className={styles.settingsList}>
            <div className={styles.settingItem}>
              <label htmlFor="localDiscoveryToggle" className={styles.settingLabel}>
                <i data-lucide="map-pin"></i> स्थानीय खोज (Local Discovery)
              </label>
              <label className={styles.toggleSwitch}>
                <input type="checkbox" id="localDiscoveryToggle" defaultChecked onChange={(e) => updateVisibility('local', e.target.checked)} />
                <span className={styles.slider}></span>
              </label>
            </div>
            <div className={styles.settingItem}>
              <label htmlFor="b2bVisibilityToggle" className={styles.settingLabel}>
                <i data-lucide="briefcase"></i> B2B पोर्टल पर दिखें
              </label>
              <label className={styles.toggleSwitch}>
                <input type="checkbox" id="b2bVisibilityToggle" onChange={(e) => updateVisibility('b2b', e.target.checked)} />
                <span className={styles.slider}></span>
              </label>
            </div>
          </div>
        </div>

        <div className={styles.productListSection}>
          <div className={styles.productListHeader}>
            <h2 className={styles.sectionTitle}> <i data-lucide="package"></i> आपके उत्पाद </h2>
            <button className={styles.addProductBtnInline} onClick={addProduct}>
              <i data-lucide="plus"></i> उत्पाद जोड़ें
            </button>
          </div>

          <div className={styles.productList}>
            <div className={styles.productCard}>
              <div className={styles.productIconPlaceholder} title="उत्पाद की छवि यहाँ दिखेगी">
                <i data-lucide="shopping-basket"></i> </div>
              <div className={styles.productDetails}>
                <div className={styles.productName}>सजावटी बांस की टोकरी</div>
                <div className={styles.productPrice}>₹ 250</div>
                <div className={styles.productStatusRow}>
                  <span className={`${styles.statusBadge} ${styles.badgeInstock}`}> <i data-lucide="check-circle"></i> स्टॉक में </span>
                  <div className={styles.ecommerceIcons}>
                    <span className={styles.ecommerceIconItem} title="ONDC पर लिस्टेड"> <i data-lucide="shopping-bag" className={styles.active}></i> ONDC </span>
                    <span className={styles.ecommerceIconItem} title="Flipkart पर लिस्टेड नहीं"> <i data-lucide="store"></i> Flipkart </span>
                  </div>
                </div>
                <div className={styles.productActions}>
                  <button className={styles.actionIconBtn} title="संपादित करें" onClick={() => editProduct('prod123')}> <i data-lucide="pencil"></i> </button>
                  <button className={`${styles.actionIconBtn} ${styles.delete}`} title="हटाएं" onClick={() => deleteProduct('prod123')}> <i data-lucide="trash-2"></i> </button>
                </div>
              </div>
            </div>

            <div className={styles.productCard}>
              <div className={styles.productIconPlaceholder} title="उत्पाद की छवि यहाँ दिखेगी">
                <i data-lucide="hand-metal"></i> </div>
              <div className={styles.productDetails}>
                <div className={styles.productName}>हाथ से बना जूट बैग</div>
                <div className={styles.productPrice}>₹ 180</div>
                <div className={styles.productStatusRow}>
                  <span className={`${styles.statusBadge} ${styles.badgeOutofstock}`}> <i data-lucide="x-circle"></i> स्टॉक खत्म </span>
                  <div className={styles.ecommerceIcons}>
                    <span className={styles.ecommerceIconItem} title="ONDC पर लिस्टेड नहीं"> <i data-lucide="shopping-bag"></i> ONDC </span>
                    <span className={styles.ecommerceIconItem} title="Flipkart पर लिस्टेड नहीं"> <i data-lucide="store"></i> Flipkart </span>
                  </div>
                </div>
                <div className={styles.productActions}>
                  <button className={styles.actionIconBtn} title="संपादित करें" onClick={() => editProduct('prod456')}> <i data-lucide="pencil"></i> </button>
                  <button className={`${styles.actionIconBtn} ${styles.delete}`} title="हटाएं" onClick={() => deleteProduct('prod456')}> <i data-lucide="trash-2"></i> </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.floatButton} onClick={addProduct}> <i data-lucide="plus"></i> </div>

      <div className={styles.bottomNav}>
        <a href="#" className={styles.navItem} onClick={(e) => {setActive(e.currentTarget, e); navigateTo('home');}}>
          <i data-lucide="home" className={styles.navIcon}></i> <div>होम</div>
        </a>
        <a href="#" className={`${styles.navItem} ${styles.active}`} onClick={(e) => setActive(e.currentTarget, e)}>
          <i data-lucide="layout-list" className={styles.navIcon}></i> <div>शोकेस</div>
        </a>
        <div className={`${styles.navItem} ${styles.fabPlaceholder}`}></div>
        <a href="#" className={styles.navItem} onClick={(e) => {setActive(e.currentTarget, e); navigateTo('orders_logistics');}}>
          <i data-lucide="receipt-text" className={styles.navIcon}></i> <div>कौशल केंद्र</div>
        </a>
        <a href="#" className={styles.navItem} onClick={(e) => {setActive(e.currentTarget, e); navigateTo('profile');}}>
          <i data-lucide="user-round" className={styles.navIcon}></i> <div>सुगम लॉजिस्टिक्स</div>
        </a>
      </div>
    </>
  );
}