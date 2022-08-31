//? components
import { Header } from "./components/Header";
import { Posts } from "./components/Posts";
import { SideBar } from "./components/SideBar";

//? styles
import * as Styles from "./styles";

//? types
type postsType = {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  contents: { type: string; content: string }[];
  publishedAt: Date;
}[];

const posts: postsType = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/45143981?v=4",
      name: "Valter Branco",
      role: "Web Developer",
    },

    contents: [
      { type: "paragraph", content: " Fala galeraa 👋 !!!" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-08-10 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/45143981?v=4",
      name: "Jonathan",
      role: "Web Developer",
    },

    contents: [
      { type: "paragraph", content: " Fala galeraa 👋 " },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-08-20 20:00:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/45143981?v=4",
      name: "Jonathan",
      role: "Web Developer",
    },

    contents: [
      { type: "paragraph", content: " Boa max  " },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-08-20 20:00:00"),
  },
];

export function App() {
  return (
    <Styles.Container>
      <Header />

      <Styles.Wrapper>
        <SideBar />
        <main>
          {posts.map((post) => {
            const { id, author, contents, publishedAt } = post;
            return (
              <Posts
                key={id}
                author={author}
                contents={contents}
                publishedAt={publishedAt}
              />
            );
          })}
        </main>
      </Styles.Wrapper>
    </Styles.Container>
  );
}
