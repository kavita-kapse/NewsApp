import { Component } from 'react'
import NewsItems from './NewsItems'


interface State {
  articles: any[];
  loading: boolean;
}

export class News extends Component<{}, State> {

  
  articles = [
    { 
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Dario d’Elia",
      "title": "Should You Leave Your Phone Charging Overnight?",
      "description": "It used to be common wisdom that leaving your phone charging overnight degrades the battery. But handset design has evolved to mitigate the harm caused by constant charging.",
      "url": "https://www.wired.com/story/should-you-leave-your-phone-charging-overnight/",
      "urlToImage": "https://media.wired.com/photos/69b8600d0c033a958e517289/191:100/w_1280,c_limit/2190996426",
      "publishedAt": "2026-03-17T09:30:00Z",
      "content": "You may have heard that leaving your smartphone charging overnighteither plugged in or atop a wireless chargercan damage your battery.\r\nBut is it actually harmful or dangerous to do that? Or is this … [+3792 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Tim Hardwick",
      "title": "Apple Watch AFib History Feature Launches in Mainland China",
      "description": "Apple today launched its atrial fibrillation history feature for Apple Watch in mainland China.\n\n\n\n\n\nSince 2022, Apple Watch in the U.S. has supported AFib History, which allows users diagnosed with atrial fibrillation to view an estimate of how frequently th…",
      "url": "https://www.macrumors.com/2026/03/17/apple-watch-afib-history-feature-mainland-china/",
      "urlToImage": "https://images.macrumors.com/t/Vwl_b2n4-7Fa7S9_b2b_u7eKSGQ=/2676x/article-new/2022/06/watchos-9-afib-history.jpg",
      "publishedAt": "2026-03-17T10:32:17Z",
      "content": "Apple today launched its atrial fibrillation history feature for Apple Watch in mainland China.\r\nSince 2022, Apple Watch in the U.S. has supported AFib History, which allows users diagnosed with atri… [+957 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NPR"
      },
      "author": "Mara Gordon",
      "title": "I'm concerned about my blood pressure. Can I check it at home?",
      "description": "If you get a high reading at the doctor's office, it may not be definitive. Here's what to know about your risk — and testing your blood pressure at home.",
      "url": "https://www.npr.org/2026/03/17/nx-s1-5747421/im-concerned-about-my-blood-pressure-can-i-check-it-at-home",
      "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/3500x1969+0+416/resize/1400/quality/85/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Ff4%2Fb9%2Feb5adf2043a29ffba1d16193b9b9%2Fnpr-blood-pressure-fa.jpg",
      "publishedAt": "2026-03-17T10:00:00Z",
      "content": "Do you have a medical question you'd like to get a doctor's honest answer to? Dr. Mara Gordon, a family physician in Camden, N.J., answers reader health questions monthly. Write us at: thrive@npr.org… [+9934 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Nikita Grant,Abby Narishkin,Jessica Orwig",
      "title": "Wolfgang Puck feeds 1,700 stars after the Oscars. He says the real challenge isn't the food.",
      "description": "Wolfgang Puck leads the Governors Ball catering at the Oscars, managing challenges in the competitive catering industry.",
      "url": "https://www.businessinsider.com/wolfgang-puck-oscars-catering-harder-than-running-restaurant-2026-3",
      "urlToImage": "https://i.insider.com/69b83f18a96e437d6eb861ed?width=1200&format=jpeg",
      "publishedAt": "2026-03-17T01:44:01Z",
      "content": "Wolfgang Puck in the temporary kitchen next to the Dolby Theatre for the Governors Ball.Barbara Munker/picture alliance via Getty Images\r\n<ul><li>Wolfgang Puck leads catering for the Governors Ball, … [+3598 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Xataka.com"
      },
      "author": "Javier Lacort",
      "title": "TSMC se está quedando sin capacidad en el nodo N3. Y eso va a afectar a todo lo que compras",
      "description": "Hay un cuello de botella que lo condiciona todo en la industria tecnológica y tiene un nombre muy concreto: el nodo N3 de TSMC. La IA ha devorado la capacidad de fabricación de chips de 3 nm más rápido de lo que nadie había previsto, y ahora mismo no hay sufi…",
      "url": "https://www.xataka.com/componentes/tsmc-se-esta-quedando-capacidad-nodo-n3-eso-va-a-afectar-a-todo-que-compras",
      "urlToImage": "https://i.blogs.es/ce1269/igor-shalyminov-wr4q9r7kwbu-unsplash/840_560.jpeg",
      "publishedAt": "2026-03-17T07:31:54Z",
      "content": "Hay un cuello de botella que lo condiciona todo en la industria tecnológica y tiene un nombre muy concreto: el nodo N3 de TSMC. La IA ha devorado la capacidad de fabricación de chips de 3 nm más rápi… [+3359 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Xataka.com"
      },
      "author": "Javier Pastor",
      "title": "Anthropic está ganando la carrera de la IA en las empresas, así que OpenAI tiene un nuevo plan: convertirse en Anthropic",
      "description": "OpenAI han tirado a todo lo que se movía en IA. Han ido lanzando de todo: un generador de vídeo, un navegador web con IA, un generador de imágenes con estilo Studio Ghibli, herramientas de comercio electrónico, etc. La lógica era sencilla: quien lo prueba tod…",
      "url": "https://www.xataka.com/robotica-e-ia/anthropic-esta-ganando-carrera-ia-empresas-asi-que-openai-tiene-nuevo-plan-convertirse-anthropic",
      "urlToImage": "https://i.blogs.es/3a5d27/sam-dario/840_560.jpeg",
      "publishedAt": "2026-03-17T10:15:54Z",
      "content": "OpenAI han tirado a todo lo que se movía en IA. Han ido lanzando de todo: un generador de vídeo, un navegador web con IA, un generador de imágenes con estilo Studio Ghibli, herramientas de comercio e… [+4594 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Xataka.com"
      },
      "author": "Alejandro Alcolea",
      "title": "Realme 16 Pro+, análisis: no arriesga ni un poco, pero no hace falta para ser candidato a mejor gama media de 2026",
      "description": "Hablar de “gamas” en el segmento de los smartphones es más complicado que nunca. Si antes la de entrada, baja, media, alta y premium estaban bien diferenciadas, ahora hay un montón de matices. Las premium siguen muy destacadas en precio y características, per…",
      "url": "https://www.xataka.com/analisis/realme-16-pro-analisis-caracteristicas-precio-especificaciones",
      "urlToImage": "https://i.blogs.es/a5e28c/analisis-realme-16-pro-2/840_560.jpeg",
      "publishedAt": "2026-03-17T10:45:53Z",
      "content": "Hablar de gamas en el segmento de los smartphones es más complicado que nunca. Si antes la de entrada, baja, media, alta y premium estaban bien diferenciadas, ahora hay un montón de matices. Las prem… [+23128 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Cool Hunting"
      },
      "author": "Evan Orensten",
      "title": "Limited Edition DITA-Lancier + Maserati Driving Glasses LSA-333",
      "description": "A new sunglass model engineered for performance by DITA-Lancier + Maserati LSA-333 is designed for peak performance while driving. Lightweight construction with titanium and nylon, these look great in the car or …",
      "url": "http://coolhunting.com/buy/dita-lancier-maserati-driving-glasses-lsa-333/",
      "urlToImage": "https://coolhunting.com/wp-content/uploads/2026/03/sqimg_1773717469039.jpeg",
      "publishedAt": "2026-03-17T03:46:12Z",
      "content": "Weber WorkshopsFrom Weber Workshops, one of our favorite coffee gear makers, The RoadRunner is a new travel- and outdoor-friendly version of their The BIRD no bypass, filter and vacuum brewing machin… [+1100 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Wes Davis",
      "title": "Aqara’s New Matter Smart Home Camera Hub Will Have No Compatibility Caveats",
      "description": "The first Matter-compatible smart home camera is here to fix the pain in the ass that is smart home camera compatibility.",
      "url": "https://gizmodo.com/aqara-camera-hub-g350-doorbell-camera-g400-matter-support-2000734190",
      "urlToImage": "https://gizmodo.com/app/uploads/2026/03/aqara-camera-hub-g350-1-1200x675.jpg",
      "publishedAt": "2026-03-17T08:00:50Z",
      "content": "Aqara has officially released the Camera Hub G350, a wired indoor pan-and-tilt camera with dual lenses. It’s joined as well by the Doorbell Camera G400 (Wired), a Power-over-Ethernet doorbell camera … [+2396 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gadgetreview.com"
      },
      "author": null,
      "title": "Reddit User Uncovers Who Is Behind Meta's $2B Lobbying for Age Verification Tech",
      "description": "Meta funneled $2B through nonprofit shells to push age verification laws targeting Apple and Google while exempting its own platforms from surveillance requirements.",
      "url": "https://www.gadgetreview.com/reddit-user-uncovers-who-is-behind-metas-2b-lobbying-for-invasive-age-verification-tech",
      "urlToImage": "https://www.gadgetreview.com/wp-content/uploads/38-artapixel-meta-logo-icon-3d-social-media-scaled.jpg",
      "publishedAt": "2026-03-17T10:39:48Z",
      "content": "Reddit researcher exposes Meta’s $2B campaign to force Apple and Google into building surveillance systems while exempting its own platformsA Reddit researcher just exposed how Meta funneled over $2 … [+2675 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Pluralistic.net"
      },
      "author": null,
      "title": "The future of Amazon coders is the present of Amazon warehouse workers",
      "description": "Comments",
      "url": "https://pluralistic.net/2025/03/13/electronic-whipping/",
      "urlToImage": null,
      "publishedAt": "2026-03-17T01:25:39Z",
      "content": "Today's links\r\nThe future of Amazon coders is the present of Amazon warehouse workers (permalink)\r\nMy theory of the \"shitty technology adoption curve\" holds that you can predict the future impact of … [+21194 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "heise online"
      },
      "author": "Joachim Kläschen",
      "title": "heise+ | Völlig kostenlos: 21 Freeware-Perlen für den Mac",
      "description": "Die von uns ausgewählten macOS-Helfer erleichtern lästige Aufgaben, erweitern das System um nützliche Funktionen und lassen Sie konzentrierter arbeiten.",
      "url": "https://www.heise.de/hintergrund/Voellig-kostenlos-21-Freeware-Perlen-fuer-den-Mac-11211368.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/5/0/4/5/5/3/3/freeware_perlen_fu_r_macos-6539d697267ebbb4.png",
      "publishedAt": "2026-03-17T08:00:00Z",
      "content": "Inhaltsverzeichnis\r\nInflation ist überall: Auch Software wird seit einigen Jahren immer teurer. Noch nerviger: Das Einmal-zahlen-Geschäftsmodell, bei dem man zumindest über einige Jahre bis zum nächs… [+963 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "heise online"
      },
      "author": "Andreas Knobloch",
      "title": "Dienstag: Chinas fährt Chipfertigung hoch, „Freiwillige Chatkontrolle“ endet",
      "description": "7-nm-Chipproduktion von Hua Hong + EU-Einigung gescheitert + Streit um KI-Training + KI-Modell bastelt fotorealistische Grafik + Altersverifikation für Nutzer",
      "url": "https://www.heise.de/news/Dienstag-Chinas-faehrt-Chipfertigung-hoch-Freiwillige-Chatkontrolle-endet-11213090.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/5/0/4/6/4/1/9/Wochentage-source-sans-a104a73b5e0aac7c.png",
      "publishedAt": "2026-03-17T05:15:00Z",
      "content": "China holt bei der Chipherstellung weiter auf und baut offenbar die Produktionskapazität seiner modernsten Chip-Generation aus. Die Chipfertigungssparte der Hua-Hong-Gruppe kann inzwischen angeblich … [+3958 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Bradley C",
      "title": "Apple @ Work Podcast: Native apps with a cloud backing",
      "description": "Apple @ Work is exclusively brought to you by Mosyle, the only Apple Unified Platform. Mosyle is the only solution that integrates in a single professional-grade platform all the solutions necessary to seamlessly and automatically deploy, manage & protect App…",
      "url": "https://9to5mac.com/2026/03/17/apple-work-podcast-native-apps-with-a-cloud-backing/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2025/08/Apple-at-Work-Liquid-Glass-light.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2026-03-17T10:00:00Z",
      "content": "Apple @ Work is exclusively brought to you by Mosyle, the only Apple Unified Platform. Mosyle is the only solution that integrates in a single professional-grade platform all the solutions necessary … [+516 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Marcus Mendes",
      "title": "YouTuber upgrades MacBook Neo to 1TB, posts ASMR video of the process",
      "description": "YouTube creator DirectorFeng is back with another ASMR-themed video in which they attempt to upgrade the storage on a new Apple device. Watch it below.\n\n\n\n more…",
      "url": "https://9to5mac.com/2026/03/16/youtuber-upgrades-macbook-neo-to-1tb-posts-asmr-video-of-the-process/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2026/03/macbookneo-1tb.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2026-03-17T01:27:52Z",
      "content": "YouTube creator DirectorFeng is back with another ASMR-themed video in which they attempt to upgrade the storage on a new Apple device. Watch it below.\r\nLast year, we covered DirectorFengs attempt to… [+1159 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Bradley C",
      "title": "HomeKit Weekly: Aqara releases its first Matter camera alongside a new Apple Home enabled wired doorbell",
      "description": "Aqara just announced two major additions to its smart home security lineup today. They have released the Camera Hub G350, which is the company’s first Matter-certified camera, along with the Doorbell Camera G400. I always look forward to seeing what Aqara doe…",
      "url": "https://9to5mac.com/2026/03/17/aqara-releases-its-first-matter-camera-alongside-a-new-apple-home-enabled-wired-doorbell/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2026/03/Aqara-Matter-2.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2026-03-17T10:16:41Z",
      "content": "Aqara just announced two major additions to its smart home security lineup today. They have released the Camera Hub G350, which is the company’s first Matter-certified camera, along with the Doorbell… [+2368 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Android Police"
      },
      "author": "Sydney Butler",
      "title": "Android is losing what made it special",
      "description": "Like frogs in hot water",
      "url": "https://www.androidpolice.com/android-is-losing-what-made-it-special/",
      "urlToImage": "https://static0.anpoimages.com/wordpress/wp-content/uploads/2026/03/android-mascot-head-with-a-blue-door-and-a-locked-sign-hanging-on-the-handle.png?w=1600&h=900&fit=crop",
      "publishedAt": "2026-03-17T11:00:10Z",
      "content": "When you think of Android, what comes to mind? For us, the word \"freedom\" is right at the top of the list.\r\nAndroid is an open source operating system, and part of a vast open platform.\r\nHistorically… [+4723 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.jp"
      },
      "author": "小暮ひさのり",
      "title": "最新Apple Watchが11％引き。今日のAmazonは気前がいい！",
      "description": "Image:Amazon新生活ご褒美ですかね？めったに安くならないApple（アップル）ガジェット。…なんてイメージありますけど、最近のAmazonはわりとぴょこぴょことセール価格になっていたりします。上手くそのタイミングに飛び込めればば、かなりお得にゲットできます。そして今日もそのタイミング。AppleWatchSeries11(GPSモデル)-42mmジェットブラックアルミニウムケースとブラッ",
      "url": "https://www.gizmodo.jp/2026/03/amazon-apple-wattch-series-11.html",
      "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2026/03/17/20260317wak01.jpg?w=1280&h=630&f=jpg",
      "publishedAt": "2026-03-17T05:00:00Z",
      "content": "AppleAmazon\r\nApple Watch Series 11GPS11OFF57610\r\nImage: Amazon\r\nApple Watch\r\nSeries 1124\r\n3080%OK\r\nApple Watch\r\nSource: Amazon"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.jp"
      },
      "author": "かみやまたくみ",
      "title": "Appleの新作ディスプレイ「Studio Display XDR」、どこが良くて、どこが微妙なのか解説するよ",
      "description": "Image:RaymondWong/GizmodoUSスピーカーの音が何気にめっちゃいいですね。Appleが先日、新しいディスプレイを発表しました。「StudioDisplay」と「StudioDisplayXDR」の2モデルで、ともに画面サイズは27インチ。目玉はStudioDisplayXDRです。Appleの従来のプロ向けディスプレイだったProDisplayXDRを置き換える形で登場し、1",
      "url": "https://www.gizmodo.jp/2026/03/apple_studio_display_2026_review_us.html",
      "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2026/03/17/Apple-Studio-Display-XDR-review-1-768x512.jpg?w=1280&h=630&f=jpg",
      "publishedAt": "2026-03-17T11:00:00Z",
      "content": "AppleStudio DisplayStudio Display XDR227\r\nStudio Display XDRApplePro Display XDR120Hz7355Pro Display XDR326K\r\nApple\r\nStudio Display XDRPro Display XDR\r\n<table><tr><th></th><th></th></tr><tr><td>2022S… [+1956 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.jp"
      },
      "author": "そうこ",
      "title": "MacBook Neoの作りに注目：一番安いMacBookは、一番修理しやすかった",
      "description": "Image:AdrianoContreras/GizmodoUS登場と同時に業界をパニックに陥れている、Apple（アップル）初の廉価版ノートパソコンMacBookNeo。ここ数年のAppleで、最も革新的かつ注目を浴びるプロダクトと言っても過言ではありません。価格減を実現するために、ハード面でさまざまな調整がされていますが、MacBookNeoのハードにはそれ以外にも大きな変化があります。それは",
      "url": "https://www.gizmodo.jp/2026/03/theres-a-good-reason-the-macbook-neo-is-apples-most-repairable-laptop.html",
      "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2026/03/17/260317repairableneo.jpg?w=1280&h=630&f=jpg",
      "publishedAt": "2026-03-17T09:00:00Z",
      "content": "AppleMacBook NeoAppleMacBook Neo\r\niFixitMacBook NeoiFixit106AppleiFitxit14MacBook\r\n82020MacBookApple\r\nApple18418GB256GBiFixit6\r\nMacBok Neo14MacBook\r\nLenovoThinkPad T147ThinkPad T165iFixit10FrameworkF… [+67 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNET"
      },
      "author": "Gael Cooper",
      "title": "Today's NYT Mini Crossword Answers for Tuesday, March 17",
      "description": "Here's today's NYT Mini Crossword answer. These answers will help you solve New York Times' popular crossword game, Mini Crossword, every day!",
      "url": "https://www.cnet.com/tech/gaming/todays-nyt-mini-crossword-answers-for-tuesday-march-17/",
      "urlToImage": "https://www.cnet.com/a/img/resize/4a7dc34963db8f9a51abae1ab77ec99b498be36f/hub/2024/07/25/50d61b9b-1c76-4678-9a92-f6eca531f4a8/nyt-mini-crossword-234876.jpg?auto=webp&fit=crop&height=675&width=1200",
      "publishedAt": "2026-03-17T02:20:15Z",
      "content": "Looking for the most recent Mini Crossword answer? Click here for today's Mini Crossword hints, as well as our daily answers and hints for The New York Times Wordle, Strands, Connections and Connecti… [+1178 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yanko Design"
      },
      "author": "JC Torres",
      "title": "Spigen Turned Apple’s Iconic Beige Mouse Into an AirPods Pro 3 Case",
      "description": "Spigen Turned Apple’s Iconic Beige Mouse Into an AirPods Pro 3 CaseThere’s something quietly odd about the era when Apple products were beige. Not bad, just odd. The Macintosh 128K, the boxy rectangular mouse, the Apple...",
      "url": "https://www.yankodesign.com/2026/03/17/spigen-turned-apples-iconic-beige-mouse-into-an-airpods-pro-3-case/",
      "urlToImage": "https://www.yankodesign.com/images/design_news/2026/03/spigen-turned-apples-iconic-beige-mouse-into-an-airpods-pro-3-case/spigen-airpods-pro-3-case-classic-ls-08.jpg",
      "publishedAt": "2026-03-17T08:45:29Z",
      "content": "There’s something quietly odd about the era when Apple products were beige. Not bad, just odd. The Macintosh 128K, the boxy rectangular mouse, the Apple Lisa; they were made from a warm off-white pla… [+2428 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yanko Design"
      },
      "author": "Srishti Mitra",
      "title": "7 EDC Upgrades Every Guy Needs Now That Winter Is Finally Over",
      "description": "7 EDC Upgrades Every Guy Needs Now That Winter Is Finally OverWinter pockets are forgiving. Thick jackets and layered coats offer deep storage, and the cold discourages the kind of outdoor tinkering that puts your gear...",
      "url": "https://www.yankodesign.com/2026/03/16/7-edc-upgrades-every-guy-needs-now-that-winter-is-finally-over/",
      "urlToImage": "https://www.yankodesign.com/images/design_news/2026/03/edc-upgrades-every-guy-needs-now-that-winter-is-finally-over/7_best_edc_accessorie_yanko_design_hero.webp",
      "publishedAt": "2026-03-17T01:45:18Z",
      "content": "Winter pockets are forgiving. Thick jackets and layered coats offer deep storage, and the cold discourages the kind of outdoor tinkering that puts your gear to the test. Spring strips all of that awa… [+13952 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Journal du geek"
      },
      "author": "Raphaël A",
      "title": "Votre vieux téléphone au fond d’un tiroir peut prendre feu : voici pourquoi",
      "description": "Batterie gonflée, risque d'incendie, métaux rares perdus : votre ancien téléphone au fond d'un tiroir est bien plus dangereux que vous ne le pensez.",
      "url": "https://www.journaldugeek.com/2026/03/17/votre-vieux-telephone-au-fond-dun-tiroir-peut-prendre-feu-voici-pourquoi/",
      "urlToImage": "https://www.journaldugeek.com/app/uploads/2026/03/vieux-smartphone-batterie-gonflee-tiroir-danger-1600x900.jpeg",
      "publishedAt": "2026-03-17T11:03:01Z",
      "content": "Tous les ans, des millions de Français changent de téléphone sans trop savoir quoi faire de lancien. Le réflexe le plus courant est souvent de le glisser dans un tiroir, au cas où il pourrait servir … [+5779 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Applesfera.com"
      },
      "author": "Guille Lomener",
      "title": "Apple intentaba guardar en secreto el lanzamiento de iOS 26.4. La letra pequeña de los AirPods Max 2 ha destapado el calendario",
      "description": "Apple anunció ayer los AirPods Max de segunda generación. Y con ellos llegó, casi sin querer, una de las informaciones más esperadas de las últimas semanas: la llegada de iOS 26.4. No hubo comunicado oficial ni declaración expresa. Lo reveló la letra pequeña …",
      "url": "https://www.applesfera.com/ios/apple-intentaba-guardar-secreto-lanzamiento-ios-26-4-letra-pequena-airpods-max-ha-destapado-calendario",
      "urlToImage": "https://i.blogs.es/ef6430/ios-26-4/840_560.jpeg",
      "publishedAt": "2026-03-17T09:01:54Z",
      "content": "Apple anunció ayer los AirPods Max de segunda generación. Y con ellos llegó, casi sin querer, una de las informaciones más esperadas de las últimas semanas: la llegada de iOS 26.4. No hubo comunicado… [+3610 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Applesfera.com"
      },
      "author": "Álvaro García M.",
      "title": "Quién es quién en la gama de AirPods de Apple con los nuevos AirPods Max 2: precios y para quién se recomienda cada uno",
      "description": "Apple ha presentado por sorpresa los AirPods Max 2 y eso supone actualizar la guía de AirPods de la compañía para saber cuáles son sus características y diferencias entre sí. Pese a que tienen mucho en común y cualquiera de ellos entra dentro de cualquier ran…",
      "url": "https://www.applesfera.com/airpods/quien-quien-gama-airpods-apple-nuevos-airpods-max-precios-para-quien-se-recomienda-cada-uno",
      "urlToImage": "https://i.blogs.es/14c15b/airpods/840_560.jpeg",
      "publishedAt": "2026-03-17T10:01:54Z",
      "content": "Apple ha presentado por sorpresa los AirPods Max 2 y eso supone actualizar la guía de AirPods de la compañía para saber cuáles son sus características y diferencias entre sí. Pese a que tienen mucho … [+5708 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Applesfera.com"
      },
      "author": "Álvaro García M.",
      "title": "La corona de los nuevos AirPods Max 2 tienen un \"secreto\": permite hacer fotos. Lo he usado en los 'Pro' y es más útil de lo que parece",
      "description": "Los AirPods siguen sin tener cámara (de momento). Sin embargo, ya hace tiempo que actúan como soporte de las que tiene el iPhone y los flamantes AirPods Max 2 son una prueba más de ello, puesto que nos permitirán controlar la cámara del iPhone a través de su …",
      "url": "https://www.applesfera.com/airpods/corona-nuevos-airpods-max-2-tienen-secreto-permite-hacer-fotos-he-usado-pro-util-que-parece",
      "urlToImage": "https://i.blogs.es/9d351c/airpods-max-2-boton/840_560.jpeg",
      "publishedAt": "2026-03-17T08:01:54Z",
      "content": "Los AirPods siguen sin tener cámara (de momento). Sin embargo, ya hace tiempo que actúan como soporte de las que tiene el iPhone y los flamantes AirPods Max 2 son una prueba más de ello, puesto que n… [+2356 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Applesfera.com"
      },
      "author": "Alberto García",
      "title": "Tras el lanzamiento del MacBook Neo, baja de precio el Air M4: así es la segunda mejor oferta que hemos visto hasta la fecha",
      "description": "El nuevo MacBook Neo supone una opción adicional de lo más atractiva dentro del ecosistema de ordenadores portátiles de Apple. Que sea barato lo hace más accesible, pero ahora mismo hay otro modelo que se le acerca bastante: el MacBook Air M4. Tras numerosos …",
      "url": "https://www.applesfera.com/seleccion/lanzamiento-macbook-neo-baja-precio-air-m4-asi-segunda-mejor-oferta-que-hemos-visto-fecha",
      "urlToImage": "https://i.blogs.es/40a1d0/macbook-air-m4/840_560.jpeg",
      "publishedAt": "2026-03-17T11:30:23Z",
      "content": "El nuevo MacBook Neo supone una opción adicional de lo más atractiva dentro del ecosistema de ordenadores portátiles de Apple. Que sea barato lo hace más accesible, pero ahora mismo hay otro modelo q… [+2616 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Theregister.com"
      },
      "author": "Liam Proven",
      "title": "Big moves in Linux filesystems as new bcachefs lands and KDE adds support for Apple's APFS",
      "description": "Plus: Fresh version of bcachefs arrives\nLinux 7.0 is approaching and there's a new version of bcachefs to go with it… as well as green shoots of support for Apple's new disk format.…",
      "url": "https://www.theregister.com/2026/03/17/bcachefs_and_apfs_news/",
      "urlToImage": "https://regmedia.co.uk/2026/03/17/shutterstock_494955400.jpg",
      "publishedAt": "2026-03-17T10:06:06Z",
      "content": "Linux 7.0 is approaching and there's a new version of bcachefs to go with it as well as green shoots of support for Apple's new disk format.\r\nInteresting developments are happening in Linux filesyste… [+3215 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Golem.de"
      },
      "author": "Andreas Donath",
      "title": "Apple: Airpods Max 2 bekommen den H2-Chip",
      "description": "Fünf Jahre nach dem Start holt Apple seinen teuersten Kopfhörer auf den Stand der Technik - zumindest fast. (Airpods, Apple)",
      "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fapple-airpods-max-2-bekommen-den-h2-chip-2603-206569.html&referer=https%3A%2F%2Ft.co%2F439fcac581",
      "urlToImage": null,
      "publishedAt": "2026-03-17T06:28:01Z",
      "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Android Authority"
      },
      "author": "Aamir Siddiqui",
      "title": "Apple’s most affordable laptop gets a DIY storage boost, but it’s not for the faint of heart",
      "description": "A YouTuber has upgraded their 256GB MacBook Neo to a good 1TB, but the process takes quite a bit of skill. Check it out in their teardown!",
      "url": "https://www.androidauthority.com/apple-macbook-neo-storage-upgrade-3649678/",
      "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2026/03/Apple-MacBook-Neo_1.jpg",
      "publishedAt": "2026-03-17T11:21:28Z",
      "content": "<ul><li>YouTuber DirectorFeng successfully upgraded the MacBook Neos storage from 256GB to 1TB by swapping NAND chips.</li><li>The MacBook Neo teardown reveals an elongated motherboard and a layout t… [+2033 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Android Authority"
      },
      "author": "Joe Maring",
      "title": "Tired of boring Galaxy phones? The latest Samsung news is a nightmare",
      "description": "Samsung's Galaxy S phones have been stagnant for years now. According to a new report, things are only going to get worse.",
      "url": "https://www.androidauthority.com/boring-samsung-phones-emergency-news-nightmare-3649407/",
      "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2026/03/samsung-galaxy-s26-black-back-1-scaled.jpg",
      "publishedAt": "2026-03-17T09:00:17Z",
      "content": "From an outsider looking in, times should be good for Samsung right now. The company just launched the Galaxy S26 series last week, alongside two new pairs of Galaxy Buds. After preorders opened for … [+6064 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Torrentfreak.com"
      },
      "author": "Ernesto Van der Sar",
      "title": "Court Dismisses Musi’s Apple Lawsuit, Sanctions Law Firm for “Baseless” Claims",
      "description": "Apple has won its legal battle against music streaming app Musi. A California federal court dismissed the case with prejudice, ruling that Apple had a clear contractual right to remove the app from the App Store. In a separate order, the court also sanctioned…",
      "url": "https://torrentfreak.com/court-dismisses-musis-apple-lawsuit-sanctions-law-firm-for-baseless-claims/",
      "urlToImage": "https://torrentfreak.com/images/apples.png",
      "publishedAt": "2026-03-17T09:02:35Z",
      "content": "In September 2024, Apple removed the popular music streaming app Musi from its App Store, affecting millions of users. \r\nApple’s action wasn’t completely unexpected. Music industry groups had been tr… [+4541 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Faz.net"
      },
      "author": "Benjamin Fischer",
      "title": "Gefragte Kataloge: 80 Musikrechte-Deals – im Monat",
      "description": "Finanzinvestoren und Musikunternehmen zahlen Hunderte Millionen für Rechte von globalen Superstars. Das Start-up Duetti setzt auf Katalogdeals mit kleineren Künstlern. Deutsche Rapper sind vorne mit dabei.",
      "url": "https://www.faz.net/aktuell/wirtschaft/unternehmen/duetti-kauft-musikrechte-von-kollegah-samra-oder-pa-sports-accg-110854899.html",
      "urlToImage": "https://media0.faz.net/image/w1200h627/8faad9f5f10f/w3000h1567x0y214o/032026/1.10854898/auch-der-rapper-samra-hat.webp",
      "publishedAt": "2026-03-17T09:00:36Z",
      "content": "Rund 500 Millionen Dollar für Bruce Springsteen, gut 400 Millionen Dollar an Pink Floyd oder gar mehr als eine Milliarde Dollar für ein Queen-Rechtepaket: Meldungen dieser Art trudeln mittlerweile mi… [+11144 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Habr.com"
      },
      "author": "mClouds_editor (mClouds.ru)",
      "title": "Влияние памяти из Китая на цены в 2026–2027 годах: смотрим на примере CXMT и YMTC",
      "description": "Кажется, что выход китайских CXMT и YMTC на рынок памяти — спасение от роста цен. Но если посмотреть на цифры, то всего три компании контролируют свыше 90% рынка DRAM, а китайские игроки — только малую часть. В статье разбираем, что реально могут производител…",
      "url": "https://habr.com/ru/companies/mclouds/articles/1009138/#post-content-body",
      "urlToImage": "https://habrastorage.org/getpro/habr/upload_files/253/9d9/441/2539d944172bdad30823ee6e89f3fe3a.png",
      "publishedAt": "2026-03-17T07:28:55Z",
      "content": ", CXMT YMTC   . , 90% DRAM,   . , , « »  , IT- .\r\n20252026  ( ).   -.\r\nmClouds.ru,     GPU ,  DDR5 RDIMM  ,        ,   2025 . \r\n2025 : SSD HBM GPU-. «» , , .\r\n CXMT « »: Samsung, SK Hynix Micron. CXM… [+1461 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Habr.com"
      },
      "author": "ArtSander",
      "title": "Дизайн в 2026: скорость без смысла не работает. Взгляд дизайн-лидов крупных брендов",
      "description": "Два года назад рынок обсуждал, заменят ли нейросети дизайнеров. В 2026-й мы вошли с другим вопросом: как изменилась сама профессия и требования к ней.Чтобы не ограничиваться личным мнением, мы собрали комментарии дизайн-лидов из крупных российских компаний — …",
      "url": "https://habr.com/ru/articles/1011210/#post-content-body",
      "urlToImage": "https://habrastorage.org/getpro/habr/upload_files/4df/3a0/122/4df3a0122e261ba3f35f9c8e7fe16753.jpg",
      "publishedAt": "2026-03-17T09:04:29Z",
      "content": ", . 2026- : .\r\n , - , e-Com, . : , . , AI - .\r\nAI \r\nAI . . 2026 , , , , , , .\r\n . : , , . AI , : , .\r\n . , , . , AI , .\r\n , AI . , , .\r\n. , , . AI . , , .\r\n«AI- , . , . . - », , « » Ozon\r\n. time-to-m… [+1535 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "36kr.com"
      },
      "author": null,
      "title": "苹果首席运营官Sabih Khan现身深圳",
      "description": "今日苹果首席运营官Sabih Khan等高管现身深圳，上午走访了深圳福田保税区的Apple应用研究实验室。该实验室于2024年投运，是苹果在华最新的应用研究实验室，这一实验室邻近苹果在华重要的生产和组装基地，能与周边的近200家供应商合作伙伴保持紧密协作，样品在供应商与深圳应用研究实验室之间的运转速度最快可缩至一天时间。据悉，苹果高管接下来还将走访多家位于深圳的供应链厂商，这也是2026年苹果高管首次访华。（21财经）",
      "url": "https://36kr.com/newsflashes/3726743358880135",
      "urlToImage": "https://img.36krcdn.com/20191024/v2_1571894049839_img_jpg",
      "publishedAt": "2026-03-17T07:59:23Z",
      "content": "36MindVLA-o1MindVLA-o13DClosed-loop RLHardwareSoftware Co-Design\r\n16"
    },
    {
      "source": {
        "id": null,
        "name": "36kr.com"
      },
      "author": null,
      "title": "36氪晚报｜苹果首席运营官Sabih Khan现身深圳；马斯克：电动超跑Roadster或将于四月下旬亮相；华为面向AI推理场景发布新一代AI数据基础设施",
      "description": "大公司：\n 西门子与Rittal达成数据中心能源基础设施战略合作伙伴关系\n 西门子和Rittal已建立战略合作伙伴关系，共同开发面向未来的产品，为数据中心更高效的电力分发提供可持续解决方案。（财联社）\n 腾讯音乐：2025年全年总收入329亿元，同比增长15.8%\n 36氪获悉，腾讯音乐发布截至2025年12月31日止第四季度及全年的未经审计财务业绩。腾讯音乐第四季度总收入86.4亿元，同比增长15.9%，调整后净利润25.8亿元，同比增长7.6%；全年总收入329亿元，同比增长15.8%，调整后净利润99.2亿…",
      "url": "https://36kr.com/p/3726912161184128",
      "urlToImage": "https://img.36krcdn.com/hsossms/20260317/v2_82f9464754a1470bbf345b46c9d6dd61@5564860_oswg254686oswg1053oswg495_img_jpeg?x-oss-process=image/resize,m_mfit,w_600,h_400,limit_0/crop,w_600,h_400,g_center",
      "publishedAt": "2026-03-17T10:56:04Z",
      "content": "Rittal\r\nRittal\r\n202532915.8%\r\n362025123186.415.9%25.87.6%32915.8%99.222.0%16.0%176.639.2%90.73.6825.76\r\n312181902122907391164\r\nAI\r\nAIAIAR1AI\r\nSK\r\nSK162030SKADR\r\nDRAMFlash\r\n36DRAMFlashDRAM\r\nAI\r\nAIAIAI… [+406 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Caschys Blog"
      },
      "author": "Felix Frank",
      "title": "Aqara Doorbell Camera G400: Kabelgebundene Videotürklingel ab sofort verfügbar",
      "description": "Neben dem Aqara Camera Hub G350, einer Matter-kompatiblen Überwachungskamera, hat der Smart-Home-Hersteller, wie erwartet, auch eine weitere Kameralösung für den hiesigen Markt präsentiert: die kabelgebundene Türklingel-Kamera G400. Die hatte man bereits auf …",
      "url": "https://stadt-bremerhaven.de/aqara-doorbell-camera-g400-kabelgebundene-videotuerklingel-ab-sofort-verfuegbar/",
      "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2026/03/Aqara-Doorbell-Camera_3.jpg",
      "publishedAt": "2026-03-17T08:05:14Z",
      "content": "Neben dem Aqara Camera Hub G350, einer Matter-kompatiblen Überwachungskamera, hat der Smart-Home-Hersteller, wie erwartet, auch eine weitere Kameralösung für den hiesigen Markt präsentiert: die kabel… [+2520 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Frandroid"
      },
      "author": "Corentin Béchade",
      "title": "Les iPhone 4 et iPhone 5 sont officiellement des produits « obsolètes », selon Apple",
      "description": "Après une longue carrière à l’international, les iPhone 4 et iPhone 5 viennent d’être ajoutés à la liste des produits officiellement « obsolètes » chez Apple. De quoi signer une fin de course pour des appareils sortis début 2010.",
      "url": "https://www.frandroid.com/marques/apple/3028659_les-iphone-4-et-iphone-5-sont-officiellement-des-produits-obsoletes-selon-apple",
      "urlToImage": "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2026/03/22692035717-cba4589ddb-o.jpg?resize=1600,900&key=51f17446&watermark",
      "publishedAt": "2026-03-17T08:35:09Z",
      "content": "Après une longue carrière à l’international, les iPhone 4 et iPhone 5 viennent d’être ajoutés à la liste des produits officiellement « obsolètes » chez Apple. De quoi signer une fin de course pour de… [+2529 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Frandroid"
      },
      "author": "Noémie Koskas",
      "title": "Les AirPods 4 chutent enfin sous la barre symbolique des 100 € grâce à ce code promo",
      "description": "Excellentes performances acoustiques, spatialisation réussie, confort de port... Les AirPods 4, même sans ANC, restent des true wireless hyper recommandables. Et c'est encore plus le cas quand ils sont proposés à 99 euros au lieu de 149 euros par Joybuy.",
      "url": "https://www.frandroid.com/bons-plans/3028749_les-airpods-4-chutent-enfin-sous-la-barre-symbolique-des-100-e-grace-a-ce-code-promo",
      "urlToImage": "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2024/10/apple-airpods-4-test-008.jpg?resize=1600,900&key=dd512903&watermark",
      "publishedAt": "2026-03-17T10:39:20Z",
      "content": "Excellentes performances acoustiques, spatialisation réussie, confort de port… Les AirPods 4, même sans ANC, restent des true wireless hyper recommandables. Et c’est encore plus le cas quand ils sont… [+4371 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Frandroid"
      },
      "author": "Benjamin Barois",
      "title": "Orientée santé et sport, la Huawei Watch 5 avec son super écran AMOLED est à -50% avec une flopée de cadeaux",
      "description": "Le site officiel de Huawei propose la Huawei Watch 5 avec deux bracelets de rechange et une extension de garantie de 12 mois pour 224,99 euros au lieu de 449,99 euros.",
      "url": "https://www.frandroid.com/bons-plans/3027473_orientee-sante-et-sport-la-huawei-watch-5-avec-son-super-ecran-amoled-est-a-50-avec-une-flopee-de-cadeaux",
      "urlToImage": "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2025/05/huawei-watch-5-8-scaled.jpg?resize=1600,900&key=ed38dc4b&watermark",
      "publishedAt": "2026-03-17T08:21:00Z",
      "content": "Le site officiel de Huawei propose la Huawei Watch 5 avec deux bracelets de rechange et une extension de garantie de 12 mois pour 224,99 euros au lieu de 449,99 euros.\r\nLes applications sur la Huawei… [+3520 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Frandroid"
      },
      "author": "Benjamin Barois",
      "title": "La première Google Pixel Watch passe pour la première fois à 134 €, une montre Wear OS avec écran AMOLED et suivi GPS au top",
      "description": "Après avoir distribué Wear OS à tout le monde, Google lançait sa première montre connectée Pixel Watch en 2022 pour 379 euros. Et aujourd'hui, elle tombe à 134,80 euros sur Amazon.",
      "url": "https://www.frandroid.com/bons-plans/3029011_la-premiere-google-pixel-watch-passe-pour-la-premiere-fois-a-134-e-une-montre-wear-os-pure-avec-ecran-amoled-et-suivi-gps-au-top",
      "urlToImage": "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2022/10/google-pixel-watch-11.jpg?resize=1600,900&key=bb058bc5&watermark",
      "publishedAt": "2026-03-17T11:24:00Z",
      "content": "Après avoir distribué Wear OS à tout le monde, Google lançait sa première montre connectée Pixel Watch en 2022 pour 379 euros. Et aujourd’hui, elle tombe à 134,80 euros sur Amazon.\r\nLa Google Pixel W… [+3516 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Wwwhatsnew.com"
      },
      "author": "Natalia Polo",
      "title": "Nvidia quiere el centro de datos de IA completo: del chip al rack y del token a la caja",
      "description": "En la conferencia GTC de Nvidia en San José, la imagen que la compañía empujó hacia los medios no fue una GPU brillante ni un robot simpático, sino una especie de “muro” de rectángulos: filas y filas de racks de centro de datos sin etiquetas, alineados como u…",
      "url": "https://wwwhatsnew.com/2026/03/17/nvidia-quiere-el-centro-de-datos-de-ia-completo-del-chip-al-rack-y-del-token-a-la-caja/",
      "urlToImage": "https://wwwhatsnew.com/wp-content/uploads/2024/05/amazon-servidores.jpg",
      "publishedAt": "2026-03-17T11:00:23Z",
      "content": "En la conferencia GTC de Nvidia en San José, la imagen que la compañía empujó hacia los medios no fue una GPU brillante ni un robot simpático, sino una especie de muro de rectángulos: filas y filas d… [+9246 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Ifanr.com"
      },
      "author": "苏伟鸿",
      "title": "专访苹果医学家：房颤患者，为什么应该戴一块 Apple Watch？",
      "description": "从患者成为健康主理人#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。",
      "url": "https://www.ifanr.com/1658498",
      "urlToImage": "https://s3.ifanr.com/wp-content/uploads/2026/03/Apple-Watchs-AFib-History-feature-gets-the-FDA-nod-as-a-reliable-tool-1024x576.jpg",
      "publishedAt": "2026-03-17T08:35:56Z",
      "content": "Apple Watch \r\n iOS watchOS \r\n iPhone AppiOS 26iOS 18 \r\nAsha Chesnutt \r\nAsha Chesnutt \r\n60100 100120 300 \r\nNature 2023 8000 3275 6 6 \r\n65 \r\n40% \r\n 45 \r\n65 \r\n Apple Watch 2021 watchOS 8.3 iOS 15.2 iPho… [+1147 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Boredpanda.com"
      },
      "author": "Karina Babenok",
      "title": "Gwyneth Paltrow’s Furious Backstage Rant After Racy Oscars Dress Mishap As Aide’s Awkward Reaction Spotted",
      "description": "Insiders revealed the behind-the-scenes reality of Gwyneth Paltrow’s nearly exposed moment at the Oscars, saying she thought she “looked hot.”",
      "url": "https://www.boredpanda.com/gwyneth-paltrow-furious-backstage-rant-after-racy-oscars-dress-mishap/",
      "urlToImage": "https://static.boredpanda.com/blog/wp-content/uploads/2026/03/gwyneth-paltrow-furious-backstage-rant-after-racy-oscars-dress-mishap-fb.jpg",
      "publishedAt": "2026-03-17T08:48:15Z",
      "content": "Gwyneth Paltrow’s nearly exposed moment at the Oscars became one of the most debated fashion moments of the night.\r\nNetizens called it “inappropriate” and a “red carpet nightmare” after the 53-year-o… [+6303 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Smartworld.it"
      },
      "author": "Nicola Ligas",
      "title": "Addio a due vecchi iPhone: Apple interrompe ufficialmente l'assistenza",
      "description": "Apple dichiara obsoleti iPhone 4 e iPhone 5: cosa cambia per assistenza, riparazioni e pezzi di ricambio per chi li usa ancora oggi.\r\nL'articolo Addio a due vecchi iPhone: Apple interrompe ufficialmente l'assistenza sembra essere il primo su Smartworld.",
      "url": "https://www.smartworld.it/news/iphone-4-5-obsoleti-fine-assistenza-apple.html",
      "urlToImage": "https://www.smartworld.it/images/2026/03/17/iphone4_1200x675.jpeg",
      "publishedAt": "2026-03-17T10:21:00Z",
      "content": "Chi usa ancora un vecchio iPhone come telefono principale o di scorta non gradirà le ultime mosse di Apple che ha reso definitivamente \"atavici\" due storici modelli.\r\nL'azienda ha infatti inserito iP… [+1802 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "New Atlas"
      },
      "author": "Abhimanyu Ghoshal",
      "title": "Apple's AirPods Max 2 delivers better ANC, plays catch-up with rivals",
      "description": "Apple has refreshed its AirPods Max headphones with new internals for better performance, as well as a handful of features that bring it in line with current-gen over-ear models.Continue ReadingCategory: Consumer Tech, TechnologyTags: Headphones, Apple, Audio…",
      "url": "https://newatlas.com/consumer-tech/apple-airpods-max-2-anc-headphones/",
      "urlToImage": "https://assets.newatlas.com/dims4/default/5cc45ff/2147483647/strip/true/crop/1500x788+0+64/resize/1200x630!/quality/90/?url=https%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F68%2F52%2F1a0aa6ef47c0a46dedc88cf016ed%2Fapples-airpods-max-2-boast-improved-audio-and-anc-over-the-original-as-well-as-some-features-it-should-have-gotten-a-while-ago.jpg&na.image_optimisation=0",
      "publishedAt": "2026-03-17T09:06:13Z",
      "content": "Apple has refreshed its AirPods Max headphones with new internals for better performance, as well as a handful of features that bring it in line with current-gen over-ear models.\r\nThe first AirPods M… [+3949 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Marketingdirecto.com"
      },
      "author": "Valeria Rodriguez",
      "title": "Apple enloquece en TikTok: limones haciendo FaceTime y portátiles rosa para vender su MacBook Neo",
      "description": "Apple sorprende en TikTok con limones, manos azules y amaneceres rosa para conquistar a la Generación Z y promocionar el MacBook Neo.\nLa entrada Apple enloquece en TikTok: limones haciendo FaceTime y portátiles rosa para vender su MacBook Neo se publicó prime…",
      "url": "https://www.marketingdirecto.com/anunciantes-general/apple-enloquece-tiktok-limones-haciendo-facetime-portatiles-rosa-para-vender-macbook-neo",
      "urlToImage": "https://www.marketingdirecto.com/wp-content/uploads/2026/03/Apple-TikTok.webp",
      "publishedAt": "2026-03-17T10:17:02Z",
      "content": "Apple ha sorprendido (para bien o para mal) a su público con una estrategia publicitaria inusual con la que han compartido vídeos surrealistas y deliberadamente extraños en TikTok que buscan destacar… [+2264 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Larazon.es"
      },
      "author": "Mauricio, Martínez",
      "title": "Cuatro características de los AirPods Max 2 que no se han renovado respecto a la primera generación",
      "description": "Apple sorprendió con la renovación de los AirPods Max, sus auriculares más premium de la gama. Físicamente parece no haber cambiado; en el interior también existen algunos detalles",
      "url": "https://www.larazon.es/tecnologia-consumo/apple/cuatro-caracteristicas-de-los-airpods-max-2-que-no-se-han-renovado-respecto-a-la-primera-generacion_2026031769b86e1c219e1f762b671a59.html",
      "urlToImage": "https://fotografias-2.larazon.es/assets/2026/03/apple-airpods-max-2.jpg?width=1200",
      "publishedAt": "2026-03-17T00:00:00Z",
      "content": "Cuando pensábamos que Apple ya había terminado su semana de lanzamientos, inició una nueva semana con un producto que nadie esperaba. Desde que fueron lanzados por primera vez en el 2020, solo hubo u… [+2120 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Creativosonline.org"
      },
      "author": "Creativos Online",
      "title": "Shazam en ChatGPT: guía de uso completa para identificar canciones",
      "description": "Aprende a usar Shazam en ChatGPT para identificar canciones al instante, sin apps extra, y descubre cómo sacarle todo el partido a esta integración.",
      "url": "https://www.creativosonline.org/shazam-en-chatgpt-guia-de-uso-completa-para-identificar-canciones.html",
      "urlToImage": "https://www.creativosonline.org/wp-content/uploads/2026/03/Shazam-en-ChatGPT-guia-de-uso.jpg",
      "publishedAt": "2026-03-17T10:41:11Z",
      "content": "La llegada de Shazam integrado dentro de ChatGPT es una de esas novedades que parecen pequeñas sobre el papel, pero que en el día a día cambian por completo cómo descubrimos música mientras chateamos… [+12994 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Appbank.net"
      },
      "author": "AppBank編集部",
      "title": "H2搭載で大幅進化！　Apple『AirPods Max 2』が3月25日より予約注文開始",
      "description": "Appleは3月16日、新型オーバーイヤーヘッドフォン『AirPods Max 2』を発表しました。新たにH2チップを搭載し、アクティブノイズキャンセリング（ANC）の強化、音質の向上、そして適応型オーディオやライブ翻訳といったインテリジ",
      "url": "https://www.appbank.net/2026/03/17/goods-books/2951375.php",
      "urlToImage": "https://www.appbank.net/wp-content/uploads/2026/03/20260316_235506_805_01.webp",
      "publishedAt": "2026-03-17T01:30:00Z",
      "content": "Apple316AirPods Max 2H2ANCAirPods Max\r\n532589,800\r\nAppleH2AirPods Max1.5ANCAirPods Max 2\r\nH2AirPods Max 21.5ANC\r\nH2\r\nAirPods Max 2\r\nUSB-C2448kHzLogic Pro\r\nUSB-CiOSmacOSiPadOS\r\nH2AirPods Max 2\r\nANC\r\nA… [+188 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Trends Desk",
      "title": "This Bengaluru founder ignored his boss’s warning, left Rs 1 lakh job at Yahoo for unpaid Italy internship; here’s what happened",
      "description": "Arjun Jain, founder of Fast Code AI, shared that despite the good pay and perks at Yahoo!, he felt restricted.",
      "url": "https://indianexpress.com/article/trending/trending-in-india/bengaluru-founder-arjun-jain-ignored-his-boss-warning-left-rs-1-lakh-job-at-yahoo-for-unpaid-italy-internship-viral-10585866/",
      "urlToImage": "https://images.indianexpress.com/2026/03/Bengaluru-founder-Yahoo-quits.jpg",
      "publishedAt": "2026-03-17T04:21:16Z",
      "content": "A Bengaluru-based entrepreneur recently shared that he left his well-paid job at Yahoo! and that the decision turned out to be a breakthrough in his career. Arjun Jain, founder of Fast Code AI, revea… [+2785 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "DIE WELT"
      },
      "author": "Florian Haupt",
      "title": "Der „Blitz“ elektrisiert Europa – das Erfolgsgeheimnis hinter dem Norwegen-Wunder",
      "description": "Erst von den Deutschen zerbombt, dann als Hinterwäldler abgestempelt. Hinter Bodö liegen bewegte Zeiten. Heute liefert die norwegische Stadt ein Fußball-Märchen – dank Eigenschaften, die im Geschäft selten geworden sind.",
      "url": "https://www.welt.de/sport/fussball/champions-league/article69b3eff517184da7cffd86c3/bodoe-glimt-der-blitz-elektrisiert-europa-das-erfolgsgeheimnis-hinter-dem-norwegen-wunder.html",
      "urlToImage": "https://images.welt.de/69b3eff517184da7cffd86c3/80124bb38b5e88c0a5bf5826aa52fa3a/ci16x9-w1200/gyi-2266008896-jpg",
      "publishedAt": "2026-03-17T05:38:47Z",
      "content": "Erst von den Deutschen zerbombt, dann als Hinterwäldler abgestempelt. Hinter Bodö liegen bewegte Zeiten. Heute liefert die norwegische Stadt ein Fußball-Märchen dank Eigenschaften, die im Geschäft se… [+9546 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Numerama"
      },
      "author": "Adam Langumier",
      "title": "Amazon casse le prix des AirPods Pro 3",
      "description": "S'il y a bien un produit qui s'arrache les yeux fermés sur Amazon, ce sont les AirPods. La toute dernière génération d'Apple vient de toucher son prix plancher. Alors qu'Apple vient de renouveler son casque haut de gamme avec l'AirPods Max 2, la facture de 57…",
      "url": "https://www.numerama.com/tech/2172815-amazon-casse-le-prix-des-airpods-pro-3.html",
      "urlToImage": "https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2026/02/airpods-pro-3.jpg?resize=1600,900&key=08906b4e&watermark",
      "publishedAt": "2026-03-17T10:03:08Z",
      "content": "[Deal du jour] S’il y a bien un produit qui s’arrache les yeux fermés sur Amazon, ce sont les AirPods. La toute dernière génération d’Apple vient de toucher son prix plancher.\r\nAlors qu’Apple vient d… [+2975 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Techbang.com"
      },
      "author": "小治",
      "title": "MacBook Neo 能跑 Windows 嗎？Parallels 發布實測結果，效能與記憶體仍是關鍵",
      "description": "MacBook Neo 登場，許多人好奇這款新機能否運行 Windows。儘管 MacBook Neo 可透過虛擬化執行 Windows，但其硬體限制使其更適合輕度 Windows 使用情境。蘋果推出主打入門市場的 MacBook Neo 後，不少潛在買家開始關心一個問題：如果需要使用 Windows 軟體，是否仍然能在這款新筆電上運行 Windows 系統？對於從 Windows 平台轉換到 macOS 的使用者來說，這往往是購買前的重要考量。\n根據虛擬化軟體開發商 Parallels 的技術文件，MacBoo…",
      "url": "https://www.techbang.com/posts/128377-parallels-macbook-neo-windows-performance",
      "urlToImage": "https://cdn2.techbang.com/system/excerpt_images/128377/original/9e25559ca80799d1911c6ee8f6002f96.png?1773631587",
      "publishedAt": "2026-03-17T06:00:00Z",
      "content": "MacBook Neo Windows Windows Windows macOS \r\n Parallels MacBook Neo Parallels Desktop \r\n macOS Windows\r\n Mac Windows Parallels Desktop macOS Virtual Machine macOS Parallels Desktop Apple silicon Mac m… [+501 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Techbang.com"
      },
      "author": "NetEase",
      "title": "MacBook Neo 拆解影片曝光：6 分鐘極速拆解、電池及揚聲器「零黏膠」快拆超驚艷",
      "description": "蘋果新款MacBook Neo展現驚人可維修性，其高度模組化設計徹底顛覆以往Mac難以拆卸的印象。這款MacBook Neo的模組化設計，預示筆電未來發展方向，值得關注。蘋果在推動環保與維修權的道路上似乎跨出了一大步。根據 YouTube 頻道 TECH RE-NU 最新發布的拆解影片，蘋果新款 MacBook Neo 展現了令人難以置信的可維修性，其內部結構採高度模組化設計，徹底顛覆了以往 Mac 難以自行拆卸的印象 。\n \r\n\n6 分鐘極速拆解，模組化設計成亮點\n在該頻道發布的影片中，主持人記錄了 MacBo…",
      "url": "https://www.techbang.com/posts/128362-macbook-neo-teardown-6min-zero-adhesive",
      "urlToImage": "https://cdn0.techbang.com/system/excerpt_images/128362/original/18f40745e0e799cc039e91383d1354f5.jpg?1773389665",
      "publishedAt": "2026-03-17T08:00:00Z",
      "content": "YouTube TECH RE-NU MacBook Neo Mac \r\n6 \r\n MacBook Neo 6 Mac \r\n20,235 Windows \r\n macOS iPhone MacBook \r\n MacBook Neo \r\n 8GB A18 Pro"
    },
    {
      "source": {
        "id": null,
        "name": "Ghacks Technology News"
      },
      "author": "Arthur Kay",
      "title": "Apple Announces AirPods Max 2 With H2 Chip, 1.5x Stronger ANC, and Live Translation",
      "description": "Apple has announced AirPods Max 2, the second generation of its over-ear headphones, powered by the H2 chip first introduced in AirPods Pro 2.\nThank you for being a Ghacks reader. The post Apple Announces AirPods Max 2 With H2 Chip, 1.5x Stronger ANC, and Liv…",
      "url": "https://www.ghacks.net/2026/03/17/apple-announces-airpods-max-2-with-h2-chip-1-5x-stronger-anc-and-live-translation/",
      "urlToImage": "https://www.ghacks.net/wp-content/uploads/2026/03/gHacks-articles-2026-03-17T092413.065.png",
      "publishedAt": "2026-03-17T08:31:34Z",
      "content": "Apple has announced AirPods Max 2, the second generation of its over-ear headphones, powered by the H2 chip first introduced in AirPods Pro 2. Orders open March 25 at $549, with availability beginnin… [+2430 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Ascii.jp"
      },
      "author": "ASCII",
      "title": "ついに２TBで20万円！ 型落ち13型iPad Pro（M4）、5Gも付いてかなりお得に！（最新モデルは40万円台）",
      "description": "Appleの13インチタブレット「iPad Pro（M4）」がAmazonで割引対象。参考価格388,000円のところ、28％オフの278,539円で販売中。2TBストレージとWi-Fi＋Cellular構成を選んだ上位モデルで、13インチのUltra Retina XDRディスプレイ（タンデムOLED）を備える。",
      "url": "https://weekly.ascii.jp/elem/000/004/381/4381739/",
      "urlToImage": "https://ascii.jp/img/2026/03/11/4433203/l/720f15c64ffb67ca.jpg",
      "publishedAt": "2026-03-17T01:30:00Z",
      "content": "Apple13 iPad ProM4Amazon388,00028278,5392TBWi-FiCellular5GeSIM13 iPad ProM52TB5G40\r\n13Ultra Retina XDR12MP12MPLiDARFace ID5.3mmCellular446gUSB-CApple Pencil ProMagic Keyboard\r\n14013iPad ProM420"
    },
    {
      "source": {
        "id": null,
        "name": "Ascii.jp"
      },
      "author": "ASCII",
      "title": "ついに10万円切り！衝撃のMacBookエントリーモデル「MacBook Neo」 25歳以下ならさらにお得に！：ソフマップ なんば店",
      "description": "iPhoneと同じチップで動くMacBook？ 「MacBook Neo」はエントリー向けながら、macOSでパソコン版アプリがしっかり使えるのが魅力。気軽に使える新しいMacとして注目の一台です。",
      "url": "https://weekly.ascii.jp/elem/000/004/381/4381684/",
      "urlToImage": "https://ascii.jp/img/2026/03/16/4435940/l/fcdf6bc8044ca505.jpg",
      "publishedAt": "2026-03-17T07:00:00Z",
      "content": "PC ApplePCMacBook Neo10MacBook\r\nApplePCMacBook Neo\r\nMacBook NeoApplePCMacBook9980010\r\niPhoneApple A18 Pro8GB256GB512GB2\r\n13Liquid Retina2408×15064\r\n256GB99800512GB114800\r\nMacBook NeoiPhonemacOSiPhone… [+798 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Livedoor.jp"
      },
      "author": "news23vip",
      "title": "【朗報】Apple、最強AirPodsを発表！ノイキャン性能1.5倍！24ビット48kHzのロスレスオーディオ対応",
      "description": "1 名前：名無しさん＠おーぷん[] 投稿日：26/03/17(火) 08:27:36 ID:dQvi\nApple、新ヘッドフォン「AirPods Max 2」発表　ノイキャン性能は最大1.5倍に　8万9800円\n\n　米Appleは3月16日、新型ワイヤレスヘッドフォン「AirPods Max 2」を発表した。H2チップを搭載し、ANC（アク...",
      "url": "http://blog.livedoor.jp/news23vip/archives/6235471.html",
      "urlToImage": "https://livedoor.blogimg.jp/news23vip/imgs/0/a/0ac1ee7c-s.jpg",
      "publishedAt": "2026-03-17T00:20:01Z",
      "content": "2 [] 26/03/17() 08:28:20 ID:EJok5 [] 26/03/17() 08:28:52 ID:dQvi&gt;&gt;29\r\n4 [] 26/03/17() 08:28:43 ID:EIVd\r\n7 [] 26/03/17() 08:29:54 ID:VoCK\r\n8 [] 26/03/17() 08:30:01 ID:BF9i2\r\n9 [] 26/03/17() 08:3… [+589 chars]"
    },
    {
      "source": {
        "id": "techradar",
        "name": "TechRadar"
      },
      "author": "Max Langridge",
      "title": "The Apple AirPods Pro 3 are a no-brainer for iPhone users — and this Amazon deal makes them even more enticing",
      "description": "The AirPods Pro 3, unfortunately, launched in Australia at a higher price than their predecessor, but this Amazon Big Smile Sale discount makes them a much more attractive proposition.",
      "url": "https://www.techradar.com/audio/earbuds-airpods/the-apple-airpods-pro-3-are-a-no-brainer-for-iphone-users-and-this-amazon-deal-makes-them-even-more-enticing",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/TRqdstFVoSvVTpGF6wAXVB-2000-80.jpg",
      "publishedAt": "2026-03-17T02:28:19Z",
      "content": "Right on cue, the Amazon Big Smile Sale has delivered a decent AU$50 discount on the Apple AirPods Pro 3 in-ear headphones, making this week an opportune time to grab a pair for yourself if you’ve be… [+2481 chars]"
    },
    {
      "source": {
        "id": "techradar",
        "name": "TechRadar"
      },
      "author": "nico.arboleda@futurenet.com (Nico Arboleda) , Nico Arboleda",
      "title": "A tiny discount makes the iPhone 17 the better buy compared to the more affordable iPhone 17e — here's why",
      "description": "The iPhone 17e may be the exciting new sub-AU$1,000 iPhone, but snagging the iPhone 17 for even just AU$50 is still the better buy for a fair few reasons, and I've broken them down for you.",
      "url": "https://www.techradar.com/phones/iphone/a-tiny-discount-makes-the-iphone-17-the-better-buy-compared-to-the-more-affordable-iphone-17e-heres-why",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/YyQ3cAQyCMD3oZJfJUBEj6-2000-80.jpg",
      "publishedAt": "2026-03-17T04:23:09Z",
      "content": "As far as budget iPhones go, the iPhone 17e is a much better value proposition than its predecessor, the iPhone 16e, thanks to Apple upgrading the processor and modem, bumping the starting storage op… [+2164 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Iphoneblog.de"
      },
      "author": "Alex Olma",
      "title": "Für eine höhere Audioqualität: Pentaton",
      "description": "Mit einer überraschenden Pressemitteilung hievte Apple am gestrigen Montag die AirPods Max 2 aufs Niveau der AirPods Pro 3. Das ist für meinen Geschmack nach fünf Jahren zu wenig und zu spät – obwohl mich diese Kopfhörer weiterhin verzaubern. Wenn man’s posit…",
      "url": "https://www.iphoneblog.de/2026/03/17/fur-hohere-audioqualitat-pentaton/",
      "urlToImage": "https://www.iphoneblog.de/images/ipad-144.png",
      "publishedAt": "2026-03-17T10:16:28Z",
      "content": "Mit einer überraschenden Pressemitteilung hievte Apple am gestrigen Montag die AirPods Max 2 aufs Niveau der AirPods Pro 3. Das ist für meinen Geschmack nach fünf Jahren zu wenig und zu spät obwohl m… [+1745 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Impress.co.jp"
      },
      "author": "tks24",
      "title": "MacBook Neo人気の影響？ 直営店における旧型Macの下取り数が大幅に増加中との噂【やじうまWatch】",
      "description": "Apple直営店における旧型Macの下取り数が大幅に増加していることを、海外メディアが報じている。",
      "url": "https://internet.watch.impress.co.jp/docs/yajiuma/2093923.html",
      "urlToImage": "https://internet.watch.impress.co.jp/img/iw/list/2093/923/yajiuma-watch_1.png",
      "publishedAt": "2026-03-17T02:07:47Z",
      "content": "AppleMac \r\n MacRumorsAppleMac2MacBook NeoM5MacBook AirMacBook Neo \r\n MacRumorsMac202021AppleMac"
    },
    {
      "source": {
        "id": null,
        "name": "Impress.co.jp"
      },
      "author": "アイティースリー",
      "title": "AmazonでUGREEN製の紛失防止トラッカーがセール中！　充電対応の「UGREEN FineTrack Smart Finder」は1274円から",
      "description": "Amazon.co.jpのUGREENストアページでは、同社製の紛失防止トラッカー（スマートトラッカー）がタイムセール中だ。「UGREEN FineTrack」シリーズは、Appleの「探す」機能や「Google Find Hub」に対応したトラッカー。対応スマートフォンと連携してリアルタイムで位置確認が可能。",
      "url": "https://internet.watch.impress.co.jp/docs/shopping/2093918.html",
      "urlToImage": "https://internet.watch.impress.co.jp/img/iw/list/2093/918/i-260317-UGREEN_1222.jpg",
      "publishedAt": "2026-03-17T02:30:00Z",
      "content": "Amazon.co.jpUGREENUGREEN FineTrackAppleGoogle Find Hub \r\n FineTrack Smart FinderiOS80dBBluetoothCR20322113592254944559 \r\n iOSFineTrack Smart Finder112112742279945014 \r\n FineTrack Mini Smart FinderiOS… [+163 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Antyweb.pl"
      },
      "author": "Piotr Kurek",
      "title": "Hit sci-fi Apple powraca. Będą niespodzianki",
      "description": "Wygląda na to, że trzeci sezon „Rozdzielenia” wchodzi w realną fazę produkcji! Kiedy możemy się spodziewać powrotu najlepszego serialu sci-fi w ofercie Apple TV?",
      "url": "https://antyweb.pl/hit-sci-fi-apple-powraca-beda-niespodzianki",
      "urlToImage": "https://static.antyweb.pl/img/w_1250,h_550/wp-content/uploads/2022/04/kilo1m6ata/severance.jpg",
      "publishedAt": "2026-03-17T09:30:48Z",
      "content": "W wypowiedzi dla serwisu Deadline, odtwórca gównej roli w Rozdzieleniu zdradzi, e zdjcia do nowego sezonu maj ruszy ju niebawem, co potwierdza dotychczasowe doniesienia mówice o starcie prac wiosn 20… [+1979 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Antyweb.pl"
      },
      "author": "Kamil Pieczonka",
      "title": "Najtańszy Macbook już na przecenie. Aż żal go nie kupić",
      "description": "Apple przyzwyczaiło nas do tego, że ich sprzęty trzymają cenę niczym rzadkie okazy kolekcjonerskie, a na pierwsze obniżki trzeba czekać miesiącami.",
      "url": "https://antyweb.pl/najtanszy-macbook-juz-na-przecenie-az-zal-go-nie-kupic",
      "urlToImage": "https://static.antyweb.pl/img/w_1250,h_550/wp-content/uploads/2026/03/macbook-neo_10.jpeg",
      "publishedAt": "2026-03-17T10:31:54Z",
      "content": "Tymczasem najnowszy Macbook Neo, który zadebiutowa zaledwie tydzie temu jako najtaszy notebook w ofercie giganta z Cupertino, wanie doczeka si pierwszej powanej przeceny. Na polskim Amazonie model w … [+1794 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Antyweb.pl"
      },
      "author": "Kamil Pieczonka",
      "title": "Słuchawki z Temu mniej szkodliwe niż Sony i Samsung. Zaskakujące wyniki badań",
      "description": "Na rynku elektroniki użytkowej oczekujemy, że wysoka cena i prestiżowa marka są gwarancją jakości. Okazuje się, że nie pod każdym względem.",
      "url": "https://antyweb.pl/sluchawki-z-temu-mniej-szkodliwe-niz-sony-i-samsung-zaskakujace-wyniki-badan",
      "urlToImage": "https://static.antyweb.pl/img/w_1250,h_550/wp-content/uploads/2026/02/Galaxy-Buds-4-Pro-3-scaled.jpg",
      "publishedAt": "2026-03-17T08:00:44Z",
      "content": "Raport The Sound of Contamination przygotowany przez inicjatyw ToxFree Life for All i wspófinansowany przez Uni Europejsk brutalnie weryfikuje to przekonanie, ujawniajc przeraajc skal zanieczyszczeni… [+3499 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Antyweb.pl"
      },
      "author": "Konrad Kozłowski",
      "title": "Prawda jest brutalna. Zamiast Netflixa, nawet młodzi wolą hit z lat 90.",
      "description": "Nowe podejście do oglądania filmów zatacza coraz szersze kręgi. Odwrót od serwisów streamingowych jest coraz bardziej widoczny. Jaka jest alternatywa?",
      "url": "https://antyweb.pl/prawda-jest-brutalna-zamiast-netflixa-nawet-mlodzi-wola-hit-z-lat-90",
      "urlToImage": "https://static.antyweb.pl/img/w_1250,h_550/wp-content/uploads/2023/08/1ewvaoo9g6/sony.ubp-x800.4k.uhd_.bd_.jpg",
      "publishedAt": "2026-03-17T06:00:18Z",
      "content": "Jeszcze kilka lat temu wyrzucenie ostatniego odtwarzacza DVD wydawao si naturalnym krokiem kadego porzdkujce wasne mieszkanie. U niektórych ten etap nastpi nawet wczeniej, kilkanacie lat temu. Wtedy … [+7608 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Cool3c.com"
      },
      "author": "Mash Yang",
      "title": "AirPods Max 2 搭載 H2 降噪升級 1.5 倍 支援即時翻譯",
      "description": "Mash Yang發佈AirPods Max 2 搭載 H2 降噪升級 1.5 倍 支援即時翻譯，最新資訊於2026-03-17 13:11：晶片，提升主動式降噪效能。新增 USB-C 無損音訊、適應性音訊及即時翻譯功能，強化其高階耳機定位。#(247067)",
      "url": "https://www.cool3c.com/article/247067",
      "urlToImage": "https://bucket-image.inkmaginecms.com/version/social/9dde7c0f-a597-445c-80dd-9a93db8a4006/image/2026/03/5eaf0650-cdc4-4694-a584-203e78429e62.jpg",
      "publishedAt": "2026-03-17T05:11:00Z",
      "content": "AirPods Max 2 H2 1.5 \r\nAirPods Max 2AirPods Pro 2H2\r\nH21.5 \r\nEric TreskiH2AirPods Max1.5H2\r\nH2AirPods Max\r\nAirPods Max 2\r\nAirPods MaxUSB-C2448 kHz\r\nH2AirPods Max 2AirPods Pro\r\nApple IntelligenceAirPo… [+239 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Slate Magazine"
      },
      "author": "Alex Kirshner, Ben Lindbergh, and Lindsay Gibbs",
      "title": "Team USA’s Wacky Rah-Rah March Through the WBC",
      "description": "The World Baseball Classic has been packed with thrilling baseball, off-field drama, and plenty of flag-waving.",
      "url": "https://slate.com/podcasts/hang-up-and-listen/2026/03/paul-skenes-and-team-usa-shut-down-the-dominican-republic-in-the-drama-filled-world-baseball-classic",
      "urlToImage": "https://compote.slate.com/images/9c2161d8-8f91-4731-8ff8-d2b44d7bfca6.jpeg?width=1560",
      "publishedAt": "2026-03-17T00:00:00Z",
      "content": "Hosts Alex Kirshner, Lindsay Gibbs, and Ben Lindbergh discuss the thrilling World Baseball Classic semifinal between Team USA and the Dominican Republic, as well as the missed calls, Navy SEAL visits… [+1011 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Gadgeteer"
      },
      "author": "Vincent Nguyen",
      "title": "Every Pool Robot Needs Cleaning, Except This One",
      "description": "Pool robots have come a long way. They scrub floors, climb walls, skim surfaces, and map your pool like a self-driving car navigates a highway. But every single one of them shares the same dirty secret: you still have to clean the cleaner. Every cycle ends th…",
      "url": "https://the-gadgeteer.com/2026/03/16/every-pool-robot-needs-cleaning-except-this-one/",
      "urlToImage": "https://the-gadgeteer.com/wp-content/uploads/2026/03/Beatbot-AquaSense-X-Robotic-Pool-Cleaner.jpg",
      "publishedAt": "2026-03-17T02:59:45Z",
      "content": "If you buy something from a link in this article, we may earn a commission. Learn more\r\nPool robots have come a long way. They scrub floors, climb walls, skim surfaces, and map your pool like a self-… [+10456 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Actualidadiphone.com"
      },
      "author": "Luis Padilla",
      "title": "Apple: 50 años de historia que cambiaron el mundo",
      "description": "Repasamos los 50 años de historia de la compañía más conocida del mundo, con sus éxitos y sus fracasos, sus aciertos y errores",
      "url": "https://www.actualidadiphone.com/apple-50-anos-de-historia-que-cambiaron-el-mundo/",
      "urlToImage": "https://www.actualidadiphone.com/wp-content/uploads/2026/03/Apple-Cronologia.jpg",
      "publishedAt": "2026-03-17T01:45:26Z",
      "content": "En abril de 1976, en el garaje de una casa suburbana en Los Altos, California, nació un proyecto que no solo pretendía vender circuitos impresos, sino democratizar una herramienta que, hasta entonces… [+11102 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Actualidadiphone.com"
      },
      "author": "Luis Padilla",
      "title": "Chips de 2nm: ¿Qué significa y cuál es su importancia?",
      "description": "Analizamos la carrera de Apple por los 2nm y 3nm: qué significa realmente la miniaturización de transistores y cómo afecta a tu iPhone",
      "url": "https://www.actualidadiphone.com/analisis-nanometros-chips-iphone-estrategia/",
      "urlToImage": "https://www.actualidadiphone.com/wp-content/uploads/2026/03/A17-Pro-3nm.jpg",
      "publishedAt": "2026-03-17T00:19:56Z",
      "content": "Cuando escuchamos que el último procesador ha sido fabricado con un proceso de 3 nanómetros, solemos interpretar que es «mejor» por inercia. Pero, ¿qué significa realmente esa reducción en la escala?… [+5596 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Actualidadiphone.com"
      },
      "author": "Actualidad iPhone",
      "title": "Lanzamiento global del iPhone 18 Pro en septiembre: qué se sabe",
      "description": "Todo sobre el lanzamiento global del iPhone 18 Pro en septiembre: fechas, chip A20 Pro, cámara, batería y estrategia de Apple en España y Europa.",
      "url": "https://www.actualidadiphone.com/lanzamiento-global-del-iphone-18-pro-en-septiembre-que-se-sabe/",
      "urlToImage": "https://www.actualidadiphone.com/wp-content/uploads/2026/03/lanzamiento-global-del-iPhone-18-Pro-en-septiembre.jpg",
      "publishedAt": "2026-03-17T01:22:55Z",
      "content": "Apple se prepara para un posible giro de guion en el lanzamiento global del iPhone 18 Pro en septiembre, un movimiento que podría modificar por completo el calendario al que el sector se ha acostumbr… [+16328 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "3dnews.ru"
      },
      "author": null,
      "title": "Telegram оштрафовали на 35 млн рублей за неудаление запрещённой информации — Apple получила на порядок меньше",
      "description": "Таганский районный суд Москвы оштрафовал мессенджер Telegram на 35 млн рублей. Такое наказание вынесено по пяти эпизодам неудаления информации, распространение которой запрещено на территории России. Тот же суд оштрафовал видеосервис TikTok и компанию Apple н…",
      "url": "https://3dnews.ru/1138404/telegram-oshtrafovali-na-35-mln-rubley-za-neudalenie-zapreshchyonnoy-informatsii-apple-poluchila-na-poryadok-menshe",
      "urlToImage": "https://3dnews.ru/assets/external/illustrations/2026/03/17/1138404/153.jpg",
      "publishedAt": "2026-03-17T07:48:00Z",
      "content": "Telegram 35 . , . TikTok Apple 3 3,5 .\r\n : Wesley Tingey/unsplash.com\r\nTelegram . 4 . 13.41 . , , , .\r\nTikTok Apple , . . 3 Freepik."
    },
    {
      "source": {
        "id": null,
        "name": "3dnews.ru"
      },
      "author": null,
      "title": "Nvidia выручит до конца следующего года $1 трлн от реализации аппаратных решений для ИИ, как считает основатель компании",
      "description": "Подобные заявления формально больше подходят для квартальной отчётной конференции, но основатель Nvidia Дженсен Хуанг (Jensen Huang) на открытии мероприятия GTC 2026 не удержался от финансовых прогнозов. Он ожидает, что до конца 2027 года компания выручит на …",
      "url": "https://3dnews.ru/1138395/nvidia-viruchit-do-kontsa-sleduyushchego-goda-1-trln-ot-realizatsii-apparatnih-resheniy-dlya-ii-kak-schitaet-osnovatel-kompanii",
      "urlToImage": "https://3dnews.ru/assets/external/illustrations/2026/03/17/1138395/huang_01.jpg",
      "publishedAt": "2026-03-17T01:50:00Z",
      "content": ", Nvidia (Jensen Huang) GTC 2026 . , 2027 «» $1 .\r\n: Nvidia\r\n« , 2027 $1 », — . , , 2025 2027 , , . $1 — Walmart ($681 ) - Amazon, ($638 ). Apple $391 , , .\r\n Nvidia $215 , , $130,5 . Nvidia $78 . $5… [+113 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Sspai.com"
      },
      "author": "北鸮",
      "title": "为心脏健康持续护航，Apple Watch 房颤迹象记录软件功能上线",
      "description": "2022 年，一项名为「房颤历史记录」（AFib History）的功能随 iOS 16 与 watchOS 9 推出。如今，这项功能终于通过了国家药监局的审批，以「移动脉率房颤迹象记录软件」的形式正式在国内上线，Apple Watch Series 6 及更新机型在升级到 watchOS 26 后即可开启此功能。查看全文",
      "url": "https://sspai.com/post/107453",
      "urlToImage": "https://rssfile.sspai.com/2026/3/17/article/0b05559b-207e-9426-5a3c-de07ae8f9cd8.jpeg?imageMogr2/auto-orient/format/webp/ignore-error/1",
      "publishedAt": "2026-03-17T04:00:00Z",
      "content": "2022 AFib History iOS 16 watchOS 9 Apple Watch Series 6 watchOS 26 \r\n2015 Apple Watch Apple Watch iPhone 18 Apple Watch Apple Watch PPG \r\n2018 Apple Watch Series 4 Apple Watch ECG Apple Watch Apple W… [+249 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Everything-everywhere.com"
      },
      "author": "Gary Arndt",
      "title": "The Life of Vince Van Gogh",
      "description": "Podcast Transcript Few artists’ works are as instantly recognizable as Vincent van Gogh’s.  In just a single decade, he created some of the most famous paintings in history, filled with bold color, swirling movement, and raw emotion.  Yet during his lifetime,…",
      "url": "https://everything-everywhere.com/the-life-of-vince-van-gogh/",
      "urlToImage": "https://photos.smugmug.com/Other/n-hRFP2/Podcast-Images/i-rTQtSqC/0/LZ8G9w2LVHrhK6xF9QbHLqRgcsdjwR6tdPKTbM9s7/L/2080epart-L.jpg",
      "publishedAt": "2026-03-17T04:46:02Z",
      "content": "Subscribe Apple | Spotify | Amazon |iHeart Radio | Castbox | Podcast Republic | RSS | Patreon | Discord | Facebook | IMDB\r\nFew artists’ works are as instantly recognizable as Vincent van Gogh’s. \r\nIn… [+13395 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Cult of Mac"
      },
      "author": "Rajesh Pandey",
      "title": "Apple retires a legendary iPhone",
      "description": "The iPhone 5 joins Apple’s obsolete products list. It was a landmark device that introduced the Lightning port and a new design.\n(via Cult of Mac - Your source for the latest Apple news, rumors, analysis, reviews, how-tos and deals.)",
      "url": "https://www.cultofmac.com/news/apple-retires-legendary-iphone",
      "urlToImage": "https://www.cultofmac.com/wp-content/uploads/2026/03/iphone-5-obsolete.jpeg.webp",
      "publishedAt": "2026-03-17T06:18:41Z",
      "content": "No more repair support for iPhone 5. AI image: ChatGPT\r\nApple’s first iPhone with the Lightning port, the iPhone 5, is now obsolete. The phone launched over a decade ago, in 2012.\r\nBack then, the iPh… [+1577 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Elespanol.com"
      },
      "author": "César Rebolledo",
      "title": "FREE FIRE MAX | Códigos de hoy martes 17 de marzo de 2026 - Recompensas gratis",
      "description": "<!--cache-->Estos son todos los códigos gratis de Garena Free Fire MAX que podrás canjear hoy, martes 17 de marzo de 2026. Consigue recompensas como skins, diamantes y mucho más.<!--aa--->El éxito para móviles Android e iOS, Garena Free Fire MAX, ha recibido …",
      "url": "https://vandal.elespanol.com/noticia/1350788211/free-fire-max-codigos-de-hoy-martes-17-de-marzo-de-2026-recompensas-gratis/",
      "urlToImage": "https://media.vandal.net/ivandal/12/63/1200x630/3/3-2026/17/20263179355594_1.jpg",
      "publishedAt": "2026-03-17T08:36:00Z",
      "content": "El éxito para móviles Android e iOS, Garena Free Fire MAX, ha recibido nuevos códigos diarios para hoy martes 17 de marzo de 2026.\r\nLos jugadores pueden canjear estos códigos para recibir recompensas… [+2454 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Twistedsifter.com"
      },
      "author": "Heather Hall",
      "title": "Tech Support Agent Refused To Transfer Customer To Apple Support Because It’s Not Possible From Their Phone System, But The Customer Insisted It Was Done Before And Demanded A Supervisor",
      "description": "He was right to refuse.",
      "url": "http://twistedsifter.com/2026/03/tech-support-agent-refused-to-transfer-customer-to-apple-support-because-its-not-possible-from-their-phone-system-but-the-customer-insisted-it-was-done-before-and-demanded-a-supervisor/",
      "urlToImage": "https://twistedsifter.com/wp-content/uploads/2026/02/Support-Thumb.jpg",
      "publishedAt": "2026-03-17T03:49:02Z",
      "content": "Pexels/Reddit\r\nThere are some customers you just can’t get through to, no matter what.\r\nSo, what would you do if a customer called your company and demanded that you transfer him to Apple Support, ev… [+2672 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Twistedsifter.com"
      },
      "author": "Mila Cardozo",
      "title": "Office Employee Put Up A Poll With Multiple Pie Options For Her Coworkers To Vote On, But They Added Two More Options And Voted For Those Instead",
      "description": "But life is too precious to stress over pie.",
      "url": "http://twistedsifter.com/2026/03/office-employee-put-up-a-poll-with-multiple-pie-options-for-her-coworkers-to-vote-on-but-they-added-two-more-options-and-voted-for-those-instead/",
      "urlToImage": "https://twistedsifter.com/wp-content/uploads/2026/02/WIBTAH-if-i-didnt-make-the-pie-that-got-the-most-votes-because-it-wasnt-on-the-poll-in-the-first-place-reddit.jpg",
      "publishedAt": "2026-03-17T05:20:13Z",
      "content": "Pexels/Reddit\r\nSometimes you give them an inch and they want to take a mile.\r\nIn this case, an office employee known as the “office baker” kindly offered to make a pie for Pi Day, but her coworkers t… [+2663 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Taisy0.com"
      },
      "author": "taisy0",
      "title": "TOICAが｢Appleウォレット｣に対応 ｰ iPhoneやApple Watchで利用可能に",
      "description": "本日、JR東海とJR西日本が、TOICAのモバイルICサービスがAppleウォレットに対応したことを発表しました。 これにより、iPhoneやApple WatchでのAppleウォレットで「ICOCA (TOICAモデル)」を発行し、鉄道",
      "url": "https://taisy0.com/2026/03/17/221218.html",
      "urlToImage": "https://taisy0.com/wp-content/uploads/2026/03/toicaappleWallet.jpg",
      "publishedAt": "2026-03-17T04:18:32Z",
      "content": "JRJRTOICAICApple\r\niPhoneApple WatchAppleICOCA (TOICA)\r\nTOICATOICAICOCA (TOICA)TOICA\r\nTOICA\r\niOS 16.0iPhone 8watchOS 8.7.1Apple Watch Series 3"
    },
    {
      "source": {
        "id": null,
        "name": "Taisy0.com"
      },
      "author": "taisy0",
      "title": "｢iOS 26.4｣や｢macOS 26.4｣は｢AirPods Max 2｣の発売に合わせて3月末〜4月初旬に正式にリリースへ",
      "description": "昨晩、Appleが突如として「AirPods Max 2」を発表しましたが、その「AirPods Max 2」の仕様ページからiOSやmacOSの次期アップデートである「iOS 26.4」や「macOS 26.4」の正式なリリース時期が明ら",
      "url": "https://taisy0.com/2026/03/17/221223.html",
      "urlToImage": "https://taisy0.com/wp-content/uploads/2025/07/applenextos2025.jpg",
      "publishedAt": "2026-03-17T05:33:57Z",
      "content": "AppleAirPods Max 2AirPods Max 2iOSmacOSiOS 26.4macOS 26.4\r\nAirPods Max 21iOS 26.4iPadOS 26.4macOS 26.4\r\niOS 26.4macOS 26.4AirPods Max 2\r\nAirPods Max 2325iOS 26.4macOS 26.4331()47()\r\nAirPods Max 2 – A… [+3 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Macitynet.it"
      },
      "author": "Fabrizio Frattini",
      "title": "Aggiornare l’SSD del MacBook Neo si può, ma è operazione per pochi",
      "description": "Uno youtuber riesce a sostituire il chip NAND del MacBook Neo portandolo a 1TB di spazio, dimostrando che i limiti Apple non sono tecnici ma progettuali, anche se l’operazione resta davvero complessa rischiosa e fuori portata per utenti comuni oggi.\n- su maci…",
      "url": "https://www.macitynet.it/?p=1461759",
      "urlToImage": "https://www.macitynet.it/wp-content/uploads/2026/03/aggiornamento-ssd-macbook-neo.jpg",
      "publishedAt": "2026-03-17T08:29:55Z",
      "content": "Portare il MacBook Neo a 1TB sfidando tutti i blocchi tecnici imposti da Apple. È questo quel che è riuscito a fare lo youtuber DirectorFeng, già noto per tentativi simili di modifica su dispositivi … [+3198 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Macitynet.it"
      },
      "author": "Mauro Notarianni",
      "title": "FireWire, un driver open source per macOS Tahoe",
      "description": "Apple non offre più il supporto alla tecnologia FireWire in macOS Tahoe e uno sviluppatore ha deciso di sviluppare in proprio il driver per gestire dispositivi di questo tipo.\n- su macitynet.it FireWire, un driver open source per macOS Tahoe",
      "url": "https://www.macitynet.it/?p=1461748",
      "urlToImage": "https://www.macitynet.it/wp-content/uploads/2003/01/firewire400e800.jpg",
      "publishedAt": "2026-03-17T10:29:56Z",
      "content": "maCOS 26 Tahoe non integra più il supporto alla tecnologia FireWire. Apple ha rimosso il supporto alle connessioni FireWire (o i.Link come la chiama Sony) in passato sfruttate per collegare dispositi… [+2512 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Macitynet.it"
      },
      "author": "Mauro Notarianni",
      "title": "Le AirPods Max 2 confermano l’arrivo di iOS 26.4 al massimo per inizio aprile",
      "description": "La disponibilità delle AirPods Max 2 permette a Apple di accelerare lo sviluppo dell'update a iOS 26.4; in quest'ultima versione di iOS varie funzioni fondamentali di supporto per le nuove cuffie.\n- su macitynet.it Le AirPods Max 2 confermano l’arrivo di iOS …",
      "url": "https://www.macitynet.it/le-airpods-max-2-confermano-larrivo-di-ios-26-4-al-massimo-per-inizio-aprile/",
      "urlToImage": "https://www.macitynet.it/wp-content/uploads/2026/03/ios264es.jpg",
      "publishedAt": "2026-03-17T07:29:58Z",
      "content": "Apple ha presentato le AirPods Max 2, cuffie ad archetto di nuova generazione, con cancellazione attiva del rumore ancora più efficace, qualità audio superiore e varie funzionalità smart dedicate all… [+1630 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hwupgrade.it"
      },
      "author": null,
      "title": "Apple svela le AirPods Max 2 con chip H2 e tante novità: ecco prezzo e data di uscita",
      "description": "Apple ha aggiornato la sua gamma di prodotti con le nuove AirPods Max 2: ecco tutte le novità, il prezzo e la data di uscita della seconda generazione di cuffie over ear della casa di Cupertino",
      "url": "https://www.hwupgrade.it/news/apple/apple-svela-le-airpodsnbspmaxnbsp2-con-chip-h2-e-tante-novita-ecco-prezzo-e-data-di-uscita_151390.html",
      "urlToImage": "https://www.hwupgrade.it/i/n/airpods-max-2_720.jpg",
      "publishedAt": "2026-03-17T07:11:01Z",
      "content": "Dopo le tante novità lanciate a inizio marzo, tra cui il chiacchierato MacBook Neo, Apple torna ad aggiornare la sua gamma di prodotti con un annuncio a sorpresa. Con un comunicato stampa pubblicato … [+1641 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Nature.com"
      },
      "author": "Mengya Zhang, Tongcheng Yu, Hao Liu, Chao Lin, Yaping Yang, Bowen Lv, Qi Zhang, Ming Chen, Tianshuai Wang, Weihong Hua, Kai Han",
      "title": "Heat-assisted hot-hole transfer increases the surface-enhanced Raman activity of Au-TiO2 nanoarrays",
      "description": "SERS analysis at higher temperatures, such as during photothermal processes, is challenging due to enhancement losses. Here, the authors demonstrate a heat-induced increase in SERS activity mechanistically attributed to assisted hot-hole transfer.",
      "url": "https://www.nature.com/articles/s41467-026-70822-4",
      "urlToImage": null,
      "publishedAt": "2026-03-17T00:00:00Z",
      "content": "<li>Cortés, E. Activating plasmonic chemistry. Science362, 2829 (2018).\r\nGoogle Scholar \r\n</li><li>Mascaretti, L. et al. Challenges in temperature measurements in gas-phase photothermal catalysis. Jo… [+15307 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "PhoneArena"
      },
      "author": "Sebastian Pier",
      "title": "Bad news for the iPhone 18e, great rumors for the iPhone 19e (a.k.a the iPhone 20e)",
      "description": "120Hz refresh rate: is it important for you?",
      "url": "https://www.phonearena.com/news/bad-news-for-the-iphone-18e-great-rumors-for-the-iphone-19e_id178975",
      "urlToImage": "https://m-cdn.phonearena.com/images/article/178975-wide-two_1200/Bad-news-for-the-iPhone-18e-great-rumors-for-the-iPhone-19e-a.k.a-the-iPhone-20e.jpg",
      "publishedAt": "2026-03-17T09:55:46Z",
      "content": "Next year, Apple will celebrate the iPhone's 20th anniversary. That's why some say the iPhone 19 moniker might be skipped in favor of the iPhone 20 as an act of commemoration. Sounds logical.This is … [+1651 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Sspai.com"
      },
      "author": "听歌的水獭",
      "title": "投票开启｜BeatBox 盖板设计实录：用一块透明亚克力，把奇妙灵感凝成实体",
      "description": "不仅仅是一块盖板最好的设计往往不是正襟危坐的苦思冥想，而是对生活平凡瞬间的细致观察。在整理BeatBox盖板设计大赛的作品时，我们发现，这块方寸之间的透明面板，正成为连接数字音乐与实体触感的桥梁。它不 ...查看全文",
      "url": "https://sspai.com/post/106917",
      "urlToImage": "https://rssfile.sspai.com/2026/3/13/article/0a93a978-2586-f1f3-b007-5a93f0ab1def.png?imageMogr2/auto-orient/format/webp/ignore-error/1",
      "publishedAt": "2026-03-17T06:30:00Z",
      "content": "BeatBox \r\n@ Bond844\r\n@ Bond844 IP BeatBox 2045 CD \r\n@ Pengpeng\r\n@ Pengpeng CD \r\nOkokume@\r\n@ Okokume· Cosmic Girl BeatBoxOkokume Okokume \r\n@\r\n@ RunnerShells Runner \r\nBeatBox \r\n@ halk\r\n@ halk\r\n AI \r\nLe… [+1152 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hwupgrade.it"
      },
      "author": null,
      "title": "Accessori auto da non perdere su Amazon: aspirapolvere, compressori e CarPlay e Android Auto wireless in super offerta",
      "description": "Alcuni degli accessori auto più apprezzati del momento stanno registrando forti sconti su Amazon. Aspiratori potenti, compressori smart e adattatori wireless per CarPlay e Android Auto diventano ancora più convenienti: ecco le migliori opportunità per miglior…",
      "url": "https://greenmove.hwupgrade.it/news/auto-elettriche/accessori-auto-da-non-perdere-su-amazon-aspirapolvere-compressori-e-carplay-e-android-auto-wireless-in-super-offerta_151406.html",
      "urlToImage": "https://www.hwupgrade.it/i/n/aspirabriciole_720.jpg",
      "publishedAt": "2026-03-17T08:15:24Z",
      "content": "Chi utilizza l'auto ogni giorno sa bene quanto alcuni accessori possano fare la differenza nellesperienza di guida. Dalla pulizia veloce degli interni alla gestione della pressione degli pneumatici,… [+2575 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Sapo.pt"
      },
      "author": "Pedro Simões",
      "title": "Mesmo com mudanças a caminho, a Apple não vai desistir do Liquid Glass",
      "description": "Ainda que tenha mudado o iOS de forma completa, o Liquid Glass introduzido pela Apple em todos os seus sistemas operativos no ano passado e deverá evoluir. A Apple tem planos concretos, mas que...",
      "url": "https://pplware.sapo.pt/apple/mesmo-com-mudancas-a-caminho-a-apple-nao-vai-desistir-do-liquid-glass/",
      "urlToImage": "https://pplware.sapo.pt/wp-content/uploads/2026/03/ios_27_liquid_glass.jpg",
      "publishedAt": "2026-03-17T08:00:48Z",
      "content": "Ainda que tenha mudado o iOS de forma completa, o Liquid Glass introduzido pela Apple em todos os seus sistemas operativos no ano passado e deverá evoluir. A Apple tem planos concretos, mas que vão f… [+2366 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Macotakara.jp"
      },
      "author": "danbo",
      "title": "Apple Store、HerschelのAirTagポケット付きiPhone用クロスボディバッグ「Herschel iPhone Crossbody」を販売開始（Apple限定）",
      "description": "Herschel iPhone Crossbody\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- テキスト -->\n\nApple Storeが、HerschelのiPhone用クロスボディバッグ「Herschel iPhone Crossbody」を9,800円で販売開始しています。\n\nミニマルなデザインと軽量でクッション製のあるファブリック素材を採用。開口部が大きく、収納したiPhoneを取り出すのは簡単です。",
      "url": "https://www.macotakara.jp/accessories/entry-50712.html",
      "urlToImage": "https://www.macotakara.jp/archives/001/202603/2938339ddde06de1.jpg",
      "publishedAt": "2026-03-17T08:51:40Z",
      "content": "Herschel iPhone Crossbody\r\nHerschel iPhone Crossbody"
    },
    {
      "source": {
        "id": null,
        "name": "Macotakara.jp"
      },
      "author": "danbo",
      "title": "JR東海、ICOCAの仕組みを活用したモバイルICサービス「ICOCA（TOICAモデル）for iOS」が、Appleウォレットに対応",
      "description": "ICOCA（TOICAモデル）：ApplePay\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- テキスト -->\n\nJR東海が、JR西日本の「ICOCA」の仕組みを活用したモバイルICサービス「ICOCA（TOICAモデル）for iOS」で、Appleウォレットに対応したと発表しています。\n\niPhoneやApple WatchのAppleウォレットにICOCA（TOICAモデル）を新規発行、またはお持ちのTOICAやTOICA定期券の情報を引き継…",
      "url": "https://www.macotakara.jp/news/entry-50705.html",
      "urlToImage": "https://www.macotakara.jp/archives/001/202603/403799730c61f513.jpg",
      "publishedAt": "2026-03-17T01:33:36Z",
      "content": "JRJRICOCAICICOCATOICAfor iOSApple\r\niPhoneApple WatchAppleICOCATOICATOICATOICAICOCATOICA\r\nICOCAApple"
    },
    {
      "source": {
        "id": null,
        "name": "Macotakara.jp"
      },
      "author": "danbo",
      "title": "Apple Store、MOFTの探す＆MagSafeマウント対応iPhone用スタンド「MOFT FindMy MagSafe Wallet Stand」を販売開始",
      "description": "MOFT FindMy MagSafe Wallet Stand\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- テキスト -->\n\nApple Storeが、MOFTの探す＆MagSafeマウント対応iPhone用スタンド「MOFT FindMy MagSafe Wallet Stand」を8,800円で販売開始しています。\n\nアメリカで先行販売されていたアクセサリで、日本でも販売が開始されています。\n\nホワイト、ブラックの2色展開となります。",
      "url": "https://www.macotakara.jp/accessories/entry-50709.html",
      "urlToImage": "https://www.macotakara.jp/archives/001/202603/c0d95383affc0366.jpg",
      "publishedAt": "2026-03-17T05:54:23Z",
      "content": "MOFT FindMy MagSafe Wallet Stand\r\nMOFT FindMy MagSafe Wallet Stand\r\niPhoneiPadMac Apple Watch Apple Find My \r\n80mAh"
    }
  ]

  constructor(){
    super({});

    this.state = {
      articles: this.articles,
      loading: false,
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headline</h2>
        <div className="row">
            {this.state.articles.map((element: any) => (
              <div className="col-md-3" key={element.url}>
                <NewsItems 
                title={element.title?.length > 45
                  ?element.title.slice(0,45)+ "..."
                  :element.title} 
                description={element.description?.length > 88
                  ?element.description.slice(0,88) + "..."
                  :element.description} 
                imageUrl={element.urlToImage} 
                newsUrl={element.newsUrl} />
              </div>
            ))}
        </div>
        
      </div>
    )
  }
}

export default News
