import Chat from 'assets/widget/chat.svg';
import Community from 'assets/widget/community.svg';
import Github from 'assets/widget/github.svg';

export default {
  widgets: [
    {
      id: 1,
      iconSrc: Chat,
      altText: 'Community',
      title: 'Join the Community',
      description:
        '',
    },
    {
      id: 2,
      iconSrc: Community,
      altText: 'Chat',
      title: 'Chat Communication',
      description:
        '',
    },
    {
      id: 3,
      iconSrc: Github,
      altText: 'Github',
      title: 'Github Access',
      description:
        '',
    },
  ],
  menuItem: [
    {
      path: 'home',
      label: 'Home',
    },
    {
      path: 'about',
      label: 'About',
    },
    {
      path: 'team-section',
      label: 'Team',
    },
    {
      path: 'contactus',
      label: 'Contact',
    },
  ],
};
