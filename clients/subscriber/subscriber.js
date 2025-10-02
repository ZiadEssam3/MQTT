const mqtt = require('mqtt');
const { brokerUrl, topics } = require('../../config/mqttConfig');

const client = mqtt.connect(brokerUrl);

client.on('connect', () => {
    console.log('[] Subscriber connected to MQTT broker');
    client.subscribe(topics.temperature, (err) => {
        if (!err) {
            console.log(`[] Subscribed to ${topics.temperature}`);
        }
    });

});
client.on('message', (topic, message) => {
    console.log(`[] Received on ${topic}: ${message.toString()}`);
});
