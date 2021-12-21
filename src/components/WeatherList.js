
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import WeatherCard from './WeatherCard'

const WeatherList = ({weathers}) => {
    return (
        <Row>
           {weathers.map(({dt, main, weather}) => (
                <Col key={dt}>
                    <WeatherCard 
                    temp_max={Math.trunc((main.temp_max -273.15)*1.8)+32} 
                    temp_min={Math.trunc((main.temp_min -273.15)*1.8)+32} 
                    dt={dt * 1000} 
                    main={weather[0].main} 
                    icon={weather[0].icon} 
                  />
                </Col>
            ))} 
        </Row>
    )
}

export default WeatherList;