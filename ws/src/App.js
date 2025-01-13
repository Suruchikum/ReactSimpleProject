// import logo from "./logo.svg";
import "./App.css";
import Container from "./Components/Container";
import Details from "./Components/Details";
import Question from "./Components/Question";
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBvebv86MG2Eer1gW-yqWFWCUVg2Boj3f4",
//   authDomain: "ws-survey-84e02.firebaseapp.com",
//   projectId: "ws-survey-84e02",
//   storageBucket: "ws-survey-84e02.firebasestorage.app",
//   messagingSenderId: "156312408879",
//   appId: "1:156312408879:web:7f03cc8aa53738dc1307da",
// };

// // Initialize Firebase (only once)
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

function App() {
  return (
    <div>
      <Container />
      <Details />
      <Question />
    </div>
  );
}

// // Default export for the App component
export default App;

// // Named exports for Firebase app and auth
// export { app, auth };
