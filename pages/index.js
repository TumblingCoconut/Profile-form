import Head from 'next/head';
import styles from '../styles/Index.module.css';
import EntryField from './Components/EntryField';

export default function Home() {
  return (
    <div>
          <Head>
            <title>
              Profile Generator
            </title>
          </Head>

      <h1 className={styles.h1} >
        Profile Card Data
      </h1>
      
      <EntryField/>
    </div>
  )
}
