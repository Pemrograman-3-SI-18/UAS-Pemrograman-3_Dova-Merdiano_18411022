
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      autentikasi: true
    },
    children: [
      { path: '', component: () => import('pages/Admin/Home/DataSepeda.vue') },
      { path: 'inputdata', component: () => import('pages/Admin/Home/InputDataSepeda.vue') },
      { path: 'datatransaksi', component: () => import('pages/Admin/Home/DataTransaksi.vue') },
      { path: 'editdata/:kodeSepeda', component: () => import('pages/Admin/Home/EditDataSepeda.vue') }
    ]
  },

  {
    path: '/',
    component: () => import('layouts/LoginRegistLayout.vue'),
    children: [
      { path: 'auth/login', component: () => import('pages/Admin/Users/Login.vue') },
      { path: 'auth/registrasi', component: () => import('pages/Admin/Users/Registrasi.vue') }
    ]
  },

  {
    path: '/pembeli',
    component: () => import('layouts/PembeliLayout.vue'),
    meta: {
      autentikasi: true
    },
    children: [
      { path: '', component: () => import('pages/Pembeli/DataBuku/DataSepeda.vue') },
      { path: 'transaksi', component: () => import('pages/Pembeli/Transaksi/DataTransaksi.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
