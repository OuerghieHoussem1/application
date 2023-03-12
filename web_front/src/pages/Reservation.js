import React from 'react'
import qrCode from "../assets/qrcode.png"

import { useSelector } from 'react-redux'


import logoFst from "../assets/logoFst.png"
import logoUtm from "../assets/logoUtm.png"
import testQr from "../assets/qrcode.png"
import logoJPO from "../assets/logoJPO.png" 

import Container from '@mui/material/Container';
import { Grid,Box,Paper} from '@mui/material';
import { Image } from 'react-bootstrap'
export default function Reservation() {
    const reservation = useSelector(state => state.reservation)
    return (
        <Container style={{paddingTop:40}}>
            <Grid container spacing={3} alignItems="center">
                <div className="mainContainer" style={{ width:"100%", height:"100%", color:"white", display:"flex",justifyContent:"center"}}>
                    <img style={{marginRight:20}}src={logoJPO} width={"400vh"}/>
                </div>
            </Grid>
            <Box>    
                <Paper >
                    <Grid container padding={5}>
                        <Grid item xs={12}>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    {reservation.name}
                                </Grid>
                                <Grid item xs={12}>
                                    Nous vous enverrons un email contenant votre code de réservation et votre QR code. (Veuillez vérifier votre spam)
                                 </Grid>
                            </Grid> 
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Container>
       /*  <div>
            <div style={{color:"white", display:"flex",flexDirection:"column",alignItems:"center",marginTop:100}}>
                <h1 style={{fontSize:64}}>Réservation effectuée</h1>
            </div>
           <div style={{width:1072,height:496,backgroundColor:"white", opacity:0.74,marginTop:100,display:"flex", alignItems:"center"}}>
               {reservation&&<Container>
                   <Row>
                       <Col xs={6} style={{paddingLeft:30,display:"flex",flexDirection:"column",justifyContent:"center"}}>
                           <div style={{marginBottom:20}}>
                                {reservation.name}
                           </div>
                           <div style={{marginBottom:20}}>
                                Code: {reservation.code}
                           </div>
                           <div>
                                Vérifier votre email pour télécharger votre QR code.
                           </div>
                       </Col>
                       <Col xs={6} style={{paddingLeft:70 , display:"flex",flexDirection:"column",alignItems:"center"}}>
                           <div style={{marginBottom:20}}>
                                <Image src={`/codes/${reservation.code}.png`} rounded  />
                           </div>
                           <div>
                                <button style={{backgroundColor:"white", border:"0"}}>Télecharger</button>
                            </div>
                       </Col>
                   </Row>
               </Container>}
           </div>
        </div> */
    )
}
