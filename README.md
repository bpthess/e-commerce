<!-- # Tech Stack -->

# :: 이커머스 서비스 구현

## ✅ 사용 기술 스택

- Framework : Docker / React.js(v18) / TypeScript
- 상태 관리 : useReducer + Context API
- 서버 통신 :  Fetch, Express, MongoDB
- 스타일 : Styled Components
- 배포 : Heroku, GithubPage
- Eslint, Prettier 적용
- 보안 : Bcrypt


## 📍 기능 구현

1. 로그인(관리자 계정: user@example.com / 123456)
1. GET 통신으로 저장된 상품 데이터 파싱
2. 상품 장바구니 페이지 CRUD 기능 구현
3. express와 fetch로 서버 통신 연결
4. JWT 토큰으로 회원 데이터 파싱
5. 미디어쿼리 반응형 웹
6. 다국어 기능 적용
7. heroku 배포


## ☝️ 진행사항

1. 더 좁은 타입 범위와 any 간소화(진행중)
2. 회원가입시 비밀번호 오류 에러(진행중)
3. 새로고침시 데이터 유지
4. 결제 페이지 구현 예정
5. 스켈레톤 스크린 예정
6. 상품 검색 기능 예정
7. 지불 페이지 예정

<!-- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![Zustand](https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=zustand&logoColor=%2361DAFB)
![Mui](https://img.shields.io/badge/mui-%2320232a.svg?style=for-the-badge&logo=mui&logoColor=%2361DAFB) -->

# 실행 방법

## 🍀 설치 및 환경세팅

```bash
-> git clone https://github.com/bpthess/e-commerce.git
-> npm install
```

## 👉 실행

dev(concurrently: frontend + backend)

- port: 3000

```bash
-> cd app/backend
-> npm run dev
```

frontend

- port: 3000

```bash
-> cd app/backend/frontend
-> npm start
```

backend

- port: 8000

```bash
-> cd app/backend
-> npm start
```

## 📌 사용한 라이브러리

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
    "react-i18next": "^11.18.4", // 다국어 라이브러리
    "react-icons": "^4.4.0", // 아이콘 라이브러리
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "react-toastify": "^9.0.8", // 알림 ui 라이브러리
    "scss": "^0.2.4",
    "styled-components": "^5.3.5", // 스타일 라이브러리
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
  "devDependencies": {
    "@babel/parser": "^7.18.11",
    "@types/react-helmet-async": "^1.0.3",
    "babel-eslint": "^10.1.0"
  }
}
```

## 📂 폴더 구조

- **components** : 어플리케이션을 구성하는 컴포넌트를 위한 폴더입니다.
- **error** : 각 페이지 에러를 위한 폴더입니다.
- **i18n** : 다국어를 위한 폴더입니다.
- **types** : 타입스크립트의 타입들을 위한 폴더입니다.
- **pages** : 라우팅되는 페이지들을 위한 폴더입니다.
- **store** : 상태 관리를 위한 폴더입니다.
- **variable** : 변수들을 저장하기 위한 폴더입니다.

## 🎯 진행 시 주안점

- 상태관리 사용해보기(상태 관리 공부와 이해도 부족으로 클론코딩 했습니다. useReducer, createContext 전부 클론코딩)
- 프론트엔드 설계(이해도와 경험부족 으로인해 양질의 코드보다는 기능 구현을 중점으로 접근)
- Docker 사용해보기
- 코드 캡슐화, 은닉화

## ✏️ 한계점 및 개선 사항

- 하나의 함수로 묶어서 map으로 리턴 시 [object Object]가 반환됨, 또는 한 단어만 나옴, 현재 사용하고 있는 생성자 함수가 옳게 쓰고 있는지 모르겠음, 아래 사이트 참고만하여 전개구문(spread syntax)을 이용해서 해결하기
    
    ```tsx
    const NaviData = new Route [
        { _id: 1, _name: "${name1}", _href: "/1" },
        { _id: 2, _name: "${name2}", _href: "/2" },
        { _id: 3, _name: "${name3}", _href: "/3" },
        { _id: 4, _name: "${name4}", _href: "/4" },
      ];
    ```

- cors 에러를 http-proxy-middleware 라이브러리를 사용하여 우회 해결하였고, header 설정을 전체 도메인을 허용했다는 점(허용된 도메인만 요청하는 방안으로 고려해보기)
    
    ```jsx
    res.header("*Access-Controller-Allow-Origin:**")
    ```
    
- 상품 장바구니에서 상품 총 금액 구현 실패, 이유는 같은 타입이 아닌 number + string로 받아오기 때문, 문자열을 숫자로 바꿔주는 parseFloat을 써도 안됨
    
    ```
    cartItems.reduce(
        (a: number, c: { quantity: number; price: string }) =>
          c.quantity
            ? c.quantity * parseFloat(c.price) + a
            : +c + a,
        0
      ) as number | string
    ```
    
- 이미지 안나올 시 텍스트나 임의 이미지 대체, map이여서 배열 전체가 변하게 됨, 해당 갯수만큼 state를 만들거나, src값을 변경하는 코드를 짜야함
    
    ```
    <img
        src={isItemHover ? product.imageHover : product.image}
        onMouseOver={() => setIsItemHover(true)}
        onMouseOut={() => setIsItemHover(false)}
    />
    ```
    
- 상품 장바구니 추가, 상품 수량 추가 기능 구현에서 기능은 작동하나 콘솔창에 404에러가 찍힘, 경로와 id는 맞게 찍혀있으나 number로 받아오는게 아닌 string으로 받아서 나오는 에러로 추정
- map함수 안에 map함수를 이중으로 사용하려 했으나 구현 실패, new 연산자를 사용한 새로운 객체 생성으로 시도 예정
- dockerfile로 로컬에 도커 사용을 하고있으나 맞게 사용하고 있는지는 모르겠음
- 통신 요청 과정 중 코드 활용 부족으로 인해 에러 반환 코드가 중복되어 있음
- 3항 연산자와 if문, 옵셔널 체이닝간의 코드 효율성에 대해 생각해보기
- 경로 이탈 페이지, 개발 페이지 분리하기
- 설계시 미디어쿼리 고려를 계속 까먹음
