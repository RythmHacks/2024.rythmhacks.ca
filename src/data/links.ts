interface Link {
  name: string;
  href: string;
}

const LinkData = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'Event Info',
    href: '#info',
  },
  {
    name: 'FAQ',
    href: '#faq',
  },
  {
    name: 'Sponsors',
    href: '#sponsors',
  },
  {
    name: 'Team',
    href: '#team',
  }
] as Link[];

export default LinkData;