#!/bin/bash

# Dev app on port 3000
ENV=dev pm2 restart dev-app --update-env || ENV=dev pm2 start env-welcome/app.js --name dev-app

# Prod app on port 3001
ENV=prod pm2 restart prod-app --update-env || ENV=prod pm2 start env-welcome/app.js --name prod-app
