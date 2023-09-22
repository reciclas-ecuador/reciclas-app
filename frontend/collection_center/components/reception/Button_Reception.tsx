import { Text, TouchableOpacity } from 'react-native'
import { ButtonStylesReception } from './styles_reception/ButtonStyles_Reception'

type Props = {
  text: string;
  handlePress: () => void;
};

export function ButtonReception ({ text, handlePress }: Props) {
  return (
    <TouchableOpacity style={ButtonStylesReception.touchableOpacity} onPress={handlePress}>
      <Text style={ButtonStylesReception.text}>{text}</Text>
    </TouchableOpacity>
  )
}
