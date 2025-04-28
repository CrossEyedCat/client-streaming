import { create } from 'zustand';


export const useStore = create((set) =>({
    chatHistory:{
        channelId: null,
        messages: [],
    },
    findMessage: null,
    setChatHistory : ( chatHistory ) => set({ chatHistory }),
    setFindMessage : (findMessage) => set({ findMessage }),
}));