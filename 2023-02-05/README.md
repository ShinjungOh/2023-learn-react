# 리액트 리덕스 사용하기

## 프로젝트 생성

```
yarn create react-app react-redux
```

### 라이브러리 설치

```
yarn add redux react-redux
```

<br>

## 프로젝트 패턴 

프레젠테이셔널 컴포넌트와 컨테이너 컴포넌트를 분리   
* 프레젠테이셔널 컴포넌트 `src/components`
  * 주로 상태 관리가 이루어지지 않고, 그저 props를 받아 와서 화면에 UI를 보여 주기만 하는 컴포넌트
* 컨테이너 컴포넌트 `src/containers`
  * 리덕스와 연동되어 있는 컴포넌트
  * 리덕스로부터 상태를 받아 오거나, 리덕스 스토어에 액션을 디스패치


![](components_pattern.png)  


### 장점 
* 코드의 재사용성 증가
* 관심사의 분리 -> UI를 작성할 때 편리

<br>

## 리덕스 구조

### 1. 각각 다른 파일에 작성

가장 기본적이지만 불편할 수 있다.

```md
├── actions
│   ├── counter.js
│   └── todos.js
├── constants
│   └── ActionTypes.js
└── reducers
    ├── counter.js
    └── todos.js
```

### 2. 기능별로 묶어 파일 하나에 작성 ✅

Ducks 패턴   
액션 타입, 액션 생성 함수, 리듀서 함수를 기능별로 파일 하나(모듈)에 몰아서 작성하는 방식  

```md
└── modules
    ├── counter.js
    └── todos.js
```

<br>

### 루트 리듀서 

`createStore` 함수를 사용해 스토어를 만들 때는 리듀서를 하나만 사용해야 한다.  
이를 위해 기존의 리듀서들을 하나로 합치는 작업을 할 때, 리덕스의 `combineReducers` 함수를 사용하면 된다.    

<br>

## redux-actions

```
yarn add redux-actions
```

`createAction` 액션 생성 함수를 간단하게 선언할 수 있다.  
리듀서를 작성할 때 switch/case 문이 아닌 `handleActions` 함수를 사용해, 각 액션마다 업데이트 함수를 설정하는 형식으로 작성할 수 있다.    
`handleActions(각 액션에 대한 업데이트 함수, 초기 상태)`

<br>

## immer

```
yarn add immer
```

상태를 업데이트할 때 불변성 지키기  
상황에 따라 상태 값들을 하나의 객체 안에 묶어서 넣는 것이 코드의 가독성을 높이는 데 유리하며, 추후 컴포넌트에 리덕스를 연동할 때도 편리하다.  
일반 자바스크립트로 처리하는 것이 더 편할 때는 immer를 사용하지 않아도 된다.  
