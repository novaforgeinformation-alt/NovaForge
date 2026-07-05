import ContactForm from './ContactForm'
import InViewWrapper from './InViewWrapper'

export default function Contact() {
  return (
    <section className="bg-white border-t border-outline-variant" id="contact">
      <InViewWrapper animation="fade-up">
        <div className="max-w-container-max mx-auto px-margin-desktop section-padding">
          <div className="grid md:grid-cols-2 gap-24">
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
              <div className="flex gap-6 items-start">
                <span className="material-symbols-outlined text-primary">mail</span>
                <div>
                  <h4 className="font-headline-md text-lg">Email us</h4>
                  <p className="font-body-md text-on-surface-variant">
                    novaforgeinformation@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </InViewWrapper>
    </section>
  )
}
