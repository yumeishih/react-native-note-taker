import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import TextArea from 'Components/textArea'
import styles from './style'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
    }
  }

  setTitle = title => this.setState({ title })

  render() {
    const { title } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.titleHeading}> Note Title</Text>
        <TextInput
          style={styles.titleTextInput}
          onChangeText={this.setTitle}
          value={title}
        />
        <Text style={styles.textAreaTitle}> Please type your note below </Text>
        <TextArea style={styles.textArea} />
      </View>
    )
  }
}

export default Home
