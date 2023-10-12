import { BarCodeScanner } from 'expo-barcode-scanner'
import { View } from 'react-native'
import { Button, Modal, Portal } from 'react-native-paper'

type confirmationCollectionCenterProps = {
  handleScan: (qrInfo: any) => void;
  handlePress: () => void;
  buttonText?: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export function ScanQRCollectionCenter ({ handleScan, handlePress, buttonText = 'Cancelar', visible, setVisible }: confirmationCollectionCenterProps) {
  return (
    <Portal>
      <Modal
        visible={visible}
        contentContainerStyle={{
          width: '90%',
          height: '75%',
          borderRadius: 175,
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          borderColor: '#BDF26D',
          borderTopWidth: 2,
          borderBottomWidth: 2,
          borderLeftWidth: 0.1,
          borderRightWidth: 0.1,
          alignSelf: 'center'
        }}
        theme={{ colors: { backdrop: '#00000090' } }}
        onDismiss={() => setVisible(false)}
        dismissable
        dismissableBackButton
      >
        <BarCodeScanner
          onBarCodeScanned={handleScan}
          style={{ width: 500, height: 500, flex: 1 }}
        />
        <View style={{
          marginTop: '-105%',
          marginBottom: '15%',
          alignItems: 'center',
          gap: 20
        }}
        >
          <View style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 50
          }}
          >
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 50
            }}
            >
              <View style={{ height: 50, width: 50, borderLeftWidth: 7, borderTopWidth: 2, borderColor: '#BDF26D', borderTopLeftRadius: 20 }} />
              <View style={{ height: 50, width: 50, borderRightWidth: 2, borderTopWidth: 7, borderColor: '#BDF26D', borderTopRightRadius: 20 }} />
            </View>
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 50
            }}
            >
              <View style={{ height: 50, width: 50, borderLeftWidth: 2, borderBottomWidth: 7, borderColor: '#BDF26D', borderBottomLeftRadius: 20 }} />
              <View style={{ height: 50, width: 50, borderRightWidth: 7, borderBottomWidth: 2, borderColor: '#BDF26D', borderBottomRightRadius: 20 }} />
            </View>
          </View>
          <Button
            mode='outlined'
            textColor='#BDF26D'
            buttonColor='#76b54420'
            onPress={() => { handlePress(); setVisible(false) }}
            style={{ marginTop: '30%' }}
            labelStyle={{ fontSize: 20 }}
          >
            {buttonText}
          </Button>
        </View>
      </Modal>
    </Portal>
  )
}
