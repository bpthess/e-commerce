# E-Commerce Client

<br>

## 도커 파일 빌드(업데이트)

docker build -f Dockerfile.dev -t react-ecommerce ./

## 도커 실행

docker run -it -p 3000:3000 -v /usr/src/app/node_modules -e CHOKIDAR_USEPOLLING=true -v ${pwd}:/usr/src/app react-ecommerce

## 몽고디비

<!-- https://cloud.mongodb.com/v2/629a3a14b2391f1c98b491b9#clusters -->

## 배포

build(front)
cd app>backend>frontend
=> npm run deploy

heroku
최상단 root
git subtree push --prefix app/backend heroku master

## 커밋 유형

| 태그 이름 | 설명                                                                   |
| --------- | ---------------------------------------------------------------------- |
| Feat      | 새로운 기능을 추가할 경우                                              |
| Fix       | 버그를 고친 경우                                                       |
| Design    | CSS, 사용자 UI 수정                                                    |
| Style     | 코드 포맷, lint, 코드 수정이 없는 경우                                 |
| Refactor  | 기능 변경 없이 코드 구조 수정                                          |
| Comment   | 꼭 필요한 주석 추가 및 변경                                            |
| Remove    | 쓸 데 없는 파일 및 코드 블럭 삭제                                      |
| Edit      | 기타 설정 변경이나 외부 api 연동 설정이 변경, 문구 수정, 다국어 등등.. |
