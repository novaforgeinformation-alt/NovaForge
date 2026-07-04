import InViewWrapper from './InViewWrapper'

const features = [
  {
    icon: 'architecture',
    title: 'Tailored Solutions',
    description:
      'We reject the one-size-fits-all approach. Every line of code is written with your specific business logic in mind.',
  },
  {
    icon: 'trending_up',
    title: 'Built for Scalability',
    description:
      'Our architectures are designed to grow with you, ensuring your investment today supports your scale tomorrow.',
  },
  {
    icon: 'chat',
    title: 'Clear Communication',
    description:
      'No jargon. No hidden progress. Regular updates and transparent documentation keep you in the loop.',
  },
  {
    icon: 'verified',
    title: 'Reliable Support',
    description:
      'Long-term partnerships are built on reliability. We provide proactive maintenance and responsive support.',
  },
]

export default function WhyNovaForge() {
  return (
    <section className="max-w-container-max mx-auto px-margin-desktop section-padding">
      <InViewWrapper animation="fade-up">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="font-headline-lg text-headline-lg max-md:text-headline-lg-mobile">
              The NovaForge Standard.
            </h2>
          </div>
          <div className="md:w-2/3 grid sm:grid-cols-2 gap-x-14 gap-y-10">
            {features.map((feature) => (
              <div key={feature.icon}>
                <div className="w-10 h-10 bg-primary-fixed flex items-center justify-center rounded mb-4">
                  <span className="material-symbols-outlined text-primary">
                    {feature.icon}
                  </span>
                </div>
                <h4 className="font-headline-md text-headline-md text-lg mb-3">
                  {feature.title}
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </InViewWrapper>
    </section>
  )
}
