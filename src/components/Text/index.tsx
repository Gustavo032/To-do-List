import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientText = ({ text, colors, textStyle, ...rest }:any) => {
  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      locations={[0, 1]}
      style={styles.container}
      {...rest}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});

export default GradientText;
