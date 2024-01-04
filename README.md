# Share List

> This application is still in development and is not feature complete. It is expected to break more often than not. If you want to become a beta tester, email me and I'll set you up.

A website to share music with family and friends across music streaming services.

## Problem Statement

I wanted a service to create custom music playlists using the streaming service of my choice such that when I send it to my friends, they can directly play the music via _their_ streaming service of choice. My friend should be able to make changes to this playlist and share it to someone they think will enjoy it, continuing the cycle.

## Strategy

A class of software products that have found extreme success is usually when the user is able to create something and have a sense of ownership, for example [Notion](https://www.notion.so/). Unlike Notion, the utility gained is not from creating for self but sharing with others.

The core idea used is [storing app state in URLs](https://www.scottantipa.com/store-app-state-in-urls). This allows us to _not_ use a database which reduces the total variable cost significantly from what it could be.

## User Interface

The website will ask you to login to your service of choice (Apple Music, Spotify or YouTube). You will be redirected to a dashboard where you can create custom playlists (we will call them `share lists`). You will be able to:

- open a `share list` and play the music directly (assuming you are logged into your streaming service)
- make some changes and forward it to another friend
- export it to your streaming service and listen directly via your music app

## Technical Implementation

Sharing the playlist is as simple as sharing the link since the app state is stored in the URL. Since the website is a SPA, we use [OAuth with Proof of Key Exchange](https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow) to authenticate with Spotify.

## Contributing

To open a bug report or to add a feature request, open a PR and edit `ROADMAP.md`. Once that bug is resolved/feature is implemented, it will be moved to the `CHANGELOG.md`.
