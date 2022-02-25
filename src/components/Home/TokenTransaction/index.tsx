import React from 'react'
import { Col, Label, Table } from 'sezy-design'
import Arrow from 'sezy-design/components/icon/solid/arrow'
import _ from 'lodash';
import * as  S from './styled';
import HomeContext from '~contexts/Home';

const TokenTransaction = () => {
    
    const context = React.useContext(HomeContext);
    console.log(context);
    return <>
        <S.Title size='l'>TOKEN transaction</S.Title>
        <S.HeaderTable type='nude' columns={tableColumns as any} />
        <S.DataTable1 type='nude' columns={tableColumns as any} data={tableData} hasHeader={false} />
        <S.HighlightData>
            <S.HighlightDataMain data-type='up' >
                <Label size='l'>$54.715.29</Label>
                <Arrow size='s' direction='up' />
            </S.HighlightDataMain>
            <S.HighlightDataSub size='s'>$54.715.29</S.HighlightDataSub>
        </S.HighlightData>
        <S.DataTable2 type="nude" columns={tableColumns as any} data={tableData} hasHeader={false} />
    </>
}

const tableColumns = [
    {
        index: 'price',
        label: 'Price(USDT)',
    },
    {
        index: 'amount',
        label: 'Amount(BTC)',
    },
    {
        index: 'total',
        label: 'Total',
        align: 'right'
    }
];

const tableData = [
    {
        price: '57629.97',
        amount: '0.08677',
        total: '5,000.55250',
    },
    {
        price: '57629.97',
        amount: '0.08677',
        total: '5,000.55250',
    },
    {
        price: '57629.97',
        amount: '0.08677',
        total: '5,000.55250',
    },
    {
        price: '57629.97',
        amount: '0.08677',
        total: '5,000.55250',
    },
    {
        price: '57629.97',
        amount: '0.08677',
        total: '5,000.55250',
    },
    {
        price: '57629.97',
        amount: '0.08677',
        total: '5,000.55250',
    },
    {
        price: '57629.97',
        amount: '0.08677',
        total: '5,000.55250',
    },
];

export default TokenTransaction