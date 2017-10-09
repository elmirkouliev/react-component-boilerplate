import React from 'react';
import Sample from 'react-component-boilerplate';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Sample />', () => {
    it('renders one <Sample /> component', () => {
        const wrapper = shallow(<Sample />);
        wrapper.find('.sample').to.have.length(1)
    });
});