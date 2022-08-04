### E-COMMERCE FRONTEND PROJECT

### 도커 컨테이너 생성

- Dockerfile이 { react-sample } 라는 컨테이너 이름 생성

docker build --build-arg proj=react-proj -t react-sample -f Dockerfile.txt .

### 빌드한 컨테이너 기반으로 프로젝트 폴더 생성

- { react-template } : 생성될 폴더 이름

docker run --rm -v ${pwd}:/app -e proj=react-template react-sample

### 도커 파일 빌드(업데이트)

- 생성된 폴더 경로로 이동 후 실행

docker build -f Dockerfile.dev -t react-sample ./

### 도커 실행문

docker run -it -p 3000:3000 -v /usr/src/app/node_modules -e CHOKIDAR_USEPOLLING=true -v ${pwd}:/usr/src/app react-sample
