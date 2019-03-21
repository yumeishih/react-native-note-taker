import React from 'react'
import { View, Text } from 'react-native'
import TextArea from 'Components/textArea'
import styles from './style'

const Home = () => (
  <View style={styles.container}>
    <Text> Please enter your note here</Text>
    <TextArea />
  </View>
)

export default Home
