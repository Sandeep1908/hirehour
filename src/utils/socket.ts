import {Socket,io} from 'socket.io-client'

const socket:Socket = io("https://backend-test.topequator.ai/message",{
    transports:['websocket']
})

export default socket