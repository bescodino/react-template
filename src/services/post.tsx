import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL + 'posts';


interface Author {
    name: string;
    role: string;
    avatarUrl: string;
  }
  
  interface Content {
    type: 'paragraph' | 'link';
    content: string;
  }
  
interface Post {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

class PostService {
  getAllPosts() {
    return axios.get<Post[]>(API_URL);
  }

  getPostById(postId: number) {
    return axios.get<Post>(`${API_URL}/${postId}`);
  }

  deletePost(postId: number) {
    return axios.delete(`${API_URL}/${postId}`);
  }
}

export default new PostService();