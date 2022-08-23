<!-- # Tech Stack -->

# :: 이커머스 사이트 구현

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



# 사용한 라이브러리

```json
// frontend/package.json
{
  "name": "e-commerce",
  "homepage": "https://bpthess.github.io/e-commerce",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/i18next": "^13.0.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.11.52",
    "@types/react": "^18.0.17",
    "@types/react-dom": "^18.0.6",
    "@types/react-i18next": "^8.1.0",
    "@types/react-router-dom": "^5.3.3",
    "@types/styled-components": "^5.1.26",
    "@typescript-eslint/eslint-plugin": "^5.33.1",
    "@typescript-eslint/parser": "^5.33.1",
    "axios": "^0.27.2",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-config-airbnb-typescript": "^17.0.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-jest": "^26.8.5",
    "eslint-plugin-jsx-a11y": "^6.6.1",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-react": "^7.30.1",
    "eslint-plugin-react-hooks": "^4.6.0",
    "gh-pages": "^4.0.0", // 깃허브 배포 라이브러리
    "http-proxy-middleware": "^2.0.6", // cors 우회 라이브러리
    "i18next": "^21.9.1", // 다국어 라이브러리
    "node-sass": "^7.0.1",
    "prettier": "^2.7.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-helmet-async": "^1.3.0", // 동적으로 사이트 title 변환 라이브러리
    "react-i18next": "^11.18.4",
    "react-icons": "^4.4.0",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "scss": "^0.2.4",
    "styled-components": "^5.3.5",
    "typescript": "^4.7.4",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "WATCHPACK_POLLING=true react-scripts start",
    "dev": "WATCHPACK_POLLING=true react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "lint": "estlint ./src",
    "deploy": "gh-pages -d build", // 깃허브 페이지에 build 폴더를 배포
    "predeploy": "npm run build" // 배포 전 build가 되어있지 않다면 build부터 실행
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@babel/parser": "^7.18.11",
    "@types/react-helmet-async": "^1.0.3",
    "babel-eslint": "^10.1.0"
  }
}

```

# 폴더 구조

  - **components** : 어플리케이션을 구성하는 컴포넌트를 위한 폴더입니다.
  - **error** : 각 페이지 에러를 위한 폴더입니다.
  - **i18n** : 다국어를 위한 폴더입니다.
  - **hooks** : 커스텀 훅들을 위한 폴더입니다.
  - **pages** : 라우팅되는 페이지들을 위한 폴더입니다.
  - **store** : frontend 상태 관리를 위한 폴더입니다.
  - **utils** : 유틸리티를 위한 폴더입니다.
  - **variable** : 변수들을 저장하기 위한 폴더입니다.


# 진행 시 주안점

- 

# 한계점 및 개선 사항

- 
