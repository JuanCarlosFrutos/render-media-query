import { useState, useMemo } from 'react'
import useRenderMediaQuery from './useQueryListener'

const RenderMediaQuery = ({ children, renderOn }) => {
  const [show, setShow] = useState(true)
  
  const handlerQueryUpdate = (e) => setShow(e.matches)

  const mapQueryCallback = useMemo(() => (renderOn.map((queryString) => {
    return { mediaQuery: queryString, callback: handlerQueryUpdate }
  })), [renderOn])

  useRenderMediaQuery(mapQueryCallback)

  return show ? children : null
}

export default RenderMediaQuery
