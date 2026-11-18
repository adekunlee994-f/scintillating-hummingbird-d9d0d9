import { useState, type FormEvent } from 'react'
import { courses, academy } from '@/data/academy'

export function RegistrationForm() {
  const [state, setState] = useState<'idle'|'sending'|'success'|'error'>('idle')
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState('sending')
    const form = event.currentTarget
    const body = new URLSearchParams(new FormData(form) as any).toString()
    try {
      const response = await fetch('/__forms.html', { method:'POST', headers:{'Content-Type':'application/x-www-form-urlencoded'}, body })
      if (!response.ok) throw new Error('Submission failed')
      form.reset()
      setState('success')
    } catch { setState('error') }
  }
  if (state === 'success') return <div className="form-feedback success" role="status"><span className="eyebrow">Enquiry received</span><h2>Thank you.</h2><p>Your details have been submitted. The academy will follow up with course information and next steps.</p><a className="button button-dark" href={academy.whatsapp} target="_blank" rel="noreferrer">Continue on WhatsApp ↗</a></div>
  return <form name="academy-registration" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit} className="admissions-form">
    <input type="hidden" name="form-name" value="academy-registration"/>
    <p hidden><label>Leave this empty <input name="bot-field"/></label></p>
    <div className="form-heading"><span className="eyebrow">Start here</span><h2>Tell us what you want to learn.</h2><p>Share a few details and we’ll help you with the current course guide and schedule.</p></div>
    <div className="form-grid">
      <label>Full name<input name="fullName" autoComplete="name" placeholder="Your full name" required/></label>
      <label>Phone / WhatsApp<input name="phone" type="tel" autoComplete="tel" placeholder="+234..." required/></label>
      <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required/></label>
      <label>Course of interest<select name="course" required defaultValue=""><option value="" disabled>Select a course</option>{courses.map(course=><option key={course.slug} value={course.title}>{course.title}</option>)}</select></label>
      <label>Preferred learning format<select name="format" required defaultValue=""><option value="" disabled>Choose one</option><option>Onsite</option><option>Online</option><option>Need guidance</option></select></label>
      <label>Experience level<select name="experience" required defaultValue=""><option value="" disabled>Choose one</option><option>Beginner</option><option>Some experience</option><option>Experienced</option></select></label>
      <label className="form-wide">What would you like to achieve?<textarea name="goals" rows={4} placeholder="Tell us briefly about your goals (optional)"/></label>
      <label className="consent form-wide"><input type="checkbox" name="privacyConsent" value="yes" required/><span>I agree that ADEK Studio Academy may use these details to respond to my enquiry and provide information about the course I selected. See the <a href="/privacy">privacy notice</a>.</span></label>
      {state==='error'&&<p className="form-error form-wide" role="alert">We couldn’t submit the form. Please try again or contact us on WhatsApp.</p>}
      <button className="button button-dark form-wide" type="submit" disabled={state==='sending'}>{state==='sending'?'Sending…':'Submit enquiry →'}</button>
    </div>
  </form>
}