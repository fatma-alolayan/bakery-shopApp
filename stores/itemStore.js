import { decorate, observable } from "mobx";
import instance from "./instance";

class ItemStore {
  items = [];
  loading = true;

  fetchItems = async () => {
    try {
      const response = await instance.get("/items");
      this.items = response.data;
      this.loading = false;
    } catch (error) {
      console.error("ItemStore -> fetchItems -> error", error);
    }
  };

  getItemById = (itemId) => this.items.find((item) => item.id === itemId);
}

decorate(ItemStore, {
  items: observable,
  loading: observable,
});

const itemStore = new ItemStore();

itemStore.fetchItems();

export default itemStore;
