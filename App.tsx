import React, {useCallback} from 'react';
import {Alert, Button, Linking, StyleSheet, View, Platform} from 'react-native';

// const SendIntentButton = ({action, extras, children}) => {
//   const handlePress = useCallback(async () => {
//     try {
//       await Linking.sendIntent(action, extras);
//     } catch (e) {
//       Alert.alert('An error has occurred');
//     }
//   }, [action, extras]);

//   return <Button title={children} onPress={handlePress} />;
// };

// const OpenSimprintsButton = () => {
//   const handlePress = useCallback(async () => {
//     try {
//       await Linking.openURL(
//         'https://www.simprints.com/id/',
//       );
//     } catch (e: any) {
//       Alert.alert(e.message);
//     }
//   }, []);

//   return <Button title="Open Simprints" onPress={handlePress} />;
// };

const OpenSimprintsButton = () => {
  const handlePress = useCallback(async () => {
    const appPackageId = 'com.simprints.id';
    const appUrl = `${appPackageId}://`;
    const playStoreUrl = `https://play.google.com/store/apps/details?id=${appPackageId}`;
    const simprintsUrl = 'https://www.simprints.com/id/';

    let url = appUrl;
    if (Platform.OS === 'android') {
      const isAppInstalled = await Linking.canOpenURL(appUrl);
      console.log(isAppInstalled);
      if (!isAppInstalled) {
        url = playStoreUrl;
      }
    }

    try {
      await Linking.openURL(url);
      //await Linking.sendIntent(appPackageId);
    } catch (e: any) {
      Alert.alert(e.message);
      // if opening the app fails, try opening the Simprints website as a fallback
      //await Linking.openURL(simprintsUrl);
    }
  }, []);

  return <Button title="Open Simprints" onPress={handlePress} />;
};

const App = () => {
  return (
    <View style={styles.container}>
      <OpenSimprintsButton />
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
