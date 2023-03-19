# shelly_generic_notification
This script is written to run on a shelly device only. If a mqtt message is send, a more generic version is formed and send by mqtt.

# Settings
This script works on different shelly devices with different amount of channels. There are 3 variables that you need to modify:


* CHANNELS = 2
* TOPIC = "shellys/events/notification"
* MODEL_NAME = "Shelly Plus 2PM"

## Channels

Variable "CHANNELS". Set this to the number of channels, which your shelly device has. For example a Shelly Plus 2PM has two chennels. So set this to "2".

## MQTT Topic

Variable "TOPIC". This is the namespace (topic) for the mqtt protokol. Use what ever you want here. All messages would be send to this topic.

## Model Name

Variable "MODEL_NAME". Simple, the product name.
