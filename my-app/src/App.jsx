import logo from './logo.svg';
import './App.css';
import Message from "./components/Message";
import {useEffect, useState} from "react";
import Input from '@mui/material/Input';
import {Button} from "@mui/material";

function App() {
    const [text, setText] = useState('');
    const [messageList, setMessageList] = useState([]);
    const HUMAN = 'HUMAN';
    const BOT = 'BOT'

    const handleTextInput = (e) => setText(e.target.value)
    const handleMessage = () => {
        setMessageList([...messageList, {'text': text, 'author': HUMAN}])
    }
    useEffect(() => {
        if (messageList[messageList.length - 1]?.author === HUMAN){
            setTimeout(() => {
                setMessageList([...messageList, {'text': 'Ответ бота', 'author': BOT}])
            }, 1500)
        }
    }, [messageList])

    return (
        <div className="App">
            <Input placeholder="Сообщение" value={text} onChange={handleTextInput}/>
            <Button variant="contained" onClick={handleMessage}>Отправить сообщение</Button>
            <Message messageList={messageList}/>
        </div>
    );
}

export default App;
