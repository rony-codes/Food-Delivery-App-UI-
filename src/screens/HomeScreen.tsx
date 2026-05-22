import { useState } from 'react'

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native'

import { Ionicons } from '@expo/vector-icons'

const HomeScreen = () => {

  const [open, setOpen] = useState(false)

  return (

    <>

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >

        {/* HEADER */}

        <View style={styles.header}>

          <Text style={styles.headerTitle}>
            Home
          </Text>


          {/* NOTIFICATION BUTTON */}

          <TouchableOpacity
            onPress={() => setOpen(true)}
          >

            <Ionicons
              name='notifications-outline'
              size={28}
              color='black'
            />

          </TouchableOpacity>

        </View>


        {/* SEARCH */}

        <TextInput
          placeholder='Search on Kupa'
          style={styles.searchInput}
        />


        {/* DELIVERY CARD */}

        <View style={styles.deliveryCard}>

          <Text style={styles.deliveryTitle}>
            Delivery to Home
          </Text>

          <Text style={styles.deliveryText}>
            Utama Street no. 14, Rumbai
          </Text>

        </View>


        {/* FOOD BANNER */}

        <View style={styles.bannerCard}>

          <View>

            <Text style={styles.bannerTitle}>
              Chicken Teriyaki
            </Text>

            <Text style={styles.bannerDiscount}>
              Discount 25%
            </Text>

          </View>


          <Image
            source={{
              uri: 'https://png.pngtree.com/png-vector/20240130/ourlarge/pngtree-tasty-teriyaki-fried-chicken-isolated-png-image_11574302.png'
            }}
            style={styles.bannerImage}
          />

        </View>


        {/* TOP WEEK */}

        <Text style={styles.sectionTitle}>
          Top of Week
        </Text>


        {/* FOOD ITEMS */}

        <View style={styles.foodContainer}>


          {/* CARD 1 */}

          <View style={styles.foodCard}>

            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvCz27MfsfPesLwN0P1BrOBFVnHdLYeKbqfg&s'
              }}
              style={styles.foodImage}
            />

            <Text>
              Naruto special ram...
            </Text>

            <Text style={styles.price}>
              $14.99
            </Text>

          </View>



          {/* CARD 2 */}

          <View style={styles.foodCard}>

            <Image
              source={{
                uri: 'https://www.chilitochoc.com/wp-content/uploads/2021/01/chinese-hot-and-sour-soup-sq.jpg'
              }}
              style={styles.foodImage}
            />

            <Text>
              Hot & Sour Corn...
            </Text>

            <Text style={styles.price}>
              $20.99
            </Text>

          </View>

        </View>

      </ScrollView>



      {/* NOTIFICATION DRAWER */}

      <Modal
        visible={open}
        animationType='slide'
        transparent
      >

        <View style={styles.modalBackground}>


          {/* DRAWER */}

          <View style={styles.drawer}>


            {/* TOP */}

            <View style={styles.drawerHeader}>

              <Text style={styles.drawerTitle}>
                Notifications
              </Text>


              <TouchableOpacity
                onPress={() => setOpen(false)}
              >

                <Ionicons
                  name='close'
                  size={28}
                  color='black'
                />

              </TouchableOpacity>

            </View>



            {/* NOTIFICATION 1 */}

            <View style={styles.notificationCard}>

              <Ionicons
                name='notifications'
                size={24}
                color='#2E8B57'
              />

              <View style={{ marginLeft: 12 }}>

                <Text style={styles.notificationTitle}>
                  Order Confirmed
                </Text>

                <Text style={styles.notificationText}>
                  Your order has been placed
                </Text>

              </View>

            </View>



            {/* NOTIFICATION 2 */}

            <View style={styles.notificationCard}>

              <Ionicons
                name='restaurant'
                size={24}
                color='#2E8B57'
              />

              <View style={{ marginLeft: 12 }}>

                <Text style={styles.notificationTitle}>
                  Food Preparing
                </Text>

                <Text style={styles.notificationText}>
                  Chef is preparing your meal
                </Text>

              </View>

            </View>

          </View>

        </View>

      </Modal>

    </>

  )
}

export default HomeScreen



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 60,
  },



  /* HEADER */

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
  },



  /* SEARCH */

  searchInput: {
    height: 55,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 25,
  },



  /* DELIVERY CARD */

  deliveryCard: {
    backgroundColor: '#2E8B57',
    padding: 20,
    borderRadius: 20,
    marginBottom: 25,
  },

  deliveryTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },

  deliveryText: {
    color: '#fff',
  },



  /* BANNER */

  bannerCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },

  bannerTitle: {
    fontSize: 22,
    fontWeight: '700',
  },

  bannerDiscount: {
    color: 'gray',
    marginTop: 8,
  },

  bannerImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },



  /* SECTION */

  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },



  /* FOOD */

  foodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },

  foodCard: {
    width: '48%',
  },

  foodImage: {
    width: '100%',
    height: 140,
    borderRadius: 18,
    marginBottom: 10,
  },

  price: {
    color: '#2E8B57',
    fontWeight: '700',
    marginTop: 5,
  },



  /* MODAL */

  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },

  drawer: {
    height: 350,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },

  drawerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  drawerTitle: {
    fontSize: 24,
    fontWeight: '700',
  },



  /* NOTIFICATION CARD */

  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 18,
    marginBottom: 15,
  },

  notificationTitle: {
    fontSize: 16,
    fontWeight: '700',
  },

  notificationText: {
    color: 'gray',
    marginTop: 4,
  },

})