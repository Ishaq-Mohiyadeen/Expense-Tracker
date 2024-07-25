import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white, // Adjust based on your actual Colors object
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: Colors.black, // Adjust based on your actual Colors object
  },
});

export default styles;

  