![Travis build status](https://api.travis-ci.org/repos/rpagliuca/react-github-travis.svg?branch=master)

# About
This is a small project integrating with GitHub Pages and Travis CI to deploy a sample application.

The end result is available here: https://rpagliuca.github.io/react-github-travis/

# Development
1. Fork this repository
1. Clone new forked repository
1. Install `npm` if not already installed in your machine
1. Run `npm install` in the project root
1. Run `npm start` to start the development server
1. After the previous command finishes with "Compiled Successfully", you can open up the link on your web browser and leave it opened
1. Add new content to file App.js
1. The page on your web browser should have been automatically updated (hot-reloaded)

# Deploy
1. Visit https://travis-ci.org/ and login with GitHub account
1. Click on the `+` sign to add a repository
1. Enable your newly created fork repository
1. Visit GitHub, and create a new security token for Travis: https://github.com/settings/tokens. You have to enable the "repo" scope.
1. Copy the token generated in the previous step and add it to the travis-ci pipeline as an environment variable, with name GITHUB_TOKEN.
1. `git commit`
1. `git push`
1. Visit GitHub, and go to your repository settings: "Settings -> GitHub Pages", and look for the public URL, which should be something like: http://<yourGithubUsername>.github.io/<yourRepositoryName>
1. If you try to visit this URL, you will probably see an empty (white) webpage
1. Copy the URL from the previous step and paste into the field "homepage" of the file package.json
1. `git commit`
1. `git push`
1. Now, if you try to visit this URL again (you have to wait for travis-ci build to succeed), you will see it works as expected.
