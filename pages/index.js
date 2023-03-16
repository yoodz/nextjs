import Head from "next/head";
import Image from "next/image";
import { Button } from "antd";
import "antd/dist/reset.css";
import styles from "../styles/Home.module.css";

export default function Home() {
  function handleClick() {
    fetch(
      "https://api.day.app/5rpr4yA4eXvWtQkXcfCm3d/有人来啦?sound=alarm&level=timeSensitive"
    );
  }

  return (
    <div className={styles.container}>
      {/* <Image
        alt="Picture of the author"
        width={500}
        layout='fill'
        src="http://res.afunny.top/3d-casual-life-man-and-pregnant-woman.png"
      /> */}
      <img className={styles.banner} src="http://res.afunny.top/static/shine-friends-sitting-by-the-window-and-talking-1.png"></img>
      <Button
        onClick={handleClick}
        type="primary"
        className={styles.buttonAlert}
      >
        响铃
      </Button>
      <Button
        onClick={handleClick}
        type="default"
        className={styles.buttonAlert}
      >
        快递来了
      </Button>
      <Button
        onClick={handleClick}
        type="primary"
        className={styles.buttonAlert}
      >
        送水来了
      </Button>
    </div>
  );
}
