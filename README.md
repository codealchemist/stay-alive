# stay-alive

Makes tiny mouse movements forcing your machine to stay alive ;)

## Install

`npm install -g stay-alive`

## Run

`stay-alive`

## Run without installation

`npx stay-alive`

## How it works

Listen for mouse movements after a set interval (defaul = 30 seconds).

If the mouse didn't move between intervals it makes a tiny movement
forcing your machine to stay alive.

If you're moving your pointer it won't do anything.

This is really useful when you don't have control over your screen saver
or power saving configuration.

## Change interval

You can set an interval in seconds and pass it to **stay-alive**
like this:

`INTERVAL=60 stay-alive`

Enjoy!
