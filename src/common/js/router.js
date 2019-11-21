import { homedir } from 'os'

const Index = () => import('../../pages/index.vue')
const routes = [
  {
    path: '/',
    component:Index,
    redirect: {
      path:'/home',
    },
    children:[
      {
        path:'/home',
        name:'home',
        component:Home
      },
      {
        path:'/mycomponent',
        name:'mycomponent',
        component:MyComponent
      },
      {
        path:'/testelement',
        name:'testelement',
        component:TestElement
      }
    ]
  }
]
export default routes