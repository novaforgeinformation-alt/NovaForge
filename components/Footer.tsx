import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-on-primary-container/20">
      <div className="w-full px-margin-desktop section-padding max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter text-on-primary">
        <div className="space-y-6">
          <Image
            src="/logo.png"
            alt="NovaForge"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <p className="font-body-md text-body-md text-on-primary-container">
            Engineering precision for the modern enterprise. Custom software,
            automation, and AI solutions built to last.
          </p>
        </div>
        <div className="space-y-6">
          <h4 className="font-label-sm uppercase tracking-wider text-on-primary-container">
            Quick Links
          </h4>
          <div className="flex flex-col gap-4 font-body-md text-body-md">
            <a className="text-on-primary-container hover:text-white transition-colors" href="#services">Services</a>
            <a className="text-on-primary-container hover:text-white transition-colors" href="#process">Process</a>
            <a className="text-on-primary-container hover:text-white transition-colors" href="#about">About</a>
            <a className="text-on-primary-container hover:text-white transition-colors" href="#contact">Contact</a>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="font-label-sm uppercase tracking-wider text-on-primary-container">
            Connect
          </h4>
          <div className="flex flex-col gap-4 font-body-md text-body-md">
            <a className="text-on-primary-container hover:text-white transition-colors" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="text-on-primary-container hover:text-white transition-colors" href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="font-label-sm uppercase tracking-wider text-on-primary-container">
            Legal
          </h4>
          <div className="flex flex-col gap-4 font-body-md text-body-md">
            <a className="text-on-primary-container hover:text-white transition-colors" href="/terms">Terms of Service</a>
            <a className="text-on-primary-container hover:text-white transition-colors" href="/privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-desktop py-8 border-t border-on-primary-container/20">
        <p className="font-body-md text-body-md text-on-primary-container text-center md:text-left opacity-70">
          &copy; 2026 NovaForge. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
