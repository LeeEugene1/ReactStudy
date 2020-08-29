import React, {useState, useRef} from 'react'

export default function UseRef(){
        const nameInput = useRef();
        const [text, setText] = useState('');
        const onChange = (e) => {
            setText(e.target.value)
        }
        const onReset = () => {
            setText('');
            nameInput.current.focus();
        }
        return(
            <div>
                <input onChange={onChange} value={text} ref={nameInput}/>
                <button onClick={onReset}>초기화</button>
                <div>
                    <b>값</b>
                    {text}
                </div>
            </div>
        );
}