import React, {useCallback} from 'react';
import {
  Alert,
  Button,
  Linking,
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';

const packageName = 'com.simprints.id';
const appLink =
  Platform.OS === 'android'
    ? `intent://scan#Intent;scheme=simprintsid;package=${packageName};end`
    : `simprintsid://scan`;

const openSimprints = async () => {
  try {
    const canOpen = await Linking.canOpenURL(appLink);
    if (canOpen) {
      await Linking.openURL(appLink);
    } else {
      Alert.alert('Simprints is not installed');
    }
  } catch (e) {
    Alert.alert('Simprints is not installed');
  }
};

const App = () => {
  return (
    <View style={styles.container}>
      <Button
        onPress={openSimprints}
        title="open simprints"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
