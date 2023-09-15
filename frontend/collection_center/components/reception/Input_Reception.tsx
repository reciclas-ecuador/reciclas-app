import { View, Image, TextInput, ImageSourcePropType } from 'react-native'
import { InputStyles } from './styles_reception/InputStyles_Reception'

type Props = {
  defaultText: string;
  iconSource: ImageSourcePropType;
};

export function Input ({ defaultText, iconSource }: Props) {
  return (
    <View style={InputStyles.container}>
      <Image style={InputStyles.icon} source={iconSource} />
      <TextInput
        style={InputStyles.textInput}
        placeholder={defaultText}
        placeholderTextColor='#FFFFFF'
      />
    </View>
  )
}
