import "./App.css";
// import Container from "./Components/Container";
import Register from "./Components/Register";
import Login from "./Components/Login";
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; // Import required database functions
import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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

// Class-based component for App
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0, // 0 for login, 1 for register
    };
  }

  // Function to toggle between login and register
  togglePage = () => {
    this.setState({ page: this.state.page === 0 ? 1 : 0 });
  };

  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>

        {/* Show either Register or Login based on the state */}
        {this.state.page === 1 ? <Register /> : <Login />}

        {/* Button to toggle between pages */}
        <button onClick={this.togglePage}>
          {this.state.page === 0 ? "Go to Register" : "Go to Login"}
        </button>
      </div>
    );
  }
}

// Default export for the App component
export default App;
