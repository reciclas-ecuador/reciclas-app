import { View, Image, TextInput, ImageSourcePropType } from 'react-native'
import { InputStyles } from './styles_signup/InputStyles_Signup'

type Props = {
  defaultText: string;
  iconSource: ImageSourcePropType;
  keyboard?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad';
};

export function Input ({ defaultText, iconSource, keyboard = 'default' }: Props) {
  return (
    <View style={InputStyles.container}>
      <Image style={InputStyles.icon} source={iconSource} />
      <TextInput
        style={InputStyles.textInput}
        placeholder={defaultText}
        placeholderTextColor='#FFFFFF'
        keyboardType={keyboard}
      />
    </View>
  )
}
