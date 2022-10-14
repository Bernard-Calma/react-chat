import React from "react";
import "./Main.css"

import Chat from "./Chat";
import chatRecords from "../models/chatRecords"
console.log(chatRecords)
/*
    Main Component
*/
class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            chat: "",
            chatRecords: chatRecords
        }
    } 
    render(){
        return(
            <>
                <h1>Chat Box</h1>
                {/* Chat Box */}
                <div className="chatBox" >
                    <div className = "menu">
                        <h1>Chat</h1>
                        <div>
                            <p>-</p>
                            <p>x</p>
                        </div>
                    </div>  
                    <div className = "chatContainer">
                        {this.state.chatRecords.map((chat, index) => {
                            return(
                                <Chat key={index} time = {chat.time} username = {chat.username} chat = {chat.chat}/>
                            )                            
                        })}
                    </div>  
                    <div className = "chatInput">
                        <input type="text"/>
                        <button>Send</button>
                    </div>
                </div>
            </>
        )
    }

}

export default Main