import {
  AcademicCapIcon,
  BookmarkAltIcon,
  BookOpenIcon,
  UserGroupIcon,
  CalendarIcon,
  GlobeIcon,
  GlobeAltIcon,
  HeartIcon,
  NewspaperIcon,
  SpeakerphoneIcon,
  ArchiveIcon,
  // @ts-ignore
} from '@heroicons/react/outline'
import BrandonHammond from '/public/BoardMemberPhotos/brandon-hammond.jpg'
import BrotherDallas from '/public/BoardMemberPhotos/brother-dallas-wilson.jpg'
import CassandraParker from '/public/BoardMemberPhotos/cassandra-parker.jpg'
import CindyCrook from '/public/BoardMemberPhotos/cindy-crook.jpg'
import EvelynDelainHart from '/public/BoardMemberPhotos/Evelyn-Delain-hart-website.jpg'
import JacintaBryant from '/public/BoardMemberPhotos/jacinta-bryant.jpg'
import JanieWilson from '/public/BoardMemberPhotos/jdwilson21.jpg'
import JeanHamilton from '/public/BoardMemberPhotos/jean-hamilton.jpg'
import JohnFlaugher from '/public/BoardMemberPhotos/john-flaugher.jpg'
import HesterGadsden from '/public/BoardMemberPhotos/Hester-Gadsden.jpeg'
import MatthewWJeffcoat from '/public/BoardMemberPhotos/matthew-w-jeffcoa.jpg'
import DorianNixon from '/public/BoardMemberPhotos/sam.jpg'
import BenPatton from '/public/BoardMemberPhotos/ben_patton.jpeg'
import type { BoardMemberInterface } from '../types'

export const board_info: BoardMemberInterface = {
  board_members: [
    {
      name: 'Dr. Jacinta Bryant',
      photo: JacintaBryant,
      altText: 'Dr. Jacinta Bryant',
      role: 'Board Chair',
      category: 'board_member',
    },
    {
      name: 'Dr. Janie D. Wilson',
      photo: JanieWilson,
      altText: 'Dr. Janie D. Wilson', // altText from the CMS will just be the board members name
      role: 'President & Founder',
      category: 'board_member',
    },
    {
      name: 'Mr. John Flaugher',
      photo: JohnFlaugher,
      altText: 'Mr. John Flaugher',
      role: 'Board 1st Vice Chair',
      category: 'board_member',
    },
    {
      name: 'Dr. Evelyn DeLaine Hart',
      photo: EvelynDelainHart,
      altText: 'Dr. Evelyn DeLaine Hart',
      role: 'Board 2nd Vice Chair',
      category: 'board_member',
    },
    {
      name: 'Mrs. Cassandra Parker',
      photo: CassandraParker,
      altText: 'Mrs. Cassandra Parker',
      role: 'Corporate Treasurer',
      category: 'board_member',
    },
    {
      name: 'Ms. Jean Hamilton',
      photo: JeanHamilton,
      altText: 'Ms. Jean Hamilton',
      role: 'Chaplain',
      category: 'board_member',
    },
    {
      name: 'Mr. Matthew W. Jeffcoat',
      photo: MatthewWJeffcoat,
      altText: 'Mr. Matthew W. Jeffcoat',
      role: 'Board Member',
      category: 'board_member',
    },
    {
      name: 'Mr. Brandon Hammond',
      photo: BrandonHammond,
      altText: 'Brandon Hammond',
      role: 'Board Member',
      category: 'board_member',
    },

    {
      name: 'Rev. Dr. Dallas H. Wilson Jr.',
      photo: BrotherDallas,
      altText: 'Rev. Dr. Dallas H. Wilson Jr.',
      role: 'Vice President - Pastoral Counselor',
      category: 'board_member',
    },
    {
      name: 'Mrs. Hester Gadsden',
      role: 'Coorporate Secretary',
      category: 'board_member',
    },
    {
      name: 'Rev. George McCray',
      role: 'Board Member',
    },
    {
      name: 'Mrs. Holly Watts',
      role: 'Board Member',
    },
  ],
  coordinators: [
    {
      name: 'Mrs Dorian Nixon',
      photo: DorianNixon,
      altText: 'Mrs. Dorian Nixon',
      role: 'Ministry Coordinator',
      category: 'coordinator',
    },
    {
      name: 'Mr. Ben Patton',
      photo: BenPatton,
      altText: 'Mr. Ben Patton',
      role: 'Technical Advisor / Website Coordinator',
      category: 'coordinator',
    },
    {
      name: 'Mrs. Cindy Crook',
      photo: CindyCrook,
      altText: 'Mrs. Cindy Crook',
      role: 'Prayer Advisor',
      category: 'coordinator',
    },
  ],
}

export const routes: RoutesType = {
  about: [
    {
      name: 'Who We Are',
      description: 'About Peninsula Biblical Counseling Ministries',
      href: '/about',
      icon: ArchiveIcon,
    },
    {
      name: 'Our Founder & President',
      description:
        'Get a better understanding of where your traffic is coming from.',
      href: '/founder',
      icon: AcademicCapIcon,
    },
    {
      name: 'Board of Directors',
      description: 'Speak directly to your customers in a more meaningful way.',
      href: '/board',
      icon: UserGroupIcon,
    },
    {
      name: 'Our Mission & Beliefs',
      description: "Your customers' data will be safe and secure.",
      href: '/mission',
      icon: GlobeIcon,
    },
    {
      name: 'Calendar',
      description: 'View PBCM Calendar',
      href: '/calendar',
      icon: CalendarIcon,
    },
    {
      name: 'Events',
      description: 'View upcoming and past events',
      href: '/events',
      icon: SpeakerphoneIcon,
    },
  ],
  equipping: [
    {
      name: 'Equipping',
      description: 'Equipping in Biblical Counseling',
      href: '/equipping',
      icon: BookmarkAltIcon,
    },
    {
      name: 'PBCM 2022 Vision',
      description:
        'Introducing, teaching, and establishing the ministry of biblical counseling',
      href: '/pbcm-2022-vision',
      icon: GlobeAltIcon,
    },
    {
      name: 'Cancer Care Ministry',
      description: 'Raise up cancer care ministries in our local churches.',
      href: '/cancer-care',
      icon: HeartIcon,
    },
    {
      name: "Titus 2 - Women's Ministry",
      description:
        'To teach and equip women of faith to live out their Christian faith.',
      href: '/titus-2',
      icon: BookOpenIcon,
    },
    {
      name: 'Blog',
      description: 'Articles and writings to help you live by faith.',
      href: '/blog',
      icon: NewspaperIcon,
    },
  ],
  reframing: [
    {
      name: 'PBCM Evangelistic Component',
      description:
        'Somewhere people can go to understand what Peninsula BCM is doing outside of Citadel Square.',
      href: '/#',
      isExternal: false,
    },
    {
      name: 'Family Ministries',
      description:
        'Invest in children living on the Eastside by providing opportunities within and beyond the community that will open their minds and hearts to life-altering possibilities',
      href: '/#',
      isExternal: false,
    },
    {
      name: 'HELPS Ministry',
      description:
        "Hope by Equipping through Love, Provision, and Service for our 'Peninsula, Sanders Clyde' community.",
      href: '/#',
      isExternal: false,
    },
    {
      name: 'Agape',
      description:
        'View Agape Ministries of Charleston website for info on Sunday Afternoon Worship Experience',
      href: 'https://www.agapeministriesofcharleston.org/',
      isExternal: true,
    },
  ],
  forms: [
    {
      name: "FAQ's",
      description: 'Frequently asked questions about PBCM',
      href: 'https://docs.google.com/document/d/1aOPnNMW2vCjUGkri6kFPYXtkZCgQ-yq8-M5O0qAArXw/edit?usp=sharing',
    },
    {
      name: 'Consent To Counseling',
      description:
        'Consent to counseling to be completed prior to first counseling session',
      href: 'https://forms.gle/5nteDdxbonAxwvjU6',
    },
    {
      name: 'Personal Data Inventory',
      description: 'To be completed prior to first counseling session',
      href: 'https://forms.gle/2AaRLZfPx7zZZ39y5',
    },
    {
      name: 'Schedule a Session',
      description: 'In person and virtual sessions are available',
      href: 'https://pbcm.wufoo.com/forms/z1pkqkei18jvjt8/',
    },
    {
      name: 'Request Event Information',
      description:
        'Request information about upcoming Fundamentals in Biblical Counseling training',
      href: 'https://forms.gle/HexMYPPkqD2cubFX6',
    },
  ],
}

type RoutesType = {
  about: Route[]
  equipping: Route[]
  reframing: Route[]
  forms: Route[]
}

type Route = {
  name: string
  description: string
  href: string
  icon?: any
  isExternal?: boolean
}
