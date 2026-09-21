import { useState, type FormEvent } from 'react'
import { courses, whatsapp } from '@/data/academy'

export function RegistrationForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setState('sending')
    const body = new URLSearchParams(new FormData(event.currentTarget) as any).toString()
    try {
      const response = await fetch('/__forms.html', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body })
      if (!response.ok) throw new Error('Submission failed')
      setState('success'); event.currentTarget.reset()
    } catch { setState('error') }
  }
  if (state === 'success') return <div className="form-success" role="status"><span>Registration received</span><h3>Thank you for taking the first step.</h3><p>The academy has received your details. Continue on WhatsApp if you need an immediate response.</p><a className="button gold" href={whatsapp}>Continue on WhatsApp</a></div>
  return <form name="academy-registration" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit} className="registration-form">
    <input type="hidden" name="form-name" value="academy-registration"/><p hidden><label>Do not fill <input name="bot-field"/></label></p>
    <label>Full name<input name="fullName" autoComplete="name" required/></label>
    <label>Phone number<input name="phone" type="tel" autoComplete="tel" required/></label>
    <label>Email address<input name="email" type="email" autoComplete="email" required/></label>
    <label>Course interested in<select name="courseInterested" required defaultValue=""><option value="" disabled>Select a course</option>{courses.map(c=><option key={c.title}>{c.title}</option>)}</select></label>
    <fieldset><legend>Training type</legend><label className="radio"><input type="radio" name="trainingType" value="Onsite" required/> Onsite</label><label className="radio"><input type="radio" name="trainingType" value="Online"/> Online</label></fieldset>
    <label>Preferred course<input name="preferredCourse" placeholder="Tell us your first choice" required/></label>
    <label>Experience level<select name="experienceLevel" required defaultValue=""><option value="" disabled>Select level</option><option>Beginner</option><option>Some experience</option><option>Experienced</option></select></label>
    <label className="wide">Message<textarea name="message" rows={4} placeholder="Questions, goals or preferred schedule"/></label>
    {state === 'error' && <p className="form-error" role="alert">We couldn’t submit this right now. Please try again or use WhatsApp.</p>}
    <button className="button gold wide" disabled={state === 'sending'}>{state === 'sending' ? 'Submitting…' : 'Submit Registration'}</button>
  </form>
}
