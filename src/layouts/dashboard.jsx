import { Layout } from 'tdesign-react'
import DefaultLayout from '../layouts/default'
import Header from '../components/header'
import Footer from '../components/footer'
import Sider from '../components/sider'

export default function DashboardLayout({ asdasdd, children }) {
  return (
    <DefaultLayout>
      <Layout>
        <Sider></Sider>
        <Layout>
          <Header>
          </Header>
          <Layout.Content>
            {
              children
            }
          </Layout.Content>
          <Footer>
          </Footer>
        </Layout>
      </Layout>
    </DefaultLayout>
  )
}

//     <a-layout-sider class="h-screen" :width="256">
//       <div class="h-16"></div>
//       <sider-menu></sider-menu>
//     </a-layout-sider>
//     <a-layout class="bg-gray-200">
//       <a-layout-header class="bg-white shadow px-12 z-50">
//         <div class="flex items-center h-full">
//           <header-search></header-search>
//           <div class="flex flex-auto flex-row-reverse items-center">
//             <header-dropdown></header-dropdown>
//           </div>
//         </div>
//       </a-layout-header>
//       <a-layout-content>
//       </a-layout-content>
//       <a-layout-footer class="bg-gray-200">
//       </a-layout-footer>
//     </a-layout>
//   </a-layout>
// import SiderMenu from '../components/sider-menu.vue'
// import HeaderSearch from '../components/header-search.vue'
// import HeaderDropdown from '../components/header-dropdown.vue'
//     SiderMenu,
//     HeaderSearch,
//     HeaderDropdown
//       const { data } = await axios.get('/api/user')
//       localStorage.setItem('authData', JSON.stringify(data))
//       await message.error(response.data.message)
//       this.$router.replace('/login')
