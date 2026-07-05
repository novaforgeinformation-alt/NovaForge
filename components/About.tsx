import Image from 'next/image'
import InViewWrapper from './InViewWrapper'

export default function About() {
  return (
    <section
      className="max-w-container-max mx-auto px-margin-desktop section-padding flex flex-col md:flex-row gap-16 items-center"
      id="about"
    >
      <InViewWrapper animation="fade-up" className="md:w-1/2">
        <div>
        <span className="font-mono-sm text-mono-sm uppercase tracking-widest text-secondary font-semibold">
          Our Philosophy
        </span>
        <h2 className="font-headline-lg text-headline-lg max-md:text-headline-lg-mobile mt-4 mb-[28px]">
          Efficiency as a competitive advantage.
        </h2>
        <div className="space-y-4 font-body-lg text-body-lg text-on-surface-variant mb-[36px]">
          <p>
            NovaForge was founded on the belief that software should be an
            asset, not a frustration. We focus on practical digital products
            that solve real business problems without unnecessary complexity.
          </p>
          <p>
            Our team of engineers and business analysts work at the intersection
            of operational excellence and technical innovation. We don&apos;t
            just build; we optimize.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <span className="font-display-xl text-3xl text-primary block">
              100%
            </span>
            <span className="font-body-md text-body-md">Custom Code</span>
          </div>
          <div>
            <span className="font-display-xl text-3xl text-primary block">
              24/7
            </span>
            <span className="font-body-md text-body-md">Monitoring</span>
          </div>
        </div>
        </div>
      </InViewWrapper>
      <InViewWrapper animation="fade-up" className="md:w-1/2 w-full">
        <div
          className="aspect-[3/4] bg-surface-container-high border border-outline-variant rounded-xl overflow-hidden max-h-[600px]"
          aria-label="A sophisticated home office or minimalist studio setup featuring high-end developer tools, a clean white desk, and a large monitor displaying complex, well-structured code. The room is softly lit by natural light, creating a serene, professional atmosphere. The design is modern, uncluttered, and reflects a deep focus on intellectual and technical craftsmanship."
        >
          <Image
            src="/office.jpg"
            alt="A sophisticated home office or minimalist studio setup featuring high-end developer tools, a clean white desk, and a large monitor displaying complex, well-structured code. The room is softly lit by natural light, creating a serene, professional atmosphere. The design is modern, uncluttered, and reflects a deep focus on intellectual and technical craftsmanship."
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </InViewWrapper>
    </section>
  )
}
