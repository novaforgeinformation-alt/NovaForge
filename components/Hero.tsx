'use client'

import Image from 'next/image'
import { useContact } from '@/lib/contact-context'

export default function Hero() {
  const { setOpen } = useContact()

  return (
    <section
      className="max-w-container-max mx-auto px-margin-desktop section-padding grid md:grid-cols-2 gap-16 items-center"
      id="home"
    >
      <div className="space-y-8">
        <h1 className="font-display-xl text-display-xl max-md:font-display-xl-mobile max-md:text-display-xl-mobile leading-[1.1]">
          Software built around your business.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
          NovaForge helps businesses grow through custom software, automation,
          and modern digital solutions. Precision engineering for high-growth
          enterprises.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <button
            className="bg-primary text-on-primary px-8 py-4 rounded-lg font-body-md hover:bg-opacity-90 transition-all"
            onClick={() => setOpen(true)}
          >
            Send an Inquiry
          </button>
          <a
            className="bg-white border border-outline-variant text-on-surface px-8 py-4 rounded-lg font-body-md hover:bg-surface-container-low transition-all inline-block"
            href="#services"
          >
            View Services
          </a>
        </div>
      </div>
      <div
        className="relative aspect-square md:aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant"
        aria-label="A clean, minimalist architectural photograph showing the intersection of sharp glass and concrete angles under soft morning light. The composition is highly geometric and abstract, reflecting engineering precision and premium craftsmanship. The color palette is dominated by warm whites, deep forest greens, and neutral grays, perfectly aligned with a professional corporate aesthetic."
      >
        <Image
          src="/cover1.jpg"
          alt="A clean, minimalist architectural photograph showing the intersection of sharp glass and concrete angles under soft morning light. The composition is highly geometric and abstract, reflecting engineering precision and premium craftsmanship. The color palette is dominated by warm whites, deep forest greens, and neutral grays, perfectly aligned with a professional corporate aesthetic."
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  )
}
