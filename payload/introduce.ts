import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '최고의 웹/앱 서비스 백엔드 개발자가 되기 위해 달리는 초보 개발자',
    '컴퓨터공학과 졸업 예정의 신입 백엔드 개발자입니다. Node.js와 JSP 프로젝트를 통해 백엔드에 흥미를 느꼈고, 현재 Spring/Spring Boot와 백엔드 아키텍처·패턴을 학습 중이며 실습 위주로 구현하고 있습니다. 팀 프로젝트 경험을 바탕으로 소통과 협업을 중시하며, 사용자·비즈니스 관점을 이해하고 문제를 정의하고 개선할 수 있는 훌륭한 개발자를 목표로 하고 있습니다.',
    '아직은 부족한 점이 많지만, CS 기본기와 문제 해결 능력을 길러나가 더 나은 개발자로 성장하기 위해 열심히 공부하고 노력하고 있습니다.',
  ],
  sign: 'GeonHee',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
