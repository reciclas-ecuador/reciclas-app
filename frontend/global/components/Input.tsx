import { View, TextInput, TouchableWithoutFeedback } from 'react-native'
import { InputStyles } from '../styles'
import React, { useRef, useState } from 'react'

type Props = {
  defaultText: string;
  icon: React.ReactNode;
  keyboard?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
  setInputText: (text: string) => void;
  edit?: boolean;
  defaultValue?: string;
};

export function Input ({ defaultText, icon, keyboard = 'default', setInputText, edit = true, defaultValue }: Props) {
  const [isTextInputFocused, setTextInputFocus] = useState(false)

  const handleViewPress = () => {
    if (!isTextInputFocused) {
      textInputRef.current?.focus()
    } else {
      textInputRef.current?.blur()
    }
  }

  const textInputRef = useRef<TextInput>(null)

  return (
    <TouchableWithoutFeedback onPress={handleViewPress}>
      <View style={InputStyles.container}>
        {icon}
        <TextInput
          ref={textInputRef}
          style={InputStyles.textInput}
          placeholder={defaultText}
          placeholderTextColor='#FFFFFF'
          keyboardType={keyboard}
          onFocus={() => setTextInputFocus(true)}
          onBlur={() => setTextInputFocus(false)}
          onChangeText={(text) => setInputText(text)}
          editable={edit}
          value={defaultValue}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}
