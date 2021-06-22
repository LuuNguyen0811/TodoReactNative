import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import images from '../../assest/image';
import {styles} from './styles';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {defaultColor} from '../../theme/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SwipeItem, SwipeButtonsContainer} from 'react-native-swipe-item';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

const fakeData = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores ',
  },
  {
    userId: 1,
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem ',
  },
  {
    userId: 1,
    id: 4,
    title: 'eum et est occaecati',
    body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident',
  },
  {
    userId: 1,
    id: 5,
    title: 'nesciunt quas odio',
    body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem',
  },
  {
    userId: 1,
    id: 6,
    title: 'dolorem eum magni eos aperiam quia',
    body: 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid',
  },
  {
    userId: 1,
    id: 7,
    title: 'magnam facilis autem',
    body: 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut ',
  },
  {
    userId: 1,
    id: 8,
    title: 'dolorem dolore est ipsam',
    body: 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint',
  },
  {
    userId: 1,
    id: 9,
    title: 'nesciunt iure omnis dolorem tempora et accusantium',
    body: 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut ',
  },
];
const HomeScreen = () => {
  const [image, setImage] = useState([
    images.bgItem1,
    images.bgItem2,
    images.bgItem3,
  ]);

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Image source={images.imgAvatar} style={styles.imageHeader} />
        <TouchableOpacity style={styles.buttonAdd}>
          <Text style={styles.iconAdd}>+</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderBody = () => {
    return (
      <View>
        <Text style={styles.label}>Task Manager</Text>
        <View style={styles.bodyContainer}>
          <AnimatedCircularProgress
            size={70}
            width={7}
            fill={20}
            tintColor="#00e0ff"
            backgroundColor="#3d5875">
            {fill => <Text>{20} %</Text>}
          </AnimatedCircularProgress>

          <View style={styles.bodyDetail}>
            <Text style={styles.textProgress}>Weekly progress</Text>
            <View style={styles.detailContainer}>
              <Text style={styles.taskNumber}>14/22</Text>
              <Text style={styles.labelTask}>Task done</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderList = () => {
    return (
      <View style={styles.containerList}>
        <View style={styles.labelTaskNumberContainer}>
          <Text style={styles.labelText}>
            You have {fakeData.length} tasks for today
          </Text>
          <Ionicons name="newspaper-outline" size={20} />
        </View>
        <FlatList
          data={fakeData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />

        {/* <FlatList */}
      </View>
    );
  };

  const renderItem = props => {
    function random_item(items) {
      return items[Math.floor(Math.random() * items.length)];
    }

    const leftButton = (
      <SwipeButtonsContainer
        style={{
          alignSelf: 'center',
          aspectRatio: 1,
          flexDirection: 'column',
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => console.log('left button clicked')}>
          <Ionicons
            name="checkmark-circle-outline"
            size={60}
            color="green"
          />
        </TouchableOpacity>
      </SwipeButtonsContainer>
    );

    return (
      <SwipeItem
        style={styles.button}
        swipeContainerStyle={styles.swipeContentContainerStyle}
        rightButtons={leftButton}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              alignSelf: 'center',
              transform: [{rotate: '270deg'}],
              color: defaultColor.darkBlue,
            }}>
            10:00
          </Text>
          <View style={styles.containerItem}>
            <ImageBackground
              source={random_item(image)}
              style={{
                flex: 1,
                resizeMode: 'cover',
                borderRadius: 10,
                padding: 10,
              }}
              imageStyle={{borderRadius: 20}}>
              <Text style={styles.labelItem}>{props.item.title}</Text>
              <Text>{props.item.body}</Text>
            </ImageBackground>
          </View>
        </View>
      </SwipeItem>
      //     <SwipeItem
      //     style={styles.button}
      //     swipeContainerStyle={styles.swipeContentContainerStyle}
      //     leftButtons={leftButton}
      // >
      //     <Text>
      //         Swipe me!
      //     </Text>
      // </SwipeItem>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: defaultColor.backgroundColor}}>
      {renderHeader()}
      {renderBody()}
      {renderList()}
    </View>
  );
};

export default HomeScreen;
