import React, {Component} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import TextInputFunc from '../../components/TextInputFunc';
import ButtonFunc from '../../components/ButtonFunc';
import Header from '../../components/header';
import * as CONST from '../../utils/Constants/StringConstants';
import {connect} from 'react-redux';
import styles from './styles';
import {updateUser, getUserData} from '../../actions/CommonAction';
class EditUser extends Component {
  constructor(props) {
    super(props);
    let {ID, contact, email, name} = props.userData;
    contact = String(contact);
    this.state = {
      id: ID,
      name: name,
      contact: contact,
      email: email,
    };
  }

  async setData() {
    this.props.UpdateUserAction(
      this.state.id,
      this.state.name,
      this.state.contact,
      this.state.email,
    );
    this.props.getUserDataAction(this.state.id);
    this.props.navigation.pop();
  }

  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <Header centerText="MiniZon" />
        <ScrollView bounces={false}>
          <KeyboardAvoidingView style={styles.view} behavior="position">
            <Text style={styles.text}>Update User</Text>
            <View style={styles.subView}>
              <TextInputFunc
                textType="medium"
                text={CONST.TEXT_NAME}
                placeholder={CONST.LABEL_PLACEHOLDER_NAME}
                onChange={(changedText) => {
                  this.setState({name: changedText});
                }}
                value={this.state.name}
              />
              <TextInputFunc
                textType="medium"
                text={CONST.TEXT_MAIL}
                placeholder={CONST.LABEL_PLACEHOLDER_USERNAME}
                onChange={(changedText) => {
                  this.setState({email: changedText});
                }}
                value={this.state.email}
              />
              <TextInputFunc
                textType="medium"
                text={CONST.TEXT_CONTACT}
                placeholder={CONST.LABEL_PLACEHOLDER_CONTACT}
                onChange={(changedText) => {
                  this.setState({contact: changedText});
                }}
                kType="numeric"
                value={this.state.contact}
              />
              <ButtonFunc
                text="Update User"
                wid="60%"
                fontsize={16}
                onButtonPress={() => {
                  this.setData();
                }}
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state) => {
  const {CommonReducer} = state;
  return {
    userData: CommonReducer.userData,
  };
};

const mapDispatchToProps = (dispatch, nextProps) => {
  return {
    UpdateUserAction: (id, name, contact, email) => {
      dispatch(updateUser(id, name, contact, email));
    },
    getUserDataAction: (id) => {
      dispatch(getUserData(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
