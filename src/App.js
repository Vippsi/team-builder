import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import Member from './Member'

const initialMember = [
  {
    name: '',
    email: '',
    role: '',
  },
]

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}




function App() {

  const [members, setMembers] = useState(initialMember)
  const [formValues, setFormValues] = useState(initialFormValues)


const onInputChange = event => {
  const { name } =event.target
  const { value } = event.target

  setFormValues({...formValues, [name]: value})
}


const onSubmit = event => {
  event.preventDefault()

  const newMember = { ...formValues}
  setMembers([newMember, ...members])
  setFormValues(initialFormValues)
}




  return (
    <div className="App">
      {console.log(members)}
      <Form 
      values = {formValues}
      onInputChange={onInputChange}
      onSubmit = {onSubmit}/>

    {
      members.map(member => {
        return (
          <Member info={member}/>
        )
      })
    }
    </div>
  );
}

export default App;
