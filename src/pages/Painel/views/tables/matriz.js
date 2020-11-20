import React from 'react'
import { Table } from 'antd';

const columns = [
    { title: 'Id', dataIndex: 'ID', key: 'ID',responsive: ['md'], width: '4%', sorter: (a, b) => a.ID - b.ID,
    sortDirections: ['ascend'], },
    { title: 'Nome', dataIndex: 'NOME', key: 'NOME', width: '15%'},
    { title: 'Email', dataIndex: 'EMAIL', key: 'EMAIL',responsive: ['md'], width: '15%' },
    { title: 'Telefone', dataIndex: 'TELEFONE', key: 'TELEFONE',responsive: ['md'], width: '10%' },
    { title: 'Cidade', dataIndex: 'CIDADE', key: 'CIDADE',responsive: ['md'], width: '13%',  sorter: (a,b) => a>b?-1:1 },
    { title: 'Estado', dataIndex: 'ESTADO', key: 'ESTADO',responsive: ['md'], width: '9%'},
    { title: 'Assuto', dataIndex: 'ASSUNTO', key: 'ASSUNTO', width: '10%'},
    { title: 'Mensagem', dataIndex: 'MENSAGEM', key: 'MENSAGEM',ellipsis: {showTitle: false},responsive: ['md'], width: '7%' },
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
                <p style={{ margin: 0 }}><label>Mensagem:</label>{record.MENSAGEM}</p>
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