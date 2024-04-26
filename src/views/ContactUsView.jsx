import React from 'react';
import styled from 'styled-components';
import Title from '@/components/layout/Title'
import ContactUs from '@/components/company/ContactUs';

const ContactUsBlock = styled.div`

`

const ContactUsView = () => {
    return (
        <ContactUsBlock>
            <Title title="CONTACT US"/>
            <ContactUs />
        </ContactUsBlock>
    );
};

export default ContactUsView;