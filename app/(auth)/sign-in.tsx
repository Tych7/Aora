import { View, Text, StyleSheet, ScrollView, Dimensions, Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import FormField from '@/components/FormField'
import { useState } from 'react'

const SignIn = () => {
  const [form, setform] = useState({
    email: '',
    password: ''
  })

  return (
    <SafeAreaView style={styles.basis}>
      <ScrollView>
        <View style={styles.canvas}>
          <Image style={styles.logo} source={images.logo}/>
          <Text style={styles.text}>Log in to Aora</Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setform({...form,email: e})}
            otherStyles={{marginTop: 28}}
            keyboardType="email-adress"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setform({...form,password: e})}
            otherStyles={{marginTop: 28}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  basis: {
    flex: 1,
    backgroundColor: '#161622',
    height: '100%', 
  },
  canvas: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 4,
    marginTop: 6,
    marginLeft: 15,
  },
  logo:{
    resizeMode:'contain',
    width: 115,
    height: 35,
  },
  text:{
    fontFamily: 'Poppins-SemiBold',
    marginTop: 40,
    fontSize: 24,
    lineHeight: 32,
    color: 'white'
  }



  
})