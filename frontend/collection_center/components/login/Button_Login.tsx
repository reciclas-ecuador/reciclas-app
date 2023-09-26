import { Text, TouchableOpacity } from 'react-native'
import { ButtonStylesLogin } from './styles_login/ButtonStyles_Login'

type Props = {
  text: string;
  handlePress: () => void;
};

export function ButtonLogin ({ text, handlePress }: Props) {
  return (
    <TouchableOpacity style={ButtonStylesLogin.touchableOpacity} onPress={handlePress}>
      <Text style={ButtonStylesLogin.text}>{text}</Text>
    </TouchableOpacity>
  )
}
