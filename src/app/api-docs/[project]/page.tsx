'use client'
import { ApiReferenceReact } from '@scalar/api-reference-react'
import '@scalar/api-reference-react/style.css'
import { useParams } from 'next/navigation' // 👈 Import this to grab the URL part

export default function ApiDocs() {
  const params = useParams()
  
  // params.project will be 'hospital-management-system' 
  // if the URL is /api-docs/hospital-management-system
  const projectSlug = params.project 

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <ApiReferenceReact 
        configuration={{
          // Now it dynamically looks for 'hospital-management-system.yml' 
          // or whatever your project slug is!
          url: `/${projectSlug}.yml`,
          theme: 'deepSpace',
          showSidebar: true,
        }} 
      />
    </div>
  )
}