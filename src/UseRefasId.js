import React from 'react';

function Italian({foods}){
    return(            
    <div>
        <b>{foods.foodname}</b> <span>{foods.ingredient}</span>
    </div>
    );
}

export default function UserList({food}){
    //props로 받아온다 -> UserList에 파라미터값으로 들어가고 App.js로 이동
    // const food = [
    //     {id:'1', name:'pizza', ingredient:'cheese in topping with tomato and basil'},
    //     {id:'2', name:'pasta', ingredient:'pasta sauce,noodle,tomato sauce, meatball and basil'},
    //     {id:'3', name:'gambas', ingredient:'olive oil, shrimp, galic and pepper'}
    // ]
    return(
        <div>
            {food.map((test)=><Italian foods={test} key={test.id}/>)} 
        </div>
    )
}