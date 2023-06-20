import React, {FC} from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';

import styles from './styles';

import {Title} from '../../components';

const Home: FC<Props> = () => {
  return (
    <SafeAreaView>
      <View>
        <Title text="Title component" />
      </View>
    </SafeAreaView>
  );
};

export default Home;
