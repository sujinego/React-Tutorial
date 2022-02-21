import React, { Component} from 'react';
import Customer from './components/Customer';
import './App.css';



const customers = [
  {
  'id':1,
  'name': '송강',
  'birth': '9401206',
  'gender': '남자',
  'job': '배우'
},
{
  'id':2,
  'name': '한효주',
  'birth': '9401206',
  'gender': '남자',
  'job': '배우'
}, {
  'id':3,
  'name': '김고은',
  'birth': '9401206',
  'gender': '남자',
  'job': '배우'
}
]

class App extends Component{
  render() {
    return (
      <div>
        { customers.map(c => {return (<Customer key={c.id} id={c.id} name={c.name} birth={c.birth} gender={c.gender} job={c.job} />); }) }
      </div>
    );
  }
}

export default App;
