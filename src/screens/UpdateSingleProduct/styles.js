import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    safeView:{backgroundColor: 'skyblue'},
    scrollView:{marginBottom: 20},
    view: {
        flex: 1,
        backgroundColor: 'linen',
      },
      subView:{
        paddingHorizontal: 15, 
        marginVertical: 40
    },
    flexRow:{flexDirection: 'row'},
    pickerText:{
        fontSize: 18, 
        fontWeight: 'bold'
    },
    text:{
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 100,
        alignItems: 'center',
      },
    imagePickerView:{
        flexDirection: 'row', 
        marginTop: 30,

    },
    pickerButtonImage:{
        height: 50, 
        width: 50, 
        tintColor: 'skyblue'
    },
    topButton:{
        position: 'absolute',
        zIndex: 1,
        right: 0,
        top: 0,
      },
      crossImage:{
        height: 20,
        width: 20,
        tintColor: 'black',
        transform: [{rotate: '45deg'}],
      },
      pickedImage:{
          height: 50, 
          width: 50,
        }

});