import { StyleSheet, Text, View, Dimensions, ScrollView, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../constants'


const index = () => {
  return (
    <SafeAreaView style={styles.basis}>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View style={styles.scroll_menu}>
          <Image style={styles.logo_image}
            source={images.logo}
          />

          <Image style={styles.cards_image}
            source={images.cards}
          />

          <View style={styles.text_view}>
            <Text style={[styles.text, {color: 'white'}]}>Discover Endless Posibilities with {' '}
              <Text style={[styles.text, {color: '#FF9C01'}]}>
                Aora
              </Text>
            </Text>

          <Image style={styles.logo_underline_image}
            source={images.path}
          />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  basis: {
    flex: 1,
    backgroundColor: '#161622',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo_image: {
    width: 130,
    height: 84,
    resizeMode: "contain",
  },
  logo_underline_image: {
    width: 136,
    height: 15,
    position: 'absolute',
    bottom: 3,
    right: -32,
    resizeMode: 'contain'
  },
  cards_image: {
    maxWidth: 380,
    width: '100%',
    height: 300,
    resizeMode: "contain",
  },
  scroll_menu: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  text_view: {
    marginTop: 5,
  },
  text: {
    fontSize: 30,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center'
  },
})