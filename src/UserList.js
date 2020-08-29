import React from 'react';

function Italian({foods}){
    return(            
    <div>
        <b>{foods.name}</b> <span>{foods.ingredient}</span>
    </div>
    );
}

export default function UserList(){
    const food = [
        {id:'1', name:'pizza', ingredient:'cheese in topping with tomato and basil'},
        {id:'2', name:'pasta', ingredient:'pasta sauce,noodle,tomato sauce, meatball and basil'},
        {id:'3', name:'gambas', ingredient:'olive oil, shrimp, galic and pepper'}
    ]
    return(
        <div>
            {food.map((test,index)=><Italian foods={test}/>)} 
        </div>
    )
}