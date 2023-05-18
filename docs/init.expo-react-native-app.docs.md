# Expo React Native App

docs to buil a android app using Expo React Native

## Official docs Links

- [React Native](https://reactnative.dev/docs/getting-started)
- [Expo Dev](https://docs.expo.dev/tutorial/introduction/)
- [Expo Local Auth](https://docs.expo.dev/versions/latest/sdk/local-authentication/)

## 1 To init dev env

```
npm install -g create-expo-app

npx create-expo-app name-app

cd name-app
npm start

```

## 2 To specific work


### [1 To implement auth expo-local-authentication](./expo-local-auth.md)

### [2 To implement push notification token generation](post-push-notify-tocken-to-api.md)




## 3 Code and Test

using expo server test app in expo go

```
npm start
```

- after testing servises start packaging it to build versions

## 4 To build package

```
npm install --global expo-cli eas-cli
```

- Create expo account and login

```
expo login
```

- verify login

```
expo whoami
```

> Edit Config : eas.json for specific build

<details>
 
<summary> to build apk </summary>

```json
{
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    },
    "preview2": {
      "android": {
        "gradleCommand": ":app:assembleRelease"
      }
    },
    "preview3": {
      "developmentClient": true
    },
    "production": {}
  }
}
```

</details>

run

```
npx eas build -p android --profile preview
```

<details>
<summary> to build aab </summary>

```json
{
  "cli": {
    "version": ">= 3.12.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {}
  },
  "submit": {
    "production": {}
  }
}
```

</details>

run

```
npx eas build -p android
```
