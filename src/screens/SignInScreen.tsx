import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

const SignInScreen = ({ navigation }: any) => {

  return (

    <View style={styles.container}>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >

        <Text style={styles.backButton}>
          ←
        </Text>

      </TouchableOpacity>



      <Text style={styles.title}>
        Welcome Back 👋
      </Text>

      <Text style={styles.subtitle}>
        Sign to your account
      </Text>



      <Text style={styles.label}>
        Email
      </Text>

      <TextInput
        placeholder='Your email'
        style={styles.input}
      />



      <Text style={styles.label}>
        Password
      </Text>

      <TextInput
        placeholder='Your password'
        secureTextEntry
        style={styles.input}
      />


      <TouchableOpacity>

        <Text style={styles.forgotText}>
          Forgot Password?
        </Text>

      </TouchableOpacity>



      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.replace('MainTabs')}
      >

        <Text style={styles.loginText}>
          Login
        </Text>

      </TouchableOpacity>



      <View style={styles.signupContainer}>

        <Text>
          Don’t have an account?
        </Text>

        <Text style={styles.signupText}>
          {' '}Sign Up
        </Text>

      </View>

    </View>

  )
}

export default SignInScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  backButton: {
    fontSize: 30,
    marginBottom: 30,
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 10,
  },

  subtitle: {
    color: 'gray',
    fontSize: 16,
    marginBottom: 40,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },

  input: {
    height: 55,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 25,
  },

  forgotText: {
    color: '#2E8B57',
    fontWeight: '600',
    marginBottom: 35,
  },

  loginButton: {
    height: 60,
    backgroundColor: '#2E8B57',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },

  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  signupText: {
    color: '#2E8B57',
    fontWeight: '700',
  },

})