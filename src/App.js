import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListContact from './ListContacts';
import CreateContact from './CreateContact';
import miscComponent from './miscComponent';
import * as ContactsAPI from './utils/ContactsAPI';


class App extends Component {
  state = {
    contacts : []
  }
  componentDidMount(){
    ContactsAPI.getAll().then((contacts)=>{
      this.setState({
        contacts:contacts
      })
    })
  }
  removeContact = (contact)=>{
    this.setState(
      (state) => (
        {
          contacts: state.contacts.filter((c)=>{
              return c.id !== contact.id;
          })
        }
      )
    )

    ContactsAPI.remove(contact);
  }
  createContact(contact){
    ContactsAPI.create(contact).then(contact => {
      this.setState(state => ({
        contacts : state.contacts.concat([contact])
        })
      );
    })
  }
    render() {
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
          <ListContact onDeleteContact={this.removeContact} contacts={this.state.contacts}/>
       
        )} />
         <Route path="/create" render={({history})=>(
           <CreateContact onCreateContact = {(contact)=>{
              this.createContact(contact);
              history.push('/')
             }}
             />
           )}
          />
          <Route exact path="/misc" component={miscComponent} />
      </div>
    )
    }
  }
  

export default App;
