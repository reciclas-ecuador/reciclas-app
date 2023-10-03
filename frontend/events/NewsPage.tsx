import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { ReciclasLogo } from '../assets'
import { FlatList } from 'react-native-gesture-handler'
import News from './components/News'
import { GetDataForNews } from './services/GetDataForNews'
import React, { useEffect, useState } from 'react'
import { Edge } from '../Types'
import SkeletonNews from './components/SkeletonNews'

export function NewsPage() {
  const [loading, setLoading] = useState<boolean>(true)

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
  }, [])

  const Header = ({ styles }: { styles?: React.CSSProperties }) => {
    return (
      <View style={{ marginBottom: 30, alignItems: 'center', ...styles }}>
        <ReciclasLogo style={{ marginBottom: 10 }} />
        <Text style={{ fontSize: 30, fontWeight: '600', color: 'white' }}>Eventos</Text>
      </View>
    )
  }

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
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
      {loading
        ? (
          <><Header styles={{ marginTop: 60 }} /><ScrollView style={{ marginTop: 0 }} showsVerticalScrollIndicator={false}><SkeletonNews /></ScrollView></>
        )
        : (
          <FlatList
            data={dataNew}
            renderItem={({ item }) => <News {...item} />}
            keyExtractor={(news) => news.node.id}
            ListHeaderComponent={<Header styles={{ marginTop: 60 }} />}
            showsVerticalScrollIndicator={false}
            // stickyHeaderIndices={[0]} // fixed to header
            contentContainerStyle={{
              alignItems: 'center'
            }}
          />
        )}
    </View>
  )
}
