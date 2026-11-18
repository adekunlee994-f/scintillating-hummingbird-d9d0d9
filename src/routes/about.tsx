import { createFileRoute, Link } from '@tanstack/react-router'
import { SiteShell } from '@/components/SiteShell'

export const Route = createFileRoute('/about')({ component: AboutPage })

function AboutPage() {
  return (
    <SiteShell>
      <main id="top">
        <section className="page-hero">
          <div className="breadcrumbs"><Link to="/">Home</Link> / About</div>
          <span className="eyebrow" style={{ color: '#A9CBFF' }}>Who we are</span>
          <h1>Education should lead to <span className="serif">capability.</span></h1>
          <p>ADEK Studio Academy exists to help people develop useful digital skills through practical learning, guided projects and professional direction.</p>
        </section>

        <section className="section split-section">
          <div className="split-copy">
            <span className="eyebrow">Our purpose</span>
            <h2>Learn with direction. <span className="serif">Grow with confidence.</span></h2>
            <p>We believe people should be able to make informed choices about what they learn and how those skills can support their goals. Our approach combines clear instruction with practice, feedback and opportunities to build evidence of progress.</p>
            <p>Whether a learner is exploring a first digital skill, strengthening a business or preparing for a new professional direction, the aim is to make learning relevant and actionable.</p>
          </div>
          <div className="split-image">
            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85" alt="A team collaborating around a table" loading="lazy" />
          </div>
        </section>

        <section className="section">
          <div className="section-intro">
            <div><span className="eyebrow">Founder & CEO</span><h2>Meet Adekunle <span className="serif">Emmanuel.</span></h2></div>
            <p>From healthcare to technology, his journey shaped a belief that education should prepare people to apply what they learn and create meaningful opportunities.</p>
          </div>
          <div className="content-narrow">
            <p><strong>Adekunle Emmanuel is a registered nurse, technology entrepreneur and the founder of ADEK Studio Academy.</strong> He established the academy in 2023, and it became fully operational in 2024.</p>
            <p>His professional journey began in healthcare, where he practised as a registered nurse for approximately two years. His growing curiosity about technology and its potential to transform industries and create opportunities gradually drew him towards the digital world. In 2023, he made a deliberate transition into technology, pursuing his interest in innovation, creativity and problem-solving.</p>
            <p>Since then, he has developed experience across several areas, including video editing, motion graphics design, digital marketing, 3D creative production, AI automation for content creation and AI model training.</p>
            <p>His ambition has always extended beyond personal professional growth. He became increasingly concerned about the gap between acquiring knowledge and being able to apply that knowledge meaningfully. Completing a course or obtaining a certificate does not automatically prepare someone for employment, entrepreneurship or real-world problem-solving.</p>
            <p>This conviction inspired him to establish ADEK Studio Academy. Through the academy, he is committed to developing more than technically knowledgeable students. His goal is to help people become practically competent, professionally prepared and capable of turning their skills into meaningful opportunities.</p>
            <p>He believes technology education should empower people to build projects, solve real problems, create businesses, generate income and contribute to the development of their communities. His broader vision is to see more Nigerians and Africans develop globally competitive skills, create innovative solutions and participate confidently in the global digital economy.</p>
            <p>His leadership philosophy is built around integrity, discipline, practical learning, opportunity creation and excellence. Through ADEK Studio Academy, he is working towards a future where education is measured not merely by what people know, but by what they can create, solve and accomplish with what they have learned.</p>
          </div>
        </section>

        <section className="dark-band">
          <div><span className="eyebrow" style={{ color: '#A9CBFF' }}>Our mission</span><h2>Make practical digital education <span className="serif">accessible and meaningful.</span></h2><p>To create learning experiences that help students develop relevant skills for employment, entrepreneurship, freelancing and participation in the modern digital economy.</p></div>
          <div><span className="eyebrow" style={{ color: '#A9CBFF' }}>Our vision</span><h2>Help shape the future of <span className="serif">skills education.</span></h2><p>To grow into a leading digital skills academy recognised for practical, current and learner-centred education.</p></div>
        </section>

        <section className="section">
          <div className="section-intro">
            <div><span className="eyebrow">What guides us</span><h2>How we think about <span className="serif">learning.</span></h2></div>
            <p>Our standards are grounded in the experience we want every learner to have.</p>
          </div>
          <div className="course-grid">
            {[['Relevance','Teach skills that connect to real tools, tasks and opportunities.'],['Practice','Make room for learners to try, make mistakes and improve.'],['Integrity','Communicate honestly about fees, outcomes and opportunities.'],['Growth','Encourage curiosity, continuous learning and professional discipline.'],['Guidance','Help learners understand their options and next steps.'],['Community','Create an environment where people can learn and grow together.']].map(([title, description]) => <article className="course-card" key={title}><h3>{title}</h3><p>{description}</p></article>)}
          </div>
        </section>

        <section className="cta-panel"><div><span className="eyebrow">Learn with ADEK</span><h2>Explore a course and take your next step.</h2></div><Link className="button button-dark" to="/courses">Explore courses →</Link></section>
      </main>
    </SiteShell>
  )
}
