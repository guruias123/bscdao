import React,{useEffect,useState} from "react"
import Modal from "../../Shared/Modal"
import Button from "../../Shared/Button"
import Checkbox from "../../Shared/Checkbox"
import EmailModal from "../../User/EmailModal"
import PasswordModal from "../../User/PasswordModal"
import { Link,useNavigate } from "react-router-dom"
import avatar from "../../assets/images/avatar.png"
import routes from "../../routes"
import style from "./style.module.scss"
import {disconnect} from "../../Ramper/MagicApi"




export default ({ close }) => {
  const [openEmailModal, setOpenEmailModal] = React.useState(false)
  const [openPasswordModal, setOpenPasswordModal] = React.useState(false)
  const [email, setEmail] = useState("")
  const [out, setOut] = useState("")
  let history = useNavigate()
  

  useEffect(() => {
    setEmail(localStorage.getItem("gmail"))
  }, [])

  const signOut = () =>{
    // localStorage.removeItem("gmail")
     setEmail(null)
    history(routes.auth.logIn())
    
  }
  
  return (
    <>
      {!openEmailModal && (
        <Modal className={style.modal} close={close}>
          <div className={style.modalHeader}>
            <div
              className={style.modalAvatar}
              style={{ backgroundImage: `url(${avatar})` }}
            />
            <div className={style.modalUserInfo}>
              <div className={style.modalName}>Robert Chen</div>
              {/* <div className={style.modalEmail}>robchen@gmail.com</div> */}
              <div className={style.modalEmail}>{email}</div>
              <div className={style.modalDate}>Since 07/01/2020</div>
            </div>
          </div>
          <Button
            className={style.modalButton}
            light
            onClick={() => setOpenPasswordModal(true)}
          >
            Change Password
          </Button>
          <Button
            className={style.modalButton}
            light
            onClick={() => setOpenEmailModal(true)}
          >
            Change Email
          </Button>
          <Button className={style.modalButton} light component={"label"}>
            <div>Dark Mode</div>
            <Checkbox />
          </Button>
          <Button className={style.modalButton} light onClick={()=>signOut()}>
            Log out
          </Button>
        </Modal>
      )}
      {openEmailModal && <EmailModal close={() => setOpenEmailModal(false)} />}
      {openPasswordModal && (
        <PasswordModal close={() => setOpenPasswordModal(false)} />
      )}
    </>
  )
}
