import React, {Component, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
import {fetchList, postItem} from '../actions';
const TodoScreen = props => {
  useEffect(() => {
    props.fetchTodo();
  }, []);

  const renderItem = item => {
    return (
      <View style={styles.itemContainer}>
        <Text>{item.item.name}</Text>
      </View>
    );
  };
  const onPress = () => {
    const data = {
      createdAt: '2021-06-20T15:34:25.418Z',
      name: 'hehehehehe',
      avatar: 'https://cdn.fakercloud.com/avatars/joshmedeski_128.jpg',
    };
    props.postTodo(data)
  };
  return (
    <SafeAreaView>
      <View style={styles.addContainer}>
        <TextInput style={styles.inputContainer}></TextInput>
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
          ></TouchableOpacity>
      </View>
      <FlatList
        data={props.data.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    borderWidth: 1,
    height: 50,
  },
  addContainer: {
    flexDirection: 'row',

    margin: 15,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    width: 100,
    height: 50,
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: 'green',
  },
});

const mapStateToProps = state => ({
  ...state,
  data: state.todoReducer,
});
const mapDispatchToProps = dispatch => {
  return {
    fetchTodo: () => dispatch(fetchList()),
    postTodo: params => dispatch(postItem(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoScreen);
