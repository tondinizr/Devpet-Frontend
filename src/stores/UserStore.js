import { extendObservable } from "mobx";

/**
 * UserStore
 */

class UserStore {
  constructor() {
    extendObservable(this, {
      loading: true,
      isLoggedIn: false,
      username: "",
      name: "",
      token: "",
      message: "",
    });
  }
}

export default new UserStore();
