import React, { useEffect, useState } from 'react'; 
import logo from './logo.svg';
import './App.css';


function App() {
  const products = [
    { name: 'PhotoShop', prise: '$58.99' },
    { name: 'Ms Word', prise: '$99.99' },
    { name: 'Illustrator', prise: '56.99' },
    { name: 'Ms Point', prise: '56.99' }

  ]

  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
        <Counts></Counts>
        <Counts></Counts>
        <Counts></Counts>
        <Counter></Counter>
        <Product products={products[0]}></Product>
        <Product products={products[1]}></Product>
        <Product products={products[2]}></Product>
        <Product products={products[3]}></Product>



        {/* <Person name="Mehedi Hassan" id="201-15-3756"></Person>
        <Person name="Abdul Alim" id="201-15-3775"></Person>
        <Person name="Nilim Fersiat" id="201-153757"></Person>
        <Person name="Hridoy" id="201-153772"></Person>
        <Person name= 'Mustakim' id='193-15-3007'></Person>   */}

      </header>
    </div>
  );
}
function Person(props) {

  return (
    <div style={{ border: '5px solid yellow', margin: '10px', padding: '0px', backgroundColor: 'black', width: '600px' }}>
      <h1>I am {props.name}</h1>
      <h2>Id-{props.id}</h2>
      <p>Section-PC-R</p>
    </div>
  )

}
function Product(props) {
  const productStyle = {

    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightGray',
    width: '200px',
    height: '250px',
    margin: '5px',
    float: 'right',

  }
  const { name, prise } = props.products;
  console.log(name, prise);
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h3>{prise}</h3>

      <button>Buy Now</button>

    </div>

  )
}

// // lecture: 32_10, 11 : Component state hook and set state method
function Counter() {
  const [count, setCount] = useState(11);

  const handleDecrease = () => setCount(count - 1);

  const cardStyle = {
    border: '1px solid red',
    marginTop: '10px',
    padding: '10px',
    backgroundColor: 'blue',

  }

  return (
    <div style={cardStyle}>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 2)}>DoubleCount</button>
    </div>

  )
}
function Counts() {
  const cardStyle = {
    border: '1px solid blue',
    marginTop: '10px',
    padding: '10px',
    backgroundColor: 'blue',

  }
  const buttonStyle = {
    backgroundColor: 'cyan'
  }
  const [count, setCount] = useState(10);
  const handleCardAdd = () => setCount(count + 1);
  return (
    <div style={cardStyle}>
      <h1>Number:{count}</h1>
      <button onClick={() => setCount(count + 1)} style={buttonStyle}>CardAdd</button>
      <button onClick={() => setCount(count - 1)} style={buttonStyle}>CardMinus</button>

    </div>
  )
}

// lecture: 32_ 12 : Dynamic data load, Api call useEffect integrate state
function Users() {                              
  const [users, setUsers] = useState([0]);
  useEffect(() => {
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(data => setUsers(data));


  })

  return (
    <div>
      <h3>Dynamic Users: {users.length} </h3>
      {
      users.map(users => <li>{users.name}: {users.email}</li>)
      }

    </div>
  )
}

export default App;