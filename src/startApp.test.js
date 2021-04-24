import React from 'react';
import {screen, render, cleanup} from '@testing-library/react';
import startApp from './startApp'

describe('startApp', () => {
    let buttonId;
    beforeAll(() => {
        render(<startApp />)
        buttonId = screen.getByTestId('agregar')
    })













    afterAll(cleanup)
})