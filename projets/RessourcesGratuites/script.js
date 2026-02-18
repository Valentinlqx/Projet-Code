const categories = [
  { id: 'images',        label: '🖼️ Images',        color: '#3ecfcf' },
  { id: 'polices',       label: '🔤 Polices',        color: '#6c63ff' },
  { id: 'icones',        label: '✦ Icônes',          color: '#ff6b6b' },
  { id: 'illustrations', label: '✏️ Illustrations',  color: '#ffd93d' },
  { id: 'couleurs',      label: '🎨 Couleurs',        color: '#ff9f43' },
  { id: 'design',        label: '⚡ Design',          color: '#48dbfb' },
  { id: 'sons',          label: '🎵 Sons',            color: '#ff6b81' },
  { id: 'mockups',       label: '📦 Mockups',         color: '#a29bfe' },
  { id: 'jeux',         label: '🎮 Jeux Vidéos',     color: '#78e08f' },
  { id: 'web',          label: '🌐 Web',             color: '#fd9644' },
  { id: 'video',        label: '🎬 Vidéo',           color: '#e17055' },
  { id: 'textures',     label: '🪨 Textures',         color: '#b8860b' },
  { id: 'brushes',      label: '🖌️ Brushes',          color: '#c0392b' },
  { id: 'png',          label: '🔳 PNG',              color: '#7f8c8d' },
  { id: 'ia',           label: '🤖 Outils IA',        color: '#8e44ad' },
  { id: 'outils',       label: '🛠️ Outils',           color: '#00b894' },
  { id: 'musiques',     label: '🎼 Musiques',          color: '#6ab04c' },
  { id: 'tutos',        label: '📖 Tutos',             color: '#fdcb6e' },
  { id: 'inspi',        label: '💡 Inspiration',       color: '#fd79a8' },
];

const resources = [
  // ── Images ──
  {
    name: 'Unsplash',
    desc: 'Photos haute résolution gratuites et libres de droits, contributées par une communauté mondiale.',
    url: 'https://unsplash.com',
    cat: 'images',
    emoji: '🌄',
  },
  {
    name: 'Pexels',
    desc: 'Photos et vidéos gratuites par une communauté de créateurs talentueux.',
    url: 'https://pexels.com',
    cat: 'images',
    emoji: '📷',
  },
  {
    name: 'Pixabay',
    desc: 'Plus d\'un million d\'images, vidéos et musiques libres de droits.',
    url: 'https://pixabay.com',
    cat: 'images',
    emoji: '🖼️',
  },
  {
    name: 'StockSnap',
    desc: 'Des centaines de nouvelles photos libres de droits ajoutées chaque semaine.',
    url: 'https://stocksnap.io',
    cat: 'images',
    emoji: '📸',
  },
  {
    name: 'Burst',
    desc: 'Photos gratuites pour créateurs et entrepreneurs, par Shopify.',
    url: 'https://burst.shopify.com',
    cat: 'images',
    emoji: '⚡',
  },
  {
    name: 'Life of Pix',
    desc: 'Photos haute résolution libres de droits pour usage personnel et commercial.',
    url: 'https://www.lifeofpix.com',
    cat: 'images',
    emoji: '🌿',
  },

  {
    name: 'Nappy',
    desc: 'Photographies authentiques et diverses de personnes de couleur, gratuites pour usage commercial.',
    url: 'https://nappy.co/',
    cat: 'images',
    emoji: '🤎',
  },
  {
    name: 'Rawpixel Public Domain',
    desc: 'Images et illustrations du domaine public à télécharger librement pour tout usage.',
    url: 'https://www.rawpixel.com/public-domain',
    cat: 'images',
    emoji: '🏛️',
  },
  {
    name: 'Public.work',
    desc: 'Collection d\'images sous licence CC0 pour projets créatifs, recherchables facilement.',
    url: 'https://public.work/',
    cat: 'images',
    emoji: '🔍',
  },
  {
    name: 'Freepik',
    desc: 'Vecteurs, photos, illustrations et PSD gratuits pour tous types de projets créatifs.',
    url: 'https://www.freepik.com/',
    cat: 'images',
    emoji: '🎯',
  },
  {
    name: 'Toools Stock Photos',
    desc: 'Liste d\'agrégateurs de sites de photos et vidéos libres de droits sélectionnés.',
    url: 'https://www.toools.design/free-stock-photo-and-video-websites',
    cat: 'images',
    emoji: '📋',
  },

  // ── Polices ──
  {
    name: 'Google Fonts',
    desc: 'Bibliothèque de plus de 1400 polices open-source, directement intégrables en CSS.',
    url: 'https://fonts.google.com',
    cat: 'polices',
    emoji: '🔡',
  },
  {
    name: 'Font Squirrel',
    desc: 'Polices libres de droits sélectionnées à la main, toutes utilisables commercialement.',
    url: 'https://www.fontsquirrel.com',
    cat: 'polices',
    emoji: '🐿️',
  },
  {
    name: 'DaFont',
    desc: 'Des milliers de polices gratuites organisées par style et catégorie.',
    url: 'https://www.dafont.com/fr/',
    cat: 'polices',
    emoji: '✒️',
  },
  {
    name: 'Fontesk',
    desc: 'Polices gratuites soigneusement sélectionnées pour usage personnel et commercial.',
    url: 'https://fontesk.com',
    cat: 'polices',
    emoji: '✍️',
  },
  {
    name: '1001 Fonts',
    desc: 'Large collection de polices gratuites pour tous les projets créatifs.',
    url: 'https://www.1001fonts.com',
    cat: 'polices',
    emoji: '📝',
  },

  {
    name: 'Free Faces',
    desc: 'Galerie de polices gratuites et open-source avec aperçus dynamiques et téléchargement direct.',
    url: 'https://www.freefaces.gallery/',
    cat: 'polices',
    emoji: '🖼️',
  },
  {
    name: 'Fontshare',
    desc: 'Bibliothèque collaborative de polices gratuites pour projets personnels et commerciaux.',
    url: 'https://www.fontshare.com/',
    cat: 'polices',
    emoji: '🤝',
  },
  {
    name: 'Dirtyline Studio',
    desc: 'Collection de polices originales et créatives proposées par Dirtyline Studio.',
    url: 'https://dirtylinestudio.com/',
    cat: 'polices',
    emoji: '🖊️',
  },
  {
    name: 'Velvetyne',
    desc: 'Fonderie en ligne offrant des polices libres et expérimentales sous Open Font License.',
    url: 'https://velvetyne.fr/',
    cat: 'polices',
    emoji: '🧪',
  },
  {
    name: 'Open Foundry',
    desc: 'Plateforme de polices open-source sélectionnées pour leur qualité et leur diversité.',
    url: 'https://open-foundry.com/fonts',
    cat: 'polices',
    emoji: '🔓',
  },
  {
    name: 'Toools Font Library',
    desc: 'Bibliothèque de ressources et d\'inspirations typographiques pour designers.',
    url: 'https://www.toools.design/font-library-and-inspiration',
    cat: 'polices',
    emoji: '📚',
  },
  {
    name: 'BeFonts',
    desc: 'Annuaire de polices gratuites classées par style et popularité, téléchargement libre.',
    url: 'https://befonts.com/',
    cat: 'polices',
    emoji: '🅱️',
  },
  {
    name: 'FontJoy',
    desc: 'Outil IA d\'aide à la création de paires de polices harmonieuses en un clic.',
    url: 'https://fontjoy.com/',
    cat: 'polices',
    emoji: '🎯',
  },
  {
    name: 'Pangram Pangram',
    desc: 'Sélection de polices modernes et stylisées avec aperçus en contexte réel.',
    url: 'https://pangrampangram.com/',
    cat: 'polices',
    emoji: '✦',
  },
  {
    name: 'Unblast Fonts',
    desc: 'Collection de polices gratuites de qualité professionnelle pour tout usage créatif.',
    url: 'https://unblast.com/fonts/',
    cat: 'polices',
    emoji: '💥',
  },
  {
    name: 'Resourceboy Fonts',
    desc: 'Vaste section de polices gratuites au sein de la plateforme de ressources graphiques Resourceboy.',
    url: 'https://resourceboy.com/fonts/',
    cat: 'polices',
    emoji: '📦',
  },
  {
    name: 'Fonts In Use',
    desc: 'Base de données de polices identifiées dans le design et la publicité, avec études de cas.',
    url: 'https://fontsinuse.com/',
    cat: 'polices',
    emoji: '🔍',
  },
  {
    name: 'Text Studio',
    desc: 'Outils en ligne pour tester, combiner et affiner des polices dans vos projets.',
    url: 'https://www.textstudio.com/',
    cat: 'polices',
    emoji: '🎨',
  },

  // ── Icônes ──
  {
    name: 'Heroicons',
    desc: 'Icônes SVG open-source magnifiques créées par l\'équipe de Tailwind CSS.',
    url: 'https://heroicons.com',
    cat: 'icones',
    emoji: '⚡',
  },
  {
    name: 'Lucide',
    desc: 'Collection d\'icônes open-source cohérente et élégante, fork de Feather Icons.',
    url: 'https://lucide.dev',
    cat: 'icones',
    emoji: '🌟',
  },
  {
    name: 'Flaticon',
    desc: 'La plus grande base de données d\'icônes vectorielles gratuites — des millions d\'icônes.',
    url: 'https://www.flaticon.com',
    cat: 'icones',
    emoji: '🎯',
  },
  {
    name: 'Icons8',
    desc: 'Icônes, illustrations, photos et musique réunis dans un seul endroit.',
    url: 'https://icons8.com',
    cat: 'icones',
    emoji: '🎨',
  },
  {
    name: 'SVG Repo',
    desc: 'Collection massive de plus de 500 000 icônes SVG gratuites et open-source.',
    url: 'https://www.svgrepo.com',
    cat: 'icones',
    emoji: '🔷',
  },
  {
    name: 'Tabler Icons',
    desc: 'Plus de 4000 icônes SVG pixel-perfect, open-source et entièrement personnalisables.',
    url: 'https://tabler-icons.io',
    cat: 'icones',
    emoji: '📐',
  },
  {
    name: 'Phosphor Icons',
    desc: 'Famille d\'icônes flexible avec 6 styles différents pour chaque icône.',
    url: 'https://phosphoricons.com',
    cat: 'icones',
    emoji: '🧪',
  },

  {
    name: 'Toools Icon Libraries',
    desc: 'Sélection de bibliothèques d\'icônes open-source gratuites à télécharger, triées et commentées.',
    url: 'https://www.toools.design/free-open-source-icon-libraries',
    cat: 'icones',
    emoji: '📚',
  },
  {
    name: 'The Noun Project',
    desc: 'Plateforme communautaire de millions d\'icônes et pictogrammes pour tous usages.',
    url: 'https://thenounproject.com/',
    cat: 'icones',
    emoji: '🔠',
  },
  {
    name: 'Ionicons',
    desc: 'Ensemble d\'icônes vectorielles pour applications mobiles et web, maintenu par Ionic.',
    url: 'https://ionic.io/ionicons',
    cat: 'icones',
    emoji: '⚡',
  },
  {
    name: 'Simple Icons',
    desc: 'Icônes SVG de marques et logos populaires, libres pour tout usage web.',
    url: 'https://simpleicons.org/',
    cat: 'icones',
    emoji: '🏷️',
  },
  {
    name: 'Iconify',
    desc: 'Plateforme unifiant des dizaines de sets d\'icônes open-source, utilisable en CSS ou JS.',
    url: 'https://icon-sets.iconify.design',
    cat: 'icones',
    emoji: '🔗',
  },
  {
    name: 'Iconduck',
    desc: 'Annuaire d\'icônes gratuites avec recherche par style et filtre par licence.',
    url: 'https://iconduck.com/',
    cat: 'icones',
    emoji: '🦆',
  },
  {
    name: 'Glyphter',
    desc: 'Créez vos propres fontes d\'icônes personnalisées à partir de SVGs importés.',
    url: 'https://www.glyphter.com/',
    cat: 'icones',
    emoji: '✏️',
  },

  // ── Illustrations ──
  {
    name: 'unDraw',
    desc: 'Illustrations SVG open-source personnalisables en couleur pour tous vos projets.',
    url: 'https://undraw.co',
    cat: 'illustrations',
    emoji: '🎨',
  },
  {
    name: 'Storyset',
    desc: 'Illustrations animées gratuites et personnalisables pour sites web et applications.',
    url: 'https://storyset.com',
    cat: 'illustrations',
    emoji: '📖',
  },
  {
    name: 'Open Doodles',
    desc: 'Croquis et doodles libres de droits dans un style minimaliste et moderne.',
    url: 'https://opendoodles.com',
    cat: 'illustrations',
    emoji: '✏️',
  },
  {
    name: 'Blush',
    desc: 'Illustrations personnalisables créées par des artistes indépendants du monde entier.',
    url: 'https://blush.design',
    cat: 'illustrations',
    emoji: '🌸',
  },
  {
    name: 'Humaaans',
    desc: 'Mix-and-match illustrations de personnes entièrement modulables, par Pablo Stanley.',
    url: 'https://www.humaaans.com',
    cat: 'illustrations',
    emoji: '👥',
  },
  {
    name: 'DrawKit',
    desc: 'Illustrations vectorielles gratuites pour designers et startups.',
    url: 'https://www.drawkit.com',
    cat: 'illustrations',
    emoji: '🖌️',
  },

  {
    name: 'Icons8 Mega Creator',
    desc: 'Outil web pour créer des scènes personnalisées avec des illustrations modulaires et des icônes.',
    url: 'https://icons8.com/mega-creator',
    cat: 'illustrations',
    emoji: '🎭',
  },
  {
    name: 'Open Peeps',
    desc: 'Pack de personnages dessinés à la main et entièrement modifiables, par Pablo Stanley.',
    url: 'https://openpeeps.com/',
    cat: 'illustrations',
    emoji: '🙋',
  },
  {
    name: 'Storytale',
    desc: 'Générateur d\'illustrations scénarisées pour narrations digitales et présentations.',
    url: 'https://storytale.io/',
    cat: 'illustrations',
    emoji: '📚',
  },
  {
    name: 'Reshot',
    desc: 'Banque d\'icônes et de photos gratuites soigneusement sélectionnées pour projets variés.',
    url: 'https://www.reshot.com/',
    cat: 'illustrations',
    emoji: '📷',
  },
  {
    name: 'Absurd Design',
    desc: 'Illustrations absurdes et artistiques pour rendre vos designs uniques et mémorables.',
    url: 'https://absurd.design/',
    cat: 'illustrations',
    emoji: '🌀',
  },
  {
    name: 'Lukasz Adam',
    desc: 'Série d\'illustrations minimalistes et abstraites gratuites créées par Lukasz Adam.',
    url: 'https://lukaszadam.com/illustrations',
    cat: 'illustrations',
    emoji: '◻️',
  },
  {
    name: 'Internet Archive Book Images',
    desc: 'Collection d\'images d\'archives libres de droits issues de livres anciens numérisés.',
    url: 'https://www.flickr.com/photos/internetarchivebookimages/',
    cat: 'illustrations',
    emoji: '📖',
  },

  // ── Couleurs ──
  {
    name: 'Coolors',
    desc: 'Générateur de palettes ultra-rapide — appuyez sur espace pour générer une nouvelle palette.',
    url: 'https://coolors.co',
    cat: 'couleurs',
    emoji: '🎨',
  },
  {
    name: 'Adobe Color',
    desc: 'Créez, explorez et partagez des palettes basées sur les règles de théorie des couleurs.',
    url: 'https://color.adobe.com',
    cat: 'couleurs',
    emoji: '🌈',
  },
  {
    name: 'Color Hunt',
    desc: 'Palettes de couleurs tendance sélectionnées par une communauté de créateurs.',
    url: 'https://colorhunt.co',
    cat: 'couleurs',
    emoji: '🎯',
  },
  {
    name: 'Realtime Colors',
    desc: 'Visualisez votre palette de couleurs sur un vrai site web, en temps réel.',
    url: 'https://www.realtimecolors.com',
    cat: 'couleurs',
    emoji: '⚡',
  },
  {
    name: 'UI Colors',
    desc: 'Générez des échelles de teintes Tailwind-ready depuis n\'importe quelle couleur de base.',
    url: 'https://uicolors.app',
    cat: 'couleurs',
    emoji: '🔢',
  },

  {
    name: 'Resourceboy Gradients',
    desc: 'Collection de dégradés gratuits à importer facilement dans Photoshop.',
    url: 'https://resourceboy.com/photoshop-gradients/',
    cat: 'couleurs',
    emoji: '🎨',
  },
  {
    name: 'Gradient Hunt',
    desc: 'Bibliothèque interactive de dégradés CSS prêts à l\'emploi, copiables en un clic.',
    url: 'https://gradienthunt.com/',
    cat: 'couleurs',
    emoji: '🌈',
  },

  // ── Design ──
  {
    name: 'Figma',
    desc: 'Outil de design collaboratif dans le navigateur, avec un plan gratuit très généreux.',
    url: 'https://figma.com',
    cat: 'design',
    emoji: '✦',
  },
  {
    name: 'Penpot',
    desc: 'Alternative open-source à Figma, 100% gratuite et auto-hébergeable.',
    url: 'https://penpot.app',
    cat: 'design',
    emoji: '🐾',
  },
  {
    name: 'Canva',
    desc: 'Créez des designs professionnels en quelques minutes avec des centaines de modèles gratuits.',
    url: 'https://canva.com',
    cat: 'design',
    emoji: '🖼️',
  },
  {
    name: 'Photopea',
    desc: 'Éditeur photo avancé dans le navigateur, compatible Photoshop — totalement gratuit.',
    url: 'https://www.photopea.com',
    cat: 'design',
    emoji: '🖊️',
  },
  {
    name: 'Remove.bg',
    desc: 'Supprimez automatiquement l\'arrière-plan de n\'importe quelle photo en quelques secondes.',
    url: 'https://www.remove.bg',
    cat: 'design',
    emoji: '✂️',
  },
  {
    name: 'Squoosh',
    desc: 'Compressez et convertissez vos images directement dans le navigateur, sans perte de qualité.',
    url: 'https://squoosh.app',
    cat: 'design',
    emoji: '🗜️',
  },

  // ── Sons ──
  {
    name: 'Freesound',
    desc: 'Bibliothèque collaborative de sons et effets sonores libres de droits, par la communauté.',
    url: 'https://freesound.org',
    cat: 'sons',
    emoji: '🔊',
  },
  {
    name: 'Mixkit',
    desc: 'Sons, effets sonores, musiques et vidéos 100% gratuits et libres pour vos créations.',
    url: 'https://mixkit.co',
    cat: 'sons',
    emoji: '🎵',
  },
  {
    name: 'Pixabay Audio',
    desc: 'Musique de fond et effets sonores gratuits et libres de droits pour créateurs.',
    url: 'https://pixabay.com/music/',
    cat: 'sons',
    emoji: '🎶',
  },
  {
    name: 'ZapSplat',
    desc: 'Plus de 100 000 effets sonores et musiques libres de droits, téléchargements illimités.',
    url: 'https://www.zapsplat.com',
    cat: 'sons',
    emoji: '⚡',
  },
  {
    name: 'Free Music Archive',
    desc: 'Archive de musique libre, légale et haute qualité pour projets créatifs.',
    url: 'https://freemusicarchive.org',
    cat: 'sons',
    emoji: '🎸',
  },

  {
    name: 'SoundJay',
    desc: 'Bibliothèque d\'effets sonores et bruitages gratuits pour projets multimédias.',
    url: 'https://www.soundjay.com/',
    cat: 'sons',
    emoji: '🔔',
  },
  {
    name: 'Big Sound Bank',
    desc: 'Collection d\'effets sonores organisés par catégorie, téléchargeables gratuitement.',
    url: 'https://bigsoundbank.com/categories.html',
    cat: 'sons',
    emoji: '🏦',
  },

  // ── Musiques ──
  {
    name: 'Incompetech',
    desc: 'Bibliothèque de musiques libres de droits composées par Kevin MacLeod, classées par genre.',
    url: 'https://incompetech.com/music/royalty-free/music.html',
    cat: 'musiques',
    emoji: '🎹',
  },
  {
    name: 'NCS',
    desc: 'NoCopyrightSounds : musiques électroniques gratuites pour créateurs de contenus YouTube.',
    url: 'https://ncs.io/',
    cat: 'musiques',
    emoji: '⚡',
  },
  {
    name: 'Uppbeat',
    desc: 'Collection de musiques libres de droits avec filtres par ambiance, genre et tempo.',
    url: 'https://uppbeat.io/',
    cat: 'musiques',
    emoji: '🎚️',
  },
  {
    name: 'Scott Buckley',
    desc: 'Catalogue de musiques orchestrales et ambiantes composées par Scott Buckley, gratuites.',
    url: 'https://www.scottbuckley.com.au/library/',
    cat: 'musiques',
    emoji: '🎻',
  },
  {
    name: 'StreamBeats',
    desc: 'Musiques d\'ambiance gratuites pour streamers et créateurs, par Harris Heller.',
    url: 'https://streambeats.com/',
    cat: 'musiques',
    emoji: '📡',
  },
  {
    name: 'Bensound',
    desc: 'Sélection de pistes musicales gratuites pour projets multimédias sous licence libre.',
    url: 'https://www.bensound.com/free-music-for-videos',
    cat: 'musiques',
    emoji: '🎧',
  },
  {
    name: 'Purple Planet',
    desc: 'Musiques libres de droits pour vidéos et podcasts, couvrant de nombreux genres.',
    url: 'https://www.purple-planet.com/',
    cat: 'musiques',
    emoji: '🪐',
  },
  {
    name: 'Imuno SourceAudio',
    desc: 'Plateforme SourceAudio proposant une sélection de musiques gratuites pour créateurs.',
    url: 'https://imuno.sourceaudio.com/home',
    cat: 'musiques',
    emoji: '🔊',
  },
  {
    name: 'Freepik Tunes',
    desc: 'Moteur de recherche de musiques et effets sonores gratuits pour projets créatifs.',
    url: 'https://tunes.freepik.com/',
    cat: 'musiques',
    emoji: '🎵',
  },
  {
    name: 'Film Music IO',
    desc: 'Catalogue de musiques Creative Commons pour vidéos YouTube et projets audiovisuels.',
    url: 'https://filmmusic.io/en',
    cat: 'musiques',
    emoji: '🎬',
  },
  {
    name: 'JCAZ Music',
    desc: 'Section de téléchargements gratuits de pistes musicales originales pour créateurs.',
    url: 'https://jcazmusic.com/free-stuff',
    cat: 'musiques',
    emoji: '🎸',
  },
  {
    name: 'Free Stock Music',
    desc: 'Bibliothèque de musiques gratuites à utiliser dans vos vidéos et podcasts.',
    url: 'https://www.free-stock-music.com/',
    cat: 'musiques',
    emoji: '🗂️',
  },
  {
    name: 'Silverman Sound',
    desc: 'Sélection de compositions originales offertes gratuitement pour projets créatifs.',
    url: 'https://www.silvermansound.com/free-music',
    cat: 'musiques',
    emoji: '🥈',
  },
  {
    name: 'Moby Gratis',
    desc: 'Collection de musiques de Moby offertes gratuitement pour projets à but non commercial.',
    url: 'https://mobygratis.com/',
    cat: 'musiques',
    emoji: '🐋',
  },

  // ── Jeux Vidéos ──
  {
    name: 'Material Maker',
    desc: 'Éditeur de matériaux procédural et générateur de textures basé sur des nœuds, inspiré de Godot.',
    url: 'https://www.materialmaker.org/',
    cat: 'jeux',
    emoji: '🧱',
  },
  {
    name: 'Godot Shaders',
    desc: 'Bibliothèque en ligne de shaders prêts à l\'emploi pour le moteur de jeu Godot.',
    url: 'https://godotshaders.com/',
    cat: 'jeux',
    emoji: '✨',
  },
  {
    name: 'Shadertoy',
    desc: 'Plateforme communautaire pour coder et partager des shaders GLSL interactifs en temps réel.',
    url: 'https://www.shadertoy.com/',
    cat: 'jeux',
    emoji: '🔮',
  },
  {
    name: 'Tilesetter',
    desc: 'Outil d\'automatisation pour créer et organiser des tilesets pixel art facilement.',
    url: 'https://www.tilesetter.org/',
    cat: 'jeux',
    emoji: '🗺️',
  },
  {
    name: 'Tilemancer',
    desc: 'Générateur de tilesets procédural pour jeux en pixel art, disponible sur itch.io.',
    url: 'https://led.itch.io/tilemancer',
    cat: 'jeux',
    emoji: '🧩',
  },
  {
    name: 'LPC Spritesheet Generator',
    desc: 'Générateur de personnages au format LPC avec personnalisation complète des sprites.',
    url: 'https://liberatedpixelcup.github.io/Universal-LPC-Spritesheet-Character-Generator/',
    cat: 'jeux',
    emoji: '🧍',
  },
  {
    name: 'LibreSprite',
    desc: 'Éditeur de pixel art et d\'animations open-source, fork gratuit d\'Aseprite.',
    url: 'https://libresprite.github.io/',
    cat: 'jeux',
    emoji: '🖼️',
  },
  {
    name: 'Piskel',
    desc: 'Éditeur gratuit de pixel art en ligne, avec export de spritesheets animées.',
    url: 'https://www.piskelapp.com/',
    cat: 'jeux',
    emoji: '🎨',
  },
  {
    name: 'DragonBones',
    desc: 'Suite d\'outils pour créer des animations 2D squelettiques, alternative gratuite à Spine.',
    url: 'https://dragonbones.github.io/en/download.html',
    cat: 'jeux',
    emoji: '🦴',
  },
  {
    name: 'MagicaVoxel',
    desc: 'Éditeur de voxel 3D léger et gratuit avec rendu en temps réel.',
    url: 'https://ephtracy.github.io/',
    cat: 'jeux',
    emoji: '🧊',
  },
  {
    name: 'Blockbench',
    desc: 'Créateur de modèles 3D low-poly et pixel-art pour Minecraft et jeux similaires.',
    url: 'https://www.blockbench.net/',
    cat: 'jeux',
    emoji: '🟦',
  },
  {
    name: 'Tiled',
    desc: 'Éditeur de cartes par tuiles polyvalent pour le développement de jeux 2D.',
    url: 'https://www.mapeditor.org/',
    cat: 'jeux',
    emoji: '🗾',
  },
  {
    name: 'LDtk',
    desc: 'Level Designer Toolkit : éditeur de niveaux moderne basé sur une grille, gratuit et open-source.',
    url: 'https://ldtk.io/',
    cat: 'jeux',
    emoji: '📐',
  },
  {
    name: 'TrenchBroom',
    desc: 'Éditeur de maps 3D pour jeux basés sur le moteur Quake, intuitif et puissant.',
    url: 'https://trenchbroom.github.io/',
    cat: 'jeux',
    emoji: '🏗️',
  },
  {
    name: 'OpenGameArt',
    desc: 'Plateforme communautaire de ressources graphiques, sonores et code open-source pour jeux.',
    url: 'https://opengameart.org/',
    cat: 'jeux',
    emoji: '🎭',
  },
  {
    name: 'Quaternius',
    desc: 'Modèles 3D et pixel art sous licence libre, gratuits pour tous types de projets.',
    url: 'https://quaternius.com/',
    cat: 'jeux',
    emoji: '🐉',
  },
  {
    name: 'Poly Haven',
    desc: 'Bibliothèque de HDRI, modèles 3D PBR et textures entièrement libres de droits.',
    url: 'https://polyhaven.com/',
    cat: 'jeux',
    emoji: '🌐',
  },
  {
    name: 'ambientCG',
    desc: 'Collection de textures PBR et matériaux CC0 pour shader et rendu 3D.',
    url: 'https://ambientcg.com/',
    cat: 'jeux',
    emoji: '🪨',
  },
  {
    name: 'Game UI Database',
    desc: 'Base de données collaborative d\'interfaces de jeux vidéo pour s\'inspirer et télécharger des assets UI.',
    url: 'https://www.gameuidatabase.com/',
    cat: 'jeux',
    emoji: '🖥️',
  },
  {
    name: 'The Spriters Resource',
    desc: 'Archives de sprites rippés depuis des centaines de jeux vidéo, classés par console et titre.',
    url: 'https://www.spriters-resource.com/',
    cat: 'jeux',
    emoji: '👾',
  },

  // ── Mockups ──
  {
    name: 'Mockup World',
    desc: 'La plus grande collection de mockups Photoshop gratuits au monde, tous styles confondus.',
    url: 'https://www.mockupworld.co',
    cat: 'mockups',
    emoji: '🌍',
  },
  {
    name: 'GraphicBurger',
    desc: 'Ressources design premium gratuites — mockups, templates, textures et UI kits.',
    url: 'https://graphicburger.com',
    cat: 'mockups',
    emoji: '🍔',
  },
  {
    name: 'Shots.so',
    desc: 'Créez de magnifiques présentations de vos designs en quelques clics, sans Photoshop.',
    url: 'https://shots.so',
    cat: 'mockups',
    emoji: '📱',
  },
  {
    name: 'Media Modifier',
    desc: 'Mockups de devices professionnels pour présenter vos créations de façon convaincante.',
    url: 'https://mediamodifier.com',
    cat: 'mockups',
    emoji: '🖥️',
  },

  {
    name: 'Toools.design',
    desc: 'Sélection de mockups, UI kits et freebies design pour maquettes et présentations.',
    url: 'https://www.toools.design/mockups-ui-kits-and-freebies',
    cat: 'mockups',
    emoji: '🗂️',
  },
  {
    name: 'Resourceboy',
    desc: 'Collection organisée de mockups gratuits (appareils, print, packaging) téléchargeables.',
    url: 'https://resourceboy.com/mockups/',
    cat: 'mockups',
    emoji: '📦',
  },
  {
    name: 'Mr Mockup',
    desc: 'Galerie de mockups gratuits haute résolution pour branding, packaging et plus.',
    url: 'https://mrmockup.com/free-mockups/',
    cat: 'mockups',
    emoji: '🎁',
  },
  {
    name: 'Mockuphone',
    desc: 'Mockups de smartphones, tablettes et montres à personnaliser en ligne et télécharger.',
    url: 'https://mockuphone.com/',
    cat: 'mockups',
    emoji: '📱',
  },
  {
    name: 'Screely',
    desc: 'Transformez vos captures d\'écran en présentations élégantes et mockups stylisés en ligne.',
    url: 'https://screely.com',
    cat: 'mockups',
    emoji: '🖼️',
  },

  // ── Vidéo ──
  {
    name: 'Mixkit',
    desc: 'Banque de vidéos haute qualité et musiques libres de droits pour projets créatifs.',
    url: 'https://mixkit.co/',
    cat: 'video',
    emoji: '🎬',
  },
  {
    name: 'Pexels Videos',
    desc: 'Bibliothèque gratuite de vidéos HD partagées par une communauté mondiale de créateurs.',
    url: 'https://www.pexels.com/fr-fr/videos/',
    cat: 'video',
    emoji: '🎥',
  },
  {
    name: 'ISO Republic',
    desc: 'Collection libre de droits d\'images, vidéos et pistes audio pour usage commercial et personnel.',
    url: 'https://isorepublic.com/',
    cat: 'video',
    emoji: '🌐',
  },

  // ── Textures ──
  {
    name: 'Indieground Freebies',
    desc: 'Sélection de freebies graphiques — illustrations, textures et polices disponibles gratuitement.',
    url: 'https://indieground.net/shop-category/freebies/',
    cat: 'textures',
    emoji: '🎨',
  },
  {
    name: 'StudioAAA Free',
    desc: 'Ressources gratuites — modèles 3D, textures et icônes à télécharger sans frais.',
    url: 'https://studioaaa.com/product-category/free/',
    cat: 'textures',
    emoji: '🏛️',
  },
  {
    name: 'BLK Market Free',
    desc: 'Section gratuite de BLK Market — polices, icônes et textures librement téléchargeables.',
    url: 'https://blkmarket.com/product-category/free/',
    cat: 'textures',
    emoji: '🖤',
  },
  {
    name: 'Doron Supply Freebies',
    desc: 'Ressources graphiques gratuites filtrées — textures, overlays et assets pour créatifs.',
    url: 'https://www.doronsupply.com/shop/filter-freebies',
    cat: 'textures',
    emoji: '🌿',
  },
  {
    name: 'Resourceboy Textures',
    desc: 'Collection de textures gratuites pour design graphique et 3D, classées par thème.',
    url: 'https://resourceboy.com/textures/',
    cat: 'textures',
    emoji: '🪨',
  },
  {
    name: 'TextureFabrik',
    desc: 'Galerie de textures haute résolution gratuites pour tous types de projets créatifs.',
    url: 'https://texturefabrik.com/gallery/',
    cat: 'textures',
    emoji: '🧱',
  },

  // ── Brushes ──
  {
    name: 'Resourceboy Brushes',
    desc: 'Collection de brosses gratuites et premium pour Photoshop, classées par style et usage.',
    url: 'https://resourceboy.com/photoshop-brushes/',
    cat: 'brushes',
    emoji: '🖌️',
  },

  // ── PNG ──
  {
    name: 'PNGWing',
    desc: 'Bibliothèque de fichiers PNG à fond transparent gratuits, classés par thème.',
    url: 'https://www.pngwing.com',
    cat: 'png',
    emoji: '🖼️',
  },
  {
    name: 'ImgBin',
    desc: 'Collection de PNGs HD à fond transparent pour tous types de projets créatifs.',
    url: 'https://imgbin.com/',
    cat: 'png',
    emoji: '🔳',
  },

  // ── Outils IA ──
  {
    name: 'Lummi',
    desc: 'Générateur d\'images par IA avec une large variété de styles visuels.',
    url: 'https://www.lummi.ai/',
    cat: 'ia',
    emoji: '✨',
  },
  {
    name: 'ArtBot',
    desc: 'Outil IA pour créer des illustrations originales à partir de descriptions textuelles.',
    url: 'https://tinybots.net/artbot/create',
    cat: 'ia',
    emoji: '🤖',
  },

  // ── Outils ──
  {
    name: 'Space Type Generator',
    desc: 'Générateur en ligne de compositions typographiques spatiales et cinétiques.',
    url: 'https://spacetypegenerator.com/',
    cat: 'outils',
    emoji: '🌌',
  },
  {
    name: 'Pixelator',
    desc: 'Application de conversion d\'images en pixel art, simplement et rapidement.',
    url: 'http://pixelatorapp.com/',
    cat: 'outils',
    emoji: '👾',
  },
  {
    name: 'Atomiser',
    desc: 'Outil de création d\'effets burned out et grunge sur vos images.',
    url: 'https://www.atomiser.fr/',
    cat: 'outils',
    emoji: '🔥',
  },
  {
    name: 'Inclusive Colors',
    desc: 'Simulateur de vision des couleurs pour vérifier l\'accessibilité de vos palettes.',
    url: 'https://www.inclusivecolors.com/',
    cat: 'outils',
    emoji: '♿',
  },
  {
    name: 'Vectorpea',
    desc: 'Éditeur de graphiques vectoriels en ligne gratuit, alternative à Illustrator.',
    url: 'https://www.vectorpea.com/',
    cat: 'outils',
    emoji: '✒️',
  },
  {
    name: 'Wordmark.it',
    desc: 'Visualisez rapidement votre texte dans toutes les polices installées sur votre système.',
    url: 'https://wordmark.it/',
    cat: 'outils',
    emoji: '🔤',
  },
  {
    name: 'WhatTheFont',
    desc: 'Service d\'identification de polices à partir d\'une image, par MyFonts.',
    url: 'https://www.myfonts.com/fr/pages/whatthefont',
    cat: 'outils',
    emoji: '🔍',
  },
  {
    name: 'Metatags.io',
    desc: 'Générateur et éditeur de balises meta pour optimiser le partage sur les réseaux sociaux.',
    url: 'https://metatags.io/',
    cat: 'outils',
    emoji: '🏷️',
  },
  {
    name: 'FontBrief',
    desc: 'Plateforme pour organiser, tester et partager des projets de typographie en équipe.',
    url: 'http://fontbrief.com/fontbrief',
    cat: 'outils',
    emoji: '📋',
  },
  {
    name: 'Tooooools',
    desc: 'Suite d\'outils créatifs en ligne pour designers — couleurs, typographie, icônes et plus.',
    url: 'https://www.tooooools.app/',
    cat: 'outils',
    emoji: '🧰',
  },
  {
    name: 'Type Tools',
    desc: 'Collection d\'utilitaires en ligne pour la gestion et l\'inspection de polices.',
    url: 'https://www.type-tools.com/',
    cat: 'outils',
    emoji: '🔧',
  },

  // ── Web ──
  {
    name: 'CSS Gradient',
    desc: 'Générateur de dégradés CSS visuel avec prévisualisation en temps réel et copie du code.',
    url: 'https://cssgradient.io/',
    cat: 'web',
    emoji: '🌈',
  },

  // ── Tutos ──
  {
    name: 'Saint11 — Pixel Art Tutorials',
    desc: 'Tutoriels pas-à-pas pour apprendre et perfectionner vos techniques de pixel art.',
    url: 'https://saint11.art/blog/pixel-art-tutorials/',
    cat: 'tutos',
    emoji: '🎓',
  },

  // ── Inspiration ──
  {
    name: 'Cosmos',
    desc: 'Galerie d\'inspiration pour interfaces web, avec sélection de sites et composants UI modernes.',
    url: 'https://www.cosmos.so/discover',
    cat: 'inspi',
    emoji: '🌌',
  },
  {
    name: 'Same Energy',
    desc: 'Moteur de recherche visuel par similarité d\'ambiance pour trouver des images inspirantes.',
    url: 'https://same.energy/',
    cat: 'inspi',
    emoji: '✨',
  },
  {
    name: 'Abduzeedo',
    desc: 'Blog de design graphique et digital proposant tutoriels, articles et sources d\'inspiration.',
    url: 'https://abduzeedo.com/',
    cat: 'inspi',
    emoji: '📰',
  },
  {
    name: 'Lapa Ninja',
    desc: 'Collection organisée de landing pages créatives pour puiser des idées de mise en page.',
    url: 'https://www.lapa.ninja/',
    cat: 'inspi',
    emoji: '🥷',
  },
  {
    name: 'Savee',
    desc: 'Plateforme de bookmarking visuel pour enregistrer et partager des références graphiques.',
    url: 'https://savee.it/',
    cat: 'inspi',
    emoji: '📌',
  },
  {
    name: 'ArtStation',
    desc: 'Réseau social professionnel où les artistes 2D/3D exposent leurs portfolios et projets.',
    url: 'https://www.artstation.com/',
    cat: 'inspi',
    emoji: '🎨',
  },
  {
    name: 'Identity Designed',
    desc: 'Cas d\'étude sur le branding et l\'identité visuelle de marques prestigieuses du monde entier.',
    url: 'https://identitydesigned.com/',
    cat: 'inspi',
    emoji: '🏷️',
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

// ── Render cards ──
function getFiltered() {
  const q = searchQuery.toLowerCase();
  return resources.filter(r => {
    const matchCat = currentCat === 'all' || r.cat === currentCat;
    const matchSearch = !q || r.name.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });
}

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
    const cat = categories.find(c => c.id === r.cat);

    const card = document.createElement('a');
    card.href = r.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.className = 'card';
    card.style.animationDelay = `${i * 25}ms`;

    card.innerHTML = `
      <div class="card-top">
        <span class="card-emoji">${r.emoji}</span>
        <span class="card-tag" style="color:${cat.color};background:${cat.color}1a">${cat.label}</span>
      </div>
      <div class="card-name">${r.name}</div>
      <div class="card-desc">${r.desc}</div>
      <div class="card-footer">
        <span class="card-visit">Visiter →</span>
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
