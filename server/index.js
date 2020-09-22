var Pusher = require('pusher');
const config = require('./config');

var pusher = new Pusher(config);

const TEST_CHANNELS = 100;
const TEST_EVENTS = 5;

generateChannels = () => {
  let channels = {};
  let events = {};

  for (var i = 0; i < TEST_CHANNELS; ++i) {
    let events = {};
    for (var j = 0; j < TEST_EVENTS; ++j) {
      events[`my-event-${j}`] = {};
    }
    channels[`my-channel-${i}`] = events;
  }
  return channels;
}

const channelsEvents = generateChannels();

Object.keys(channelsEvents).forEach(channelName => {
    const events = channelsEvents[channelName];
    // console.log('events', events);
    Object.keys(events).forEach(eventName => {
      // console.log('eventsName', eventName);
			pusher.trigger(channelName, eventName, {"c": channelName, "e":eventName});
    });
  });