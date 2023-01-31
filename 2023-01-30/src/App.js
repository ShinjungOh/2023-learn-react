import ColorBox from "./components/ColorBox";
import {ColorProvider} from "./contexts/color";
import SelectColors from "./components/SelectColors";

const App = () => {
    return (
        /* Provider 사용 시 value 값을 명시해야 함, value 없으면 오류 발생 */
        /* createContext 함수에서 파라미터로 넣은 기본값은 Provider를 사용하지 않았을 때만 사용됨 */
        <ColorProvider>
            <>
                <SelectColors/>
                <ColorBox/>
            </>
        </ColorProvider>
    );
}

export default App;
