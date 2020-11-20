import React from 'react'
import { Table } from 'antd';

const columns = [
    { title: 'Id', dataIndex: 'ID', key: 'ID',responsive: ['md'],sorter: (a, b) => a.ID - b.ID,
    sortDirections: ['ascend'], },
    { title: 'Nome', dataIndex: 'NOME', key: 'NOME' },
    { title: 'Email', dataIndex: 'EMAIL', key: 'EMAIL',responsive: ['md'] },
    { title: 'Idade', dataIndex: 'IDADE', key: 'IDADE',responsive: ['md'] },
    { title: 'Telefone', dataIndex: 'TELEFONE', key: 'TELEFONE',responsive: ['md'] },
    { title: 'Cidade', dataIndex: 'CIDADE', key: 'CIDADE',responsive: ['md'],  sorter: (a,b) => a>b?-1:1 },
    { title: 'Estado', dataIndex: 'ESTADO', key: 'ESTADO',responsive: ['md'] },
    { title: 'DATA/TIME', dataIndex: 'DATATIME', key: 'DATATIME' },
];

export default function TablePesq(props) {
    return (
        <Table
            columns={columns}
            showHeader bordered pagination={false}
            expandable={{
                expandedRowRender: record => (
               <>
                <p style={{ margin: 0 }}><label>O1:</label>{record.O1}</p>
                <p style={{ margin: 0 }}><label>O2:</label>{record.O2}</p>
                <p style={{ margin: 0 }}><label>O3:</label>{record.O3}</p>
                <p style={{ margin: 0 }}><label>O4:</label>{record.O4}</p>
                <p style={{ margin: 0 }}><label>O5:</label>{record.O5}</p>
                <p style={{ margin: 0 }}><label>O6:</label>{record.O6}</p>
                <p style={{ margin: 0 }}><label>O7:</label>{record.O7}</p>
               </>
                ),
            }}
            dataSource={props.data.map((pesq)=>({
                key: pesq.ID,
                ...pesq
            }))}
        />
    )
}