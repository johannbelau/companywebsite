import React from 'react'

class Template extends React.Component {
  render() {
    const { children } = this.props
    // let header

    // let rootPath = `/`
    // if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    //   rootPath = __PATH_PREFIX__ + `/`
    // }

    return (
      <>
        {children}
      </>
    )
  }
}

export default Template
