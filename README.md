# bitbucket-nodejs-webhook
Wanted to give the world a simple BitBucket <-> NodeJS webhook. This uses the GUID from the HTTP header 'x-hook-uuid' from the push request to verify that it's BitBucket.

Configure `webhook.service` and move it to:
```sh
/etc/systemd/system/webhook.service
```

Then run: 
```sh
sudo systemctl start webhook
```

To verify, run:
```sh
sudo systemctl status webhook
```

# Additional Notes
Make sure you unblock the port you set the Node server to run on. Also, from the webhooks section in BitBucket, you'll get your x-hook-uuid
