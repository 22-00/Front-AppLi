import { Button } from 'antd'
import { SunOutlined, MoonOutlined } from '@ant-design/icons'
import React from 'react'

export const ToggleThemeButton = ({toggleTheme, darkTheme }) => {
  return (
    <div className='absolute bottom-7 left-5 flex items-center justify-center text-base'>
        <Button onClick={toggleTheme}>
          {darkTheme ? <SunOutlined/> :
           <MoonOutlined/>}
        </Button>
        
    </div>
  )
}
