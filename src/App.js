import React, {useState} from 'react'
import './App.css';

function App(){
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPswd]=useState("");

  const handal=()=>{
    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)
    setName('');
    setEmail('');
    setPswd('');
  }
     return(
        <div className="box">
          <label className="text">NAME :</label>
          <input type="text" className="textarea" placeholder="ENTER YOUR NAME" onChange={(e)=>setName(e.target.value)} value={name}/>
          <label className="text">EMAIL :</label>
          <input type="text" className="textarea" placeholder="ENTER YOUR E-MAIL" onChange={(e)=>setEmail(e.target.value)} value={email}/>
          <label className="text">PASSWORD :</label>
          <input type="password" className="textarea" placeholder="ENTER YOUR PASSWORD" onChange={(e)=>setPswd(e.target.value)} value={password}/><p></p>
    
          <button className="btn" onClick={handal}>Hit Me</button>
          <div className="output">
            <table>
              <tr>
                <th> NAME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                <th>E-MAIL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                <th>PASSWORD</th>
              </tr>
              <tr>
                <td><div>{localStorage.getItem("name")}</div></td>
                <td><div>{localStorage.getItem("email")}</div></td>
                <td><div>{localStorage.getItem("password")}</div></td>
              </tr>
            </table>
          </div>
        </div>
      )
}
export default App
