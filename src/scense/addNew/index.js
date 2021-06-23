import React, { useCallback, useState } from 'react';
import {View, Text} from 'react-native';
import RenderTextInput from '../../components/RenderTextInput';
const AddNew = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const onChangeText = useCallback(
    value => {
      setA(value);
    },
    [a],
  );

  const onChangeText2 = useCallback(
    value => {
      setC(value);
    },
    [c],
  );
  return (
    <View>
      <RenderTextInput placeholder={'A'} onChangeText={onChangeText} />
      <RenderTextInput placeholder={'C'} onChangeText={onChangeText2} />
    </View>
  );
};

export default AddNew;
