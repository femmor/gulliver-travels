import React, { FC } from 'react';
import { View, SafeAreaView, Text } from 'react-native';

import styles from './styles';

type Props = {
  text?: string,
};

const Title: FC<Props> = ({ text }) => {
  return <Text style={styles.title}>{text}</Text>;
};

Title.defaultProps = {
  text: 'Default text',
};

export default Title;
