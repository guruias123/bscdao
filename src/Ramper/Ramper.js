import {
    CHAIN,
    getRamperSigner,
    getUser,
    getWalletModel,
    init,
    openWallet,
    sendToken,
    signIn,
    signOut
  } from "@ramper/ethereum"
  import { ethers } from "ethers"
  import { useMemo, useState,useEffect } from "react"
  import {Link,useNavigate} from 'react-router-dom'
  import routes from "../routes"
  import ProfileModal from "../User/ProfileModal"


  
  init({
    appName: "DAO",
    walletProviders: ["metamask"],
    defaultTokenAddresses: ["0x42Ba8e76F6Bf9C824659482318c09E847398c7DD"],
    theme: "dark",
    network: "maticmum",
    authProviders: ["google", "facebook", "twitter", "apple", "email"]
  })
  
  
  
  
  
  function Ramper() {
    const [user, setUser] = useState(getUser())
    let history = useNavigate()
    const handleSignIn = async () => {
      const signInResult = await signIn()
      setUser(signInResult.user ?? null)
      if(user){
        
        history(routes.root())
      }
    }
  
  
    const handleSignOut = () => {
      signOut()
      setUser(null)
      if(user == null){
        history(routes.auth.logIn())
      }
    }


   
  
   
  
    return (
      <div
        style={{
          padding: "20px 16px"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            innerWidth:"100px"
          }}
        >
          <p>Ramper Ethereum Example</p>
          <button onClick={()=>{handleSignIn();localStorage.setItem("gmail",user.email);localStorage("signout",handleSignOut())}}>Sign in</button>
          <br />
          {/* <button  onClick={handleSignOut}>Sign out</button> */}
          {/* <ProfileModal  gmail={user.email}/> */}
        </div>
      </div>
    )
  }
  
  export default Ramper
  