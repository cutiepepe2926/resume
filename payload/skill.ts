import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'C',
      level: 3,
    },
    {
      title: 'HTML/CSS',
      level: 2,
    },
    {
      title: 'Java',
      level: 2,
    },
    {
      title: 'Android',
      level: 2,
    },
    {
      title: 'Python',
      level: 2,
    },
    {
      title: 'Javascript',
      level: 1,
    },
  ],
};

const kernelDevelopment: ISkill.Skill = {
  category: 'Frameworks',
  items: [
    {
      title: 'Spring',
      level: 1,
    },
    {
      title: 'Spring Boot',
      level: 1,
    },
  ],
};

const virtualization: ISkill.Skill = {
  category: 'Databases',
  items: [
    {
      title: 'Oracle',
      level: 2,
    },
    {
      title: 'MySQL',
      level: 1,
    },
  ],
};

const automation: ISkill.Skill = {
  category: 'Infrastructure',
  items: [
    {
      title: 'AWS',
      level: 1,
    },
    {
      title: 'Docker',
      level: 1,
    },
  ],
};

const networkSecurity: ISkill.Skill = {
  category: 'Tools & IDEs',
  items: [
    {
      title: 'Github',
    },
    {
      title: 'Git',
    },
    {
      title: 'VScode',
    },
    {
      title: 'Visual Studio',
    },
    {
      title: 'Android Studio',
    },
  ],
};

const misc: ISkill.Skill = {
  category: '자격증',
  items: [
    {
      title: '정보처리기사(예정)',
    },
    {
      title: 'SQLD(예정)',
    },
    {
      title: 'TOEIC 825',
    },
    {
      title: 'TOEIC SPEAKING IM3',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    programmingLanguages,
    kernelDevelopment,
    virtualization,
    automation,
    networkSecurity,
    misc,
  ],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
