import { Text, TouchableOpacity } from 'react-native'
import { ButtonStyles } from '../styles'

type Props = {
  text: string;
  handlePress: () => void;
};

export function Button ({ text, handlePress }: Props) {
  return (
    <TouchableOpacity style={ButtonStyles.touchableOpacity} onPress={handlePress}>
      <Text style={ButtonStyles.text}>{text}</Text>
    </TouchableOpacity>
  )
}
