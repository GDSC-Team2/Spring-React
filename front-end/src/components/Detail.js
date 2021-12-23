import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("/api/v1/posts/")
      .then(function(response) {
        setPosts(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const postList = posts.filter(post => (post.id === Number(id))); // 전달받은 id값과 일치하는 데이터

  const deleteHandler = (id) => {
    // axios.delete(`/api/v1/posts/${id}`)
    // .then(response => {
    //   alert("삭제되었습니다.");
    //   window.location.href = "/";
    // }).catch(error => {
    //   alert(error.response.data);
    // });
  }

  return (

  <div>
    {postList.map(post => (
      <div>
        <ul key={post.id}>
          <li>글 제목: {post.title}</li>
          <li>작성자: {post.author}</li>
          <li>예상 가격: {post.price}</li>
          <li>공구 기간: {post.date}</li>
          <li>상품 링크: {post.link}</li>
          <li>오픈채팅: {post.contact}</li>
          <li>설명: {post.description}</li>
        </ul>

        <Button variant="danger" onClick={deleteHandler(post.id)}>삭제</Button>
      </div>
    ))}
  </div>
  );
}