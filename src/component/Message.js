import React from 'react'

function Message(props) {

    const {messageContainerStyle} = Styles
    return (
        <div className="messageContainer" style={messageContainerStyle}>
            {props.children}
        </div>
    )
}

const Styles = {
    messageContainer : {
        display: 'block'
    }
}

export default Message
