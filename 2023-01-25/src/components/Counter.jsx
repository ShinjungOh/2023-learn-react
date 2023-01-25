import React, {useReducer} from 'react';

// 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 뺄 수 있다.
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {value: state.value + 1};
        case 'DECREMENT':
            return {value: state.value - 1};
        default:
            return state;
    }
}

const Counter = () => {
    // state: 현재 가리키고 있는 상태
    // dispatch: 액션을 발생시키는 함수
    const [state, dispatch] = useReducer(reducer, {value: 0});  // reducer 함수, reducer의 기본값

    return (
        <div>
            <p>
                현재 카운터 값은 <strong>{state.value}</strong>입니다.
            </p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+1</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-1</button>
        </div>
    );
};

export default Counter;
