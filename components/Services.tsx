import InViewWrapper from './InViewWrapper'

const services = [
  {
    icon: 'web',
    title: 'Website Development',
    description:
      "High-performance digital experiences tailored to your brand's unique identity and business goals.",
  },
  {
    icon: 'hub',
    title: 'CRM Systems',
    description:
      'Customized customer relationship management tools designed to capture every lead and nurture every client.',
  },
  {
    icon: 'smart_toy',
    title: 'n8n Automation & AI Agents',
    description:
      'Intelligent workflows and AI-driven assistants that handle repetitive tasks while you focus on high-level strategy.',
  },
  {
    icon: 'api',
    title: 'API Integrations',
    description:
      "Seamless connectivity between your tech stack, ensuring data flows where it's needed without friction.",
  },
]

export default function Services() {
  return (
    <section
      className="bg-surface-container-low border-y border-outline-variant"
      id="services"
    >
      <div className="max-w-container-max mx-auto px-margin-desktop section-padding">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="sticky top-32">
            <span className="font-mono-sm text-mono-sm uppercase tracking-widest text-secondary font-semibold">
              Capabilities
            </span>
            <h2 className="font-headline-lg text-headline-lg max-md:text-headline-lg-mobile mt-4 mb-[28px]">
              Expertise delivered with intent.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              We don&apos;t just build features; we engineer outcomes that
              streamline operations and drive revenue.
            </p>
          </div>
          <InViewWrapper
            animation="reveal-card"
            staggerDelay={100}
            className="grid gap-gutter"
          >
            {services.map((service) => (
              <div
                key={service.icon}
                className="reveal-card bg-white p-8 border border-outline-variant rounded-xl group hover:border-primary transition-colors"
              >
                <span className="material-symbols-outlined text-primary text-3xl mb-4">
                  {service.icon}
                </span>
                <h3 className="font-headline-md text-headline-md mb-3">
                  {service.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {service.description}
                </p>
              </div>
            ))}
          </InViewWrapper>
        </div>
      </div>
    </section>
  )
}
