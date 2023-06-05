import React from 'react'
import styles from './Editable.module.css'

function Editable(props) {
  return (
    <div className={styles.editable}>
        <p>{props.text || 'Add item'}</p>
        <form className={styles.edit_editable}
        onSubmit={(event)=>{
            event.preventDefault()
            if(props.onSubmit)props.onSubmit()
        }}
        >
            <input type='text'
            defaultValue={props.text}
            />
            <div className={styles.edit_footer_editable}>
                <button type='submit'>{props.buttonText || 'Add'}</button>
                

            </div>
        </form>
    </div>
  )
}

export default Editable