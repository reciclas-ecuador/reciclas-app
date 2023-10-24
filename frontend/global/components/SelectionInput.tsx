import { View, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native'
import { SelectionInputStyles } from '../styles'
import React, { useRef, useState } from 'react'
import { Modal, Portal } from 'react-native-paper'

type Props = {
  instructionText: string;
  defaultText: string;
  icon: React.ReactNode;
  setInputText: (text: string) => void;
  defaultValue?: string;
  options: any[];
};

type selectionModalProps = {
    instructionText: string;
    handlePress: (input: any) => void;
    visible: boolean;
    setVisible: (visible: boolean) => void;
};

let items: any[]

function SelectionModal ({ instructionText, handlePress, visible, setVisible }: selectionModalProps) {
  const options = items.map((item, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => { handlePress(item); setVisible(false) }}
        style={SelectionInputStyles.optionContainer}
      >
        <View style={SelectionInputStyles.divider} />
        <Text style={SelectionInputStyles.optionText}>
          {item}
        </Text>
      </TouchableOpacity>
    )
  })

  return (
    <Portal>
      <Modal
        visible={visible}
        contentContainerStyle={{ backgroundColor: '#292D32', borderRadius: 30, justifyContent: 'center', alignItems: 'center', width: '75%', height: '40%', padding: '5%', alignSelf: 'center', gap: 15 }}
        theme={{ colors: { backdrop: '#00000090' } }}
        onDismiss={() => setVisible(false)}
        dismissable
        dismissableBackButton
      >
        <Text style={SelectionInputStyles.instructionText}>{instructionText}</Text>
        <ScrollView>
          {options}
          <View style={[SelectionInputStyles.divider, { marginHorizontal: 0, width: '98%', alignSelf: 'center' }]} />
        </ScrollView>
      </Modal>
    </Portal>
  )
}

export function SelectionInput ({ instructionText, defaultText, icon, setInputText, defaultValue, options }: Props) {
  const [isTextInputFocused, setTextInputFocus] = useState(false)
  const [showSelectionModal, setShowSelectionModal] = useState<boolean>(false)
  const textInputRef = useRef<TextInput>(null)

  const handleViewPress = () => {
    if (!isTextInputFocused) {
      textInputRef.current?.focus()
    } else {
      textInputRef.current?.blur()
    }
  }

  items = options

  return (
    <View style={SelectionInputStyles.touchableOpacity}>
      <TouchableOpacity onPress={() => { handleViewPress(); setShowSelectionModal(true) }}>
        <View style={SelectionInputStyles.container}>
          {icon}
          <TextInput
            ref={textInputRef}
            style={SelectionInputStyles.textInput}
            placeholder={defaultText}
            placeholderTextColor='#FFFFFF'
            onFocus={() => setTextInputFocus(true)}
            onBlur={() => setTextInputFocus(false)}
            onChangeText={(text) => setInputText(text)}
            editable={false}
            value={defaultValue}
          />
        </View>
      </TouchableOpacity>
      <SelectionModal
        instructionText={instructionText}
        handlePress={setInputText}
        visible={showSelectionModal}
        setVisible={setShowSelectionModal}
      />
    </View>
  )
}
