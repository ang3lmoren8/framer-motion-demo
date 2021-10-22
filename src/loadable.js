import { lazy, Suspense } from 'react'

const LoadingPage = () => {
  return <></>
}

const loadable = (importFn) => {
  const LazyComponent = lazy(importFn)

  return (props) => (
    <Suspense fallback={<LoadingPage />}>
      <LazyComponent {...props} />
    </Suspense>
  )
}

export default loadable
