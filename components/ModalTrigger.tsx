'use client'

import { useContact } from '@/lib/contact-context'
import Modal from './Modal'
import ContactForm from './ContactForm'

export default function ModalTrigger() {
  const { open, setOpen } = useContact()

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-headline-lg text-headline-lg">Send an Inquiry</h2>
          <button
            className="text-on-surface-variant hover:text-on-surface text-2xl leading-none"
            onClick={() => setOpen(false)}
          >
            &times;
          </button>
        </div>
        <ContactForm />
      </div>
    </Modal>
  )
}
