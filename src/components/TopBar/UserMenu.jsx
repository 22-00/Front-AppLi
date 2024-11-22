import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];

const sucursal = "Alem y Peru"
const empresa = "La ilusion"


export const UserMenu = () => {
  return (
    <div className='mr-3'>
      <ul className="flex items-center justify-between gap-6">
        <li className="flex flex-row items-center gap-2">
          <span>{empresa} </span>
          <div className='w-1 h-5 bg-sideBarColor transform scale-x-50'></div>
          <span>{sucursal}</span>
        </li>
        <li>
          <h2>Horacio cano</h2>
        </li>
        <li>
          <Dropdown
            menu={{
            items,
            }}
            >
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    <Avatar shape="square" size='small' className='bg-sideBarColor'  icon={<UserOutlined />} />
                </Space>
            </a>
          </Dropdown>
        </li>
      </ul>
        </div>
  )
}
