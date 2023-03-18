import { useState } from "react";
import TipMessage from "../components/tipMessage/tipMessage";
import s from "../styles/Home.module.css";

export default function Home() {
  const [message, setMessage] = useState('')
  const [alert, setAlert] = useState({
    text: '',
    type: ''
  })
  const [show, setShow] = useState(false)

  function handleClick(tip) {
    fetch(
      `https://api.day.app/5rpr4yA4eXvWtQkXcfCm3d/${tip}?sound=alarm&level=timeSensitive`
    );
    notify('normal', '通知成功')
  }

  function handleChange (e) {
    setMessage(e.target.value)
  }

  function notify(type, message) {
    setShow(true)
    setAlert({
      text: message,
      type
    })

    setTimeout(() => {
      setShow(false)
      setAlert({})
    }, 3000);
  }

  function handleLeaveMessage() {
    if (message.length <= 0) {
      notify('error', '请输入留言')
      return
    }
    handleClick(message)
    setMessage('')
  }

  return (
    <div className={s.container}>
      { show && <TipMessage message={alert} />}
      <img className={s.banner} src="../static/banner.png" />
      <div className={s.buttonWrap}>
        <div onClick={() => handleClick('有人来啦')} className={s.baseButton}>响铃</div>
        <div onClick={() => handleClick('快递来了')} className={s.baseButton}>快递来了</div>
        <div onClick={() => handleClick('送水来啦')} className={s.baseButton}>送水来了</div>
        <input onChange={handleChange} value={message} className={s.input} maxLength={15} placeholder='请输入15字内留言'></input>
        <div className={s.baseButton} onClick={handleLeaveMessage}>留言</div>
      </div>
    </div>
  );
}
