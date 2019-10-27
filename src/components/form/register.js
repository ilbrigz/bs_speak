const io = require("socket.io-client")
const feathers = require("@feathersjs/feathers")
const socketio = require("@feathersjs/socketio-client")

const client = feathers()
const socket = io("https://backend-ixbudpbmkp.now.sh/")

client.configure(socketio(socket))

export const messageService = client.service("preuser")

messageService.on("created", user => console.log("Created a message", user))
