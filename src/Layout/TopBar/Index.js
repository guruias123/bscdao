import React,{ useState,useEffect } from "react"
import { Link } from "react-router-dom"
import ProfileModal from "../../User/ProfileModal"
import routes from "../../routes"
import logo from "../../assets/images/logo2.png"
import avatar from "../../assets/images/avatar.png"
import style from "./style.module.scss"

function Index(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("")

  useEffect(() => {
    setEmail(localStorage.getItem("gmail"))
  }, [])
  return (
    <>
      {modalOpen && <ProfileModal close={() => setModalOpen(false)} />}
      <div className={style.topBar}>
        <Link to={routes.root()} className={style.logo} >
          <img src={logo} alt="logo" />
        </Link>
        <div className={style.user} onClick={() => setModalOpen(true)}>
          <div>
            <div className={style.name}>Robert Chen</div>
            {/* <div className={style.email}>robchen@gmail.com</div> */}
            <div className={style.email}>{email}</div>
          </div>
          <div
            className={style.avatar}
            style={{ backgroundImage: `url(${avatar})` }}
          />
        </div>
      </div>
    </>
  )
}

export default Index;