import { Menu } from 'antd'
import { items } from './itemsMenu/Items'

export const MenuList = ({ darkTheme }) => {
  return (
    <Menu
        theme={darkTheme ? 'dark' : 'light'}
        mode='inline'
        className='h-[88-vh] mt-8 flex flex-col gap-3 text-base relative'
        items={items}
        /> 
  )
}
