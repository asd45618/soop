import React from 'react';
import styled from 'styled-components';
import Title from '@/components/layout/Title'
import Introduction from '@/components/company/Introduction';

const CompanyViewBlock = styled.div`

`


const CompanyView = () => {
  return (
    <CompanyViewBlock>
      <Title title="INTRODUCTION"/>
      <Introduction />
    </CompanyViewBlock>
  );
};

export default CompanyView;