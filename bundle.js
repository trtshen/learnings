'use strict';

var PusherPushNotifications = require('@pusher/push-notifications-web');
var dotenv = require('dotenv');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var dotenv__default = /*#__PURE__*/_interopDefaultLegacy(dotenv);

dotenv__default['default'].config();

const beamsClient = new PusherPushNotifications.Client({
  instanceId: process.env.INSTANCE_ID,
});

beamsClient.start()
  .then(() => {
    // Build something beatiful 🌈
    console.log(arguments);
  });
