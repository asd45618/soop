import React from 'react';
import styled from "styled-components";
import Title from "@/components/layout/Title";
import History from "@/components/company/History";

const HistoryBlock = styled.div`
.since {
    text-align:center;
    color: green;
}
`

const HistoryView = () => {
    return (
        <HistoryBlock>
            <Title title="HISTORY" />
            <p className="since">SINCE 2011</p>
            <History />
        </HistoryBlock>
    );
};

export default HistoryView;