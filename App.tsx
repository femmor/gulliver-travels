import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

type AppProps = {};

const App: FC<AppProps> = () => {
  return (
    <SafeAreaView style={styles.safeView}>
      <View>
        <Text>Welcome to Gulliver Travel App</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
