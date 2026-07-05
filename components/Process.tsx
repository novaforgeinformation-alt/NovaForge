import InViewWrapper from './InViewWrapper'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We dive deep into your operations to identify bottlenecks and opportunities for digital transformation.',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'Detailed blueprints and technical specifications ensure every stakeholder is aligned before we start coding.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Agile development focused on quality, security, and performance. You get access to a live staging environment.',
  },
  {
    number: '04',
    title: 'Launch',
    description:
      'Smooth deployment followed by active monitoring and dedicated support to ensure continued success.',
  },
]

export default function Process() {
  return (
    <section className="bg-primary text-on-primary" id="process">
      <InViewWrapper animation="fade-up">
        <div className="max-w-container-max mx-auto px-margin-desktop section-padding">
          <div className="mb-16">
            <h2 className="font-headline-lg text-headline-lg max-md:text-headline-lg-mobile">
              Our Engineering Pipeline.
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary-container mt-6 max-w-2xl">
              A systematic approach to digital product development, moving from
              ambiguity to absolute clarity.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative space-y-6">
                <span className="font-display-xl text-4xl opacity-20 block mb-4">
                  {step.number}
                </span>
                <h3 className="font-headline-md text-headline-md">
                  {step.title}
                </h3>
                <p className="font-body-md text-body-md text-on-primary-container">
                  {step.description}
                </p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 right-0 w-full h-px bg-on-primary-container opacity-20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </InViewWrapper>
    </section>
  )
}
