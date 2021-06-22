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
import { connect } from 'react-redux';
import { fetchList } from '../../actions';
import _ from 'lodash'
import { getHHMMDate } from '../../utils';
import { navigate } from '../../navigation/service';
import { NAVIGATION_TITLE } from '../../constants';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();
const HomeScreen = (props) => {
  const [image, setImage] = useState([
    images.bgItem1,
    images.bgItem2,
    images.bgItem3,
  ]);

  useEffect(() => {
    props.fetchTodo()
  }, [])

  const renderHeader = () => {
    
    return (
      <View style={styles.header}>
        <Image source={images.imgAvatar} style={styles.imageHeader} />
        <TouchableOpacity style={styles.buttonAdd}
          onPress={()=>{navigate(NAVIGATION_TITLE.ADD_NEW)}}
        >
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
              <Text style={styles.taskNumber}>14/{props?.data?.length}</Text>
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
            You have {props?.data?.length} tasks for today
          </Text>
          <Ionicons name="newspaper-outline" size={20} />
        </View>
        <FlatList
          data={_.sortBy(props.data,['createdDate'])}
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
            {getHHMMDate(props.item.createdDate)}
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

const mapStateToProps =(state)=>({
  ...state,
  data: state.todoReducer.data
})

const mapDispatchToProps=(dispatch)=>({
  fetchTodo: ()=>dispatch(fetchList())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
