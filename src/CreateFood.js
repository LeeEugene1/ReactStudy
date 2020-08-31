import React from 'react';

export default function CreateFood({foodname, ingredient, onChange, onCreate}){

    return (
        <div>
            <input name="foodname" placeholder="음식이름" onChange={onChange} value={foodname} />
            <input name="ingredient" placeholder="재료" onChange={onChange} value={ingredient} />
            <button onClick={onCreate}>등록</button>
        </div>
    )
}