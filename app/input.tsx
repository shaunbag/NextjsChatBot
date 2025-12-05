import { useState } from "react";
import { Message } from "./chatWindow";


type Props = {
    sendMessage: Function;
    messages: Message[];
    setMessages: Function;
}

export default function Input({sendMessage,setMessages,messages}:Props){

    const [input, setInput] = useState("")

  
    function handleKeyDown(event: any) {
        if (event.key === 'Enter') {
            sendMessage(input,messages,setMessages)
        } 
    }

    return(
        <div className="fixed bottom-3 color-black">
            <input 
                type="text" 
                className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                onKeyDown={(e) => handleKeyDown(e)} 
            />
        </div>
    )
}