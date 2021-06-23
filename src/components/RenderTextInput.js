import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';

const RenderTextInput = props => {
  const {placeholder, value, onChangeText} = props;
  console.log(props);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={value}
        onChangeText={(value)=>{onChangeText(value)}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginTop: 20,
  },
  textInput: {
    fontSize: 18,
    color: 'white',
  },
});

export default RenderTextInput;
