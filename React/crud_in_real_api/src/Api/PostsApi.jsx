import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts = () => {
  return api.get("/posts");
};

export const deletePosts = (id) => {
  return api.delete(`/posts/${id}`);
};

export const PostData = (post) => {
  return api.post(`/posts`, post);
};

export const EditData = (id, post) => {
  return api.put(`/posts/${id}`, post);
};
