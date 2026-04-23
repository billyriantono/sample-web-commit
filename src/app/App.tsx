import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import { CtaSection } from '@/components/sections/cta-section'
import { DownloadSection } from '@/components/sections/download-section'
import { FeaturesSection } from '@/components/sections/features-section'
import { GallerySection } from '@/components/sections/gallery-section'
import { HeroSection } from '@/components/sections/hero-section'
import { NewsletterSection } from '@/components/sections/newsletter-section'
import { SpecsSection } from '@/components/sections/specs-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'

export function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.22),transparent_32%),radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.14),transparent_24%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.16),transparent_28%)]" />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <GallerySection />
        <SpecsSection />
        <TestimonialsSection />
        <DownloadSection />
        <CtaSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}
