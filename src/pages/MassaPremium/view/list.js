import React from 'react';

import { List, Divider } from 'antd';

function MassaPremium(props) {
    return (<>
    <Divider orientation="left"><h4 style={{color: props.colorTitle}}>{props.title}</h4></Divider>
    <List
    style={{
        backgroundColor:props.color
    }}
    itemLayout='vertical'
    split={0}
    grid={{ gutter: 20, xs: 1,
      sm: 2,
      md: 2,
      lg: 3,
      xl: 3,
      xxl: 3 }}
      bordered
      footer={props.footer}
      dataSource={props.data}
      renderItem={item => (
        <List.Item>
            <h5 style={{color: props.colorTitle}}>{item}</h5>
        </List.Item>
      )}
    />
       
    </>)
}

export default MassaPremium;