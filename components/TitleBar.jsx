import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function TitleBar({ title }) {
  return (
    <View style={styles.title}>
      <Text style={{ fontSize: 30 }}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fffbef',
    width: '100%',
    paddingBottom: 10,
    borderColor: 'black',
    borderWidth: 2
  },
});
