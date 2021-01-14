const PushNotifications = require('@pusher/push-notifications-server');
const config = require('./config');

const beamsClient = new PushNotifications({
  instanceId: config.instanceId,
  secretKey: config.secretKey,
});

module.exports = beamsClient;