# 종합적인 Next.js 프로젝트 구조 및 설명

```
my-nextjs-project/
├── app/
│   ├── api/
│   │   └── route.ts
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── Input.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── features/
│       └── MemberCarousel.tsx
├── lib/
│   └── utils.ts
├── hooks/
│   └── useCustomHook.ts
├── types/
│   └── index.ts
├── services/
│   ├── api.ts
│   └── endpoints.ts
├── repositories/
│   ├── userRepository.ts
│   ├── postRepository.ts
│   └── index.ts
├── public/
│   ├── images/
│   │   └── logo.png
│   └── favicon.ico
├── styles/
│   └── Home.module.css
├── tests/
│   └── Home.test.tsx
├── .env.local
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## 디렉토리 및 파일 설명

### `app/`
- Next.js 13 이상에서 도입된 App Router를 사용하는 디렉토리
- `api/`: API 라우트를 정의하는 디렉토리
- `(auth)/`: 인증 관련 페이지를 그룹화한 라우트 그룹
- `blog/`: 블로그 관련 페이지들
- `[slug]/`: 동적 라우팅을 위한 디렉토리
- `layout.tsx`: 전체 앱의 레이아웃 정의
- `page.tsx`: 각 라우트의 페이지 컴포넌트
- `globals.css`: 전역 스타일 정의

### `components/`
- 재사용 가능한 React 컴포넌트들을 저장하는 디렉토리
- `ui/`: 버튼, 입력 필드 등 기본 UI 컴포넌트
- `layout/`: 헤더, 푸터 등 레이아웃 관련 컴포넌트
- `features/`: 특정 기능과 관련된 더 큰 컴포넌트

### `lib/`
- 유틸리티 함수, 헬퍼 등을 저장하는 디렉토리

### `hooks/`
- 커스텀 React 훅을 저장하는 디렉토리

### `types/`
- TypeScript 타입 정의를 저장하는 디렉토리

### `services/`
- 외부 API와의 통신을 관리하는 서비스 로직을 포함
- `api.ts`: Axios 인스턴스 설정 및 기본 요청 함수 정의
- `endpoints.ts`: API 엔드포인트 URL 상수 정의

### `repositories/`
- 데이터 접근 로직을 캡슐화하는 리포지토리 패턴 구현
- `userRepository.ts`: 사용자 관련 데이터 접근 로직
- `postRepository.ts`: 게시물 관련 데이터 접근 로직
- `index.ts`: 모든 리포지토리를 export하는 중앙 파일

### `public/`
- 정적 파일들(이미지, 폰트 등)을 저장하는 디렉토리

### `styles/`
- CSS 모듈 파일들을 저장하는 디렉토리

### `tests/`
- 테스트 파일들을 저장하는 디렉토리

### 설정 파일들
- `.env.local`: 환경 변수 설정
- `.eslintrc.json`: ESLint 설정
- `.gitignore`: Git에서 무시할 파일 목록
- `next.config.js`: Next.js 설정
- `package.json`: 프로젝트 의존성 및 스크립트 관리
- `README.md`: 프로젝트 설명 문서
- `tsconfig.json`: TypeScript 설정

## SSR 데이터 fetching 예시

`app/page.tsx`에서 SSR로 데이터를 가져오는 예시:

```typescript
import { userRepository } from '@/repositories';

export default async function Home() {
  const users = await userRepository.getUsers();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

## 서비스 및 리포지토리 구현 예시

### `services/api.ts`
```typescript
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
```

### `services/endpoints.ts`
```typescript
export const ENDPOINTS = {
  USERS: '/users',
  POSTS: '/posts',
};
```

### `repositories/userRepository.ts`
```typescript
import api from '@/services/api';
import { ENDPOINTS } from '@/services/endpoints';

export const userRepository = {
  getUsers: async () => {
    const response = await api.get(ENDPOINTS.USERS);
    return response.data;
  },
  // 추가 메서드...
};
```

## 주요 특징 및 이점
- App Router 사용으로 서버 컴포넌트와 클라이언트 컴포넌트의 효율적인 관리
- 컴포넌트, 유틸리티, 훅 등의 명확한 분리로 코드 구조화
- TypeScript 사용으로 타입 안정성 확보
- 테스트 디렉토리를 통한 체계적인 테스트 관리
- 정적 파일과 스타일의 별도 관리로 구조 최적화
- 관심사 분리: API 통신과 데이터 접근 로직이 명확히 분리됨
- 재사용성: 리포지토리 메서드를 여러 컴포넌트에서 쉽게 재사용 가능
- 테스트 용이성: 서비스와 리포지토리를 독립적으로 테스트 가능
- 유지보수성: 백엔드 API 변경 시 리포지토리만 수정하면 됨
- SSR 최적화: 서버 사이드에서 효율적으로 데이터 fetching 가능


## Local RUN

### 사이트 실행
```bash
yarn run start
# http://localhost:3001 접속
```
