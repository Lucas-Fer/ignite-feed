import React, { ChangeEvent, FormEvent, useState } from 'react'
import Avatar from './Avatar'
import Comment from './Comment'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR'

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface PostProps {
  authorData: Author;
  publishedAt: Date;
  content: Content[];
}

interface Content {
  type: string;
  text: string;
}

function Post({ authorData, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState([]);
  const [texField, setTextField] = useState('');

  const dateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBr })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();


    setComments([...comments, texField]);
    setTextField('');
  };

  const handleTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { target: { value } } = event;

    setTextField(value);
  }

  const deleteComment = (comment: string) => {
    const commentsWithoutDeletedOne = comments.filter((element) => element !== comment);

    setComments(commentsWithoutDeletedOne)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={authorData.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{authorData.name}</strong>
            <span>{authorData.role}</span>
          </div>
        </div>

        <time
          title={dateFormat}
          datatype={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          content.map(({ type, text }, index) => (
            type === 'paragraph' ? <p key={index}>{text}</p> : <p key={index}><a href='#'>{text}</a></p>
          ))
        }
      </div>

      <form
        onSubmit={handleSubmit}
        className={styles.comentForm}
      >
        <strong>Deixe seu feedback!</strong>

        <textarea
          name="textField"
          placeholder='Deixe um comentário :D'
          onChange={handleTextArea}
          value={texField}
        />

        <footer>
          <button
            disabled={!texField.length}
            type='submit'
          >Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map((comment, index) => (
            <Comment
              key={index}
              content={comment}
              onDeleteComment={deleteComment}
            />
          ))
        }
      </div>
    </article>
  )
}

export default Post;