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
  profileImage: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginTop: 50,
  },
  subView: {
    flex: 1,
    alignItems: 'center',
  },
  textView: {
    flexDirection: 'row',
    marginVertical: 10,
    marginLeft: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  buttonView: {
    marginBottom: 30,
  },
});
