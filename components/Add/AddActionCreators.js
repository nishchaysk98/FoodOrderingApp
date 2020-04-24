import {ADDITEM, REMOVEITEM} from "./AddConstants";

export function AddItem(item, price_1){
  return {
    type : ADDITEM,
    addItem : item,
    price: price_1
  }
}
export function RemoveItem(){
  return {
    type : REMOVEITEM
  }
}