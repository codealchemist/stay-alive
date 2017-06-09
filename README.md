# stay-alive

Makes tiny mouse movements forcing your machine to stay alive.


## Install

`npm install -g stay-alive`


## Run

`stay-alive`


## How it works

Listen for mouse movements after a set interval (defaul = 30 seconds).

If the mouse didn't move between intervals it makes a tiny movement
forcing you machine to stay alive.

If mouse movements are being made does nothing.

This is useful when you don't have control over your screen saver
or power saving configuration.


## Change interval

You can set an interval in seconds and pass it to **stay-alive**
like this:

`INTERVAL=60 stay-alive`

Enjoy!
