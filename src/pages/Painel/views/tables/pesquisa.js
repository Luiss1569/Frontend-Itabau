import React from 'react'
import { Table, Tooltip } from 'antd';

function convert(date) {

    var nomeMeses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEC']
    var data = new Date(date);
    var dia = data.getDate();
    var mes = data.getMonth();
    mes = nomeMeses[mes];
    var ano = data.getFullYear();

    return `${data.getHours()}h${data.getMinutes()} ${[dia, mes, ano].join('/')}`

}

const columns = [
    { title: 'Id', dataIndex: 'ID', key: 'ID',responsive: ['md'],sorter: (a, b) => a.ID - b.ID,
    sortDirections: ['ascend'], },
    { title: 'Nome', dataIndex: 'NOME', key: 'NOME' },
    { title: 'Email', dataIndex: 'EMAIL', key: 'EMAIL',responsive: ['md'] },
    { title: 'Idade', dataIndex: 'IDADE', key: 'IDADE',responsive: ['md'] },
    { title: 'Telefone', dataIndex: 'TELEFONE', key: 'TELEFONE',responsive: ['md'] },
    { title: 'Cidade', dataIndex: 'CIDADE', key: 'CIDADE',responsive: ['md'],  sorter: (a,b) => a>b?-1:1 },
    { title: 'Estado', dataIndex: 'ESTADO', key: 'ESTADO',responsive: ['md'] },
    { title: 'DATA/TIME', dataIndex: 'DATATIME', key: 'DATATIME', render:convert },
];

export default function TablePesq(props) {
    return (
        <Table
            columns={columns}
            showHeader bordered pagination={false}
            expandable={{
                expandedRowRender: record => (
               <>
                <p style={{ margin: 0 }}><Tooltip title={'O que você acha dos produtos Itabaú e suas variedades?'}><label>O1:</label>{record.O1}</Tooltip></p>
                <p style={{ margin: 0 }}><Tooltip title={'Se você pudesse melhorar algo em nosso produtos, o que melhoraria? '}><label>O2:</label>{record.O2}</Tooltip></p>
                <p style={{ margin: 0 }}><Tooltip title={'Qual o sabor que falta de picolé e sorvete de massa em nossa linha, que você acha interessante termos?'}><label>O3:</label>{record.O3}</Tooltip></p>
                <p style={{ margin: 0 }}><Tooltip title={'O que você acha do preço dos nossos produto?'}><label>O4:</label>{record.O4}</Tooltip></p>
                <p style={{ margin: 0 }}><Tooltip title={'Você recomendaria a Itabaú para seus parentes, amigos ou companheiros?'}><label>O5:</label>{record.O5}</Tooltip></p>
                <p style={{ margin: 0 }}><Tooltip title={'Com qual frequência você toma sorvete?'}><label>O6:</label>{record.O6}</Tooltip></p>
                <p style={{ margin: 0 }}><Tooltip title={'Por favor, diga-nos o que podemos fazer para melhorar? '}><label>O7:</label>{record.O7}</Tooltip></p>
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