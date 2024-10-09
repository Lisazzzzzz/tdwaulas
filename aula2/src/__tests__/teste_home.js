import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/home';

test('renders the Home component', () => {
    render(
        <Home someProp="value" />
    );

    const textElement = screen.getByText(/Hello, World!/i);
    expect(textElement).toBeInTheDocument();
});
