### E-COMMERCE FRONTEND PROJECT

### 도커 컨테이너 생성

- react-ecommerce 컨테이너 생성

### 도커 파일 빌드(업데이트)

docker build -f Dockerfile.dev -t react-ecommerce ./

### 도커 실행문

docker run -it -p 3000:3000 -v /usr/src/app/node_modules -e CHOKIDAR_USEPOLLING=true -v ${pwd}:/usr/src/app react-ecommerce
