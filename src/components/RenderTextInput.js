import {StyleSheet, View, TextInput} from 'react-native';
import React, { memo } from 'react';

const RenderTextInput = props => {
  const {placeholder, value, onChangeText,ref} = props;
  console.log('render text');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
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

export default memo(RenderTextInput);
