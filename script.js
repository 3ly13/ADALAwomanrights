// Loader safety: the page must never remain trapped behind the splash screen.
const revealPageLoader = () => {
  const loader = document.getElementById("pageLoader");
  if (loader) {
    loader.classList.add("hidden");
    loader.classList.add("hide");
  }
};
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(revealPageLoader, 350);
  }, { once: true });
} else {
  window.setTimeout(revealPageLoader, 350);
}
window.setTimeout(revealPageLoader, 2500);

// ADALA — FINAL interaction system
// Single clean interaction layer. No duplicate patches or override chains.

const countries = {

    egypt: {
        code: "EG",
        name: "Egypt",
        arabic: "مصر",
        region: "North Africa",

        emergency: [
            {
                label: "Police",
                arabic: "الشرطة",
                number: "122"
            },
            {
                label: "Ambulance",
                arabic: "الإسعاف",
                number: "123"
            },
            {
                label: "Fire / Civil Defense",
                arabic: "الحماية المدنية",
                number: "180"
            },
            {
                label: "Cybercrime",
                arabic: "مكافحة جرائم المعلومات",
                number: "108"
            }
        ],

        official:
            "https://www.moi.gov.eg/"
    },


    saudiArabia: {
        code: "SA",
        name: "Saudi Arabia",
        arabic: "السعودية",
        region: "Gulf",

        emergency: [
            {
                label: "Police",
                arabic: "الشرطة",
                number: "999"
            },
            {
                label: "Ambulance",
                arabic: "الهلال الأحمر",
                number: "997"
            },
            {
                label: "Civil Defense",
                arabic: "الدفاع المدني",
                number: "998"
            },
            {
                label: "Unified Emergency",
                arabic: "الطوارئ الموحد",
                number: "911"
            },
            {
                label: "Health",
                arabic: "وزارة الصحة",
                number: "937"
            },
            {
                label: "Road Security",
                arabic: "أمن الطرق",
                number: "996"
            }
        ],

        official:
            "https://my.gov.sa/"
    },


    uae: {
        code: "AE",
        name: "United Arab Emirates",
        arabic: "الإمارات العربية المتحدة",
        region: "Gulf",

        emergency: [
            {
                label: "Police",
                arabic: "الشرطة",
                number: "999"
            },
            {
                label: "Ambulance",
                arabic: "الإسعاف",
                number: "998"
            },
            {
                label: "Fire / Civil Defense",
                arabic: "الدفاع المدني",
                number: "997"
            },
            {
                label: "Electricity",
                arabic: "الكهرباء",
                number: "991"
            },
            {
                label: "Coast Guard",
                arabic: "حرس السواحل",
                number: "996"
            },
            {
                label: "Search & Rescue",
                arabic: "البحث والإنقاذ",
                number: "995"
            }
        ],

        official:
            "https://u.ae/"
    },


    jordan: {
        code: "JO",
        name: "Jordan",
        arabic: "الأردن",
        region: "Levant",

        emergency: [
            {
                label: "Police",
                arabic: "الشرطة",
                number: "911"
            },
            {
                label: "Ambulance",
                arabic: "الإسعاف",
                number: "193"
            },
            {
                label: "Fire Department",
                arabic: "الدفاع المدني",
                number: "199"
            },
            {
                label: "Family Protection",
                arabic: "حماية الأسرة والأحداث",
                number: "06-5815826"
            }
        ],

        official:
            "https://jordan.gov.jo/"
    },


    kuwait: {
        code: "KW",
        name: "Kuwait",
        arabic: "الكويت",
        region: "Gulf",

        emergency: [
            {
                label: "Police",
                arabic: "الشرطة",
                number: "112"
            },
            {
                label: "Ambulance",
                arabic: "الإسعاف",
                number: "112"
            },
            {
                label: "Firefighters",
                arabic: "الإطفاء",
                number: "112"
            },
            {
                label: "Electricity & Water",
                arabic: "الكهرباء والماء",
                number: "152"
            },
            {
                label: "Civil Defense",
                arabic: "الدفاع المدني",
                number: "1804000"
            },
            {
                label: "Coast Guard",
                arabic: "خفر السواحل",
                number: "1880888"
            }
        ],

        official:
            "https://www.e.gov.kw/"
    },


    bahrain: {
        code: "BH",
        name: "Bahrain",
        arabic: "البحرين",
        region: "Gulf",

        emergency: [
            {
                label: "Police",
                arabic: "الشرطة",
                number: "999"
            },
            {
                label: "Ambulance",
                arabic: "الإسعاف",
                number: "999"
            },
            {
                label: "Fire",
                arabic: "الإطفاء",
                number: "999"
            },
            {
                label: "Police Hotline",
                arabic: "خط الشرطة",
                number: "80008008"
            }
        ],

        official:
            "https://www.bahrain.gov.bh/"
    },


    qatar: {
        code: "QA",
        name: "Qatar",
        arabic: "قطر",
        region: "Gulf",

        emergency: [
            {
                label: "Police",
                arabic: "الشرطة",
                number: "999"
            },
            {
                label: "Ambulance",
                arabic: "الإسعاف",
                number: "999"
            },
            {
                label: "Fire",
                arabic: "الإطفاء",
                number: "999"
            }
        ],

        official:
            "https://www.gov.qa/"
    },


    oman: {
        code: "OM",
        name: "Oman",
        arabic: "عُمان",
        region: "Gulf",

        emergency: [
            {
                label: "Emergency",
                arabic: "الطوارئ",
                number: "9999"
            },
            {
                label: "Domestic Violence",
                arabic: "العنف الأسري",
                number: "80077788"
            },
            {
                label: "Child Abuse",
                arabic: "إساءة معاملة الأطفال",
                number: "1100"
            },
            {
                label: "Cybercrime",
                arabic: "الجرائم الإلكترونية",
                number: "80077444"
            },
            {
                label: "Water",
                arabic: "المياه",
                number: "1442"
            },
            {
                label: "Electricity",
                arabic: "الكهرباء",
                number: "80070008"
            }
        ],

        official:
            "https://gov.om/"
    },


    iraq: {
        code: "IQ",
        name: "Iraq",
        arabic: "العراق",
        region: "Levant / Mesopotamia",

        emergency: [
            {
                label: "Police",
                arabic: "الشرطة",
                number: "104"
            },
            {
                label: "Fire",
                arabic: "الإطفاء",
                number: "115"
            },
            {
                label: "Joint Operations",
                arabic: "العمليات المشتركة",
                number: "130"
            },
            {
                label: "Family & Child Protection",
                arabic: "حماية الأسرة والطفل",
                number: "139"
            }
        ],

        official:
            "https://ur.gov.iq/"
    },


    lebanon: {
        code: "LB",
        name: "Lebanon",
        arabic: "لبنان",
        region: "Levant",

        emergency: [
            {
                label: "Police",
                arabic: "قوى الأمن الداخلي",
                number: "112"
            },
            {
                label: "Red Cross",
                arabic: "الصليب الأحمر",
                number: "140"
            },
            {
                label: "Civil Defense",
                arabic: "الدفاع المدني",
                number: "125"
            }
        ],

        official:
            "https://www.gov.lb/"
    },


    syria: {
        code: "SY",
        name: "Syria",
        arabic: "سوريا",
        region: "Levant",

        emergency: [
            {
                label: "Police",
                arabic: "الشرطة",
                number: "112"
            },
            {
                label: "Fire",
                arabic: "الإطفاء",
                number: "113"
            },
            {
                label: "Ambulance",
                arabic: "الإسعاف",
                number: "110"
            }
        ],

        official:
            "https://www.egov.sy/"
    },


    palestine: {
        code: "PS",
        name: "Palestine",
        arabic: "فلسطين",
        region: "Levant",

        emergency: [
            {
                label: "Police",
                arabic: "الشرطة",
                number: "100"
            },
            {
                label: "Civil Defense",
                arabic: "الدفاع المدني",
                number: "102"
            },
            {
                label: "Central Operations",
                arabic: "العمليات المركزية",
                number: "109"
            }
        ],

        official:
            "https://www.palestine.ps/"
    },


    morocco: {
        code: "MA",
        name: "Morocco",
        arabic: "المغرب",
        region: "North Africa",

        emergency: [
            {
                label: "Police",
                arabic: "الشرطة",
                number: "19"
            },
            {
                label: "Ambulance / Fire",
                arabic: "الإسعاف / الإطفاء",
                number: "15"
            },
            {
                label: "Royal Gendarmerie",
                arabic: "الدرك الملكي",
                number: "177"
            }
        ],

        official:
            "https://www.maroc.ma/"
    },


    algeria: {
        code: "DZ",
        name: "Algeria",
        arabic: "الجزائر",
        region: "North Africa",

        emergency: [
            {
                label: "Police",
                arabic: "الشرطة",
                number: "1548"
            },
            {
                label: "Civil Protection",
                arabic: "الحماية المدنية",
                number: "14"
            },
            {
                label: "Gendarmerie",
                arabic: "الدرك الوطني",
                number: "1055"
            }
        ],

        official:
            "https://www.algeria.dz/"
    },


    tunisia: {
        code: "TN",
        name: "Tunisia",
        arabic: "تونس",
        region: "North Africa",

        emergency: [
            {
                label: "Police",
                arabic: "الشرطة",
                number: "197"
            },
            {
                label: "Ambulance",
                arabic: "الإسعاف",
                number: "190"
            },
            {
                label: "Fire",
                arabic: "الحماية المدنية",
                number: "198"
            }
        ],

        official:
            "https://www.tunisie.gov.tn/"
    },


    libya: {
        code: "LY",
        name: "Libya",
        arabic: "ليبيا",
        region: "North Africa",

        emergency: [
            {
                label: "Police",
                arabic: "الشرطة",
                number: "1515"
            },
            {
                label: "Ambulance",
                arabic: "الإسعاف",
                number: "191"
            },
            {
                label: "Civil Defense",
                arabic: "الدفاع المدني",
                number: "1515"
            }
        ],

        official:
            "https://www.pm.gov.ly/"
    },


    mauritania: {
        code: "MR",
        name: "Mauritania",
        arabic: "موريتانيا",
        region: "Northwest Africa",

        emergency: [
            {
                label: "Police",
                arabic: "الشرطة",
                number: "117"
            },
            {
                label: "Fire",
                arabic: "الإطفاء",
                number: "118"
            },
            {
                label: "Gendarmerie",
                arabic: "الدرك",
                number: "116"
            }
        ],

        official:
            "https://www.gov.mr/"
    },


    sudan: {
        code: "SD",
        name: "Sudan",
        arabic: "السودان",
        region: "Northeast Africa",

        emergency: [
            {
                label: "Police",
                arabic: "الشرطة",
                number: "999"
            },
            {
                label: "Ambulance",
                arabic: "الإسعاف",
                number: "999"
            },
            {
                label: "Civil Defense",
                arabic: "الدفاع المدني",
                number: "998"
            }
        ],

        official:
            "https://www.sudan.gov.sd/"
    },


    somalia: {
        code: "SO",
        name: "Somalia",
        arabic: "الصومال",
        region: "Horn of Africa",

        emergency: [
            {
                label: "Police",
                arabic: "الشرطة",
                number: "888"
            },
            {
                label: "Ambulance",
                arabic: "الإسعاف",
                number: "999"
            }
        ],

        official:
            "https://www.gov.so/"
    },


    djibouti: {
        code: "DJ",
        name: "Djibouti",
        arabic: "جيبوتي",
        region: "Horn of Africa",

        emergency: [
            {
                label: "Police",
                arabic: "الشرطة",
                number: "17"
            },
            {
                label: "Fire",
                arabic: "الإطفاء",
                number: "18"
            },
            {
                label: "Ambulance",
                arabic: "الإسعاف",
                number: "19"
            }
        ],

        official:
            "https://www.presidence.dj/"
    },


    comoros: {
        code: "KM",
        name: "Comoros",
        arabic: "جزر القمر",
        region: "Indian Ocean",

        emergency: [
            {
                label: "Police",
                arabic: "الشرطة",
                number: "17"
            },
            {
                label: "Fire",
                arabic: "الإطفاء",
                number: "18"
            },
            {
                label: "Ambulance",
                arabic: "الإسعاف",
                number: "772-03-73"
            }
        ],

        official:
            "https://www.beit-salam.km/"
    },

    yemen: {
        code: "YE",
        name: "Yemen",
        arabic: "اليمن",
        region: "Arabian Peninsula",
        emergency: [
            { label: "Police", arabic: "الشرطة", number: "199" },
            { label: "Ambulance", arabic: "الإسعاف", number: "191" },
            { label: "Civil Defense", arabic: "الدفاع المدني", number: "191" }
        ],
        official: "https://yemen.gov.ye/"
    }
};
const order=["morocco","algeria","tunisia","libya","mauritania","egypt","sudan","palestine","lebanon","syria","jordan","iraq","saudiArabia","kuwait","qatar","bahrain","uae","oman","yemen","djibouti","somalia","comoros"];

const translations={
  en:{
    navHome:"Home",navSupport:"Find Support",navExplore:"Explore",navRights:"The Law",navToolkit:"Toolkit",navResources:"Resources",navAbout:"About",
    heroKicker:"ADALA · ARAB REGION",heroTitle:"Where are you?",heroArabic:"Your support starts here.",heroText:"Choose your country to find emergency numbers, trusted support contacts, official resources and a clearer next step.",findSupport:"Find support",takeMoment:"Take a moment",trustOne:"Official resources",trustTwo:"22 Arab countries",trustThree:"Simple to use",heroCardTitle:"A clearer path to support.",heroCardText:"Start with your country, then tell ADALA what you need. You can explore rights, support and wellbeing tools in one place.",
    regionKicker:"ARAB REGION",chooseCountry:"Choose your country.",chooseText:"Tap a country on the map or choose it from Quick Access. Confirm your choice and ADALA will build the support panel around it.",countries:"countries",quickAccess:"QUICK ACCESS",findCountry:"Find your country",searchPlaceholder:"Search country...",noResults:"No country found.",mapKicker:"ARAB REGION",mapHint:"Select a country to view its information",mapSelectHint:"Tap a country",legendCountry:"Arab country",legendSelected:"Selected",mapTip:"Each country opens its own support panel",
    safetyKicker:"YOUR SAFETY MATTERS",selectCountry:"Choose a country to begin.",selectText:"Your country gives ADALA the context it needs to show the right emergency information, official resources and support pathways.",
    confirmKicker:"CONFIRM YOUR COUNTRY",confirmText:"Is this the country you want to use? ADALA will connect the rest of the experience to this country.",confirm:"Confirm country",chooseAnother:"Choose another",
    countryInfo:"COUNTRY INFORMATION",capital:"Capital",viewDetails:"View details",openOfficial:"Open official website",emergency:"Emergency numbers",officialResources:"Official resources",government:"Government / official resource",openResource:"Open official website",call:"Call →",supportNote:"Use official national sources for the latest information. Emergency numbers can change, so verify important details when possible.",
    lawKicker:"WOMEN'S RIGHTS · PLAIN LANGUAGE",lawTitle:"Understand your rights before you act.",lawText:"Choose a topic and country to explore women’s rights in simple everyday language. Lamar can help you find the right topic from your situation.",lawCountryLabel:"YOUR COUNTRY",lawNotSelected:"Not selected",lawGuideKicker:"RIGHTS GUIDE",lawChooseTopic:"Choose a rights topic",lawChooseText:"Pick the area closest to your question. Then use your chosen country to make the next steps more relevant.",lawUseCountry:"Use chosen country",lawMeaning:"What does this mean?",lawCheck:"What to check",lawNext:"Clear next step",lawSource:"Official source",lawNoCountry:"Choose a country first so ADALA can connect this topic to the right national context.",lawNoTopic:"Choose a topic from the list to start.",lawOpenSource:"Open official source →",
    toolKicker:"YOUR TOOLKIT",toolTitle:"Small steps can matter.",toolText:"Use these tools when you need a moment to breathe, write, set a boundary, build confidence or work out what to do next.",breathTitle:"Reset & breathe",breathText:"A short guided breathing activity designed to create a calm moment.",startActivity:"Start activity",journalTitle:"Confess & journal",journalText:"A private space to write what is on your mind, with prompts when you need a starting point.",explorePrompts:"Open writing space",boundaryTitle:"Boundaries",boundaryText:"Practice simple ways to communicate what feels okay and what does not.",learnMore:"Open tool",confidenceTitle:"Confidence",confidenceText:"Small exercises for noticing your strengths and building healthy confidence.",optionsTitle:"Know your options",optionsText:"Turn a confusing situation into a few clear choices and a next step.",supportTrioTitle:"Support your trio",supportTrioText:"Write down three people or services you could reach out to when you need support.",
    exploreKicker:"EXPLORE ADALA",exploreTitle:"Support should feel easier to find.",exploreText:"ADALA connects country information, rights, tools and Lamar so you do not have to figure out where to start on your own.",exploreCountries:"Choose your country",step1Title:"Find your country",step1Text:"Use the map or Quick Access list.",step2Title:"Understand the situation",step2Text:"Use Lamar or The Law to turn a question into something clearer.",step3Title:"Take the next step",step3Text:"Use trusted help, official sources or a wellbeing tool that fits your situation.",
    lamarTitle:"Meet Lamar.",lamarText:"A warm, conversational ADALA guide that helps you understand what you need, find the right part of the website and take one step at a time.",talkLamar:"Talk to Lamar",resourceKicker:"TRUSTED INFORMATION",resourceTitle:"Start with what helps.",resourceText:"Use ADALA as a guide, then verify important legal and emergency information with official national sources.",emergencyHelp:"Emergency help",emergencyHelpText:"Select a country to view its emergency numbers and official resources.",findNumber:"Find support →",officialSources:"Official sources",officialSourcesText:"Open the national government resource connected to your selected country.",exploreSources:"Explore sources →",wellbeing:"Personal wellbeing",wellbeingText:"Use the Toolkit when you need space to breathe, reflect or work through something.",openToolkit:"Open toolkit →",aboutTitle:"A clearer path to support.",aboutText:"ADALA is built around one idea: important support should be easier to find, understand and act on. It brings country information, rights guidance, wellbeing tools and a conversational guide together in one place.",aboutArabic:"عدالة تجمع المعلومات والحقوق وأدوات الدعم في مساحة أوضح وأسهل استخدامًا.",
    calmTitle:"Take a moment.",calmText:"Follow the circle at your own comfortable pace. Begin starts the cycle and Stop returns you to ready.",begin:"Begin",stop:"Stop",close:"Close",ready:"Ready",breathe:"Breathe",inhale:"Breathe in",hold:"Hold",exhale:"Breathe out",rest:"Rest",stopped:"Paused",save:"Save",saved:"Saved on this device.",newPrompt:"New prompt",
    journalIntro:"You do not need perfect words. Write honestly, write briefly, or leave it blank and just read the prompt.",writeHere:"Write here",writePlaceholder:"Write whatever you need to get out...",strengthPrompt:"Write down three strengths you have.",strengthPlaceholder:"1.\n2.\n3.",
    boundariesIntro:"A boundary is a clear statement about what feels okay for you and what does not. You can be respectful and still be firm.",boundaryExamples:["I’m not comfortable with that.","I need time to think before I answer.","Please don’t share that information about me.","I said no, and I need that to be respected."],
    confidenceIntro:"Confidence is not about feeling fearless. It can grow through small actions and noticing what you already do well.",confidencePrompt:"Write down three strengths you have and one small thing you handled well recently.",
    optionsIntro:"You do not need to solve everything at once. Start by naming the situation, then choose the kind of next step you need.",optionsSteps:["Understand what is happening.","Identify what feels uncomfortable or unsafe.","Choose a trusted person, official service or practical boundary.","Check the relevant rights topic if the situation involves a legal question."],
    trioIntro:"Your support trio can be three trusted people, services or organizations. You decide who belongs there.",trioLabels:["Person / service 1","Person / service 2","Person / service 3"],trioPlaceholder:"Name a trusted person or service...",
    lamarHello:"Heyyy 💜 I’m Lamar. I’m really glad you’re here. You do not need the perfect words or even know what section you need. Just tell me what’s going on in your own way and we’ll figure out where to start together.",lamarGreeting:"Heyy 💜 What’s on your mind? You can ask me about your rights, your country, something that happened, or you can literally just tell me how you’re feeling.",lamarNeedCountry:"I can absolutely help with that. First, what country are you in? You can choose it from the map or Quick Access, and I’ll connect the rest of the guidance to that country.",lamarRights:"Of course 💜 Tell me what happened in your own words. You do not need legal language. I can help you figure out which rights topic fits, what to check and what a sensible next step could be.",lamarEmergency:"If you need emergency information, choose your country in Find Support and I’ll show the available numbers and official resources. If you’re in immediate danger, contact local emergency services or a trusted person who can help you get somewhere safe.",lamarBreath:"Yeah, we can slow everything down for a second 💜 I can take you to Reset & breathe. Begin starts the circle and Stop brings it back to ready. You can also just stay here and talk to me.",lamarJournal:"Come here 💜 The Confess & Journal tool gives you a real space to write. You can use a prompt or completely ignore the prompt and write whatever you need.",lamarBoundary:"Your comfort matters. If something feels wrong or too much, you are allowed to pause, say no, ask for space or ask someone you trust for help. If you tell me what kind of situation it is, I can help you think through the next step.",lamarConfidence:"You do not have to suddenly become super confident. Let’s make it smaller. Tell me one thing you handled well recently, even if it seems tiny, and we can build from there.",lamarSad:"I’m sorry you’re carrying that right now 💜 You don’t have to make it sound neat for me. If you want, tell me what happened, or just tell me what part of the day has felt hardest. I’ll listen and help you work out what might make the next little bit easier.",lamarAnxious:"That sounds really overwhelming 💜 Let’s make it smaller instead of trying to fix everything at once. Do you want to talk about what is making you anxious, or would you rather start with the breathing tool for a minute?",
    lamarPressured:"If you feel pressured into something you do not want, that feeling matters 💜 You are allowed to slow down and ask for space. Tell me whether the pressure is coming from a person, family, school/work, online, or somewhere else and I’ll help you think through your options.",lamarHarassment:"I’m sorry you’re dealing with that 💜 We can take it one step at a time. If it’s online, The Law has a Cyber harassment section and Find Support can connect you to country-specific resources. You can tell me what kind of situation it is without sharing names or private details.",lamarSchool:"Got you 💜 If this is happening at school or university, tell me a little about what’s going on and whether it feels like a rights question, bullying/harassment, a boundary issue, or something else. I’ll help you choose the right path.",lamarWork:"Okay 💜 If this is about work, we can look at Employment or Equal treatment and then connect it to your country’s official context. Tell me what happened without sharing private names or documents.",lamarGeneric:"I’m here with you 💜 Tell me a little more. You can start with just one sentence: what happened, how you’re feeling, or what you wish you knew. I’ll help you sort it into the right ADALA path.",
    arabicLamarHello:"أهلًااا 💜 أنا لامار. مبسوطة إنكِ هنا. مش محتاجة تختاري القسم الصح أو تستخدمي كلام رسمي. احكي لي بطريقتكِ وأنا أساعدكِ نعرف نبدأ منين خطوة خطوة.",arabicLamarGreeting:"أهلًا 💜 إيه اللي في بالك؟ ممكن تسأليني عن حقوقكِ أو بلدكِ أو موقف حصل، أو حتى تقولي لي بس إنتِ حاسة بإيه.",arabicLamarRights:"طبعًا 💜 احكي لي اللي حصل بطريقتكِ ومن غير أي مصطلحات قانونية. وأنا أساعدكِ نحدد موضوع الحقوق المناسب وإيه اللي محتاج يتراجع وإيه الخطوة اللي ممكن تبدأي بيها.",arabicLamarEmergency:"لو محتاجة معلومات الطوارئ، اختاري بلدكِ من قسم العثور على الدعم وأنا هعرض لكِ الأرقام والمصادر الرسمية المتاحة. ولو في خطر فوري، تواصلي مع خدمات الطوارئ المحلية أو شخص موثوق يقدر يساعدكِ في الوصول لمكان آمن.",arabicLamarBreath:"آه، نقدر نهدي كل حاجة دقيقة 💜 افتحي أداة التنفس. زر ابدئي يشغّل الدائرة وزر توقفي يرجعها للوضع الهادئ. وممكن كمان تفضلي هنا وتحكي لي براحتكِ.",arabicLamarJournal:"تعالي هنا 💜 أداة فضفضي واكتبي فيها مساحة حقيقية للكتابة. استخدمي سؤالًا أو سيبيه واكتبي أي حاجة محتاجة تطلعيها من دماغكِ.",arabicLamarBoundary:"راحتكِ مهمة. لو حاجة مش مريحة، من حقكِ توقفي أو تقولي لا أو تطلبي مساحة أو تستعيني بشخص تثقي فيه. لو قلتي لي نوع الموقف، أقدر أساعدكِ نفكر في الخطوة اللي بعدها.",arabicLamarConfidence:"مش لازم تصحي فجأة وتبقي واثقة في كل حاجة 💜 خلينا نصغرها. قولي لي حاجة واحدة تعاملتِ معاها كويس مؤخرًا، حتى لو بسيطة جدًا، ونبني عليها.",arabicLamarSad:"أنا آسفة إنكِ شايلة الإحساس ده دلوقتي 💜 مش لازم ترتبي كلامكِ. لو تحبي قولي لي إيه اللي حصل، أو حتى إيه أكتر جزء من اليوم كان صعب عليكِ. أنا هسمعكِ ونفكر سوا في حاجة تخلي الخطوة الجاية أهدى.",arabicLamarAnxious:"ده شكله مرهق جدًا 💜 خلينا نصغر الموضوع بدل ما نحاول نحل كل حاجة مرة واحدة. تحبي تحكي لي إيه اللي موترك، ولا نبدأ بدقيقة تنفس الأول؟",arabicLamarPressured:"لو حاسة إن حد بيضغط عليكِ تعملي حاجة مش عايزاها، إحساسكِ مهم 💜 من حقكِ تهدي وتطلبي مساحة. قولي لي الضغط جاي من شخص، الأسرة، المدرسة/الشغل، أونلاين، ولا مكان تاني وأنا أساعدكِ نفكر في الخيارات.",arabicLamarHarassment:"أنا آسفة إنكِ بتتعرضي لده 💜 ناخدها خطوة خطوة. لو الموضوع أونلاين، عندنا قسم المضايقة الإلكترونية في القانون، وقسم العثور على الدعم يوصلكِ بمصادر مرتبطة ببلدكِ. احكي لي نوع الموقف من غير أسماء أو تفاصيل شخصية.",arabicLamarGeneric:"أنا معاكي 💜 احكي لي أكتر شوية. ممكن تبدأي بجملة واحدة بس: إيه اللي حصل، إنتِ حاسة بإيه، أو إيه الحاجة اللي نفسكِ تعرفيها. وأنا أساعدكِ نرتبها في المسار المناسب داخل عدالة."
  },
  ar:{
    navHome:"الرئيسية",navSupport:"العثور على الدعم",navExplore:"استكشفي",navRights:"القانون",navToolkit:"الأدوات",navResources:"المصادر",navAbout:"عن عدالة",
    heroKicker:"عدالة · المنطقة العربية",heroTitle:"أين أنتِ؟",heroArabic:"دعمك يبدأ من هنا.",heroText:"اختاري بلدكِ للوصول إلى أرقام الطوارئ وجهات الدعم والمصادر الرسمية والخطوة التالية بشكل أوضح.",findSupport:"العثور على الدعم",takeMoment:"خذي لحظة",trustOne:"مصادر رسمية",trustTwo:"22 دولة عربية",trustThree:"سهل الاستخدام",heroCardTitle:"طريق أوضح للوصول إلى الدعم.",heroCardText:"ابدئي ببلدكِ ثم أخبري عدالة بما تحتاجينه. يمكنكِ استكشاف الحقوق والدعم وأدوات العافية في مكان واحد.",
    regionKicker:"المنطقة العربية",chooseCountry:"اختاري بلدكِ.",chooseText:"اضغطي على دولة في الخريطة أو اختاريها من الوصول السريع. أكدي اختياركِ وستبني عدالة لوحة الدعم حول بلدكِ.",countries:"دولة",quickAccess:"وصول سريع",findCountry:"ابحثي عن بلدكِ",searchPlaceholder:"ابحثي عن دولة...",noResults:"لم يتم العثور على دولة.",mapKicker:"المنطقة العربية",mapHint:"اختاري دولة لعرض معلوماتها",mapSelectHint:"اضغطي على دولة",legendCountry:"دولة عربية",legendSelected:"محددة",mapTip:"كل دولة تفتح لوحة الدعم الخاصة بها",
    safetyKicker:"سلامتكِ تهمنا",selectCountry:"اختاري دولة للبدء.",selectText:"اختيار بلدكِ يعطي عدالة السياق اللازم لعرض معلومات الطوارئ والمصادر الرسمية ومسارات الدعم المناسبة.",
    confirmKicker:"تأكيد الدولة",confirmText:"هل هذه هي الدولة التي تريدين استخدامها؟ ستربط عدالة بقية التجربة بهذه الدولة.",confirm:"تأكيد الدولة",chooseAnother:"اختيار دولة أخرى",
    countryInfo:"معلومات الدولة",capital:"العاصمة",viewDetails:"عرض التفاصيل",openOfficial:"فتح الموقع الرسمي",emergency:"أرقام الطوارئ",officialResources:"المصادر الرسمية",government:"المصدر الحكومي / الرسمي",openResource:"فتح الموقع الرسمي",call:"اتصال ←",supportNote:"استخدمي المصادر الوطنية الرسمية للحصول على أحدث المعلومات. قد تتغير أرقام الطوارئ، لذلك تحققي من التفاصيل المهمة عندما يكون ذلك ممكنًا.",
    lawKicker:"حقوق المرأة · بلغة بسيطة",lawTitle:"افهمي حقوقكِ قبل أن تتخذي الخطوة التالية.",lawText:"اختاري موضوعًا وبلدًا لاستكشاف حقوق المرأة بلغة يومية بسيطة. ويمكن للامار مساعدتكِ في تحديد الموضوع المناسب من خلال الموقف الذي تحكينه.",lawCountryLabel:"بلدكِ",lawNotSelected:"لم يتم الاختيار",lawGuideKicker:"دليل الحقوق",lawChooseTopic:"اختاري موضوعًا من الحقوق",lawChooseText:"اختاري المجال الأقرب لسؤالكِ ثم استخدمي بلدكِ المختار لجعل الخطوات التالية أكثر ارتباطًا بموقفكِ.",lawUseCountry:"استخدمي البلد المختار",lawMeaning:"ماذا يعني هذا؟",lawCheck:"ما الذي يجب التحقق منه؟",lawNext:"الخطوة التالية",lawSource:"المصدر الرسمي",lawNoCountry:"اختاري بلدًا أولًا حتى تربط عدالة الموضوع بالسياق الوطني الصحيح.",lawNoTopic:"اختاري موضوعًا من القائمة للبدء.",lawOpenSource:"فتح المصدر الرسمي ←",
    toolKicker:"أدواتكِ",toolTitle:"الخطوات الصغيرة قد تصنع فرقًا.",toolText:"استخدمي هذه الأدوات عندما تحتاجين إلى لحظة تنفس أو كتابة أو حدود أو ثقة أو طريقة أوضح للتفكير في الخطوة التالية.",breathTitle:"تنفسي واهدئي",breathText:"تمرين تنفس قصير وموجّه يساعدكِ على أخذ لحظة هادئة.",startActivity:"ابدئي التمرين",journalTitle:"فضفضي واكتبي",journalText:"مساحة خاصة للكتابة مع أسئلة تساعدكِ عندما لا تعرفين من أين تبدئين.",explorePrompts:"افتحي مساحة الكتابة",boundaryTitle:"الحدود الشخصية",boundaryText:"تدرّبي على طرق بسيطة للتعبير عما يناسبكِ وما لا يناسبكِ.",learnMore:"افتحي الأداة",confidenceTitle:"الثقة بالنفس",confidenceText:"تمارين صغيرة لملاحظة نقاط قوتكِ وبناء ثقة صحية.",optionsTitle:"اعرفي خياراتكِ",optionsText:"حوّلي الموقف المربك إلى خيارات واضحة وخطوة تالية.",supportTrioTitle:"دائرة الدعم",supportTrioText:"اكتبي ثلاثة أشخاص أو جهات يمكنكِ اللجوء إليها عندما تحتاجين للدعم.",
    exploreKicker:"استكشفي عدالة",exploreTitle:"الوصول إلى الدعم يجب أن يكون أسهل.",exploreText:"تربط عدالة معلومات البلد والحقوق والأدوات ولامار حتى لا تضطري لمعرفة من أين تبدئين وحدكِ.",exploreCountries:"اختاري بلدكِ",step1Title:"اختاري بلدكِ",step1Text:"استخدمي الخريطة أو قائمة الوصول السريع.",step2Title:"افهمي الموقف",step2Text:"استخدمي لامار أو القانون لتحويل السؤال إلى شيء أوضح.",step3Title:"خذي الخطوة التالية",step3Text:"استخدمي الدعم الموثوق أو المصادر الرسمية أو أداة عافية تناسب موقفكِ.",
    lamarTitle:"قابلي لامار.",lamarText:"دليل عدالة دافئ وتفاعلي يساعدكِ على فهم ما تحتاجينه والعثور على الجزء المناسب من الموقع وأخذ خطوة واحدة في كل مرة.",talkLamar:"تحدثي مع لامار",resourceKicker:"معلومات موثوقة",resourceTitle:"ابدئي بما يساعدكِ.",resourceText:"استخدمي عدالة كدليل ثم تحققي من المعلومات القانونية ومعلومات الطوارئ المهمة عبر المصادر الوطنية الرسمية.",emergencyHelp:"مساعدة الطوارئ",emergencyHelpText:"اختاري بلدًا لعرض أرقام الطوارئ والمصادر الرسمية الخاصة به.",findNumber:"العثور على الدعم ←",officialSources:"المصادر الرسمية",officialSourcesText:"افتحي المصدر الحكومي الوطني المرتبط ببلدكِ المختار.",exploreSources:"استكشفي المصادر ←",wellbeing:"العافية الشخصية",wellbeingText:"استخدمي الأدوات عندما تحتاجين إلى التنفس أو التفكير أو التعامل مع موقف ما.",openToolkit:"افتحي الأدوات ←",aboutTitle:"طريق أوضح للوصول إلى الدعم.",aboutText:"بُنيت عدالة حول فكرة واحدة: يجب أن يكون الوصول إلى الدعم المهم وفهمه واتخاذ خطوة نحوه أسهل. لذلك تجمع معلومات الدول والحقوق وأدوات العافية ولامار في مكان واحد.",aboutArabic:"عدالة تجمع المعلومات والحقوق وأدوات الدعم في مساحة أوضح وأسهل استخدامًا.",
    calmTitle:"خذي لحظة.",calmText:"اتبعي الدائرة بالسرعة المريحة لكِ. زر ابدئي يشغّل الدورة وزر توقفي يعيدها إلى وضع الاستعداد.",begin:"ابدئي",stop:"توقفي",close:"إغلاق",ready:"جاهزة",breathe:"تنفسي",inhale:"شهيق",hold:"حبس",exhale:"زفير",rest:"راحة",stopped:"متوقفة",save:"حفظ",saved:"تم الحفظ على هذا الجهاز.",newPrompt:"سؤال جديد",
    journalIntro:"مش محتاجة كلام مثالي. اكتبي بصدق أو باختصار، أو حتى اتركي المساحة فاضية واقرئي السؤال فقط.",writeHere:"اكتبي هنا",writePlaceholder:"اكتبي أي شيء تحتاجين إلى إخراجه من داخلكِ...",strengthPrompt:"اكتبي ثلاث نقاط قوة لديكِ.",strengthPlaceholder:"1.\n2.\n3.",
    boundariesIntro:"الحدود هي طريقة واضحة للتعبير عما يناسبكِ وما لا يناسبكِ. يمكنكِ أن تكوني محترمة وحازمة في نفس الوقت.",boundaryExamples:["أنا مش مرتاحة للموضوع ده.","محتاجة وقت أفكر قبل ما أرد.","من فضلك ما تشاركيش المعلومة دي عني.","أنا قلت لا، ومحتاجة ده يتاحترم."],
    confidenceIntro:"الثقة لا تعني أنكِ لا تخافين أبدًا. يمكن أن تكبر بخطوات صغيرة وبملاحظة الأشياء التي تجيدينها بالفعل.",confidencePrompt:"اكتبي ثلاث نقاط قوة لديكِ وشيئًا صغيرًا تعاملتِ معه بشكل جيد مؤخرًا.",
    optionsIntro:"مش لازم تحلي كل شيء مرة واحدة. ابدئي بتسمية الموقف، ثم اختاري نوع الخطوة التالية التي تحتاجينها.",optionsSteps:["افهمي ما الذي يحدث.","حددي ما الذي يزعجكِ أو يجعلكِ غير مرتاحة.","اختاري شخصًا موثوقًا أو جهة رسمية أو حدًا عمليًا.","راجعي موضوع الحقوق المناسب إذا كان الموقف يتضمن سؤالًا قانونيًا."],
    trioIntro:"دائرة الدعم يمكن أن تكون ثلاثة أشخاص أو جهات أو خدمات تثقين بها. أنتِ من تختارين من يدخلها.",trioLabels:["الشخص / الجهة 1","الشخص / الجهة 2","الشخص / الجهة 3"],trioPlaceholder:"اكتبي اسم شخص أو جهة موثوقة...",
    lamarHello:"أهلًااا 💜 أنا لامار. مبسوطة إنكِ هنا. مش محتاجة تختاري القسم الصح أو تستخدمي كلام رسمي. احكي لي بطريقتكِ وأنا أساعدكِ نعرف نبدأ منين خطوة خطوة.",lamarGreeting:"أهلًا 💜 إيه اللي في بالك؟ ممكن تسأليني عن حقوقكِ أو بلدكِ أو موقف حصل، أو حتى تقولي لي بس إنتِ حاسة بإيه.",lamarNeedCountry:"أكيد أقدر أساعدكِ. الأول، إنتِ في أي بلد؟ اختاريها من الخريطة أو الوصول السريع وأنا هربط بقية الإرشاد ببلدكِ.",lamarRights:"طبعًا 💜 احكي لي اللي حصل بطريقتكِ ومن غير أي مصطلحات قانونية. وأنا أساعدكِ نحدد موضوع الحقوق المناسب وإيه اللي محتاج يتراجع وإيه الخطوة اللي ممكن تبدأي بيها.",lamarEmergency:"لو محتاجة معلومات الطوارئ، اختاري بلدكِ من قسم العثور على الدعم وأنا هعرض لكِ الأرقام والمصادر الرسمية المتاحة. ولو في خطر فوري، تواصلي مع خدمات الطوارئ المحلية أو شخص موثوق يقدر يساعدكِ في الوصول لمكان آمن.",lamarBreath:"آه، نقدر نهدي كل حاجة دقيقة 💜 افتحي أداة التنفس. زر ابدئي يشغّل الدائرة وزر توقفي يرجعها للوضع الهادئ. وممكن كمان تفضلي هنا وتحكي لي براحتكِ.",lamarJournal:"تعالي هنا 💜 أداة فضفضي واكتبي فيها مساحة حقيقية للكتابة. استخدمي سؤالًا أو سيبيه واكتبي أي حاجة محتاجة تطلعيها من دماغكِ.",lamarBoundary:"راحتكِ مهمة. لو حاجة مش مريحة، من حقكِ توقفي أو تقولي لا أو تطلبي مساحة أو تستعيني بشخص تثقي فيه. لو قلتي لي نوع الموقف، أقدر أساعدكِ نفكر في الخطوة اللي بعدها.",lamarConfidence:"مش لازم تصحي فجأة وتبقي واثقة في كل حاجة 💜 خلينا نصغرها. قولي لي حاجة واحدة تعاملتِ معاها كويس مؤخرًا، حتى لو بسيطة جدًا، ونبني عليها.",lamarSad:"أنا آسفة إنكِ شايلة الإحساس ده دلوقتي 💜 مش لازم ترتبي كلامكِ. لو تحبي قولي لي إيه اللي حصل، أو حتى إيه أكتر جزء من اليوم كان صعب عليكِ. أنا هسمعكِ ونفكر سوا في حاجة تخلي الخطوة الجاية أهدى.",lamarAnxious:"ده شكله مرهق جدًا 💜 خلينا نصغر الموضوع بدل ما نحاول نحل كل حاجة مرة واحدة. تحبي تحكي لي إيه اللي موترك، ولا نبدأ بدقيقة تنفس الأول؟",lamarPressured:"لو حاسة إن حد بيضغط عليكِ تعملي حاجة مش عايزاها، إحساسكِ مهم 💜 من حقكِ تهدي وتطلبي مساحة. قولي لي الضغط جاي من شخص، الأسرة، المدرسة/الشغل، أونلاين، ولا مكان تاني وأنا أساعدكِ نفكر في الخيارات.",lamarHarassment:"أنا آسفة إنكِ بتتعرضي لده 💜 ناخدها خطوة خطوة. لو الموضوع أونلاين، عندنا قسم المضايقة الإلكترونية في القانون، وقسم العثور على الدعم يوصلكِ بمصادر مرتبطة ببلدكِ. احكي لي نوع الموقف من غير أسماء أو تفاصيل شخصية.",lamarSchool:"تمام 💜 لو الموضوع في المدرسة أو الجامعة، قولي لي شوية عن اللي بيحصل وهل هو سؤال حقوق أو تنمر/مضايقة أو مشكلة حدود أو حاجة تانية. وأنا أساعدكِ تختاري الطريق المناسب.",lamarWork:"تمام 💜 لو الموضوع في الشغل، نقدر نبدأ من العمل أو المعاملة المتساوية ونربطه بسياق بلدكِ الرسمي. احكي لي اللي حصل من غير أسماء أو مستندات شخصية.",lamarGeneric:"أنا معاكي 💜 احكي لي أكتر شوية. ممكن تبدأي بجملة واحدة بس: إيه اللي حصل، إنتِ حاسة بإيه، أو إيه الحاجة اللي نفسكِ تعرفيها. وأنا أساعدكِ نرتبها في المسار المناسب داخل عدالة."
  }
};

// New experience copy: Toolkit + Explore + pathway demo
Object.assign(translations.en, {
  toolTitle:"Your personal space to move forward.",
  toolText:"Keep what matters together, build confidence, and test what you know about your rights.",
  toolGoal:"Where justice is a right, not a privilege.",
  toolGoalText:"Every tool is designed to turn knowledge into something you can actually use.",
  cabinetTitle:"Information Cabinet", cabinetText:"Your private prototype space for documents, screenshots, notes, important contacts, requirements and case progress.", pathwayProgress:"Your current pathway", openCabinet:"Open cabinet", cabinetSaved:"Saved only on this device in the prototype.",
  confidenceBuilderTitle:"Confidence Builder", confidenceBuilderText:"A living space for women’s worth, knowledge and voices, with videos, books, stories and statements.", enterConfidence:"Enter space",
  knowledgeTestTitle:"Rights Knowledge Test", knowledgeTestText:"How well do you know your rights? Try short situations, get instant feedback, and learn as you go.", quizMini:"6 questions · instant feedback", startTest:"Start test",
  exploreTitle:"More than information. A way forward.", exploreText:"Explore the tools that help you understand, prepare, find help and follow up without having to know legal terminology first.",
  exploreRights:"Rights & Laws", exploreRightsText:"Understand the laws relevant to you.", exploreDocument:"Explain a Document", exploreDocumentText:"Paste confusing text and turn it into plain language.", exploreWhere:"Where Do I Go?", exploreWhereText:"Find the institution or service relevant to your situation.", exploreLegal:"Find Legal Help", exploreLegalText:"Locate legal-aid and trusted support resources.", exploreSearch:"Search Rights", exploreSearchText:"Ask naturally instead of searching legal terminology.", exploreMissing:"What Am I Missing?", exploreMissingText:"Check your situation for missing requirements and preparation steps.", exploreTranslate:"Translate & Explain", exploreTranslateText:"Arabic ↔ English with plain-language explanations.", exploreFollowups:"My Follow-Ups", exploreFollowupsText:"Keep deadlines and next steps visible.", exploreBigTitle:"What should I do?", exploreBigText:"You do not need to know the name of a law first. Start with what happened, and ADALA helps turn it into a clear pathway.", reviewsTitle:"What people could say about ADALA.", reviewOne:"“It finally feels like I can explain what happened without knowing the legal words first.”", reviewTwo:"“I like that it gives me a next step instead of just giving me a page of information.”", reviewThree:"“The country information and Lamar make the whole thing feel connected.”",
  demoSituation:"Demo pathway: unpaid wages", demoUser:"My employer hasn’t paid me for two months.", demoIntro:"Okay 💜 let’s slow it down and make this practical. I’ll ask a few questions first so the pathway fits your situation.", demoQ1:"Are you currently still working for the employer, and do you have anything showing the agreed pay (contract, messages, payslips or bank records)?", demoQ2:"What country are you in, and roughly when was the last payment you received?", demoPathwayTitle:"YOUR PATHWAY", p1:"1. Understand your right", p1t:"Check the employment terms, payment records and the official labour rules for your selected country.", p2:"2. What you can do", p2t:"Ask the employer for a written explanation, then check the official complaint route if the issue is not resolved.", p3:"3. What you need", p3t:"Prepare your contract or messages, payment history, dates, payslips or bank evidence, and any written communication about the missing pay.", p4:"4. Where to go", p4t:"Use the official labour authority connected to your country or a trusted legal-aid service.", p5:"5. Prepare", p5t:"Lamar can help you turn your documents into a simple checklist and explain confusing wording.", p6:"6. Take the next step", p6t:"Follow the official procedure for your country and keep a record of what you submit.", p7:"7. Follow up", p7t:"Keep your next deadline or follow-up date visible in the cabinet.",
  demoDisclaimer:"Prototype demonstration — always verify legal details and procedures with the official national source.",
  cabinetModalTitle:"Information Cabinet", cabinetModalText:"A private-by-design prototype space. Nothing here is uploaded to a server; notes and checklist progress stay in this browser.", documentsLabel:"Documents / screenshots", documentsPlaceholder:"Paste names or notes about documents you need...", contactsLabel:"Important contacts", contactsPlaceholder:"Add trusted people, organisations or official contacts...", requirementsLabel:"Requirements / missing items", requirementsPlaceholder:"Write anything you still need to collect...", caseNotesLabel:"Case notes", caseNotesPlaceholder:"Write a private note about your situation...", saveCabinet:"Save cabinet", clearCabinet:"Clear", cabinetProgress:"Pathway progress",
  confidenceModalTitle:"Confidence Builder", confidenceModalText:"You deserve to know your worth, your voice and your rights.", confidenceVideo:"Watch", confidenceBooks:"Read", confidenceVoices:"Voices", confidencePrompt:"Write one thing you are proud of and one thing you want to protect about yourself.", confidencePlaceholder:"Write here...",
  testIntro:"Choose the answer that feels most accurate. You’ll get a quick explanation after each question.", correct:"Correct 💜", tryAgain:"Not quite — let’s learn from it 💜", nextQuestion:"Next question", finishTest:"Finish test", score:"Your score", restartTest:"Try again", questionOf:"Question",
  exploreModalIntro:"Prototype feature: this space shows how ADALA could guide the next step without forcing you to know legal terminology first.", pasteDocument:"Paste the confusing text here...", explainButton:"Explain simply", explanationOutput:"A real version would analyse the pasted document and return a plain-language explanation plus the parts most relevant to your situation.", whereTitle:"Where Do I Go?", whereText:"Start with your confirmed country. ADALA can point you to the responsible government institution, support service or legal-aid pathway shown in the country panel.", legalTitle:"Find Legal Help", legalText:"For the prototype, use the country’s official resources first and look for recognised legal-aid or women’s support organisations.", missingTitle:"What Am I Missing?", missingText:"Your cabinet and pathway can be checked against the situation you described so missing documents, questions and follow-up steps are easier to spot.", translateTitle:"Translate & Explain", translateText:"Paste Arabic or English text and the prototype can show a simpler explanation and the direction you may want to verify with the official source.", followupTitle:"My Follow-Ups", followupText:"Use your cabinet notes and pathway checklist to keep track of what you still need to do."
});
Object.assign(translations.ar, {
  toolTitle:"مساحتكِ الخاصة للتقدم خطوة بخطوة.", toolText:"اجمعي ما يهمكِ، وابني ثقتكِ، واختبري معرفتكِ بحقوقكِ.", toolGoal:"حيث تكون العدالة حقًا وليست امتيازًا.", toolGoalText:"كل أداة مصممة لتحويل المعرفة إلى شيء يمكنكِ استخدامه فعليًا.", cabinetTitle:"خزانة المعلومات", cabinetText:"مساحتكِ الخاصة لحفظ المستندات ولقطات الشاشة والملاحظات وجهات الاتصال والمتطلبات وتقدم حالتكِ.", pathwayProgress:"مسار حالتكِ الحالي", openCabinet:"افتحي الخزانة", cabinetSaved:"يتم الحفظ على هذا الجهاز فقط في النموذج التجريبي.", confidenceBuilderTitle:"بناء الثقة", confidenceBuilderText:"مساحة عن قيمة المرأة ومعرفتها وأصواتها، مع فيديوهات وكتب وقصص وبيانات ملهمة.", enterConfidence:"ادخلي المساحة", knowledgeTestTitle:"اختبار معرفة الحقوق", knowledgeTestText:"إلى أي مدى تعرفين حقوقكِ؟ جربي مواقف قصيرة وتعلمي مع كل إجابة.", quizMini:"6 أسئلة · نتيجة فورية", startTest:"ابدئي الاختبار", exploreTitle:"أكثر من معلومات. طريق إلى الأمام.", exploreText:"استكشفي الأدوات التي تساعدكِ على الفهم والاستعداد والعثور على الدعم والمتابعة من غير الحاجة لمعرفة المصطلحات القانونية.", exploreRights:"الحقوق والقوانين", exploreRightsText:"افهمي القوانين المرتبطة بوضعكِ.", exploreDocument:"شرح مستند", exploreDocumentText:"الصقي النص المربك وحوليه إلى لغة أبسط.", exploreWhere:"إلى أين أذهب؟", exploreWhereText:"اعرفي الجهة أو الخدمة المناسبة لوضعكِ.", exploreLegal:"العثور على مساعدة قانونية", exploreLegalText:"ابحثي عن مسارات المساعدة القانونية والدعم الموثوق.", exploreSearch:"البحث عن الحقوق", exploreSearchText:"اسألي بطريقتكِ بدل البحث بالمصطلحات القانونية.", exploreMissing:"ماذا ينقصني؟", exploreMissingText:"راجعي المتطلبات والخطوات التي قد تكون ناقصة في حالتكِ.", exploreTranslate:"ترجمة وشرح", exploreTranslateText:"العربية ↔ الإنجليزية مع شرح مبسط.", exploreFollowups:"متابعتي", exploreFollowupsText:"احتفظي بالمواعيد والخطوات القادمة أمامكِ.", exploreBigTitle:"ماذا أفعل؟", exploreBigText:"مش لازم تعرفي اسم القانون الأول. ابدئي بما حصل، وعدالة تساعدكِ تحولي الموقف لمسار واضح.", reviewsTitle:"ماذا يمكن أن تقول النساء عن عدالة؟", reviewOne:"“أخيرًا أقدر أشرح اللي حصل من غير ما أعرف الكلمات القانونية.”", reviewTwo:"“أحب إنها تعطيني خطوة تالية بدل ما ترميني في صفحة معلومات.”", reviewThree:"“معلومات البلد ولامار تجعل التجربة كلها مترابطة.”", demoSituation:"مسار تجريبي: عدم دفع الأجر", demoUser:"صاحب العمل لم يدفع لي راتبي لمدة شهرين.", demoIntro:"تمام 💜 خلينا نهدي الموضوع ونخليه عملي. هسألكِ كام سؤال الأول عشان المسار يناسب حالتكِ.", demoQ1:"هل ما زلتِ تعملين لدى صاحب العمل؟ وهل عندكِ شيء يثبت الأجر المتفق عليه مثل عقد أو رسائل أو كشف راتب أو سجل بنكي؟", demoQ2:"إنتِ في أي بلد؟ ومتى تقريبًا كان آخر راتب وصل لكِ؟", demoPathwayTitle:"مساركِ", p1:"1. افهمي حقكِ", p1t:"راجعي شروط العمل وسجل المدفوعات والقواعد الرسمية للعمل في بلدكِ المختار.", p2:"2. ماذا يمكنكِ أن تفعلي", p2t:"اطلبي من صاحب العمل تفسيرًا مكتوبًا، ثم راجعي طريقة الشكوى الرسمية إذا لم تُحل المشكلة.", p3:"3. ماذا تحتاجين", p3t:"جهزي العقد أو الرسائل وسجل المدفوعات والتواريخ وكشوف الراتب أو أي إثبات متعلق بالأجر المفقود.", p4:"4. إلى أين تذهبين", p4t:"استخدمي جهة العمل الرسمية المرتبطة ببلدكِ أو مسار المساعدة القانونية الموثوق.", p5:"5. استعدي", p5t:"لامار يمكنها مساعدتكِ في تحويل مستنداتكِ إلى قائمة بسيطة وشرح الكلام المربك.", p6:"6. خذي الخطوة التالية", p6t:"اتبعي الإجراء الرسمي الخاص ببلدكِ واحتفظي بسجل لما قدمتِه.", p7:"7. تابعي", p7t:"احتفظي بتاريخ المتابعة القادم واضحًا داخل الخزانة.", demoDisclaimer:"نموذج تجريبي للعرض — تحققي دائمًا من التفاصيل والإجراءات القانونية من المصدر الوطني الرسمي.", cabinetModalTitle:"خزانة المعلومات", cabinetModalText:"مساحة تجريبية مصممة للخصوصية. لا يتم رفع أي شيء إلى خادم؛ تبقى الملاحظات وتقدم القائمة على هذا المتصفح.", documentsLabel:"المستندات / لقطات الشاشة", documentsPlaceholder:"اكتبي أسماء المستندات أو ملاحظات عنها...", contactsLabel:"جهات الاتصال المهمة", contactsPlaceholder:"أضيفي أشخاصًا موثوقين أو جهات أو أرقامًا رسمية...", requirementsLabel:"المتطلبات / الأشياء الناقصة", requirementsPlaceholder:"اكتبي ما تحتاجين إلى جمعه بعد...", caseNotesLabel:"ملاحظات الحالة", caseNotesPlaceholder:"اكتبي ملاحظة خاصة عن موقفكِ...", saveCabinet:"حفظ الخزانة", clearCabinet:"مسح", cabinetProgress:"تقدم المسار", confidenceModalTitle:"بناء الثقة", confidenceModalText:"أنتِ تستحقين معرفة قيمتكِ وصوتكِ وحقوقكِ.", confidenceVideo:"شاهدي", confidenceBooks:"اقرئي", confidenceVoices:"أصوات", confidencePrompt:"اكتبي شيئًا واحدًا تفخرين به وشيئًا واحدًا تريدين حمايته في نفسكِ.", confidencePlaceholder:"اكتبي هنا...", testIntro:"اختاري الإجابة الأقرب. ستحصلين على شرح سريع بعد كل سؤال.", correct:"صح 💜", tryAgain:"ليس تمامًا — نتعلم منها معًا 💜", nextQuestion:"السؤال التالي", finishTest:"إنهاء الاختبار", score:"نتيجتكِ", restartTest:"جربي مرة أخرى", questionOf:"السؤال", exploreModalIntro:"ميزة تجريبية توضح كيف يمكن لعدالة توجيه الخطوة التالية من غير إجباركِ على معرفة المصطلحات القانونية أولًا.", pasteDocument:"الصقي النص المربك هنا...", explainButton:"اشرحيه ببساطة", explanationOutput:"في النسخة الحقيقية ستقوم عدالة بتحليل النص وتقديم شرح مبسط وأجزاء مرتبطة بوضعكِ.", whereTitle:"إلى أين أذهب؟", whereText:"ابدئي بالبلد المؤكد. يمكن لعدالة توجيهكِ إلى الجهة الحكومية أو خدمة الدعم أو مسار المساعدة القانونية المرتبط بالدولة.", legalTitle:"العثور على مساعدة قانونية", legalText:"في النموذج التجريبي، ابدئي بالمصادر الرسمية للدولة وابحثي عن جهات المساعدة القانونية أو دعم المرأة المعترف بها.", missingTitle:"ماذا ينقصني؟", missingText:"يمكن مراجعة الخزانة والمسار مقابل الوضع الذي وصفتهِ لكشف المستندات والأسئلة وخطوات المتابعة الناقصة.", translateTitle:"ترجمة وشرح", translateText:"الصقي نصًا عربيًا أو إنجليزيًا لعرض شرح أبسط واتجاهات تحتاجين إلى التحقق منها من المصدر الرسمي.", followupTitle:"متابعتي", followupText:"استخدمي ملاحظات الخزانة وقائمة المسار لمتابعة ما بقي عليكِ القيام به."
});

const lawTopics=[
  {id:"education",icon:"🎓",en:"Education",ar:"التعليم",subEn:"Access, participation and equal treatment",subAr:"الوصول والمشاركة والمعاملة المتساوية",enText:"Learn the basic questions to ask about access to education, participation, equal treatment and school or university procedures.",arText:"تعرّفي على الأسئلة الأساسية المتعلقة بالوصول إلى التعليم والمشاركة والمعاملة المتساوية وإجراءات المدرسة أو الجامعة."},
  {id:"employment",icon:"💼",en:"Employment",ar:"العمل",subEn:"Work, pay and workplace treatment",subAr:"العمل والأجر والمعاملة في مكان العمل",enText:"Understand the main areas to check around employment, workplace treatment, conditions and reporting routes.",arText:"افهمي أهم الأمور التي يجب التحقق منها في العمل والمعاملة داخل مكان العمل وظروفه وطرق الإبلاغ."},
  {id:"equality",icon:"⚖",en:"Equal treatment",ar:"المعاملة المتساوية",subEn:"Discrimination and fair treatment",subAr:"التمييز والمعاملة العادلة",enText:"Use this section to understand what equal treatment means and what information may be useful when you believe you were treated unfairly.",arText:"استخدمي هذا القسم لفهم معنى المعاملة المتساوية وما المعلومات التي قد تكون مفيدة إذا شعرتِ أنكِ تعرضتِ لمعاملة غير عادلة."},
  {id:"family",icon:"⌂",en:"Family & personal status",ar:"الأسرة والأحوال الشخصية",subEn:"Family procedures and personal decisions",subAr:"إجراءات الأسرة والقرارات الشخصية",enText:"Get a plain-language starting point for family and personal-status questions. Exact rules depend strongly on the country and situation.",arText:"احصلي على بداية مبسطة لأسئلة الأسرة والأحوال الشخصية. القواعد الدقيقة تختلف كثيرًا حسب البلد والموقف."},
  {id:"privacy",icon:"⌁",en:"Digital privacy",ar:"الخصوصية الرقمية",subEn:"Personal information and online safety",subAr:"المعلومات الشخصية والأمان على الإنترنت",enText:"Understand practical questions around personal information, accounts, consent and protecting yourself online.",arText:"افهمي الأسئلة العملية المتعلقة بالمعلومات الشخصية والحسابات والموافقة وحماية نفسكِ على الإنترنت."},
  {id:"harassment",icon:"◎",en:"Cyber harassment",ar:"المضايقة الإلكترونية",subEn:"Online abuse, threats and reporting",subAr:"الإساءة والتهديدات والإبلاغ",enText:"Learn what information to preserve, which platform tools may help, and why country-specific reporting options matter.",arText:"تعرّفي على المعلومات التي من المفيد الاحتفاظ بها وأدوات المنصات التي قد تساعدكِ ولماذا تختلف طرق الإبلاغ حسب البلد."},
  {id:"violence",icon:"♡",en:"Violence & abuse",ar:"العنف والإساءة",subEn:"Safety, support and protection",subAr:"الأمان والدعم والحماية",enText:"Start with safety and trusted support. For immediate danger, use the emergency information for your selected country.",arText:"ابدئي بالأمان والدعم الموثوق. في حالة الخطر الفوري استخدمي معلومات الطوارئ الخاصة ببلدكِ."},
  {id:"finance",icon:"◈",en:"Property & financial rights",ar:"الحقوق المالية وحقوق الملكية",subEn:"Money, property and financial decisions",subAr:"المال والملكية والقرارات المالية",enText:"Explore the questions to ask about property, money, accounts and financial decisions. Country rules can vary considerably.",arText:"استكشفي الأسئلة المتعلقة بالملكية والمال والحسابات والقرارات المالية. القواعد تختلف بشكل كبير حسب البلد."},
  {id:"civic",icon:"✦",en:"Civic participation",ar:"المشاركة المدنية",subEn:"Participation, documents and services",subAr:"المشاركة والوثائق والخدمات",enText:"Understand the basic areas around participation in civic life, documents and access to public services.",arText:"افهمي الجوانب الأساسية للمشاركة في الحياة المدنية والوثائق والوصول إلى الخدمات العامة."},
  {id:"services",icon:"＋",en:"Access to services",ar:"الوصول إلى الخدمات",subEn:"Government and public services",subAr:"الخدمات الحكومية والعامة",enText:"Use this as a starting guide for finding the right government or public institution for your question.",arText:"استخدمي هذا كدليل أولي للوصول إلى الجهة الحكومية أو العامة المناسبة لسؤالكِ."}
];

const lawDetails={
  education:"Is the service available? Are there admission, attendance or participation rules? What is the official complaint route?",
  employment:"What does the employment agreement say? What workplace procedure exists for a complaint? Which official labour authority handles the issue?",
  equality:"What happened, when, where and who was involved? What written decision or policy applies? Is there an official complaint or review process?",
  family:"Which family or personal-status procedure applies? Which documents are required? Which court, authority or official service is responsible?",
  privacy:"What information was shared? Who can access it? What account or platform controls can you use? What official reporting route exists?",
  harassment:"Save relevant information safely, use platform reporting tools, and identify the official reporting channel for the selected country.",
  violence:"Prioritize immediate safety, identify a trusted person or service, and use the selected country's emergency or protection resources when appropriate.",
  finance:"What document or account is involved? Who has authority over it? Which official financial, property or court service handles the question?",
  civic:"Which document or service are you trying to access? What eligibility or procedure applies? Which official authority provides the service?",
  services:"Identify the service, the responsible institution and the documents or appointment process listed by the official national source."
};

const isoNumeric={MA:"504",DZ:"012",TN:"788",LY:"434",MR:"478",EG:"818",SD:"729",PS:"275",LB:"422",SY:"760",JO:"400",IQ:"368",SA:"682",KW:"414",QA:"634",BH:"048",AE:"784",OM:"512",YE:"887",DJ:"262",SO:"706",KM:"174"};

let lang=localStorage.getItem("adalaLanguage")||"en";
if(!translations[lang])lang="en";
let selected=localStorage.getItem("adalaCountry")||null;
if(!selected || !countries[selected]) selected=null;
let pendingCountry=null;
let lawSelected=localStorage.getItem("adalaLawTopic")||null;
let breathingTimer=null,breathingRunning=false,breathingIndex=0,breathingLeft=4;
let mapRenderToken=0,mapZoom=null;
const conversation={country:selected,topic:lawSelected,situation:"",history:[]};
const $=s=>document.querySelector(s),$$=s=>Array.from(document.querySelectorAll(s));
const esc=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c]));
const t=k=>(translations[lang]&&translations[lang][k])||translations.en[k]||k;
const normalizeKey=k=>k==="saudi-arabia"?"saudiArabia":k;

function currentCountry(){return selected?countries[selected]:null}
function topicById(id){return lawTopics.find(x=>x.id===id)||null}
function topicLabel(topic){return lang==="ar"?topic.ar:topic.en}
function topicSub(topic){return lang==="ar"?topic.subAr:topic.subEn}
function countryName(c){return lang==="ar"?c.arabic:c.name}
function otherCountryName(c){return lang==="ar"?c.name:c.arabic}
function langText(en,ar){return lang==="ar"?ar:en}

function translatePage(){
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==="ar"?"rtl":"ltr";
  document.body.classList.toggle("arabic-mode",lang==="ar");
  $$('[data-i18n]').forEach(el=>{el.textContent=t(el.dataset.i18n)});
  $$('[data-i18n-placeholder]').forEach(el=>{el.placeholder=t(el.dataset.i18nPlaceholder)});
  const label=$("#languageLabel");if(label)label.textContent=lang==="en"?"العربية":"English";
  const languageMark=$("#languageMark");if(languageMark)languageMark.textContent=lang==="en"?"AR":"EN";
  renderCountryList();
  updateLawCountry();
  renderLawTopics($("#lawSearch")?.value||"");
  renderLaw();
  renderMapLabels();
  renderLamarSuggestions();
  if($("#countryDetails"))renderCountryDetail();
  updateBreathingUI();
}

function renderCountryList(){
  const list=$("#countryList");if(!list)return;
  const q=($("#countrySearch")?.value||"").trim().toLowerCase();
  let count=0;list.innerHTML="";
  order.forEach(key=>{
    const c=countries[key];if(!c)return;
    const match=!q||c.name.toLowerCase().includes(q)||c.arabic.includes(q)||c.code.toLowerCase().includes(q);
    if(!match)return;count++;
    const b=document.createElement("button");
    b.type="button";b.className="country-item"+(selected===key?" selected":"");b.dataset.country=key;
    b.innerHTML=`<span class="country-code">${esc(c.code)}</span><span class="country-item-name">${esc(countryName(c))}</span>`;
    b.addEventListener("click",()=>requestCountryConfirmation(key));
    list.appendChild(b);
  });
  const no=$("#noResults");if(no)no.hidden=count!==0;
}

function requestCountryConfirmation(key){
  key=normalizeKey(key);const c=countries[key];if(!c)return;
  pendingCountry=key;
  const content=$("#countryModalContent");if(!content){confirmCountry();return}
  content.innerHTML=`<div class="confirm-country"><span class="kicker">${esc(t("confirmKicker"))}</span><div class="confirm-country-icon">${esc(c.code)}</div><h2>${esc(countryName(c))}</h2><div class="confirm-arabic">${esc(otherCountryName(c))}</div><p>${esc(t("confirmText"))}</p><div class="modal-actions"><button class="btn btn-primary" id="confirmCountryButton">${esc(t("confirm"))}</button><button class="btn btn-secondary" id="changeCountryButton">${esc(t("chooseAnother"))}</button></div></div>`;
  openModal("countryModal");
  $("#confirmCountryButton").onclick=()=>confirmCountry();
  $("#changeCountryButton").onclick=()=>closeModal("countryModal");
}

function confirmCountry(){
  const key=pendingCountry;if(!key||!countries[key])return;
  selected=key;conversation.country=key;localStorage.setItem("adalaCountry",key);
  pendingCountry=null;
  updateMapSelection();renderCountryList();updateLawCountry();renderCountryDetail();renderLaw();addLamarContext();
  closeModal("countryModal");
  setTimeout(()=>$("#countryDetails")?.scrollIntoView({behavior:"smooth",block:"start"}),120);
}

function renderCountryDetail(){
  const empty=$("#countryEmpty"),box=$("#countryDetailContent");if(!empty||!box)return;
  if(!selected||!countries[selected]){empty.hidden=false;box.hidden=true;return}
  const c=countries[selected];empty.hidden=true;box.hidden=false;
  const capital={egypt:"Cairo",saudiArabia:"Riyadh",uae:"Abu Dhabi",jordan:"Amman",kuwait:"Kuwait City",bahrain:"Manama",qatar:"Doha",oman:"Muscat",iraq:"Baghdad",lebanon:"Beirut",syria:"Damascus",palestine:"Ramallah",morocco:"Rabat",algeria:"Algiers",tunisia:"Tunis",libya:"Tripoli",mauritania:"Nouakchott",sudan:"Khartoum",somalia:"Mogadishu",djibouti:"Djibouti",comoros:"Moroni",yemen:"Sana'a"}[selected]||"—";
  box.innerHTML=`<div class="country-panel country-panel-inline"><div class="country-panel-left"><div><div class="modal-code">${esc(c.code)}</div><span class="kicker">${esc(t("countryInfo"))}</span><h2>${esc(countryName(c))}</h2><div class="modal-arabic">${esc(otherCountryName(c))}</div><div class="country-capital">${esc(t("capital"))}: <strong>${esc(capital)}</strong></div></div><div class="country-panel-actions"><button class="btn btn-primary" id="countryViewDetails">${esc(t("viewDetails"))}</button><a class="btn btn-secondary" href="${esc(c.official)}" target="_blank" rel="noopener noreferrer">${esc(t("openOfficial"))} ↗</a></div></div><div class="country-panel-right"><div class="country-panel-title"><h3>${esc(t("emergency"))}</h3><small>${esc(countryName(c))}</small></div><div class="country-emergency-grid">${(c.emergency||[]).map(e=>`<article class="country-emergency-card"><span>${esc(lang==="ar"?e.arabic:e.label)}</span><strong>${esc(e.number)}</strong><a href="tel:${esc(e.number.replace(/[^0-9+]/g,""))}">${esc(t("call"))}</a></article>`).join("")}</div><h3 class="country-resources-title">${esc(t("officialResources"))}</h3><div class="country-official-resource"><div><strong>${esc(c.name)} ${esc(t("government"))}</strong><span>${esc(t("openOfficial"))}</span></div><a href="${esc(c.official)}" target="_blank" rel="noopener noreferrer">↗</a></div><p class="country-support-note">${esc(t("supportNote"))}</p></div></div>`;
  $("#countryViewDetails").onclick=()=>openCountryModal(selected);
}

function openCountryModal(key){
  key=normalizeKey(key);const c=countries[key];if(!c)return;
  const content=$("#countryModalContent");if(!content)return;
  const capital={egypt:"Cairo",saudiArabia:"Riyadh",uae:"Abu Dhabi",jordan:"Amman",kuwait:"Kuwait City",bahrain:"Manama",qatar:"Doha",oman:"Muscat",iraq:"Baghdad",lebanon:"Beirut",syria:"Damascus",palestine:"Ramallah",morocco:"Rabat",algeria:"Algiers",tunisia:"Tunis",libya:"Tripoli",mauritania:"Nouakchott",sudan:"Khartoum",somalia:"Mogadishu",djibouti:"Djibouti",comoros:"Moroni",yemen:"Sana'a"}[key]||"—";
  content.innerHTML=`<div class="country-panel"><div class="country-panel-left"><div><div class="modal-code">${esc(c.code)}</div><span class="kicker">${esc(t("countryInfo"))}</span><h2>${esc(countryName(c))}</h2><div class="modal-arabic">${esc(otherCountryName(c))}</div><div class="country-capital">${esc(t("capital"))}: <strong>${esc(capital)}</strong></div></div><div class="country-panel-actions"><button class="btn btn-primary" id="countryModalViewDetails">${esc(t("viewDetails"))}</button><a class="btn btn-secondary" href="${esc(c.official)}" target="_blank" rel="noopener noreferrer">${esc(t("openOfficial"))} ↗</a></div></div><div class="country-panel-right"><div class="country-panel-title"><h3>${esc(t("emergency"))}</h3><small>${esc(countryName(c))}</small></div><div class="country-emergency-grid">${(c.emergency||[]).map(e=>`<article class="country-emergency-card"><span>${esc(lang==="ar"?e.arabic:e.label)}</span><strong>${esc(e.number)}</strong><a href="tel:${esc(e.number.replace(/[^0-9+]/g,""))}">${esc(t("call"))}</a></article>`).join("")}</div><h3 class="country-resources-title">${esc(t("officialResources"))}</h3><div class="country-official-resource"><div><strong>${esc(c.name)} ${esc(t("government"))}</strong><span>${esc(t("openOfficial"))}</span></div><a href="${esc(c.official)}" target="_blank" rel="noopener noreferrer">↗</a></div><p class="country-support-note">${esc(t("supportNote"))}</p></div></div>`;
  openModal("countryModal");
  $("#countryModalViewDetails").onclick=()=>{closeModal("countryModal");setTimeout(()=>$("#countryDetails")?.scrollIntoView({behavior:"smooth"}),80)};
}

function updateLawCountry(){const el=$("#lawSelectedCountry");if(el)el.textContent=selected?countryName(countries[selected]):t("lawNotSelected")}
function renderLawTopics(filter=""){
  const box=$("#lawTopicList");if(!box)return;const needle=filter.trim().toLowerCase();
  box.innerHTML=lawTopics.filter(x=>!needle||x.en.toLowerCase().includes(needle)||x.ar.includes(needle)||x.subEn.toLowerCase().includes(needle)).map(x=>`<button class="law-topic ${lawSelected===x.id?"active":""}" data-law-topic="${x.id}" type="button"><strong>${x.icon} ${esc(topicLabel(x))}</strong><small>${esc(topicSub(x))}</small></button>`).join("")||`<p class="law-empty">${esc(t("noResults"))}</p>`;
  $$("[data-law-topic]").forEach(b=>b.onclick=()=>selectLawTopic(b.dataset.lawTopic));
}
function selectLawTopic(id){lawSelected=id;conversation.topic=id;localStorage.setItem("adalaLawTopic",id);renderLawTopics($("#lawSearch")?.value||"");renderLaw();addLamarContext()}
function renderLaw(){
  const title=$("#lawMainTitle"),lead=$("#lawMainLead"),results=$("#lawResults");if(!title||!lead||!results)return;
  const topic=topicById(lawSelected),c=currentCountry();
  if(!topic){title.textContent=t("lawChooseTopic");lead.textContent=t("lawChooseText");results.innerHTML=`<div class="law-start-card"><div class="law-start-icon">✦</div><h4>${esc(t("lawChooseTopic"))}</h4><p>${esc(t("lawChooseText"))}</p><button class="btn btn-secondary" type="button" onclick="document.querySelector('#lamar')?.scrollIntoView({behavior:'smooth'});setTimeout(()=>window.openLamar?.(),250)">${esc(t("talkLamar"))} →</button></div>`;return}
  title.textContent=topicLabel(topic);lead.textContent=langText(topic.enText,topic.arText);
  const countryText=c?countryName(c):t("lawNotSelected");
  const next=nextStepForTopic(topic.id,c);
  const source=c?`<a href="${esc(c.official)}" target="_blank" rel="noopener noreferrer">${esc(t("lawOpenSource"))}</a>`:`<span>${esc(t("lawNoCountry"))}</span>`;
  results.innerHTML=`<article class="law-card"><div class="law-icon">${topic.icon}</div><h4>${esc(t("lawMeaning"))}</h4><p>${esc(langText(topic.enText,topic.arText))}</p></article><article class="law-card"><div class="law-icon">✓</div><h4>${esc(t("lawCheck"))}</h4><p>${esc(langText(lawDetails[topic.id],lawDetails[topic.id]))}</p></article><article class="law-card"><div class="law-icon">→</div><h4>${esc(t("lawNext"))}</h4><p>${esc(next)}</p></article><article class="law-card"><div class="law-icon">↗</div><h4>${esc(t("lawSource"))}</h4><p>${esc(countryText)}</p>${source}</article>`;
}
function nextStepForTopic(id,c){
  if(!c)return langText("Choose a country first. Then ADALA can connect this topic to the right national source and next step.","اختاري بلدكِ أولًا، وبعدها تربط عدالة الموضوع بالمصدر الوطني والخطوة التالية المناسبة.");
  const name=countryName(c);
  const map={education:`Start with the official education authority or institution in ${name}. If the issue is discrimination or access, note the decision and ask which formal complaint route applies.`,employment:`Start with the relevant workplace procedure and the official labour authority in ${name}. Keep the key dates and documents you already have.`,equality:`Write down what happened and identify the policy or decision involved. Then check the official review or complaint route in ${name}.`,family:`Identify the exact family or personal-status procedure and the responsible authority in ${name}. Check the required documents before taking the next step.`,privacy:`Check the account or platform controls first, then identify the official privacy or reporting route available in ${name}.`,harassment:`Use platform reporting tools and identify the official reporting route in ${name}. Keep relevant information safely if you may need it later.`,violence:`Start with safety and a trusted person or service. If you need emergency information, use the ${name} support panel above.`,finance:`Identify the document, account or property involved and the responsible official institution in ${name}.`,civic:`Identify the document or service and the official authority in ${name} that provides it.`,services:`Identify the service and the responsible institution in ${name}, then follow the official appointment or application process.`};
  return map[id]||`Use the official national resource for ${name} and ask the responsible institution what the formal next step is.`;
}

function openModal(id){const m=$("#"+id);if(!m)return;m.classList.add("open");m.setAttribute("aria-hidden","false");document.body.classList.add("modal-open")}
function closeModal(id){const m=$("#"+id);if(!m)return;m.classList.remove("open");m.setAttribute("aria-hidden","true");if(!$$('.modal.open').length)document.body.classList.remove("modal-open");if(id==="calmModal")stopBreathing()}
function toast(msg){const e=$("#toast");if(!e)return;e.textContent=msg;e.classList.add("show");clearTimeout(window._adalaToast);window._adalaToast=setTimeout(()=>e.classList.remove("show"),2600)}

function breathingPhases(){return lang==="ar"?[{label:t("inhale"),text:t("inhale"),className:"inhale",seconds:4},{label:t("hold"),text:t("hold"),className:"hold",seconds:4},{label:t("exhale"),text:t("exhale"),className:"exhale",seconds:4},{label:t("rest"),text:t("rest"),className:"",seconds:2}]:[{label:t("inhale"),text:t("inhale"),className:"inhale",seconds:4},{label:t("hold"),text:t("hold"),className:"hold",seconds:4},{label:t("exhale"),text:t("exhale"),className:"exhale",seconds:4},{label:t("rest"),text:t("rest"),className:"",seconds:2}]}
function updateBreathingUI(){
  const phase=breathingPhases()[breathingIndex];const circle=$("#breathingCircle");if(!circle)return;
  circle.classList.remove("inhale","hold","exhale");if(breathingRunning&&phase.className)circle.classList.add(phase.className);
  $("#breathingText").textContent=breathingRunning?phase.text:t("breathe");$("#breathingPhase").textContent=breathingRunning?phase.label:(breathingLeft===4?t("ready"):t("stopped"));$("#breathingCount").textContent=breathingLeft;
}
function startBreathing(){if(breathingRunning)return;breathingRunning=true;breathingIndex=0;breathingLeft=4;updateBreathingUI();clearInterval(breathingTimer);breathingTimer=setInterval(()=>{breathingLeft--;if(breathingLeft<=0){breathingIndex=(breathingIndex+1)%4;breathingLeft=breathingPhases()[breathingIndex].seconds}updateBreathingUI()},1000)}
function stopBreathing(){breathingRunning=false;clearInterval(breathingTimer);breathingTimer=null;breathingIndex=0;breathingLeft=4;updateBreathingUI()}

const journalPrompts={en:["What is one thing you wish someone understood about you today?","What made you feel safe recently?","What is one small thing you can do for yourself today?","What boundary would make a situation feel healthier?", "Write down three strengths you have."],ar:["ما الشيء الذي تتمنين أن يفهمه أحد عنكِ اليوم؟","ما الشيء الذي جعلكِ تشعرين بالأمان مؤخرًا؟","ما الشيء الصغير الذي يمكنكِ فعله لنفسكِ اليوم؟","ما الحد الذي قد يجعل موقفًا ما أكثر راحة؟","اكتبي ثلاث نقاط قوة لديكِ."]};
function openTool(type){
  const c=$("#toolModalContent");if(!c)return;const ar=lang==="ar";
  if(type==="journal"){
    const saved=localStorage.getItem("adalaJournal")||"";const prompt=journalPrompts[lang][0];
    c.innerHTML=`<span class="kicker">ADALA</span><h2>${esc(t("journalTitle"))}</h2><p>${esc(t("journalIntro"))}</p><div class="journal-prompt-card"><strong id="writingPrompt">${esc(prompt)}</strong><button class="text-button" id="newPrompt" type="button">${esc(t("newPrompt"))} →</button></div><div class="tool-writing-area"><label for="journalText">${esc(t("writeHere"))}</label><textarea id="journalText" placeholder="${esc(t("writePlaceholder"))}"></textarea><div class="tool-writing-actions"><button class="btn btn-primary" id="saveJournal" type="button">${esc(t("save"))}</button></div></div>`;
    $("#journalText").value=saved;$("#saveJournal").onclick=()=>{localStorage.setItem("adalaJournal",$("#journalText").value);toast(t("saved"))};$("#newPrompt").onclick=()=>{$("#writingPrompt").textContent=journalPrompts[lang][Math.floor(Math.random()*journalPrompts[lang].length)]};
  } else if(type==="boundaries"){
    c.innerHTML=`<span class="kicker">ADALA</span><h2>${esc(t("boundaryTitle"))}</h2><p>${esc(t("boundariesIntro"))}</p><div class="boundary-list">${t("boundaryExamples").map(x=>`<div>✓ <span>${esc(x)}</span></div>`).join("")}</div><div class="tool-writing-area"><label for="boundaryText">${esc(t("writeHere"))}</label><textarea id="boundaryText" placeholder="${esc(t("writePlaceholder"))}"></textarea><div class="tool-writing-actions"><button class="btn btn-primary" id="saveBoundary" type="button">${esc(t("save"))}</button></div></div>`;
    $("#boundaryText").value=localStorage.getItem("adalaBoundary")||"";$("#saveBoundary").onclick=()=>{localStorage.setItem("adalaBoundary",$("#boundaryText").value);toast(t("saved"))};
  } else if(type==="confidence"){
    c.innerHTML=`<span class="kicker">ADALA</span><h2>${esc(t("confidenceTitle"))}</h2><p>${esc(t("confidenceIntro"))}</p><div class="journal-prompt-card"><strong>${esc(t("strengthPrompt"))}</strong></div><div class="tool-writing-area"><label for="confidenceText">${esc(t("writeHere"))}</label><textarea id="confidenceText" placeholder="${esc(t("strengthPlaceholder"))}"></textarea><div class="tool-writing-actions"><button class="btn btn-primary" id="saveConfidence" type="button">${esc(t("save"))}</button></div></div>`;
    $("#confidenceText").value=localStorage.getItem("adalaConfidence")||"";$("#saveConfidence").onclick=()=>{localStorage.setItem("adalaConfidence",$("#confidenceText").value);toast(t("saved"))};
  } else if(type==="options"){
    c.innerHTML=`<span class="kicker">ADALA</span><h2>${esc(t("optionsTitle"))}</h2><p>${esc(t("optionsIntro"))}</p><div class="options-list">${t("optionsSteps").map((x,i)=>`<div><b>0${i+1}</b><span>${esc(x)}</span></div>`).join("")}</div><div class="modal-actions"><button class="btn btn-primary" id="optionsLaw">${esc(t("lawTitle"))}</button><button class="btn btn-secondary" id="optionsLamar">${esc(t("talkLamar"))}</button></div>`;
    $("#optionsLaw").onclick=()=>{closeModal("toolModal");$("#rights")?.scrollIntoView({behavior:"smooth"})};$("#optionsLamar").onclick=()=>{closeModal("toolModal");openLamar()};
  } else if(type==="trio"){
    const values=JSON.parse(localStorage.getItem("adalaTrio")||"[\"\",\"\",\"\"]");
    c.innerHTML=`<span class="kicker">ADALA</span><h2>${esc(t("supportTrioTitle"))}</h2><p>${esc(t("trioIntro"))}</p><div class="trio-fields">${t("trioLabels").map((x,i)=>`<label>${esc(x)}<input data-trio="${i}" value="${esc(values[i]||"")}" placeholder="${esc(t("trioPlaceholder"))}"></label>`).join("")}</div><div class="modal-actions"><button class="btn btn-primary" id="saveTrio">${esc(t("save"))}</button></div>`;
    $("#saveTrio").onclick=()=>{const vals=$$('[data-trio]').map(x=>x.value.trim());localStorage.setItem("adalaTrio",JSON.stringify(vals));toast(t("saved"))};
  }
  openModal("toolModal");
}

function renderLamarSuggestions(){
  const widget=$("#lamarWidget"),input=widget?.querySelector(".lamar-input");if(!widget||!input)return;
  let wrap=$("#lamarSuggestions");if(!wrap){wrap=document.createElement("div");wrap.id="lamarSuggestions";wrap.className="lamar-suggestions";widget.insertBefore(wrap,input)}
  wrap.innerHTML=`<button type="button" data-lamar-prompt="I want to understand my rights">${esc(langText("Understand my rights","أريد فهم حقوقي"))}</button><button type="button" data-lamar-prompt="I feel anxious">${esc(langText("I feel anxious","أشعر بالقلق"))}</button><button type="button" data-lamar-prompt="Show emergency information">${esc(langText("Emergency help","مساعدة الطوارئ"))}</button><button type="button" data-lamar-prompt="I need to talk">${esc(langText("I just need to talk","أحتاج فقط أن أتكلم"))}</button>`;
  $$('[data-lamar-prompt]').forEach(b=>b.onclick=()=>sendLamar(b.dataset.lamarPrompt));
}
function addMessage(who,text){const box=$("#lamarMessages");if(!box)return;const el=document.createElement("div");el.className=`msg ${who}`;el.textContent=text;box.appendChild(el);box.scrollTop=box.scrollHeight}
function addLamarContext(){const box=$("#lamarContext");if(!box)return;const bits=[];if(selected)bits.push(langText(`Country: ${countries[selected].name}`,`البلد: ${countries[selected].arabic}`));if(lawSelected){const tp=topicById(lawSelected);bits.push(langText(`Topic: ${tp.en}`,`الموضوع: ${tp.ar}`))}box.textContent=bits.length?bits.join(" · "):langText("No country selected yet","لم يتم اختيار بلد بعد")}
function ensureLamarCloseButton(){
  const widget=$("#lamarWidget");
  const head=widget?.querySelector(".lamar-head");
  if(!widget||!head)return null;
  let btn=$("#closeLamar");
  if(!btn || !head.contains(btn)){
    btn=document.createElement("button");
    btn.id="closeLamar";
    btn.type="button";
    btn.className="lamar-close lamar-close-guaranteed";
    btn.setAttribute("aria-label","Close Lamar chat");
    btn.setAttribute("title","Close Lamar chat");
    btn.innerHTML="<span aria-hidden=\"true\">×</span><span class=\"lamar-close-label\">CLOSE</span>";
    head.appendChild(btn);
  }
  btn.onclick=closeLamar;
  return btn;
}
function openLamar(){const w=$("#lamarWidget");if(!w)return;ensureLamarCloseButton();w.classList.add("open");w.setAttribute("aria-hidden","false");if(!$("#lamarMessages").children.length)addMessage("bot",t("lamarHello"));addLamarContext();$("#lamarInput")?.focus()}
function closeLamar(){const w=$("#lamarWidget");if(!w)return;w.classList.remove("open");w.setAttribute("aria-hidden","true")}
function lamarReply(raw){
  const low=raw.toLowerCase().trim();conversation.situation=raw;conversation.history.push({role:"user",text:raw});
  const c=currentCountry();
  if(/^(hi|hey|hello|hey there|heyy|yo|سلام|اهلا|أهلا|هاي|hello lamar)/i.test(low))return t("lamarGreeting");
  if(/sad|depress|down|cry|upset|lonely|miserable|حزين|زعلان|زعلانه|زعلانة|مكتئب|مكتئبة|بعيط|وحيدة|وحيد|متضايق|متضايقة/.test(low))return t("lamarSad");
  if(/anxious|anxiety|worried|worry|panic|overwhelmed|stressed|stress|قلق|قلقان|قلقانة|متوترة|توتر|خايفة|خوف|مضغوطة|مضغوط|ضغط/.test(low))return t("lamarAnxious");
  if(/pressur|forced|force me|push me|don't want|dont want|can't say no|cannot say no|إجبار|مجبورة|مجبور|بيضغط|يضغط|مش عايزة|مش عايز|مش عايزه|مش عايزاه/.test(low))return t("lamarPressured");
  if(/harass|cyber|bully|threaten|online abuse|مضايقة|تحرش إلكتروني|تنمر|تهديد|ابتزاز|أونلاين|اونلاين/.test(low))return t("lamarHarassment");
  if(/school|university|college|teacher|student|مدرسة|جامعة|مدرس|مدرسة|تعليم/.test(low))return t("lamarSchool");
  if(/work|job|boss|salary|employment|شغل|عمل|وظيفة|مرتب|مدير/.test(low))return t("lamarWork");
  if(/emergency|ambulance|police|fire|urgent|danger|unsafe|طوارئ|إسعاف|شرطة|حريق|خطر|مش آمنة|غير آمنة|غير آمن/.test(low))return t("lamarEmergency");
  if(/breath|breathe|تنفس|تنفسي|اهدى|اهدأ|أهدى|أهدأ/.test(low)){$("#tools")?.scrollIntoView({behavior:"smooth"});return t("lamarBreath")}
  if(/journal|write|confess|writing|diary|فضفض|اكتب|اكتبي|كتابة|مذكرات/.test(low)){$("#tools")?.scrollIntoView({behavior:"smooth"});return t("lamarJournal")}
  if(/boundar|say no|حدود|لا أستطيع|مش مرتاحة|مش مرتاح/.test(low)){$("#tools")?.scrollIntoView({behavior:"smooth"});return t("lamarBoundary")}
  if(/confidence|self esteem|strengths|ثقة|نقاط قوة|قدراتي/.test(low)){$("#tools")?.scrollIntoView({behavior:"smooth"});return t("lamarConfidence")}
  if(/right|rights|law|legal|قانون|حقوق|قانوني|حق/.test(low)){$("#rights")?.scrollIntoView({behavior:"smooth"});return t("lamarRights")}
  if(/what can i do|what should i do|next step|options|ماذا أفعل|اعمل ايه|أعمل إيه|خطوة|خيارات/.test(low)){$("#tools")?.scrollIntoView({behavior:"smooth"});return langText("We can turn this into a few clear options 💜 Start by telling me what happened and what you want the outcome to be. Then I can point you toward Know your options, The Law, or Find Support.","نقدر نحول الموضوع لخيارات واضحة 💜 قولي لي إيه اللي حصل وإيه النتيجة اللي نفسكِ توصلي لها، وأنا أوجهكِ لأداة اعرفي خياراتكِ أو القانون أو العثور على الدعم.")}
  for(const key of order){const country=countries[key];if(low.includes(country.name.toLowerCase())||raw.includes(country.arabic)){conversation.country=key;selected=key;localStorage.setItem("adalaCountry",key);renderCountryList();renderCountryDetail();updateMapSelection();updateLawCountry();addLamarContext();return langText(`Got you 💜 I’ve connected ADALA to ${country.name}. Now tell me what you need: emergency information, a rights question, support resources, or just someone to talk it through with.`,`تمام 💜 ربطت عدالة ببلد ${country.arabic}. قولي لي محتاجة إيه: معلومات طوارئ، سؤال عن الحقوق، مصادر دعم، ولا بس محتاجة حد يسمعكِ ونفكر سوا؟`)}
  }
  if(!c)return t("lamarNeedCountry");
  return t("lamarGeneric");
}
function sendLamar(text){const input=$("#lamarInput");const value=(text??input?.value??"").trim();if(!value)return;addMessage("user",value);if(input)input.value="";const reply=lamarReply(value);setTimeout(()=>addMessage("bot",reply),220)}

function renderMapLabels(){
  $$("#arabMap .map-country").forEach(g=>{const key=g.dataset.country,c=countries[key];const text=g.querySelector("text");if(text&&c)text.textContent=countryName(c)})
}
function updateMapSelection(){$$("#arabMap .map-country").forEach(g=>g.classList.toggle("selected",normalizeKey(g.dataset.country)===normalizeKey(selected)))}
async function renderRealMap(){
  const svgEl=$("#arabMap");if(!svgEl||!window.d3||!window.topojson)return;
  const token=++mapRenderToken;
  try{
    const topology=await d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json");if(token!==mapRenderToken)return;
    const all=topojson.feature(topology,topology.objects.countries).features;
    const byNumeric=new Map(order.map(key=>[isoNumeric[countries[key]?.code],{key,country:countries[key]}]).filter(x=>x[0]));
    const arab=all.filter(f=>byNumeric.has(String(f.id).padStart(3,"0")));if(!arab.length)throw new Error("No Arab map features found");
    const stage=$(".map-stage"),width=Math.max(760,stage?.clientWidth||1000),height=Math.max(500,stage?.clientHeight||620);
    const projection=d3.geoMercator().fitExtent([[22,20],[width-22,height-28]],{type:"FeatureCollection",features:arab});
    const path=d3.geoPath(projection),svg=d3.select(svgEl);svg.attr("viewBox",`0 0 ${width} ${height}`).attr("preserveAspectRatio","xMidYMid meet").html("");
    const root=svg.append("g").attr("class","map-zoom-root");
    root.append("g").attr("class","map-context-layer").selectAll("path").data(all).join("path").attr("class",f=>byNumeric.has(String(f.id).padStart(3,"0"))?"map-context arab-context":"map-context").attr("d",path);
    const layer=root.append("g").attr("class","map-country-layer");
    layer.selectAll("g").data(arab).join("g").attr("class",f=>`map-country ${byNumeric.get(String(f.id).padStart(3,"0"))?.key===selected?"selected":""}`).attr("data-country",f=>byNumeric.get(String(f.id).padStart(3,"0"))?.key||"").attr("tabindex",0).attr("role","button").attr("aria-label",f=>{const i=byNumeric.get(String(f.id).padStart(3,"0"));return i?`${i.country.name} / ${i.country.arabic}`:"Country"}).each(function(f){const i=byNumeric.get(String(f.id).padStart(3,"0"));const g=d3.select(this),centroid=path.centroid(f);g.append("path").attr("class","country-shape").attr("d",path);if(i&&Number.isFinite(centroid[0])&&Number.isFinite(centroid[1]))g.append("text").attr("class","country-label").attr("x",centroid[0]).attr("y",centroid[1]).text(countryName(i.country))}).on("click",(_,f)=>{const i=byNumeric.get(String(f.id).padStart(3,"0"));if(i)requestCountryConfirmation(i.key)}).on("keydown",(e,f)=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();const i=byNumeric.get(String(f.id).padStart(3,"0"));if(i)requestCountryConfirmation(i.key)}});
    if(window.d3.zoom){
      mapZoom=d3.zoom().scaleExtent([1,3]).on("zoom",e=>root.attr("transform",e.transform));svg.call(mapZoom);if($("#mapZoomIn"))$("#mapZoomIn").onclick=()=>svg.transition().duration(220).call(mapZoom.scaleBy,1.25);if($("#mapZoomOut"))$("#mapZoomOut").onclick=()=>svg.transition().duration(220).call(mapZoom.scaleBy,.8);if($("#mapReset"))$("#mapReset").onclick=()=>svg.transition().duration(220).call(mapZoom.transform,d3.zoomIdentity);
    }
    updateMapSelection();renderMapLabels();$(".map-status")?.classList.add("map-live");
  }catch(err){console.warn("ADALA map error",err);svgEl.innerHTML=`<text x="50%" y="50%" text-anchor="middle" class="map-fallback-text">${esc(langText("The map could not be loaded. You can still choose a country from Quick Access.","تعذر تحميل الخريطة. يمكنكِ اختيار الدولة من الوصول السريع."))}</text>`}
}

function setupNavigation(){
  const menu=$("#menuButton"),nav=$("#mainNavigation");menu?.addEventListener("click",()=>{const open=document.body.classList.toggle("nav-open");menu.setAttribute("aria-expanded",String(open));nav.classList.toggle("open",open)});
  $$(".nav a").forEach(a=>a.addEventListener("click",()=>{document.body.classList.remove("nav-open");nav?.classList.remove("open");menu?.setAttribute("aria-expanded","false")}));
  const links=$$(".nav a"),sections=$$("main section[id]");if(window.IntersectionObserver){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id))}),{threshold:.3});sections.forEach(s=>io.observe(s))}
}
function setupModals(){
  $$('[data-close-modal]').forEach(el=>el.addEventListener("click",()=>closeModal(el.dataset.closeModal)));
  $("#countryModalClose")?.addEventListener("click",()=>closeModal("countryModal"));$("#toolModalClose")?.addEventListener("click",()=>closeModal("toolModal"));$("#calmClose")?.addEventListener("click",()=>closeModal("calmModal"));
  document.addEventListener("keydown",e=>{if(e.key==="Escape"){$$(".modal.open").forEach(m=>closeModal(m.id));closeLamar()}})
}
function setupTools(){
  $("#toolBreathingButton")?.addEventListener("click",()=>openModal("calmModal"));
  $("#heroCalmButton")?.addEventListener("click",()=>openModal("calmModal"));
  $("#calmBegin")?.addEventListener("click",startBreathing);$("#calmStop")?.addEventListener("click",stopBreathing);
  $("#journalButton")?.addEventListener("click",()=>openTool("journal"));$("#boundaryButton")?.addEventListener("click",()=>openTool("boundaries"));$("#confidenceButton")?.addEventListener("click",()=>openTool("confidence"));$("#optionsButton")?.addEventListener("click",()=>openTool("options"));$("#trioButton")?.addEventListener("click",()=>openTool("trio"));
}
function setupSearch(){
  $("#countrySearch")?.addEventListener("input",()=>renderCountryList());$("#clearSearch")?.addEventListener("click",()=>{const x=$("#countrySearch");if(x){x.value="";renderCountryList();x.focus()}});$("#lawSearch")?.addEventListener("input",e=>renderLawTopics(e.target.value));
  $("#lawUseCountry")?.addEventListener("click",()=>{if(selected){updateLawCountry();renderLaw()}else $("#support")?.scrollIntoView({behavior:"smooth"})});
}
function setupLamar(){
  ensureLamarCloseButton();
  $("#openLamar")?.addEventListener("click",openLamar);$("#closeLamar")?.addEventListener("click",closeLamar);$("#lamarSend")?.addEventListener("click",()=>sendLamar());$("#lamarInput")?.addEventListener("keydown",e=>{if(e.key==="Enter")sendLamar()});renderLamarSuggestions();
  let ctx=$("#lamarContext");if(!ctx){ctx=document.createElement("div");ctx.id="lamarContext";ctx.className="lamar-context";const input=$("#lamarWidget .lamar-input");$("#lamarWidget")?.insertBefore(ctx,input)}addLamarContext();
}
function setupLanguage(){
  $("#languageButton")?.addEventListener("click",()=>{lang=lang==="en"?"ar":"en";localStorage.setItem("adalaLanguage",lang);translatePage();renderRealMap()})
}
function setupHeroLinks(){
  $$('a[href="#support"]').forEach(a=>a.addEventListener("click",()=>setTimeout(()=>$("#countrySearch")?.focus(),500)));
}

const toolkitQuestions=[
  {q:"An employer withholds your agreed pay. What is a useful first step?",opts:["Ignore it","Collect the agreement and payment records and check the official labour route","Post everything publicly"],a:1,e:"Keeping the key documents and checking the official route makes the situation clearer."},
  {q:"A school refuses a service and you believe the decision was unfair. What should you do first?",opts:["Throw away the decision","Record what happened and ask for the formal review or complaint route","Guess which law applies"],a:1,e:"Start by documenting the decision and finding the institution’s formal process."},
  {q:"Someone shares your private photo online. Which combination is most useful?",opts:["Do nothing","Use platform reporting and identify the official reporting/support route","Share their photo back"],a:1,e:"Platform reporting plus the relevant official route can create a clearer response path."},
  {q:"You are unsure which authority handles your problem. What can ADALA help with?",opts:["Nothing","Connect the situation to the country and relevant institution/resource","Choose a random office"],a:1,e:"Country context matters because institutions and procedures differ."},
  {q:"Why does ADALA ask follow-up questions?",opts:["To make the website longer","To understand the situation well enough to build a more relevant pathway","To collect unnecessary personal details"],a:1,e:"The prototype uses follow-up questions to make the guidance more specific."},
  {q:"What should you do with important legal information from the prototype?",opts:["Treat it as the final legal authority","Verify important details with the official source","Forward it without checking"],a:1,e:"ADALA is a prototype guide, so important legal details should be checked against official sources."}
];
let quizIndex=0,quizScore=0;
function renderToolkitProgress(){
  const checks=JSON.parse(localStorage.getItem("adalaPathwayChecks")||"[]");
  const count=checks.filter(Boolean).length;
  const txt=$("#toolkitProgressText"),bar=$("#toolkitProgressBar");
  if(txt)txt.textContent=`${count} / 6`;
  if(bar)bar.style.width=`${Math.round(count/6*100)}%`;
}
function openTool(type){
  const c=$("#toolModalContent"); if(!c)return;
  if(type==="cabinet"){
    const data=JSON.parse(localStorage.getItem("adalaCabinet")||"{}");
    const checks=JSON.parse(localStorage.getItem("adalaPathwayChecks")||"[]");
    const labels=[t("p1"),t("p2"),t("p3"),t("p4"),t("p5"),t("p6")];
    c.innerHTML=`<span class="kicker">ADALA TOOLKIT</span><h2>${esc(t("cabinetModalTitle"))}</h2><p>${esc(t("cabinetModalText"))}</p><div class="cabinet-pathway"><div class="cabinet-modal-title"><strong>${esc(t("cabinetProgress"))}</strong><span id="cabinetModalCount"></span></div>${labels.map((x,i)=>`<label class="cabinet-check"><input type="checkbox" data-path-check="${i}" ${checks[i]?"checked":""}><span>${esc(x)}</span></label>`).join("")}</div><div class="cabinet-fields"><label>${esc(t("documentsLabel"))}<textarea id="cabDocs" placeholder="${esc(t("documentsPlaceholder"))}">${esc(data.docs||"")}</textarea></label><label>${esc(t("contactsLabel"))}<textarea id="cabContacts" placeholder="${esc(t("contactsPlaceholder"))}">${esc(data.contacts||"")}</textarea></label><label>${esc(t("requirementsLabel"))}<textarea id="cabRequirements" placeholder="${esc(t("requirementsPlaceholder"))}">${esc(data.requirements||"")}</textarea></label><label>${esc(t("caseNotesLabel"))}<textarea id="cabNotes" placeholder="${esc(t("caseNotesPlaceholder"))}">${esc(data.notes||"")}</textarea></label></div><div class="modal-actions"><button class="btn btn-primary" id="saveCabinet">${esc(t("saveCabinet"))}</button><button class="btn btn-secondary" id="clearCabinet">${esc(t("clearCabinet"))}</button></div><small class="cabinet-privacy">${esc(t("cabinetSaved"))}</small>`;
    const update=()=>{const vals=$$('[data-path-check]').map(x=>x.checked);localStorage.setItem("adalaPathwayChecks",JSON.stringify(vals));const n=vals.filter(Boolean).length;$("#cabinetModalCount").textContent=`${n} / 6`;renderToolkitProgress()};
    $$('[data-path-check]').forEach(x=>x.addEventListener("change",update)); update();
    $("#saveCabinet").onclick=()=>{localStorage.setItem("adalaCabinet",JSON.stringify({docs:$("#cabDocs").value,contacts:$("#cabContacts").value,requirements:$("#cabRequirements").value,notes:$("#cabNotes").value}));toast(t("saved"))};
    $("#clearCabinet").onclick=()=>{localStorage.removeItem("adalaCabinet");$("#cabDocs").value=$("#cabContacts").value=$("#cabRequirements").value=$("#cabNotes").value="";toast(t("clearCabinet"))};
  } else if(type==="confidenceBuilder" || type==="confidence"){
    c.innerHTML=`<span class="kicker">ADALA</span><h2>${esc(t("confidenceModalTitle"))}</h2><p>${esc(t("confidenceModalText"))}</p><div class="confidence-hub"><a href="https://www.youtube.com/results?search_query=women+empowerment+education" target="_blank" rel="noopener"><span>🎥</span><strong>${esc(t("confidenceVideo"))}</strong><small>Curated empowerment videos</small></a><a href="https://www.google.com/search?q=books+about+women+rights" target="_blank" rel="noopener"><span>📚</span><strong>${esc(t("confidenceBooks"))}</strong><small>Books, articles and stories</small></a><div><span>💬</span><strong>${esc(t("confidenceVoices"))}</strong><small>Women, lawyers and educators can share statements here.</small></div></div><div class="tool-writing-area"><label for="confidenceText">${esc(t("confidencePrompt"))}</label><textarea id="confidenceText" placeholder="${esc(t("confidencePlaceholder"))}"></textarea><div class="tool-writing-actions"><button class="btn btn-primary" id="saveConfidence">${esc(t("save"))}</button></div></div>`;
    $("#confidenceText").value=localStorage.getItem("adalaConfidence")||"";$("#saveConfidence").onclick=()=>{localStorage.setItem("adalaConfidence",$("#confidenceText").value);toast(t("saved"))};
  } else if(type==="knowledgeTest"){
    quizIndex=0;quizScore=0;renderQuiz();
  }
  openModal("toolModal");
}
function renderQuiz(){
  const c=$("#toolModalContent"),q=toolkitQuestions[quizIndex]; if(!c||!q)return;
  c.innerHTML=`<span class="kicker">ADALA TOOLKIT</span><h2>${esc(t("knowledgeTestTitle"))}</h2><p>${esc(t("testIntro"))}</p><div class="quiz-progress">${esc(t("questionOf"))} ${quizIndex+1} / ${toolkitQuestions.length}</div><div class="quiz-question"><h3>${esc(q.q)}</h3>${q.opts.map((o,i)=>`<button class="quiz-option" data-answer="${i}">${esc(o)}</button>`).join("")}</div><div id="quizFeedback"></div>`;
  $$('[data-answer]').forEach(b=>b.onclick=()=>{const chosen=Number(b.dataset.answer);$$('[data-answer]').forEach(x=>x.disabled=true);if(chosen===q.a){quizScore++;b.classList.add("correct");$("#quizFeedback").innerHTML=`<div class="quiz-feedback correct">${esc(t("correct"))}<br><span>${esc(q.e)}</span></div>`}else{b.classList.add("wrong");$$('[data-answer]')[q.a].classList.add("correct");$("#quizFeedback").innerHTML=`<div class="quiz-feedback wrong">${esc(t("tryAgain"))}<br><span>${esc(q.e)}</span></div>`}setTimeout(()=>{if(quizIndex<toolkitQuestions.length-1){quizIndex++;renderQuiz()}else{renderQuizResult()}},800)});
}
function renderQuizResult(){const c=$("#toolModalContent");c.innerHTML=`<span class="kicker">ADALA TOOLKIT</span><h2>${esc(t("knowledgeTestTitle"))}</h2><div class="quiz-result"><strong>${esc(t("score"))}: ${quizScore} / ${toolkitQuestions.length}</strong><p>${quizScore>=5?"Amazing. You know your rights well. 💜":quizScore>=3?"Good start. A few more topics could make you even more confident. 💜":"This is exactly what learning is for. Explore The Law and try again. 💜"}</p><button class="btn btn-primary" id="restartQuiz">${esc(t("restartTest"))}</button></div>`;$("#restartQuiz").onclick=()=>{quizIndex=0;quizScore=0;renderQuiz()}}
function exploreModal(type){
  const c=$("#toolModalContent"); if(!c)return;
  if(type==="rights"){closeModal("toolModal");$("#rights")?.scrollIntoView({behavior:"smooth"});return}
  const map={document:["document","exploreDocument"],where:["where","whereTitle"],legal:["legal","legalTitle"],search:["search","exploreSearch"],missing:["missing","missingTitle"],translate:["translate","translateTitle"],followups:["followups","followupTitle"]};
  const item=map[type]||map.document;
  let body=esc(t("exploreModalIntro"));
  if(type==="document") body+=`<div class="tool-writing-area"><textarea id="exploreDocumentText" placeholder="${esc(t("pasteDocument"))}"></textarea><button class="btn btn-primary" id="explainDocumentBtn">${esc(t("explainButton"))}</button><div id="documentOutput"></div></div>`;
  else {body+=`<p>${esc(t(item[1]))}</p><div class="explore-modal-detail">${esc(t(type==="where"?"whereText":type==="legal"?"legalText":type==="missing"?"missingText":type==="translate"?"translateText":"followupText"))}</div>`}
  c.innerHTML=`<span class="kicker">EXPLORE ADALA</span><h2>${esc(t(item[1]))}</h2>${body}`;
  if(type==="document")$("#explainDocumentBtn").onclick=()=>{$("#documentOutput").innerHTML=`<div class="simplified-output">${esc(t("explanationOutput"))}</div>`};
  openModal("toolModal");
}
function setupExplore(){
  $$('[data-explore]').forEach(b=>b.addEventListener("click",()=>exploreModal(b.dataset.explore)));
  $("#exploreLamarButton")?.addEventListener("click",()=>{openLamar();$("#lamar")?.scrollIntoView({behavior:"smooth",block:"start"})});
}
function setupTools(){
  $("#cabinetButton")?.addEventListener("click",()=>openTool("cabinet"));
  $("#confidenceBuilderButton")?.addEventListener("click",()=>openTool("confidenceBuilder"));
  $("#knowledgeTestButton")?.addEventListener("click",()=>openTool("knowledgeTest"));
  renderToolkitProgress();
}
function renderLamarSuggestions(){
  const widget=$("#lamarWidget"),input=widget?.querySelector(".lamar-input"); if(!widget||!input)return;
  let wrap=$("#lamarSuggestions"); if(!wrap){wrap=document.createElement("div");wrap.id="lamarSuggestions";wrap.className="lamar-suggestions";widget.insertBefore(wrap,input)}
  const demo="My employer hasn’t paid me for two months.";
  wrap.innerHTML=`<button type="button" data-lamar-prompt="${esc(demo)}">${esc(langText(lang==="en"?"Demo: unpaid wages":"مثال: عدم دفع الراتب",lang==="ar"?"مثال: صاحب العمل لم يدفع راتبي لمدة شهرين.":demo))}</button><button type="button" data-lamar-prompt="I want to understand my rights">${esc(langText("Understand my rights","أريد فهم حقوقي"))}</button><button type="button" data-lamar-prompt="I feel anxious">${esc(langText("I feel anxious","أشعر بالقلق"))}</button><button type="button" data-lamar-prompt="Show emergency information">${esc(langText("Emergency help","مساعدة الطوارئ"))}</button>`;
  $$('[data-lamar-prompt]').forEach(b=>b.onclick=()=>sendLamar(b.dataset.lamarPrompt));
}
function demoPathwayMessage(){
  const c=currentCountry();
  const country=c?countryName(c):(lang==="ar"?"بلدكِ":"your country");
  return `<div class="pathway-response"><div class="pathway-response-head"><span>${esc(t("demoPathwayTitle"))}</span><strong>${esc(country)}</strong></div>${[["p1","p1t"],["p2","p2t"],["p3","p3t"],["p4","p4t"],["p5","p5t"],["p6","p6t"],["p7","p7t"]].map(([a,b])=>`<div class="pathway-step"><b>${esc(t(a))}</b><p>${esc(t(b))}</p></div>`).join("")}<small>${esc(t("demoDisclaimer"))}</small></div>`;
}
function lamarBaseReply(raw){
  const low=String(raw).toLowerCase();
  if(/^(hi|hey|hello|hey there|heyy|yo|سلام|اهلا|أهلا|هاي|hello lamar)/i.test(low)) return t("lamarGreeting");
  if(/sad|depress|down|cry|upset|lonely|miserable|حزين|زعلان|زعلانه|زعلانة|مكتئب|مكتئبة|بعيط|وحيدة|وحيد|متضايق|متضايقة/.test(low)) return t("lamarSad");
  if(/anxious|anxiety|worried|worry|panic|overwhelmed|stressed|stress|قلق|قلقان|قلقانة|متوترة|توتر|خايفة|خوف|مضغوطة|مضغوط|ضغط/.test(low)) return t("lamarAnxious");
  if(/pressur|forced|force me|push me|don't want|dont want|can't say no|cannot say no|إجبار|مجبورة|مجبور|بيضغط|يضغط|مش عايزة|مش عايز|مش عايزه|مش عايزاه/.test(low)) return t("lamarPressured");
  if(/harass|cyber|bully|threaten|online abuse|مضايقة|تحرش إلكتروني|تنمر|تهديد|ابتزاز|أونلاين|اونلاين/.test(low)) return t("lamarHarassment");
  if(/school|university|college|teacher|student|مدرسة|جامعة|مدرس|تعليم/.test(low)) return t("lamarSchool");
  if(/work|job|boss|salary|employment|شغل|عمل|وظيفة|مرتب|مدير/.test(low)) return t("lamarWork");
  if(/emergency|ambulance|police|fire|urgent|danger|unsafe|طوارئ|إسعاف|شرطة|حريق|خطر|مش آمنة|غير آمنة|غير آمن/.test(low)) return t("lamarEmergency");
  if(/right|rights|law|legal|قانون|حقوق|قانوني|حق/.test(low)){$("#rights")?.scrollIntoView({behavior:"smooth"});return t("lamarRights")}
  if(!selected) return t("lamarNeedCountry");
  return t("lamarGeneric");
}
function lamarReply(raw){
  const low=String(raw).toLowerCase();
  if(/employer|hasn.?t paid|not paid|unpaid|salary|wage|pay for two months|مرتب|راتب|أجر|مادفعش|لم يدفع|شهرين/.test(low)){
    conversation.situation="unpaid wages";
    setTimeout(()=>addMessage("bot",demoPathwayMessage()),260);
    return t("demoIntro")+"\n\n"+t("demoQ1");
  }
  return lamarBaseReply(raw);
}

function init(){
  setupNavigation();setupModals();setupTools();setupExplore();setupSearch();setupLamar();setupLanguage();setupHeroLinks();translatePage();renderRealMap();
  window.addEventListener("resize",()=>{clearTimeout(window._adalaResize);window._adalaResize=setTimeout(renderRealMap,180)});
  setTimeout(revealPageLoader,500);
}

window.openLamar=openLamar;window.closeLamar=closeLamar;window.sendLamar=sendLamar;window.selectCountry=requestCountryConfirmation;window.openCountryModal=openCountryModal;window.renderLaw=renderLaw;

if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
