import io from 'socket.io-client'
import { useStore } from '../store';


let socket;

export const connectWithSocketServer = () =>{
    socket = io('http://localhost:5002')

    socket.on('connect', ()=>{
        console.log("connected")
    })

    socket.on('chat-history', (chatHistory) => {
        const { setChatHistory } = useStore.getState();
        setChatHistory(chatHistory);
    })

    socket.on('chat-message', (chatMessage)=>{
        const { chatHistory, setChatHistory} = useStore.getState();
        setChatHistory({
            channelId: chatHistory.channelId,
            messages : [
                ...chatHistory.messages,
                {
                    author: chatMessage.author,
                    content: chatMessage.content,
                    date: chatMessage.date,
                }
            ]
        })
    })

};

export const getChatHistory = (channelId) =>{
    console.log("chat-history1", channelId);
    socket.emit('chat-history',channelId)
}

export const sendChatMessage = ( toChannel, message) =>{
    socket.emit('chat-message', {
        toChannel,
        message
    })
};

export const closeChatSubscription = (channelId) =>{
    socket.emit('chat-unsubscribe', channelId);
};