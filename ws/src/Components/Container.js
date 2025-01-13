import React, { Component } from "react";
import Details from "./Details";
import Question from "./Question";
import { v4 as uuidv4 } from "uuid";
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database"; // Import required database functions

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvebv86MG2Eer1gW-yqWFWCUVg2Boj3f4",
  authDomain: "ws-survey-84e02.firebaseapp.com",
  projectId: "ws-survey-84e02",
  databaseURL: "https://ws-survey-84e02-default-rtdb.firebaseio.com",
  storageBucket: "ws-survey-84e02.firebasestorage.app",
  messagingSenderId: "156312408879",
  appId: "1:156312408879:web:7f03cc8aa53738dc1307da",
};

// Initialize Firebase only if no app instance exists
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app); // Initialize authentication
const database = getDatabase(app); // Initialize database

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuidv4(),
      name: null,
      email: null,
      questions: {
        q1: null,
        q2: null,
        q3: null,
        other: null,
      },
      isSubmitted: false,
    };
  }

  // Handle details submission
  detailsSubmitHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    this.setState({ name, email }, () => console.log(this.state));
  };

  // Handle questions submission
  questionsSubmitHandler = (event) => {
    event.preventDefault();
    const questions = {
      q1: event.target.q1.value,
      q2: event.target.q2.value,
      q3: event.target.q3.value,
      other: event.target.other ? event.target.other.value : null,
    };
    const isSubmitted = true;
    // Save data to Firebase Database
    const userId = this.state.id;
    set(ref(database, `survey/${userId}`), {
      name: this.state.name,
      email: this.state.email,
      questions: questions,
    })
      .then(() => {
        console.log("Data saved successfully!");
        this.setState({ questions, isSubmitted: true });
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="container card mt-2">
            <h1 className="text-center text-primary">WsCube Tech Survey</h1>
          </div>
        </div>
        {this.state.isSubmitted ? (
          <div className="card">
            <h1>Thankyou</h1>
          </div>
        ) : this.state.name === null && this.state.email === null ? (
          <Details submit={this.detailsSubmitHandler} />
        ) : (
          <Question submit={this.questionsSubmitHandler} />
        )}
      </>
    );
  }
}

export default Container;
