import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, ArrowUpRight, BookOpen, BriefcaseBusiness, CheckCircle2, GraduationCap, MonitorPlay, Sparkles } from 'lucide-react'
import { SiteShell } from '@/components/SiteShell'
import { academy, courses, faqs } from '@/data/academy'

export const Route = createFileRoute('/')({ component: Home })
const heroImage = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=85'
const classImage = 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85'

function Home() {
  return <SiteShell>
    <main id="top">
      <section className="hero">
        <div className="hero-copy"><span className="eyebrow" style={{color:'#d6f06b'}}>ADEK Studio Academy · Lagos & Online</span>
          <h1>Build skills.<br/><span className="serif">Create options.</span></h1>
          <p className="hero-lead">Practical digital and technology training for people ready to grow, create, work and participate confidently in the digital economy.</p>
          <div className="hero-actions"><Link className="button" to="/courses">Explore our courses <ArrowRight size={17}/></Link><Link className="button-outline" to="/about">Get to know ADEK</Link></div>
        </div>
        <div className="hero-media"><img src={heroImage} alt="Students learning and collaborating in a classroom"/><div className="hero-stamp"><b>Learn by doing.</b><span>Build practical skills and work you can demonstrate.</span></div></div>
        <div className="hero-meta">LEARN WITH PURPOSE · PRACTISE WITH CONFIDENCE · KEEP GROWING</div>
      </section>
      <div className="trust-row"><span><i/> Practical learning</span><span><i/> Project-based training</span><span><i/> Mentorship & guidance</span><span><i/> Onsite and online options</span></div>
      <section className="section">
        <div className="section-intro"><div><span className="eyebrow">Find your direction</span><h2>Skills for the work <span className="serif">ahead.</span></h2></div><p>Choose a learning path that matches your interests and goals. Explore technology, creative production, marketing and emerging AI skills.</p></div>
        <div className="course-grid">{courses.slice(0,6).map((course,i)=><article className="course-card" key={course.slug}><div className="course-card-top"><span className="course-number">0{i+1}</span><span className="course-tag">{course.category}</span></div><h3>{course.title}</h3><p>{course.summary}</p><div className="course-card-bottom"><strong>{course.price}</strong><Link className="arrow-link" to="/course/$courseId" params={{courseId:course.slug}}>Explore course ↗</Link></div></article>)}</div>
        <p style={{marginTop:'2rem'}}><Link className="arrow-link" to="/courses">View all courses and learning paths →</Link></p>
      </section>
      <section className="dark-band"><div><span className="eyebrow" style={{color:'#d6f06b'}}>A closer look · Digital Marketing</span><h2>Learn to turn <span className="serif">attention</span> into action.</h2><p>Build the strategic, creative and analytical skills to plan campaigns, communicate value and understand what moves customers.</p><div className="stats"><div><strong>4</strong><span>Months</span></div><div><strong>32</strong><span>Classes</span></div><div><strong>128</strong><span>Learning hours</span></div></div><p>Twice weekly · Four hours per class</p><Link className="button" to="/course/$courseId" params={{courseId:'digital-marketing'}}>Explore Digital Marketing <ArrowRight size={16}/></Link></div>
        <div><span className="eyebrow" style={{color:'#d6f06b'}}>What you will work through</span><ul className="module-list">{['Marketing foundations, audience research and positioning','Content, social media and brand communication','Sales conversations, lead nurturing and retention','Websites, user experience, SEO and email marketing','Paid advertising, analytics and campaign reporting','Portfolio projects and a practical capstone'].map(x=><li key={x}>{x}</li>)}</ul></div>
      </section>
      <section className="section split-section"><div className="split-image"><img src={classImage} alt="Instructor supporting learners during a practical training session" loading="lazy"/></div><div className="split-copy"><span className="eyebrow">How we approach learning</span><h2>Less passive theory. <span className="serif">More practice.</span></h2><p>We believe useful skills grow through guided practice, feedback and the confidence that comes from making something yourself.</p><ul className="check-list"><li>Understand the concepts behind the tools</li><li>Practise with guided exercises and assignments</li><li>Build projects that demonstrate your progress</li><li>Get direction on portfolios and professional next steps</li></ul><Link className="arrow-link" to="/training">Explore how training works →</Link></div></section>
      <section className="section" style={{paddingTop:0}}><div className="section-intro"><div><span className="eyebrow">The ADEK approach</span><h2>A learning experience built around <span className="serif">progress.</span></h2></div><p>Our goal is to help learners make informed choices, build relevant capabilities and take meaningful next steps.</p></div><div className="course-grid">
        {[{icon:<BookOpen/>,title:'Practical classes',copy:'Learn through exercises, assignments and course projects.'},{icon:<GraduationCap/>,title:'Guided development',copy:'Get support as you build confidence and improve your work.'},{icon:<BriefcaseBusiness/>,title:'Career awareness',copy:'Understand how skills connect to jobs, freelancing and business.'}].map(x=><article className="course-card" key={x.title}><div className="course-card-top" style={{color:'var(--plum)'}}>{x.icon}<Sparkles size={18}/></div><h3>{x.title}</h3><p>{x.copy}</p></article>)}</div></section>
      <section className="cta-panel"><div><span className="eyebrow">Take your next step</span><h2>Not sure which course is right for you?</h2></div><Link className="button button-dark" to="/contact">Talk to the academy <ArrowUpRight size={17}/></Link></section>
      <section className="section" style={{paddingTop:0}}><div className="section-intro"><div><span className="eyebrow">Frequently asked questions</span><h2>Before you <span className="serif">begin.</span></h2></div><p>Have another question? Contact the academy and we’ll help you find the information you need.</p></div><div className="faq-list">{faqs.slice(0,5).map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
      <section className="page-hero" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'2rem',flexWrap:'wrap'}}><div><span className="eyebrow" style={{color:'#d6f06b'}}>Come learn with us</span><h2 style={{fontSize:'clamp(2.4rem,5vw,4.5rem)'}}>Your next chapter can start with a skill.</h2><p>Visit us in Opebi, Ikeja, or ask about online learning.</p></div><Link className="button" to="/register">Start an enquiry <ArrowRight size={16}/></Link></section>
    </main>
  </SiteShell>
}
