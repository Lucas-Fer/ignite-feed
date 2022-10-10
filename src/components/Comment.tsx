import { ThumbsUp, Trash } from 'phosphor-react';
import React, { Component, useState } from 'react';
import Avatar from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

function Comment({ content, onDeleteComment }: CommentProps) {

  const [likecount, setLikeCount] = useState(0)

  const handleComment = () => {
    onDeleteComment(content)
  }

  const handleLikeCommment = () => {
    setLikeCount((state) => state + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar commentComponent={true} src="https://github.com/lucas-fer.png" />

      <div className={styles.commentBox}>
        <main className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Fernandes</strong>
              <time
                title='01 de Outubro'
                dateTime='2022-10-01 08:13:30'>Cerca de 1h atrás
              </time>
            </div>

            <button
              onClick={handleComment}
              title='Deletar Comentário'
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </main>

        <footer>
          <button onClick={handleLikeCommment}>
            <ThumbsUp />
            Aplaudir <span>{likecount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Comment;