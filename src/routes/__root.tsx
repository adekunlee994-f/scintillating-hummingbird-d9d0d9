import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Adek Studio Academy | Digital Skills Academy in Lagos',
      },
      { name: 'description', content: 'Practical tech and digital skills training in Lagos and online. Learn web development, digital marketing, video editing, design, cybersecurity, AI and more.' },
      { name: 'keywords', content: 'digital skills academy in Lagos, tech training Lagos, digital marketing training Lagos, online digital skills training Nigeria' },
      { property: 'og:title', content: 'Adek Studio Academy — Learn. Build. Earn.' },
      { property: 'og:description', content: 'Practical digital and technology training for careers, freelancing, business and client work.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=82' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({ '@context':'https://schema.org','@type':'EducationalOrganization',name:'Adek Studio Academy',slogan:'Learn. Build. Earn.',telephone:'+2348123456732',address:{'@type':'PostalAddress',streetAddress:'Tokunbo Ali, Opebi',addressLocality:'Ikeja',addressRegion:'Lagos State',addressCountry:'NG'},sameAs:[] })}} />
        {children}
        <Scripts />
      </body>
    </html>
  )
}
