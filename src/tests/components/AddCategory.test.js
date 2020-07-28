import React from 'react';
const { shallow } = require("enzyme")
const { AddCategory } = require("../../components/AddCategory")

describe('Pruebas en AddCategory', () => {

    const setCategories = () => {
        
    }
    test('debe mostrarse correctaente', () => {
        const wrapper = shallow(<AddCategory setCategories={setCategories} />);
        expect(wrapper).toMatchSnapshot();
    })
    
})
