import { Layout } from '../layouts'

import { Schedule } from '../../views/schedule'
import { Symptoms } from '../../views/symptoms'

const routes = () => [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'schedule',
                element: <Schedule />,
            },
            {
                path: 'symptoms',
                element: <Symptoms />,
            }
        ]
    }
]

export default routes