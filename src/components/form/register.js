const io = require("socket.io-client")
const feathers = require("@feathersjs/feathers")
const socketio = require("@feathersjs/socketio-client")

const socket = io("http://localhost:3030/")
const client = feathers()

client.configure(socketio(socket))

export const messageService = client.service("preuser")

messageService.on("created", user => console.log("Created a message", user))
