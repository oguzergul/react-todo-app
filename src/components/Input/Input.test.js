import React from 'react'
import renderer from 'react-test-renderer';
import {Input} from "./Input";

it('should render a button with the class of primary', () => {
    const InputComponent = renderer.create(
        <Input/>
    );
})
