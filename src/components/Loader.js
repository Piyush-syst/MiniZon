import React, {Component} from 'react';
import {StyleSheet, Dimensions, View, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
const {height, width} = Dimensions.get('window');
class Loader extends Component {
  render() {
    if (!this.props.status) {
      return null;
    }
    return (
      <View style={styles.container}>
        <ActivityIndicator
          color={'black'}
          size={'large'}
          style={styles.loaderStyle}
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  const {CommonReducer} = state;
  return {
    status: CommonReducer.loaderStatus,
  };
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderStyle: {
    transform: [{scale: 1}],
  },
});

export default connect(mapStateToProps, null)(Loader);
