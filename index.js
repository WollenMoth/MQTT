import mqtt from "mqtt";
const client = mqtt.connect("mqtt://test.mosquitto.org");

client.on("connect", () => {
  client.subscribe("WollenMoth", (err) => {
    if (!err) {
      client.publish("WollenMoth", "Hola");
    }
  });
});

client.on("message", (topic, message) => {
  // message is Buffer
  console.log(message.toString());
  client.end();
});
