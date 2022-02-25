import React from 'react'
import { Col, Row, Section } from 'sezy-design'
import { useRouter } from 'next/router'
import _ from 'lodash';
import { Logo } from '~components/icon';
import TokenTransaction from '~components/Home/TokenTransaction';
import * as  S from './styled';

const Home = () => {
    const router = useRouter()
    return (
        <>
            {/* <Section>
            <S.Logo>
                <Logo />
                <a>Tư vấn cổ phiếu</a>
            </S.Logo>
        </Section> */}
            <S.MainContent>
                <S.MainBox gaps={[0.5, 0.5]}>
                    <Col grid={6}>
                        <TokenTransaction />
                    </Col>
                    <S.TradingView grid={12} />
                    <S.Trading grid={6} />
                </S.MainBox>
            </S.MainContent>
        </>
    )
}


export default Home