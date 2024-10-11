import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'
import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'

const CustomButton = ({title, handlePress, isLoading, containerStyles, textStyles}) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
    disabled={isLoading}
    activeOpacity={0.7}
    style={[styles.button, containerStyles, { opacity: isLoading ? 0.5 : 1 }]}
    >
        <Text style={[styles.button_text, textStyles]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#FF9C01',
      borderRadius: 12,
      minHeight: 62,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button_text: {
        color: '#161622',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        lineHeight: 28,
    },
    
  })