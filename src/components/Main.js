import React from "react";
import "./Main.css"

class Main extends React.Component {

    render(){
        return(
            <>
                <h1>Chat Box</h1>
                {/* Chat Box */}
                <div className="chatBox" >
                    <div className = "menu">
                        <h1>Chat</h1>
                        <p>-</p>
                        <p>x</p>
                    </div>    
                </div>
            </>
        )
    }

}

export default Main