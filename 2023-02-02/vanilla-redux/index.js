import {createStore} from "redux";

const divToggle = document.querySelector('.toggle')
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 이름 : 고유한 대문자 문자열
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 생성 함수
// type 필수
const toggleSwitch = () => ({type: TOGGLE_SWITCH});
const increase = difference => ({type: INCREASE, difference});
const decrease = () => ({type: DECREASE});

// 초깃값 설정
const initialState = {
    toggle: false,
    counter: 0
}

// 리듀서 함수 정의 - 변화를 일으키는 함수
// state가 undefined일 때는 initialState를 기본값으로 사용
function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state, // 불변성 유지
                toggle: !state.toggle
            }
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference
            }
        case DECREASE: {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        default:
            return state;
    }
}

// 스토어 만들기 - createStore
// 함수의 파라미터에 리듀서 함수를 넣어야 함
const store = createStore(reducer);

// render 함수 만들기
// 리액트의 render 함수와 달리, html로 만들어진 UI 속성을 상태에 따라 변경
const render = () => {
    const state = store.getState(); // 현재 상태 불러오기
    // 토글 처리
    if (state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }
    // 카운터 처리
    counter.innerText = state.counter;
}

render();

// 구독하기 - subscribe
// 스토어의 상태가 바뀔 때 마다 render 함수가 호출됨
store.subscribe(render);

// 리액트 프로젝트에서는 subscribe 함수 대신, 리액트-리덕스 라이브러리를 이용
// const listener = () => {
//     console.log('상태가 업데이트됨');
// }
//
// const unsubscribe = store.subscribe(listener);
// unsubscribe(); // 추후 구독을 비활성화할 때 함수를 호출

// 액션 발생시키기 - dispatch
divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
}

btnIncrease.onclick = () => {
    store.dispatch(increase(1));
}

btnDecrease.onclick = () => {
    store.dispatch(decrease());
}
