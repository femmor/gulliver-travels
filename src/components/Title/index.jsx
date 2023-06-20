import React, {FC} from 'react';
import {View, SafeAreaView, Text} from 'react-native';

import styles from './styles';

type Props = {
  text: string,
};

const Title: FC<Props> = ({text}) => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>{text}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Title;
