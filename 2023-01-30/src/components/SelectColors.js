import {ColorConsumer} from "../contexts/color";

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors = () => {
    return (
        <>
            <h2>색상을 선택하세요.</h2>
            <ColorConsumer>
                {({actions}) => (
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
                                onClick={() => actions.setColor(color)}
                                onContextMenu={e => { // 우클릭 이벤트
                                    e.preventDefault(); // 브라우저 메뉴가 뜨지 않도록 함
                                    actions.setSubColor(color);
                                }}
                            />
                        ))}
                    </div>
                )}
            </ColorConsumer>
            <hr/>
        </>
    )
}

export default SelectColors;
