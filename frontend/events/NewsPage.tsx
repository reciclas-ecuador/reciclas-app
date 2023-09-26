import { Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { ReceptionPageStyles } from '../collection_center/components/reception'
import { ReciclasLogo } from '../assets'
import { FlatList } from 'react-native-gesture-handler'
import News from './components/News'
import { GetDataForNews } from './services/GetDataForNews'
import { useEffect, useState } from 'react'
import { Edge } from '../Types'

export function NewsPage() {
  const [loading, setLoading] = useState<boolean>(true)

  const [dataNew, setDataNew] = useState<Edge[]>()

  console.log(loading)

  async function fetchData() {
    const dataNews = await GetDataForNews()
    if (dataNews !== undefined) {
      setDataNew(dataNews.data.eventos.edges)
    }
    if (dataNew !== undefined) {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const Header = () => {
    return (
      <View style={{ marginBottom: 30, alignItems: 'center' }}>
        <ReciclasLogo style={{ marginBottom: 10 }} />
        <Text style={{ fontSize: 30, fontWeight: '600', color: 'white' }}>Eventos</Text>
      </View>
    )
  }

  return (
    <View style={{ ...ReceptionPageStyles.container, alignItems: 'center', justifyContent: 'center' }}>
      <LinearGradient
        colors={[
          'rgba(119, 166, 73, 1)',
          'rgba(0, 0, 0, 0.8)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)'
        ]}
        style={ReceptionPageStyles.background}
      />
      <FlatList
        data={dataNew}
        renderItem={({ item }) => <News {...item} />}
        keyExtractor={(news) => news.node.id}
        ListHeaderComponent={<Header />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          paddingTop: 60
        }}
      />
    </View>
  )
}
