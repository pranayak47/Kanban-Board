import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import styles from './Chip.module.css'
function Chip(props) {
    return (
        <div className={styles.chip}>
             {props.text} 
           
           
            {props.close && <CloseIcon onClick={props.onClose ? props.close() : ""} />}
        </div>
    )
}

export default Chip;