import React, {useState} from 'react'

export default function MultipleInput(){
        const [inputs, setInputs] = useState({
            name:'',
            nickname:'',
        });
        const {name, nickname} = inputs;
        const onChange = (e) => {
            console.log(e.target.name);//네임과 닉네임의미
            console.log(e.target.value);//네임과 닉네임에들어있는 값
            // const {name, value} = e.target;//e.target을 여러번쓰기싫어서 

            const nextInputs = {
                ...inputs,
                [e.target.name]: e.target.value,
            };
            setInputs(nextInputs);
        }
        const onReset = () => {
            setInputs({
                name:'',
                nickname:'',
            })
        }
        return(
            <div>
                <input name="name" placeholder = "이름" onChange={onChange} value={name}/>
                <input name="nickname" placeholder = "닉네임" onChange={onChange} value={nickname}/>
                <button onClick={onReset}>초기화</button>
                <div>
                    <b>값</b>
                     {name} ({nickname})
                </div>
            </div>
        );
}