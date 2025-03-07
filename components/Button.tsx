import { View, Text, StyleSheet } from 'react-native'

function Button () {
  return(
    <View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          Inicie sua jornada na DRM.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lightblue',
    width: '90%',
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default Button