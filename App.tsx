import React, { FC } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens';


const App = () => {
  return (
    <SafeAreaView style={styles.safeView}>
      <View>
        <Home />
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
