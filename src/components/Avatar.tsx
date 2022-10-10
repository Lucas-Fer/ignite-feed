import React, { Component, ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  commentComponent?: boolean;
}

export default class Avatar extends Component {
  render() {
    const avatarProps: AvatarProps = this.props;
    return (
      <img
        className={avatarProps.commentComponent ? styles.avatarWithoutBorder : styles.avatar}
        src={avatarProps.src}
      />
    )
  }
}
