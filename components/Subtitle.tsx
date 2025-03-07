import { View, Text, StyleSheet } from 'react-native'

function Subtitle () {
  return(
    <View>
      <View style={styles.titleBox}>
        <Text style={styles.title}>
          Escolha um curso e faça a sua história!
        </Text>
      </View>
      <Text style={styles.title2}>
        Aqui você pode escolher cursar Administração, Desenvolvimento de Sistemas ou Redes de Computadores. Todos eles possuem alta demanda no mercado atual.
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  titleBox: {
    backgroundColor: 'orange',
    justifyContent: 'center',
    height: 50
  },
  title: {
    fontSize: 17,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  title2: {
    marginHorizontal: 10,
    marginBottom: 24,
  }
})

export default Subtitle