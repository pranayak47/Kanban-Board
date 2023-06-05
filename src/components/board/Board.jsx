import React from 'react'
import styles from './Board.module.css'
import {MoreHorizontal} from 'react-feather'
import Card from '../Cards/Cards'

function Board() {
  return (
<div className={styles.board}>
        <div className={styles.board_top}>
              <p className={styles.board_top_title}>To DO  <span>2</span></p>
              <MoreHorizontal/>
        </div>
        <div className={styles.board_cards}>
            <Card/>
        </div>
    </div>
  )
}

export default Board