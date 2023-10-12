import React, { FC } from 'react';
import { View, SafeAreaView, Text } from 'react-native';

import styles from './styles';


const Title = ({ text }) => {
  return <Text style={styles.title}>{text}</Text>;
};

Title.defaultProps = {
  text: 'Default text',
};

export default Title;
