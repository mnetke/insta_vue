import http from "../http-common";

class PostService {
  getAll() {
    return http.get("/posts");
  }

  get(id) {
    return http.get(`/posts/${id}`);
  }

  create(data) {
    return http.post("/posts", data);
  }

  update(id, data) {
   var data1 = {
      title: data.title,
      description: data.description
    }
    return http.put(`/posts/${id}`, data1);
  }

  delete(id) {
    return http.delete(`/posta/${id}`);
  }

  deleteAll() {
    return http.delete(`/posts`);
  }

  findByTitle(title) {
    return http.get(`/posts?title=${title}`);
  }
}

export default new PostService();