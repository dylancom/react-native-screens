import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { enableScreens, ScreenStack, Screen } from 'react-native-screens';

enableScreens();

export default function App() {
  const [state, setState] = React.useState(0);
  return (
    <ScreenStack style={styles.container}>
      <Screen style={styles.container}>
        <Text>Yolo</Text>
        <Button title="move" onPress={() => setState(2)} />
      </Screen>
      {state === 2 && (
        <Screen style={styles.container} stackPresentation="modal">
          <Text>Yolo</Text>
          <Button title="move" onPress={() => setState(0)} />
          <View style={styles.bottom} />
        </Screen>
      )}
    </ScreenStack>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    paddingTop: 100,
    backgroundColor: 'white',
  },
  bottom: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});
