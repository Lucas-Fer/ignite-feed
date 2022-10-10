import React, { Component } from 'react'

import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg'
export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <img src={igniteLogo} alt="Logo do Ignite" />
        <strong>Ignite Feed</strong>
      </header>
    )
  }
}
