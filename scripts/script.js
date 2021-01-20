class Twitter {
  constructor({ listElem }) {
    this.tweets = new Posts();
    this.elements = {
      listElems: document.querySelector(listElem),
    }
  }

  renderPosts() {
  }

  showUserPost() {

  }
  
  showLikesPost() {

  }

  showAllPost() {

  }

  openModal() {

  }
}

class Posts {
  constructor({ posts = [] } = {}) {
    this.posts = posts;
  }

  addPost(tweet) {
    const post = new Post(tweet);
    post.id = this.addID();
    this.posts.push(post);
  }

  addID() {
    return Math.random().toString(36).substring(2, 3) + Math.random().toString(36).substring(2, 4);
  }

  deletePost(id) {
    this.posts.splice(id, 1);
  }

  likePost(id) {
    let post = this.posts.find(item => item.id === id);
    post.changeLike();
  }
}

class Post {
  constructor(param) {
    // Данные для каждого отдельного поста
    this.id = param.id;
    this.userName = param.userName;
    this.nickname = param.nickname;
    this.postData = param.postData;
    this.text = param.text;
    this.img = param.img;
    this.likes = param.likes;
    this.liked = false;
  }
  
  changeLike() {
    // Функция, которая меняет значение переменной liked обратным значением, а потом проверяет:
    // Если значение liked истинно, то количество лайков прибавится, если нет, то уменьшится
    this.liked = !this.liked;
    if (!this.likes) this.likes = 0;
    if (this.liked) {
      this.likes++;
    } else {
      this.likes--;
    }
  }
}

const twitter = new Twitter({
  listElem: '.tweet-list',
});

twitter.tweets.addPost({
  "userName": "Олег Васильевич",
  "nickname": "vasil",
  "text": "Где детонатор?",
  "postDate": "02.14.2012, 05:00"
}); 

twitter.tweets.addPost({
  "userName": "Дональд",
  "nickname": "trampampam",
  "text": "Зарегался на вк, хороший сервис и не банят",
  "postDate": "02.05.2012, 13:27",
  "img": "https://i2.wp.com/media.globalnews.ca/videostatic/news/vamt80qbaq-94ovmaxjqg/trumptwitterupdate.jpg?w=500&quality=70&strip=all",
  "likes": 50
}); 

twitter.tweets.addPost({
  "userName": "Raamin",
  "nickname": "raamin",
  "text": "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.",
  "postDate": "03.11.2012, 10:30",
  "likes": 999
}); 

twitter.tweets.likePost(twitter.tweets.posts[0].id);
twitter.tweets.likePost(twitter.tweets.posts[1].id);
twitter.tweets.likePost(twitter.tweets.posts[0].id);

twitter.tweets.deletePost(twitter.tweets.posts[2].id);

console.log(twitter);