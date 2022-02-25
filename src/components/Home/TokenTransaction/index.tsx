import React from 'react'
import { Col, Label, Table } from 'sezy-design'
import Arrow from 'sezy-design/components/icon/solid/arrow'
import _ from 'lodash';
import * as  S from './styled';
import HomeContext from '~contexts/Home';

const TokenTransaction = () => {
    const context = React.useContext(HomeContext);
    const tableColumns = getTableColumns(context.price, context.amount, context.total);
    return <>
        <S.Title size='l'>{context.token} {context.transaction}</S.Title>
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

const getTableColumns = (price, amount, total)=> [
    {
        index: 'price',
        label:  `${price}(USDT)`,
    },
    {
        index: 'amount',
        label: `${amount}(BTC)`,
    },
    {
        index: 'total',
        label: total,
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