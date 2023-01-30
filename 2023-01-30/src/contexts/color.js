import {createContext} from "react";

// 새 context를 만들 때 createContext 사용
// 파라미터에는 해당 context의 기본값
const ColorContext = createContext({ color: 'black' });

export default ColorContext;
