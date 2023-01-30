import {ColorConsumer} from "../contexts/color";
import RenderPropsSample from "./RenderProps";

const ColorBox = () => {
    return (
        <>
            <ColorConsumer>
                {({state}) => (
                    <>
                        <div
                            style={{
                                width: '64px',
                                height: '64px',
                                background: state.color
                            }}
                        />
                        <div
                            style={{
                                width: '32px',
                                height: '32px',
                                background: state.subColor
                            }}
                        />
                    </>
                )}
            </ColorConsumer>
            <RenderPropsSample>
                {
                    value => value * 2
                }
            </RenderPropsSample>
        </>
    )
}

export default ColorBox;
