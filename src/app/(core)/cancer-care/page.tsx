import type { NextPage } from 'next'
import CancerCareContent from '../../_components/PageContent/CancerCareContent'
import EquippingLayout from '../../_components/Layouts/EquippingLayout'

const CancerCare: NextPage = () => {
  return (
    <EquippingLayout>
      <CancerCareContent />
    </EquippingLayout>
  )
}

export default CancerCare
