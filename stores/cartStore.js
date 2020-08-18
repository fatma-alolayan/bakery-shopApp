import { computed, decorate, observable } from "mobx";
import AsyncStorage from "@react-native-community/async-storage";

class CartStore {
  // _items = [];
  _items = [
    {
      itemId: 1,
      quantity: 5,
    },
    {
      itemId: 2,
      quantity: 3,
    },
  ];

  fetchCart = async () => {
    const items = await AsyncStorage.getItem("myCart");
    this._items = items ? JSON.parse(items) : [];
  };

  addItem = async (newItem) => {
    const foundItem = this._items.find(
      (item) => item.itemId === newItem.itemId
    );
    if (foundItem) foundItem.quantity += newItem.quantity;
    else this._items.push(newItem);

    await AsyncStorage.setItem("myCart", JSON.stringify(this._items));
  };

  deleteItem = async (itemId) => {
    this._items = this._items.filter((item) => item.itemId !== itemId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this._items));
  };

  get totalQuantity() {
    let total = 0;
    this._items.forEach((item) => (total += item.quantity));
    return total;
  }
}

decorate(CartStore, {
  _items: observable,
  totalQuantity: computed,
});

const cartStore = new CartStore();

export default cartStore;
