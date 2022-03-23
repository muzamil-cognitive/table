import React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import '@testing-library/jest-dom/extend-expect'
import { render,screen, } from '@testing-library/react'

test("render a class",()=>{
    render(<App/>)
    const divElement = screen.getByRole("contentinfo");
    expect(divElement).toHaveClass('.app')
})

