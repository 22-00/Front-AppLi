import { 
  HomeOutlined,
  AppstoreOutlined,
  AreaChartOutlined,
  PayCircleOutlined,
  SettingOutlined,
  BarsOutlined
}
from '@ant-design/icons'

export const items = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: 'Home',
    },
    {
      key: 'activity',
      icon: <AppstoreOutlined />,
      label: 'Activity',
    },
    {
      key: 'tasks',
      icon: <BarsOutlined />,
      label: 'Tasks',
      children: [
        {
          key: 'task-1',
          label: 'Task 1',
        },
        {
          key: 'task-2',
          label: 'Task 2',
        },
        {
          key: 'subtasks',
          label: 'Subtask',
          children: [
            {
              key: 'subtask-1',
              label: 'Subtask 1',
            },
            {
              key: 'subtask-2',
              label: 'Subtask 2',
            },
          ],
        },
      ],
    },
    {
      key: 'progress',
      icon: <AreaChartOutlined />,
      label: 'Progress',
    },
    {
      key: 'payment',
      icon: <PayCircleOutlined />,
      label: 'Payment',
    },
    {
      key: 'setting',
      icon: <SettingOutlined />,
      label: 'Setting',
    },
  ];