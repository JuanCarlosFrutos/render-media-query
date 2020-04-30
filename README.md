# Table of Contents
- [Description](#Description)
- [Usage](#Usage)
- [Testing](#Testing)
- [Example](#Example)

## Description

This package allows you to render only those components that you need for that
screen size.

### Install: 

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

## Testing:

If you have problems testing with Jest, [here is the solution](https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom): 

If you have a `setUpTest.js` you can put this code inside and forget about it.

```javascript
    global.window = Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // deprecated
            removeListener: jest.fn(), // deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn()
        }))
    })
```

These package uses some methods witch are not implemented in JSOM.


## Example: 

[Example](example/src)