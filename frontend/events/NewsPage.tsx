import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { ReceptionPageStyles } from '../collection_center/components/reception'
import { ReciclasLogo } from '../assets'
import { FlatList } from 'react-native-gesture-handler'
import News from './components/News'
import { GetDataForNews } from './services/GetDataForNews'
import React, { useEffect, useState } from 'react'
import { Edge } from '../Types'
import SkeletonNews from './components/SkeletonNews'
import useAnimation from '../hooks/useAnimation';

export function NewsPage() {
  const [loading, setLoading] = useState<boolean>(true)
  const { opacity } = useAnimation()

  const [dataNew, setDataNew] = useState<Edge[]>()

  async function fetchData() {
    const dataNews = await GetDataForNews()
    if (dataNews !== undefined) {
      setDataNew(dataNews.data.eventos.edges)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
    opacity.setValue(0)
  }, [])

  const Header = ({ styles }: { styles?: React.CSSProperties }) => {
    return (
      <View style={{ marginBottom: 30, alignItems: 'center', ...styles, position: 'fixed' }}>
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
      {loading
        ? (
          <><Header styles={{ marginTop: 60 }} /><ScrollView style={{ marginTop: 0 }} showsVerticalScrollIndicator={false}><SkeletonNews /></ScrollView></>
        )
        : (
          <FlatList
            data={dataNew}
            renderItem={({ item }) => <News {...item} />}
            keyExtractor={(news) => news.node.id}
            ListHeaderComponent={<Header styles={{ position: 'fixed', marginTop: 60 }} />}
            showsVerticalScrollIndicator={false}
            stickyHeaderIndices={[0]}
            contentContainerStyle={{
              alignItems: 'center',
            }}
          />
        )}
    </View>
  )
}
