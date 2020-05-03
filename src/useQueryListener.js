import { useEffect } from 'react'

const queryListener = (mapQueryCallback) => {
  return mapQueryCallback.map((queryCallbackObj) => {
    const query = window.matchMedia(queryCallbackObj.mediaQuery)
    queryCallbackObj.callback(query)
    query.addEventListener('change', queryCallbackObj.callback)
    return { query, callback: queryCallbackObj.callback }
  })
}

function useRenderMediaQuery(mapQueryCallback) {
  useEffect(() => {
    const queries = queryListener(mapQueryCallback)
    return function cleanup () {
      queries.map(({ query, callback }) => query.removeEventListener('change', callback))
    }
  }, [mapQueryCallback])
}

export default useRenderMediaQuery
