import React from 'react'
import renderer from 'react-test-renderer';
import {Button} from "./Button";

it('should render a button with the class of primary', () => {
    const ButtonComponent = renderer.create(
        <Button>Test me</Button>,
    );
});

