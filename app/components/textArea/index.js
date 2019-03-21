import React, { Component } from 'react'
import { TextInput } from 'react-native'
import styles from './style'

class TextArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
  }

  handleTextChange = (text) => {
    this.setState({
      text,
    })
  }

  render() {
    const { ...extraProps } = this.props
    const { text } = this.state
    return (
      <TextInput
        {...extraProps}
        style={[styles.textArea, extraProps.style]}
        multiline
        onChangeText={this.handleTextChange}
        value={text}
      />
    );
  }
}

export default TextArea;
