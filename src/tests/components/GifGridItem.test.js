import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en GifGridItem', () => {
    const title = 'Dark';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('debe mostrar el elemento correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe tener un parrafo con el titulo', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title)
    })

    test('debe tener la img igual al url', () => {
        const img = wrapper.find('img');
        const src = img.prop('src');
        const alt = img.prop('alt');

        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('debe tener la clase animate__zoomIn ', () => {

        const div = wrapper.find('div');
        //div.props() <-- para conocer las propiedades que contiene
        const classes = div.prop('className');
        
        expect(classes.includes('animate__zoomIn')).toBe(true);
        
    })
    
    
    
    
})
