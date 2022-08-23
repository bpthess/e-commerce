<!-- # Tech Stack -->

# :: 이커머스 마켓컬리 사이트 구현

## ✅ 사용 기술 스택
- Framework : docker / React.js(v18) / typescript(.js => .ts 진행중)
- style : Styled Components
- 서버 통신 : axios, Fetch
- 서버 상태 관리 : useReducer + createContext
- Eslint, prettier 적용   

## 📍 기능 구현
1. 상품 장바구니 추가, 조회 기능 구현
2. 서버 통신 연결
3. 다국어 기능 적용
4. 예정   
+) CRUD 기능 추가 예정   
+) 로그인, 회원가입 기능 추가 예정   
+) 검색 기능 추가 예정

<!-- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![Zustand](https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=zustand&logoColor=%2361DAFB)
![Mui](https://img.shields.io/badge/mui-%2320232a.svg?style=for-the-badge&logo=mui&logoColor=%2361DAFB) -->

# 실행 방법

## 설치 및 환경세팅

```bash
git clone https://github.com/bpthess/e-commerce.git
npm
```

## 실행

dev(concurrently: frontend + backend)

- port: 3000

```bash
cd app/backend
npm run dev
```


frontend

- port: 3000

```bash
cd app/backend/frontend
docker run -it -p 3000:3000 -v /usr/src/app/node_modules -e CHOKIDAR_USEPOLLING=true -v ${pwd}:/usr/src/app react-ecommerce
```

backend

- port: 8000

```bash
cd app/backend
npm start
```


<hr/>

# 사용한 라이브러리

```json
// client/package.json
{
  "name": "wanted-pre-onboarding-challenge-fe-1",
  "private": true,
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@emotion/react": "^11.9.3",
    "@emotion/styled": "^11.9.3",
    "@hookform/error-message": "^2.0.0",
    "@mui/icons-material": "^5.8.4",
    "@mui/material": "^5.9.2", // mui를 이용하여 빠르고 간단한 UI 생성
    "axios": "^0.27.2",
    "emotion-reset": "^3.0.1",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-helmet-async": "^1.3.0", // 동적으로 title 변경
    "react-hook-form": "^7.34.0", // 여러개의 input을 한 번에 관리 하기 위한 라이브러리
    "react-query": "^3.39.0", // server state 관리
    "react-router-dom": "^6.3.0",
    "react-toastify": "^9.0.7", // 토스트 메세지를 보여주기위한 라이브러리
    "zustand": "^4.0.0" // client state 관리
  },
  "devDependencies": {
    "@types/node": "^18.6.2",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "@vitejs/plugin-react": "^1.3.0",
    "typescript": "^4.6.3",
    "vite": "^2.9.9"
  }
}
```

# 폴더 구조

- 여러 의미가 있어 혼란을 주는 폴더 이름 혹은 파일 이름을 사용하지 않도록 했고, 관심사에 따라 최대한 분리할 수 있도록 노력했습니다.

  - **api** : axios 인스턴스 및 api에 관련한 폴더 입니다.
  - **components** : 어플리케이션을 구성하는 컴포넌트를 위한 폴더입니다.
  - **config** : 설정을 위한 폴더입니다.
  - **hooks** : 커스텀 훅들을 위한 폴더입니다.
  - **pages** : 라우팅되는 페이지들을 위한 폴더입니다.
  - **router** : 라우팅을 위한 폴더입니다.
  - **store** : client 상태 관리를 위한 폴더입니다.
  - **styles** : global style 및 반복적으로 사용되는 스타일을 위한 폴더입니다.
  - **types** : 여러 곳에서 사용되는 타입을 위한 폴더입니다.
  - **utils** : 유틸리티를 위한 폴더입니다.

## 트리

```
// client
.
|-- README.md
|-- index.html
|-- package-lock.json
|-- package.json
|-- public
|   `-- favicon.ico
|-- src
|   |-- App.tsx
|   |-- api
|   |   |-- auth.ts
|   |   |-- axios.ts
|   |   `-- toDo.ts
|   |-- components
|   |   |-- Auth
|   |   |   |-- AuthForm.tsx
|   |   |   `-- types.ts
|   |   |-- Boundary
|   |   |   |-- AsyncBoundary.tsx
|   |   |   `-- ErrorBoundary.tsx
|   |   |-- Error
|   |   |   |-- AuthErrorMessage.tsx
|   |   |   `-- ToDoListError.tsx
|   |   |-- FloatingButton
|   |   |   `-- FloatingButton.tsx
|   |   |-- Header
|   |   |   |-- Header.tsx
|   |   |   `-- styled.ts
|   |   |-- Layout
|   |   |   |-- Layout.tsx
|   |   |   |-- styled.ts
|   |   |   `-- types.ts
|   |   |-- Loading
|   |   |   |-- LoadingSpinner
|   |   |   |   `-- LoadingSpinner.tsx
|   |   |   `-- Skeleton
|   |   |       `-- ToDoSkeleton.tsx
|   |   |-- ProtectRoute
|   |   |   |-- ProtectAuth.tsx
|   |   |   |-- ProtectHome.tsx
|   |   |   `-- types.ts
|   |   |-- ToDo
|   |   |   |-- Modal
|   |   |   |   |-- DeleteModal.tsx
|   |   |   |   |-- FormModal.tsx
|   |   |   |   `-- types.ts
|   |   |   |-- ToDoDetail
|   |   |   |   `-- ToDoDetail.tsx
|   |   |   `-- ToDoList
|   |   |       `-- ToDoList.tsx
|   |   `-- UpdatedAt
|   |       |-- UpdatedAt.tsx
|   |       `-- types.ts
|   |-- config
|   |   `-- properties.ts
|   |-- hooks
|   |   |-- common
|   |   |   |-- useCheckIdByURL.ts
|   |   |   `-- useDate.ts
|   |   `-- query
|   |       |-- useCreateToDo.ts
|   |       |-- useDeleteToDo.ts
|   |       |-- useGetToDoById.ts
|   |       |-- useGetToDoList.ts
|   |       |-- useLogin.ts
|   |       |-- useSignUp.ts
|   |       `-- useUpdateToDo.ts
|   |-- main.tsx
|   |-- pages
|   |   |-- Auth.tsx
|   |   `-- Home.tsx
|   |-- router
|   |   `-- router.tsx
|   |-- store
|   |   |-- useAuthStore.ts
|   |   |-- useDeleteModalStore.ts
|   |   |-- useFormModalStore.ts
|   |   `-- useToDoStore.ts
|   |-- styles
|   |   |-- flex.ts
|   |   `-- global.tsx
|   |-- types
|   |   |-- auth.ts
|   |   `-- toDo.ts
|   |-- utils
|   |   |-- LocalStorage
|   |   |   |-- getLocalStorage.ts
|   |   |   |-- removeLocalStorage.ts
|   |   |   `-- setLocalStorage.ts
|   |   `-- toast
|   |       |-- toastMessage.ts
|   |       `-- useToastMessage.ts
|   `-- vite-env.d.ts
|-- tsconfig.json
|-- tsconfig.node.json
|-- vite.config.ts
|-- yarn-error.log
`-- yarn.lock
```

# 과제 진행 시 주안점

- 수 개월 뒤에 이 코드를 보더라도 무리없이 코드를 읽어 나갈 수 있을지에 대해 생각하면서
  코드의 가독성에 주안점을 두고 코드를 작성하고 지속적인 리팩토링을 했습니다.

# 한계점 및 개선 사항

- 코드 최적화에 대해 좀 더 공부하고 개선해 나가야 합니다.
- AsyncBoundary를 만들어 Suspense와 에러에 관련된 사항을 한 번에 처리 하려 했지만, 여러 번 렌더링되는 현상을 해결하지 못해 따로 처리했습니다.
