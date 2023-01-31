import React, {Component} from "react";
import ColorContext from "../contexts/color";

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends Component {
    static contextType = ColorContext; // 클래스 메소드에서도 context에 넣어 둔 함수 호출 가능, but 한 클래스에서 하나의 context만 사용 가능

    handleSetColor = color => {
        this.context.actions.setColor(color);
    }

    handleSetSubColor = subColor => {
        this.context.actions.setSubColor(subColor);
    }

    render() {
        return (
            <>
                <h2>색상을 선택하세요.</h2>
                <div style={{display: "flex"}}>
                    {colors.map((color) => (
                        <div
                            key={color}
                            style={{
                                background: color,
                                width: '24px',
                                height: '24px',
                                cursor: 'pointer'
                            }}
                            onClick={() => this.handleSetColor(color)}
                            onContextMenu={e => {
                                e.preventDefault();
                                this.handleSetSubColor(color);
                            }}
                        />
                    ))}
                </div>
                <hr/>
            </>
        )
    }
}

export default SelectColors;
