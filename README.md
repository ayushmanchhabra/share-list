# Share List

> This application is still in development and is not feature complete. It is expected to break more often than not. If you want to become a beta tester, email me and I'll set you up.

A website to share music with family and friends across music streaming services.

## Problem Statement

I wanted a service which would allow me to create custom playlists using the music streaming service of my choice, send it to my friends and they could directly play the music via _their_ music streaming service of choice. My friend should be able to make changes to this playlist and share it forward to someone they thinks would enjoy it.

## User Interface

The core idea used is [storing app state in URLs](https://www.scottantipa.com/store-app-state-in-urls). This allows us to _not_ use a database.

The website will ask you to login to your service of choice (Apple Music, Spotify or YouTube). You will be redirected to a dashboard where you can create custom playlists (we will call them `share lists`). You will be able to:

- open a `share list` and play the music directly (assuming you are logged into your streaming service)
- make some changes and forward it to another friend
- export it to your streaming service and listen directly via your music app

## Technical Implementation

Sharing the playlist is as simple as sharing the link since the app state is stored in the URL. Since the website is a SPA, we use [OAuth with Proof of Key Exchange](https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow) to authenticate with Spotify.
