import React from "react";
import "./Main.css"

import Chat from "./Chat";

/*
    Main Component
*/
class Main extends React.Component {

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
                        <Chat />
                        <Chat />
                        <Chat />
                        <Chat />
                        <Chat />
                        <Chat />
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