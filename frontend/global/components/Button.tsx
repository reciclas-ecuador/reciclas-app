import { Text, TouchableOpacity } from 'react-native'
import { ButtonStyles } from '../styles'

type Props = {
  text: string;
  handlePress: () => void;
  buttonColor?: string;
  textColor?: string;
};

export function Button ({ text, handlePress, buttonColor = '#FFFCFC', textColor = '#77A649' }: Props) {
  return (
    <TouchableOpacity style={[ButtonStyles.touchableOpacity, { backgroundColor: buttonColor }]} onPress={handlePress}>
      <Text style={[ButtonStyles.text, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  )
}
