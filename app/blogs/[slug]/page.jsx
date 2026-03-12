import React from 'react'
import Banner from './Banner'
import Content from './Content'

async function page({ params }) {
  const { slug } = await params
  return (
    <div>
      <Banner slug={slug} />
      <Content slug={slug} />
    </div>
  )
}

export default page
