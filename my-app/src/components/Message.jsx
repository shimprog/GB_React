import React from 'react'

export default function Message({ messageList }) {
    return (
        <div className="message">
            {messageList.map(el => <div>{el.text}</div>)}
        </div>
    )
}





