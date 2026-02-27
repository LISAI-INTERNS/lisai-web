import ServicesHero from './Serviceshero'
import OurSecurityServices from './Oursecurityservices'
import HowWeProtect from './Howweprotect'
import IndustriesWeProtect from './Industriesweprotect'
import WhatMakesDifferent from './Whatmakesdifferent'
import TalkToTeam from './Talktoteam'

export default function ServicesPage() {
  return (
    <div className="font-sans">
      <ServicesHero />
      <OurSecurityServices />
      <HowWeProtect />
      <IndustriesWeProtect />
      <WhatMakesDifferent />
      <TalkToTeam />
    </div>
  )
}
