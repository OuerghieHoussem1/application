import React,{useState} from 'react'   

import {useDispatch} from "react-redux"

import {newReservation,checkEmail} from "../actions/reservations"

import { useHistory } from "react-router-dom";

import { useSelector } from 'react-redux';


import Paper from "@mui/material/Paper"
import { Box } from '@mui/system';
import Container from '@mui/material/Container';

import logoFst from "../assets/logoFst.png"
import logoUtm from "../assets/logoUtm.png"
import logoJPO from "../assets/logoJPO.png" 
import { Checkbox, Grid} from '@mui/material';


export default function Main() {
    const history = useHistory();
    const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [etablissement, setetablissement] = useState("")
    const [classe, setclasse] = useState("")
    const [vaccin, setVaccin] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [CV,setCV] = useState("")

    const checkEmailFun = (value) => {
        setEmail(value)
        dispatch(checkEmail({email:value}))
    }

    
    const sendToDataBase = () => {
        setClicked(true)
        const form = new FormData()
        if(CV)
            form.append("files[]",CV,CV.name)
        form.append("name",name)
        form.append("email",email)
        form.append("etablissement",etablissement)
        form.append("classe",classe)
        form.append("vaccin",vaccin)
        dispatch(newReservation(form,history))
    }

    const etat = useSelector(state => state.etat)
    return (

        <Container style={{paddingTop:40}}>
            {/* <div className="mainContainer" style={{ width:"100%", height:"100%", color:"white", display:"flex",alignItems:"center"}}>
                    <img style={{marginRight:20}}src={logoFst} width={200} height={200}/>
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <h1 style={{fontSize:60}}>Faites votre réservation</h1>
                            <h3 style={{fontSize:36}}>99 places restantes</h3>
                        </div>
                    <img src={logoUtm} width={200} height={200}/>
            </div> */}
            <div className="mainContainer" style={{ width:"100%", height:"100%", color:"white", display:"flex",justifyContent:"center"}}>
                <img style={{marginRight:20}}src={logoJPO} width={"400vh"}/>
            </div>
            <div>
                {/* <Paper style={{width:"100%",height:496,backgroundColor:"white", opacity:0.74,marginTop:100}}>
                    <form onSubmit={sendToDataBase} style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
                        <input onChange={(e)=>setName(e.target.value)} value={name} name="username" style={{border:"0",marginTop:80,width:"90%", borderBottom: "2px solid rgb(212, 212, 212)"}} placeholder="Nom et prénom"/>
                        <input onChange={(e)=>checkEmailFun(e.target.value)} value={email} name="email" style={{border:"0",marginTop:40,width:"90%", borderBottom: "2px solid rgb(212, 212, 212)"}} placeholder="Email"/>
                        {email.length>0&&<p style={{alignSelf:"flex-start",paddingLeft:54,paddingTop:10, color:etat.used?"red":"green"}}>{etat.code}.</p>}
                        <button disabled={etat.used} style={{backgroundColor:"white", border:"0",marginTop:180}}>Réserver</button>
                    </form>
                </Paper> */}
            </div>
            {/* <Box style={{marginTop:300}}>    
                <Paper >
                    <Grid container padding={5}>
                        <Grid item xs={12}>
                            <Grid container spacing={4}>
                                <Grid item xs={12} style={{fontWeight:"bold"}}>
                                La limite du nombre de places est atteinte! Vous pouvez visiter les stands des différents sociétés dans la salle de sport de la FST lors de la JPO! merci pour votre participation!
                                 </Grid>
                            </Grid> 
                        </Grid>
                    </Grid>
                </Paper>
            </Box> */}
                {<Paper style={{minWidth:0,backgroundColor:"rgba(255,255,255,.1)"}}>
                    <Grid container padding={5}>
                        <Grid item xs={12}>
                            <input onChange={(e)=>setName(e.target.value)} value={name} name="username" style={{color:"black",backgroundColor:"transparent" ,border:"0",marginTop:80,width:"100%", borderBottom: "2px solid white"}} placeholder="Nom et prénom"/>
                        </Grid>
                        <Grid item xs={12}>
                            <input onChange={(e)=>checkEmailFun(e.target.value)} value={email} name="email" style={{color:"black",backgroundColor:"transparent" ,border:"0",marginTop:40,width:"100%", borderBottom: "2px solid white"}} placeholder="Email"/>
                            {email.length>0&&<p style={{fontSize:"2vh",alignSelf:"flex-start",paddingTop:10, color:etat.used?"red":"green"}}>{etat.code}.</p>}
                        </Grid>
                        <Grid item xs={12}>
                            <input onChange={(e)=>setetablissement(e.target.value)} value={etablissement} name="etablissement" style={{backgroundColor:"transparent" ,border:"0",marginTop:40,width:"100%", borderBottom: "2px solid white"}} placeholder="Etablissement"/>
                        </Grid>
                        <Grid item xs={12}>
                            <input onChange={(e)=>setclasse(e.target.value)} value={classe} name="classe" style={{backgroundColor:"transparent" ,border:"0",marginTop:40,width:"100%", borderBottom: "2px solid white"}} placeholder="Classe"/>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{color:"black",display:"flex", flexDirection:"row",alignItems:"flex-start",marginTop:40}}>
                                <label>Vacciné:</label>
                                <Checkbox onClick={(e)=>setVaccin(!vaccin)} checked={vaccin} name="vaccin" style={{color:"black",width:"100%"}}/>
                            </div>
                        </Grid>
                        <Grid item xs={12} pt={3}>
                                <label style={{color:"black"}}>Veuillez mettre votre CV</label>
                                <input style={{color:"black"}} type="file" onChange={(e)=>setCV(e.target.files[0])}/>
                        </Grid>
                        <Grid item xs={12}>
                            <button onClick={sendToDataBase} disabled={!clicked&&etat.used} style={{color:"black", fontWeight:"bold" ,backgroundColor:"#367be3", borderRadius:50,marginTop:120,width:"100%"}}>Réserver</button>
                        </Grid>
                    </Grid>
                </Paper>}
        </Container>
    )
}
