import React, { useState } from 'react'
import useRenderMediaQuery from 'render-media-query'

const mediaQueryLarge = '(min-width: 1200px)'
const mediaQueryMedium = '(min-width: 800px)'
const mediaQuerySmall = '(min-width: 400px)'
const mediaQueryMicro = '(min-width: 200px)'

function ExampleWithHook() {
    const [large, setLarge] = useState(false)
    const [medium, setMedium] = useState(false)
    const [small, setSmall] = useState(false)
    const [micro, setMicro] = useState(false)
    const callbackLarge = (e) => setLarge(e.matches)
    const callbackMedium = (e) => setMedium(e.matches)
    const callbackSmall = (e) => setSmall(e.matches)
    const callbackMicro = (e) => setMicro(e.matches)
    const mapQueryCallback = [
        {mediaQuery: mediaQueryLarge, callback: callbackLarge },
        {mediaQuery: mediaQueryMedium, callback: callbackMedium },
        {mediaQuery: mediaQuerySmall, callback: callbackSmall },
        {mediaQuery: mediaQueryMicro, callback: callbackMicro }
    ]

    useRenderMediaQuery(mapQueryCallback)

    return (
        <>
            { large && <div>Min width 1200px</div>}
            { medium && <div>Min width 800px</div>}
            { small && <div>Min width 400px</div>}
            { micro && <div>Min width 200px</div>}
        </>
    )
}
export default ExampleWithHook

