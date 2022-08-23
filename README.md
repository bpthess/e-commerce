<!-- # Tech Stack -->

# :: [] 이커머스 마켓컬리 사이트 구현

## ✅ 사용 기술 스택
- Framework : React.js(v18) / typescript
-> .js => .ts 전환 진행중
- style : Styled Components
- 서버 통신 : axios, Fetch
- 서버 상태 관리 : useReducer + createContext
+) Eslint, prettier 적용


## 📍 기능 구현
1. 서버 통신 연결
2. 상품 장바구니 추가, 조회 기능 구현
3. 다국어 기능 적용
+) 상품 CRUD 기능 추가 예정
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
git clone https://github.com/sjyoung428/wanted-pre-onboarding-challenge-fe-1.git
yarn
```

## 실행

client

- port: 3000

```bash
cd client
yarn dev
```

server

- port: 8080

```bash
cd server
yarn start
```

# 실행 화면

## Auth

![auth](https://user-images.githubusercontent.com/77968955/185590747-ec2fc0b1-c6f3-4a4d-b3dd-b46afc2da819.gif)

## ToDoList

![todo](https://user-images.githubusercontent.com/77968955/185590758-c228c8c1-4851-4a96-b877-9dbb6ddea14f.gif)

<hr/>

## Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [x] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

## Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요

  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

  <br/>

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
