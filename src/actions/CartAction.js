import * as CONST from '../utils/Constants/StringConstants';
export function CartUpdateAction(item, quantity, items) {
  return (dispatch) => {
    let flag = false;
    let count = items.length;
    if (items.length) {
      items.forEach((element) => {
        if (element.items.id === item.id) {
          element.quantity = element.quantity + quantity;
          flag = true;
          //return item;
        }
      });

      if (flag) {
        dispatch({
          type: CONST.CART_ADD_SUCCESS,
          payload: {items: items, count: count},
        });
      } else {
        items.push({items: item, quantity: quantity});
        count = items.length;
        dispatch({
          type: CONST.CART_ADD_SUCCESS,
          payload: {items: items, count: count},
        });
      }
    } else {
      items.push({items: item, quantity: quantity});
      count = items.length;
      dispatch({
        type: CONST.CART_ADD_SUCCESS,
        payload: {items: items, count: count},
      });
    }
  };
}
export function CartItemRemoveAction(items, index) {
  return (dispatch) => {
    let count = items.length;
    count = items.length;
    items.splice(index, 1);
    dispatch({
      type: CONST.CART_REMOVE_SUCCESS,
      payload: {items: items, count: count},
    });
  };
}
