import * as PusherPushNotifications from "@pusher/push-notifications-web"
import dotenv from 'dotenv';
dotenv.config();

const beamsClient = new PusherPushNotifications.Client({
  instanceId: process.env.INSTANCE_ID,
})

beamsClient.start()
  .then(() => {
    // Build something beatiful 🌈
    console.log(arguments)
  });
