# Art and Dogs appointment manager mobile

## What
This is a mobile app that provide a dashboard to manage appointments took on the groomer's website.


## Features
- Real-time receiving and updating appointments. ✅
- Defining a appointment proposal date and time with android's calendar and clock. ✅
- Appointment status management. *(`to-do` or `waiting` answer from the customer)* ✅
- Appointment status icon. ✅
- Button to send auto-formatted SMS that include the date and time proposal. ✅
- Button to call the customer. ✅
- Button to delete an appointment. ✅
- Button to switch the appointment's status. ✅
- Switcher to filter appointments based on their status. ✅
- Push notification when new appointments. ❌ *(to-do)*

## Why
To help the groomer to manage appointments easily.

## Technos
It use `React Native` for the mobile ap and Google `Firebase` (firestore) as a database/server.

React native app created with `expo`.


## Screenshots

### To-do view
<img src="assets/images/mobile-app-screen-todo.jpg" alt="to-do view screenshot" height="600" />
<img src="assets/images/mobile-app-screen-todo-2.jpg" alt="to-do view screenshot" height="600" />

### Waiting view
<img src="assets/images/mobile-app-screen-waiting.jpg" alt="waiting view screenshot" height="600" />

### Calendar date picker
<img src="assets/images/mobile-app-screen-calendar.jpg" alt="calendar view screenshot" height="600" />

### Clock time picker
<img src="assets/images/mobile-app-screen-clock.jpg" alt="clock view screenshot" height="600" />

### SMS auto-formatted tool
<img src="assets/images/mobile-app-screen-sms.jpg" alt="SMS view screenshot" height="600" />


## Who?
- Maxim Berge - Code
- Cassandra Caestecker - design


## Deployment
To create an APK installer for android, follow these steps:
- At your project's root type: `$ expo publish`
- Then go in the `android/` folder and type: `$ ./gradlew assembleRelease`
You will find the APK in `android/app/build/outputs/apk/release/app-release.apk`


## Remarques:
To set-up the firebase firestore (database like), you need to add a `google-services.json` file at this path of the repo:
`/android/app/google-services.json`

You can find this file in your firebase account.