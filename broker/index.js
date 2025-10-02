const aedes = require("aedes")();
const net = require("net");

const server = net.createServer(aedes.handle);
const PORT = 1883;

server.listen(PORT, () => {
    console.log(`MQTT Broker running on port ${PORT}`);
});

aedes.on("client", (client) => {
    console.log(`Client Connected: ${client?.id}`);
});

aedes.on("publish", (packet, client) => {
    if (client) {
        console.log(`${client.id} published to '${packet.topic}': ${packet.payload.toString()}`);
    }
});
