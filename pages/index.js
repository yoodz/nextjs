import Head from 'next/head'
import Image from 'next/image'
import { Button } from 'antd';
import 'antd/dist/reset.css';
import styles from '../styles/Home.module.css'

export default function Home() {

  function handleClick() {
    fetch('https://api.day.app/5rpr4yA4eXvWtQkXcfCm3d/有人来啦?sound=alarm&level=timeSensitive')
  }

  return (
    <div className={styles.container}>
      <Button onClick={handleClick} type='primary' className={styles.buttonAlert}>响铃</Button>
    </div>
  )
}
