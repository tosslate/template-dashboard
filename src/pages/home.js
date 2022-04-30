import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { connectStoreon } from 'storeon/react'
import Dashboard from '../layouts/dashboard'

class HomePage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <Dashboard>
        </Dashboard>
      </>
    )
  }
}

export default connectStoreon('users', HomePage)
