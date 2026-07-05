'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    projectType: 'Web Application',
    budget: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('sent')
      setForm({ name: '', company: '', email: '', projectType: 'Web Application', budget: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const onChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [field]: e.target.value })

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="font-label-sm text-on-surface-variant">Full Name</label>
          <input className="w-full bg-white border border-outline-variant rounded-lg py-3.5 px-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="John Doe" type="text" value={form.name} onChange={onChange('name')} required />
        </div>
        <div className="space-y-2">
          <label className="font-label-sm text-on-surface-variant">Company</label>
          <input className="w-full bg-white border border-outline-variant rounded-lg py-3.5 px-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Acme Inc." type="text" value={form.company} onChange={onChange('company')} />
        </div>
      </div>
      <div className="space-y-2">
        <label className="font-label-sm text-on-surface-variant">Work Email</label>
        <input className="w-full bg-white border border-outline-variant rounded-lg py-3.5 px-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="john@acme.com" type="email" value={form.email} onChange={onChange('email')} required />
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="font-label-sm text-on-surface-variant">Project Type</label>
          <select className="w-full bg-white border border-outline-variant rounded-lg py-3.5 px-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" value={form.projectType} onChange={onChange('projectType')}>
            <option>Web Application</option>
            <option>Automation / AI</option>
            <option>CRM / ERP</option>
            <option>Other</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="font-label-sm text-on-surface-variant">Estimated Budget (₹)</label>
          <input className="w-full bg-white border border-outline-variant rounded-lg py-3.5 px-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="₹5,000 minimum" type="number" min="5000" value={form.budget} onChange={onChange('budget')} required />
        </div>
      </div>
      <div className="space-y-2">
        <label className="font-label-sm text-on-surface-variant">Message</label>
        <textarea className="w-full bg-white border border-outline-variant rounded-lg py-3.5 px-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Tell us about your challenge..." rows={4} value={form.message} onChange={onChange('message')} required />
      </div>
      <button className="w-full bg-primary text-on-primary py-4 rounded-lg font-body-md font-semibold hover:bg-opacity-95 transition-all disabled:opacity-50" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent! We\'ll be in touch.' : status === 'error' ? 'Failed. Try again.' : 'Send Inquiry'}
      </button>
    </form>
  )
}
