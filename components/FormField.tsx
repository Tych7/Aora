import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react';

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setshowPassword] = useState(false)

  return (
    <View style={[otherStyles]}>
      <Text style={[styles.text]}>{title}</Text>

      <View style={[styles.text_field, {borderColor: isFocused ? '#FF9C01' : '#201c2c', borderWidth: 2}]}>

      <TextInput 
      style={[styles.text_input, {fontSize: 16}]}
      value={value}
      placeholder={placeholder}
      placeholderTextColor= "#7b7b8"
      onChangeText={handleChangeText}
      secureTextEntry={title === 'Password' && !showPassword}

      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      />

      

      </View>
    </View>
  )
}

export default FormField

const styles = StyleSheet.create({
  text:{
    fontSize: 16,
    lineHeight: 24,
    color: '#d0ccdc',
    fontFamily: 'Poppins-Medium',
  },
  text_field:{
    width: '95%', 
    height: 64, 
    paddingHorizontal: 16, 
    backgroundColor: '#201c2c',
    borderRadius: 16,
    marginTop: 10,
  },
  text_input:{
    flex: 1,
    fontSize: 16,
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    textAlignVertical: 'center',
  }
})