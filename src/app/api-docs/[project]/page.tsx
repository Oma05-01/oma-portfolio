'use client'

import { useParams } from 'next/navigation'
import { ApiReferenceReact } from '@scalar/api-reference-react'
import '@scalar/api-reference-react/style.css'
import Link from 'next/link'
import { useState } from 'react'

export default function ApiDocs() {
  const params = useParams()
  const projectSlug = params.project as string
  const [loadError, setLoadError] = useState(false)

  if (!projectSlug) {
    return (
      <main
        style={{
          minHeight: '100vh',
          background: 'var(--bg)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <p className="label">API Reference</p>
        <p style={{ fontSize: '0.9rem', color: 'var(--fg-muted)', lineHeight: 1.7 }}>
          No project specified.
        </p>
        <Link
          href="/#projects"
          style={{
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginTop: '0.5rem',
          }}
        >
          ← Back to Projects
        </Link>
      </main>
    )
  }

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)' }}>

      {/* Thin top bar to keep nav consistent */}
      <div
        style={{
          height: '48px',
          background: 'var(--bg)',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 1.5rem',
          gap: '1.5rem',
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}
      >
        <Link
          href="/#projects"
          style={{
            fontSize: '0.62rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--fg-muted)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-muted)')}
        >
          ← Projects
        </Link>

        <span
          style={{
            width: '1px',
            height: '14px',
            background: 'var(--border)',
            display: 'inline-block',
          }}
        />

        <p className="label" style={{ margin: 0 }}>
          API Reference — {projectSlug}
        </p>
      </div>

      {/* Error state */}
      {loadError && (
        <div
          style={{
            padding: '4rem 1.5rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <p className="label">Not Found</p>
          <p
            style={{
              fontSize: '0.85rem',
              color: 'var(--fg-muted)',
              lineHeight: 1.7,
              maxWidth: '360px',
            }}
          >
            Could not load the API spec for{' '}
            <span style={{ color: 'var(--fg-mid)' }}>{projectSlug}</span>. Make
            sure <code style={{ color: 'var(--accent)', fontSize: '0.8rem' }}>{projectSlug}.yml</code> exists
            in your <code style={{ color: 'var(--accent)', fontSize: '0.8rem' }}>/public</code> folder.
          </p>
          <Link
            href="/#projects"
            style={{
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              padding: '10px 20px',
              border: '1px solid var(--accent-line)',
              borderRadius: '2px',
              marginTop: '0.5rem',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = 'var(--accent-dim)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = 'transparent')
            }
          >
            ← Back to Projects
          </Link>
        </div>
      )}

      {/* Scalar viewer — takes remaining height */}
      {!loadError && (
        <div style={{ height: 'calc(100vh - 48px)', width: '100%' }}>
          <ApiReferenceReact
            configuration={{
              url: `/${projectSlug}.yml`,
              theme: 'deepSpace',
              showSidebar: true,
            }}
          />
        </div>
      )}
    </main>
  )
}