"use client"

import React, { useState, useEffect } from 'react';
import { 
  BookOpenText, GraduationCap, MessageSquare, LifeBuoy, 
  Play, Video, Package, Smartphone, ShoppingCart, 
  Users, PlusCircle, User, MessageSquare as MessageSquareIcon, 
  ThumbsUp, MapPin, UserCheck, Star, ArrowRight, 
  Plus, Home, Briefcase, Truck, FileText, BookOpen,
  Clock, Mic, ChevronLeft
} from 'lucide-react';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';

export default function KaushalKendra() {
  const [activeTab, setActiveTab] = useState('learn');
  const router = useRouter();

  useEffect(() => {
    // Initialize or any other side effects
    console.log("Kaushal Kendra component mounted");
  }, []);

  const switchTab = (tabId) => {
    setActiveTab(tabId);
    console.log(`Switched to tab: ${tabId}`);
  };

  // Go back to home function
  const goBack = () => {
    router.push('/');
  };

  // Placeholder functions
  const navigateTo = (section) => {
    alert(`(Placeholder) Navigating to: ${section}`);
    console.log(`Navigating to: ${section}`);
  };

  const startLearning = (moduleId) => {
    alert(`(Placeholder) Starting learning module: ${moduleId}`);
    console.log(`Starting learning: ${moduleId}`);
  };

  const askQuestion = () => {
    alert('(Placeholder) Opening form/modal to ask a question...');
    console.log('Ask Question button clicked');
  };

  const replyToPost = (postId) => {
    alert(`(Placeholder) Replying to post ID: ${postId}`);
    console.log(`Replying to post: ${postId}`);
  };

  const likePost = (postId) => {
    alert(`(Placeholder) Liking post ID: ${postId}`);
    console.log(`Liking post: ${postId}`);
  };

  const findKendra = () => {
    alert('(Placeholder) Navigating to find nearest Gramin Sahayata Kendra...');
    console.log('Finding Kendra...');
  };

  const requestMentor = () => {
    alert('(Placeholder) Opening form/process to request mentorship...');
    console.log('Requesting Mentor...');
  };

  const connectMentor = (mentorId) => {
    alert(`(Placeholder) Initiating connection with Mentor ID: ${mentorId}`);
    console.log(`Connecting with mentor: ${mentorId}`);
  };

  const openFABAction = () => {
    alert('(Placeholder) Opening action from FAB (e.g., Ask a Question)...');
    console.log('FAB clicked - potential action: Ask Question');
    switchTab('community');
  };

  const navigateApp = (pageName, event) => {
    event.preventDefault();
    alert(`(Placeholder) Navigating to main App Section: ${pageName}`);
    console.log(`Navigating to App Section: ${pageName}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <button className={styles.backButton} onClick={goBack}>
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
          <div>
            <h1 className={styles.headerTitle}>
              <BookOpenText size={24} strokeWidth={2} /> कौशल केंद्र
            </h1>
            <p className={styles.headerSubtitle}>
              सीखें ज़रूरी कौशल, पाएं सहायता, और अपने व्यवसाय को बढ़ाएं।
            </p>
          </div>
        </div>
      </div>

      <div className={styles.tabs}>
        <button 
          className={`${styles.tabButton} ${activeTab === 'learn' ? styles.active : ''}`} 
          onClick={() => switchTab('learn')}
        >
          <GraduationCap size={20} strokeWidth={2} />
          <span>सीखें</span>
        </button>
        <button 
          className={`${styles.tabButton} ${activeTab === 'community' ? styles.active : ''}`} 
          onClick={() => switchTab('community')}
        >
          <MessageSquare size={20} strokeWidth={2} />
          <span>समुदाय</span>
        </button>
        <button 
          className={`${styles.tabButton} ${activeTab === 'support' ? styles.active : ''}`} 
          onClick={() => switchTab('support')}
        >
          <LifeBuoy size={20} strokeWidth={2} />
          <span>सहायता / मेंटर</span>
        </button>
      </div>

      <div id="tab-learn" className={`${styles.tabContent} ${activeTab === 'learn' ? styles.active : ''}`}>
        <h2 className={styles.sectionTitle}>
          <Play size={20} strokeWidth={2.5} />
          सीखने के मॉड्यूल
        </h2>
        
        <div className={styles.learningGrid}>
          <div className={styles.learningCard} onClick={() => startLearning('photo_module')}>
            <div className={styles.learningCardThumbnail}>
              <Video size={40} strokeWidth={1.5} />
            </div>
            <div className={styles.learningCardContent}>
              <div className={styles.learningCardTitle}>उत्पाद की अच्छी तस्वीरें लेना</div>
              <div className={styles.learningCardMeta}>
                <span><Video size={14} strokeWidth={2} />वीडियो</span>
                <span><Clock size={14} strokeWidth={2} />5 मि</span>
              </div>
            </div>
          </div>
          
          <div className={styles.learningCard} onClick={() => startLearning('packaging_module')}>
            <div className={`${styles.learningCardThumbnail} ${styles.tealGradient}`}>
              <Package size={40} strokeWidth={1.5} />
            </div>
            <div className={styles.learningCardContent}>
              <div className={styles.learningCardTitle}>सुरक्षित और आकर्षक पैकेजिंग</div>
              <div className={styles.learningCardMeta}>
                <span><FileText size={14} strokeWidth={2} />लेख</span>
                <span><BookOpen size={14} strokeWidth={2} />7 मि पढ़ना</span>
              </div>
            </div>
          </div>
          
          <div className={styles.learningCard} onClick={() => startLearning('digital_payment_module')}>
            <div className={`${styles.learningCardThumbnail} ${styles.amberGradient}`}>
              <Smartphone size={40} strokeWidth={1.5} />
            </div>
            <div className={styles.learningCardContent}>
              <div className={styles.learningCardTitle}>डिजिटल पेमेंट कैसे लें?</div>
              <div className={styles.learningCardMeta}>
                <span><Mic size={14} strokeWidth={2} />ऑडियो</span>
                <span><Clock size={14} strokeWidth={2} />4 मि</span>
              </div>
            </div>
          </div>
          
          <div className={styles.learningCard} onClick={() => startLearning('gem_nav_module')}>
            <div className={`${styles.learningCardThumbnail} ${styles.greenGradient}`}>
              <ShoppingCart size={40} strokeWidth={1.5} />
            </div>
            <div className={styles.learningCardContent}>
              <div className={styles.learningCardTitle}>GeM पोर्टल नेविगेशन</div>
              <div className={styles.learningCardMeta}>
                <span><Video size={14} strokeWidth={2} />वीडियो</span>
                <span><Clock size={14} strokeWidth={2} />8 मि</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="tab-community" className={`${styles.tabContent} ${activeTab === 'community' ? styles.active : ''}`}>
        <h2 className={styles.sectionTitle}>
          <Users size={20} strokeWidth={2.5} />
          साथी उद्यमियों से जुड़ें
        </h2>

        <button className={styles.askQuestionBtn} onClick={askQuestion}>
          <PlusCircle size={18} strokeWidth={2.5} /> अपना सवाल पूछें
        </button>

        <div className={styles.forumPostCard}>
          <div className={styles.forumPostHeader}>
            <div className={styles.forumAvatar}><User size={20} /></div>
            <div className={styles.forumUserInfo}>
              <div className={styles.forumUserName}>मीरा देवी</div>
              <div className={styles.forumPostTime}>2 घंटे पहले</div>
            </div>
          </div>
          <div className={styles.forumPostBody}>
            GeM पर रजिस्टर करने कौन कौन से दस्तावेज़ चाहिए? कोई मदद कर सकता है?
          </div>
          <div className={styles.forumPostActions}>
            <button className={styles.actionBtn} onClick={() => replyToPost('post123')}>
              <MessageSquareIcon size={16} strokeWidth={2} /> उत्तर दें (2)
            </button>
            <button className={styles.actionBtn} onClick={() => likePost('post123')}>
              <ThumbsUp size={16} strokeWidth={2} /> पसंद करें (5)
            </button>
          </div>
        </div>

        <div className={styles.forumPostCard}>
          <div className={styles.forumPostHeader}>
            <div className={styles.forumAvatar}>सु</div>
            <div className={styles.forumUserInfo}>
              <div className={styles.forumUserName}>सुनीता पाटिल</div>
              <div className={styles.forumPostTime}>कल</div>
            </div>
          </div>
          <div className={styles.forumPostBody}>
            मिट्टी के बर्तनों को शिपिंग के लिए पैक करने का सबसे अच्छा तरीका क्या है ताकि वे टूटे नहीं?
          </div>
          <div className={styles.forumPostActions}>
            <button className={styles.actionBtn} onClick={() => replyToPost('post124')}>
              <MessageSquareIcon size={16} strokeWidth={2} /> उत्तर दें (4)
            </button>
            <button className={styles.actionBtn} onClick={() => likePost('post124')}>
              <ThumbsUp size={16} strokeWidth={2} /> पसंद करें (8)
            </button>
          </div>
        </div>
      </div>

      <div id="tab-support" className={`${styles.tabContent} ${activeTab === 'support' ? styles.active : ''}`}>
        <h2 className={styles.sectionTitle}>
          <LifeBuoy size={20} strokeWidth={2.5} />
          सहायता केंद्र और मेंटरशिप
        </h2>

        <div className={styles.resourceCard} onClick={findKendra}>
          <div className={`${styles.resourceIconContainer} ${styles.kendra}`}>
            <MapPin size={24} strokeWidth={2} />
          </div>
          <div className={styles.resourceContent}>
            <div className={styles.resourceTitle}>नज़दीकी ग्रामीण सहायता केंद्र खोजें</div>
            <div className={styles.resourceDesc}>ऐप सपोर्ट, ट्रेनिंग और दस्तावेज़ मदद के लिए संपर्क करें।</div>
          </div>
          <svg className={styles.chevronIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>

        <div className={styles.resourceCard} onClick={requestMentor}>
          <div className={`${styles.resourceIconContainer} ${styles.mentorReq}`}>
            <UserCheck size={24} strokeWidth={2} />
          </div>
          <div className={styles.resourceContent}>
            <div className={styles.resourceTitle}>मेंटरशिप के लिए अनुरोध करें</div>
            <div className={styles.resourceDesc}>अनुभवी मेंटर्स से विशिष्ट व्यावसायिक सलाह प्राप्त करें।</div>
          </div>
          <svg className={styles.chevronIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>

        <h2 className={styles.sectionTitle} style={{ marginTop: '30px' }}>
          <Star size={20} strokeWidth={2.5} />
          हमारे मेंटर्स से मिलें
        </h2>

        <div className={styles.mentorCard}>
          <div className={styles.mentorPhoto}><User size={30} /></div>
          <div className={styles.mentorDetails}>
            <div className={styles.mentorName}>श्रीमती अनन्या देसाई</div>
            <div className={styles.mentorExpertise}>
              <Briefcase size={14} strokeWidth={2.5} /> डिजिटल मार्केटिंग विशेषज्ञ
            </div>
            <button className={styles.connectBtn} onClick={() => connectMentor('mentor01')}>
              संपर्क करें <ArrowRight size={14} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div className={styles.mentorCard}>
          <div className={styles.mentorPhoto}><User size={30} /></div>
          <div className={styles.mentorDetails}>
            <div className={styles.mentorName}>श्री रमेश गुप्ता</div>
            <div className={styles.mentorExpertise}>
              <Package size={14} strokeWidth={2.5} /> पैकेजिंग और लॉजिस्टिक्स सलाहकार
            </div>
            <button className={styles.connectBtn} onClick={() => connectMentor('mentor02')}>
              संपर्क करें <ArrowRight size={14} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.floatButton} onClick={openFABAction}>
        <Plus size={28} strokeWidth={2.5} />
      </div>

      <div className={styles.bottomNav}>
        <a href="#home" className={styles.navItem} onClick={(e) => navigateApp('home', e)}>
          <Home size={24} strokeWidth={2} className={styles.navIcon} />
          <div>होम</div>
        </a>
        <a href="#avsar" className={styles.navItem} onClick={(e) => navigateApp('avsar', e)}>
          <Briefcase size={24} strokeWidth={2} className={styles.navIcon} />
          <div>अवसर सेतु</div>
        </a>
        <div className={styles.navItemFabPlaceholder}></div>
        <a href="#kaushal" className={`${styles.navItem} ${styles.active}`} onClick={(e) => navigateApp('kaushal', e)}>
          <BookOpenText size={24} strokeWidth={2} className={styles.navIcon} />
          <div>कौशल केंद्र</div>
        </a>
        <a href="#logistics" className={styles.navItem} onClick={(e) => navigateApp('logistics', e)}>
          <Truck size={24} strokeWidth={2} className={styles.navIcon} />
          <div>सुगम लॉजिस्टिक्स</div>
        </a>
      </div>
    </div>
  );
}