document.addEventListener('DOMContentLoaded', () => {
    const htmlElement = document.documentElement;

    /* ==========================================================================
       Language Switcher (EN/AR/TR)
       ========================================================================== */
    const translations = {
        en: {
            logoText: "RAWAN BUSINESS",
            pageTitle: "Rawan Business | Portfolio",
            metaDesc: "Rawan Osama is a visual designer specializing in brand identity and AI-powered storytelling.",
            navAbout: "About",
            navWork: "Selected Works",
            navServices: "Services",
            navTalk: "Let's Talk",
            heroSubtitle: "AI-Powered Visual Identity & Web Designer",
            heroTitle: "Rawan Osama",
            heroTagline: "\"Where Branding Meets AI Innovation\"",
            heroDesc: "Transforming complex imagination into vivid visual reality. Through strategic design, professional web management, and AI-powered animation, I create compelling stories that elevate brands to new creative heights.",
            btnViewWork: "View Selected Works",
            btnGetInTouch: "Get in Touch",
            // Payment Modal
            checkoutTitle: "Complete Your Purchase",
            checkoutSubtitlePrefix: "Secure checkout for",
            cardPaymentTab: "Card Payment",
            vodafoneCashTab: "Vodafone Cash",
            cardholderNameLabel: "Cardholder Name",
            cardholderNamePlaceholder: "e.g. John Doe",
            cardNumberLabel: "Card Number",
            cardNumberPlaceholder: "•••• •••• •••• ••••",
            cardExpiryLabel: "Expiration Date",
            cardCvvLabel: "CVV",
            cardCvvPlaceholder: "•••",
            btnPayAndDownload: "Pay & Securely Download",
            vodafoneTitle: "Mobile Wallet Payment",
            vodafoneDesc: "Enter your mobile number to pay. The amount will be transferred directly to the merchant's account.",
            vfNumberLabel: "Your Vodafone Cash Number",
            vfNumberPlaceholder: "010XXXXXXXX",
            vfTxidLabel: "Verification Code",
            vfTxidPlaceholder: "4-digit verification code",
            vfTxidHint: "(Enter the 4-digit verification code sent to your phone).",
            btnVerifyAndDownload: "Verify & Securely Download",
            btnSendCode: "Send Code",
            btnCopy: "Copy",
            verificationCodeLabel: "Verification Code:",
            processingPayment: "Processing Payment...",
            connectingGateway: "Connecting to gateway and generating secure token...",
            paymentSuccessful: "Payment Successful!",
            readyForDownload: "Your story is ready for download.",
            btnDownloadNow: "Download PDF Now",
            clickToCloseFolder: "Click to close folder",
            aboutTitle: "The Architect Behind the Vision",
            aboutP1: "I am a visual identity and web designer, bridging the gap between academic linguistic studies and a deep passion for technology. With over a year of experience specializing in brand identity, web design & management, and AI storytelling, I help brands tell their unique stories through clean, fast, and compelling digital experiences.",
            aboutP2: "Currently studying Turkish at Ain Shams University, I bring a unique cultural depth and global communication flexibility to every project. My approach merges analytical linguistic structures with fluid visual aesthetics to craft unforgettable digital experiences.",
            skillsTitle: "Core Capabilities",
            skillDesign: "Excellence in Design & Web",
            skillDesignDesc: "Mastery of editorial design, high-impact social media fundamentals, and professional web design & management, backed by a deep understanding of visual psychology.",
            skillAI: "AI & Motion",
            skillAIDesc: "Advanced 2D/3D AI animation integration and the production of viral-ready, dynamic short-form videos.",
            skillTools: "Modern Tooling",
            skillToolsDesc: "Proficient in both standard and emerging platforms, including Canva, CapCut, web management systems, and cutting-edge AI design suites.",
            workTitle: "Selected Works",

            // Folder 1
            folderTabStories: "Stories & Covers",
            catStories: "Stories & Book Covers",
            catStoriesDesc: "Engaging stories and premium book cover designs created for language learners.",
            freeBadge: "✨ FREE STORY",
            freeBookTitle: "The Smile That Lied",
            freeBookDesc: "A young girl is drawn to a beautiful toy shop, lured by a woman's fake smile. Stripped of her freedom, her only hope is a memorized number... A gripping tale about trust and caution.",
            downloadFree: "Download PDF",
            viewFree: "Read Online",
            buyOnAmazon: "Buy on Amazon",
            originalPriceLabel: "Original Price:",
            offerPriceLabel: "Offer Price:",
            discountBadge: "🔥 Offer",
            payMethods: "Payment Methods:",
            storyA1Title: "The Secret of the Night",
            storyA1Desc: "Deep within an ancient, whispering forest, a young girl wanders off the path and stumbles upon a mysterious structure hidden among the trees. What starts as a simple walk turns into a thrilling journey of discovery, revealing secrets that have been buried for centuries...",
            storyA2Title: "The Secret of the Library",
            storyA2Desc: "Walking down a quiet street, a curious girl notices a hidden doorway to a mysterious place that looks like a library. Stepping inside, she is drawn to an old volume when suddenly, a brilliant light radiates from its pages...",
            storyB1Title: "The Lost Treasure",
            storyB1Desc: "An intermediate quest full of riddles, perfect for grammar and vocabulary growth.",
            storyB2Title: "Echoes of Time",
            storyB2Desc: "An upper-intermediate sci-fi journey with rich dialogue and complex grammar.",
            storyC1Title: "The Shadow Empire",
            storyC1Desc: "An advanced fantasy novel using rich metaphors and literary narrative structures.",
            storyC2Title: "The Quantum Gate",
            storyC2Desc: "A masterclass in storytelling with scientific themes, complex idioms, and native-level fluency constructs.",

            // Folder 2
            folderTabDesigns: "Design Studio",
            catDigital: "Design Studio",
            catDigitalDesc: "Professional CV layouts, recruitment branding, and premium social media campaign graphics.",
            innerFolderTitle: "Select Subsection",
            cvSubfolderTitle: "CVs & Recruitment Designs",
            cvSubfolderDesc: "Click to open CV and investment portfolios.",
            socialSubfolderTitle: "Social Media Designs",
            socialSubfolderDesc: "Click to view Brazilian social media campaigns.",
            openDesigns: "Open Designs",
            designTagCv: "CV Layout",
            designTagAd: "Hiring Campaign",
            cv1Title: "Minimalist Executive ATS Template",
            cv1Desc: "Highly optimized, dual-column minimalist format designed to pass recruiters' applicant tracking systems.",
            cv2Title: "Creative Professional CV",
            cv2Desc: "Modern design featuring gold margins and custom typography details for marketing and design roles.",
            ad1Title: "Corporate Recruitment Campaign Ad",
            ad1Desc: "A clean, high-impact hiring banner designed to showcase job openings with professional corporate branding.",

            // Folder 3
            folderTabVideos: "Video Lab",
            catVideos: "Video Editing",
            catVideosDesc: "AI-powered video editing and motion graphic showcases.",
            videoPromoTitle: "Video",
            videoPromoDesc: "Highly polished motion graphics presentation. Click the play button or 'Open Video' to watch in a popup player.",
            openVideo: "Open Video",

            // General
            openFolder: "Open Folder",
            closeFolder: "Close Folder",
            servicesTitle: "Collaboration Charter",
            servicesIntro: "I deliver not just visuals, but strategic partnerships built on trust, rapid execution, and uncompromising quality.",
            serviceExecution: "Instant Execution",
            serviceExecutionDesc: "Rapid turnaround times without sacrificing the high-end editorial standard.",
            servicePrecision: "Strategic Precision",
            servicePrecisionDesc: "Every pixel serves a purpose, aligned strictly with your core brand objectives.",
            serviceSatisfaction: "Satisfaction Guarantee",
            serviceSatisfactionDesc: "Commitment to perfection with 3 inclusive, comprehensive revision rounds per milestone.",
            contactTitle: "Ready to elevate your visual narrative?",
            contactDesc: "Let's collaborate to translate your brand's essence into a compelling digital and print reality.",
            btnStartConv: "Start a Conversation",
            footerTagline: "Visual Identity & AI Motion",
            copyright: "Rawan Business. All rights reserved."
        },
        ar: {
            logoText: "روان بيزنس",
            pageTitle: "Rawan Business | Portfolio",
            metaDesc: "روان أسامة مصممة بصرية متخصصة في هوية العلامة التجارية وسرد القصص بالذكاء الاصطناعي.",
            navAbout: "عني",
            navWork: "الأعمال المختارة",
            navServices: "الخدمات",
            navTalk: "لنتحدث",
            heroSubtitle: "مصممة هوية بصرية، مطوره مواقع و صانعة محتوى بالذكاء الاصطناعي",
            heroTitle: "روان أسامة",
            heroTagline: "\"حيث يلتقي بناء العلامة التجارية بابتكار الذكاء الاصطناعي\"",
            heroDesc: "تحويل الخيال المعقد إلى واقع مرئي نابض بالحياة. من خلال التصميم الاستراتيجي، بناء المواقع الاحترافية، والرسوم المتحركة المبتكرة بالذكاء الاصطناعي، أصنع قصصاً بصرية ترتقي بالعلامات التجارية إلى آفاق إبداعية جديدة.",
            btnViewWork: "عرض الأعمال المختارة",
            btnGetInTouch: "تواصل معي",
            // Payment Modal
            checkoutTitle: "إتمام عملية الشراء",
            checkoutSubtitlePrefix: "الدفع الآمن لـ",
            cardPaymentTab: "الدفع بالبطاقة",
            vodafoneCashTab: "فودافون كاش",
            cardholderNameLabel: "اسم صاحب البطاقة",
            cardholderNamePlaceholder: "مثال: روان أسامة",
            cardNumberLabel: "رقم البطاقة",
            cardNumberPlaceholder: "•••• •••• •••• ••••",
            cardExpiryLabel: "تاريخ الانتهاء",
            cardCvvLabel: "رمز الأمان (CVV)",
            cardCvvPlaceholder: "•••",
            btnPayAndDownload: "ادفع وحمّل بأمان",
            vodafoneTitle: "الدفع عبر محفظة الهاتف المحمول",
            vodafoneDesc: "أدخل رقم محفظتك للدفع. سيتم تحويل المبلغ مباشرة إلى حساب التاجر.",
            vfNumberLabel: "رقم فودافون كاش الخاص بك",
            vfNumberPlaceholder: "010XXXXXXXX",
            vfTxidLabel: "رمز التحقق",
            vfTxidPlaceholder: "رمز تحقق مكون من 4 أرقام",
            vfTxidHint: "(أدخل رمز التحقق المكون من 4 أرقام المرسل إلى هاتفك).",
            btnVerifyAndDownload: "تحقق وحمّل بأمان",
            btnSendCode: "إرسال الكود",
            btnCopy: "نسخ",
            verificationCodeLabel: "رمز التحقق:",
            processingPayment: "جاري معالجة الدفع...",
            connectingGateway: "الاتصال ببوابة الدفع وإنشاء رمز آمن...",
            paymentSuccessful: "تم الدفع بنجاح!",
            readyForDownload: "قصتك جاهزة للتحميل الآن.",
            btnDownloadNow: "تحميل الملف الآن",
            clickToCloseFolder: "انقر لإغلاق المجلد",
            aboutTitle: "المهندسة وراء الرؤية",
            aboutP1: "أنا مصممة بصرية ومطورة مواقع، أسد الفجوة بين الدراسات اللغوية الأكاديمية والشغف العميق بالتكنولوجيا. مع أكثر من عام من الخبرة في تخصص هوية العلامة التجارية، تصميم المواقع، وسرد القصص بالذكاء الاصطناعي، أساعد العلامات التجارية على سرد قصصها الفريدة بأساليب بصرية بسيطة وسريعة ومقنعة.",
            aboutP2: "أدرس حالياً اللغة التركية في جامعة عين شمس، مما يضيف عمقاً ثقافياً فريداً ومرونة في التواصل العالمي على كل مشروع. يدمج نهجي بين الهياكل اللغوية التحليلية والجماليات البصرية السلسة لصنع تجارب رقمية لا تُنسى.",
            skillsTitle: "القدرات الأساسية",
            skillDesign: "التفوق في التصميم والمواقع",
            skillDesignDesc: "إتقان التصميم التحريري، أساسيات وسائل التواصل الاجتماعي المؤثرة، مع تصميم وإدارة المواقع الاحترافية لضمان تجربة مستخدم سلسة وفهم عميق لعلم النفس البصري.",
            skillAI: "الذكاء الاصطناعي والحركة",
            skillAIDesc: "التكامل المتقدم للرسوم المتحركة ثنائية وثلاثية الأبعاد بالذكاء الاصطناعي وإنتاج مقاطع فيديو قصيرة ديناميكية جاهزة للانتشار.",
            skillTools: "الأدوات الحديثة",
            skillToolsDesc: "محترفة في المنصات القياسية والناشئة، بما في ذلك Canva وCapCut، مع أدوات بناء وإدارة المواقع، وحزم تصميم الذكاء الاصطناعي الحديثة.",
            workTitle: "الأعمال المختارة",

            // Folder 1
            folderTabStories: "القصص والأغلفة",
            catStories: "قصص وأغلفة كتب",
            catStoriesDesc: "قصص شيقة وتصميمات أغلفة كتب مميزة مصممة لمتعلمي اللغات.",
            freeBadge: "✨ قصة مجانية",
            freeBookTitle: "الابتسامة التي كذبت",
            freeBookDesc: "تدور القصة حول فتاة صغيرة تنجذب إلى محل ألعاب رائع الجمال، دون أن تدرك الفخ الذي نصبته لها امرأة ذات ابتسامة دافئة مزيفة. عندما يتم اختطافها، يصبح أملها الوحيد في الهروب هو هاتف محمول معطل ورقم هاتف واحد حفظته عن ظهر قلب. هل ستتمكن من إنقاذ نفسها قبل فوات الأوان؟",
            downloadFree: "تحميل PDF",
            viewFree: "اقرأ أونلاين",
            buyOnAmazon: "اشتري من أمازون",
            originalPriceLabel: "السعر الأصلي:",
            offerPriceLabel: "سعر العرض:",
            discountBadge: "🔥 عرض خاص",
            payMethods: "طرق الدفع المتاحة:",
            storyA1Title: "سر الليل",
            storyA1Desc: "في أعماق غابة قديمة غامضة، تبتعد فتاة صغيرة عن الطريق لتتعثر ببناء غامض مخفي بين الأشجار. ما بدأ كنزهة بسيطة يتحول إلى رحلة اكتشاف مثيرة، لتكشف عن أسرار دفنت لقرون...",
            storyA2Title: "سر المكتبة",
            storyA2Desc: "وهي تسير في شارع هادئ، لاحظت فتاة فضولية بابًا مخفيًا يؤدي إلى مكان غامض يشبه المكتبة. وحين دخلت، انجذبت إلى كتاب قديم، وفجأة انبثق منه ضوء ساطع مبهر...",
            storyB1Title: "الكنز المفقود",
            storyB1Desc: "مهمة متوسطة مليئة بالألغاز، مثالية لنمو القواعد والمفردات.",
            storyB2Title: "أصداء الزمن",
            storyB2Desc: "رحلة خيال علمي فوق المتوسطة مع حوار غني وقواعد لغوية معقدة.",
            storyC1Title: "إمبراطورية الظل",
            storyC1Desc: "رواية خيالية متقدمة تستخدم استعارات غنية وهياكل سردية أدبية.",
            storyC2Title: "بوابة الكم",
            storyC2Desc: "سرد قصصي احترافي بمواضيع علمية، مصطلحات معقدة وتراكيب لغوية متقدمة.",

            // Folder 2
            folderTabDesigns: "استوديو التصميم",
            catDigital: "استوديو التصميم",
            catDigitalDesc: "تصاميم سيرة ذاتية احترافية، علامات تجارية للتوظيف، ورسومات حملات وسائل التواصل الاجتماعي المميزة.",
            innerFolderTitle: "اختر القسم الفرعي",
            cvSubfolderTitle: "السير الذاتية وتصاميم التوظيف",
            cvSubfolderDesc: "انقر لفتح ملفات السيرة الذاتية والاستثمار.",
            socialSubfolderTitle: "تصميمات السوشيال ميديا",
            socialSubfolderDesc: "انقر لعرض حملات وسائل التواصل الاجتماعي البرازيلية.",
            openDesigns: "افتح التصاميم",
            designTagCv: "تخطيط السيرة الذاتية",
            designTagAd: "حملة توظيف",
            cv1Title: "قالب سيرة ذاتية تنفيذي مبسط متوافق مع ATS",
            cv1Desc: "تنسيق عمودين مبسط ومحسّن للغاية ومصمم لتخطي أنظمة فحص السير الذاتية لدى مسؤولي التوظيف.",
            cv2Title: "سيرة ذاتية مهنية إبداعية",
            cv2Desc: "تصميم عصري يتميز بهوامش ذهبية وتفاصيل طباعة مخصصة لوظائف التسويق والتصميم.",
            ad1Title: "إعلان حملة توظيف مؤسسية",
            ad1Desc: "لافتة توظيف نظيفة وعالية التأثير مصممة لعرض الوظائف الشاغرة بهوية مؤسسية احترافية.",

            // Folder 3
            folderTabVideos: "مختبر الفيديو",
            catVideos: "تعديل الفيديو",
            catVideosDesc: "مونتاج الفيديو المدعوم بالذكاء الاصطناعي وعروض الرسوم المتحركة.",
            videoPromoTitle: "فيديو",
            videoPromoDesc: "عرض رسوم متحركة احترافي. انقر زر التشغيل أو 'افتح الفيديو' لمشاهدته في نافذة منبثقة.",
            openVideo: "افتح الفيديو",

            // General
            openFolder: "افتح المجلد",
            closeFolder: "إغلاق المجلد",
            servicesTitle: "ميثاق التعاون",
            servicesIntro: "أقدم أكثر من مجرد مرئيات؛ بل شراكات استراتيجية مبنية على الثقة، التنفيذ السريع، والجودة المطلقة.",
            serviceExecution: "تنفيذ فوري",
            serviceExecutionDesc: "أوقات تنفيذ سريعة للغاية دون التضحية بالمعايير التحريرية الراقية.",
            servicePrecision: "الدقة الاستراتيجية",
            servicePrecisionDesc: "كل بكسل يخدم غرضاً معيناً، متوافقاً تماماً مع أهداف علامتك التجارية الأساسية.",
            serviceSatisfaction: "ضمان الرضا",
            serviceSatisfactionDesc: "التزام بالكمال مع 3 جولات مراجعة شاملة ومجانية لكل مرحلة من مراحل المشروع.",
            contactTitle: "هل أنت مستعد للارتقاء بسردك البصري؟",
            contactDesc: "دعنا نتعاون لترجمة جوهر علامتك التجارية إلى واقع رقمي ومطبوع مقنع.",
            btnStartConv: "ابدأ محادثة",
            footerTagline: "الهوية البصرية والحركة بالذكاء الاصطناعي",
            copyright: "روان بيزنس. جميع الحقوق محفوظة."
        },
        tr: {
            logoText: "RAVAN BUSINESS",
            pageTitle: "Ravan Business | Portfolio",
            metaDesc: "Ravan Osama, marka kimliği ve yapay zeka destekli hikaye anlatımı konusunda uzmanlaşmış bir görsel tasarımcıdır.",
            navAbout: "Hakkımda",
            navWork: "Seçili Çalışmalar",
            navServices: "Hizmetler",
            navTalk: "Konuşalım",
            heroSubtitle: "Yapay Zeka İçerik Üreticisi, Kurumsal Kimlik & Web Tasarımcısı",
            heroTitle: "Ravan Osama",
            heroTagline: "\"Markalaşmanın Yapay Zeka İnovasyonuyla Buluştuğu Yer\"",
            heroDesc: "Karmaşık hayalleri canlı bir görsel gerçekliğe dönüştürüyorum. Stratejik tasarım, profesyonel web yönetimi ve yapay zeka destekli animasyonlarla, markaları yeni yaratıcı yüksekliklere taşıyan etkileyici hikayeler yaratıyorum.",
            btnViewWork: "Seçili Çalışmaları Görüntüle",
            btnGetInTouch: "İletişime Geç",
            // Payment Modal
            checkoutTitle: "Satın Alma İşlemini Tamamla",
            checkoutSubtitlePrefix: "Güvenli ödeme:",
            cardPaymentTab: "Kart ile Ödeme",
            vodafoneCashTab: "Vodafone Cash",
            cardholderNameLabel: "Kart Sahibi Adı",
            cardholderNamePlaceholder: "Örn. Ravan Osama",
            cardNumberLabel: "Kart Numarası",
            cardNumberPlaceholder: "•••• •••• •••• ••••",
            cardExpiryLabel: "Son Kullanma Tarihi",
            cardCvvLabel: "CVV",
            cardCvvPlaceholder: "•••",
            btnPayAndDownload: "Öde ve Güvenle İndir",
            vodafoneTitle: "Mobil Cüzdan Ödemesi",
            vodafoneDesc: "Ödemek için mobil numaranızı girin. Tutar doğrudan satıcı hesabına aktarılacaktır.",
            vfNumberLabel: "Vodafone Cash Numaranız",
            vfNumberPlaceholder: "010XXXXXXXX",
            vfTxidLabel: "Doğrulama Kodu",
            vfTxidPlaceholder: "4 haneli doğrulama kodu",
            vfTxidHint: "(Telefonunuza gönderilen 4 haneli doğrulama kodunu girin.)",
            btnVerifyAndDownload: "Doğrula ve Güvenle İndir",
            btnSendCode: "Kod Gönder",
            btnCopy: "Kopyala",
            verificationCodeLabel: "Doğrulama Kodu:",
            processingPayment: "Ödeme İşleniyor...",
            connectingGateway: "Ödeme ağ geçidine bağlanılıyor ve güvenli belirteç oluşturuluyor...",
            paymentSuccessful: "Ödeme Başarılı!",
            readyForDownload: "Hikayeniz indirilmeye hazır.",
            btnDownloadNow: "PDF'i Şimdi İndir",
            clickToCloseFolder: "Klasörü kapatmak için tıklayın",
            aboutTitle: "Vizyonun Arkasındaki Mimar",
            aboutP1: "Akademik dil çalışmaları ile derin teknoloji tutkusu arasında köprü kuran bir kurumsal kimlik ve web tasarımcısıyım. Marka kimliği, web tasarımı ve yönetimi ile yapay zeka destekli görsel hikaye anlatımı konularında bir yılı aşkın deneyimimle, markaların benzersiz hikayelerini temiz, hızlı ve etkileyici dijital deneyimlerle anlatmalarına yardımcı oluyorum.",
            aboutP2: "Şu anda Ain Shams Üniversitesi'nde Türkçe eğitimi alıyorum ve her projeye benzersiz bir kültürel derinlik ve küresel iletişim esnekliği katıyorum. Yaklaşımım, unutulmaz dijital deneyimler sunmak için analitik dil yapılarını akıcı görsel estetikle birleştiriyor.",
            skillsTitle: "Temel Yetenekler",
            skillDesign: "Tasarım ve Web'de Mükemmellik",
            skillDesignDesc: "Görsel psikolojinin derinlemesine anlaşılmasıyla desteklenen; editoryal tasarım, yüksek etkili sosyal medya temelleri ve profesyonel web tasarımı ve yönetimi uzmanlığı.",
            skillAI: "Yapay Zeka ve Hareket",
            skillAIDesc: "Gelişmiş 2D/3D yapay zeka animasyon entegrasyonu ve viral hazır, dinamik kısa formlu videoların üretimi.",
            skillsTitle: "Temel Yetenekler",
            skillTools: "Modern Araçlar",
            skillToolsDesc: "Canva, CapCut, web yönetim sistemleri ve en son teknoloji yapay zeka tasarım paketleri dahil olmak üzere hem standart hem de yeni gelişen platformlarda yetkinlik.",
            workTitle: "Seçili Çalışmalar",

            // Folder 1
            folderTabStories: "Hikayeler ve Kapaklar",
            catStories: "Hikayeler & Kitap Kapakları",
            catStoriesDesc: "Dil öğrenenler için hazırlanmış ilgi çekici hikayeler ve özel kitap kapağı tasarımları.",
            freeBadge: "✨ ÜCRETSİZ HİKAYE",
            freeBookTitle: "Yalan Söyleyen Gülümseme",
            freeBookDesc: "Güzel bir oyuncakçı dükkanına aldanıp sahte gülümsemeli bir kadın tarafından kaçırılan küçük bir kızın sürükleyici hikayesi. Tek kurtuluş umudu, ezbere bildiği annesinin telefon numarasıdır.",
            downloadFree: "PDF İndir",
            viewFree: "Çevrimiçi Oku",
            buyOnAmazon: "Amazon'dan Satın Al",
            originalPriceLabel: "Orijinal Fiyat:",
            offerPriceLabel: "Fırsat Fiyatı:",
            discountBadge: "🔥 Fırsat",
            payMethods: "Ödeme Yöntemleri:",
            storyA1Title: "Gecenin Sırrı",
            storyA1Desc: "Kadim ve uğultulu bir ormanın derinliklerinde, genç bir kız yoldan sapar ve ağaçların arasına gizlenmiş gizemli bir yapıya rastlar. Basit bir yürüyüş olarak başlayan şey, yüzyıllardır gömülü kalmış sırları açığa çıkaran heyecan dolu bir keşif yolculuğuna dönüşür...",
            storyA2Title: "Kütüphanenin Sırrı",
            storyA2Desc: "Sessiz bir sokakta yürürken, meraklı bir kız kütüphaneye benzeyen gizemli bir yere açılan gizli bir kapı fark etti. İçeri girdiğinde eski bir kitaba yaklaştı ve aniden sayfalarından parlak bir ışık yükseldi...",
            storyB1Title: "Kayıp Hazine",
            storyB1Desc: "Gramer ve kelime gelişimi için mükemmel, bulmacalarla dolu orta seviye bir arayış.",
            storyB2Title: "Zamanın Yankıları",
            storyB2Desc: "Zengin diyaloglar ve karmaşık gramer içeren orta-ileri seviye bilim kurgu yolculuğu.",
            storyC1Title: "Gölge İmparatorluğu",
            storyC1Desc: "Zengin metaforlar ve edebi anlatı yapıları kullanan ileri düzey fantastik bir roman.",
            storyC2Title: "Kuantum Kapısı",
            storyC2Desc: "Bilimsel temalar, karmaşık deyimler ve akıcı dil yapıları içeren usta işi bir hikaye anlatımı.",

            // Folder 2
            folderTabDesigns: "Tasarım Stüdyosu",
            catDigital: "Tasarım Stüdyosu",
            catDigitalDesc: "Profesyonel CV tasarımları, işe alım reklam kampanyaları ve özel sosyal medya görselleri.",
            innerFolderTitle: "Alt Bölüm Seçin",
            cvSubfolderTitle: "CV ve İşe Alım Tasarımları",
            cvSubfolderDesc: "CV ve yatırım portföylerini açmak için tıklayın.",
            socialSubfolderTitle: "Sosyal Medya Tasarımları",
            socialSubfolderDesc: "Brezilya sosyal medya kampanyalarını görüntülemek için tıklayın.",
            openDesigns: "Tasarımları Aç",
            designTagCv: "CV Tasarımı",
            designTagAd: "İşe Alım Kampanyası",
            cv1Title: "Minimalist Yönetici ATS Şablonu",
            cv1Desc: "İşe alım uzmanlarının aday takip sistemlerini geçmek için tasarlanmış, optimize edilmiş iki sütunlu minimalist format.",
            cv2Title: "Yaratıcı Profesyonel CV",
            cv2Desc: "Pazarlama ve tasarım rollerine yönelik altın kenar boşlukları ve özel tipografi detayları içeren modern tasarım.",
            ad1Title: "Kurumsal İşe Alım Kampanya Reklamı",
            ad1Desc: "İş ilanlarını profesyonel kurumsal markalama ile sergilemek için tasarlanmış temiz, yüksek etkili işe alım afişi.",

            // Folder 3
            folderTabVideos: "Video Laboratuvarı",
            catVideos: "Video Düzenleme",
            catVideosDesc: "Yapay zeka destekli video düzenleme ve hareketli grafik gösterileri.",
            videoPromoTitle: "Video",
            videoPromoDesc: "Yüksek kaliteli hareketli grafik sunumu. İzlemek için oynat düğmesine veya 'Videoyu Aç'a tıklayın.",
            openVideo: "Videoyu Aç",

            // General
            openFolder: "Klasörü Aç",
            closeFolder: "Klasörü Kapat",
            servicesTitle: "İşbirliği Bildirgesi",
            servicesIntro: "Sadece görseller değil, güven, hızlı uygulama ve tavizsiz kalite üzerine kurulu stratejik ortaklıklar sunuyorum.",
            serviceExecution: "Anında Uygulama",
            serviceExecutionDesc: "Üst düzey editoryal standartlardan ödün vermeden hızlı geri dönüş süreleri.",
            servicePrecision: "Stratejik Hassasiyet",
            servicePrecisionDesc: "Her piksel, ana marka hedeflerinizle sıkı sıkıya uyumlu bir amaca hizmet eder.",
            serviceSatisfaction: "Memnuniyet Garantisi",
            serviceSatisfactionDesc: "Her kilometre taşı için 3 kapsamlı revizyon turu ile mükemmellik taahhüdü.",
            contactTitle: "Görsel hikayenizi yükseltmeye hazır mısınız?",
            contactDesc: "Markanızın özünü etkileyici bir dijital ve basılı gerçekliğe dönüştürmek için işbirliği yapalım.",
            btnStartConv: "Bir Sohbet Başlatın",
            footerTagline: "Görsel Kimlik & Yapay Zeka Hareketi",
            copyright: "Ravan Business. Tüm hakları saklıdır."
        }
    };

    const langSelector = document.querySelector('.lang-selector');
    const langBtn = document.getElementById('lang-btn');
    const langBtnText = document.getElementById('current-lang-text');
    const dropdownItems = document.querySelectorAll('.lang-dropdown li');

    const languages = ['ar', 'en', 'tr'];
    const langNames = {
        ar: 'العربية',
        en: 'English',
        tr: 'Türkçe'
    };

    let currentLang = localStorage.getItem('lang') || 'en';
    if (!languages.includes(currentLang)) currentLang = 'en';

    const updateLanguage = (lang) => {
        try {
            if (!translations[lang]) {
                console.error(`Translation for language "${lang}" not found.`);
                return;
            }

            htmlElement.setAttribute('lang', lang);
            htmlElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

            // Update document title and meta description safely
            document.title = translations[lang].pageTitle || "Rawan Business";
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription && translations[lang].metaDesc) {
                metaDescription.setAttribute('content', translations[lang].metaDesc);
            }

            // Update button text safely
            if (langBtnText) {
                langBtnText.textContent = langNames[lang];
            }

            // Update all elements with data-i18n attribute safely
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[lang] && translations[lang][key]) {
                    element.textContent = translations[lang][key];
                } else {
                    console.warn(`Translation key "${key}" missing for language "${lang}"`);
                }
            });

            // Adjust folder heights if open
            const activeFolder = document.querySelector('.folder-showcase.active');
            if (activeFolder) {
                const wrapper = activeFolder.querySelector('.folder-content-wrapper');
                if (wrapper) {
                    setTimeout(() => {
                        wrapper.style.maxHeight = wrapper.scrollHeight + 'px';
                    }, 0);
                }
            }

            // Update placeholders
            document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
                const key = element.getAttribute('data-i18n-placeholder');
                if (translations[lang] && translations[lang][key]) {
                    element.setAttribute('placeholder', translations[lang][key]);
                }
            });

            localStorage.setItem('lang', lang);
            currentLang = lang;

            // Trigger internal sub-folder nav update
            if (typeof updateNavState === 'function') {
                updateNavState();
            }
        } catch (error) {
            console.error("Error in updateLanguage:", error);
        }
    };

    // Initial load
    updateLanguage(currentLang);

    // Dropdown Toggle
    if (langBtn && langSelector) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langSelector.classList.toggle('active');
        });
    }

    // Language Selection
    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            const selectedLang = item.getAttribute('data-value');
            updateLanguage(selectedLang);
            if (langSelector) {
                langSelector.classList.remove('active');
            }
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        if (langSelector) {
            langSelector.classList.remove('active');
        }
    });

    /* ==========================================================================
       Dark Mode Toggle
       ========================================================================== */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        htmlElement.setAttribute('data-theme', 'dark');
        updateToggleIcons('dark');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';

            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);

            updateToggleIcons(newTheme);
        });
    }

    function updateToggleIcons(theme) {
        if (sunIcon && moonIcon) {
            if (theme === 'dark') {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            } else {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            }
        }
    }

    /* ==========================================================================
       Smooth Scroll & Anchor Navigation
       ========================================================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const header = document.querySelector('.header');
                const headerHeight = header ? header.offsetHeight : 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ==========================================================================
       Scroll Into View Animations (Intersection Observer)
       ========================================================================== */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section, .hero-image-wrapper').forEach(section => {
        observer.observe(section);
    });

    /* ==========================================================================
       Set Current Year in Footer
       ========================================================================== */
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    /* ==========================================================================
       Interactive Folder Toggles
       ========================================================================== */
    const folderShowcases = document.querySelectorAll('.folder-showcase');

    folderShowcases.forEach(showcase => {
        const header = showcase.querySelector('.folder-header-card');
        const wrapper = showcase.querySelector('.folder-content-wrapper');
        const iconState = showcase.querySelector('.folder-icon-state');
        const actionText = showcase.querySelector('.folder-action-text');

        if (!wrapper || !header) return;

        header.addEventListener('click', () => {
            const isExpanded = showcase.classList.contains('active');

            // Close all other folders first
            folderShowcases.forEach(otherShowcase => {
                if (otherShowcase !== showcase && otherShowcase.classList.contains('active')) {
                    const otherWrapper = otherShowcase.querySelector('.folder-content-wrapper');
                    const otherIcon = otherShowcase.querySelector('.folder-icon-state');
                    const otherText = otherShowcase.querySelector('.folder-action-text');

                    if (otherWrapper) otherWrapper.style.maxHeight = '0px';
                    otherShowcase.classList.remove('active');
                    if (otherIcon) otherIcon.textContent = '📂';
                    if (otherText) {
                        otherText.setAttribute('data-i18n', 'openFolder');
                        otherText.textContent = translations[currentLang].openFolder;
                    }
                }
            });

            if (isExpanded) {
                // Collapse smoothly
                wrapper.style.maxHeight = wrapper.scrollHeight + 'px';
                wrapper.offsetHeight; // force repaint
                wrapper.style.maxHeight = '0px';
                showcase.classList.remove('active');
                if (iconState) iconState.textContent = '📂';
                if (actionText) {
                    actionText.setAttribute('data-i18n', 'openFolder');
                    actionText.textContent = translations[currentLang].openFolder;
                }

                // Smooth scroll back to header
                const headerEl = document.querySelector('.header');
                const headerHeight = headerEl ? headerEl.offsetHeight : 80;
                const elementPosition = showcase.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            } else {
                // Expand smoothly — read scrollHeight BEFORE toggling to avoid page jump
                showcase.classList.add('active');
                // Temporarily make visible off-screen to measure height without layout shift
                wrapper.style.visibility = 'hidden';
                wrapper.style.maxHeight = 'none';
                const fullHeight = wrapper.scrollHeight;
                wrapper.style.maxHeight = '0px';
                wrapper.style.visibility = '';
                wrapper.offsetHeight; // force repaint
                wrapper.style.maxHeight = fullHeight + 'px';
                if (iconState) iconState.textContent = '📁';
                if (actionText) {
                    actionText.setAttribute('data-i18n', 'closeFolder');
                    actionText.textContent = translations[currentLang].closeFolder;
                }
            }
        });
    });

    // Close button inside the folder content
    const closeFolderBtns = document.querySelectorAll('.btn-close-folder');
    closeFolderBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const showcase = btn.closest('.folder-showcase');
            if (showcase) {
                const wrapper = showcase.querySelector('.folder-content-wrapper');
                const iconState = showcase.querySelector('.folder-icon-state');
                const actionText = showcase.querySelector('.folder-action-text');

                if (wrapper) {
                    wrapper.style.maxHeight = wrapper.scrollHeight + 'px';
                    wrapper.offsetHeight; // force repaint
                    wrapper.style.maxHeight = '0px';
                }
                showcase.classList.remove('active');
                if (iconState) iconState.textContent = '📂';
                if (actionText) {
                    actionText.setAttribute('data-i18n', 'openFolder');
                    actionText.textContent = translations[currentLang].openFolder;
                }

                // Scroll back to the folder header card smoothly
                const headerEl = document.querySelector('.header');
                const headerHeight = headerEl ? headerEl.offsetHeight : 80;
                const elementPosition = showcase.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Window resize handler to adjust height dynamically
    window.addEventListener('resize', () => {
        const activeFolder = document.querySelector('.folder-showcase.active');
        if (activeFolder) {
            const wrapper = activeFolder.querySelector('.folder-content-wrapper');
            if (wrapper) wrapper.style.maxHeight = wrapper.scrollHeight + 'px';
        }
    });

    /* ==========================================================================
       Design Studio (Folder 2) Inner Slide-in Sub-navigation
       ========================================================================== */
    const subMenu = document.querySelector('.sub-folders-menu');
    const cvView = document.querySelector('.cv-gallery-view');
    const socialView = document.querySelector('.social-gallery-view');
    const backArrow = document.querySelector('.back-arrow-btn');
    const forwardArrow = document.querySelector('.forward-arrow-btn');
    const innerTitle = document.querySelector('.inner-folder-title');

    const cvTrigger = document.querySelector('.cv-trigger-card');
    const socialTrigger = document.querySelector('.social-trigger-card');

    let prevView = 'menu';
    let currentView = 'menu';

    function updateNavState() {
        if (!backArrow || !forwardArrow || !innerTitle) return;

        if (currentView === 'menu') {
            backArrow.style.opacity = '0.5';
            backArrow.style.pointerEvents = 'none';
            forwardArrow.style.opacity = prevView !== 'menu' ? '1' : '0.5';
            forwardArrow.style.pointerEvents = prevView !== 'menu' ? 'auto' : 'none';
            innerTitle.textContent = translations[currentLang].innerFolderTitle || 'Select Subsection';
        } else {
            backArrow.style.opacity = '1';
            backArrow.style.pointerEvents = 'auto';
            forwardArrow.style.opacity = '0.5';
            forwardArrow.style.pointerEvents = 'none';
            if (currentView === 'cv') {
                innerTitle.textContent = translations[currentLang].cvSubfolderTitle || 'CVs & Recruitment Designs';
            } else if (currentView === 'social') {
                innerTitle.textContent = translations[currentLang].socialSubfolderTitle || 'Social Media Designs';
            }
        }
    }

    function adjustFolderHeight() {
        const folder = document.getElementById('folder-designs');
        if (folder && folder.classList.contains('active')) {
            const wrapper = folder.querySelector('.folder-content-wrapper');
            if (wrapper) {
                // Measure inner content directly to avoid page-level scroll jump
                const inner = folder.querySelector('.folder-content-inner');
                const targetHeight = inner ? inner.offsetHeight + 60 : wrapper.scrollHeight;
                wrapper.style.maxHeight = targetHeight + 'px';
            }
        }
    }

    if (cvTrigger && socialTrigger && subMenu) {
        cvTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            subMenu.style.display = 'none';
            if (cvView) cvView.style.display = 'block';
            if (socialView) socialView.style.display = 'none';
            prevView = currentView;
            currentView = 'cv';
            updateNavState();
            adjustFolderHeight();
        });

        socialTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            subMenu.style.display = 'none';
            if (cvView) cvView.style.display = 'none';
            if (socialView) socialView.style.display = 'block';
            prevView = currentView;
            currentView = 'social';
            updateNavState();
            adjustFolderHeight();
        });

        if (backArrow) {
            backArrow.addEventListener('click', (e) => {
                e.stopPropagation();
                subMenu.style.display = 'grid';
                if (cvView) cvView.style.display = 'none';
                if (socialView) socialView.style.display = 'none';
                prevView = currentView;
                currentView = 'menu';
                updateNavState();
                adjustFolderHeight();
            });
        }

        if (forwardArrow) {
            forwardArrow.addEventListener('click', (e) => {
                e.stopPropagation();
                if (prevView === 'cv') {
                    subMenu.style.display = 'none';
                    if (cvView) cvView.style.display = 'block';
                    currentView = 'cv';
                } else if (prevView === 'social') {
                    subMenu.style.display = 'none';
                    if (socialView) socialView.style.display = 'block';
                    currentView = 'social';
                }
                updateNavState();
                adjustFolderHeight();
            });
        }

        updateNavState();
    }

    // Global reset function for CV items
    window.closeFolderAndReset = function (element) {
        const showcase = document.getElementById('folder-designs');
        if (showcase) {
            const wrapper = showcase.querySelector('.folder-content-wrapper');
            const iconState = showcase.querySelector('.folder-icon-state');
            const actionText = showcase.querySelector('.folder-action-text');

            if (wrapper) {
                wrapper.style.maxHeight = wrapper.scrollHeight + 'px';
                wrapper.offsetHeight; // force repaint
                wrapper.style.maxHeight = '0px';
            }
            showcase.classList.remove('active');
            if (iconState) iconState.textContent = '📂';
            if (actionText) {
                actionText.setAttribute('data-i18n', 'openFolder');
                actionText.textContent = translations[currentLang].openFolder;
            }

            // Reset the sub-navigation menu back to select view
            setTimeout(() => {
                if (subMenu) subMenu.style.display = 'grid';
                if (cvView) cvView.style.display = 'none';
                if (socialView) socialView.style.display = 'none';
                currentView = 'menu';
                prevView = 'menu';
                updateNavState();
            }, 800);

            // Smooth scroll back to header
            const headerEl = document.querySelector('.header');
            const headerHeight = headerEl ? headerEl.offsetHeight : 80;
            const elementPosition = showcase.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    /* ==========================================================================
       Video Editing (Folder 3) — Popup Video Modal
       ========================================================================== */
    window.playOfflineVideo = function () {
        const videoModal = document.getElementById('video-modal');
        const popupPlayer = document.getElementById('popup-video-player');
        if (videoModal && popupPlayer) {
            videoModal.classList.add('active');
            // Small delay to let fade-in start before playing
            setTimeout(() => {
                popupPlayer.play().catch(() => { });
            }, 200);
        }
    };

    window.closeVideoModal = function () {
        const videoModal = document.getElementById('video-modal');
        const popupPlayer = document.getElementById('popup-video-player');
        if (popupPlayer) {
            popupPlayer.pause();
            popupPlayer.currentTime = 0;
        }
        if (videoModal) {
            videoModal.classList.remove('active');
        }
    };

    // Close video modal on overlay click
    const videoModalEl = document.getElementById('video-modal');
    if (videoModalEl) {
        videoModalEl.addEventListener('click', function (e) {
            if (e.target === this) {
                window.closeVideoModal();
            }
        });
    }

    /* ==========================================================================
       Lightbox Functions
       ========================================================================== */
    window.openLightbox = function (src) {
        const modal = document.getElementById('lightbox-modal');
        const img = document.getElementById('lightbox-img');
        if (modal && img) {
            img.src = src;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeLightbox = function () {
        const modal = document.getElementById('lightbox-modal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            // Clear src after transition
            setTimeout(() => {
                const img = document.getElementById('lightbox-img');
                if (img) img.src = '';
            }, 500);
        }
    };

    // Keyboard ESC to close modals
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            window.closeLightbox();
            window.closeVideoModal();
            window.closeCheckout && window.closeCheckout();
        }
    });

    /* ==========================================================================
       Payment Modal Checkout Flow (Simulated Gateway)
       ========================================================================== */
    let activeBook = '';
    let activePrice = '';
    let activeMethod = 'card';
    let activePdf = '';

    // HTML/XSS input sanitization function
    function sanitizeInput(str) {
        if (typeof str !== 'string') return '';
        return str.replace(/[&<>"']/g, function (m) {
            switch (m) {
                case '&': return '&amp;';
                case '<': return '&lt;';
                case '>': return '&gt;';
                case '"': return '&quot;';
                case "'": return '&#x27;';
                default: return m;
            }
        });
    }

    // Vodafone Cash Simulated OTP Send & Copy Logic
    const sendCodeBtn = document.getElementById('vf-send-code');
    const copyCodeBtn = document.getElementById('vf-copy-code');
    const vfNumberInput = document.getElementById('vf-number');
    const vfCodeContainer = document.getElementById('vf-code-container');
    const vfGeneratedCode = document.getElementById('vf-generated-code');

    if (sendCodeBtn) {
        sendCodeBtn.addEventListener('click', () => {
            if (vfNumberInput && !vfNumberInput.checkValidity()) {
                vfNumberInput.reportValidity();
                return;
            }
            // Generate a random 4-digit code
            const otpCode = Math.floor(1000 + Math.random() * 9000).toString();
            if (vfGeneratedCode) {
                vfGeneratedCode.textContent = otpCode;
            }
            if (vfCodeContainer) {
                vfCodeContainer.style.display = 'flex';
            }
        });
    }

    if (copyCodeBtn) {
        copyCodeBtn.addEventListener('click', () => {
            const codeVal = vfGeneratedCode ? vfGeneratedCode.textContent : '';
            if (!codeVal) return;

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(codeVal).then(showCopiedFeedback, () => fallbackCopy(codeVal));
            } else {
                fallbackCopy(codeVal);
            }
        });
    }

    function showCopiedFeedback() {
        if (!copyCodeBtn) return;
        const originalText = copyCodeBtn.textContent;
        const copiedText = currentLang === 'ar' ? 'تم النسخ!' : (currentLang === 'tr' ? 'Kopyalandı!' : 'Copied!');
        copyCodeBtn.textContent = copiedText;
        setTimeout(() => {
            copyCodeBtn.textContent = originalText;
        }, 2000);
    }

    function fallbackCopy(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.top = "0";
        textArea.style.left = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            showCopiedFeedback();
        } catch (err) {
            console.error('Fallback copy failed', err);
        }
        document.body.removeChild(textArea);
    }

    window.openCheckout = function (bookTitle, price, pdfFile) {
        activeBook = bookTitle;
        activePrice = price;
        activePdf = pdfFile || 'default_story.pdf';

        const titleEl = document.getElementById('checkout-title');
        const subTitle = document.getElementById('checkout-subtitle');
        if (titleEl) {
            titleEl.textContent = translations[currentLang].checkoutTitle || "Complete Your Purchase";
        }
        if (subTitle) {
            const prefix = translations[currentLang].checkoutSubtitlePrefix || "Secure checkout for";
            const localizedBookTitle = translations[currentLang][bookTitle] || bookTitle;
            subTitle.textContent = `${prefix} "${localizedBookTitle}"`;
        }

        const priceDisplay = document.getElementById('vodafone-price-display');
        if (priceDisplay) {
            priceDisplay.textContent = price.split('/')[0].trim();
        }

        // Reset screens
        const formScreen = document.getElementById('modal-content-form');
        const loadingScreen = document.getElementById('modal-loading');
        const successScreen = document.getElementById('modal-success');

        if (formScreen) formScreen.style.display = 'block';
        if (loadingScreen) loadingScreen.style.display = 'none';
        if (successScreen) successScreen.style.display = 'none';

        // RESET Vodafone OTP container, text and form inputs
        if (vfCodeContainer) vfCodeContainer.style.display = 'none';
        if (vfGeneratedCode) vfGeneratedCode.textContent = '';

        const vfBookInput = document.getElementById('vf-book-title');
        if (vfBookInput) vfBookInput.value = bookTitle;

        const formCard = document.getElementById('form-card');
        const formVodafone = document.getElementById('form-vodafone');
        if (formCard) formCard.reset();
        if (formVodafone) formVodafone.reset();

        const modal = document.getElementById('payment-modal');
        if (modal) {
            modal.classList.add('active');
        }
    };

    window.closeCheckout = function () {
        const modal = document.getElementById('payment-modal');
        if (modal) {
            modal.classList.remove('active');
        }
    };

    window.setPaymentMethod = function (method) {
        activeMethod = method;
        document.querySelectorAll('.pay-option-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.pay-form').forEach(form => form.classList.remove('active'));

        const btnCard = document.getElementById('btn-card');
        const btnVodafone = document.getElementById('btn-vodafone');
        const formCard = document.getElementById('form-card');
        const formVodafone = document.getElementById('form-vodafone');

        if (method === 'card') {
            if (btnCard) btnCard.classList.add('active');
            if (formCard) formCard.classList.add('active');
        } else {
            if (btnVodafone) btnVodafone.classList.add('active');
            if (formVodafone) formVodafone.classList.add('active');
        }
    };

    window.handlePaymentSubmit = function (event) {
        event.preventDefault();

        // Enhance front-end security: validate and sanitize inputs to prevent XSS
        const formId = event.target.id;
        if (formId === 'form-card') {
            const nameInput = document.getElementById('card-name');
            const numberInput = document.getElementById('card-number');
            const expiryInput = document.getElementById('card-expiry');
            const cvvInput = document.getElementById('card-cvv');

            if (nameInput) nameInput.value = sanitizeInput(nameInput.value);
            if (numberInput) {
                const rawNum = numberInput.value.replace(/\s/g, '');
                if (!/^\d{16,19}$/.test(rawNum)) {
                    alert("Invalid card number format.");
                    return;
                }
                numberInput.value = sanitizeInput(numberInput.value);
            }
            if (expiryInput) {
                if (!/^\d{2}\/\d{2}$/.test(expiryInput.value)) {
                    alert("Invalid expiration format (MM/YY).");
                    return;
                }
                expiryInput.value = sanitizeInput(expiryInput.value);
            }
            if (cvvInput) {
                if (!/^\d{3,4}$/.test(cvvInput.value)) {
                    alert("Invalid CVV format.");
                    return;
                }
                cvvInput.value = sanitizeInput(cvvInput.value);
            }
        } else if (formId === 'form-vodafone') {
            const vfNumInput = document.getElementById('vf-number');
            const vfTxidInput = document.getElementById('vf-txid');

            if (vfNumInput) {
                if (!/^010\d{8}$/.test(vfNumInput.value)) {
                    alert("Invalid Vodafone Cash number format.");
                    return;
                }
                vfNumInput.value = sanitizeInput(vfNumInput.value);
            }

            if (vfTxidInput) {
                if (!/^\d{4}$/.test(vfTxidInput.value)) {
                    alert("Invalid verification code format. Code must be exactly 4 digits.");
                    return;
                }
                const expectedCode = vfGeneratedCode ? vfGeneratedCode.textContent : '';
                if (expectedCode && vfTxidInput.value !== expectedCode) {
                    alert("Verification code does not match the generated code.");
                    return;
                }
                vfTxidInput.value = sanitizeInput(vfTxidInput.value);
            }

            // Submit Vodafone Cash Details to Netlify Forms via AJAX/Fetch
            const formData = new FormData(event.target);
            formData.append('form-name', event.target.getAttribute('name') || 'vodafone-checkout');
            fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            })
                .then(res => {
                    if (!res.ok) console.error('Netlify Form submission returned error:', res.statusText);
                })
                .catch(err => console.error('Netlify Form fetch error:', err));
        }

        const formScreen = document.getElementById('modal-content-form');
        const loadingScreen = document.getElementById('modal-loading');
        const successScreen = document.getElementById('modal-success');

        // Show loading screen
        if (formScreen) formScreen.style.display = 'none';
        if (loadingScreen) loadingScreen.style.display = 'flex';

        // Simulate a 2-second banking validation delay
        setTimeout(() => {
            if (loadingScreen) loadingScreen.style.display = 'none';
            if (successScreen) successScreen.style.display = 'flex';

            // Bind the actual PDF file in the root directory for direct secure download
            const downloadBtn = document.getElementById('download-link');
            if (downloadBtn) {
                downloadBtn.href = activePdf;
                downloadBtn.download = activePdf;
            }
        }, 2000);
    };
});
