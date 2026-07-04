export default function Hero() {
  return (
    <section
      className="max-w-container-max mx-auto px-margin-desktop max-md:pt-16 max-md:pb-16 pt-20 pb-[110px] grid md:grid-cols-[5fr_7fr] gap-[72px] items-center"
      id="home"
    >
      <div>
        <h1 className="font-display-xl text-display-xl max-md:font-display-xl-mobile max-md:text-display-xl-mobile leading-[1.1] max-w-sm">
          Software built around your business.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[340px] mt-[32px]">
          NovaForge helps businesses grow through custom software, automation,
          and modern digital solutions. Precision engineering for high-growth
          enterprises.
        </p>
        <div className="flex flex-wrap gap-4 mt-[36px]">
          <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-body-md hover:bg-opacity-90 transition-all">
            Book a Call
          </button>
          <button className="bg-white border border-outline-variant text-on-surface px-8 py-4 rounded-lg font-body-md hover:bg-surface-container-low transition-all">
            View Services
          </button>
        </div>
      </div>
      <div
        className="relative aspect-square md:aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant"
        aria-label="A clean, minimalist architectural photograph showing the intersection of sharp glass and concrete angles under soft morning light. The composition is highly geometric and abstract, reflecting engineering precision and premium craftsmanship. The color palette is dominated by warm whites, deep forest greens, and neutral grays, perfectly aligned with a professional corporate aesthetic."
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#1a6b50] to-[#2d8f72]" />
      </div>
    </section>
  )
}
