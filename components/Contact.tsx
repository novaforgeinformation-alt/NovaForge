import ContactForm from './ContactForm'
import InViewWrapper from './InViewWrapper'

const contactItems = [
  {
    icon: 'mail',
    title: 'Email us',
    value: 'hello@novaforge.dev',
  },
  {
    icon: 'call',
    title: 'Call us',
    value: '+1 (555) 012-3456',
  },
  {
    icon: 'location_on',
    title: 'Office',
    value: 'San Francisco, CA 94103',
  },
]

export default function Contact() {
  return (
    <section className="bg-white border-t border-outline-variant" id="contact">
      <InViewWrapper animation="fade-up">
        <div className="max-w-container-max mx-auto px-margin-desktop pt-[100px] pb-[100px]">
          <div className="grid md:grid-cols-2 gap-[72px]">
            <div className="space-y-12">
              <div>
                <h2 className="font-headline-lg text-headline-lg max-md:text-headline-lg-mobile">
                  Start your transformation.
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
                  Have a project in mind? Let&apos;s discuss how we can help you
                  scale.
                </p>
              </div>
              <div className="space-y-8">
                {contactItems.map((item) => (
                  <div key={item.icon} className="flex gap-6 items-start">
                    <span className="material-symbols-outlined text-primary">
                      {item.icon}
                    </span>
                    <div>
                      <h4 className="font-headline-md text-lg">
                        {item.title}
                      </h4>
                      <p className="font-body-md text-on-surface-variant">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </InViewWrapper>
    </section>
  )
}
