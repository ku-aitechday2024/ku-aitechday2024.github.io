export const LEADER = {
  name: '한정현 교수',
  position: 'ICT명품인재양성사업단 단장',
  content:
    '고려대학교 ICT명품인재양성사업단은 11월 22일(수) 본교 하나스퀘어에서 사업단 1년 성과를 총결산하는 2023 AI Tech Day를 개최합니다. 본 행사에서는 사업단 소속 교수들이 올해 발표한 top-tier conference 논문과 현재 진행 중인 연구를 결합하여 압축 발표하고, 네이버, LG, SKT, 삼성SDS, 한화시스템, 카카오브레인의 AI 연구개발 책임자들이 각 기업의 AI 연구개발 성과와 미래 전략을 발표합니다. 여기에 더불어, 사업단 소속 연구실의 포스터와 데모 세션이 준비되고, 기업체 홍보 및 리쿠르팅 부스도 마련됩니다. AI의 현재와 미래를 보고자 하는 분들의 많은 참석 바랍니다.',
  profile: '/assets/Han.png',
  url: 'https://mpij.korea.ac.kr/'
}

export interface Professor {
  name: string
  url: string
  profile: string
  lab: string
}

export const PROFESSORS: Professor[] = [
  { name: '강재우', url: 'https://dmis.korea.ac.kr', profile: '/assets/profKangJaeWoo.jpg', lab: 'DMIS' },
  { name: '김승룡', url: 'http://cvlab.korea.ac.kr', profile: '/assets/profjKimSeungRyong.jpg', lab: 'CVLab' },
  { name: '김진규', url: 'http://visionai-lab.github.io', profile: '/assets/profKimJinGyu.jpg', lab: 'VisionAI' },
  { name: '김현우', url: 'http://mlv.korea.ac.kr/', profile: '/assets/profKimHyunWoo.jpg', lab: 'MLV' },
  { name: '백승준', url: ' http://sing.korea.ac.kr', profile: '/assets/profBaekSeungJun.jpg', lab: 'SING' },
  { name: '오학주', url: 'http://prl.korea.ac.kr', profile: '/assets/profOhHakJoo.jpg', lab: 'PRL' },
  { name: '정원기', url: 'http://hvcl.korea.ac.kr', profile: '/assets/profJungWonKi.jpg', lab: 'HVCL' },
  {
    name: '허준범',
    url: 'https://sites.google.com/korea.ac.kr/isslab',
    profile: '/assets/profHeoJoonBum.jpg',
    lab: 'ISS'
  }
]

export type INVITED_LECTURER = {
  name: string
  position: string
  company: string
  education?: string[]
  career: string[]
  lectureTitle?: string
  lectureContent: string[]
  profile: string
}
export const INVITED_LECTURER: INVITED_LECTURER[] = [
  {
    name: '윤상두',
    position: '소장',
    company: '네이버 클라우드',
    education: [
      '서울대학교 전기컴퓨터공학부 박사 (2017)',
      '서울대학교 전기컴퓨터공학부 석사 (2013)',
      '서울대학교 전기컴퓨터공학부 학사 (2010)'
    ],
    career: [
      '2023 - 현재 네이버 AI Lab Research Director',
      '2022 - 현재 서울대학교 AI연구원 겸임 교수',
      '2018 - 2022 네이버 AI Lab Research Scientist'
    ],
    lectureTitle: 'AI Research in the Era of Large Language Models (LLMs)',
    lectureContent: [
      'Large-scale AI 관련 네이버 AI의 최신 연구 소개',
      'LLM 기반 AI Safety 연구 및 LLM 모델 평가 방법 소개',
      'LLM 기반 Human-computer Interaction 연구 소개'
    ],
    profile: '/assets/yoon.png'
  },
  {
    name: '임우형',
    position: '상무',
    company: 'LG AI Research',
    education: [
      '서울대학교 전기정보공학부 박사 (2007)',
      '서울대학교 전기정보공학부 석사 (2002)',
      '서울대학교 전기정보공학부 학사 (2000)'
    ],
    career: [
      '2020 - 현재 LG AI연구원 상무 (Applied AI Research 그룹장)',
      '2021 - 현재 AI미래포럼 공동의장',
      '2019 - 2020 LG 사이언스파크 연구위원 (Data Intelligence Lab장)',
      '2013 - 2019 SKT 매니저 (AI 기술 Unit)',
      '2007 - 2013 삼성전자 책임연구원 (무선사업부 Voice Service 개발그룹)'
    ],
    lectureTitle: 'AI를 통해 만들어가는 더 나은 세상',
    lectureContent: [
      'AI가 기업현장에서 R&D와 생산공정 고도화에 활용되고 있는 사례 소개',
      'AI가 만들어가는 세상과 앞으로의 발전 방향 제시'
    ],
    profile: '/assets/lim.jpeg'
  },
  {
    name: '김지원',
    position: '부사장',
    company: 'SKT',
    education: ['MIT EECS 석사 (2007)', 'MIT EECS 학사 (2007)'],
    career: [
      '2016 - 현재 SKT 부사장 (에이닷 Tech 대화 담당)',
      '2020 대통령 직속 국가과학기술자문회의 자문위원',
      '2007 - 2016 삼성전자 종합기술원 전문연구원'
    ],
    lectureTitle: 'SKT A.X LLM',
    lectureContent: [
      '기존 텔레콤 서비스와 초거대 언어 모델(LLM) 기술 및 이미지 생성 기술들의 융·복합 서비스 소개',
      'AI에서 AGI로! 인간을 넘어서는 인공지능 소개'
    ],
    profile: '/assets/kim.png'
  },
  {
    name: '조지훈',
    position: '마스터',
    company: '삼성 SDS',
    education: ['Royal Holloway, University of London 정보보안 박사', 'University of Waterloo 암호학 석사'],
    career: ['2013 - 현재 삼성SDS 마스터 (보안연구팀)', '2009 - 2013 LG전자 선임연구원'],
    lectureTitle: 'AI & Security in Samsung SDS',
    lectureContent: [
      'SDS 연구소에서 수행하고 있는 AI, Security 분야 연구 분야 및 성과 소개',
      'Post Quantum Crypto 원천기술, 전환기술 및 협업프로젝트 (미국 NIST NCCoE) 소개',
      'SBST (Search-based SW Testing) 분야 연구개발 소개',
      'PETs (Privacy-Enhancing Technologies) 및 협업프로젝트 (UN) 소개'
    ],
    profile: '/assets/master.png'
  },
  {
    name: '노병석',
    position: '리더',
    company: '카카오브레인',
    education: ['고려대학교 컴퓨터학과 석사 (2007)', '고려대학교 컴퓨터학과 학사 (2005)'],
    career: [
      '2020 - 현재 카카오브레인 팀 리더 (AI-CAD)',
      '2015 - 2020 Intel Korea 이사',
      '2007 - 2015 한국전자통신연구원 (ETRI) 연구원'
    ],
    lectureTitle: 'A New Era of Generative AI',
    lectureContent: [
      '대용량 데이터 기반 생성모델로의 패러다임 변화 소개',
      '카카오브레인에서 연구 중인 생성 모델 기술 소개'
    ],
    profile: '/assets/lo.png'
  },
  {
    name: '하윤철',
    position: '상무',
    company: '한화시스템',
    education: ['서울대학교 산업공학과 석사 (1997)'],
    career: ['2022 - 현재 한화시스템 기반기술연구소장', '2015 - 2022 한화시스템 팀장 (해양연구소 SW팀)'],
    lectureTitle: '국방 인공지능 동향과 사례',
    lectureContent: ['국내/외 국방 인공지능 연구 개발 동향 및 사례', '무기 체계별 단계별 인공지능의 적용 및 발전 방향'],
    profile: '/assets/kim_yoo.png'
  },
  {
    name: '김유신',
    position: '상무',
    company: '한화시스템',
    education: ['서울대학교 산업공학과 석사 (1997)'],
    career: [
      '2022 - 현재 한화시스템 상무 (Data eXcellence 담당)',
      '2020 - 2022 한화시스템 상무 (미래혁신센터)',
      '2007 - 2020 SKT 부장 (AI 센터)'
    ],
    lectureTitle: 'AI & Data in Hanwha Systems',
    lectureContent: [
      'AI 시대에서의 빅데이터 활용의 중요성과 DX 소개',
      '한화시스템 AI 기반 솔루션 및 AI/Data 플랫폼 소개'
    ],
    profile: '/assets/shin.png'
  }
]
