Simple NodeJS auto-updates from BitBucket repo pushes

Configure webhook.service and move it to:
/etc/systemd/system/webhook.service

Then run: 
sudo systemctl start webhook

To verify, run:
sudo systemctl status webhook
