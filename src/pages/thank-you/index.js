import React from 'react'

import Layout from '../../components/layout'

import { Link } from 'gatsby'


export default () => {
  return (
    <Layout>
      
        <div className="col-sm-10 col-lg-8 col-xl-7">
          <h1 className="font-alt mb-3 text-white">
            Thank you for getting in touch
          </h1>
        <div className="divider bg-white mx-auto"></div>
          <p className="lead text-warning mt-4 mb-4">
            Our team will reach you out soon
          </p>
          <p>
          <Link to='/' 
              className="btn btn-warning btn-lg text-uppercase text-white mb-3 mb-md-0 mr-2"
            >Go to Home page</Link>
          </p>
        </div>
      
    </Layout>
  )
}