import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '졸업작품 팀프로젝트',
      startedAt: '2025-01',
      where: '온/오프라인 태블릿 PC 학습 지원 앱',
      descriptions: [
        {
          content: '안드로이드 kotlin을 이용한 프론트엔드 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '회원가입 및 로그인 화면 구현',
            },
            {
              content: '토큰 자동 갱신 기능 구현',
            },
            {
              content: '메인화면, 각 기능 별(STT,요약,번역) 화면 구현',
            },
            {
              content: '온라인/오프라인 파일 업로드 및 결과 처리 구현',
            },
          ],
        },
        {
          content: '오프라인 로컬 서버 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Termux를 통해 안드로이드 내부에 로컬 서버 설치',
            },
            {
              content: '오프라인 번역 기능 요청 시 동기 처리로 구현',
            },
            {
              content: '오프라인 STT 기능 요청 시 비동기 처리로 구현',
            },
          ],
        },
      ],
    },
    {
      title: '현장실습 팀프로젝트',
      startedAt: '2025-01',
      endedAt: '2025-02',
      where: '나만을 위한 플레이 리스트 어플',
      descriptions: [
        {
          content: '프론트엔드 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '로그인, 회원가입, 홈 화면 담당',
            },
          ],
        },
        {
          content: '백엔드 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'JWT를 이용한 회원가입 및 로그인 기능 담당',
            },
            {
              content: 'SQL 유저 테이블 담당',
            },
          ],
        },
      ],
    },
    {
      title: '웹서비스 프로그래밍 개인 프로젝트',
      startedAt: '2024-10',
      endedAt: '2024-12',
      where: '온라인 도서관 시스템',
      descriptions: [
        {
          content: 'JDBC를 이용한 MVC 웹 서비스 구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '모델 2 방식으로 프로그램 개발',
            },
            {
              content: '모델 기능은 VO, DAO 클래스를 분리해서 개발',
            },
            {
              content:
                '자바 클래스 역할 별(Controller, Persistence, Service, Domain) 패키지 분리 작성',
            },
            {
              content: 'JDBC를 사용하여 CRUD 구현',
            },
          ],
        },
        {
          content: 'REST API를 통해서 최신 도서 목록 연동',
        },
      ],
    },
    {
      title: '컴퓨터 네트워크 개인 프로젝트',
      startedAt: '2024-10',
      endedAt: '2024-12',
      where: '혼잡 제어 방법 구현 및 데모',
      descriptions: [
        {
          content: 'UDP 기반 신뢰성 전송/혼잡 제어 시뮬레이터 구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Slow Start/혼잡 회피/3-중복 ACK/타임아웃 및 슬라이딩 윈도우 구현',
            },
          ],
        },
        {
          content: '송신자 및 수신자 프로그램 구현',
        },
      ],
    },
    {
      title: '네트워크 프로그래밍 팀프로젝트',
      startedAt: '2024-04',
      endedAt: '2024-06',
      where: '멀티 쓰레드를 이용한 드론 제어 시뮬레이션',
      descriptions: [
        {
          content: 'C 언어와 Windows 소켓 API(WinSock2)를 사용하여 멀티 쓰레드 TCP 서버 구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '_beginthreadex를 사용해 각 클라이언트를 별도 스레드에서 처리',
            },
            {
              content: '클라이언트 별 고유 ID 부여 및 클라이언트 도착 여부 실시간 체크',
            },
          ],
        },
        {
          content: '드론 목적지 이동 알고리즘 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '좌표 기반 위치 처리',
            },
          ],
        },
      ],
    },
    {
      title: '소프트웨어공학 팀프로젝트',
      startedAt: '2024-04',
      endedAt: '2024-06',
      where: '중고 거래 시스템',
      descriptions: [
        {
          content: '시스템 요구사항 작성',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '최우선 기능 및 제약 사항 담당',
            },
          ],
        },
        {
          content: '전체 유스케이스 다이어그램 작성',
        },
        {
          content: '모듈 뷰 작성',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '사용자 서버 영역 담당',
            },
          ],
        },
      ],
    },
    {
      title: '데이터베이스 팀프로젝트',
      startedAt: '2023-10',
      endedAt: '2023-12',
      where: '네이버쇼핑 분석',
      descriptions: [
        {
          content: '실제 운영 중인 네이버쇼핑을 참고 및 분석하여 DB 설계',
        },
        {
          content: '애트리뷰트, ER 다이어그램, 테이블 작성',
          weight: 'MEDIUM',
          descriptions: [{ content: '고객, 결제, 카테고리 담당' }],
        },
        {
          content: '제2 정규화 담당',
        },
        {
          content: '물리적 설계 담당',
          weight: 'MEDIUM',
          descriptions: [{ content: '테이블, 인덱스, 뷰' }],
        },
      ],
    },
    {
      title: '자료구조 팀프로젝트',
      startedAt: '2023-10',
      endedAt: '2023-12',
      where: '도서관리시스템',
      descriptions: [
        {
          content: 'C 언어 기반 도서 입출고 및 판매 관리 프로그램',
        },
        {
          content: '메뉴 기반 UI로 사용자 입력에 따라 입고·출고·검색·정렬 등 기능 수행',
        },
        {
          content: '랜덤 가격 생성 알고리즘 적용 및 데이터 구조 기반 로직 설계·구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '도서를 입고할 때마다 가격이 무작위로 정해지지만, 출고가는 항상 입고가보다 높도록 보장',
            },
            { content: '연결 리스트로 도서 목록 관리, 연결 큐로 거래 내역 관리' },
          ],
        },
      ],
    },
  ],
};

export default project;
