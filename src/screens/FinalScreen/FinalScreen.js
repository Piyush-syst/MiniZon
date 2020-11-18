import React, {Component} from 'react';
import {View, SafeAreaView} from 'react-native';
import ButtonFunc from '../../components/ButtonFunc';
import TextInputFunc from '../../components/TextInputFunc';
import Header from '../../components/header';
import * as CONST from '../../utils/Constants/StringConstants';
import {connect} from 'react-redux';
import styles from './styles';
class FinalScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTextInputVisible: false,
      address: '',
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <Header centerText={CONST.HEADER_TEXT} />
        <View style={styles.view}>
          {!this.state.isTextInputVisible && (
            <View style={styles.buttonView}>
              <ButtonFunc
                text={CONST.BUTTON_TEXT_ADD}
                wid="70%"
                fontsize={14}
                onButtonPress={() => {
                  this.setState({isTextInputVisible: true});
                }}
              />
            </View>
          )}
          {this.state.isTextInputVisible && (
            <View style={styles.buttonView}>
              <TextInputFunc
                textType="medium"
                text={CONST.TEXT_ADDRESS}
                placeholder={CONST.LABEL_PLACEHOLDER_ADDRESS}
                onChange={(changedText) => {
                  this.setState({address: changedText});
                }}
                mLine={true}
                value={this.state.address}
              />

              <ButtonFunc
                text={CONST.BUTTON_TEXT_ADD}
                wid="70%"
                fontsize={14}
                onButtonPress={() => {}}
              />
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => {
  const {CommonReducer} = state;
  return {};
};

const mapDispatchToProps = (dispatch, nextProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(FinalScreen);
