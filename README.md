# Vue image uploader with Firebase  
Sharing or hosting images, sometimes would be challenging task for me, especially when building HTML template with specific one instead of using any placeholder. Moreover, sharing a link is a easier way than sending actual one separately. Then, I have decided to create my own image uploader to learn the logic behind it. 

<br/>

## Goals
* Provide shorter download/access link
* Remove images from the Firebase Storage after a specific time

<br/>

## Folder structure
```
├── src
|   ├── assets
|   ├── components
|   ├── plugins
|   ├── App.vue
|   └── main.js
```

<br/>

## Dependencies
* [Firebase](https://firebase.google.com/)
(v9.7.0) for uploading process
* [Vue](https://vuejs.org/)
(v3.2.25) for creating frontend

<br/>

> **NOTE:** [Vite](https://vitejs.dev/) have been used as a development template
<br/>

## Setup
To run this project, install it locally using npm. Keep in mind that you should be in the root directory before running these commands.
```
$ npm install
$ npm run dev
```
