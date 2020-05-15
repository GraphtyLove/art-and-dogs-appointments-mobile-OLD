# Art and Dogs appointment manager mobile

## What
This is a mobile app that provide a dashboard to manage appointments taken on the art and dogs website.

## Why
To help the groomer to manage appointment easily.

## Technos
It use React Native for the front-end and it communicate with Google Firebase (firestore).
The create to I used **expo**.

## Who?
Maxim Berge - programming
Cassandra Caestecker - design

## Deployment
To create an APK installer for android, follow these steps:
- At your project's root type: `expo publish`
- Then go in the `android/` folder and type: `./gradlew assembleRelease`
You will  find the APK in the `android/app/build/outputs/release/app-release.apk`

## Remarques:
To set-up the firebase firestore (database like), you need to add a `google-services.json` file at this path of the repo:
`/android/app/google-services.json`

You can find this file in your firebase account. It should be formatted like this:
```
{
  "project_info": {
    "project_number": "XXXXXXXXXXXX",
    "firebase_url": "https://PROJECT-NAME.firebaseio.com",
    "project_id": "PROJECT-NAME",
    "storage_bucket": "PROJECT-NAME.appspot.com"
  },
  "client": [
    {
      "client_info": {
        "mobilesdk_app_id": "1:XXXXXX:android:XXXXXX",
        "android_client_info": {
          "package_name": "com.APP_NAME"
        }
      },
      "oauth_client": [
        {
          "client_id": "XXXXXXXXXXX.apps.googleusercontent.com",
          "client_type": X
        }
      ],
      "api_key": [
        {
          "current_key": "XXXXXXXXX"
        }
      ],
      "services": {
        "appinvite_service": {
          "other_platform_oauth_client": [
            {
              "client_id": "XXXXXXXX.apps.googleusercontent.com",
              "client_type": X
            }
          ]
        }
      }
    }
  ],
  "configuration_version": "X"
}
```