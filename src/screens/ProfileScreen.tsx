import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native'

const menuItems = [
  {
    id: 1,
    title: 'My Account',
    icon: 'person-outline',
  },
  {
    id: 2,
    title: 'Address',
    icon: 'location-outline',
  },
  {
    id: 3,
    title: 'Your Favorites',
    icon: 'heart-outline',
  },
  {
    id: 4,
    title: 'Order History',
    icon: 'receipt-outline',
  },
  {
    id: 5,
    title: 'Settings',
    icon: 'settings-outline',
  },
  {
    id: 6,
    title: 'Help Center',
    icon: 'ellipsis-horizontal-circle-outline',
  },
]

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>History</Text>

      <View style={styles.profileSection}>
        <View style={styles.imageWrapper}>
          <Image
            source={{
              uri: 'https://media.licdn.com/dms/image/v2/D5603AQGlnuA74yLPqA/profile-displayphoto-scale_400_400/B56Zzxt9GrH0Ag-/0/1773581883733?e=1781136000&v=beta&t=hWqdb7ddJ6tV2duLmZsiJZARLRMF0dU2_uEUlvpV2Jc',
            }}
            style={styles.profileImage}
          />
        </View>

        <View style={{ flex: 1, marginLeft: 14 }}>
          <Text style={styles.name}>Rohan</Text>
          <Text style={styles.phone}>(+91) 86990XXX72</Text>
        </View>

        <TouchableOpacity>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {menuItems.map(item => (
          <TouchableOpacity key={item.id} style={styles.menuItem}>
            <View style={styles.iconContainer}>
              <Ionicons
                name={item.icon}
                size={22}
                color="#2E8B57"
              />
            </View>

            <Text style={styles.menuText}>{item.title}</Text>

            <Ionicons
              name="chevron-forward"
              size={22}
              color="#aaa"
              style={{ marginLeft: 'auto' }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  header: {
    fontSize: 30,
    fontWeight: '700',
    alignSelf: 'center',
    marginBottom: 30,
  },

  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 35,
  },

  imageWrapper: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },

  name: {
    fontSize: 20,
    fontWeight: '700',
  },

  phone: {
    marginTop: 5,
    fontSize: 14,
  },

  logout: {
    color: '#FF5A5F',
    fontSize: 16,
    fontWeight: '700',
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },

  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuText: {
    fontSize: 18,
    marginLeft: 18,
    fontWeight: '500',
  },
})