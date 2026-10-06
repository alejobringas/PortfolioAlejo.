export type Project = {
  number: string
  name: string
  category: string
  description: string
  tags: string[]
  liveUrl: string
  image: string
  imagePosition?: string
}

export const navItems = [
  { label: 'SOBRE MÍ', href: '#sobre-mi', id: 'sobre-mi' },
  { label: 'PROYECTOS', href: '#proyectos', id: 'proyectos' },
  { label: 'CONTACTO', href: '#contacto', id: 'contacto' },
]

export const technologies = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Electron',
  'FastAPI',
  'Python',
  'SQLite',
  'Supabase',
  'PostgreSQL',
]

export const projects: Project[] = [
  {
    number: '01',
    name: 'The Barber Live',
    category: 'RESERVAS Y GESTIÓN',
    description:
      'Desarrollé reservas con disponibilidad por fecha, pagos de seña y un panel privado para administrar turnos.',
    tags: ['Next.js', 'Supabase', 'Mercado Pago'],
    liveUrl: 'https://thebarberlive.com.ar/',
    image: '/assets/projects/the-barber-live.png',
    imagePosition: 'center',
  },
  {
    number: '02',
    name: 'MiCaja',
    category: 'POS DE ESCRITORIO',
    description:
      'POS para Windows: desarrollé ventas, stock, caja y tickets con una API local. Versión candidata en validación.',
    tags: ['Electron / React', 'FastAPI', 'SQLite'],
    liveUrl: 'https://micaja.ar/',
    image: '/assets/projects/micaja.png',
    imagePosition: 'center',
  },
  {
    number: '03',
    name: 'Estática Radio',
    category: 'RADIO ONLINE',
    description:
      'Desarrollé el sitio, el reproductor y el panel editorial. Audio desde AzuraCast; contenidos y acceso con Supabase.',
    tags: ['Next.js', 'Supabase', 'AzuraCast'],
    liveUrl: 'https://estaticaradio.vercel.app/',
    image: '/assets/projects/estatica-radio.png',
    imagePosition: 'center',
  },
  {
    number: '04',
    name: 'AURENNA',
    category: 'E-COMMERCE · DEMO',
    description:
      'Tienda de moda con catálogo, carrito y flujos de compra. Demo pública; pagos y cuentas pendientes de activación.',
    tags: ['Next.js', 'TypeScript', 'Supabase'],
    liveUrl: 'https://aurenna-beta.vercel.app/',
    image: '/assets/projects/aurenna.png',
    imagePosition: 'center',
  },
  {
    number: '05',
    name: 'ARCH Studio',
    category: 'ESTUDIO DE DESARROLLO',
    description:
      'Desarrollé el sitio del estudio, su portfolio, el cotizador y la administración de proyectos y consultas.',
    tags: ['Next.js', 'TypeScript', 'Supabase'],
    liveUrl: 'https://archstudio.com.ar/',
    image: '/assets/projects/arch-studio.png',
    imagePosition: 'center',
  },
  {
    number: '06',
    name: 'Zaffiro Moda',
    category: 'E-COMMERCE · DEMO',
    description:
      'Catálogo con filtros, variantes y carrito. Desarrollé la experiencia de compra; demo con contenido de muestra.',
    tags: ['Next.js', 'TypeScript', 'React'],
    liveUrl: 'https://zaffiromoda.vercel.app/',
    image: '/assets/projects/zaffiro-moda.png',
    imagePosition: 'center',
  },
  {
    number: '07',
    name: 'Stetica Lookbook',
    category: 'LOOKBOOK INTERACTIVO',
    description:
      'Lookbook con selección de prendas sobre modelos. Desarrollé el frontend, las interacciones y la navegación responsive.',
    tags: ['Next.js', 'TypeScript', 'React'],
    liveUrl: 'https://stetica-lookbook.vercel.app/',
    image: '/assets/projects/stetica-lookbook.png',
    imagePosition: 'center',
  },
  {
    number: '08',
    name: 'ARCH AI',
    category: 'ASISTENTE LOCAL · PROTOTIPO',
    description:
      'Desarrollé un asistente para Windows con modelos locales, documentos y voz. Prototipo de escritorio con recursos locales.',
    tags: ['Electron / React', 'Ollama', 'SQLite'],
    liveUrl: 'https://github.com/alejobringas/arch-ai',
    image: '/assets/projects/arch-ai.png',
    imagePosition: 'center',
  },
  {
    number: '09',
    name: 'ARCH Console',
    category: 'INTERFAZ DE ESCRITORIO · PROTOTIPO',
    description:
      'Desarrollé una interfaz para juegos de PC y un host con WebSocket. Prototipo local; streaming entre equipos pendiente de validación.',
    tags: ['Electron', 'React / TypeScript', 'WebSocket'],
    liveUrl: 'https://github.com/alejobringas/arch-console',
    image: '/assets/projects/arch-console.png',
    imagePosition: 'center',
  },
  {
    number: '10',
    name: 'ARCH Void',
    category: 'EXPERIMENTO WEBGL',
    description:
      'Desarrollé una membrana 3D que responde a gestos por webcam, con render y procesamiento de video local. Experimento en navegador.',
    tags: ['TypeScript', 'Three.js', 'MediaPipe'],
    liveUrl: 'https://github.com/alejobringas/arch-void',
    image: '/assets/projects/arch-void.png',
    imagePosition: 'center',
  },
]

export const socialLinks = [
  { label: 'GITHUB', href: 'https://github.com/alejobringas' },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/alejobringas' },
  { label: 'INSTAGRAM', href: 'https://www.instagram.com/alejobringass/' },
]

export const contactEmail = 'alejobringas1@gmail.com'
