import { View, Text, StyleSheet, ScrollView, Dimensions, Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import { useState } from 'react'
import { Link } from 'expo-router'

import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'

const SignIn = () => {
  const [form, setform] = useState({
    email: '',
    password: ''
  })
  const [IsSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

  }

  return (
    <SafeAreaView style={styles.basis}>
      <ScrollView>
        <View style={styles.canvas}>
          <Image style={styles.logo} source={images.logo}/>
          <Text style={styles.text_top}>Log in to Aora</Text>
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
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles={{width: '95%', marginTop: 28}}
            isLoading={IsSubmitting}
          />
          <View style={{justifyContent:'center', padding: 5, flexDirection: 'row', marginTop: 20}}>
            <Text style={styles.text_regular}>
              Don't have account?
            </Text>
            <Link href="/sign-up" style={styles.text_bottom}>Sign Up</Link>
          </View>
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
    marginTop: 85,
    alignItems: 'center',
  },
  logo:{
    resizeMode:'contain',
    width: 115,
    height: 35,
  },
  text_regular:{
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    lineHeight: 28,
    color: '#d0ccdc',

  },
  text_top:{
    fontFamily: 'Poppins-SemiBold',
    marginTop: 40,
    fontSize: 24,
    lineHeight: 32,
    color: 'white',
  },
  text_bottom:{
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    lineHeight: 28,
    marginLeft: 10,
    color: '#FF9C01',
  }
})