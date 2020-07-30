import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    
    beforeEach(() => {

        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);

    })

    test('debe mostrarse correctaente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Boddy perrito'
        
        input.simulate('change', { target: { value: value } });

        expect( wrapper.find('p').text().trim() ).toBe(value);

    })
    
    test('no debe postear la información onSubmit', () => {

        // wrapper.find('form').simulate('submit', { preventDefault: () => {} })
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    })
    
    test('debe llamar el setCategories y limpiar la caja de texto', () => {
        
        const value = 'The OA';
        wrapper.find('input').simulate('change', { target: { value }});
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toBeCalledWith( expect.any(Function) )

        // expect(wrapper.find('p').text().trim()).toBe('');
        expect(wrapper.find('input').prop('value')).toBe('');

    })
    
    
})
