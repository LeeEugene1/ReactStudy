import React from 'react';

//onRemove를 Italian함수에 전달했으니 받아와야한다.
//[update]를위해 active추가하고 b태그에 active시 발생할 스타일추가하기
//[update] onToggle을 받아와서 onclick에 새로운함수를 만들어 ontoggle에 id를 넣어서 호출한다.
function Italian({foods, onRemove, onToggle}){
    const { foodname, ingredient, id, active} = foods;            
    return(
    // <div>
    //     <b>{foods.foodname}</b> <span>{foods.ingredient}</span>
    //     <button onClick={() => onRemove(foods.id)}>삭제</button>
    // </div>
    <div>
        <b style={{color: active ? 'green' : 'black', cursor : 'pointer'}} onClick={()=>onToggle(id)}>{foodname}</b> <span>{ingredient}</span>
        <button onClick={() => onRemove(id)}>삭제</button>
    </div>
    );
}

//onRemove props를 받고 컴포넌트에 추가한다
//[update] onToggle을 받아와서추가한다
export default function Remove({food, onRemove, onToggle}){
    return(
        <div>
            {food.map((test)=><Italian foods={test} key={test.id} onRemove={onRemove} onToggle={onToggle}/>)} 
        </div>
    )
}