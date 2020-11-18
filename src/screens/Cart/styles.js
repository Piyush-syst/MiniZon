import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  view: {
    backgroundColor: 'linen',
    flex: 1,
  },
  viewList: {
    height: 160,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'black',
    margin: 5,
    zIndex: 1,
    backgroundColor: 'whitesmoke',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  itemImage: {
    height: 140,
    width: 100,
    padding: 10,
    margin: 5,
  },
  itemSubView: {
    paddingLeft: 10,
    flex: 1,
  },
  itemHeadText: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 5,
  },
  itemDescriptionText: {
    fontSize: 16,
    flexWrap: 'wrap',
  },
  itemText: {
    fontSize: 16,
  },
  flexFull: {
    flex: 1,
  },
  itemButtonView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  itemQuantityText: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  buttonView: {
    marginBottom: 20,
  },
});
