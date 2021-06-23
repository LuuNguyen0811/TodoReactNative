import React from 'react';
import PropTypes from 'prop-types';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import Modal from 'react-native-translucent-modal';
import { defaultColor } from '../theme/color';

const Loading = props => {
  const {show, onRequestClose} = props;
  return (
    <Modal
      style={styles.container}
      visible={show}
      transparent={true}
      statusBarTranslucent={true}
      onRequestClose={() => onRequestClose()}>
      <View style={styles.content}>
        <ActivityIndicator animating size="large" color={defaultColor.addButton} />
      </View>
    </Modal>
  );
};

Loading.propTypes = {
  show: PropTypes.bool,
  onRequestClose: PropTypes.func,
};
Loading.defaultProps = {
  show: false,
  onRequestClose: () => {},
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: defaultColor.windowTint,
  },
});
