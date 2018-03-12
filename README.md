<p align='center'>
    <img width='600' height='450'src='https://imgur.com/a/6p7hY'>	
</p>

## purpose

New to the Crossfit community? Confused by all the lingo and acronym? Use the app to learn the most common phrases. We use a queue data structure to move each answered question to the back of the list. Play as long as you want to master the lingo.

[Demo](#)


## tech stack
* React via [Create React App](https://github.com/facebookincubator/create-react-app)
* Redux
* NodeJS/Express 
* Passport - local
* Data structure/algorithm - Queue

## API

* [Backend](https://github.com/webbkyr/QuickConcert-Server)

TODO: 

* Use a memory strength value, rather than a Queue, to move the answered questions in the stack
* Functionality to add more questions

## client side folder structure

    my-app/
      README.md
      node_modules/
      package.json
      public/
         index.html
         favicon.ico
      src/
         actions/
         components/
         reducers/
      index.js
      store.js
      config.js
      validators.js
      local-storage.js

## server side folder structure

[Link to the server code](https://github.com/webbkyr/crossfit-terms-server)

    my-server/
      README.md
      node_modules/
      package.json
      index.js
      db-mongoose.js
      config.js
      auth/
         index.js
         router.js
         strategies.js
      questions/
         index.js
         models.js
         router.js
      test/
      users/
        index.js
        models.js
        router.js

## want to contribute?

Install Node and npm, clone/fork the repo and run the following command in your project folder to install the dependencies
    
    npm install
