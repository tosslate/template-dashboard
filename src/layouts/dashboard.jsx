import { Layout } from 'tdesign-react'
import DefaultLayout from '../layouts/default'
import SiderComponent from '../components/sider'
import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'

export default function DashboardLayout({ page, children }) {
  return (
    <DefaultLayout page={page}>
      <Layout>
        <Layout.Aside className="bg-stone-900" width={256}>
          <SiderComponent />
        </Layout.Aside>
        <Layout>
          <Layout.Header className="bg-zinc-100">
            <HeaderComponent />
          </Layout.Header>
          <Layout.Content className="bg-zinc-100">{children}</Layout.Content>
          <Layout.Footer className="bg-zinc-100">
            <FooterComponent copyright="Copyright © 2022 Tosslate Labs Inc." />
          </Layout.Footer>
        </Layout>
      </Layout>
    </DefaultLayout>
  )
}

// //     <a-layout-sider class="" :width="256">
// //     <a-layout class="bg-gray-200">
// //       <a-layout-header class="bg-white shadow px-12 z-50">
// //         <div class="flex items-center h-full">
// //           <header-search></header-search>
// //           <div class="flex flex-auto flex-row-reverse items-center">
// //             <header-dropdown></header-dropdown>
// //           </div>
// // import SiderMenu from '../components/sider-menu.vue'
// // import HeaderSearch from '../components/header-search.vue'
// // import HeaderDropdown from '../components/header-dropdown.vue'
// //     SiderMenu,
// //     HeaderSearch,
// //     HeaderDropdown
// //       const { data } = await axios.get('/api/user')
// //       localStorage.setItem('authData', JSON.stringify(data))
// //       await message.error(response.data.message)
// //       this.$router.replace('/login')
