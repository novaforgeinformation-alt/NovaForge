export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant">
      <div className="w-full px-margin-desktop pt-[72px] pb-10 max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div
              className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-[#1a6b50] flex items-center justify-center text-on-primary font-headline-md text-xs font-bold"
              aria-label="NovaForge Logo"
            >
              NF
            </div>
            <span className="font-headline-md text-on-surface font-bold">
              NovaForge
            </span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Engineering precision for the modern enterprise. Custom software,
            automation, and AI solutions built to last.
          </p>
        </div>
        <div className="space-y-6">
          <h4 className="font-label-sm uppercase tracking-wider text-on-surface-variant">
            Quick Links
          </h4>
          <div className="flex flex-col gap-[14px] font-body-md text-body-md">
            <a
              className="text-on-surface-variant hover:text-primary transition-colors"
              href="#services"
            >
              Services
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors"
              href="#process"
            >
              Process
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors"
              href="#about"
            >
              About
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="font-label-sm uppercase tracking-wider text-on-surface-variant">
            Connect
          </h4>
          <div className="flex flex-col gap-[14px] font-body-md text-body-md">
            <a
              className="text-on-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              LinkedIn
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              Twitter
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="font-label-sm uppercase tracking-wider text-on-surface-variant">
            Legal
          </h4>
          <div className="flex flex-col gap-[14px] font-body-md text-body-md">
            <a
              className="text-on-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-desktop py-8 border-t border-outline-variant">
        <p className="font-body-md text-body-md text-on-surface-variant text-center md:text-left opacity-70">
          &copy; 2024 NovaForge. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
