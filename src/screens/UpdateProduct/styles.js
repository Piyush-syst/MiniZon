import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'linen',
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
  safeView: {
    backgroundColor: 'skyblue',
    flex: 1,
  },
  imageView: {
    height: 140,
    width: 100,
    padding: 10,
    margin: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 10,
  },
  flexFull: {
    flex: 1,
  },
  subView: {
    paddingLeft: 10,
    flex: 1,
  },
  descriptionText: {
    fontSize: 16,
    flexWrap: 'wrap',
  },
  itemText: {fontSize: 16},
});
