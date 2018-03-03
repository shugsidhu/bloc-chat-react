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
    constructor(props){
      super(props);
      this.state = {
        activeRoom: ""
      };
    }

    handleRoomClickParent = (room) => {
      this.setState({ activeRoom: room });
    }

    render() {
      return (
        <div className="App">
          <RoomList
          firebase={firebase}
          getRoom={this.handleRoomClickParent}
          activeRoom={this.state.activeRoom}
          />
          <MessageList
          firebase={firebase}
          activeRoom={this.state.activeRoom}
          />
        </div>
      );
    }
  }

  export default App;
