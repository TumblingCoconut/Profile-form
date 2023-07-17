import styles from '/styles/EntryField.module.css';

export default function EntryField() {
    return (
        
    <div className={styles.form}>
        <form action="/profile" method="GET">
            <div className={styles.input_group}>
                <div className={styles.field}>
                    <input className={styles.input} type='text' name='Name' required/> 
                    <label className={styles.label} htmlFor='Name'>Name</label>
                </div>

                <div className={styles.field}>
                    <input className={styles.input} type='text' name='Email' required/> 
                    <label className={styles.label} htmlFor='Email'>Email</label>
                </div>

                <div className={styles.field}>
                    <input className={styles.input} type='date' name='Birthdate' required/> 
                    <label className={styles.label} htmlFor='Birthdate'>Birthdate</label>
                </div>
            </div>
            <button className={styles.button} type="submit">Submit</button>
        </form>
    </div>
    )
  } 