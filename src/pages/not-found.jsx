import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
// import Divider from 'antd/lib/divider'
// import Result from 'antd/lib/result'
import DefaultLayout from '../layouts/default'

class NotFoundPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Page Not Found</title>
        </Helmet>
        <DefaultLayout>
          <div className="bg-white shadow rounded px-12 py-8">
            <div className="Page__notFound">
              {/* <Result status="404" title="Page not found" subTitle="The page you were looking for doesn’t exist." />
              <Divider>
                <Link className="font-normal" to="/">Back to home</Link>
              </Divider> */}
            </div>
          </div>
        </DefaultLayout>
      </>
    )
  }
}

export default NotFoundPage
