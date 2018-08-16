/**
 * 路由定义会越来越长，单独一个文件便于维护
 */
const routes = [{
    path: '/auth/register',
    name: 'Register',
    //   懒加载视图组件
    component: () =>
      import ('@/views/auth/Register')
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: () =>
      import ('@/views/auth/Login')
  },
  {
    path: '/',
    name: 'Home',
    component: () =>
      import ('@/views/Home')
  },
  {
    path: '*',
    redirect: '/'
  },
  // EditUsers
  {
    path: '/users/1/edit',
    name: 'EditUsers',
    component: () =>
      import ('@/views/users/Edit.vue'),
    children: [{
        path: '',
        name: 'EditProfile',
        component: () =>
          import ('@/views/users/Profile.vue'),
        // auth 为 true ,标识当前路由需要登录才能访问
        meta: {
          auth: true
        }
      },
      // EditAvatar
      {
        path: '/users/1/edit_avatar',
        name: 'EditAvatar',
        component: () =>
          import ('@/views/users/Avatar.vue'),
        meta: {
          auth: true
        }
      },
      // EditPassword
      {
        path: '/users/1/edit_password',
        name: 'EditPassword',
        component: () =>
          import ('@/views/users/Password.vue'),
        meta: {
          auth: true
        }
      },
    ]
  },
  // 创作页面
  {
    path: '/articles/create',
    name: 'EditPassword',
    component: () =>
      import ('@/views/articles/Create'),
    meta: {
      auth: true
    }
  },
]
export default routes
