import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';

<script src="https://www.gstatic.com/firebasejs/4.10.1/firebase.js"></script>
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
  render() {
    return (
      <div className= "App">
        <RoomList firsebase= {firebase} />
      </div>
    );
  }
}

export default App;
