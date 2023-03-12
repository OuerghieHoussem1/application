import React,{useEffect} from 'react'

import {useDispatch,useSelector} from "react-redux"

import { getReservations,acceptReservation,refuseReservation } from '../actions/reservations'


import { styled } from '@mui/material/styles';
import {TableContainer,Paper,Table,TableHead,TableRow,TableBody,TableCell,tableCellClasses, Button} from "@mui/material"



export default function CheckReservations() {
    
    const allReservations = useSelector(state => state.allReservations)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getReservations())
    }, [])


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
    const handleOpenCerteficate = (certeficate) => {
        window.open(`/certeficates/${certeficate}`, '_blank').focus()
    }
    return (
        <div>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
                <TableRow>
                <StyledTableCell>Code</StyledTableCell>
                <StyledTableCell align="left">Nom et prénom</StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Etablissement</StyledTableCell>
                <StyledTableCell align="left">Classe</StyledTableCell>
                <StyledTableCell align="left">Voir certeficat de vaccination</StyledTableCell>
                <StyledTableCell align="left">Accepter/Refuser</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {allReservations.map((row,index) => (
                    <StyledTableRow key={index}>
                        <StyledTableCell component="th" scope="row">
                        {row.code}
                        </StyledTableCell>
                        <StyledTableCell align="left">{row.name}</StyledTableCell>
                        <StyledTableCell align="left">{row.email}</StyledTableCell>
                        <StyledTableCell align="left">{row.etablissement}</StyledTableCell>
                        <StyledTableCell align="left">{row.classe}</StyledTableCell>
                        <StyledTableCell align="center"><Button onClick={()=>handleOpenCerteficate(row.vaccineCerteficate)}>voir certeficat</Button></StyledTableCell>

                        {!row.accepted?<StyledTableCell align="left"><Button onClick={()=>dispatch(acceptReservation({code:row.code}))}>Accepter</Button></StyledTableCell>:
                        <StyledTableCell align="left"><Button onClick={()=>dispatch(refuseReservation({code:row.code}))}>Refuser</Button></StyledTableCell>}
                    </StyledTableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
        </div>
    )
}
