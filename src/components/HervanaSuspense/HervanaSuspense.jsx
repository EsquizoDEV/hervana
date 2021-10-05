import React, { Suspense } from 'react'
import HervanaLoading from './HervanaLoading'

const HervanaSuspense = ({ children }) => {
    return <Suspense fallback={<HervanaLoading />}>{children}</Suspense>
}

export default HervanaSuspense