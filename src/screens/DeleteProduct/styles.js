import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'linen',
  },
  safeView: {
    backgroundColor: 'skyblue',
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 10,
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
  subView: {
    height: 140,
    width: 100,
    padding: 10,
    margin: 5,
  },
  flexFull: {flex: 1},
  itemView: {
    paddingLeft: 10,
    flex: 1,
  },
  itemHeadText: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 10,
  },
  descriptionText: {
    fontSize: 16,
    flexWrap: 'wrap',
  },
  itemText: {fontSize: 16},
});
