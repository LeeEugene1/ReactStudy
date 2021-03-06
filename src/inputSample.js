import React, {useState} from 'react';

export default function InputSample(){
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value)
    }
    const onReset = () => {
        setText('')
    }
    return(
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>입력</button>
            <div><b>값</b>{text}</div>
        </div>
    );
}