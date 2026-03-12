import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { useState } from "react";

import "./styles/theme.css";
import "./styles/global.css";

type Post = {
  id: number;
  date: string;
  title: string;
  description: string;
  liked: boolean;
};

export default function App() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      date: "02 de jul, 2021",
      title: "Agora é oficial: o Windows 11 está vindo",
      description: "Lorem ipsum dolor sit amet...",
      liked: false,
    },
    {
      id: 2,
      date: "15 de ago, 2022",
      title: "React 18 chegou",
      description: "Concurrent rendering mudou tudo.",
      liked: false,
    },
    {
      id: 3,
      date: "01 de jan, 2024",
      title: "TypeScript domina o mercado",
      description: "TypeScript virou padrão.",
      liked: false,
    },
  ]);

  function handleToggleLike(id: number) {
    setPosts(prev =>
      prev.map(post =>
        post.id === id
          ? { ...post, liked: !post.liked }
          : post
      )
    );
  }

  return (
    <>
      <Header />

      {posts.map(post => (
        <Card
          key={post.id}
          date={post.date}
          title={post.title}
          description={post.description}
          liked={post.liked}
          onLike={() => handleToggleLike(post.id)}
        />
      ))}
    </>
  );
}
