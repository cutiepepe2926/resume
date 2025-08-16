import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '한국공학대학교(前 한국산업기술대학교)',
      subTitle: '컴퓨터공학과/졸업예정',
      startedAt: '2020-03',
      // endedAt: '2010-02',
    },
    {
      title: '덕수고등학교',
      subTitle: '자연계 졸업 (서울 성동구)',
      startedAt: '2017-03',
      endedAt: '2020-02',
    },
  ],
};

export default education;
