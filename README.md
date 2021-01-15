### Learnings - Pusher Beams Client Web Implementation

Collections of learning materials

- Pusher https://github.com/trtshen/learnings/tree/pusher
- Git Secret https://github.com/trtshen/learnings/tree/git-secret
- SVG https://github.com/trtshen/learnings/tree/svg
- Vimeo API https://github.com/trtshen/learnings/tree/vimeo


#### Development

1. For local env development, get yourself an Beams instance id from: https://dashboard.pusher.com/beams/instances/
1. Replace `YOUR_PUSHER_BEAMS_INSTANCE_ID` with your instance key.
1. Run
  ```
    npm install
    npm start
  ```
1. Command to test if your setup works:
  ```bash
  curl -H "Content-Type: application/json" \
     -H "Authorization: Bearer YOUR_PUSHER_BEAMS_PRIMARY_KEY" \
     -X POST "https://YOUR_PUSHER_BEAMS_INSTANCE_ID.pushnotifications.pusher.com/publish_api/v1/instances/YOUR_PUSHER_BEAMS_INSTANCE_ID/publishes" \
     -d '{"interests":["hello"],"web":{"notification":{"title":"Hello","body":"Hello, world!"}}}'
  ```

Notes: all the steps above are available on Pusher Beams's instance overview page.


![Sample Result](https://github.com/trtshen/learnings/blob/pusher-client-web/imgs/pusherBeamsPushNotification.png?raw=true)
