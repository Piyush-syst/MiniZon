import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import {photoUpload} from '../../components/ImagePicker';
import TextInputFunc from '../../components/TextInputFunc';
import ButtonFunc from '../../components/ButtonFunc';
import Header from '../../components/header';
import * as CONST from '../../utils/Constants/StringConstants';
import {connect} from 'react-redux';
import Dropdown from '../../components/Dropdown';
import ImagePickers from '../../components/ImagePicker';
import uploadImage from '../../utils/Helper/uploadImage';
import {updateProduct} from '../../actions/UpdateProductAction';
import {FlatList} from 'react-native-gesture-handler';
import styles from './styles';
class UpdateSingleProduct extends Component {
  constructor(props) {
    super(props);
    const {
      ID,
      name,
      gender,
      category,
      brand,
      description,
      price,
      quantity,
      size,
    } = props.route.params.product;
    this.state = {
      productName: name,
      source: [],
      downloadUrls: [],
      uri: '',
      gender: gender,
      category: category,
      brand: brand,
      description: description,
      price: price,
      quantity: quantity,
      size: size,
      id: ID,
    };
  }

  async upload(source, name) {
    const downloadurl = await uploadImage(source, name);
    let temp = [...this.state.downloadUrls];
    temp.push(downloadurl);
    this.setState({downloadUrls: temp});
  }
  async setData() {
    const pattern = /^\d+$/;
    isPriceValid = pattern.test(this.state.price);
    isQuantityValid = pattern.test(this.state.quantity);
    if (this.state.productName == '' || this.state.productName == ' ') {
      alert('Name must be filled out');
    } else if (this.state.description == '' || this.state.description == ' ') {
      alert('Description must be filled out');
    } else if (this.state.price == '' || this.state.price == ' ') {
      alert('Price must be filled out');
    } else if (this.state.quantity == '' || this.state.quantity == ' ') {
      alert('Quantity must be filled out');
    } else if (
      this.state.gender == '' ||
      this.state.gender == ' ' ||
      this.state.gender == 'Gender'
    ) {
      alert('Gender must be selected');
    } else if (
      this.state.size == '' ||
      this.state.size == ' ' ||
      this.state.size == 'Sizes'
    ) {
      alert('Size must be selected');
    } else if (
      this.state.category == '' ||
      this.state.category == ' ' ||
      this.state.category == 'Category'
    ) {
      alert('Category must be selected');
    } else if (
      this.state.brand == '' ||
      this.state.brand == ' ' ||
      this.state.gender == 'Brand'
    ) {
      alert('Brand must be selected');
    } else if (!isPriceValid) {
      alert('Please enter valid Price');
    } else if (!isQuantityValid) {
      alert('Enter a valid Quantity');
    } else {
      this.props.UpdateProductAction(
        // this.state.downloadUrls,
        this.state.id,
        this.state.productName,
        this.state.gender,
        this.state.category,
        this.state.brand,
        this.state.price,
        this.state.quantity,
        this.state.description,
        this.state.size,
        //{...this.state},
      );
      this.props.navigation.pop();
    }
  }

  removeImage(index) {
    let updatedSource = [];
    Object.assign(updatedSource, this.state.source);
    updatedSource.splice(index, 1);
    this.setState({source: updatedSource});
  }
  handlePhotoUpload = async () => {
    const data = await photoUpload();
    let temp = [...this.state.source];
    let imgUrl =
      Platform.OS === 'ios' ? data.uri.replace('file://', '') : data.uri;
    let obj = {
      img: imgUrl,
    };
    temp.push(obj);
    this.setState({source: temp});
    console.warn(this.props.sizes, this.props.brands, this.props.categories);
  };

  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <Header centerText="MiniZon" />
        <ScrollView
          style={styles.scrollView}
          contentInsetAdjustmentBehavior="automatic"
          bounces={false}
          overScrollMode={'always'}>
          <KeyboardAvoidingView style={styles.view} behavior="position">
            <Text style={styles.text}>{CONST.UPDATE_PRODUCT}</Text>
            <View style={styles.subView}>
              <TextInputFunc
                textType="medium"
                text={CONST.PRODUCT_NAME}
                placeholder={CONST.LABEL_PLACEHOLDER_PRODUCT_NAME}
                onChange={(changedText) => {
                  this.setState({productName: changedText});
                }}
                value={this.state.productName}
              />

              <View style={styles.flexRow}>
                <Dropdown
                  optionList={['Gender', 'Male', 'Female']}
                  defaultValue={this.state.gender}
                  width="50%"
                  onClickDropDown={(value) => {
                    this.setState({gender: value});
                  }}
                />
                <Dropdown
                  optionList={
                    this.props.sizesVar
                      ? this.props.sizesVar
                      : ['S', 'M', 'L', 'XL', 'XXL']
                  }
                  defaultValue={this.state.size}
                  width="50%"
                  onClickDropDown={(value) => {
                    this.setState({size: value});
                  }}
                />
              </View>
              <TextInputFunc
                textType="medium"
                text={CONST.PRODUCT_DESCRIPTION}
                placeholder={CONST.PLACEHOLDER_PRODUCT_DESCRIPTION}
                onChange={(changedText) => {
                  this.setState({description: changedText});
                }}
                value={this.state.description}
              />
              <Dropdown
                optionList={
                  this.props.categories
                    ? this.props.categories
                    : ['Trouser', 'T-Shirt']
                }
                defaultValue={this.state.category}
                width="90%"
                onClickDropDown={(value) => {
                  this.setState({category: value});
                }}
              />
              <TextInputFunc
                textType="medium"
                text={CONST.PRODUCT_PRICE}
                placeholder={CONST.PLACEHOLDER_PRODUCT_PRICE}
                onChange={(changedText) => {
                  this.setState({price: changedText});
                }}
                kType="numeric"
                value={this.state.price}
              />
              <Dropdown
                optionList={
                  this.props.brands ? this.props.brands : ['Nike', 'Reebok']
                }
                defaultValue={this.state.brand}
                width="90%"
                onClickDropDown={(value) => {
                  this.setState({brand: value});
                }}
              />
              <TextInputFunc
                textType="medium"
                text={CONST.PRODUCT_QUANTITY}
                placeholder={CONST.PLACEHOLDER_PRODUCT_QUANTITY}
                onChange={(changedText) => {
                  this.setState({quantity: changedText});
                }}
                kType="numeric"
                value={this.state.quantity}
              />
              <Text style={styles.pickerText}>{CONST.ADD_IMAGES}</Text>
              <View style={styles.imagePickerView}>
                <TouchableOpacity
                  onPress={() => {
                    this.handlePhotoUpload();
                  }}>
                  <Image
                    style={styles.pickerButtonImage}
                    source={CONST.PLUS_ICON_IMAGE}
                  />
                </TouchableOpacity>
                <FlatList
                  horizontal={true}
                  data={this.state.source}
                  renderItem={({item, index}) => (
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          this.removeImage(index);
                        }}
                        style={styles.topButton}>
                        <Image
                          source={CONST.CROSS_ICON_IMAGE}
                          style={styles.crossImage}
                        />
                      </TouchableOpacity>

                      <Image
                        source={{uri: item.img}}
                        style={styles.pickedImage}
                      />
                    </View>
                  )}
                />
              </View>
              <ButtonFunc
                text={CONST.UPDATE_PRODUCT}
                wid="60%"
                fontsize={16}
                onButtonPress={() => {
                  console.warn('clicked');
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
  const {FetchAttributeReducer} = state;
  return {
    sizesVar: FetchAttributeReducer.sizes,
    categories: FetchAttributeReducer.categories,
    brands: FetchAttributeReducer.brands,
  };
};

const mapDispatchToProps = (dispatch, nextProps) => {
  return {
    UpdateProductAction: (
      id,
      name,
      gender,
      category,
      brand,
      price,
      quantity,
      description,
      size,
    ) => {
      dispatch(
        updateProduct(
          id,
          name,
          gender,
          category,
          brand,
          price,
          quantity,
          description,
          size,
        ),
      );
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpdateSingleProduct);
