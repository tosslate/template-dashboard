import React, { Component } from 'react'

class DefaultLayout extends Component {
  render() {
    return (
      <div className="min-h-screen bg-blue-900">
        <div className="flex items-center justify-center">
          <div className="py-16">
            {
              this.props.children
            }
          </div>
        </div>
      </div>
    )
  }
}

export default DefaultLayout
