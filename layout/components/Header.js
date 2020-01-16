import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

const ArrowBackward = require ('../../assests/icon/arrow_backward_24px.png');
const Call = require ('../../assests/icon/call_24px.png');

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.arrow}
        source={ArrowBackward}
      />
      <Text style={styles.titleHeader}>Chat with Stranger</Text>
      <Image
        style={styles.arrow}
        source={Call}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 36,
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 30,
    paddingLeft: 18,
    paddingRight: 18,
  },
  titleHeader: {
    width: 'auto',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FE3C72',
  },  
  arrow: {
    alignSelf: 'center',
    backgroundColor: '#FAF9FF',
  },
});

export default Header;
