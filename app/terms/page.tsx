import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | NovaForge',
  description: 'Terms and conditions for using NovaForge services.',
}

export default function TermsPage() {
  return (
    <div className="max-w-container-max mx-auto px-margin-desktop section-padding prose">
      <h1 className="font-headline-lg text-headline-lg mb-8">Terms of Service</h1>
      <div className="space-y-6 font-body-md text-body-md text-on-surface-variant leading-relaxed">
        <p><strong className="text-on-surface">1. Acceptance of Terms</strong><br />
        By accessing or using NovaForge&apos;s services, you agree to be bound by these Terms of Service. If you do not agree, do not use our services.</p>

        <p><strong className="text-on-surface">2. Services</strong><br />
        NovaForge provides software development, automation, and digital solutions as described in our proposals and statements of work. Each engagement is governed by a separate agreement that supersedes any conflicting terms herein.</p>

        <p><strong className="text-on-surface">3. Intellectual Property</strong><br />
        Upon full payment, NovaForge assigns all intellectual property rights for deliverables specifically created for your project. NovaForge retains the right to use pre-existing tools, libraries, and frameworks.</p>

        <p><strong className="text-on-surface">4. Confidentiality</strong><br />
        Both parties agree to keep confidential any proprietary information shared during the engagement. This obligation survives termination of our agreement.</p>

        <p><strong className="text-on-surface">5. Limitation of Liability</strong><br />
        NovaForge&apos;s liability is limited to the fees paid for the specific service giving rise to the claim. We are not liable for indirect or consequential damages.</p>

        <p><strong className="text-on-surface">6. Termination</strong><br />
        Either party may terminate an engagement with 30 days&apos; written notice. Fees for work completed up to termination are non-refundable.</p>

        <p><strong className="text-on-surface">7. Contact</strong><br />
        For questions about these terms, email <a href="mailto:novaforgeinformation@gmail.com" className="text-primary underline">novaforgeinformation@gmail.com</a>.</p>
      </div>
    </div>
  )
}
