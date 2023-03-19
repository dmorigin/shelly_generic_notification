 
let CHANNELS = 2;
let TOPIC = "shellys/events/notification";
let MODEL_NAME = "Shelly Plus 2PM";

Shelly.addStatusHandler(function (notification) {
  for (let id = 0; id < CHANNELS; id++) {
    if (notification.component !== "switch:" + JSON.stringify(id) &&
        typeof notification.delta.output !== "undefined") {
        // publish notification
        PublishNotification(notification.delta);
    }
  }
});


function PublishNotification(status) {

  let device = Shelly.getDeviceInfo();
  device["model_name"] = MODEL_NAME;
  
  let msg = {
    src: device.id,
    dst: TOPIC,
    method: "NotifyStatus",
    switches: [{
      id: status.id,
      output: status.output,
      source: status.source
    }],
    device: device
  };
  
  MQTT.publish(TOPIC, JSON.stringify(msg), 1, false);
}

