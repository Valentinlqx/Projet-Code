const categories = [
  { id: 'images',        label: '🖼️ Images',        color: '#3ecfcf' },
  { id: 'polices',       label: '🔤 Polices',        color: '#6c63ff' },
  { id: 'icones',        label: '✦ Icônes',          color: '#ff6b6b' },
  { id: 'illustrations', label: '✏️ Illustrations',  color: '#ffd93d' },
  { id: 'couleurs',      label: '🎨 Couleurs',        color: '#ff9f43' },
  { id: 'design',        label: '⚡ Design',          color: '#48dbfb' },
  { id: 'sons',          label: '🎵 Sons',            color: '#ff6b81' },
  { id: 'musiques',      label: '🎼 Musiques',        color: '#6ab04c' },
  { id: 'mockups',       label: '📦 Mockups',         color: '#a29bfe' },
  { id: 'jeux',          label: '🎮 Jeux Vidéos',     color: '#78e08f' },
  { id: 'web',           label: '🌐 Web',             color: '#fd9644' },
  { id: 'video',         label: '🎬 Vidéo',           color: '#e17055' },
  { id: 'textures',      label: '🪨 Textures',         color: '#b8860b' },
  { id: 'brushes',       label: '🖌️ Brushes',          color: '#c0392b' },
  { id: 'png',           label: '🔳 PNG',              color: '#7f8c8d' },
  { id: 'ia',            label: '🤖 Outils IA',        color: '#8e44ad' },
  { id: 'outils',        label: '🛠️ Outils',           color: '#00b894' },
  { id: 'tutos',         label: '📖 Tutos',             color: '#fdcb6e' },
  { id: 'inspi',         label: '💡 Inspiration',       color: '#fd79a8' },
];

const resources = [

  // ── Images ──
  {
    name: 'Unsplash',
    desc: 'Photos haute résolution gratuites et libres de droits, contributées par une communauté mondiale.',
    url: 'https://unsplash.com',
    cats: ['images'],
    emoji: '🌄',
  },
  {
    name: 'Pexels',
    desc: 'Photos et vidéos HD gratuites par une communauté mondiale de créateurs talentueux.',
    url: 'https://pexels.com',
    cats: ['images', 'video'],
    emoji: '📷',
  },
  {
    name: 'Pixabay',
    desc: 'Plus d\'un million d\'images, vidéos, sons et musiques libres de droits sous licence CC0.',
    url: 'https://pixabay.com',
    cats: ['images', 'video', 'sons', 'musiques'],
    emoji: '🖼️',
  },
  {
    name: 'Pixabay Audio',
    desc: 'Section audio de Pixabay : musiques et effets sonores spécifiquement classés et filtrables.',
    url: 'https://pixabay.com/music/',
    cats: ['sons', 'musiques'],
    emoji: '🎶',
  },
  {
    name: 'StockSnap',
    desc: 'Des centaines de nouvelles photos libres de droits ajoutées chaque semaine.',
    url: 'https://stocksnap.io',
    cats: ['images'],
    emoji: '📸',
  },
  {
    name: 'Burst',
    desc: 'Photos gratuites pour créateurs et entrepreneurs, par Shopify.',
    url: 'https://burst.shopify.com',
    cats: ['images'],
    emoji: '⚡',
  },
  {
    name: 'Life of Pix',
    desc: 'Photos haute résolution libres de droits pour usage personnel et commercial.',
    url: 'https://www.lifeofpix.com',
    cats: ['images'],
    emoji: '🌿',
  },
  {
    name: 'Nappy',
    desc: 'Photographies authentiques de personnes de couleur, gratuites pour usage commercial.',
    url: 'https://nappy.co/',
    cats: ['images'],
    emoji: '🤎',
  },
  {
    name: 'Rawpixel Public Domain',
    desc: 'Images et illustrations du domaine public à télécharger librement pour tout usage.',
    url: 'https://www.rawpixel.com/public-domain',
    cats: ['images', 'illustrations'],
    emoji: '🏛️',
  },
  {
    name: 'Public.work',
    desc: 'Collection d\'images sous licence CC0 pour projets créatifs, recherchables facilement.',
    url: 'https://public.work/',
    cats: ['images'],
    emoji: '🔍',
  },
  {
    name: 'Freepik',
    desc: 'Vecteurs, photos, illustrations et PSD gratuits pour tous types de projets créatifs.',
    url: 'https://www.freepik.com/',
    cats: ['images', 'illustrations', 'icones'],
    emoji: '🎯',
    paid: true,
  },
  {
    name: 'ISO Republic',
    desc: 'Photos, vidéos et pistes audio gratuites et libres de droits pour usage commercial.',
    url: 'https://isorepublic.com/',
    cats: ['images', 'video', 'sons'],
    emoji: '🌐',
  },
  {
    name: 'Toools Stock Photos',
    desc: 'Liste d\'agrégateurs de sites de photos et vidéos libres de droits sélectionnés.',
    url: 'https://www.toools.design/free-stock-photo-and-video-websites',
    cats: ['images', 'video'],
    emoji: '📋',
  },

  // ── Polices ──
  {
    name: 'Google Fonts',
    desc: 'Bibliothèque de plus de 1400 polices open-source, directement intégrables en CSS.',
    url: 'https://fonts.google.com',
    cats: ['polices'],
    emoji: '🔡',
  },
  {
    name: 'Font Squirrel',
    desc: 'Polices libres de droits sélectionnées à la main, toutes utilisables commercialement.',
    url: 'https://www.fontsquirrel.com',
    cats: ['polices'],
    emoji: '🐿️',
  },
  {
    name: 'DaFont',
    desc: 'Des milliers de polices gratuites organisées par style et catégorie.',
    url: 'https://www.dafont.com/fr/',
    cats: ['polices'],
    emoji: '✒️',
    paid: true,
  },
  {
    name: 'Fontesk',
    desc: 'Polices gratuites soigneusement sélectionnées pour usage personnel et commercial.',
    url: 'https://fontesk.com',
    cats: ['polices'],
    emoji: '✍️',
  },
  {
    name: '1001 Fonts',
    desc: 'Large collection de polices gratuites pour tous les projets créatifs.',
    url: 'https://www.1001fonts.com',
    cats: ['polices'],
    emoji: '📝',
    paid: true,
  },
  {
    name: 'Free Faces',
    desc: 'Galerie de polices gratuites et open-source avec aperçus dynamiques et téléchargement direct.',
    url: 'https://www.freefaces.gallery/',
    cats: ['polices'],
    emoji: '🖼️',
  },
  {
    name: 'Fontshare',
    desc: 'Bibliothèque collaborative de polices gratuites pour projets personnels et commerciaux.',
    url: 'https://www.fontshare.com/',
    cats: ['polices'],
    emoji: '🤝',
  },
  {
    name: 'Dirtyline Studio',
    desc: 'Collection de polices originales et créatives proposées par Dirtyline Studio.',
    url: 'https://dirtylinestudio.com/',
    cats: ['polices'],
    emoji: '🖊️',
    paid: true,
  },
  {
    name: 'Velvetyne',
    desc: 'Fonderie en ligne offrant des polices libres et expérimentales sous Open Font License.',
    url: 'https://velvetyne.fr/',
    cats: ['polices'],
    emoji: '🧪',
  },
  {
    name: 'Open Foundry',
    desc: 'Plateforme de polices open-source sélectionnées pour leur qualité et leur diversité.',
    url: 'https://open-foundry.com/fonts',
    cats: ['polices'],
    emoji: '🔓',
  },
  {
    name: 'Toools Font Library',
    desc: 'Bibliothèque de ressources et d\'inspirations typographiques pour designers.',
    url: 'https://www.toools.design/font-library-and-inspiration',
    cats: ['polices'],
    emoji: '📚',
  },
  {
    name: 'BeFonts',
    desc: 'Annuaire de polices gratuites classées par style et popularité, téléchargement libre.',
    url: 'https://befonts.com/',
    cats: ['polices'],
    emoji: '🅱️',
  },
  {
    name: 'FontJoy',
    desc: 'Outil IA d\'aide à la création de paires de polices harmonieuses en un clic.',
    url: 'https://fontjoy.com/',
    cats: ['polices', 'outils'],
    emoji: '🎯',
  },
  {
    name: 'Pangram Pangram',
    desc: 'Sélection de polices modernes et stylisées avec aperçus en contexte réel.',
    url: 'https://pangrampangram.com/',
    cats: ['polices'],
    emoji: '✦',
    paid: true,
  },
  {
    name: 'Unblast Fonts',
    desc: 'Collection de polices gratuites de qualité professionnelle pour tout usage créatif.',
    url: 'https://unblast.com/fonts/',
    cats: ['polices'],
    emoji: '💥',
  },
  {
    name: 'Resourceboy Fonts',
    desc: 'Vaste section de polices gratuites au sein de la plateforme Resourceboy.',
    url: 'https://resourceboy.com/fonts/',
    cats: ['polices'],
    emoji: '📦',
  },
  {
    name: 'Fonts In Use',
    desc: 'Base de données de polices identifiées dans le design et la publicité, avec études de cas.',
    url: 'https://fontsinuse.com/',
    cats: ['polices', 'inspi'],
    emoji: '🔍',
  },
  {
    name: 'Text Studio',
    desc: 'Outils en ligne pour tester, combiner et affiner des polices dans vos projets.',
    url: 'https://www.textstudio.com/',
    cats: ['polices', 'outils'],
    emoji: '🎨',
  },

  // ── Icônes ──
  {
    name: 'Heroicons',
    desc: 'Icônes SVG open-source créées par l\'équipe de Tailwind CSS.',
    url: 'https://heroicons.com',
    cats: ['icones'],
    emoji: '⚡',
  },
  {
    name: 'Lucide',
    desc: 'Collection d\'icônes open-source cohérente et élégante, fork de Feather Icons.',
    url: 'https://lucide.dev',
    cats: ['icones'],
    emoji: '🌟',
  },
  {
    name: 'Flaticon',
    desc: 'La plus grande base de données d\'icônes vectorielles gratuites — des millions d\'icônes.',
    url: 'https://www.flaticon.com',
    cats: ['icones'],
    emoji: '🎯',
    paid: true,
  },
  {
    name: 'Icons8',
    desc: 'Icônes, illustrations, photos et musique réunis dans un seul endroit.',
    url: 'https://icons8.com',
    cats: ['icones', 'illustrations'],
    emoji: '🎨',
    paid: true,
  },
  {
    name: 'SVG Repo',
    desc: 'Collection massive de plus de 500 000 icônes SVG gratuites et open-source.',
    url: 'https://www.svgrepo.com',
    cats: ['icones'],
    emoji: '🔷',
  },
  {
    name: 'Tabler Icons',
    desc: 'Plus de 4000 icônes SVG pixel-perfect, open-source et entièrement personnalisables.',
    url: 'https://tabler-icons.io',
    cats: ['icones'],
    emoji: '📐',
  },
  {
    name: 'Phosphor Icons',
    desc: 'Famille d\'icônes flexible avec 6 styles différents pour chaque icône.',
    url: 'https://phosphoricons.com',
    cats: ['icones'],
    emoji: '🧪',
  },
  {
    name: 'Toools Icon Libraries',
    desc: 'Sélection de bibliothèques d\'icônes open-source gratuites, triées et commentées.',
    url: 'https://www.toools.design/free-open-source-icon-libraries',
    cats: ['icones'],
    emoji: '📚',
  },
  {
    name: 'The Noun Project',
    desc: 'Plateforme communautaire de millions d\'icônes et pictogrammes pour tous usages.',
    url: 'https://thenounproject.com/',
    cats: ['icones'],
    emoji: '🔠',
    paid: true,
  },
  {
    name: 'Ionicons',
    desc: 'Ensemble d\'icônes vectorielles pour applications mobiles et web, maintenu par Ionic.',
    url: 'https://ionic.io/ionicons',
    cats: ['icones'],
    emoji: '⚡',
  },
  {
    name: 'Simple Icons',
    desc: 'Icônes SVG de marques et logos populaires, libres pour tout usage web.',
    url: 'https://simpleicons.org/',
    cats: ['icones'],
    emoji: '🏷️',
  },
  {
    name: 'Iconify',
    desc: 'Plateforme unifiant des dizaines de sets d\'icônes open-source, utilisable en CSS ou JS.',
    url: 'https://icon-sets.iconify.design',
    cats: ['icones'],
    emoji: '🔗',
  },
  {
    name: 'Iconduck',
    desc: 'Annuaire d\'icônes gratuites avec recherche par style et filtre par licence.',
    url: 'https://iconduck.com/',
    cats: ['icones'],
    emoji: '🦆',
  },
  {
    name: 'Glyphter',
    desc: 'Créez vos propres fontes d\'icônes personnalisées à partir de SVGs importés.',
    url: 'https://www.glyphter.com/',
    cats: ['icones', 'outils'],
    emoji: '✏️',
  },
  {
    name: 'Reshot',
    desc: 'Banque d\'icônes et de photos gratuites soigneusement sélectionnées pour projets variés.',
    url: 'https://www.reshot.com/',
    cats: ['icones', 'images', 'illustrations'],
    emoji: '📷',
  },

  // ── Illustrations ──
  {
    name: 'unDraw',
    desc: 'Illustrations SVG open-source personnalisables en couleur pour tous vos projets.',
    url: 'https://undraw.co',
    cats: ['illustrations'],
    emoji: '🎨',
  },
  {
    name: 'Storyset',
    desc: 'Illustrations animées gratuites et personnalisables pour sites web et applications.',
    url: 'https://storyset.com',
    cats: ['illustrations'],
    emoji: '📖',
  },
  {
    name: 'Open Doodles',
    desc: 'Croquis et doodles libres de droits dans un style minimaliste et moderne.',
    url: 'https://opendoodles.com',
    cats: ['illustrations'],
    emoji: '✏️',
  },
  {
    name: 'Blush',
    desc: 'Illustrations personnalisables créées par des artistes indépendants du monde entier.',
    url: 'https://blush.design',
    cats: ['illustrations'],
    emoji: '🌸',
    paid: true,
  },
  {
    name: 'Humaaans',
    desc: 'Mix-and-match illustrations de personnes entièrement modulables, par Pablo Stanley.',
    url: 'https://www.humaaans.com',
    cats: ['illustrations'],
    emoji: '👥',
  },
  {
    name: 'DrawKit',
    desc: 'Illustrations vectorielles gratuites pour designers et startups.',
    url: 'https://www.drawkit.com',
    cats: ['illustrations'],
    emoji: '🖌️',
    paid: true,
  },
  {
    name: 'Icons8 Mega Creator',
    desc: 'Outil web pour créer des scènes personnalisées avec des illustrations modulaires et des icônes.',
    url: 'https://icons8.com/mega-creator',
    cats: ['illustrations', 'outils'],
    emoji: '🎭',
  },
  {
    name: 'Open Peeps',
    desc: 'Pack de personnages dessinés à la main et entièrement modifiables, par Pablo Stanley.',
    url: 'https://openpeeps.com/',
    cats: ['illustrations'],
    emoji: '🙋',
  },
  {
    name: 'Storytale',
    desc: 'Générateur d\'illustrations scénarisées pour narrations digitales et présentations.',
    url: 'https://storytale.io/',
    cats: ['illustrations'],
    emoji: '📚',
    paid: true,
  },
  {
    name: 'Absurd Design',
    desc: 'Illustrations absurdes et artistiques pour rendre vos designs uniques et mémorables.',
    url: 'https://absurd.design/',
    cats: ['illustrations'],
    emoji: '🌀',
  },
  {
    name: 'Lukasz Adam',
    desc: 'Série d\'illustrations minimalistes et abstraites gratuites créées par Lukasz Adam.',
    url: 'https://lukaszadam.com/illustrations',
    cats: ['illustrations'],
    emoji: '◻️',
  },
  {
    name: 'Internet Archive Book Images',
    desc: 'Collection d\'images d\'archives libres de droits issues de livres anciens numérisés.',
    url: 'https://www.flickr.com/photos/internetarchivebookimages/',
    cats: ['illustrations', 'images'],
    emoji: '📖',
  },

  // ── Couleurs ──
  {
    name: 'Coolors',
    desc: 'Générateur de palettes ultra-rapide — appuyez sur espace pour générer une nouvelle palette.',
    url: 'https://coolors.co',
    cats: ['couleurs'],
    emoji: '🎨',
  },
  {
    name: 'Adobe Color',
    desc: 'Créez, explorez et partagez des palettes basées sur les règles de théorie des couleurs.',
    url: 'https://color.adobe.com',
    cats: ['couleurs'],
    emoji: '🌈',
  },
  {
    name: 'Color Hunt',
    desc: 'Palettes de couleurs tendance sélectionnées par une communauté de créateurs.',
    url: 'https://colorhunt.co',
    cats: ['couleurs'],
    emoji: '🎯',
  },
  {
    name: 'Realtime Colors',
    desc: 'Visualisez votre palette de couleurs sur un vrai site web, en temps réel.',
    url: 'https://www.realtimecolors.com',
    cats: ['couleurs'],
    emoji: '⚡',
  },
  {
    name: 'UI Colors',
    desc: 'Générez des échelles de teintes Tailwind-ready depuis n\'importe quelle couleur de base.',
    url: 'https://uicolors.app',
    cats: ['couleurs'],
    emoji: '🔢',
  },
  {
    name: 'Resourceboy Gradients',
    desc: 'Collection de dégradés gratuits à importer facilement dans Photoshop.',
    url: 'https://resourceboy.com/photoshop-gradients/',
    cats: ['couleurs'],
    emoji: '🎨',
  },
  {
    name: 'Gradient Hunt',
    desc: 'Bibliothèque interactive de dégradés CSS prêts à l\'emploi, copiables en un clic.',
    url: 'https://gradienthunt.com/',
    cats: ['couleurs'],
    emoji: '🌈',
  },
  {
    name: 'Paletton',
    desc: 'Outil avancé de théorie des couleurs pour construire des palettes harmonieuses.',
    url: 'https://paletton.com/',
    cats: ['couleurs'],
    emoji: '🔵',
  },
  {
    name: 'Open Color',
    desc: 'Palette de couleurs open-source optimisée pour l\'UI, disponible en CSS, Sass et plus.',
    url: 'https://yeun.github.io/open-color/',
    cats: ['couleurs'],
    emoji: '🎨',
  },

  // ── Design ──
  {
    name: 'Figma',
    desc: 'Outil de design collaboratif dans le navigateur, avec un plan gratuit très généreux.',
    url: 'https://figma.com',
    cats: ['design'],
    emoji: '✦',
  },
  {
    name: 'Penpot',
    desc: 'Alternative open-source à Figma, 100% gratuite et auto-hébergeable.',
    url: 'https://penpot.app',
    cats: ['design'],
    emoji: '🐾',
  },
  {
    name: 'Canva',
    desc: 'Créez des designs professionnels en quelques minutes avec des centaines de modèles gratuits.',
    url: 'https://canva.com',
    cats: ['design'],
    emoji: '🖼️',
    paid: true,
  },
  {
    name: 'Photopea',
    desc: 'Éditeur photo avancé dans le navigateur, compatible Photoshop — totalement gratuit.',
    url: 'https://www.photopea.com',
    cats: ['design', 'outils'],
    emoji: '🖊️',
  },
  {
    name: 'Remove.bg',
    desc: 'Supprimez automatiquement l\'arrière-plan de n\'importe quelle photo en quelques secondes.',
    url: 'https://www.remove.bg',
    cats: ['design', 'outils'],
    emoji: '✂️',
    paid: true,
  },
  {
    name: 'Squoosh',
    desc: 'Compressez et convertissez vos images directement dans le navigateur, sans perte de qualité.',
    url: 'https://squoosh.app',
    cats: ['design', 'outils'],
    emoji: '🗜️',
  },
  {
    name: 'GIMP',
    desc: 'Éditeur d\'images open-source et gratuit, alternative puissante à Photoshop.',
    url: 'https://www.gimp.org/',
    cats: ['design'],
    emoji: '🐶',
  },
  {
    name: 'Krita',
    desc: 'Application de peinture numérique open-source, idéale pour l\'illustration et le concept art.',
    url: 'https://krita.org/',
    cats: ['design', 'illustrations'],
    emoji: '🖌️',
  },
  {
    name: 'Inkscape',
    desc: 'Éditeur de graphiques vectoriels open-source, alternative gratuite à Illustrator.',
    url: 'https://inkscape.org/',
    cats: ['design'],
    emoji: '✒️',
  },
  {
    name: 'Lunacy',
    desc: 'Logiciel de design gratuit pour Windows/Mac/Linux, compatible fichiers Figma et Sketch.',
    url: 'https://icons8.com/lunacy',
    cats: ['design'],
    emoji: '🌙',
  },
  {
    name: 'ClipDrop',
    desc: 'Suite d\'outils IA pour retoucher, recadrer et améliorer vos visuels en un clic.',
    url: 'https://clipdrop.co/',
    cats: ['design', 'ia'],
    emoji: '✂️',
    paid: true,
  },

  // ── Sons ──
  {
    name: 'Freesound',
    desc: 'Bibliothèque collaborative de sons et effets sonores libres de droits, par la communauté.',
    url: 'https://freesound.org',
    cats: ['sons'],
    emoji: '🔊',
  },
  {
    name: 'Mixkit',
    desc: 'Sons, effets sonores, musiques et vidéos stock 100% gratuits et libres pour vos créations.',
    url: 'https://mixkit.co',
    cats: ['sons', 'musiques', 'video'],
    emoji: '🎵',
  },
  {
    name: 'ZapSplat',
    desc: 'Plus de 100 000 effets sonores et musiques libres de droits, téléchargements illimités.',
    url: 'https://www.zapsplat.com',
    cats: ['sons'],
    emoji: '⚡',
    paid: true,
  },
  {
    name: 'Free Music Archive',
    desc: 'Archive de musique libre, légale et haute qualité pour projets créatifs.',
    url: 'https://freemusicarchive.org',
    cats: ['sons', 'musiques'],
    emoji: '🎸',
  },
  {
    name: 'SoundJay',
    desc: 'Bibliothèque d\'effets sonores et bruitages gratuits pour projets multimédias.',
    url: 'https://www.soundjay.com/',
    cats: ['sons'],
    emoji: '🔔',
  },
  {
    name: 'Big Sound Bank',
    desc: 'Collection d\'effets sonores organisés par catégorie, téléchargeables gratuitement.',
    url: 'https://bigsoundbank.com/categories.html',
    cats: ['sons'],
    emoji: '🏦',
  },
  {
    name: 'ccMixter',
    desc: 'Communauté de musique sous licence Creative Commons — remix, samples et morceaux complets.',
    url: 'https://ccmixter.org/',
    cats: ['sons', 'musiques'],
    emoji: '🎛️',
  },

  // ── Musiques ──
  {
    name: 'Incompetech',
    desc: 'Bibliothèque de musiques libres de droits composées par Kevin MacLeod, classées par genre.',
    url: 'https://incompetech.com/music/royalty-free/music.html',
    cats: ['musiques'],
    emoji: '🎹',
  },
  {
    name: 'NCS',
    desc: 'NoCopyrightSounds : musiques électroniques gratuites pour créateurs de contenus YouTube.',
    url: 'https://ncs.io/',
    cats: ['musiques'],
    emoji: '⚡',
  },
  {
    name: 'Uppbeat',
    desc: 'Collection de musiques libres de droits avec filtres par ambiance, genre et tempo.',
    url: 'https://uppbeat.io/',
    cats: ['musiques'],
    emoji: '🎚️',
    paid: true,
  },
  {
    name: 'Scott Buckley',
    desc: 'Catalogue de musiques orchestrales et ambiantes composées par Scott Buckley, gratuites.',
    url: 'https://www.scottbuckley.com.au/library/',
    cats: ['musiques'],
    emoji: '🎻',
  },
  {
    name: 'StreamBeats',
    desc: 'Musiques d\'ambiance gratuites pour streamers et créateurs, par Harris Heller.',
    url: 'https://streambeats.com/',
    cats: ['musiques'],
    emoji: '📡',
  },
  {
    name: 'Bensound',
    desc: 'Sélection de pistes musicales gratuites pour projets multimédias sous licence libre.',
    url: 'https://www.bensound.com/free-music-for-videos',
    cats: ['musiques'],
    emoji: '🎧',
    paid: true,
  },
  {
    name: 'Purple Planet',
    desc: 'Musiques libres de droits pour vidéos et podcasts, couvrant de nombreux genres.',
    url: 'https://www.purple-planet.com/',
    cats: ['musiques'],
    emoji: '🪐',
  },
  {
    name: 'Imuno SourceAudio',
    desc: 'Plateforme SourceAudio proposant une sélection de musiques gratuites pour créateurs.',
    url: 'https://imuno.sourceaudio.com/home',
    cats: ['musiques'],
    emoji: '🔊',
  },
  {
    name: 'Freepik Tunes',
    desc: 'Moteur de recherche de musiques et effets sonores gratuits pour projets créatifs.',
    url: 'https://tunes.freepik.com/',
    cats: ['musiques', 'sons'],
    emoji: '🎵',
  },
  {
    name: 'Film Music IO',
    desc: 'Catalogue de musiques Creative Commons pour vidéos YouTube et projets audiovisuels.',
    url: 'https://filmmusic.io/en',
    cats: ['musiques'],
    emoji: '🎬',
  },
  {
    name: 'JCAZ Music',
    desc: 'Section de téléchargements gratuits de pistes musicales originales pour créateurs.',
    url: 'https://jcazmusic.com/free-stuff',
    cats: ['musiques'],
    emoji: '🎸',
  },
  {
    name: 'Free Stock Music',
    desc: 'Bibliothèque de musiques gratuites à utiliser dans vos vidéos et podcasts.',
    url: 'https://www.free-stock-music.com/',
    cats: ['musiques'],
    emoji: '🗂️',
  },
  {
    name: 'Silverman Sound',
    desc: 'Sélection de compositions originales offertes gratuitement pour projets créatifs.',
    url: 'https://www.silvermansound.com/free-music',
    cats: ['musiques'],
    emoji: '🥈',
  },
  {
    name: 'Moby Gratis',
    desc: 'Collection de musiques de Moby offertes gratuitement pour projets à but non commercial.',
    url: 'https://mobygratis.com/',
    cats: ['musiques'],
    emoji: '🐋',
  },

  // ── Mockups ──
  {
    name: 'Mockup World',
    desc: 'La plus grande collection de mockups Photoshop gratuits au monde, tous styles confondus.',
    url: 'https://www.mockupworld.co',
    cats: ['mockups'],
    emoji: '🌍',
    paid: true,
  },
  {
    name: 'GraphicBurger',
    desc: 'Ressources design premium gratuites — mockups, templates, textures et UI kits.',
    url: 'https://graphicburger.com',
    cats: ['mockups', 'textures'],
    emoji: '🍔',
    paid: true,
  },
  {
    name: 'Shots.so',
    desc: 'Créez de magnifiques présentations de vos designs en quelques clics, sans Photoshop.',
    url: 'https://shots.so',
    cats: ['mockups'],
    emoji: '📱',
    paid: true,
  },
  {
    name: 'Media Modifier',
    desc: 'Mockups de devices professionnels pour présenter vos créations de façon convaincante.',
    url: 'https://mediamodifier.com',
    cats: ['mockups'],
    emoji: '🖥️',
    paid: true,
  },
  {
    name: 'Toools.design Mockups',
    desc: 'Sélection de mockups, UI kits et freebies design pour maquettes et présentations.',
    url: 'https://www.toools.design/mockups-ui-kits-and-freebies',
    cats: ['mockups'],
    emoji: '🗂️',
  },
  {
    name: 'Resourceboy Mockups',
    desc: 'Collection organisée de mockups gratuits (appareils, print, packaging) téléchargeables.',
    url: 'https://resourceboy.com/mockups/',
    cats: ['mockups'],
    emoji: '📦',
  },
  {
    name: 'Mr Mockup',
    desc: 'Galerie de mockups gratuits haute résolution pour branding, packaging et plus.',
    url: 'https://mrmockup.com/free-mockups/',
    cats: ['mockups'],
    emoji: '🎁',
    paid: true,
  },
  {
    name: 'Mockuphone',
    desc: 'Mockups de smartphones, tablettes et montres à personnaliser en ligne et télécharger.',
    url: 'https://mockuphone.com/',
    cats: ['mockups'],
    emoji: '📱',
    paid: true,
  },
  {
    name: 'Screely',
    desc: 'Transformez vos captures d\'écran en présentations élégantes et mockups stylisés en ligne.',
    url: 'https://screely.com',
    cats: ['mockups'],
    emoji: '🖼️',
  },

  // ── Jeux Vidéos ──
  {
    name: 'Material Maker',
    desc: 'Éditeur de matériaux procédural et générateur de textures basé sur des nœuds, inspiré de Godot.',
    url: 'https://www.materialmaker.org/',
    cats: ['jeux', 'textures'],
    emoji: '🧱',
  },
  {
    name: 'Godot Shaders',
    desc: 'Bibliothèque en ligne de shaders prêts à l\'emploi pour le moteur de jeu Godot.',
    url: 'https://godotshaders.com/',
    cats: ['jeux'],
    emoji: '✨',
  },
  {
    name: 'Shadertoy',
    desc: 'Plateforme communautaire pour coder et partager des shaders GLSL interactifs en temps réel.',
    url: 'https://www.shadertoy.com/',
    cats: ['jeux', 'web'],
    emoji: '🔮',
  },
  {
    name: 'Tilesetter',
    desc: 'Outil d\'automatisation pour créer et organiser des tilesets pixel art facilement.',
    url: 'https://www.tilesetter.org/',
    cats: ['jeux'],
    emoji: '🗺️',
  },
  {
    name: 'Tilemancer',
    desc: 'Générateur de tilesets procédural pour jeux en pixel art, disponible sur itch.io.',
    url: 'https://led.itch.io/tilemancer',
    cats: ['jeux'],
    emoji: '🧩',
  },
  {
    name: 'LPC Spritesheet Generator',
    desc: 'Générateur de personnages au format LPC avec personnalisation complète des sprites.',
    url: 'https://liberatedpixelcup.github.io/Universal-LPC-Spritesheet-Character-Generator/',
    cats: ['jeux'],
    emoji: '🧍',
  },
  {
    name: 'LibreSprite',
    desc: 'Éditeur de pixel art et d\'animations open-source, fork gratuit d\'Aseprite.',
    url: 'https://libresprite.github.io/',
    cats: ['jeux', 'outils'],
    emoji: '🖼️',
  },
  {
    name: 'Piskel',
    desc: 'Éditeur gratuit de pixel art en ligne, avec export de spritesheets animées.',
    url: 'https://www.piskelapp.com/',
    cats: ['jeux', 'outils'],
    emoji: '🎨',
  },
  {
    name: 'DragonBones',
    desc: 'Suite d\'outils pour créer des animations 2D squelettiques, alternative gratuite à Spine.',
    url: 'https://dragonbones.github.io/en/download.html',
    cats: ['jeux'],
    emoji: '🦴',
  },
  {
    name: 'MagicaVoxel',
    desc: 'Éditeur de voxel 3D léger et gratuit avec rendu en temps réel.',
    url: 'https://ephtracy.github.io/',
    cats: ['jeux', 'outils'],
    emoji: '🧊',
  },
  {
    name: 'Blockbench',
    desc: 'Créateur de modèles 3D low-poly et pixel-art pour Minecraft et jeux similaires.',
    url: 'https://www.blockbench.net/',
    cats: ['jeux', 'outils'],
    emoji: '🟦',
  },
  {
    name: 'Tiled',
    desc: 'Éditeur de cartes par tuiles polyvalent pour le développement de jeux 2D.',
    url: 'https://www.mapeditor.org/',
    cats: ['jeux', 'outils'],
    emoji: '🗾',
  },
  {
    name: 'LDtk',
    desc: 'Level Designer Toolkit : éditeur de niveaux moderne basé sur une grille, gratuit et open-source.',
    url: 'https://ldtk.io/',
    cats: ['jeux', 'outils'],
    emoji: '📐',
  },
  {
    name: 'TrenchBroom',
    desc: 'Éditeur de maps 3D pour jeux basés sur le moteur Quake, intuitif et puissant.',
    url: 'https://trenchbroom.github.io/',
    cats: ['jeux'],
    emoji: '🏗️',
  },
  {
    name: 'OpenGameArt',
    desc: 'Plateforme communautaire de ressources graphiques, sonores et code open-source pour jeux.',
    url: 'https://opengameart.org/',
    cats: ['jeux', 'images', 'sons'],
    emoji: '🎭',
  },
  {
    name: 'Quaternius',
    desc: 'Modèles 3D et pixel art sous licence libre, gratuits pour tous types de projets.',
    url: 'https://quaternius.com/',
    cats: ['jeux'],
    emoji: '🐉',
  },
  {
    name: 'Poly Haven',
    desc: 'Bibliothèque de HDRI, modèles 3D PBR et textures entièrement libres de droits.',
    url: 'https://polyhaven.com/',
    cats: ['jeux', 'textures', 'images'],
    emoji: '🌐',
  },
  {
    name: 'ambientCG',
    desc: 'Collection de textures PBR et matériaux CC0 pour shader et rendu 3D.',
    url: 'https://ambientcg.com/',
    cats: ['jeux', 'textures'],
    emoji: '🪨',
  },
  {
    name: 'Game UI Database',
    desc: 'Base de données collaborative d\'interfaces de jeux vidéo pour s\'inspirer et télécharger des assets UI.',
    url: 'https://www.gameuidatabase.com/',
    cats: ['jeux', 'inspi'],
    emoji: '🖥️',
  },
  {
    name: 'The Spriters Resource',
    desc: 'Archives de sprites rippés depuis des centaines de jeux vidéo, classés par console et titre.',
    url: 'https://www.spriters-resource.com/',
    cats: ['jeux'],
    emoji: '👾',
  },
  {
    name: 'Sketchfab',
    desc: 'Marketplace de modèles 3D dont une large sélection gratuite, visualisables dans le navigateur.',
    url: 'https://sketchfab.com/',
    cats: ['jeux'],
    emoji: '🗿',
    paid: true,
  },
  {
    name: 'Kenney',
    desc: 'Milliers d\'assets de jeux gratuits (sprites, sons, modèles 3D, UI) sous licence CC0.',
    url: 'https://kenney.nl/',
    cats: ['jeux', 'sons', 'images'],
    emoji: '🏆',
  },
  {
    name: 'itch.io — Free Assets',
    desc: 'Section assets gratuits d\'itch.io : sprites, tilesets, sons et polices pour jeux.',
    url: 'https://itch.io/game-assets/free',
    cats: ['jeux'],
    emoji: '🎮',
  },

  // ── Vidéo ──
  {
    name: 'Coverr',
    desc: 'Vidéos de stock gratuites en haute résolution pour sites web et présentations.',
    url: 'https://coverr.co/',
    cats: ['video'],
    emoji: '🎥',
  },
  {
    name: 'Mazwai',
    desc: 'Clips vidéo gratuits de qualité cinématographique par des vidéastes indépendants.',
    url: 'https://mazwai.com/',
    cats: ['video'],
    emoji: '🎞️',
  },

  // ── Textures ──
  {
    name: 'Indieground Freebies',
    desc: 'Sélection de freebies graphiques — illustrations, textures et polices disponibles gratuitement.',
    url: 'https://indieground.net/shop-category/freebies/',
    cats: ['textures', 'illustrations', 'polices'],
    emoji: '🎨',
  },
  {
    name: 'StudioAAA Free',
    desc: 'Ressources gratuites — modèles 3D, textures et icônes à télécharger sans frais.',
    url: 'https://studioaaa.com/product-category/free/',
    cats: ['textures', 'jeux'],
    emoji: '🏛️',
  },
  {
    name: 'BLK Market Free',
    desc: 'Section gratuite de BLK Market — polices, icônes et textures librement téléchargeables.',
    url: 'https://blkmarket.com/product-category/free/',
    cats: ['textures', 'polices', 'icones'],
    emoji: '🖤',
  },
  {
    name: 'Doron Supply Freebies',
    desc: 'Ressources graphiques gratuites filtrées — textures, overlays et assets pour créatifs.',
    url: 'https://www.doronsupply.com/shop/filter-freebies',
    cats: ['textures', 'illustrations'],
    emoji: '🌿',
  },
  {
    name: 'Resourceboy Textures',
    desc: 'Collection de textures gratuites pour design graphique et 3D, classées par thème.',
    url: 'https://resourceboy.com/textures/',
    cats: ['textures'],
    emoji: '🪨',
  },
  {
    name: 'TextureFabrik',
    desc: 'Galerie de textures haute résolution gratuites pour tous types de projets créatifs.',
    url: 'https://texturefabrik.com/gallery/',
    cats: ['textures'],
    emoji: '🧱',
  },

  // ── Brushes ──
  {
    name: 'Resourceboy Brushes',
    desc: 'Collection de brosses gratuites et premium pour Photoshop, classées par style et usage.',
    url: 'https://resourceboy.com/photoshop-brushes/',
    cats: ['brushes'],
    emoji: '🖌️',
    paid: true,
  },
  {
    name: 'Brusheezy',
    desc: 'Des milliers de brosses Photoshop et ressources graphiques gratuites à télécharger.',
    url: 'https://www.brusheezy.com/',
    cats: ['brushes'],
    emoji: '🎨',
    paid: true,
  },

  // ── PNG ──
  {
    name: 'PNGWing',
    desc: 'Bibliothèque de fichiers PNG à fond transparent gratuits, classés par thème.',
    url: 'https://www.pngwing.com',
    cats: ['png'],
    emoji: '🖼️',
  },
  {
    name: 'ImgBin',
    desc: 'Collection de PNGs HD à fond transparent pour tous types de projets créatifs.',
    url: 'https://imgbin.com/',
    cats: ['png'],
    emoji: '🔳',
  },
  {
    name: 'StickPNG',
    desc: 'Milliers de PNG transparents sans fond, organisés par catégorie et téléchargeables gratuitement.',
    url: 'https://www.stickpng.com/',
    cats: ['png'],
    emoji: '🖼️',
  },

  // ── Outils IA ──
  {
    name: 'Lummi',
    desc: 'Générateur d\'images par IA avec une large variété de styles visuels.',
    url: 'https://www.lummi.ai/',
    cats: ['ia'],
    emoji: '✨',
  },
  {
    name: 'ArtBot',
    desc: 'Outil IA pour créer des illustrations originales à partir de descriptions textuelles.',
    url: 'https://tinybots.net/artbot/create',
    cats: ['ia'],
    emoji: '🤖',
  },
  {
    name: 'Leonardo.ai',
    desc: 'Générateur d\'images IA de haute qualité, idéal pour le concept art et les assets de jeux.',
    url: 'https://leonardo.ai/',
    cats: ['ia'],
    emoji: '🦁',
    paid: true,
  },
  {
    name: 'Ideogram',
    desc: 'Générateur d\'images IA avec une gestion remarquable du texte dans les visuels.',
    url: 'https://ideogram.ai/',
    cats: ['ia'],
    emoji: '💬',
  },
  {
    name: 'Adobe Firefly',
    desc: 'Outils de génération d\'images et d\'effets IA par Adobe, intégrés à Creative Cloud.',
    url: 'https://firefly.adobe.com/',
    cats: ['ia', 'design'],
    emoji: '🔥',
    paid: true,
  },
  {
    name: 'Krea.ai',
    desc: 'Générateur d\'images IA en temps réel avec contrôle avancé du style et de la composition.',
    url: 'https://www.krea.ai/',
    cats: ['ia'],
    emoji: '🎨',
    paid: true,
  },
  {
    name: 'Playground AI',
    desc: 'Plateforme de génération d\'images IA gratuite avec de nombreux modèles disponibles.',
    url: 'https://playground.com/',
    cats: ['ia'],
    emoji: '🛝',
    paid: true,
  },

  // ── Outils ──
  {
    name: 'Space Type Generator',
    desc: 'Générateur en ligne de compositions typographiques spatiales et cinétiques.',
    url: 'https://spacetypegenerator.com/',
    cats: ['outils', 'polices'],
    emoji: '🌌',
  },
  {
    name: 'Pixelator',
    desc: 'Application de conversion d\'images en pixel art, simplement et rapidement.',
    url: 'http://pixelatorapp.com/',
    cats: ['outils', 'jeux'],
    emoji: '👾',
  },
  {
    name: 'Atomiser',
    desc: 'Outil de création d\'effets burned out et grunge sur vos images.',
    url: 'https://www.atomiser.fr/',
    cats: ['outils'],
    emoji: '🔥',
  },
  {
    name: 'Inclusive Colors',
    desc: 'Simulateur de vision des couleurs pour vérifier l\'accessibilité de vos palettes.',
    url: 'https://www.inclusivecolors.com/',
    cats: ['outils', 'couleurs'],
    emoji: '♿',
  },
  {
    name: 'Vectorpea',
    desc: 'Éditeur de graphiques vectoriels en ligne gratuit, alternative à Illustrator.',
    url: 'https://www.vectorpea.com/',
    cats: ['outils', 'design'],
    emoji: '✒️',
  },
  {
    name: 'Wordmark.it',
    desc: 'Visualisez rapidement votre texte dans toutes les polices installées sur votre système.',
    url: 'https://wordmark.it/',
    cats: ['outils', 'polices'],
    emoji: '🔤',
  },
  {
    name: 'WhatTheFont',
    desc: 'Service d\'identification de polices à partir d\'une image, par MyFonts.',
    url: 'https://www.myfonts.com/fr/pages/whatthefont',
    cats: ['outils', 'polices'],
    emoji: '🔍',
  },
  {
    name: 'Metatags.io',
    desc: 'Générateur et éditeur de balises meta pour optimiser le partage sur les réseaux sociaux.',
    url: 'https://metatags.io/',
    cats: ['outils', 'web'],
    emoji: '🏷️',
  },
  {
    name: 'FontBrief',
    desc: 'Plateforme pour organiser, tester et partager des projets de typographie en équipe.',
    url: 'http://fontbrief.com/fontbrief',
    cats: ['outils', 'polices'],
    emoji: '📋',
  },
  {
    name: 'Tooooools',
    desc: 'Suite d\'outils créatifs en ligne pour designers — couleurs, typographie, icônes et plus.',
    url: 'https://www.tooooools.app/',
    cats: ['outils'],
    emoji: '🧰',
  },
  {
    name: 'Type Tools',
    desc: 'Collection d\'utilitaires en ligne pour la gestion et l\'inspection de polices.',
    url: 'https://www.type-tools.com/',
    cats: ['outils', 'polices'],
    emoji: '🔧',
  },

  // ── Web / CSS ──
  {
    name: 'CSS Gradient',
    desc: 'Générateur de dégradés CSS visuel avec prévisualisation en temps réel et copie du code.',
    url: 'https://cssgradient.io/',
    cats: ['web', 'couleurs'],
    emoji: '🌈',
  },
  {
    name: 'Haikei',
    desc: 'Générateur de fonds SVG organiques — vagues, blobs, grilles et formes personnalisables.',
    url: 'https://haikei.app/',
    cats: ['web'],
    emoji: '🌊',
  },
  {
    name: 'Animista',
    desc: 'Bibliothèque d\'animations CSS prêtes à l\'emploi, prévisualisables et personnalisables.',
    url: 'https://animista.net/',
    cats: ['web'],
    emoji: '💫',
  },
  {
    name: 'Hero Patterns',
    desc: 'Collection de motifs SVG répétables et personnalisables pour fonds de pages web.',
    url: 'https://heropatterns.com/',
    cats: ['web', 'textures'],
    emoji: '✦',
  },
  {
    name: 'Neumorphism.io',
    desc: 'Générateur de styles CSS neumorphiques pour créer des interfaces douces et modernes.',
    url: 'https://neumorphism.io/',
    cats: ['web'],
    emoji: '⬜',
  },
  {
    name: 'CSS Loaders',
    desc: 'Collection de loaders et spinners CSS purs, copiables en un clic pour vos projets.',
    url: 'https://css-loaders.com/',
    cats: ['web'],
    emoji: '⏳',
  },
  {
    name: 'Patternpad',
    desc: 'Créez des motifs géométriques infinis personnalisables, exportables en SVG ou PNG.',
    url: 'https://patternpad.com/',
    cats: ['web', 'textures'],
    emoji: '🔲',
  },
  {
    name: 'Can I Use',
    desc: 'Référence de compatibilité des fonctionnalités HTML, CSS et JS selon les navigateurs.',
    url: 'https://caniuse.com/',
    cats: ['web'],
    emoji: '✅',
  },

  // ── Tutos ──
  {
    name: 'Saint11 — Pixel Art Tutorials',
    desc: 'Tutoriels pas-à-pas pour apprendre et perfectionner vos techniques de pixel art.',
    url: 'https://saint11.art/blog/pixel-art-tutorials/',
    cats: ['tutos', 'jeux'],
    emoji: '🎓',
  },
  {
    name: 'The Futur',
    desc: 'Ressources éducatives gratuites sur le design, le branding et la direction artistique.',
    url: 'https://www.thefutur.com/free-resources',
    cats: ['tutos', 'inspi'],
    emoji: '🔭',
  },
  {
    name: 'Sharpen Design',
    desc: 'Générateur de challenges de design pour pratiquer et améliorer vos compétences.',
    url: 'https://sharpen.design/',
    cats: ['tutos'],
    emoji: '⚔️',
  },

  // ── Inspiration ──
  {
    name: 'Cosmos',
    desc: 'Galerie d\'inspiration pour interfaces web, avec sélection de sites et composants UI modernes.',
    url: 'https://www.cosmos.so/discover',
    cats: ['inspi'],
    emoji: '🌌',
  },
  {
    name: 'Same Energy',
    desc: 'Moteur de recherche visuel par similarité d\'ambiance pour trouver des images inspirantes.',
    url: 'https://same.energy/',
    cats: ['inspi'],
    emoji: '✨',
  },
  {
    name: 'Abduzeedo',
    desc: 'Blog de design graphique et digital proposant tutoriels, articles et sources d\'inspiration.',
    url: 'https://abduzeedo.com/',
    cats: ['inspi', 'tutos'],
    emoji: '📰',
  },
  {
    name: 'Lapa Ninja',
    desc: 'Collection organisée de landing pages créatives pour puiser des idées de mise en page.',
    url: 'https://www.lapa.ninja/',
    cats: ['inspi'],
    emoji: '🥷',
  },
  {
    name: 'Savee',
    desc: 'Plateforme de bookmarking visuel pour enregistrer et partager des références graphiques.',
    url: 'https://savee.it/',
    cats: ['inspi'],
    emoji: '📌',
  },
  {
    name: 'ArtStation',
    desc: 'Réseau social professionnel où les artistes 2D/3D exposent leurs portfolios et projets.',
    url: 'https://www.artstation.com/',
    cats: ['inspi'],
    emoji: '🎨',
  },
  {
    name: 'Identity Designed',
    desc: 'Cas d\'étude sur le branding et l\'identité visuelle de marques prestigieuses du monde entier.',
    url: 'https://identitydesigned.com/',
    cats: ['inspi'],
    emoji: '🏷️',
  },
  {
    name: 'Behance',
    desc: 'Plateforme Adobe pour découvrir et partager des projets créatifs dans tous les domaines du design.',
    url: 'https://www.behance.net/',
    cats: ['inspi'],
    emoji: '🅱️',
  },
  {
    name: 'Dribbble',
    desc: 'Communauté de designers partageant leurs créations UI, branding et illustration.',
    url: 'https://dribbble.com/',
    cats: ['inspi'],
    emoji: '🏀',
  },
  {
    name: 'Awwwards',
    desc: 'Prix et galerie des meilleurs sites web mondiaux en design, créativité et innovation.',
    url: 'https://www.awwwards.com/',
    cats: ['inspi'],
    emoji: '🏆',
  },
  {
    name: 'Mobbin',
    desc: 'Bibliothèque de patterns et flows UI/UX réels issus des meilleures apps mobiles et web.',
    url: 'https://mobbin.com/',
    cats: ['inspi'],
    emoji: '📱',
    paid: true,
  },
  {
    name: 'Godly',
    desc: 'Sélection des sites web les plus créatifs et innovants du moment.',
    url: 'https://godly.website/',
    cats: ['inspi'],
    emoji: '⚡',
  },
  {
    name: 'Land-book',
    desc: 'Galerie de landing pages inspirantes pour designers et marketeurs.',
    url: 'https://land-book.com/',
    cats: ['inspi'],
    emoji: '📖',
  },
  {
    name: 'Collect UI',
    desc: 'Collection quotidienne de composants UI inspirants tirés de Dribbble.',
    url: 'https://collectui.com/',
    cats: ['inspi'],
    emoji: '🗂️',
  },
  {
    name: 'SiteInspire',
    desc: 'Galerie de sites web soigneusement sélectionnés pour leur design remarquable.',
    url: 'https://www.siteinspire.com/',
    cats: ['inspi'],
    emoji: '✦',
  },
];

// ── State ──
let currentCat = 'all';
let searchQuery = '';

// ── Render categories ──
function renderCategories() {
  const container = document.getElementById('categories');

  const allBtn = document.createElement('button');
  allBtn.className = 'cat-btn active';
  allBtn.dataset.cat = 'all';
  allBtn.textContent = 'Tout';
  allBtn.addEventListener('click', () => selectCategory('all', allBtn));
  container.appendChild(allBtn);

  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'cat-btn';
    btn.dataset.cat = cat.id;
    btn.textContent = cat.label;
    btn.addEventListener('click', () => selectCategory(cat.id, btn));
    container.appendChild(btn);
  });
}

function selectCategory(id, btn) {
  currentCat = id;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  render();
}

// ── Filtering ──
function getFiltered() {
  const q = searchQuery.toLowerCase();
  return resources.filter(r => {
    const matchCat = currentCat === 'all' || r.cats.includes(currentCat);
    const matchSearch = !q || r.name.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });
}

// ── Render cards ──
function render() {
  const filtered = getFiltered();
  const grid = document.getElementById('grid');
  const empty = document.getElementById('empty');
  const count = document.getElementById('count');

  grid.innerHTML = '';

  if (filtered.length === 0) {
    empty.style.display = 'block';
    count.textContent = '';
    return;
  }

  empty.style.display = 'none';
  count.textContent = `${filtered.length} ressource${filtered.length > 1 ? 's' : ''}`;

  filtered.forEach((r, i) => {
    const card = document.createElement('a');
    card.href = r.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.className = 'card';
    card.style.animationDelay = `${i * 20}ms`;

    const primaryCat = categories.find(c => c.id === r.cats[0]);
    const tagsHTML = r.cats.map(catId => {
      const cat = categories.find(c => c.id === catId);
      return `<span class="card-tag" style="color:${cat.color};background:${cat.color}1a">${cat.label}</span>`;
    }).join('');

    card.innerHTML = `
      <div class="card-top">
        <span class="card-emoji">${r.emoji}</span>
        <div class="card-tags">${tagsHTML}</div>
      </div>
      <div class="card-name">${r.name}</div>
      <div class="card-desc">${r.desc}</div>
      <div class="card-footer">
        <span class="card-visit">Visiter →</span>
        ${r.paid ? '<span class="card-warning">Peut contenir des ressources payantes</span>' : ''}
      </div>
    `;

    grid.appendChild(card);
  });
}

// ── Search ──
document.getElementById('search').addEventListener('input', e => {
  searchQuery = e.target.value.trim();
  render();
});

// ── Init ──
renderCategories();
render();
