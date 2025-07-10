import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../src/components/Button/Button';

describe('Button component', () => {
  test('renderiza com texto correto e dispara clique', () => {
    const onClick = jest.fn();
    render(<Button label="Testar" onClick={onClick} />);
    const button = screen.getByText('Testar');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
