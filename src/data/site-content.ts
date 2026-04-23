export type NavLink = {
  label: string
  href: string
}

export type Feature = {
  icon: 'Zap' | 'Shield' | 'Layers3' | 'Workflow' | 'Terminal' | 'Rocket'
  title: string
  description: string
}

export type GalleryItem = {
  title: string
  description: string
  tag: string
  accent: string
}

export type Stat = {
  label: string
  value: number
  suffix: string
  decimals?: number
}

export type Testimonial = {
  name: string
  role: string
  quote: string
}

export type DownloadPlatform = {
  id: string
  name: string
  architecture: string
  version: string
  size: string
}

export type FooterColumn = {
  title: string
  links: Array<{ label: string; href: string }>
}

export type CtaContent = {
  eyebrow: string
  title: string
  description: string
  buttonLabel: string
  buttonHref: string
}

export const navLinks: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Specs', href: '#specs' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Download', href: '#download' },
  { label: 'CTA', href: '#cta' },
  { label: 'Newsletter', href: '#newsletter' },
]

export const heroMetrics = [
  { label: 'active beta testers', value: '18k+' },
  { label: 'faster startup than previous release', value: '32%' },
  { label: 'average daily focus sessions', value: '4.8h' },
]

export const features: Feature[] = [
  {
    icon: 'Zap',
    title: 'Fast by default',
    description:
      'Boot quickly, resume instantly, and keep animations smooth with a system shell tuned for modern hardware and daily multitasking.',
  },
  {
    icon: 'Shield',
    title: 'Secure release flow',
    description:
      'Signed builds, predictable rollouts, and rollback-aware updates reduce operational risk for both individuals and teams.',
  },
  {
    icon: 'Layers3',
    title: 'Coherent interface system',
    description:
      'Panels, widgets, and app chrome share one visual language so the entire desktop feels deliberate instead of stitched together.',
  },
  {
    icon: 'Workflow',
    title: 'Workflow-centric desktop',
    description:
      'Switch between creative, communication, and engineering contexts with layouts that adapt to the work already on screen.',
  },
  {
    icon: 'Terminal',
    title: 'Developer-ready tools',
    description:
      'Built-in terminal experiences, package awareness, and configuration surfaces make RheaOS feel comfortable for technical users.',
  },
  {
    icon: 'Rocket',
    title: 'Built to scale with you',
    description:
      'From personal devices to managed teams, the platform keeps visual polish while remaining maintainable and extensible.',
  },
]

export const galleryItems: GalleryItem[] = [
  {
    title: 'Ambient desktop overview',
    description: 'A clear top-level dashboard for widgets, system context, and quick-launch actions without visual clutter.',
    tag: 'Shell',
    accent: 'from-violet-500/20 via-slate-900 to-slate-950',
  },
  {
    title: 'Settings that feel approachable',
    description: 'System controls are grouped into calm, readable surfaces so configuration stays fast even for complex setups.',
    tag: 'Settings',
    accent: 'from-cyan-500/20 via-slate-900 to-slate-950',
  },
  {
    title: 'Workspace surfaces for real tasks',
    description: 'Applications, launcher states, and productivity panels follow the same shape, spacing, and motion language.',
    tag: 'Workspace',
    accent: 'from-fuchsia-500/20 via-slate-900 to-slate-950',
  },
]

export const stats: Stat[] = [
  { label: 'Cold boot time', value: 6.4, suffix: 's', decimals: 1 },
  { label: 'User satisfaction', value: 98, suffix: '%' },
  { label: 'Animation frame stability', value: 120, suffix: 'fps' },
  { label: 'Patch rollout window', value: 3, suffix: ' min' },
]

export const specHighlights = [
  'Unified shell and settings architecture designed for visual consistency across surfaces.',
  'Smooth glassmorphism accents and glow depth rebuilt using Tailwind utilities plus a tiny custom CSS layer.',
  'Component-first rendering strategy so sections are easier to test, extend, and reorder.',
  'Motion patterns tuned to respect reduced-motion preferences without breaking page hierarchy.',
]

export const minimumRequirements = [
  '64-bit processor with 4 cores or better',
  '8 GB RAM minimum, 16 GB recommended for creator workflows',
  '30 GB available storage for base install and updates',
  'UEFI-capable device with hardware acceleration enabled',
]

export const testimonials: Testimonial[] = [
  {
    name: 'Nadia Putri',
    role: 'Product designer',
    quote: 'RheaOS feels like someone finally designed a desktop around calm focus instead of noisy utility.',
  },
  {
    name: 'Rizky Mahendra',
    role: 'Frontend engineer',
    quote: 'The terminal workflow and system responsiveness make it feel modern without losing polish or clarity.',
  },
  {
    name: 'Alicia Fernandez',
    role: 'Ops lead',
    quote: 'What surprised me most is how premium the interface feels while still being straightforward to deploy and update.',
  },
]

export const downloadPlatforms: DownloadPlatform[] = [
  {
    id: 'arm64',
    name: 'ARM64 build',
    architecture: 'For Apple Silicon and modern ARM devices',
    version: 'v1.4.2',
    size: '2.1 GB',
  },
  {
    id: 'x64',
    name: 'x64 build',
    architecture: 'For Intel and AMD desktops or laptops',
    version: 'v1.4.2',
    size: '2.4 GB',
  },
  {
    id: 'vm',
    name: 'Virtual machine image',
    architecture: 'For testing in VirtualBox, UTM, and VMware',
    version: 'v1.4.2',
    size: '3.0 GB',
  },
]

export const ctaContent: CtaContent = {
  eyebrow: 'Call to action',
  title: 'Ready to try the redesigned RheaOS beta experience?',
  description:
    'Keep the same conversion moment from the legacy landing page by guiding visitors directly to the download section.',
  buttonLabel: 'Get beta build',
  buttonHref: '#download',
}

export const footerColumns: FooterColumn[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Download', href: '#download' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Release notes', href: '#' },
      { label: 'Status', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Contact', href: '#newsletter' },
    ],
  },
]
