import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
export const Route=createFileRoute('/$')({component:NotFound})
function NotFound(){return <main style={{minHeight:'100vh',display:'grid',placeItems:'center',background:'#24102f',color:'white',padding:'2rem',textAlign:'center'}}><div><p className="eyebrow light">404 · Page not found</p><h1 style={{fontFamily:'League Spartan',fontSize:'clamp(4rem,12vw,10rem)',lineHeight:.8,margin:'0 0 2rem'}}>WRONG TURN.<br/><em style={{color:'#f4c64e'}}>FRESH START.</em></h1><p>The page you requested does not exist or has moved.</p><a className="button gold" href="/"><ArrowLeft size={17}/> Return to the academy</a></div></main>}
