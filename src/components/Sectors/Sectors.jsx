import React from 'react'
import { Table } from 'antd';
import { mySectors } from '../../Data/Data';

const columns = [
    {
        title: 'Mis Sectores',
        width: 50,
        dataIndex: 'sector',
        key: 'name',
        fixed: 'left',
    },
      {
        title: 'Conteo',
        key: 'operation',
        fixed: 'right',
        width: 50,
        render: () => <a className='cursor-pointer'>Empezar</a>,
      },
] 


export const Sectors = () => (
    <Table
    className='pt-7'
    columns={columns}
    dataSource={mySectors}
    scroll={{
      y: 200,
    }}
  />
)
