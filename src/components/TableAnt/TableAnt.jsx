import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Codigo de Barra',
    width: 85,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Articulo',
    width: 200,
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Stock Salon',
    dataIndex: 'address',
    key: '1',
    width: 70,
  },
  {
    title: 'Stock Deposito',
    dataIndex: 'address',
    key: '2',
    width: 90,
  },
  {
    title: 'Stock Total',
    dataIndex: 'address',
    key: '3',
    width: 70,
  },
  {
    title: 'Coincidencia',
    dataIndex: 'Coincidencia',
    key: '4',
    width: 120,
  },
  {
    title: 'Ubicacion Salon',
    dataIndex: 'address',
    key: '5',
    width: 95,
  },
  {
    title: 'Ubicacion Deposito',
    dataIndex: 'address',
    key: '6',
    width: 100,
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 60,
    render: () => <a className='cursor-pointer'>Empezar Conteo</a>,
  },
];

const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `7790742625205`,
    age: "DULCE DE LECHE LA SERENISIMA REPOSTERO 400 GR NUEVO",
    address: `${i}`,
    Coincidencia: "Si"
  });
}
 export const TableAnt = () => (
  <Table
    columns={columns}
    dataSource={data}
    scroll={{
      x: 1500,
      y: 300,
    }}
  />
);


