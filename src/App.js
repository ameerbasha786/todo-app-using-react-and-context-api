import React from 'react';

import './App.css';

import Todoinput from './todoinput'

import { Provider } from './mycontext';



class App extends React.Component {
  constructor(props) {

    super(props)

    this.state = {

      name: "",
      usersarray: [],
      loader: true,
      edit: false,
      lastname: "",
      myindex: 0

    }

    this.savedata = this.savedata.bind(this)
    this.inputhandel = this.inputhandel.bind(this)
    this.deleteuser = this.deleteuser.bind(this)
    this.updateuser = this.updateuser.bind(this)
    this.edited = this.edited.bind(this)

  }

  savedata() {

    if (this.state.name.length === 0) {
      alert("please add users")

    } else {

      if(this.state.myindex>=0 && this.state.lastname.length !== 0){ 
        console.log(this.state.myindex,this.state.lastname.length)
        alert("value cannot be saved press edit")
        this.setState({myindex:0,lastname:"",name:""})
        
      }else{
        if(this.state.usersarray.includes(this.state.name)){
          alert("user already exsits")
        }else{
      this.setState({ loader: false, usersarray: this.state.usersarray.concat(this.state.name), name: "" })
    }
    }
    }
  }

  inputhandel(e) {

    let username = e.target.value
    let user2 = username.trim()
    
    this.setState({ name: user2 })

  }

  deleteuser(i) {

    this.setState({ usersarray: this.state.usersarray.filter((val, ind) => ind !== i) })

  }

  updateuser(i, body) {

    this.setState({ edit: true, name: this.state.usersarray[i], lastname: body, myindex: i })

  }

  edited() {

    let updatedname = this.state.name;

    let usernum = this.state.myindex;

    let tem = this.state.usersarray;

    if (this.state.name.length === 0) {

      alert("please add users")

    } else if (this.state.edit && this.state.lastname.length > 0) {

      this.setState({ usersarray: [] });

    tem.splice(usernum, 1, updatedname);

    this.setState({ usersarray: tem ,name:"",myindex:0})

    }

  }

  render() {

    return (
      <div className="mytodo">
      <h1>Todo-list</h1>
      <div className="App">
      
        <Provider value={{ removedata: this.deleteuser, changedata: this.updateuser }}>
          <Todoinput savesdata={this.savedata} name={this.state.name} inputhandels={this.inputhandel} names={this.state.usersarray} myloader={this.state.loader} editing={this.edited} />
        </Provider>

      </div>
</div>
    )
  }
}


export default App 