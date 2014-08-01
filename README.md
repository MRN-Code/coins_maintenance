COINS Maintenance Page
=====================

This is a simple static webpage to be displayed when COINS is undergoing maintenance or an outage.

# Requirements

Nodejs

# Usage

After cloning this repository, perform the following steps to start serving this page.

1. `npm install`
2. Ensure that all processes listening on ports 80 and 443 have been stopped (e.g. apache or node)
3. `npm start`

To stop the server run `npm stop`

# How it works

The webpage is served by **httpster**.
httpster is typically globally installed and started with `httpster -p <port number>`.
In this case, httpster is installed locally, and can be started with `node node_modules/httpster/lib/server.js -p <port number>`.
Some shortcuts have been added to bring the server up quickly (see Usage).

# Testing and Development

To serve this page on non-standard ports, run `npm test`, which will start the server on port 3333.
The process can be stopped using `npm stop`.


