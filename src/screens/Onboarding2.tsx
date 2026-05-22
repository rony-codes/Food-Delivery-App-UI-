import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'

const Onboarding2 = ({ navigation }: any) => {

  return (

    <View style={styles.container}>


      <Text style={styles.logo}>
        🥗 Kupa
      </Text>


      <Image
        source={{
          uri: 'https://img.freepik.com/premium-vector/food-delivery-man-electric-bike-courier-with-eat-bag-bicycle-graphic-delivery-service-vector-illustration_159025-1601.jpg'
        }}
        style={styles.image}
      />

      <Text style={styles.title}>
        Get delivery ar your{'\n'}doorstep
      </Text>

      <Text style={styles.subtitle}>
        Your ready order will be delivered
        {'\n'}
        quickly buy our courier
      </Text>

      <View style={styles.dot} />
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate('SignUp')}
      >

        <Text style={styles.continueText}>
          Get Started
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

export default Onboarding2
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





