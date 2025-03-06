import { View, Text, StyleSheet } from 'react-native'

function Footer () {
  return(
    <View>
      <Text style={styles.footer}>
        2025 EEEP Deputado Roberto Mesquita
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    textAlign: 'center'
  }
})

export default Footer