import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    safeView:{
        backgroundColor: 'skyblue', 
        flex: 1
    },
    view: {
        flex: 1,
        backgroundColor: 'linen',
      },
      headText: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 100,
        alignItems: 'center',
      },
      subView:{
          paddingHorizontal: 15
        },
        buttonText:{
            alignSelf: 'flex-end',
            fontWeight: 'bold',
            fontSize: 12,
            marginTop: 10,
          },
});