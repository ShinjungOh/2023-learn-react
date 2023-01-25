import React, {useReducer} from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    }
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: '',
    });
    const {name, nickname} = state;

    const onChange = (e) => {
        dispatch(e.target);  // 액션은 어떤 값도 사용 가능. e.target 자체를 액션 값으로 사용
    }

    return (
        <>
            <div>
                <input name='name' value={name} onChange={onChange}/>
                <input name='nickname' value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <strong>이름:</strong> {name}
                </div>
                <div>
                    <strong>닉네임:</strong> {nickname}
                </div>
            </div>
        </>
    )
};

export default Info;
