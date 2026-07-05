import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | NovaForge',
  description: 'How NovaForge collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-container-max mx-auto px-margin-desktop section-padding">
      <h1 className="font-headline-lg text-headline-lg mb-8">Privacy Policy</h1>
      <div className="space-y-6 font-body-md text-body-md text-on-surface-variant leading-relaxed">
        <p><strong className="text-on-surface">1. Information We Collect</strong><br />
        We collect information you provide directly: name, email address, company name, project details, and budget estimates when you submit our contact form. We also collect standard web analytics data (pages visited, browser type, duration).</p>

        <p><strong className="text-on-surface">2. How We Use Your Information</strong><br />
        We use your information to respond to inquiries, provide services, improve our website, and communicate about our offerings. We do not sell personal data to third parties.</p>

        <p><strong className="text-on-surface">3. Data Storage & Security</strong><br />
        Your data is stored securely using industry-standard practices. We retain contact form submissions for up to 24 months unless deletion is requested.</p>

        <p><strong className="text-on-surface">4. Third-Party Services</strong><br />
        We use Google Workspace (Gmail) for email communication. Their privacy policy governs data processed through their services.</p>

        <p><strong className="text-on-surface">5. Your Rights</strong><br />
        You may request access to, correction of, or deletion of your personal data at any time by emailing <a href="mailto:novaforgeinformation@gmail.com" className="text-primary underline">novaforgeinformation@gmail.com</a>.</p>

        <p><strong className="text-on-surface">6. Cookies</strong><br />
        This site uses minimal cookies for essential functionality. We do not use tracking cookies or third-party marketing cookies.</p>

        <p><strong className="text-on-surface">7. Changes</strong><br />
        We may update this policy periodically. Continued use after changes constitutes acceptance of the updated policy.</p>
      </div>
    </div>
  )
}
