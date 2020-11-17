import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    safeView:{backgroundColor: 'skyblue'},
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
      topButton:{
        position: 'absolute',
        zIndex: 1,
        right: 0,
        top: 0,
      },
      topButtonImage:{
        height: 20,
        width: 20,
        tintColor: 'black',
        transform: [{rotate: '45deg'}],
      },
      pickedImage:{
        height: 50, 
        width: 50},
      pickerButtonImage:{
        height: 50, 
        width: 50, 
        tintColor: 'skyblue'},
        scrollView:{marginBottom: 20},
        flexRow:{flexDirection: 'row'},
        sideHeadingText:{
          fontSize: 18, 
          fontWeight: 'bold'
        },
        listView:{
          flexDirection: 'row', 
          marginTop: 30
        },
        

});