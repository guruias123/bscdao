import React, { useEffect } from "react";
import axios from "axios";
import Card from "../../Shared/Card";
import Table from "../../Shared/Table";
import Font from "../../Shared/Font";

const data = [
  [
    "Amazon dApp build",
    <Font color="success">Yes</Font>,
    "150 PHNX",
    "12/15/2020",
  ],
  [
    "Gamer dApp build",
    <Font color="success">Yes</Font>,
    "180 PHNX",
    "11/15/2020",
  ],
  ["Uber dApp build", "No", "140 PHNX", "10/15/2020"],
  ["Facebook dApp build", "No", "250 PHNX", "09/15/2020"],
  [
    "WhatsApp dApp build",
    <Font color="success">Yes</Font>,
    "350 PHNX",
    "08/15/2020",
  ],
  [
    "YouTube dApp build",
    <Font color="success">Yes</Font>,
    "375 PHNX",
    "07/15/2020",
  ],
];


export default () => {
  const [first, setFirst] = React.useState();

  useEffect(() => {
    axios.get("http://localhost:2001/app").then(res=>{
      console.log(res.data.data);
      let a =[];
      for (let index = 0; index < res.data.data.length; index++) {
        if(res.data.data[index].vote == "Yes" || res.data.data[index].vote == "No"){
          a.push(res.data.data[index]);
        }
      }
      setFirst(a)
    })
  }, [])

  useEffect(() => {
    console.log(first);
  }, [first])
  
  
  return (
    <>
      <Card title="Rewards">
        <Table
          columns={["Votes Participated", "Your Vote", "Reward Earned", "Date"]}
        >
           {first && first.map(item =>{
            return(
            <tr>
              <td>{item.proposal}</td>
              {item.vote == "Yes" ?
              <td style={{"color":"green"}} >{item.vote}</td> : <td >{item.vote}</td>}
              
            </tr>
            )})}
          {/* {data.map((row, i) => (
            <tr key={i}>
              {row.map((value, j) => (
                <td key={j}>{value}</td>
              ))}
            </tr>
          ))} */}
        </Table>
      </Card>
    </>
  );
};
