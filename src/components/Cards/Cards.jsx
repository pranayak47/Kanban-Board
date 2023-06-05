import React from 'react'
import {FiMoreHorizontal } from 'react-icons/fi';
import {BsCheck2Square } from 'react-icons/bs';
import {HiOutlineClock } from 'react-icons/hi';

import Chip from '../Chip/Chip';
import styles from './Card.module.css'
function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.card_top}>
        <div className={styles.card_top_labels}>
       <Chip text="Frontend" color="green"/>
     
        </div>
        <FiMoreHorizontal/>
      </div>
      <div className={styles.card_title}>
        Card
      </div>
      <div className={styles.card_footer}>
        <p><HiOutlineClock/>29sept</p>
        <p><BsCheck2Square/>
         1/4
        </p>
      </div>
        </div>
  )
}

export default Card