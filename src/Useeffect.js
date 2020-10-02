import React, {useEffect} from 'react';

function Italian({foods, onRemove, onToggle}){
    const { foodname, ingredient, id, active} = foods; 
    useEffect(()=>{
        console.log('food값이 설정됨')
        console.log(foods)
        return () => {
            console.log('food값이 바뀌기 전')
            console.log(foods)
        }
    },[foods])           
    return(
    <div>
        <b style={{color: active ? 'green' : 'black', cursor : 'pointer'}} onClick={()=>onToggle(id)}>{foodname}</b> <span>{ingredient}</span>
        <button onClick={() => onRemove(id)}>삭제</button>
    </div>
    );
}

export default function Useeffect({food, onRemove, onToggle}){
    return(
        <div>
            {food.map((test)=><Italian foods={test} key={test.id} onRemove={onRemove} onToggle={onToggle}/>)} 
        </div>
    )
}