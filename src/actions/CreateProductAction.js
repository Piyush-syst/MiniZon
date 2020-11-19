import * as CONST from '../utils/Constants/StringConstants';
import firestore from '@react-native-firebase/firestore';
export function createProduct(
  //downloadUrls,
  name,
  gender,
  category,
  brand,
  price,
  quantity,
  description,
  size,
) {
  let imgUrl;
  let id;
  id = name + description;
  if (category === 'Trousers') {
    imgUrl =
      'https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto,fit=cover,g=top/in-resources/22a79ec5-e694-4d7a-ac5a-85c8fa45b7f1/Images/ProductImages/Source/ITMTR00392Grey%20(1).jpg';
  } else if (category === 'Tshirt') {
    imgUrl =
      'https://p0.pikist.com/photos/919/643/mock-up-tee-shirt-dummy-blue.jpg';
  } else if (category === 'kurti') {
    imgUrl =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRG62nToKZQVrONSFFSEehfZGHdBp0bjNJ-Ng&usqp=CAU';
  } else if (category === 'shorts') {
    imgUrl =
      'https://contents.mediadecathlon.com/p1579646/ae6ccf2f17447b766db2f00a5734d465/p1579646.jpg?f=260x260';
  }

  return (dispatch) => {
    firestore()
      .collection('items')
      .add({
        name: name,
        //downloadUrls: downloadUrls,
        id: id,
        imgUrl: imgUrl,
        gender: gender,
        category: category,
        brand: brand,
        price: price,
        quantity: quantity,
        description: description,
        size: size,
      })
      .then(() => {
        console.warn('Item added!');
      });
  };
}
