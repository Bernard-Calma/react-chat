import React from "react";
import "./Chat.css";

class Chat extends React.Component{
    render(){
        return(
            <div>
                <p className = "chat">({this.props.time}) {this.props.username}: {this.props.chat}</p>
            </div>
        )
    }
}

export default Chat;