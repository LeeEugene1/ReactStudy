import React, {useRef, useState} from 'react';
// import React from 'react';
import './App.css';
// import UserList from './UserList';
// import MultipleInput from './MultipleInput';
// import InputSample from './inputSample';
// import UseRef from './UseRef'
import UseRefasId from './UseRefasId'
import CreateFood from './CreateFood'


function App() {
  //useState를 import하고
  const [inputs,setInputs] = useState({
    foodname:'',
    ingredient:'',
  });
  const {foodname, ingredient} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    })
  }
  //여기에 붙여넣고 import에 {useRef추가한다}
  //useState에 담으면 일반배열이 컴포넌트의 상태로써 관리된다.
  const [food, setFoods] = useState(
    [
    {id:'1', foodname:'pizza', ingredient:'cheese in topping with tomato and basil'},
    {id:'2', foodname:'pasta', ingredient:'pasta sauce,noodle,tomato sauce, meatball and basil'},
    {id:'3', foodname:'gambas', ingredient:'olive oil, shrimp, galic and pepper'}
    ]
  )

  // 초기값을 4로한다.
  const nextId = useRef(4);

  const onCreate = () => {
    const foods = {
      id: nextId.current,
      foodname,
      ingredient,
    };
    // setFoods([...food, foods]);
    setFoods(food.concat(foods))

    //입력될때 input 내용 지우기
    setInputs({
      foodname:'',
      ingredient:'',
    });

    // console.log(nextId.current); //4
    nextId.current += 1;
    console.log(nextId.current); //id값이 +1된모습을 확인할수있다.

  };
  // onCreate();
  return (
    // <InputSample/>
    // <MultipleInput/>
    // <UseRef/>
    // <UserList/>
    <>
    <CreateFood foodname={foodname} ingredient={ingredient} onChange={onChange} onCreate={onCreate}/>
    <UseRefasId food={food} />
    </>
  )
}

export default App;
