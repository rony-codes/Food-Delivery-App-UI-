import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image
} from 'react-native'

const MenuScreen = () => {

  return (

    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* Header */}

      <Text style={styles.header}>
        Menu
      </Text>


      {/* Special */}

      <Text style={styles.smallText}>
        Our Food
      </Text>

      <Text style={styles.bigText}>
        Special For You
      </Text>


      {/* Search */}

      <TextInput
        placeholder='Search Your Menus'
        style={styles.searchInput}
      />


      {/* Food Grid */}

      <View style={styles.grid}>

        <View style={styles.card}>

          <Image
            source={{ uri: 'https://norecipes.com/wp-content/uploads/2017/11/black-pepper-beef-004-1200x800.jpg' }}
            style={styles.image}
          />

          <Text style={styles.foodName}>
            Black Pepper Beef...
          </Text>

          <Text style={styles.price}>
            $19.99
          </Text>

        </View>


        <View style={styles.card}>

          <Image
            source={{ uri: 'https://makansutra.com/wp-content/uploads/2018/08/69bc78_3char-kway-teow.jpg' }}
            style={styles.image}
          />

          <Text style={styles.foodName}>
            Japan Sashimi
          </Text>

          <Text style={styles.price}>
            $27.12
          </Text>

        </View>
        <View style={styles.card}>

          <Image
            source={{ uri: 'https://www.sharmispassions.com/wp-content/uploads/2019/07/cutting-chai4.jpg' }}
            style={styles.image}
          />

          <Text style={styles.foodName}>
            Chai
          </Text>

          <Text style={styles.price}>
            $27.12
          </Text>

        </View>
        <View style={styles.card}>

          <Image
            source={{ uri: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe-500x375.jpg' }}
            style={styles.image}
          />

          <Text style={styles.foodName}>
            Samosa
          </Text>

          <Text style={styles.price}>
            $27.12
          </Text>

        </View>
      </View>

    </ScrollView>

  )
}

export default MenuScreen

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
    marginBottom: 30,
  },

  smallText: {
    color: 'gray',
    fontSize: 16,
  },

  bigText: {
    fontSize: 34,
    fontWeight: '700',
    color: '#2E8B57',
    marginBottom: 25,
  },

  searchInput: {
    height: 55,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 30,
  },

  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  card: {
    width: '48%',
    marginBottom: 20,
  },

  image: {
    width: '100%',
    height: 160,
    borderRadius: 18,
    backgroundColor: '#ddd',
    marginBottom: 10,
  },

  foodName: {
    fontSize: 16,
    fontWeight: '600',
  },

  price: {
    color: '#2E8B57',
    fontWeight: '700',
    marginTop: 5,
  },

})