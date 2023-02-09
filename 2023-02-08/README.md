# 리덕스 미들웨어

## 프로젝트 생성

```
yarn create react-app redux-middleware
```

### 라이브러리 설치

```
yarn add redux react-redux redux-actions
```

```
yarn add redux-logger
```

```
yarn add redux-thunk
```


### API 

> 포스트 읽기(:id는 1~100 사이 숫자)  
> GET https://jsonplaceholder.typicode.com/posts/:id

> 모든 사용자 정보 불러오기  
GET https://jsonplaceholder.typicode.com/users

API를 호출할 때는 Promise 기반 웹 클라이언트인 axios를 사용한다.

```
yarn add axios
```

