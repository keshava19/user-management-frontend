import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Header } from './components/Header'
import { Users } from './components/Users'
import CreateUser from './components/CreateUser'
import { DisplayBoard } from './components/DisplayBoard'
import { getAllUsers, createUser } from './services/UserService'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      users: [],
      numberOfUsers: 0
    };
  }

  createUserApp = (e) => {
    createUser(this.state.user)
      .then(response => {
        console.log(response);
        this.setState({ numberOfUsers: this.state.numberOfUsers + 1 })
      });
  }

  getAllUsersApp = () => {
    getAllUsers()
      .then(users => {
        console.log(users);
        this.setState({ users: users, numberOfUsers: users.length });
      });
  }

  onChangeForm = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      user: { ...prevState.user, [name]: value }
    }));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-8">
              <CreateUser
                onChangeForm={this.onChangeForm}
                createUser={this.createUserApp}
              ></CreateUser>
            </div>
            <div className="col-md-4">
              <DisplayBoard
                numberOfUsers={this.state.numberOfUsers}
                getAllUsers={this.getAllUsersApp}
              ></DisplayBoard>
            </div>
          </div>
        </div>
        <div className="container mrgnbtm">
          <Users users={this.state.users}></Users>
        </div>
      </div>
    );
  }
}

export default App;