import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
} from 'react-native';

import Footer from '../components/Footer';
import Header from '../components/Header';

const GirlXinh0 = require ('../../assests/girl-xinh0.jpg');
const GirlXinh = require ('../../assests/girl-xinh.jpg');
const GirlXinh2 = require ('../../assests/girl-xinh2.jpg');
const GirlXinh3 = require ('../../assests/girl-xinh3.jpg');

const kNumberOfLine = 5;

const ListData = [
  {
    id: '0',
    message: 'First Item',
    avatar: GirlXinh,
  },
  {
    id: '1',
    message: 'Second Item',
    avatar: GirlXinh2,
  },
  {
    id: '2',
    message: 'Third Item',
    avatar: GirlXinh3,
  },
  {
    id: '3',
    message: 'Fourth Item',
    avatar: GirlXinh,
  },
  {
    id: '4',
    message: 'Fifth Item',
    avatar: GirlXinh2,
  },
  {
    id: '5',
    message: 'Sixth Item',
    avatar: GirlXinh3,
  },
  {
    id: '6',
    message: 'Seventh Item',
    avatar: GirlXinh,
  },
  {
    id: '7',
    message: 'Eighth Item',
    avatar: GirlXinh2,
  },
  {
    id: '8',
    message: 'Nineth Item',
    avatar: GirlXinh3,
  },
  {
    id: '9',
    message: 'Tenth Item',
    avatar: GirlXinh2,
  },
  {
    id: '10',
    message: '10 Item',
    avatar: GirlXinh,
  },
  {
    id: '11',
    message: '11 Item',
    avatar: GirlXinh2,
  },
  {
    id: '12',
    message: '12 Item',
    avatar: GirlXinh3,
  },
  {
    id: '13',
    message: '13 Item',
    avatar: GirlXinh,
  },
  {
    id: '14',
    message: '14 Item',
    avatar: GirlXinh2,
  },
  {
    id: '15',
    message: '15 Item',
    avatar: GirlXinh3,
  },
  {
    id: '16',
    message: '16 Item',
    avatar: GirlXinh,
  },
  {
    id: '17',
    message: '17 Item',
    avatar: GirlXinh2,
  },
  {
    id: '18',
    message: '18 Item',
    avatar: GirlXinh3,
  },
  {
    id: '19',
    message: '19 Item',
    avatar: GirlXinh2,
  },
];

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ListData.slice(0, kNumberOfLine),
      numberOfLine: kNumberOfLine,
    }
  }
  loadMoreData = () => {
    const { numberOfLine } = this.state
    if (numberOfLine + 5 >= ListData.length) {
      this.setState({
        data: ListData.slice(0, ListData.length),
        numberOfLine: ListData.length,
      })
    } else {
      this.setState({
        data: ListData.slice(0, this.state.numberOfLine + kNumberOfLine),
        numberOfLine: numberOfLine + kNumberOfLine,
      })
    }
  }

  Item = (message, avatar, index) => {
    return (
      <View style={styles.chatBox}>
        <Image
          style={styles.avatar}
          source={avatar}
        />
        <View style={styles.messageSection}>
          <Text style={styles.message}>
            {message}
          </Text>
        </View>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.body}>
          <FlatList
            data={this.state.data}
            renderItem={({ item, index }) =>
              this.Item(item.message, item.avatar, index)
            }
            keyExtractor={item => item.id}
            onEndReached={this.loadMoreData}
            onEndReachedThreshold={0.1}
            progressViewOffset={1000000}
            ListEmptyComponent={() => 
              <View style={styles.lastChatBox}>
                <Image
                  style={styles.avatar}
                  source={GirlXinh}
                />
                <Image
                  style={styles.avatar}
                  source={GirlXinh2}
                />
                <Image
                  style={styles.avatar}
                  source={GirlXinh3}
                />
              </View>
            }
            ListHeaderComponent={() => <Image
              style={styles.avatar}
              source={GirlXinh0}
            />}
            ListHeaderComponentStyle={{marginBottom: 20}}
            ListFooterComponent={() => <Image
              style={styles.avatar}
              source={GirlXinh3}
            />}
            ListFooterComponentStyle={{marginBottom: 50, marginTop: 10}}
            // horizontal={true}
          />
        </View>
        <Footer />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    backgroundColor: '#FAF9FF',
    paddingTop: 18,
    paddingBottom: 18,
  },
  body: {
    display: 'flex',
    paddingLeft: 18,
    paddingRight: 18,
  },
  chatBox: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderWidth: 0,
    borderColor: 'transparent',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0,height: 4},
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 1,
    marginBottom: 10,
  },
  lastChatBox: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderWidth: 0,
    borderColor: 'transparent',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0,height: 4},
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 1,
    marginBottom: 103,
  },
  avatar: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    borderRadius: 100/2,
  },
  messageSection: {
    marginLeft: 20,
    padding: 20,
    width: 'auto',
    height: '100%',
  },
  message: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FE3C72',
  },
});

export default Chat;
