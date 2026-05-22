import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'

const Onboarding1 = ({ navigation }: any) => {

  return (

    <View style={styles.container}>


      <Text style={styles.logo}>
        🥗 Kupa
      </Text>


      <Image
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/037/799/097/non_2x/bowl-of-salad-in-black-bowl-top-view-isolated-on-transparent-background-png.png'
        }}
        style={styles.image}
      />

      <Text style={styles.title}>
        All your{'\n'}favorites foods
      </Text>

      <Text style={styles.subtitle}>
        Order your favorite menu with easy,
        {'\n'}
        on-demand delivery
      </Text>

      <View style={styles.dot} />
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate('Onboarding2')}
      >

        <Text style={styles.continueText}>
          Continue
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => navigation.navigate('SignIn')}
      >

        <Text style={styles.signInText}>
          Sign in
        </Text>

      </TouchableOpacity>

    </View>
  )
}

export default Onboarding1

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  logo: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 40,
  },

  image: {
    width: 250,
    height: 250,
    borderRadius: 110,
    marginBottom: 35,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 15,
  },

  subtitle: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 30,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 10,
    backgroundColor: '#2E8B57',
    marginBottom: 35,
  },

  continueButton: {
    width: '100%',
    height: 55,
    backgroundColor: '#2E8B57',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  signInButton: {
    width: '100%',
    height: 55,
    backgroundColor: '#f1f1f1',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  signInText: {
    color: '#2E8B57',
    fontSize: 16,
    fontWeight: '600',
  },

})