"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Script from 'next/script';
import styles from './styles.module.css';
import {
  UserRound, User, Phone, MapPin, Languages, Store, Tag, FileText, 
  LayoutList, LayoutDashboard, ReceiptText, Megaphone, GraduationCap,
  Settings, Bell, Shield, Lock, HelpCircle, BookOpen, MessageCircle,
  ChevronRight, LogOut, Edit, Edit2, Home, Bot, Briefcase, BookOpenText, Truck, Plus,
  ArrowLeft
} from 'lucide-react';

export default function ProfilePage() {
  const router = useRouter();

  // Add a goBack function to handle navigation back to previous page
  const goBack = () => {
    router.back();
  };

  // --- Placeholder Functions for Profile Page ---
  const openEditProfile = (section) => {
    alert(`(Placeholder) Opening edit mode for section: ${section}`);
    console.log(`Editing profile section: ${section}`);
    // In a real app, this would likely open a modal or navigate to an edit screen.
  };

  const viewPublicShowcase = () => {
    alert('(Placeholder) Navigating to view public Showcase profile...');
    console.log('Viewing public Showcase');
  };

  const navigateToSection = (sectionName) => {
    alert(`(Placeholder) Navigating to your '${sectionName}' section...`);
    console.log(`Navigating to user section: ${sectionName}`);
    // This would likely call navigateApp or a similar function to switch main views.
  };

  const openSetting = (settingName) => {
    alert(`(Placeholder) Opening setting: ${settingName}`);
    console.log(`Opening setting: ${settingName}`);
    // Navigate to specific settings page
  };

  const openHelpLink = (helpTopic) => {
    alert(`(Placeholder) Opening help topic: ${helpTopic}`);
    console.log(`Opening help: ${helpTopic}`);
    // Navigate to FAQ, Contact form, or Kendra locator
  };

  const logout = () => {
    if (confirm('क्या आप वाकई लॉग आउट करना चाहते हैं?')) {
      alert('(Placeholder) Logging out...');
      console.log('User confirmed logout');
      // Add actual logout logic here (clear session, redirect, etc.)
    } else {
      console.log('User cancelled logout');
    }
  };

  // --- Standard Bottom Nav Function ---
  const navigateApp = (pageName, event) => {
    event.preventDefault();
    
    // In this case, if they click profile while already here, do nothing extra visually.
    if (pageName !== 'profile') {
      if (pageName === 'home') {
        router.push('/');
      } else if (pageName === 'avsar') {
        router.push('/avsar-setu');
      } else if (pageName === 'kaushal') {
        router.push('/kaushal-kendra');
      } else if (pageName === 'sugam') {
        router.push('/sugam-logistics');
      }
      console.log(`Navigating to App Section: ${pageName}`);
    }
  };

  // Animation effect on load
  useEffect(() => {
    try {
      const summary = document.querySelector(`.${styles.profileSummary}`);
      const cards = document.querySelectorAll(`.${styles.infoCard}, .${styles.actionCard}, .${styles.logoutBtn}`);
      
      if (summary) {
        summary.style.opacity = 0;
        summary.style.transform = 'translateY(-20px)';
        summary.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        setTimeout(() => {
          summary.style.opacity = 1;
          summary.style.transform = 'translateY(0)';
        }, 100); // Delay slightly
      }
      
      cards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.4s ease-out ${index * 0.05}s, transform 0.4s ease-out ${index * 0.05}s`;
        setTimeout(() => {
          card.style.opacity = 1;
          card.style.transform = 'translateY(0)';
        }, 200); // Start after summary animation
      });
    } catch (error) {
      console.error("Animation error:", error);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Script src="https://unpkg.com/lucide@latest" strategy="afterInteractive" />
      
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <button className={styles.backButton} onClick={goBack}>
            <ArrowLeft size={20} strokeWidth={2.5} />
          </button>
          <UserRound size={22} strokeWidth={2.5} />
          <span>मेरा प्रोफ़ाइल</span>
        </div>
      </div>

      <div className={styles.profileSummary}>
        <div className={styles.profileAvatar}>
          <User size={40} strokeWidth={1.5} />
        </div>
        <div className={styles.profileName}>राधा देवी</div>
        <div className={styles.profileBusinessName}>
          <Store size={16} strokeWidth={2} />आशा SHG - टोकरी बुनाई यूनिट
        </div>
        <button 
          className={styles.editProfileBtn} 
          onClick={() => openEditProfile('summary')} 
          title="प्रोफ़ाइल संपादित करें"
        >
          <Edit2 size={18} strokeWidth={2.5} />
        </button>
      </div>

      <div className={styles.infoCard}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitle}>
            <User size={18} strokeWidth={2.5} />व्यक्तिगत विवरण
          </div>
          <button 
            className={styles.cardEditBtn} 
            onClick={() => openEditProfile('personal')}
          >
            <Edit2 size={16} strokeWidth={2.5} />
          </button>
        </div>
        <div className={styles.infoList}>
          <div className={styles.infoItem}>
            <User size={18} strokeWidth={2} />
            <span className={styles.infoLabel}>पूरा नाम:</span>
            <span className={styles.infoValue}>राधा देवी</span>
          </div>
          <div className={styles.infoItem}>
            <Phone size={18} strokeWidth={2} />
            <span className={styles.infoLabel}>फोन नंबर:</span>
            <span className={styles.infoValue}>+91-98XXXXXX01</span>
          </div>
          <div className={styles.infoItem}>
            <MapPin size={18} strokeWidth={2} />
            <span className={styles.infoLabel}>स्थान:</span>
            <span className={styles.infoValue}>रामपुर गाँव, राजस्थान</span>
          </div>
          <div className={styles.infoItem}>
            <Languages size={18} strokeWidth={2} />
            <span className={styles.infoLabel}>भाषा:</span>
            <span className={styles.infoValue}>हिन्दी</span>
          </div>
        </div>
      </div>

      <div className={styles.infoCard}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitle}>
            <Briefcase size={18} strokeWidth={2.5} />व्यवसाय/SHG विवरण
          </div>
          <button 
            className={styles.cardEditBtn} 
            onClick={() => openEditProfile('business')}
          >
            <Edit2 size={16} strokeWidth={2.5} />
          </button>
        </div>
        <div className={styles.infoList}>
          <div className={styles.infoItem}>
            <Store size={18} strokeWidth={2} />
            <span className={styles.infoLabel}>इकाई का नाम:</span>
            <span className={styles.infoValue}>आशा SHG - टोकरी बुनाई यूनिट</span>
          </div>
          <div className={styles.infoItem}>
            <Tag size={18} strokeWidth={2} />
            <span className={styles.infoLabel}>श्रेणी:</span>
            <span className={styles.infoValue}>हस्तशिल्प, गृह सजावट</span>
          </div>
          <div className={styles.infoItem}>
            <FileText size={18} strokeWidth={2} />
            <span className={styles.infoLabel}>उद्यम नं.:</span>
            <span className={styles.infoValue}>UDYAM-RJ-XX-XXXXXXX</span>
          </div>
          <div className={styles.infoItem}>
            <LayoutList size={18} strokeWidth={2} />
            <span className={styles.infoLabel}>शोकेस:</span>
            <span 
              className={`${styles.infoValue} ${styles.link}`} 
              onClick={viewPublicShowcase}
            >
              पब्लिक प्रोफ़ाइल देखें
            </span>
          </div>
        </div>
      </div>

      <div className={styles.actionGrid}>
        <div 
          className={styles.actionCard} 
          onClick={() => navigateToSection('showcase')}
        >
          <LayoutDashboard size={28} strokeWidth={2} />
          <span>मेरा शोकेस</span>
        </div>
        <div 
          className={styles.actionCard} 
          onClick={() => navigateToSection('orders')}
        >
          <ReceiptText size={28} strokeWidth={2} />
          <span>मेरे ऑर्डर्स</span>
        </div>
        <div 
          className={styles.actionCard} 
          onClick={() => navigateToSection('opportunities')}
        >
          <Megaphone size={28} strokeWidth={2} />
          <span>मेरे अवसर</span>
        </div>
        <div 
          className={styles.actionCard} 
          onClick={() => navigateToSection('learning')}
        >
          <GraduationCap size={28} strokeWidth={2} />
          <span>मेरी सीख</span>
        </div>
      </div>

      <div className={`${styles.infoCard} ${styles.settingsCard}`}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitle}>
            <Settings size={18} strokeWidth={2.5} />सेटिंग्स
          </div>
        </div>
        <div 
          className={styles.settingItem} 
          onClick={() => openSetting('notifications')}
        >
          <Bell size={20} strokeWidth={2} />
          <span>सूचनाएं (Notifications)</span>
          <ChevronRight size={18} strokeWidth={2.5} className={styles.chevronIcon} />
        </div>
        <div 
          className={styles.settingItem} 
          onClick={() => openSetting('language')}
        >
          <Languages size={20} strokeWidth={2} />
          <span>भाषा बदलें (Change Language)</span>
          <ChevronRight size={18} strokeWidth={2.5} className={styles.chevronIcon} />
        </div>
        <div 
          className={styles.settingItem} 
          onClick={() => openSetting('security')}
        >
          <Shield size={20} strokeWidth={2} />
          <span>सुरक्षा (Security)</span>
          <ChevronRight size={18} strokeWidth={2.5} className={styles.chevronIcon} />
        </div>
        <div 
          className={styles.settingItem} 
          onClick={() => openSetting('privacy')}
        >
          <Lock size={20} strokeWidth={2} />
          <span>गोपनीयता (Privacy)</span>
          <ChevronRight size={18} strokeWidth={2.5} className={styles.chevronIcon} />
        </div>
      </div>

      <div className={`${styles.infoCard} ${styles.helpCard}`}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitle}>
            <HelpCircle size={18} strokeWidth={2.5} />सहायता और समर्थन
          </div>
        </div>
        <div 
          className={styles.helpItem} 
          onClick={() => openHelpLink('faq')}
        >
          <BookOpen size={20} strokeWidth={2} />
          <span>अक्सर पूछे जाने वाले प्रश्न (FAQ)</span>
          <ChevronRight size={18} strokeWidth={2.5} className={styles.chevronIcon} />
        </div>
        <div 
          className={styles.helpItem} 
          onClick={() => openHelpLink('contact')}
        >
          <MessageCircle size={20} strokeWidth={2} />
          <span>हमसे संपर्क करें (Contact Us)</span>
          <ChevronRight size={18} strokeWidth={2.5} className={styles.chevronIcon} />
        </div>
        <div 
          className={styles.helpItem} 
          onClick={() => openHelpLink('find_kendra')}
        >
          <MapPin size={20} strokeWidth={2} />
          <span>नज़दीकी सहायता केंद्र (Find Kendra)</span>
          <ChevronRight size={18} strokeWidth={2.5} className={styles.chevronIcon} />
        </div>
      </div>

      <button className={styles.logoutBtn} onClick={logout}>
        <LogOut size={18} strokeWidth={2.5} /> लॉग आउट करें
      </button>

      <div className={styles.floatButton} onClick={() => openEditProfile('summary')}>
        <Bot size={28} strokeWidth={2.5} />
      </div>

      <div className={styles.bottomNav}>
        <a
          href="#home"
          className={styles.navItem}
          onClick={(e) => navigateApp('home', e)}
        >
          <Home className={styles.navIcon} size={24} strokeWidth={2} />
          <div>होम</div>
        </a>
        <a
          href="#avsar"
          className={styles.navItem}
          onClick={(e) => navigateApp('avsar', e)}
        >
          <Briefcase className={styles.navIcon} size={24} strokeWidth={2} />
          <div>अवसर सेतु</div>
        </a>
        <div className={styles.navItemFabPlaceholder}></div>
        <a
          href="#kaushal"
          className={styles.navItem}
          onClick={(e) => navigateApp('kaushal', e)}
        >
          <BookOpenText className={styles.navIcon} size={24} strokeWidth={2} />
          <div>कौशल केंद्र</div>
        </a>
        <a
          href="#profile"
          className={`${styles.navItem} ${styles.active}`}
          onClick={(e) => navigateApp('profile', e)}
        >
          <Truck className={styles.navIcon} size={24} strokeWidth={2} />
          <div>सुगम लॉजिस्टिक्स</div>
        </a>
      </div>
    </div>
  );
}