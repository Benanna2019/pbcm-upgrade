// This should definitely be a static page with Janie's image and bio

import AboutLayout from '../../_components/Layouts/AboutLayout'
import FounderContent from '../../_components/PageContent/FounderContent'
import type { NextPage } from 'next'

const Founder: NextPage = () => {
  return (
    <AboutLayout>
      <FounderContent />
    </AboutLayout>
  )
}

export default Founder
