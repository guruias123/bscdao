import React,{useState,useEffect} from "react"
import axios from 'axios'
import Font from "../../Shared/Font"
import Card from "../../Shared/Card"
import Table from "../../Shared/Table"
import { Columns } from "../../Shared/Grid"
import Modal from "../../Shared/Modal"
import Button from "../../Shared/Button"
import style from "./style.module.scss"

const upcoming = [
  {
    title: "Amazon dApp build"
  },
  {
    title: "Uber replacement dApp",
    date: "08/01/2020"
  },
  {
    title: "Facebook dApp build",
    date: "08/01/2020"
  },
  {
    title: "Youtube dApp build",
    date: "09/01/2020"
  },
  {
    title: "Whatsapp dApp build",
    date: "09/01/2020"
  },
  {
    title: "DEX aggregator build",
    date: "09/01/2020"
  },
  {
    title: "Gamer Marketplace build",
    date: "09/01/2020"
  },
  {
    title: "Tokenization dApp build",
    date: "10/01/2020"
  }
]

const past = [
  ["DEX dApp build", "07/01/2020", <Font color="success">Pass</Font>],
  ["Other dApp build", "07/01/2020", <Font color="success">Pass</Font>],
  ["Other dApp build", "07/01/2020", "Fail"],
  ["Other dApp build", "07/01/2020", "Fail"],
  ["Other dApp build", "07/01/2020", <Font color="success">Pass</Font>],
  ["Other dApp build", "07/01/2020", "Fail"],
  ["Other dApp build", "07/01/2020", <Font color="success">Pass</Font>],
  ["Other dApp build", "07/01/2020", <Font color="success">Pass</Font>]
]



export default () => {
  const [modalItem, setModalItem] = React.useState(undefined)
  const closeModal = () => setModalItem(undefined)

  const [proposal1, setProposal1] = useState([""])
  const [vote, setVote] = useState("")

  useEffect(() => {
    axios.get("http://localhost:2001/app").then(res => {
      console.log(res.data);
      setProposal1(res.data.data)
    })
  }, [])
  
  const voting = (item,item1) =>{
    axios.get(`http://localhost:2001/app/${item}`).then(res =>{
      setModalItem(item1)
      console.log(res.data.data[0]._id);
      setVote(res.data.data[0])
    })
  }

  const applyVote = () =>{
    axios.patch(`http://localhost:2001/app/${vote._id}`,{
      proposal:vote.proposal,
      vote:"Yes"
    }).then(res=>{
        console.log("updated successfully");
        console.log(res.data)
        setModalItem(undefined)
    })
  }

  const applynoVote = () =>{
    axios.patch(`http://localhost:2001/app/${vote._id}`,{
      proposal:vote.proposal,
      vote:"No"
    }).then(res=>{
        console.log("updated successfully");
        console.log(res.data)
        setModalItem(undefined)
    })
  }

  return (
    <>
      {modalItem && (
        <Modal
          close={closeModal}
          title={modalItem.title}
          actions={
            <>
              <Button primary onClick={()=>{applyVote()}}>
                Yes
              </Button>
              <Button primary outline onClick={()=>{applynoVote()}}>
                No
              </Button>
            </>
          }
        >
          <div className={style.modalContent}>
            <div className={style.modalInfo}>
              <div className={style.modalColumn}>
                <div className={style.modalKey}>Cost</div>
                <div className={style.modalValue}>350,000 PHNX</div>
              </div>
              <div className={style.modalColumn}>
                <div className={style.modalKey}>Est. Completion</div>
                <div className={style.modalValue}>{modalItem.date}</div>
              </div>
            </div>
            <div className={style.modalQuestion}>
              Are you in favor of funding this project?
            </div>
          </div>
        </Modal>
      )}
      <Columns>
        <Card title="Upcoming Votes">
          <Table columns={["Proposal", "Voting Day"]}>
            {proposal1.map((item, i) => (
              <tr key={i}>
                <td>{item.proposal}</td>
                <td>
                  {item.date || (
                    <Font
                      color="accent"
                      pointer
                      onClick={() => voting(item._id,item)}
                    >
                      Vote Now
                    </Font>
                  )}
                </td>
              </tr>
            ))}
            
          </Table>
        </Card>
        <Card title="Past Votes">
          <Table columns={["Proposal", "Voting Day", "Pass/Fail"]}>
            {past.map((row, i) => (
              <tr key={i}>
                {row.map((value, j) => (
                  <td key={j}>{value}</td>
                ))}
              </tr>
            ))}
          </Table>
        </Card>
      </Columns>
      
    </>
  )
}
