import { Text, TouchableOpacity } from 'react-native'
import { ButtonStylesSignup } from './styles_signup/ButtonStyles_Signup'

type Props = {
  text: string;
  handlePress: () => void;
};

export function ButtonSignup ({ text, handlePress }: Props) {
  return (
    <TouchableOpacity style={ButtonStylesSignup.touchableOpacity} onPress={handlePress}>
      <Text style={ButtonStylesSignup.text}>{text}</Text>
    </TouchableOpacity>
  )
}
