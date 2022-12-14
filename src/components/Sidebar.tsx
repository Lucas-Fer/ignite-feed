import React, { Component } from 'react'
import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react'
import Avatar from './Avatar';

export default class Sidebar extends Component {
  render() {
    return (
      <aside className={styles.sidebar}>
        <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=230&q=60"
        />

        <div className={styles.profile}>
          <Avatar src="https://github.com/lucas-fer.png" />
          <strong>Lucas Fernandes</strong>
          <span>Desenvolvedor Web</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar perfil
          </a>
        </footer>
      </aside>
    )
  }
}
