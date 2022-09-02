import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './../Style';

const Welcome = props => {
  const {name} = props.navigation.state.params;
  return (
    <View>
      <Text style={styles.heading}>Welcome {name}</Text>
    </View>
  );
};

export default Welcome;
