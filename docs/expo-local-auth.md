# To implement auth expo-local-authentication

## To install dependencies

```
expo install expo-local-authentication
```
- [ code ](https://github.com/expo/expo/tree/main/packages/expo-local-authentication)

> Edit Config : app.json

```json
{
  "expo": {
    "android": {
      "permissions": ["USE_FINGERPRINT", "USE_BIOMETRIC"]
    }
  }
}
```