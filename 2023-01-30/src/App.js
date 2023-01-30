import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";

const App = () => {
    return (
        /* Provider 사용 시 value 값을 명시해야 함, value 없으면 오류 발생 */
        /* createContext 함수에서 파라미터로 넣은 기본값은 Provider를 사용하지 않았을 때만 사용됨 */
        <ColorContext.Provider value={{color: 'red'}}>
            <>
                <ColorBox/>
            </>
        </ColorContext.Provider>
    );
}

export default App;
