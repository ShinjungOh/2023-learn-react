import ColorContext from "../contexts/color";
import RenderPropsSample from "./RenderProps";

const ColorBox = () => {
    return (
        <>
            <ColorContext.Consumer>
                { // 함수를 전달, function as a child 또는 render props 라고 함
                    value => (
                        <div
                            style={{
                                width: '64px',
                                height: '64px',
                                background: value.color
                            }}
                        />
                    )
                }
            </ColorContext.Consumer>
            <RenderPropsSample>
                {
                    value => value * 2
                }
            </RenderPropsSample>
        </>
    )
}

export default ColorBox;
