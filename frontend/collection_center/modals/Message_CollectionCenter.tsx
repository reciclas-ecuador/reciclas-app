import { View, Text } from 'react-native'
import { Button, Modal, Portal } from 'react-native-paper'

type confirmationCollectionCenterProps = {
  handlePress: () => void;
  title: string;
  description: string;
  buttonText?: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export function MessageCollectionCenter ({ handlePress, title, description, buttonText = 'Aceptar', visible, setVisible }: confirmationCollectionCenterProps) {
  return (
    <Portal>
      <Modal
        visible={visible}
        contentContainerStyle={{ backgroundColor: '#292D32', borderRadius: 30, justifyContent: 'center', alignItems: 'center', width: '75%', padding: '5%', alignSelf: 'center' }}
        theme={{ colors: { backdrop: '#00000090' } }}
        onDismiss={() => setVisible(false)}
        dismissable={false}
        dismissableBackButton={false}
      >
        <Text style={{ fontSize: 20, color: '#BDF26D', fontWeight: 'bold', alignContent: 'center' }}>{title}</Text>
        <View style={{ borderBottomColor: '#FFF', borderBottomWidth: 2, width: '90%', marginVertical: '5%' }} />
        <Text style={{ fontSize: 17, color: '#FFF', alignContent: 'center', marginBottom: '8%', textAlign: 'center' }}>{description}</Text>
        <Button
          mode='outlined'
          textColor='#BDF26D'
          buttonColor='#76b54420'
          onPress={() => { handlePress(); setVisible(false) }}
        >
          {buttonText}
        </Button>
      </Modal>
    </Portal>
  )
}
