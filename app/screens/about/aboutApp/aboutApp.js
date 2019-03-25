import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './style'

class AboutApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>About the App</Text>
      </View>
    )
  }
}

export default AboutApp
