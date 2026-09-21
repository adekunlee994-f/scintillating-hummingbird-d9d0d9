export const whatsapp = 'https://wa.me/2348123456732'

export type Course = { title: string; category: string; price?: string; duration: string; summary: string; learn: string[]; outcome: string }

export const courses: Course[] = [
  { title: 'Web Development', category: 'Advanced Technology', price: '₦300,000', duration: 'Schedule confirmed on registration', summary: 'Build modern, useful web experiences through guided practice and project work.', learn: ['Web foundations', 'Responsive interfaces', 'Project workflow'], outcome: 'Web projects, portfolio evidence and pathways into junior roles or client work.' },
  { title: '3D Animation', category: 'Advanced Technology', price: '₦300,000', duration: 'Schedule confirmed on registration', summary: 'Develop a practical foundation for creating and presenting 3D visual work.', learn: ['3D workflow', 'Animation foundations', 'Project presentation'], outcome: 'A practical project and skills relevant to creative production.' },
  { title: 'Digital Marketing', category: 'Business & Growth', price: '₦180,000', duration: '4 months · 32 classes', summary: 'Plan, create and measure campaigns with a practical, portfolio-first approach.', learn: ['Content & social strategy', 'Advertising & lead generation', 'Analytics & responsible AI'], outcome: 'Campaign projects, a capstone and portfolio-ready work.' },
  { title: 'Cybersecurity', category: 'Business & Growth', price: '₦180,000', duration: 'Schedule confirmed on registration', summary: 'Learn practical security concepts and responsible approaches to protecting digital systems.', learn: ['Security foundations', 'Risk awareness', 'Practical exercises'], outcome: 'Foundational skills for continued study and entry-level pathways.' },
  { title: 'Video Editing', category: 'Creative Digital', price: '₦160,000', duration: 'Schedule confirmed on registration', summary: 'Turn raw footage into clear, engaging stories for brands, creators and clients.', learn: ['Editing workflow', 'Story and pacing', 'Export & delivery'], outcome: 'Portfolio pieces suited to creator and client opportunities.' },
  { title: 'Graphic Design', category: 'Creative Digital', price: '₦160,000', duration: 'Schedule confirmed on registration', summary: 'Learn visual communication through hands-on brand and marketing design projects.', learn: ['Design principles', 'Brand communication', 'Production workflow'], outcome: 'A practical design portfolio for freelance and junior creative pathways.' },
  { title: 'AI Automation & Content Creation', category: 'AI Skills', duration: 'Details available on request', summary: 'Use modern AI tools responsibly to improve content and repeatable workflows.', learn: ['AI-assisted workflows', 'Content systems', 'Responsible use'], outcome: 'Practical automations and content workflows.' },
  { title: 'Artificial Intelligence / Machine Learning', category: 'AI Skills', duration: 'Details available on request', summary: 'Build a clear foundation in applied AI and machine learning concepts.', learn: ['AI foundations', 'Applied problem solving', 'Project practice'], outcome: 'A foundation for deeper technical learning.' },
  { title: 'Gen AI', category: 'AI Skills', duration: 'Details available on request', summary: 'Explore generative AI through practical, responsible use cases.', learn: ['Generative AI basics', 'Prompting practice', 'Responsible applications'], outcome: 'Useful workflows and project experience.' },
]

export const benefits = [
  ['Practical learning', 'Learn through guided exercises, assignments and projects.'],
  ['Industry-relevant skills', 'Focus on useful digital and technology workflows.'],
  ['Mentorship', 'Continue with one month of guidance after training.'],
  ['Career development', 'Build portfolios and understand professional pathways.'],
  ['Internship opportunities', 'Eligible students can access opportunities after training.'],
  ['Professional community', 'Connect with learners and industry professionals.'],
  ['Certification', 'Receive a certificate after successful completion.'],
]

export const faqs = [
  ['Who can join Adek Studio Academy?', 'People who want practical digital skills for employment, entrepreneurship, freelancing, client work or career growth.'],
  ['Are beginners welcome?', 'Yes. Course suitability and any prerequisites are confirmed before registration.'],
  ['Do I need previous experience?', 'Not for every course. Talk to the academy to confirm the right starting point for your chosen program.'],
  ['How often are classes held?', 'The current onsite intake and live online classes are held twice weekly.'],
  ['Are classes online or physical?', 'Both options are available. Choose Online or Onsite when registering.'],
  ['Where are physical classes held?', 'Tokunbo Ali, Opebi, Ikeja, Lagos State, Nigeria.'],
  ['How long is the training?', 'Duration varies by course. Digital Marketing runs for four months; other schedules are confirmed with course details.'],
  ['Do I receive a certificate?', 'Yes, after successful completion of the program.'],
  ['Is mentorship included?', 'Yes. Students receive one month of mentorship after training.'],
  ['Are internship opportunities available?', 'Internship opportunities are available to eligible students after the program; placement is not guaranteed.'],
  ['What courses are available?', 'Programs include web development, digital marketing, video editing, graphic design, 3D animation, cybersecurity and AI-focused courses.'],
  ['How much does training cost?', 'Current onsite categories are ₦300,000, ₦180,000 and ₦160,000. Courses without a listed fee are available on request.'],
  ['Can I pay online?', 'Contact the academy to receive current, verified payment instructions before making any payment.'],
  ['How do I register?', 'Complete the registration form or message the academy on WhatsApp.'],
  ['What happens after registration?', 'The academy contacts you with course, schedule and next-step information.'],
  ['Can I contact the academy before registering?', 'Yes. Use the WhatsApp button to ask questions or request course details.'],
]

export const shortCourses = ['Smartphone Video Editing & Animation', 'Six-Figure Editors Training', 'YouTube Creator Guide', 'AI Video Editing']
