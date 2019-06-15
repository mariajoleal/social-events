class Auth {
  constructor() {
    this.myStorage = window.localStorage;
  }

  authenticate(cb) {
    this.myStorage.setItem('Auth', 'true');
    cb();
  }

  logout(cb) {
    this.myStorage.removeItem('Auth');
    cb();
  }

  isUserAuthenticated() {
    return this.myStorage.getItem('Auth') === 'true';
  }
}

export default new Auth();