const express = require('express');
const debug = require('debug');

const beamsClient = require('./beams');

const port = 8080;
const app = express();

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

app.get('/pusher/interest', async function(req, res) {
  const interest = req.query['interest'];

  let channel = interest ? [interest] : ['general'];

  if (interest === 'all') {
    let interests = [];
    for (var i = 0; i < 100; ++i) {
      interests.push(`name-${i}`);
    }
    channel = interests;
  }

  try {

    const result = await beamsClient.publishToInterests(channel, {
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
    });
    console.log('Just published:', result.publishId);
    res.json(result);
  } catch(e) {
    res.json({
      error: JSON.stringify(e)
    });
    console.error('Error:', e);
  }
});

app.get('/pusher/delete', async function (req, res) {
  const userId = req.query['user_id'] || 'anykindofid';
  debug(`userId:: ${userId}`);
  if (userId === null || typeof userId !== 'number') {
    debug('no id provided');
    return;
  }

  try {
    const deleted = await beamsClient.delete(userId);
    return res.status(200).json(deleted);
  } catch (err) {
    debug(err);
  }
});

app.get('/pusher/user', async function(req, res) {
  const user = req.query['user_id'] || 'chaw';

  try {
    const result = await beamsClient.publishToUsers([user], {
      apns: {
        aps: {
          alert: 'Hello!'
        }
      },
      fcm: {
        notification: {
          title: 'Hello',
          body: `Hello, ${user}!`
        }
      },
      web: {
        notification: {
          title: 'Hello',
          body: `Hello, ${user}!`
        }
      }
    });
    return res.status(200).send({
      message: 'Just published:: ' + result.publishId,
      raw: result
    });
  } catch(error) {
    console.error('Error:', error);
  }
})

app.listen(port, () => console.log(`Listening on port ${port}...`));
