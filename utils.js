class DataUtil {
  // ========== 用户 ==========
  static getUsers() {
    const str = localStorage.getItem('users');
    return str ? JSON.parse(str) : [];
  }
  static saveUser(user) {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }
  static findUser(username) {
    return this.getUsers().find(u => u.username === username);
  }
  static login(username, password) {
    const user = this.findUser(username);
    if (user && user.password === password) return user;
    return null;
  }
  static getCurrentUser() {
    const str = localStorage.getItem('currentUser');
    return str ? JSON.parse(str) : null;
  }
  static setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
  static logout() {
    localStorage.removeItem('currentUser');
  }

  // ========== 帖子（重点！） ==========
  static getPosts() {
    const str = localStorage.getItem('posts');
    return str ? JSON.parse(str) : [];
  }
  static savePost(post) {
    const posts = this.getPosts();
    posts.unshift(post); // 最新在最前
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  // ========== 评论 ==========
  static getComments() {
    const str = localStorage.getItem('comments');
    return str ? JSON.parse(str) : [];
  }
  static saveComment(comment) {
    const comments = this.getComments();
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
  }
}