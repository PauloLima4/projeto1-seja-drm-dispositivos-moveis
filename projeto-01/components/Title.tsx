import { View, Text, StyleSheet } from 'react-native'

function Title () {
  return(
    <View>
      <View style={styles.titleBox}>
        <Text style={styles.title}>
          Bem-vindo à EEEP Deputado Roberto Mesquita!
        </Text>
      </View>
      <Text style={styles.title2}>
        Venha fazer parte da escola que prepara profissionais para o mercado de trabalho.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleBox: {
    backgroundColor: 'green',
    justifyContent: 'center',
    height: 80
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  title2: {
    marginHorizontal: 10,
    marginBottom: 24,
  }
})

export default Title