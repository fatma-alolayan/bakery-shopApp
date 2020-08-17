import { decorate, observable } from "mobx";
import instance from "./instance";

class BakeryStore {
  bakeries = [];
  loading = true;

  fetchBakeries = async () => {
    try {
      const res = await instance.get("/bakeries");
      this.bakeries = res.data;
      this.loading = false;
    } catch (error) {
      console.error("BakeryStore -> fetchBakeries -> error", error);
    }
  };
}

decorate(BakeryStore, {
  bakeries: observable,
  loading: observable,
});

const bakeryStore = new BakeryStore();

bakeryStore.fetchBakeries();

export default bakeryStore;
