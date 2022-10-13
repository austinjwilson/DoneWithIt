import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../config/colors';

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        style={styles.image}
        source={require('../chair.jpg')}
        resizeMode="contain"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  closeIcon: {
    height: 50,
    width: 50,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 40,
    left: 30
  },
  container: {
    backgroundColor: colors.black,
    flex: 1
  },
  deleteIcon: {
    height: 50,
    width: 50,
    backgroundColor: colors.secondary,
    position: 'absolute',
    top: 40,
    right: 30
  },
  image: {
    width: '100%',
    height:  '100%'
  }
})
