import './App.css';
import Connection from './components/Connector/connect';
import ImagemHeader from './components/ImgHeader';
import InputMessage from './components/InputMessage';
import ExibeMsg from './components/Message/message';
import { SendMQTT } from './components/Send/send';

function App() {

  return (
    <div className="App">
    <ImagemHeader/>
    <Connection/>
    <ExibeMsg/>
    <SendMQTT/>
   {/*  <InputMessage/> */}
    </div>
  )
}

export default App;