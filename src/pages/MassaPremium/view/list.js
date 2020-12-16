import React from 'react';

import { List, Typography, Divider } from 'antd';

function MassaPremium(props) {
    return (<>
    <Divider orientation="left">{props.title}</Divider>
    <List
    grid={{ gutter: 20, xs: 1,
      sm: 2,
      md: 2,
      lg: 3,
      xl: 3,
      xxl: 3 }}
      bordered
      dataSource={props.data}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark></Typography.Text> {item}
        </List.Item>
      )}
    />
       
    </>)
}

export default MassaPremium;