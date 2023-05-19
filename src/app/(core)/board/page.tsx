// static content for board members. I could also have this set up dynamically, but that may be a future implementation
import type { NextPage } from 'next'
import BoardMembers from '@/src/app/_components/PageContent/BoardMembers'
import AboutLayout from '@/src/app/_components/Layouts/AboutLayout'

const Board: NextPage = () => {
  return (
    <AboutLayout>
      <BoardMembers />
    </AboutLayout>
  )
}

export default Board
