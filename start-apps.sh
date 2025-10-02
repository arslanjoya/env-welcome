#!/bin/bash

# Stop existing apps if running
pm2 stop dev-app prod-app
pm2 delete dev-app prod-app

# Start dev environment
ENV=dev pm2 start app.js --name dev-app

# Start prod environment
ENV=prod pm2 start app.js --name prod-app
