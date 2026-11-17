import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { academy } from '@/data/academy'

const links = [{ label:'Home', to:'/' },{ label:'About', to:'/about' },{ label:'Courses', to:'/courses' },{ label:'Training', to:'/training' },{ label:'Contact', to:'/contact' }]

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return <>
    <div className="announcement">Skills That Create Opportunities.</div>
    <header className="site-header"><div className="nav-inner">
      <Link to="/" className="brand" onClick={() => setOpen(false)} aria-label="ADEK Studio Academy home"><span className="brand-symbol">A</span><span className="brand-name">ADEK <small>STUDIO ACADEMY</small></span></Link>
      <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">{links.map(link => <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>{link.label}</Link>)}<Link className="nav-cta" to="/register" onClick={() => setOpen(false)}>Apply now <ArrowUpRight size={16}/></Link></nav>
    </div></header>
    {children}
    <footer className="site-footer"><div className="footer-top">
      <div className="footer-brand"><Link to="/" className="brand"><span className="brand-symbol">A</span><span className="brand-name">ADEK <small>STUDIO ACADEMY</small></span></Link><p>Learn. Practise. Become market-ready.</p><a className="footer-whatsapp" href={academy.whatsapp} target="_blank" rel="noreferrer">Chat with the academy ↗</a></div>
      <div><h3>Explore</h3><Link to="/about">About the academy</Link><Link to="/courses">Our courses</Link><Link to="/training">Training options</Link><Link to="/register">Registration</Link></div>
      <div><h3>Get in touch</h3><p>{academy.address}</p><a href={academy.whatsapp} target="_blank" rel="noreferrer">{academy.phone}</a><Link to="/contact">Contact details</Link></div>
    </div><div className="footer-bottom"><span>© {new Date().getFullYear()} ADEK Studio Academy. All rights reserved.</span><Link to="/privacy">Privacy notice</Link><a href="#top">Back to top ↑</a></div></footer>
    <a className="floating-whatsapp" href={academy.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with ADEK Studio Academy on WhatsApp">WhatsApp ↗</a>
  </>
}