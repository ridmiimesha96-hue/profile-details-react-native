import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  const [points, setPoints] = useState(0);

  const addPoint = () => {
    setPoints(points + 1);
  };

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>

      {/* Profile */}
      <View style={styles.profileContainer}>

        {/* Simple Profile Icon */}
        <View style={styles.profileCircle}>
          <View style={styles.head} />
          <View style={styles.body} />
        </View>

        <View style={styles.line} />

        {/* Name */}
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Diluka</Text>

        {/* Email */}
        <Text style={styles.label}>Email</Text>
        <View style={styles.emailRow}>
          <Text style={styles.emailIcon}>✉</Text>
          <Text style={styles.value}>diluka.w@nsbm.ac.lk</Text>
        </View>

        {/* Points */}
        <Text style={styles.label}>Points</Text>

        <View style={styles.pointsRow}>
          <Text style={styles.star}>★</Text>
          <Text style={styles.points}>{points}</Text>
        </View>

      </View>

      {/* Plus Button */}
      <TouchableOpacity
        style={styles.plusButton}
        onPress={addPoint}
      >
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },

  header: {
    height: 60,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  profileContainer: {
    flex: 1,
    margin: 20,
    backgroundColor: '#ffffff',
    padding: 20,
  },

  profileCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#eeeeee',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  head: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#dddddd',
    borderWidth: 2,
    borderColor: '#222222',
  },

  body: {
    width: 45,
    height: 25,
    borderRadius: 20,
    backgroundColor: '#dddddd',
    borderWidth: 2,
    borderColor: '#222222',
    marginTop: 3,
  },

  line: {
    height: 1,
    backgroundColor: '#333333',
    marginBottom: 10,
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 3,
  },

  value: {
    fontSize: 13,
    color: '#333333',
  },

  emailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  emailIcon: {
    fontSize: 13,
    marginRight: 5,
  },

  pointsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  star: {
    fontSize: 17,
    marginRight: 6,
  },

  points: {
    fontSize: 14,
  },

  plusButton: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },

  plus: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '300',
  },
});