# bootcamp-meetup-complete-app

## About this project :information_source:

This project is to cetificate in [Bootcamp] of [Rocketseat].
It is an App to organize online groups that host in-person events for people with similar interests.
Has a web version and a mobile version.

### Authentication

- :heavy_check_mark: To make the user auth, JWT was the choise.
- :heavy_check_mark: To login the user must use :email: e-mail and :key: password.
- :heavy_check_mark: The fields of login and sing in are validated by Yup.

## User register and update

- :heavy_check_mark: To register the user it must use the name, e-mail and password.
- :heavy_check_mark: To update the password, the user need to input the old password, the new and confirm the new password.
- :heavy_check_mark: All passwords are encripted and persisted encripted.
- :heavy_check_mark: All register and sign in fields requests are validadet via Yup.

## MeetUp subscription

- :heavy_check_mark: The user can subscribe to meetups that are not belong to him.
- :heavy_check_mark: The user can't subscribe to meetups that are in the past.
- :heavy_check_mark: The user can't subscribe to the same meetup, more than one time.
- :heavy_check_mark: The user can't subscribe to meetups that happen at the same time.
- :heavy_check_mark: The owner of the meetup will receive an email when a user subscribe to one of his meetups.

## MeetUps list

- :heavy_check_mark: MeetUps can be list by date and are pagiated by 10 meetups.

## Subscription list

- :heavy_check_mark: There is a route to list all future meetups that the current user is subscribed.

# Extras

- Added a splash screen to the mobile app.
- Added a icon to the mobile app.
- Added differente messages to each error, these messages are coming from the backend and showed on forntend by toasts.
- Added styled toasts to the mobile app instead of the default Alert of react-native.
- Added tests to the session controller and the user controller.
- Web responsive layout.

# Room to improvements

- Create tests for ALL the controllers and components.
- Add some animations to the mobile and web application to improve UI/UX.
- Add cache to routes like the meetup list route.
- Support to iOS.

# Running the project

- Yout need to set up all the enviroment. You must install the react-native enviroment.

- Install [docker] and create a postgres, mongod db and redis container or install each separatedly, feel free to chosse the best avaiable option for you.

- After install docker

To create a postgres container and run:

```sh
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

To create a mongo container and run:

```sh
docker run --name mongodb -p 27017:27017 -d -t mongo:latest
```

To create a redis container in detached mode and run:

```sh
docker run --name redis -p 6379:6379 -d -t redis:alpine
```

- Clone this repository.
  Via git:

```sh
$ git clone git@github.com:phellipe/meetup.git
```

or via https

```sh
$ git clone https://github.com/phellipe/meetup.git
```

- Install all dependencies using the command `yarn` or `npm install` in backend, mobile and frontend directories.

```sh
$ cd backend
$ yarn or $ npm install
$ cd ..
$ cd frontend
$ yarn or $ npm install
$ cd ..
$ cd mobile
$ yarn or $ npm install
```

- Enter backend directory and copy the `.env.example` to an `.env` file and fill it with the configurations made by you in you enviroment.

- To provide the proper functionality of the front end (web and mobile) the backend must run it services, to do so:

- Create a database in postgres (remember to put the same name in `.env` file) and then run the migrations with sequelize in backend directory, if you don´t have sequelize installed globally run the package manager avaiable in your system.

```sh
$ cd backend
$ yarn sequelize db:migrate or $ npm sequelize db:migrate
```

- Enter backend directory and run `yarn run dev` or `npm run dev`.

```sh
$ cd backend
$ yarn run dev or $ npm run dev
```

- Enter frontend directory and run `yarn start` or `npm start`.

```sh
$ cd frontend
$ yarn run start or $ npm run start
```

- Enter mobile directory and run `react-native run-android` while you are running a Android emulator or via USB cable directly to an Android phone.

```sh
$ cd mobile
$ react-native run-android
```

if you don´t have the react-native enviroment installed in you system you can run with yarn or npm:

```sh
$ cd mobile
$ yarn react-native run-android or $ npm react-native run-android
```

## Observation:

- This project wasn´t tested in a IOS system due unavaiability of a macbook to do so. :mobile_phone_off:

# Technologies used in this project:

- [node.js] - evented I/O for the backend
- [yarn] - fast, reliable, and secure dependency management.
- [JWT] - JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.
- [Node Mailer] - a module for Node.js applications to allow easy as cake email sending
- [Reactotron] - A desktop app for inspecting your React JS and React Native projects. macOS, Linux, and Windows.
- [Docker] - Securely build, share and run modern applications anywhere
- [Postgres] - The World's Most Advanced Open Source Relational Database
- [MongoDB] - The database for modern applications
- [Redis] - Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker.
- [sequelize] - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.
- [Yup] - Yup is a JavaScript object schema validator and object parser.
- [ReactJS] - Uma biblioteca JavaScript para criar interfaces de usuário
- [React Native] - Create native apps for Android and iOS
- [Styled Components] - Use the best bits of ES6 and CSS to style your apps without stress
- [Redux] - A predictable state container for JavaScript apps.
- [Redux Saga] - An alternative side effect model for Redux apps
- A bunch other libs and technologies

# Contributors

phellipe

# License

Feel free to use, modifie and use for comercial.
[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)

[node.js]: http://nodejs.org
[react native]: https://facebook.github.io/react-native/
[reactjs]: https://pt-br.reactjs.org
[node mailer]: https://nodemailer.com/about/
[styled components]: https://www.styled-components.com/
[reactotron]: https://github.com/infinitered/reactotron
[redux]: https://redux.js.org/
[redux saga]: https://redux-saga.js.org/
[postgres]: https://www.postgresql.org/
[mongodb]: https://www.mongodb.com/
[docker]: https://www.docker.com/
[redis]: https://redis.io/
[yup]: https://github.com/jquense/yup
[sequelize]: https://sequelize.org/
[yarn]: https://yarnpkg.com/lang/en/
[jwt]: https://jwt.io/
[rocketseat]: https://rocketseat.com.br/
[bootcamp]: https://rocketseat.com.br/bootcamp
