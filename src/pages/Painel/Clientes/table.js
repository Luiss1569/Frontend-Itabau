import React from 'react'
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Link } from 'react-router-dom'
import './style.css';

class App extends React.Component {

    state = {
      searchText: '',
      searchedColumn: '',
      data: []
    };
    constructor(props) {
        super(props);
        this.state.data = props.data
      }


  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined  />}
            size="small"
            style={{ width: 90 }}
          >
            Pesquisar
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const columns = [
      {
        title: 'Id',
        dataIndex: 'ID',
        key: 'ID',
        width: '1%',
        sorter: (a, b) => a.ID - b.ID,
        sortDirections: ['ascend','descend'],
      },
      {
        title: 'Nome',
        dataIndex: 'NOME',
        key: 'NOME',
        width: '15%',
        sorter: (a,b) => a>b?-1:1 ,
        sortDirections: ['descend'],
        ...this.getColumnSearchProps('NOME'),
      },
      {
        title: 'Cidade',
        dataIndex: 'CIDADE',
        key: 'CIDADE',
        width: '20%',
        sorter: (a,b) => a>b?-1:1,
        ...this.getColumnSearchProps('CIDADE'),
      },
      {
        title: 'Telefone',
        dataIndex: 'TELEFONE',
        key: 'TELEFONE',
        width: '10%',
        responsive: ['md']
      },
      {
        title: 'Rua',
        dataIndex: 'RUA',
        key: 'RUA',
        width: '25%',
        responsive: ['md'],
      },
      {
        title: 'Bairro',
        dataIndex: 'BAIRRO',
        key: 'BAIRRO',
        width: '20%',
        responsive: ['md'],
    },
      {
        title: 'Opçôes',
        dataIndex: 'OPCÕES',
        key: 'OPCÕES',
        width: '20%',
        render: (text, record) =>
         <div style={{display:'flex', flexDirection: 'row'}}> 
             <Link to={`/painel/cliente/${record.ID}/update`}><EditIcon style={{ color: 'yellow' }}/></Link><div onClick={()=>{this.props.handleDelete(record.ID)}}><DeleteForeverIcon style={{ color: 'tomato', cursor: 'pointer' }}/></div>
         </div>
      },
    ];
    return <Table columns={columns} dataSource={this.props.data} showHeader bordered pagination={false}/>;
  }
}

export default App