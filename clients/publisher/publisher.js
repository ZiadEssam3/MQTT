const mqtt = require('mqtt');
const { brokerUrl, topics } = require('../../config/mqttConfig');

const client = mqtt.connect(brokerUrl);

client.on('connect', () => {
    console.log('[]Publisher connected to MQTT broker');

    // Simulate publishing every 3 seconds
    setInterval(() => {
        const temp = Math.floor(Math.random() * 30) + '°C';
        client.publish(topics.temperature, temp);
        console.log(`[] Published: ${temp}`);
    }, 3000);

    setInterval(() => {
        const state = Math.random() > 0.5 ? "ON" : "OFF";
        client.publish(topics.lights, state);
        console.log(`[] Published to '${topics.lights}': ${state}`);
    }, 5000);


});
