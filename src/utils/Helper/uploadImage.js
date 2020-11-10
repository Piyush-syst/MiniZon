import * as CONST from '../Constants/StringConstants';
import storage from '@react-native-firebase/storage';
import {utils} from '@react-native-firebase/app';
import {Platform} from 'react-native';
export default async function uploadImage(path, id, response) {
  let downLoadUrls = [];
  try {
    console.warn('path', path);
    let url;
    //  console.warn('upload URI', uploadUri);
    for (var i = 0; i < path.length; i++) {
      id = id + new Date().getTime();
      url = await ImageUpload(path[i].img, id);
      downLoadUrls.push(url);
    }
    console.warn(downLoadUrls);
    return downLoadUrls;
  } catch (error) {
    console.warn(error);
  }

}
async function ImageUpload(fileLocation, id) {
  return new Promise(async function (resolve, reject) {
    const reference = storage().ref(id);
    await reference.putFile(fileLocation);
    const url = await storage().ref(id).getDownloadURL();
    resolve(url);
  });
}
