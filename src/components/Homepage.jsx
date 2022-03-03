import React from 'react'
import millify from 'millify'
import { Typography,Row,Col,Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Cryptocurrencies } from '.'
import { News } from '.'
const Homepage = () => {
  const {Title}=Typography;
  const {data,isFetching}=useGetCryptosQuery(10);
  const globalStats=data?.data?.stats;
  if(isFetching) return "loading..."
  return (
    <div>
        <Title level={2} className="heading">Global Crypto Stats</Title>
        <Row>
          <Col span={12}><Statistic title="Total Cryptocurrencies" value={millify(globalStats?.total)}/></Col>
          <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats?.totalExchanges)}/></Col>
          <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats?.totalMarketCap)}/></Col>
          <Col span={12}><Statistic title="Total 24h Voleume" value={millify(globalStats?.total24hVolume)}/></Col>
          <Col span={12}><Statistic title="Total Markets" value={millify(globalStats?.totalMarkets)}/></Col>
        </Row>
        <div className='home-heading-container' >
          <Title level={2} className="home-title">top 10 cryptocurrencies</Title>
          <Title level={3} className="show-more"><Link to="/cryptocurrencies" >Show More</Link></Title>
        </div>
        <Cryptocurrencies simplified={true}/>
        <div className='home-heading-container' >
          <Title level={2} className="home-title">latest crypto news</Title>
          <Title level={3} className="show-more"><Link to="/news" >Show More</Link></Title>
        </div>
        <News  simplified={true}/>
    </div>
  )
}

export default Homepage