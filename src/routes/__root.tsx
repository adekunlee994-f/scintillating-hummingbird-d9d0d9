import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet:'utf-8' },
      { name:'viewport', content:'width=device-width, initial-scale=1' },
      { title:'ADEK Studio Academy | Practical Digital Skills Training in Lagos' },
      { name:'description', content:'Build practical digital and technology skills with ADEK Studio Academy in Ikeja, Lagos, or online. Explore technology, creative, marketing and AI courses.' },
      { name:'theme-color', content:'#2c183d' },
      { property:'og:title', content:'ADEK Studio Academy — Learn Skills That Move You Forward' },
      { property:'og:description', content:'Practical digital skills training, real projects and guidance for your next step.' },
      { property:'og:type', content:'website' },
      { property:'og:url', content:'https://scintillating-hummingbird-d9d0d9.netlify.app/' },
      { property:'og:image', content:'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=82' },
      { name:'twitter:card', content:'summary_large_image' },
    ],
    links:[{rel:'icon',href:'/favicon.svg',type:'image/svg+xml'}],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const structuredData = {
    '@context':'https://schema.org',
    '@type':'EducationalOrganization',
    name:'ADEK Studio Academy',
    slogan:'Practical learning for a changing digital world.',
    telephone:'+234805935721',
    address:{'@type':'PostalAddress',streetAddress:'Tokunbo Ali, Opebi',addressLocality:'Ikeja',addressRegion:'Lagos State',addressCountry:'NG'},
    url:'https://scintillating-hummingbird-d9d0d9.netlify.app/',
  }
  return <html lang="en"><head><HeadContent/></head><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/>
    {children}<Scripts/>
  </body></html>
}
