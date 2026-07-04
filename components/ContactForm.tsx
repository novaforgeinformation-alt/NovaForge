'use client'

export default function ContactForm() {
  return (
    <form
      className="space-y-5"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="font-label-sm text-on-surface-variant">
            Full Name
          </label>
          <input
            className="w-full bg-white border border-outline-variant rounded-lg py-3.5 px-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
            placeholder="John Doe"
            type="text"
          />
        </div>
        <div className="space-y-2">
          <label className="font-label-sm text-on-surface-variant">
            Company
          </label>
          <input
            className="w-full bg-white border border-outline-variant rounded-lg py-3.5 px-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
            placeholder="Acme Inc."
            type="text"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="font-label-sm text-on-surface-variant">
          Work Email
        </label>
        <input
          className="w-full bg-white border border-outline-variant rounded-lg py-3.5 px-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
          placeholder="john@acme.com"
          type="email"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="font-label-sm text-on-surface-variant">
            Project Type
          </label>
          <select className="w-full bg-white border border-outline-variant rounded-lg py-3.5 px-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all">
            <option>Web Application</option>
            <option>Automation / AI</option>
            <option>CRM / ERP</option>
            <option>Other</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="font-label-sm text-on-surface-variant">
            Estimated Budget
          </label>
          <select className="w-full bg-white border border-outline-variant rounded-lg py-3.5 px-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all">
            <option>$10k - $25k</option>
            <option>$25k - $50k</option>
            <option>$50k+</option>
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <label className="font-label-sm text-on-surface-variant">
          Message
        </label>
        <textarea
          className="w-full bg-white border border-outline-variant rounded-lg py-3.5 px-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
          placeholder="Tell us about your challenge..."
          rows={4}
        />
      </div>
      <button
        className="w-full bg-primary text-on-primary py-4 rounded-lg font-body-md font-semibold hover:bg-opacity-95 transition-all mt-2"
        type="submit"
      >
        Send Inquiry
      </button>
    </form>
  )
}
