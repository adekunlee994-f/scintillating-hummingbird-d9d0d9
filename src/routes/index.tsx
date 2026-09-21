import { createFileRoute } from '@tanstack/react-router'
import { useState, type ReactNode } from 'react'
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  MapPin,
  Menu,
  MessageCircle,
  Play,
  Sparkles,
  Users,
  X,
} from 'lucide-react'

import {
  benefits,
  courses,
  faqs,
  shortCourses,
  whatsapp,
} from '@/data/academy'

import { RegistrationForm } from '@/components/RegistrationForm'

export const Route = createFileRoute('/')({
  component: Home,
})

const nav = [
  ['Courses', 'courses'],
  ['Training', 'training'],
  ['Online', 'online'],
  ['About', 'about'],
  ['Success', 'testimonials'],
  ['Contact', 'contact'],
]

const studentImg =
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=82'

const classImg =
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=82'

function Logo() {
  return (
    <a className="logo" href="#top">
      <span className="logo-mark">A</span>
      <span>
        Adek Studio
        <small>ACADEMY</small>
      </span>
    </a>
  )
}

function Cta({
  children = 'Register Now',
  gold = false,
  href = '#register',
}: {
  children?: ReactNode
  gold?: boolean
  href?: string
}) {
  return (
    <a className={`button ${gold ? 'gold' : ''}`} href={href}>
      {children}
      <ArrowRight size={17} />
    </a>
  )
}

function Home() {
  const [menu, setMenu] = useState(false)

  return (
    <>
      {/* NAVIGATION */}
      <header>
        <div className="nav-wrap">
          <Logo />

          <nav className={menu ? 'open' : ''}>
            {nav.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenu(false)}
              >
                {label}
              </a>
            ))}

            <Cta>Register Now</Cta>
          </nav>

          <button
            className="menu"
            onClick={() => setMenu(!menu)}
            aria-label="Toggle navigation"
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main id="top">

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow light">
              Practical digital skills academy · Lagos
            </p>

            <h1>
              LEARN SKILLS.
              <br />
              <em>BUILD YOUR FUTURE.</em>
            </h1>

            <p className="hero-lead">
              Learn practical digital and technology skills through
              structured training, real projects, mentorship and
              hands-on practice.
            </p>

            <div className="hero-actions">
              <Cta gold href="#courses">
                Explore Courses
              </Cta>

              <a className="button ghost" href="#training">
                How Training Works
              </a>

              <a className="text-link light" href={whatsapp}>
                <MessageCircle size={18} />
                Talk to the Academy
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src={studentImg}
              alt="Students learning digital skills together"
            />

            <div className="image-note">
              <strong>Learn. Build. Earn.</strong>
              <span>
                Practical skills for work, business and opportunities.
              </span>
            </div>
          </div>

          <div className="trust-strip">
            {[
              ['Practical Training', BookOpen],
              ['Certification', Award],
              ['Mentorship', Users],
              ['Internship Opportunities', BriefcaseBusiness],
            ].map(([title, Icon]: any) => (
              <div key={title}>
                <Icon />
                <span>{title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            INTRO / WHY ADEK
        ====================================================== */}
        <section className="section why">
          <Heading
            eye="Why Adek Studio Academy"
            title={
              <>
                DON'T JUST
                <br />
                <em>LEARN. BUILD.</em>
              </>
            }
            copy="Digital skills are most valuable when you can actually use them. Our training is designed to move you from learning concepts to practicing, building and demonstrating what you know."
          />

          <div className="benefit-grid">
            {benefits.map(([title, description], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>

          <div className="bonus">
            <Sparkles />

            <div>
              <small>THE ADEK APPROACH</small>

              <h3>
                Learn the skill.
                <br />
                Practice the skill.
                <br />
                Build with the skill.
              </h3>

              <p>
                Our goal is to give learners practical knowledge,
                structured guidance and an environment where they can
                develop useful digital skills.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            CURRENT ONSITE TRAINING
        ====================================================== */}
        <section className="campaign" id="training">
          <div>
            <p className="eyebrow">On-site professional training</p>

            <h2>
              READY TO BUILD
              <br />
              <em>A REAL TECH SKILL?</em>
            </h2>

            <p>
              Join our practical on-site training in Lagos and learn
              with structured classes, practical assignments,
              projects, mentorship and a community of learners.
            </p>

            <Cta gold href="#courses">
              View Available Courses
            </Cta>
          </div>

          <div className="campaign-grid">
            <div>
              <CalendarDays />
              <small>Next intake</small>
              <strong>October 1st, 2026</strong>
            </div>

            <div>
              <Clock3 />
              <small>Registration closes</small>
              <strong>September 30th, 2026</strong>
            </div>

            <div>
              <MapPin />
              <small>Training location</small>
              <strong>Opebi, Ikeja, Lagos</strong>
            </div>

            <div>
              <Users />
              <small>Class capacity</small>
              <strong>50 students · Twice weekly</strong>
            </div>
          </div>

          <p className="scarcity">
            Registration is subject to available spaces.
          </p>
        </section>

        {/* =====================================================
            COURSES
        ====================================================== */}
        <section className="section" id="courses">
          <Heading
            eye="Choose your direction"
            title={
              <>
                LEARN A SKILL
                <br />
                THAT CREATES <em>POSSIBILITIES.</em>
              </>
            }
            copy="Choose from technology, creative, business and artificial intelligence programs designed around practical learning."
          />

          <div className="course-grid">
            {courses.map((course, index) => (
              <article className="course-card" key={course.title}>
                <div className="course-top">
                  <span>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <small>{course.category}</small>
                </div>

                <h3>{course.title}</h3>

                <p>{course.summary}</p>

                <ul>
                  {course.learn.map((item) => (
                    <li key={item}>
                      <Check size={15} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="course-meta">
                  <span>{course.duration}</span>

                  {course.price && (
                    <strong>{course.price}</strong>
                  )}
                </div>

                <details>
                  <summary>
                    See course details
                    <ChevronDown size={16} />
                  </summary>

                  <p>
                    <b>Who it is for:</b> Anyone looking to develop
                    practical skills for career growth, freelancing,
                    business or digital opportunities.
                  </p>

                  <p>
                    <b>What you will build:</b>{' '}
                    {course.outcome}
                  </p>

                  <p>
                    <b>Training approach:</b> Guided lessons,
                    practical assignments, projects and structured
                    feedback.
                  </p>

                  <Cta href="#register">
                    Register for this course
                  </Cta>
                </details>
              </article>
            ))}
          </div>

          <div className="section-head" style={{ marginTop: '4rem' }}>
            <div>
              <p className="eyebrow">Not sure what to choose?</p>

              <h2>
                WE'LL HELP YOU
                <br />
                <em>CHOOSE.</em>
              </h2>
            </div>

            <p>
              Tell us about your goals and we can help you understand
              which training pathway fits what you want to achieve.
              <br />
              <br />
              <a className="text-link" href={whatsapp}>
                <MessageCircle size={18} />
                Chat with the academy
              </a>
            </p>
          </div>
        </section>

        {/* =====================================================
            FEATURED DIGITAL MARKETING PROGRAM
        ====================================================== */}
        <section className="dm-section">
          <div className="dm-title">
            <span>Featured program</span>

            <h2>
              DIGITAL
              <br />
              MARKETING
            </h2>

            <p>
              Learn how strategy, content, advertising, sales,
              analytics and customer relationships work together.
            </p>

            <Cta gold href="#register">
              Get Course Details
            </Cta>
          </div>

          <div className="dm-content">
            <div className="metrics">
              <div>
                <strong>4</strong>
                <span>months</span>
              </div>

              <div>
                <strong>32</strong>
                <span>classes</span>
              </div>

              <div>
                <strong>128</strong>
                <span>learning hours</span>
              </div>
            </div>

            <p>Two classes per week · Four hours per class</p>

            <div className="module-list">
              {[
                'Digital marketing foundations, opportunities, branding & audience research',
                'Content strategy, social media & LinkedIn',
                'Sales, closing, customer relationships & retention',
                'Email marketing, lead generation & conversion',
                'Paid advertising, campaign management & analytics',
                'Practical portfolio projects, assignments & capstone',
              ].map((module, index) => (
                <details key={module} open={index === 0}>
                  <summary>
                    <span>
                      Module {String(index + 1).padStart(2, '0')}
                    </span>

                    {module}

                    <ChevronDown />
                  </summary>

                  <p>
                    Practical lessons, exercises and assignments
                    designed to help students apply the topic in a
                    real-world context.
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PRICING
        ====================================================== */}
        <section className="section pricing">
          <Heading
            eye="Training investment"
            title={
              <>
                CHOOSE YOUR
                <br />
                <em>SKILL PATH.</em>
              </>
            }
            copy="Course fees vary by program. The course cards above show the available pricing supplied by the academy."
          />

          <div className="price-grid">
            <article>
              <small>Advanced technology</small>

              <h3>FROM ₦300,000</h3>

              <p>
                Web Development and selected advanced technology
                programs.
              </p>

              <div className="editable-offer">
                <span>
                  Practical training <b>✓</b>
                </span>

                <span>
                  Projects <b>✓</b>
                </span>

                <span>
                  Mentorship <b>✓</b>
                </span>
              </div>

              <Cta href="#courses">
                View Courses
              </Cta>
            </article>

            <article className="featured">
              <small>Business & technology</small>

              <h3>FROM ₦180,000</h3>

              <p>
                Digital Marketing, Cybersecurity and selected
                professional programs.
              </p>

              <div className="editable-offer">
                <span>
                  Practical training <b>✓</b>
                </span>

                <span>
                  Projects <b>✓</b>
                </span>

                <span>
                  Mentorship <b>✓</b>
                </span>
              </div>

              <Cta href="#courses">
                View Courses
              </Cta>
            </article>

            <article>
              <small>Creative digital</small>

              <h3>FROM ₦160,000</h3>

              <p>
                Video Editing, AI-powered creative training and
                selected creative programs.
              </p>

              <div className="editable-offer">
                <span>
                  Practical training <b>✓</b>
                </span>

                <span>
                  Projects <b>✓</b>
                </span>

                <span>
                  Mentorship <b>✓</b>
                </span>
              </div>

              <Cta href="#courses">
                View Courses
              </Cta>
            </article>
          </div>

          <p
            style={{
              textAlign: 'center',
              marginTop: '1.5rem',
              opacity: 0.75,
            }}
          >
            Contact the academy to confirm the current fee,
            schedule and available intake before payment.
          </p>
        </section>

        {/* =====================================================
            TRAINING JOURNEY
        ====================================================== */}
        <section className="experience">
          <div className="experience-image">
            <img
              src={classImg}
              alt="Students learning in a practical classroom"
              loading="lazy"
            />

            <span>YOUR JOURNEY</span>
          </div>

          <div className="journey">
            <p className="eyebrow light">
              What happens after you register
            </p>

            <h2>
              FROM INTEREST
              <br />
              TO <em>REAL SKILLS.</em>
            </h2>

            {[
              [
                'Register',
                'Choose your course and complete the registration process.',
              ],
              [
                'Learn',
                'Attend structured classes and learn from practical lessons.',
              ],
              [
                'Practice',
                'Complete assignments and apply what you learn.',
              ],
              [
                'Build',
                'Work on practical projects that demonstrate your skills.',
              ],
              [
                'Mentorship',
                'Continue with structured mentorship and guidance.',
              ],
              [
                'Opportunities',
                'Explore internship, freelancing, business and career pathways.',
              ],
              [
                'Certification',
                'Receive your certificate after successful completion of the program.',
              ],
            ].map(([title, description], index) => (
              <div className="journey-step" key={title}>
                <span>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            ONLINE TRAINING
        ====================================================== */}
        <section className="online" id="online">
          <div className="online-intro">
            <p className="eyebrow light">
              Learn from wherever you are
            </p>

            <h2>
              BUILD YOUR SKILLS
              <br />
              <em>ONLINE.</em>
            </h2>

            <p>
              Can't attend physically? Explore our online learning
              options and speak with the academy about available
              courses, schedules and fees.
            </p>

            <Cta gold href={whatsapp}>
              Ask About Online Training
            </Cta>
          </div>

          <div className="online-cards">
            <article>
              <span>Live programs</span>

              <h3>Academy Online Training</h3>

              <p>
                Live learning, practical projects, mentorship,
                community and certification after successful
                completion.
              </p>

              <dl>
                <div>
                  <dt>Schedule</dt>
                  <dd>Twice weekly</dd>
                </div>

                <div>
                  <dt>Course & fee</dt>
                  <dd>Confirm with academy</dd>
                </div>
              </dl>

              <a href={whatsapp}>
                Request online course list
                <ArrowRight />
              </a>
            </article>

            <div className="short-list">
              <small>Short courses & digital products</small>

              {shortCourses.map((course) => (
                <a href={whatsapp} key={course}>
                  <span>
                    {course}
                    <small>Contact academy for current details</small>
                  </span>

                  <ArrowRight />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            ABOUT
        ====================================================== */}
        <section className="section about" id="about">
          <div className="about-number">
            A/<span>01</span>
          </div>

          <div>
            <p className="eyebrow">About Adek Studio Academy</p>

            <h2>
              BETTER SKILLS.
              <br />
              <em>BETTER DECISIONS.</em>
            </h2>

            <p className="large-copy">
              Adek Studio Academy exists to help people develop useful
              digital skills and make better decisions about what
              they learn.
            </p>

            <div className="about-columns">
              <div>
                <h3>Our mission</h3>

                <p>
                  To create practical learning experiences that
                  support employability, entrepreneurship,
                  freelancing and confident participation in modern
                  technology.
                </p>
              </div>

              <div>
                <h3>Our vision</h3>

                <p>
                  To become one of the world's leading digital skills
                  academies and modernize skills education with
                  practical, relevant digital skills.
                </p>
              </div>

              <div>
                <h3>Our focus</h3>

                <p>
                  Practical digital education, useful technology
                  skills, disciplined learning and opportunities for
                  people to apply what they know.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FOUNDER / TRAINER
        ====================================================== */}
        <section className="trainer">
          <div className="trainer-photo">
            <div className="photo-placeholder">
              <span>Adek Studio Academy</span>
              <small>
                Founder & Lead Trainer
              </small>
            </div>

            <div className="thumbs">
              <span>Founder</span>
              <span>Teaching</span>
            </div>
          </div>

          <div>
            <p className="eyebrow light">Meet the academy</p>

            <h2>
              LEARN FROM
              <br />
              <em>REAL EXPERIENCE.</em>
            </h2>

            <p>
              Adek Studio Academy combines digital skills training,
              practical projects, technology and business-focused
              learning to help students develop skills they can
              actually apply.
            </p>

            <div className="profile-slots">
              <span>Digital Marketing</span>
              <span>Video & AI</span>
              <span>Technology</span>
              <span>Practical Training</span>
            </div>

            <Cta gold href="#register">
              Start Learning
            </Cta>
          </div>
        </section>

        {/* =====================================================
            STUDENT SUCCESS
        ====================================================== */}
        <section className="section testimonials" id="testimonials">
          <Heading
            eye="Student success"
            title={
              <>
                LEARN.
                <br />
                BUILD. <em>SHOW IT.</em>
              </>
            }
            copy="Your skills become more valuable when you can demonstrate what you know. This section is designed to showcase verified student work, testimonials and success stories."
          />

          <div className="testimonial-empty">
            {[
              [
                MessageCircle,
                'Student testimonials',
                'Verified student feedback, names and course details will appear here.',
              ],
              [
                Play,
                'Student projects',
                'Real projects created by Adek Studio Academy students.',
              ],
              [
                Award,
                'Success stories',
                'Verified milestones, achievements and learning journeys.',
              ],
            ].map(([Icon, title, description]: any) => (
              <div key={title}>
                <Icon />

                <h3>{title}</h3>

                <p>{description}</p>
              </div>
            ))}
          </div>

          <Cta gold href="#register">
            Start Your Own Journey
          </Cta>
        </section>

        {/* =====================================================
            FAQ
        ====================================================== */}
        <section className="section faq">
          <div className="faq-title">
            <p className="eyebrow">Questions, answered</p>

            <h2>
              GOOD TO
              <br />
              <em>KNOW.</em>
            </h2>

            <a className="text-link" href={whatsapp}>
              <MessageCircle />
              Talk to the academy
            </a>
          </div>

          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <ChevronDown />
                </summary>

                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* =====================================================
            REGISTRATION
        ====================================================== */}
        <section className="register" id="register">
          <div className="register-copy">
            <p className="eyebrow light">Ready to start?</p>

            <h2>
              YOUR NEXT SKILL
              <br />
              <em>STARTS HERE.</em>
            </h2>

            <p>
              Tell us what you want to learn and the academy can
              guide you through the available course, schedule,
              training format and registration process.
            </p>

            <div>
              <MapPin />

              <span>
                Tokunbo Ali, Opebi, Ikeja,
                <br />
                Lagos State, Nigeria
              </span>
            </div>

            <div>
              <MessageCircle />

              <a href={whatsapp}>
                +234 812 345 6732
              </a>
            </div>
          </div>

          <RegistrationForm />
        </section>

        {/* =====================================================
            LOCATION
        ====================================================== */}
        <section className="location" id="contact">
          <div>
            <p className="eyebrow">Visit the academy</p>

            <h2>
              OPEBI,
              <br />
              <em>IKEJA.</em>
            </h2>

            <p>
              Tokunbo Ali, Opebi, Ikeja,
              <br />
              Lagos State, Nigeria
            </p>

            <a
              className="button"
              href="https://www.google.com/maps/search/?api=1&query=Tokunbo+Ali+Opebi+Ikeja+Lagos"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
              <ArrowRight />
            </a>
          </div>

          <div className="map-placeholder">
            <MapPin />

            <strong>Training Location</strong>

            <span>
              Tokunbo Ali, Opebi, Ikeja, Lagos
            </span>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <Footer />

      <a className="float-wa" href={whatsapp}>
        <MessageCircle />
        <span>WhatsApp</span>
      </a>

      <a className="mobile-cta" href="#register">
        Register Now
        <ArrowRight />
      </a>
    </>
  )
}

function Heading({
  eye,
  title,
  copy,
}: {
  eye: string
  title: ReactNode
  copy: string
}) {
  return (
    <div className="section-head">
      <div>
        <p className="eyebrow">{eye}</p>
        <h2>{title}</h2>
      </div>

      <p>{copy}</p>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div>
          <Logo />

          <p>Learn. Build. Earn.</p>

          <a className="button gold" href={whatsapp}>
            Chat on WhatsApp
          </a>
        </div>

        <div>
          <strong>Quick links</strong>

          {nav.map(([label, id]) => (
            <a href={`#${id}`} key={id}>
              {label}
            </a>
          ))}
        </div>

        <div>
          <strong>Courses</strong>

          {[
            'Web Development',
            'AI Automation & Content Creation',
            'Cybersecurity',
            'Video Editing',
            'Graphics Designing',
            '3D Animation',
            'Gen AI',
            'Artificial Intelligence & Machine Learning',
            'Digital Marketing',
          ].map((course) => (
            <a href="#courses" key={course}>
              {course}
            </a>
          ))}
        </div>

        <div>
          <strong>Contact</strong>

          <span>
            Tokunbo Ali, Opebi, Ikeja,
            <br />
            Lagos State, Nigeria
          </span>

          <a href={whatsapp}>
            +234 812 345 6732
          </a>

          <a href={whatsapp}>
            Chat with Adek Studio Academy
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © 2026 Adek Studio Academy. All rights reserved.
        </span>

        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
