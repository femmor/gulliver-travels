import React, { FC } from 'react';
import { View, SafeAreaView } from 'react-native';
import styles from './styles';

import { Title } from '../../components';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title text="Where do" style={{
          fontWeight: 'normal',
        }}/>
        <Title text="you want to go" />
        <Title text="Explore Attractions" style={styles.subTitle}/>
      </View>
    </SafeAreaView>
  );
};

export default Home;
