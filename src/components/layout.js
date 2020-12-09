import React from 'react'
import Navigation from './navigation-int'
import Footer from './Footer'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    // if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    //   rootPath = __PATH_PREFIX__ + `/`
    // }

    return (
      <>
        <Navigation />
        {children}
        <Footer />
      </>
    )
  }
}

export default Template
