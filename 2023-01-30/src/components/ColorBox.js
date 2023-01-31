import React, {useContext} from "react";
import ColorContext from "../contexts/color";

const ColorBox = () => {
    const {state} = useContext(ColorContext);  // Context 값을 편하게 조회할 수 있음

    return (
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
    )
}

export default ColorBox;
