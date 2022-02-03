import './App.css';

function Userlist () {
  return (
    <div className="userlist" align="center">
    <h1 style={{color:"white"}}>UserName</h1>
    </div>
  )
}

function Chat () {
  return (
    <div className="chat" >
      <br></br><p>สวัสดีเราชื่อรุจนะ</p>
      <p align="right">สวัสดีเราชื่อ_____</p>
      <p>ยินดีที่ได้รู้จักนะ</p>
      <p align="right">ยินดีที่ได้รู้จักเหมือนกัน</p>
    </div>
  )
}

function Inputbox () {
  return (
    <div className="inputbox" align="center"><br></br>
      <input type="text" style={{height: "30px"}} font size= "40" padding="300"></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="button" value="Send"></input>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Userlist/>
      <Chat/>
      <Inputbox/>
    </div>
  );
}

export default App;
