# bitbucket-nodejs-webhook
A simple BitBucket <-> NodeJS webhook. This uses the GUID from the HTTP header 'x-hook-uuid' from the push request to verify that it's BitBucket.

# Requirements
 - node.js
 - Linux
 
 # Installation & Configuration
Configure `webhook.js` with your webhook's `x-hook-uuid`, port number and correct `/path/to/repo`.
 
Next, configure the `webhook.service` file with your `node` and `webhook.js` paths, and the target port you're going to use with the `node` server, and then move it to:
```sh
/etc/systemd/system/webhook.service
```

Make sure file permissions are set to **0644** and file ownership is **root:root**, which is standard practice for all system files.

Then run the following command to start `webhook.service`. 
```sh
sudo systemctl start webhook
```

To verify your new webhook service is working, run:
```sh
sudo systemctl status webhook
```

# Additional Notes
Make sure you unblock the port you set the new Node server to run on. Also, if you can't find it, you look in the webhooks section in BitBucket, you'll get your x-hook-uuid.

# Support
Email + Paypal (show some love!) - dman.exe@gmail.com

# License
GNU General Public License v3.0

Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.
