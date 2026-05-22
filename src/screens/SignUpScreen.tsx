import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'


import React from 'react'

const SignUpScreen = ({navigation}: any) => {
  return (

    <View style={styles.container}>

      {/* Back Button */}

      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >

        <Text style={styles.backButton}>
          ←
        </Text>

      </TouchableOpacity>


      {/* Heading */}

      <Text style={styles.title}>
        Sign up
      </Text>

      <Text style={styles.subtitle}>
        Create account and choose favorite menu
      </Text>

      {/* Name */}

      <Text style={styles.label}>
        Name
      </Text>

      <TextInput
        placeholder='Your name'
        style={styles.input}
      />

      {/* Email */}

      <Text style={styles.label}>
        Email
      </Text>

      <TextInput
        placeholder='Your email'
        style={styles.input}
      />


      {/* Password */}

      <Text style={styles.label}>
        Password
      </Text>

      <TextInput
        placeholder='Your password'
        secureTextEntry
        style={styles.input}
      />

      {/* Register Button */}

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.goBack()}
      >

        <Text style={styles.loginText}>
          Register
        </Text>

      </TouchableOpacity>


      {/* Signup */}

      <View style={styles.signupContainer}>

        <Text>
         have an account?
        </Text>

        <Text style={styles.signupText}>
          {' '}Sign In
        </Text>

      </View>

    </View>

  )
}

export default SignUpScreen
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