import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
 
    safeView:{
        backgroundColor: 'skyblue', 
        flex: 1
    },
    view:{
        backgroundColor: 'linen', 
        flex: 1
    },
    image:{
        height: 500
    },
    subView:{
        padding: 15, 
        marginLeft: 10
    },
    headText:{
        fontWeight: 'bold',
        fontSize: 18,
        paddingVertical: 10,
      },
      text:{
          fontSize: 16,
        },
        counterView:{
            flexDirection: 'row', 
            justifyContent: 'center'
        },
        counterText:{
            padding: 15,
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 20,
          },
        buttonView:{
            flexDirection: 'row', 
            justifyContent: 'space-around',
        },
});