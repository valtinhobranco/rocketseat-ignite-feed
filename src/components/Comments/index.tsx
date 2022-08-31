import { ReactNode, useState } from "react";

//? styles
import * as Styles from "./styles";

//? components
import { Avatar } from "../Avatar";

//? images
import { Trash, ThumbsUp } from "phosphor-react";

interface CommentsProps {
  children?: ReactNode;
  comments: string;
  onDeleteComment: any;
}

export function Comments({ comments, onDeleteComment }: CommentsProps) {
  const [countLike, setCountLike] = useState<number>(0);

  const handleLikeCount = () => {
    setCountLike((state) => {
      return state + 1;
    });
    countLike;
    console.log("countLike: ", countLike);
  };

  const handleDeleteComment = () => {
    onDeleteComment(`${comments}`);
  };
  return (
    <Styles.Container>
      {/* ........... Left ........... */}

      <Avatar src="https://avatars.githubusercontent.com/u/45143981?v=4" />
      {/* ........... Right ........... */}
      <div className="content">
        {/* ........... comments-container ........... */}
        <div className="comments-container">
          <div className="comments-content">
            <header>
              <div className="avatar-name">
                <strong>
                  Valter Branco <span>(você)</span>
                </strong>
                <time>Cerca de 2h</time>
              </div>
              <button className="remove" onClick={handleDeleteComment}>
                <Trash size={24} />
              </button>
            </header>
            <p>{comments}</p>
          </div>
        </div>

        <button className="like-content" onClick={handleLikeCount}>
          <ThumbsUp size={20} />
          <strong>
            Aplaudir {countLike !== 0 ? <span> • {countLike}</span> : ""}
          </strong>
        </button>
      </div>
    </Styles.Container>
  );
}
