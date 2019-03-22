import { StyleSheet } from 'react-native'
import { font, space } from 'Style/basicStyle'
import { headingText, textInput } from 'Style/commonStyle'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: space.SPACE_SIZE_LG,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  titleHeading: {
    ...headingText,
  },
  titleTextInput: {
    ...textInput,
  },
  textAreaTitle: {
    ...headingText,
    fontWeight: font.FONT_WEIGHT_LIGHT,
    fontStyle: 'italic',
  },
  textArea: {
    ...textInput,
    flex: 1,
  },
})
