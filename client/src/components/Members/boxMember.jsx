import React from 'react';

import styles from "./Card.module.css";

export default class BoxMember extends React.Component{
  render(){
    return(
      <div className={styles.card}>
        <p className={styles.cardName}>{this.props.nome}</p>
        <img className={styles.cardAvatar} src={this.props.avatar} alt="" />
        <p className={styles.cardRole}>{this.props.cargo}</p>
      </div>
    )
  }
}
