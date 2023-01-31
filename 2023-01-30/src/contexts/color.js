import {createContext, useState} from "react";

// 새 context를 만들 때 createContext 사용
// 파라미터에는 해당 context의 기본값 - 상태값, 함수 등을 전달 가능
const ColorContext = createContext({
    state: {color: 'black', subColor: 'red'},
    action: {
        setColor: () => {},
        setSubColor: () => {}
    }
});

const ColorProvider = ({children}) => {
    const [color, setColor] = useState('black');
    const [subColor, setSubColor] = useState('red');

    const value = { // state와 action 객체를 분리해주면 다른 컴포넌트에서 Context 값을 사용할 때 편리
        state: {color, subColor},
        actions: {setColor, setSubColor}
    }

    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    )
}

const {Consumer: ColorConsumer} = ColorContext;

export {ColorProvider, ColorConsumer};

export default ColorContext;
