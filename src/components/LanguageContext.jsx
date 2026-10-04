/* eslint react-refresh/only-export-components: off */
import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

const hindiTranslations = {
  "Home": "होम",
  "Dashboard": "डैशबोर्ड",
  "Explore": "खोजें",
  "Store": "स्टोर",
  "Contact": "संपर्क",
  "About": "हमारे बारे में",
  "Appointments": "अपॉइंटमेंट",
  "Bookings": "बुकिंग",
  "Payments": "भुगतान",
  "Settings": "सेटिंग्स",
  "Close dashboard menu": "डैशबोर्ड मेनू बंद करें",
  "Open dashboard menu": "डैशबोर्ड मेनू खोलें",
  "Astra Premium": "Astra प्रीमियम",
  "Unlock advanced insights, exclusive reports and priority consultations.": "उन्नत जानकारी, विशेष रिपोर्ट और प्राथमिकता पर परामर्श प्राप्त करें।",
  "Upgrade": "अपग्रेड करें",
  "User": "उपयोगकर्ता",
  "Astra Member": "Astra सदस्य",
  "Upcoming Session": "आगामी सत्र",
  "Join Session": "सत्र में शामिल हों",
  "Past Sessions": "पिछले सत्र",
  "Compatibility Reading": "अनुकूलता विश्लेषण",
  "Recommended Services": "अनुशंसित सेवाएं",
  "Today's Insight": "आज की जानकारी",
  "Ask about your chart, planetary positions, compatibility, or upcoming sessions.": "अपनी कुंडली, ग्रहों की स्थिति, अनुकूलता या आगामी सत्रों के बारे में पूछें।",
  "Descriptive View": "विस्तृत दृश्य",
  "Janam Kundli": "जन्म कुंडली",
  "Premium Birth Chart Reading": "प्रीमियम जन्म कुंडली विश्लेषण",
  "Comprehensive Vedic birth chart analysis covering planetary positions, houses, yogas, and life trends.": "ग्रहों की स्थिति, भाव, योग और जीवन की प्रवृत्तियों सहित विस्तृत वैदिक जन्म कुंडली विश्लेषण।",
  "Report delivered within 48 hours. Birth date, time, and place are required. One free clarification included.": "रिपोर्ट 48 घंटे में दी जाएगी। जन्म तिथि, समय और स्थान आवश्यक हैं। एक निःशुल्क स्पष्टीकरण शामिल है।",
  "Transit Report": "गोचर रिपोर्ट",
  "Gochar & Dasha Forecast": "गोचर और दशा पूर्वानुमान",
  "Monthly and yearly transit predictions based on current planetary movements and mahadasha periods.": "वर्तमान ग्रहों की चाल और महादशा अवधि के आधार पर मासिक और वार्षिक गोचर पूर्वानुमान।",
  "Forecast is personalized and non-refundable after delivery. Valid for one individual only.": "पूर्वानुमान व्यक्तिगत होगा और भेजे जाने के बाद धनवापसी योग्य नहीं है। यह केवल एक व्यक्ति के लिए मान्य है।",
  "Matchmaking": "कुंडली मिलान",
  "Kundli Milan Premium": "प्रीमियम कुंडली मिलान",
  "Detailed compatibility analysis with guna matching, mangal dosha evaluation, and relationship insights.": "गुण मिलान, मंगल दोष मूल्यांकन और संबंध संबंधी जानकारी के साथ विस्तृत अनुकूलता विश्लेषण।",
  "Both partners' birth details are mandatory. Report delivered within 72 hours.": "दोनों साथियों के जन्म विवरण आवश्यक हैं। रिपोर्ट 72 घंटे में दी जाएगी।",
  "Career Guidance": "करियर मार्गदर्शन",
  "Dosha Analysis & Solutions": "दोष विश्लेषण और समाधान",
  "Dosha": "दोष",
  "Detailed examination of Manglik Dosha, Kaal Sarp Dosha, Pitra Dosha, and other astrological imbalances with personalized remedies.": "मांगलिक दोष, कालसर्प दोष, पितृ दोष और अन्य ज्योतिषीय असंतुलनों का विस्तृत विश्लेषण तथा व्यक्तिगत उपाय।",
  "Birth Chart Reading": "जन्म कुंडली विश्लेषण",
  "Kundli": "कुंडली",
  "A comprehensive analysis of your natal chart covering planetary positions, strengths, weaknesses, life purpose, career potential, relationship patterns, and major life cycles. Ideal for individuals seeking a deeper understanding of their life path.": "ग्रहों की स्थिति, क्षमताओं, चुनौतियों, जीवन के उद्देश्य, करियर की संभावनाओं, संबंधों और जीवन के प्रमुख चरणों सहित आपकी जन्म कुंडली का विस्तृत विश्लेषण। जीवन की दिशा को गहराई से समझने के इच्छुक लोगों के लिए उपयोगी।",
  "Career Consultation": "करियर परामर्श",
  "Career": "करियर",
  "Get guidance on career growth, job opportunities, promotions, career transitions, entrepreneurship, and professional challenges based on planetary influences and current astrological periods.": "ग्रहों के प्रभाव और वर्तमान ज्योतिषीय अवधि के आधार पर करियर में प्रगति, नौकरी के अवसर, पदोन्नति, करियर बदलाव, उद्यमिता और पेशेवर चुनौतियों पर मार्गदर्शन पाएं।",
  "Love & Relationship Consultation": "प्रेम और संबंध परामर्श",
  "Relationship": "संबंध",
  "Understand relationship compatibility, emotional patterns, communication challenges, romantic prospects, and future relationship opportunities through astrological analysis.": "ज्योतिषीय विश्लेषण के माध्यम से संबंधों की अनुकूलता, भावनात्मक प्रवृत्तियों, संवाद की चुनौतियों, प्रेम की संभावनाओं और भविष्य के अवसरों को समझें।",
  "Marriage Consultation": "विवाह परामर्श",
  "Marriage": "विवाह",
  "Detailed consultation regarding marriage timing, compatibility, marital harmony, relationship obstacles, and remedies for delays or recurring challenges.": "विवाह के समय, अनुकूलता, वैवाहिक सामंजस्य, संबंधों की बाधाओं और देरी या बार-बार आने वाली चुनौतियों के उपायों पर विस्तृत परामर्श।",
  "Family Consultation": "पारिवारिक परामर्श",
  "Family": "परिवार",
  "Resolve family conflicts, improve relationships among family members, understand family karma, and create harmony within the household.": "पारिवारिक मतभेद सुलझाने, परिवार के सदस्यों के संबंध सुधारने, पारिवारिक कर्म समझने और घर में सामंजस्य बनाने में सहायता।",
  "Property & Real Estate Consultation": "संपत्ति और रियल एस्टेट परामर्श",
  "Property": "संपत्ति",
  "Guidance regarding property purchases, investments, construction projects, relocation decisions, and real estate opportunities.": "संपत्ति खरीद, निवेश, निर्माण परियोजनाओं, स्थान परिवर्तन के निर्णय और रियल एस्टेट अवसरों पर मार्गदर्शन।",
  "Child & Parenting Consultation": "बच्चों और पालन-पोषण परामर्श",
  "Parenting": "पालन-पोषण",
  "Understand your child's personality, educational potential, strengths, developmental patterns, and parenting approaches.": "अपने बच्चे के व्यक्तित्व, शैक्षणिक क्षमता, खूबियों, विकास की प्रवृत्तियों और पालन-पोषण के तरीकों को समझें।",
  "Health Consultation": "स्वास्थ्य परामर्श",
  "Receive astrological wellness insights, identify vulnerable health periods, and learn preventive lifestyle recommendations. Not a substitute for medical advice.": "ज्योतिषीय स्वास्थ्य जानकारी पाएं, संवेदनशील स्वास्थ्य अवधियों को पहचानें और बचाव के लिए जीवनशैली सुझाव जानें। यह चिकित्सकीय सलाह का विकल्प नहीं है।",
  "Remedy Consultation": "उपाय परामर्श",
  "Personalized remedies including mantras, gemstones, donations, rituals, spiritual practices, and planetary balancing techniques.": "मंत्र, रत्न, दान, अनुष्ठान, आध्यात्मिक अभ्यास और ग्रह संतुलन के तरीकों सहित व्यक्तिगत उपाय।",
  "Spiritual Guidance": "आध्यात्मिक मार्गदर्शन",
  "Spiritual": "आध्यात्मिक",
  "Discover your spiritual path, life purpose, karmic lessons, meditation practices, and personal transformation opportunities.": "अपना आध्यात्मिक मार्ग, जीवन का उद्देश्य, कर्म के सबक, ध्यान अभ्यास और आत्म-विकास के अवसर जानें।",
  "Numerology Consultation": "अंक ज्योतिष परामर्श",
  "Numerology": "अंक ज्योतिष",
  "Analyze life path numbers, destiny numbers, personal year cycles, name vibrations, and numerological influences on major decisions.": "जीवन पथ और भाग्यांक, व्यक्तिगत वर्ष चक्र, नाम के कंपन तथा महत्वपूर्ण निर्णयों पर अंक ज्योतिष के प्रभाव का विश्लेषण।",
  "Tarot Reading": "टैरो रीडिंग",
  "Tarot": "टैरो",
  "Gain clarity on relationships, career choices, personal growth, and upcoming opportunities through intuitive tarot card readings.": "अंतर्ज्ञान आधारित टैरो कार्ड रीडिंग से संबंधों, करियर के विकल्पों, व्यक्तिगत विकास और आने वाले अवसरों पर स्पष्टता पाएं।",
  "Horoscope Consultation": "राशिफल परामर्श",
  "Horoscope": "राशिफल",
  "Personalized forecasts covering daily, monthly, and yearly astrological influences tailored to your birth chart.": "आपकी जन्म कुंडली के अनुसार दैनिक, मासिक और वार्षिक ज्योतिषीय प्रभावों का व्यक्तिगत पूर्वानुमान।",
  "Muhurat Consultation": "मुहूर्त परामर्श",
  "Muhurat": "मुहूर्त",
  "Selection of the most auspicious timing for marriage, business launches, travel, property purchases, and important life events.": "विवाह, व्यवसाय आरंभ, यात्रा, संपत्ति खरीद और महत्वपूर्ण जीवन घटनाओं के लिए सबसे शुभ समय का चयन।",
  "Foreign Travel & Settlement": "विदेश यात्रा और बसने का योग",
  "Explore opportunities related to international travel, overseas studies, work visas, immigration, and foreign settlement prospects.": "अंतरराष्ट्रीय यात्रा, विदेश में पढ़ाई, कार्य वीज़ा, आव्रजन और विदेश में बसने के अवसरों की जानकारी।",
  "Analysis of home, office, or commercial spaces to improve energy flow, prosperity, harmony, productivity, and well-being.": "ऊर्जा प्रवाह, समृद्धि, सामंजस्य, उत्पादकता और कल्याण बेहतर करने के लिए घर, कार्यालय या व्यावसायिक स्थान का विश्लेषण।",
  "Finance & Wealth Consultation": "वित्त और धन परामर्श",
  "Business Consultation": "व्यावसायिक परामर्श",
  "Education Consultation": "शिक्षा परामर्श",
  "Foreign Travel Consultation": "विदेश यात्रा परामर्श",
  "Business": "व्यवसाय",
  "Travel": "यात्रा",
  "Insights into wealth creation, financial stability, investments, business opportunities, periods of prosperity, and strategies for long-term financial growth.": "धन वृद्धि, वित्तीय स्थिरता, निवेश, व्यावसायिक अवसर, समृद्धि के समय और दीर्घकालीन वित्तीय विकास की रणनीतियों पर जानकारी।",
  "Astrological guidance for entrepreneurs, startups, partnerships, expansion plans, investments, and strategic business decisions.": "उद्यमियों, स्टार्टअप, साझेदारी, विस्तार योजनाओं, निवेश और रणनीतिक व्यावसायिक निर्णयों के लिए ज्योतिषीय मार्गदर्शन।",
  "Academic guidance, exam success strategies, higher education planning, learning strengths, and educational career direction.": "पढ़ाई, परीक्षा में सफलता की रणनीतियों, उच्च शिक्षा की योजना, सीखने की क्षमताओं और शैक्षणिक करियर की दिशा के लिए मार्गदर्शन।",
  "Explore opportunities for international travel, visas, immigration, and prospects.": "अंतरराष्ट्रीय यात्रा, वीज़ा, आव्रजन और उनसे जुड़े अवसरों की जानकारी।",
  "Career & Job Forecast": "करियर और नौकरी पूर्वानुमान",
  "Career-oriented horoscope reading highlighting growth periods, job changes, and suitable professions.": "विकास के समय, नौकरी में बदलाव और उपयुक्त पेशों की जानकारी देने वाला करियर-केंद्रित कुंडली विश्लेषण।",
  "Recommendations are advisory in nature and should not replace professional career counseling.": "सुझाव केवल मार्गदर्शन के लिए हैं और पेशेवर करियर परामर्श का विकल्प नहीं हैं।",
  "Education": "शिक्षा",
  "Education & Exam Insights": "शिक्षा और परीक्षा मार्गदर्शन",
  "Astrological guidance for students covering study patterns, exam timing, and academic strengths.": "पढ़ाई की आदतों, परीक्षा के समय और शैक्षणिक क्षमताओं से संबंधित विद्यार्थियों के लिए ज्योतिषीय मार्गदर्शन।",
  "Suitable for school, college, and competitive exam students. Personalized report only.": "स्कूल, कॉलेज और प्रतियोगी परीक्षा के विद्यार्थियों के लिए उपयुक्त। केवल व्यक्तिगत रिपोर्ट।",
  "Health": "स्वास्थ्य",
  "Health & Wellness Forecast": "स्वास्थ्य और कल्याण पूर्वानुमान",
  "Planetary influence analysis related to health, wellness routines, and preventive guidance.": "स्वास्थ्य, कल्याण दिनचर्या और बचाव संबंधी मार्गदर्शन पर ग्रहों के प्रभाव का विश्लेषण।",
  "This service is not medical advice and should not replace consultation with healthcare professionals.": "यह सेवा चिकित्सकीय सलाह नहीं है और स्वास्थ्य विशेषज्ञों से परामर्श का विकल्प नहीं होनी चाहिए।",
  "Finance": "वित्त",
  "Wealth & Finance Report": "धन और वित्त रिपोर्ट",
  "Financial trend analysis covering income opportunities, investments, and wealth-building periods.": "आय के अवसरों, निवेश और धन वृद्धि की अवधि से जुड़ा वित्तीय प्रवृत्ति विश्लेषण।",
  "For informational purposes only. Not intended as professional financial or investment advice.": "केवल जानकारी के लिए। यह पेशेवर वित्तीय या निवेश सलाह नहीं है।",
  "Remedies": "उपाय",
  "Personalized Remedies": "व्यक्तिगत उपाय",
  "Customized remedies including mantras, gemstones, donations, and spiritual practices.": "मंत्र, रत्न, दान और आध्यात्मिक अभ्यास सहित व्यक्तिगत उपाय।",
  "Results may vary by individual. Remedies are optional recommendations and not guarantees.": "परिणाम व्यक्ति के अनुसार अलग हो सकते हैं। उपाय वैकल्पिक सुझाव हैं, कोई गारंटी नहीं।",
  "Vastu": "वास्तु",
  "Vastu Consultation": "वास्तु परामर्श",
  "Residential and commercial vastu recommendations for improved harmony and productivity.": "बेहतर सामंजस्य और उत्पादकता के लिए घर और व्यावसायिक स्थानों हेतु वास्तु सुझाव।",
  "Property layout or photographs may be required for accurate analysis.": "सटीक विश्लेषण के लिए संपत्ति का नक्शा या तस्वीरें आवश्यक हो सकती हैं।",
  "Naming": "नामकरण",
  "Name & Nakshatra Report": "नाम और नक्षत्र रिपोर्ट",
  "Auspicious naming suggestions based on nakshatra, numerology, and traditional Vedic principles.": "नक्षत्र, अंक ज्योतिष और पारंपरिक वैदिक सिद्धांतों पर आधारित शुभ नाम सुझाव।",
  "Includes up to 20 recommended names with meanings and compatibility insights.": "अर्थ और अनुकूलता जानकारी सहित 20 तक सुझाए गए नाम शामिल हैं।",
  "Book Now": "अभी बुक करें",
  "View Forecast": "पूर्वानुमान देखें",
  "Check Match": "मिलान जांचें",
  "Get Advice": "सलाह पाएं",
  "View Report": "रिपोर्ट देखें",
  "Read More": "और पढ़ें",
  "See Forecast": "पूर्वानुमान देखें",
  "Get Remedies": "उपाय पाएं",
  "Book Vastu": "वास्तु बुक करें",
  "Get Names": "नाम पाएं",
  "Previous service": "पिछली सेवा",
  "Next service": "अगली सेवा",
  "Rating": "रेटिंग",
  "Consultations": "परामर्श",
  "Booking Summary": "बुकिंग सारांश",
  "Consultation Fee": "परामर्श शुल्क",
  "Session Type": "सत्र का प्रकार",
  "Premium Consultation": "प्रीमियम परामर्श",
  "Duration": "अवधि",
  "30 Minutes": "30 मिनट",
  "Proceed to Checkout": "भुगतान के लिए आगे बढ़ें",
  "Secure payment powered by Razorpay": "Razorpay द्वारा सुरक्षित भुगतान",
  "Thanks! We'll notify you at": "धन्यवाद! हम आपको यहां सूचित करेंगे:",
  "Login": "लॉग इन",
  "Logout": "लॉग आउट",
  "Loading...": "लोड हो रहा है...",
  "Sector_04 // Deep_Field": "सेक्टर_04 // डीप_फील्ड",
  "Your next opportunity is just one booking away.": "आपका अगला अवसर बस एक बुकिंग दूर है।",
  "Plan ahead, stay ahead.": "पहले से योजना बनाएं, आगे बने रहें।",
  "Today's effort is tomorrow's achievement.": "आज की मेहनत ही कल की उपलब्धि है।",
  "Stay consistent. Progress follows.": "निरंतर बने रहें। प्रगति साथ आएगी।",
  "Our Foundation": "हमारी नींव",
  "The Intelligence Behind Astra.": "Astra के पीछे की बुद्धिमत्ता।",
  "Precision Over Prediction": "अनुमान से अधिक सटीकता",
  "Astra was built on one principle: clarity beats noise. We focus on what is measurable, meaningful, and actionable.": "Astra एक सिद्धांत पर बना है: स्पष्टता, शोर से बेहतर है। हमारा ध्यान मापने योग्य, सार्थक और उपयोगी बातों पर है।",
  "Modern Computation": "आधुनिक गणना",
  "We combine advanced computation with human judgment to turn complexity into elegant, useful decisions.": "हम जटिलता को सरल और उपयोगी निर्णयों में बदलने के लिए उन्नत गणना को मानवीय समझ के साथ जोड़ते हैं।",
  "Ethical Intelligence": "नैतिक बुद्धिमत्ता",
  "Our approach is thoughtful by design. We protect trust, respect privacy, and create value without compromise.": "हमारी सोच भरोसे की रक्षा करती है, गोपनीयता का सम्मान करती है और बिना समझौते के मूल्य बनाती है।",
  "In a world obsessed with certainty, we provide orientation.": "निश्चितता की खोज में लगी दुनिया को, हम सही दिशा दिखाते हैं।",
  "ASTRA SHOP": "ASTRA स्टोर",
  "Coming Soon": "जल्द आ रहा है",
  "Initiate Protocol": "संपर्क प्रक्रिया शुरू करें",
  "Executive Office": "कार्यकारी कार्यालय",
  "Secure Voice": "सुरक्षित फ़ोन",
  "Secure Channel": "सुरक्षित माध्यम",
  "Secure": "सुरक्षित",
  "Communication": "संचार",
  "Identity": "पहचान",
  "Full Name": "पूरा नाम",
  "Endpoint": "ईमेल पता",
  "Email Address": "ईमेल पता",
  "Context": "विवरण",
  "Brief details regarding your alignment query...": "अपने प्रश्न का संक्षिप्त विवरण लिखें...",
  "Transmit": "भेजें",
  "Your communication remains private\n              and protected.": "आपका संदेश निजी और सुरक्षित रखा जाएगा।",
  "CLOSE": "बंद करें",
  "Close": "बंद करें",
  "Loading services...": "सेवाएं लोड हो रही हैं...",
  "No services available.": "अभी कोई सेवा उपलब्ध नहीं है।",
  "Please enter a valid email": "कृपया मान्य ईमेल पता दर्ज करें",
  "Your email": "आपका ईमेल",
  "Notify Me": "मुझे सूचित करें",
  "Our cosmic collection is preparing for launch. Stay tuned and be the first to explore Astra's galactic treasures.": "हमारा अंतरिक्षीय संग्रह लॉन्च के लिए तैयार हो रहा है। जुड़े रहें और Astra के अद्भुत संग्रह को सबसे पहले देखें।",
  "Precision celestial intelligence platform delivering advanced astrological analytics, deep-space visualization and cosmic insights.": "उन्नत ज्योतिषीय विश्लेषण, अंतरिक्ष दृश्यांकन और ब्रह्मांडीय अंतर्दृष्टि देने वाला सटीक खगोलीय बुद्धिमत्ता मंच।",
  "Platform": "प्लेटफ़ॉर्म",
  "Live Readings": "लाइव रीडिंग",
  "Company": "कंपनी",
  "About Us": "हमारे बारे में",
  "Careers": "करियर",
  "Press": "प्रेस",
  "Legal": "कानूनी जानकारी",
  "Privacy Policy": "गोपनीयता नीति",
  "Terms of Service": "सेवा की शर्तें",
  "Security": "सुरक्षा",
  "Support": "सहायता",
  "© 2026 ASTRA OBSERVATORY. All rights reserved.": "© 2026 ASTRA OBSERVATORY. सर्वाधिकार सुरक्षित।",
  "English": "अंग्रेज़ी",
  "Hindi": "हिंदी",
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      return window.localStorage.getItem("astra-language") === "hi" ? "hi" : "en";
    } catch {
      return "en";
    }
  });
  const [theme, setTheme] = useState(() => {
    try {
      return window.localStorage.getItem("astra-theme") === "light" ? "light" : "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    document.documentElement.lang = language === "hi" ? "hi" : "en";
    try {
      window.localStorage.setItem("astra-language", language);
    } catch {
      // Language still works for this session when storage is unavailable.
    }
  }, [language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem("astra-theme", theme);
    } catch {
      // Theme still works for this session when storage is unavailable.
    }
  }, [theme]);

  const value = {
    language,
    setLanguage,
    toggleLanguage: () => setLanguage((current) => current === "en" ? "hi" : "en"),
    theme,
    toggleTheme: () => setTheme((current) => current === "dark" ? "light" : "dark"),
    t: (text) => language === "hi" ? hindiTranslations[text] ?? text : text,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
