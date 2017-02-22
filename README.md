# Caysh

This was written a small utility to help when developing an app against a static api to avoid hitting it repeatedly

The current version is hardcoded to use `http//swapi.co` but it's relatively trivial to change to what you need

It's built with [https://github.com/zeit/micro](micro) and [https://github.com/bitinn/node-fetch](node-fetch)

If you want to share it you can either:
* download [https://ngrok.com/](ngrok) and run it on that
* or you could deploy it with [https://zeit.co/now](now)
  * this is not recommended - the idea is that you can *abuse* this layer - putting it up on another free service basically defeats the point
