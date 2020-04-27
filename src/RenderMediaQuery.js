import { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import useRenderMediaQuery from './useQueryListener'

const RenderMediaQuery = ({ children, renderOn }) => {
  const [show, setShow] = useState(true)
  
  const handlerQueryUpdate = (e) => setShow(e.matches)

  const mapQueryCallback = useMemo(() => (renderOn.map((queryString) => {
    return { mediaQuery: queryString, callback: handlerQueryUpdate }
  })), renderOn[0])

  useRenderMediaQuery(mapQueryCallback)

  return show ? children : null
}

RenderMediaQuery.propTypes = {
  children: PropTypes.node,
  renderOn: PropTypes.array.isRequired
}
export default RenderMediaQuery
