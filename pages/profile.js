import { useState, useEffect } from "react";
import Head from "next/head";
import styles from '../styles/profile.module.css';
import { useRouter } from 'next/router';


export default function newPage(){
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [birthdate, setBirthdate] = useState();
    
  useEffect(() => {
    var url = window.location.search;
    url = url.replace("?", '');
    let searchParams = new URLSearchParams(url);

    setName(searchParams.get("Name"));
    setEmail(searchParams.get("Email"));
    setBirthdate(searchParams.get("Birthdate"));
  }, []);

  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <div>
        <button className={styles.button} type="submit" onClick={handleClick}>Back</button>
      <div className={styles.card}>
        <Head>
          <title>
            Profile Card
          </title>
        </Head>
        
        <div className={styles.title}>
          <h1 className={styles.h1}>Profile Card</h1>
        </div>
        
        <div className={styles.text_group}>
          <p className={styles.p}>Name: {name}</p>
          <p className={styles.p}>Email: {email}</p>
          <p className={styles.p}>Date of Birth: {birthdate}</p>
        </div>  
        
      </div>
    </div>
  )
}