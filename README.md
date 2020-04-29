
## Description

This package allows you to render only those components that you need for that
screen size.

## Install: 

```npm install render-media-query```

## Usage: 

### Component

```JSX
    import { RenderMediaQuery } from 'render-media-query'
```

renderOn must be an array of [valid media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)

```JSX
    <RenderMediaQuery renderOn={['(min-width: 1200px)']}>
        <div>Render screen min-width 1200px</div>
    </RenderMediaQuery>
```

Children of `RenderMediaQuery` will be desplayed only for screens with min-width
1200px

### Hook

```JSX
    import useRenderMediaQuery from 'render-media-query'
```


useRenderMediaQuery receives as argument an array: 

```JSX
    [
        { mediaQuery: '(min-width: 1200px)', callback: callbackLargeScreen },
        ...
    ]
```

`callbackLargeScreen` be called each time media query be triggered.
Callback recives as param an [event](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryListEvent)

```JSX
    const [large, setLarge] = useState(false)
    const [medium, setMedium] = useState(false)

    const callbackLarge = (e) => setLarge(e.matches)
    const callbackMedium = (e) => setMedium(e.matches)

    const mapQueryCallback = [
        {mediaQuery: mediaQueryLarge, callback: callbackLarge },
        {mediaQuery: mediaQueryMedium, callback: callbackMedium },
    ]

    useRenderMediaQuery(mapQueryCallback)

    return (
        <>
            { large && <div>Min width 1200px</div>}
            { medium && <div>Min width 800px</div>}
        </>
    )
```


### Real example: 

[Example](example/src)