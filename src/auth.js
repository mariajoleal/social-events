class Auth {
  constructor() {
    this.isAuthenticated = false
  }

  authenticate(cb) {
    this.isAuthenticated = true;
    cb()
  }

  logout(cb) {
    this.isAuthenticated = false;
    cb()
  }

  isUserAuthenticated() {
    return this.isAuthenticated;
  }
}

export default new Auth();