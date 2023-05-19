import Image from 'next/image'
import { board_info } from '@/src/utils/constants'
import type { PBCMBoardInfo } from '@/src/utils/types'

export default function BoardMembers() {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Board of Directors
            </h2>
            <p className="text-xl text-gray-500">
              Each of you has been blessed with one of God’s many wonderful
              gifts to be used in the service of others. So, use your gift well!
              - 1Peter 4:10 (CEV)
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3"
          >
            {board_info.board_members.map((person: PBCMBoardInfo) => (
              <li key={person.name}>
                <div className="space-y-6">
                  {person.photo && person.category === 'board_member' ? (
                    <>
                      <Image
                        className="mx-auto h-60 w-48 rounded-md xl:h-72 xl:w-60"
                        src={person.photo ? person.photo : ''}
                        alt={person.altText as string}
                      />
                      <div className="space-y-2">
                        <div className="space-y-1 text-lg font-medium leading-6">
                          <h3>{person.name}</h3>
                          <p className="text-indigo-600">{person.role}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* PBCM Coordinators */}

          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Coordinators
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3"
          >
            {board_info.coordinators.map((person) => (
              <li key={person.name}>
                <div className="space-y-6">
                  <>
                    <Image
                      className="mx-auto h-60 w-48 rounded-xl xl:h-72 xl:w-60"
                      src={person.photo ? person.photo : ''}
                      alt={person.altText as string}
                    />
                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>{person.name}</h3>
                        <p className="text-indigo-600">{person.role}</p>
                      </div>
                    </div>
                  </>
                </div>
              </li>
            ))}
          </ul>

          {/* PBCM Board Members without Photo's */}

          <ul
            role="list"
            className=" mx-auto flex flex-col justify-around sm:space-y-0 lg:max-w-5xl"
          >
            {' '}
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Other Board Members
            </h2>
            {board_info.board_members.map((person) => (
              <li key={person.name}>
                <div className="space-y-6">
                  {!person.photo ? (
                    <div className="mt-6 space-y-6">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>{person.name}</h3>
                        <p className="text-indigo-600">{person.role}</p>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
