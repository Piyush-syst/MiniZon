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
    flexFull: {
        flex: 1,
      },
      ViewList: {
        height: 160,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'black',
        margin: 5,
        zIndex: 1,
        backgroundColor: 'whitesmoke',
        flexDirection: 'row',
        padding: 10,
      },
      itemView:{
          height: 140, 
          width: 100, 
          padding: 10, 
          margin: 5
        },
        itemSubView:{paddingLeft: 10},
        itemHeadText:{
            fontWeight: 'bold',
            fontSize: 18,
            paddingVertical: 10,
          },

          itemText:{fontSize: 16},

});