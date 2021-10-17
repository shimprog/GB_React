import logo from './logo.svg';
import './App.css';
import Message from "./components/Message";

function App() {
  const text = "message in component"
  return (
    <Message text={text}/>
  );
}

export default App;
