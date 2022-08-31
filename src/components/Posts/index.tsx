import { ChangeEvent, FormEvent, ReactNode, useState } from "react";
import { Avatar } from "../Avatar";
import { Comments } from "../Comments";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

//? styles
import * as Styles from "./styles";
import { formatDistanceToNow } from "date-fns/esm";

interface PostsProps {
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  contents: { type: string; content: string }[];
  publishedAt: Date;
}
[];

export function Posts({ author, contents, publishedAt }: PostsProps) {
  const [comments, setComments] = useState<string[]>([""]);
  const [postNewComment, setPostNewComment] = useState<string>("");

  const publishedDateFormatted = format(
    publishedAt,
    "d ' de ' LLLL ' às ' k'h'mm",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setComments([...comments, postNewComment]), setPostNewComment("");
  };

  const handlePostNewComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.target.setCustomValidity("");
    setPostNewComment(e.target.value);
  };

  const handleInvalidedComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.target.setCustomValidity("Preencha o Formulário Cara");
  };

  const deleteComment = (commentToDelete: string) => {
    const commentsWithoutDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeleteOne);
  };

  return (
    <Styles.Container>
      <header className="author-header">
        <div className="author">
          <Avatar
            src="https://avatars.githubusercontent.com/u/45143981?v=4"
            hasBordered
          />{" "}
          <div className="author-info">
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          dateTime={publishedAt.toISOString()}
          title={publishedDateFormatted}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className="content">
        {contents.map((content) => {
          return (
            <p key={content.content}>
              {content.type === "paragraph" ? (
                content.content
              ) : (
                <a href={content.content}>{content.content}</a>
              )}
            </p>
          );
        })}
      </div>

      <Styles.FormContainer>
        <h1>Deixe seu feedback</h1>
        <form onSubmit={handleSubmit} className="comments-area">
          <textarea
            name=""
            value={postNewComment}
            onChange={handlePostNewComment}
            onInvalid={handleInvalidedComment}
            placeholder="Escreva um comentário..."
            required
          ></textarea>
          <footer>
            <button
              type="submit"
              disabled={
                postNewComment.length === 0 || !postNewComment ? true : false
              }
            >
              Publicar
            </button>
          </footer>
        </form>
      </Styles.FormContainer>
      {comments.map((comment) => {
        return comment === "" ? (
          ""
        ) : (
          <Comments
            key={comment}
            comments={comment}
            onDeleteComment={deleteComment}
          />
        );
      })}
    </Styles.Container>
  );
}
