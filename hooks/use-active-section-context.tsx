import React from 'react'
import { ActiveSectionContext } from '@/context/active-section-context'

export default function useActiveSectionContext() {

    const context = React.useContext(ActiveSectionContext)

    if (context === null) {
        throw new Error('useActiveSectionContext must be used within a ActiveSectionContextProvider')
    }
    
    return context
}
