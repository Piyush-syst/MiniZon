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

class UpdateSingleProduct extends Component {
  constructor(props) {
    super(props);
    const {ID ,name, gender, category, brand, description, price, quantity, size} = props.route.params.product;
    this.state = {
      productName: name,
      source: [],
      downloadUrls: [],
      uri: '',
      gender: gender,
      category: category ,
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
    // if (this.state.name == '' || this.state.name == ' ') {
    //   alert('Name must be filled out');
    // } else if (this.state.email == '' || this.state.email == ' ') {
    //   alert('Email must be filled out');
    // } else if (this.state.contact == '' || this.state.contact == ' ') {
    //   alert('Contact must be filled out');
    // } else if (this.state.password == '' || this.state.password == ' ') {
    //   alert('Password must be filled out');
    // } else if (this.state.cnfpassword == '' || this.state.cnfpassword == ' ') {
    //   alert('Password must be confirmed');
    // } else if (this.state.password != this.state.cnfpassword) {
    //   alert("Passwords Doesn't Match");
    // } else {
      // let count = 1;
      // this.state.source.forEach((element) => {
      //   uploadImage(element, this.state.productName + count++ + '.jpg');
      // });
      // console.warn(this.state.uri);
      // const downloadurl = await uploadImage(this.state.uri, count);
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
   // }
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
      <SafeAreaView style={{backgroundColor: 'skyblue'}}>
        <Header centerText="MiniZon" />
        <ScrollView
          style={{marginBottom: 20}}
          contentInsetAdjustmentBehavior="automatic"
          bounces={false}
          overScrollMode={'always'}>
          <KeyboardAvoidingView style={styles.view} behavior="position">
            <Text style={styles.text}>{CONST.UPDATE_PRODUCT}</Text>
            <View style={{paddingHorizontal: 15, marginVertical: 40}}>
              <TextInputFunc
                textType="medium"
                text={CONST.PRODUCT_NAME}
                placeholder={CONST.LABEL_PLACEHOLDER_PRODUCT_NAME}
                onChange={(changedText) => {
                  this.setState({productName: changedText});
                }}
                value={this.state.productName}
              />
             
              <View style={{flexDirection: 'row'}}>
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
                value={this.state.quantity}
              />
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                {CONST.ADD_IMAGES}
              </Text>
              <View style={{flexDirection: 'row', marginTop: 30}}>
                <TouchableOpacity
                  onPress={() => {
                    this.handlePhotoUpload();
                  }}>
                  <Image
                    style={{height: 50, width: 50, tintColor: 'skyblue'}}
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
                        style={{
                          position: 'absolute',
                          zIndex: 1,
                          right: 0,
                          top: 0,
                        }}>
                        <Image
                          source={CONST.CROSS_ICON_IMAGE}
                          style={{
                            height: 20,
                            width: 20,
                            tintColor: 'black',
                            transform: [{rotate: '45deg'}],
                          }}
                        />
                      </TouchableOpacity>

                      <Image
                        source={{uri: item.img}}
                        style={{height: 50, width: 50}}
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
                  console.warn("clicked");
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
const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 100,
    alignItems: 'center',
  },
  smalltext: {
    marginTop: 20,
    color: 'slategray',
    alignSelf: 'center',
  },
  view: {
    flex: 1,
    backgroundColor: 'linen',
  },
  medium: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpdateSingleProduct);
