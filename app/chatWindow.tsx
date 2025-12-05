'use client'
import { useEffect, useState } from "react";
import Bubble from "./bubble"
import Input from "./input"

export type Message = {
    user?: string;
    bot?: string;
};

type ChatResponse = {
    reply: string;
};


export default function ChatWindow() {


    const [messages, setMessages] = useState<Message[]>([])

    useEffect(() => {
        console.log(messages)
    },[messages])

    const sendMessage = async (
        userInput: string,
        messages: Message[],
        setMessages: (msgs: Message[]) => void
    ) => {
        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                body: JSON.stringify({ message: userInput }),
                headers: { "Content-Type": "application/json" },
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data: ChatResponse = await res.json();

            setMessages([...messages, { user: userInput, bot: data.reply }]);
        } catch (err) {
            console.error("Error sending message:", err);
        }
    };

    return (
        <div className="flex flex-col items-center gap-6 h-screen bg-white">
            <div>
                {
                    messages.map((message,index) => {
                        return <Bubble key={`msg${index}`} message={message.bot} />
                    })
                }
            </div>
            <Input
                sendMessage={sendMessage}
                setMessages={setMessages}
                messages={messages}
                key={'InputChat'}
            />
        </div>
    )
}