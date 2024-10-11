import { StyleSheet, Text, View, Dimensions, ScrollView, Image, StatusBar } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../constants'
import CustomButton from '@/components/CustomButton'


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
            <Text style={[styles.text_semibold, {color: 'white'}, {fontSize: 30}]}>Discover Endless Posibilities with {' '}
              <Text style={[styles.text_semibold, {color: '#FF9C01'}, {fontSize: 30}]}>
                Aora
              </Text>
            </Text>

          <Image style={styles.logo_underline_image}
            source={images.path}
          />
          </View>

          <Text style={[styles.text_regular, {color: '#d0ccdc'}, {fontSize: 15}, {marginTop: 10}]}>
            Where creativity meets innovation: embark on a journey of limitless exploration wuth Aora
          </Text>

          <CustomButton 
            title="Continue with Email"
            handlePress={() => router.push('./sign-in')}
            containerStyles= {{width: '100%' , marginTop: 30}}
          />

        </View>
      </ScrollView>
      <StatusBar 
      barStyle= 'default'
      backgroundColor='#161622'
      />
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
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 4,
    marginTop: 85,
  },
  text_view: {
    marginTop: 5,
  },
  text_regular: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'center'
  },
  text_semibold: {
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
  },
     
})