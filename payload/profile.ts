import { faBlog, faEnvelope, faFileArchive /* faPhone */ } from '@fortawesome/free-solid-svg-icons';
import { /* faFacebook, */ faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/selfpic.png';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '이건희',
    small: '백엔드 개발자 지망생',
  },
  contact: [
    {
      title: 'kunhee2926@naver.com',
      link: 'mailto:kunhee2926@naver.com',
      icon: faEnvelope,
    },
    {
      title: 'https://cutiepepe2926.tistory.com',
      link: 'https://cutiepepe2926.tistory.com',
      icon: faBlog,
    },
    {
      link: 'https://github.com/cutiepepe2926',
      icon: faGithub,
    },
    {
      title: 'https://notion.so/kunhee2926',
      link:
        'https://almondine-collard-76c.notion.site/259935c027f98082860ff6fbe872868e?source=copy_link',
      icon: faFileArchive,
    },
  ],
  notice: {
    title: '읽어주셔서 감사합니다.',
    icon: faBell,
  },
};

export default profile;
