# To implement AsyncStorage

## To install dependencies

```
expo install @react-native-async-storage/async-storage
```

## Saving data

```
const saveData = async () => {
  try {
    await AsyncStorage.setItem('key', 'value');
    console.log('Data saved successfully.');
  } catch (error) {
    console.log('Error saving data:', error);
  }
};

```
## Retrieving data

```
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('key');
    if (value !== null) {
      console.log('Retrieved value:', value);
    } else {
      console.log('No data found.');
    }
  } catch (error) {
    console.log('Error retrieving data:', error);
  }
};

```
## Removing data

```
const removeData = async () => {
  try {
    await AsyncStorage.removeItem('key');
    console.log('Data removed successfully.');
  } catch (error) {
    console.log('Error removing data:', error);
  }
};

```