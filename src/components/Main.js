import React from "react";
import "./Main.css"

import Chat from "./Chat";

// Database Model Sample
import chatRecords from "../models/chatRecords"
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";

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
    handleChatChange = (e) => {
        e.preventDefault();
        // console.log(e.target.value)
        this.setState({
            chat: e.target.value
        })
    }
    handleChatSubmit = (e) => {
        e.preventDefault();
        this.setState({
            chat: "",
        })
        e.target.previousSibling.value = ""
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
                                <Chat 
                                    key={index} 
                                    time = {chat.time} 
                                    username = {chat.username} 
                                    chat = {chat.chat}
                                />
                            )                            
                        })}
                    </div>  
                    <div className = "chatInput">
                        <input 
                            type="text" 
                            onChange={this.handleChatChange}
                        />
                        <button onClick={this.handleChatSubmit}>Send</button>
                    </div>
                </div>
            </>
        )
    }

}

export default Main