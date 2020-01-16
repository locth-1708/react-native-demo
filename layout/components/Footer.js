import React from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

const Message = require ('../../assests/icon/message.png');
const Private = require ('../../assests/icon/private.png');
const phoneBook = require ('../../assests/icon/danhba.png');

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Image
        style={styles.iconFooter}
        source={phoneBook}
      />
      <Image
        style={styles.iconFooter}
        source={Message}
      />
      <Image
        style={styles.iconFooter}
        source={Private}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 20,
    flex: 1,
    flexDirection: 'row',
    width: '70%',
    minWidth: 256,
    height: 58,
    paddingTop: 21,
    paddingBottom: 21,
    marginBottom: 5,
    justifyContent: 'space-around',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderWidth: 0,
    borderColor: 'transparent',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {width: 2,height: 6},
    shadowOpacity: 0.03,
    shadowRadius: 30,
    elevation: 1,
  },
  iconFooter: {
    width: 20,
    height: 20,
  }
});

export default Footer;
