import React, {useCallback} from 'react';
import {Alert, Button, Linking, StyleSheet, View} from 'react-native';

const SendIntentButton = ({action, extras, children}) => {
  const handlePress = useCallback(async () => {
    try {
      await Linking.sendIntent(action, extras);
    } catch (e) {
      Alert.alert('An error has occurred');
    }
  }, [action, extras]);

  return <Button title={children} onPress={handlePress} />;
};

const OpenSimprintsButton = () => {
  const handlePress = useCallback(async () => {
    try {
      await Linking.sendIntent('android.intent.action.MAIN', [
        {key: 'package', value: 'com.simprints.id'},
      ]);
    } catch (e) {
      Alert.alert('An error has occurred');
    }
  }, []);

  return <Button title="Open Simprints" onPress={handlePress} />;
};

const App = () => {
  return (
    <View style={styles.container}>
      <SendIntentButton  action="android.intent.action.POWER_USAGE_SUMMARY">
        Power Usage Summary
      </SendIntentButton>

      <SendIntentButton action="android.intent.action.MAIN" extras={[{key: 'package', value: 'com.simprints.id'}]}>
        Open Simprints ID
      </SendIntentButton>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

export default App;
