import { LinearGradient } from 'expo-linear-gradient'
import { Text, View, StyleSheet } from 'react-native';
import { ReciclasLogo } from '../assets'
import MapView, { Marker } from 'react-native-maps'
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeMaps = () => {
  const Header = ({ styles }: { styles?: React.CSSProperties }) => {
    return (
      <View style={{ marginBottom: 30, alignItems: 'center', ...styles }}>
        <ReciclasLogo style={{ marginBottom: 10 }} width={70} height={70} />
        <Text style={{ fontSize: 30, fontWeight: '600', color: 'white' }}>
          Ubicación
        </Text>
      </View>
    )
  }

  return (
    <View style={{ alignItems: 'center', height: '100%' }}>
      <LinearGradient
        colors={[
          'rgba(119, 166, 73, 1)',
          'rgba(0, 0, 0, 0.8)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)'
        ]}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '100%',
          backgroundColor: '#77A649'
        }}
      />
      <Header styles={{ marginTop: 60 }} />
      <View style={{ backgroundColor: '#494D4F', height: 481, width: 360, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ overflow: 'hidden', height: 320, width: 320, borderRadius: 25 }}>
          <MapView style={{ ...StyleSheet.absoluteFillObject }}>
          </MapView>
        </View>
        <TouchableOpacity style={{ bottom: -19, backgroundColor: 'white', borderRadius: 25, padding: 15 }}>
          <Text style={{ fontSize: 15, fontWeight: '700' }}>Como llegar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeMaps
