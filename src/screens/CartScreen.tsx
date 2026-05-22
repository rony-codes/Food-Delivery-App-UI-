import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native'

const cartItems = [
  {
    id: 1,
    name: 'Grilled Chicken Burger',
    price: '$4.99',
    qty: 1,
    image: 'https://i0.wp.com/flaevor.com/wp-content/uploads/2022/04/SambalFriedChickenBurger1.jpg?resize=1024%2C830&ssl=1',
  },
  {
    id: 2,
    name: 'Tobiko California Roll(Sushi)',
    price: '$39.99',
    qty: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVrwBbvxjaW5WKWRzg_h3tKl7Ub0ygferv3A&s',
  },
  {
    id: 3,
    name: 'Hyderabadi Chicken Biryani',
    price: '$17.12',
    qty: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlPQXFO4B201Ry8o7_Soa7dwhJBrtcwJdE0w&s',
  },
]

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Cart</Text>

      {/* Delivery Card */}
      <View style={styles.deliveryCard}>
        <View>
          <Text style={styles.deliveryTitle}>Delivery to Home</Text>
          <Text style={styles.address}>
            Utama Street no. 14, Rumbai
          </Text>

          <View style={styles.distanceBadge}>
            <Text style={styles.distanceText}>2.4 km</Text>
          </View>
        </View>

      </View>

      {/* Orders */}
      <Text style={styles.orderTitle}>Your Order (3)</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {cartItems.map(item => (
          <View key={item.id} style={styles.cartItem}>
            <Image
              source={{ uri: item.image }}
              style={styles.foodImage}
            />

            <View style={styles.itemInfo}>
              <Text style={styles.foodName}>{item.name}</Text>

              <View style={styles.bottomRow}>
                <View style={styles.qtyContainer}>
                  <TouchableOpacity style={styles.qtyBtn}>
                    <Text style={styles.qtyBtnText}>-</Text>
                  </TouchableOpacity>

                  <Text style={styles.qtyText}>{item.qty}</Text>

                  <TouchableOpacity style={styles.qtyBtnGreen}>
                    <Text style={styles.qtyBtnTextWhite}>+</Text>
                  </TouchableOpacity>
                </View>

                <Text style={styles.price}>{item.price}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Button */}
      <TouchableOpacity style={styles.orderBtn}>
        <Text style={styles.orderBtnText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111',
    alignSelf: 'center',
    marginBottom: 25,
  },

  deliveryCard: {
    backgroundColor: '#2E8B57',
    borderRadius: 18,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 28,
  },

  deliveryTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  address: {
    color: '#E5E5E5',
    marginTop: 5,
    fontSize: 13,
  },

  distanceBadge: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 8,
    marginTop: 14,
    alignSelf: 'flex-start',
  },

  distanceText: {
    color: '#2E8B57',
    fontWeight: '700',
    fontSize: 12,
  },

  orderTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111',
    marginBottom: 20,
  },

  cartItem: {
    flexDirection: 'row',
    marginBottom: 25,
    alignItems: 'center',
  },

  foodImage: {
    width: 80,
    height: 80,
    borderRadius: 16,
    backgroundColor: '#eee',
  },

  itemInfo: {
    flex: 1,
    marginLeft: 15,
  },

  foodName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
    marginBottom: 15,
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  qtyBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#EAEAEA',
    justifyContent: 'center',
    alignItems: 'center',
  },

  qtyBtnGreen: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#2E8B57',
    justifyContent: 'center',
    alignItems: 'center',
  },

  qtyBtnText: {
    fontSize: 18,
    color: '#555',
    fontWeight: '700',
  },

  qtyBtnTextWhite: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
  },

  qtyText: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: '600',
  },

  price: {
    color: '#2E8B57',
    fontSize: 18,
    fontWeight: '700',
  },

  orderBtn: {
    backgroundColor: '#2E8B57',
    paddingVertical: 18,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },

  orderBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
})