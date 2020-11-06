import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 420,
    },
});

export default function SpanningTable(props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} >
            <Table className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right">Quantidade por Porção</TableCell>
                        <TableCell align="right">  %VD (*)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.table.map((row,index) => (
                        <TableRow key={props.key}>
                            <TableCell align="left"  component="th" scope="row">{props.head[index]}</TableCell>
                            <TableCell align="center">{row.quant}</TableCell>
                            <TableCell align="center">{row.vd}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}