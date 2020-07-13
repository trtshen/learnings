const express = require('express');
const PushNotifications = require('@pusher/push-notifications-server');
const debug = require('debug');

const config = require('./config');

const port = 8080;
const app = express();
const beamsClient = new PushNotifications({
  instanceId: config.instanceId,
  secretKey: config.secretKey,
});

app.get('/pusher/beams-auth', function(req, res) {
  // Do your normal auth checks here 🔒
  const userId = 'chaw'; // get it from your auth system
  const userIDInQueryParam = req.query['user_id'];
    debug('asd');
  if (userId != userIDInQueryParam) {
    res.status(401).send('Inconsistent request');
  } else {
    const beamsToken = beamsClient.generateToken(userId);
    console.log(beamsToken);
    res.send(JSON.stringify(beamsToken));
  }
});

app.get('/pusher/interest', function(req, res) {
  const interest = req.query['interest'];

  const channel = interest ? interest : 'general';
  beamsClient.publishToInterests([channel], {
    apns: {
      aps: {
        alert: {
          "title": "iOS: Device Interest",
          "body": `Channel: ${channel}`
        }
      }
    },
    fcm: {
      "notification": {
        "title": "Android: Device Interest",
        "body": `Channel: ${channel}`
      },
      "data": {
        "inAppNotificationMessage": "Display me somewhere in the app ui!",
        "actions": [
          {
            "icon": "emailGuests",
            "title": "EMAIL GUESTS",
            "callback": "emailGuests",
            "foreground": true
          },
          {
            "icon": "snooze",
            "title": "SNOOZE",
            "callback": "snooze",
            "foreground": false
          }
        ]
      }
    },
    web: {
      notification: {
        title: 'Hello',
        body: 'Hello, world for the web!'
      }
    }
  }).then((publishResponse) => {
    console.log('Just published:', publishResponse.publishId);
  }).catch((error) => {
    console.error('Error:', error);
  });
});

app.get('/pusher/user', function(req, res) {
  const user = req.query['user_id'];

  beamsClient.publishToUsers([user ? user : 'chaw'], {
    apns: {
      aps: {
        alert: 'Hello!'
      }
    },
    fcm: {
      notification: {
        title: 'Hello',
        body: 'Hello, Chaw!'
      }
    },
    web: {
      notification: {
        title: 'Hello',
        body: 'Hello, Chaw!'
      }
    }
  }).then((publishResponse) => {
    console.log('Just published:', publishResponse.publishId);
  }).catch((error) => {
    console.error('Error:', error);
  });
})

app.listen(port, () => console.log(`Listening on port ${port}...`));
