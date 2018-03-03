import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import { RoomList } from './components/RoomList.js';
import { MessageList } from './components/MessageList.js';

  var config = {
    apiKey: "AIzaSyAe2jTRgHYTrqM08Uq4R8CWei3GgrKpDCk",
    authDomain: "bloc-chat-react-b36ac.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-b36ac.firebaseio.com",
    projectId: "bloc-chat-react-b36ac",
    storageBucket: "bloc-chat-react-b36ac.appspot.com",
    messagingSenderId: "55903431811"
  };
  firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {activeRoom: ""};
    this.activeRoom = this.activeRoom.bind(this);
  }

activeRoom(room) {
  this.setState({ activeRoom: room })
}

  render() {
    const showMessages = this.state.activeRoom;
    return (
      <div>
        <h1>{this.state.activeRoom.title || "Select A Room"}</h1>
        <RoomList firebase={firebase} activeRoom={this.activeRoom} />
        { showMessages ?
        (<MessageList firebase={firebase} activeRoom={this.state.activeRoom.key}/>)
        : (null)
        }
      </div>
    );
  }
}

export default App;
