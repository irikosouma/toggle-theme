import React, { useState } from 'react'
//styles
import {Wrap} from './index.styles'
// import '../index.css'
//data
import data from '../data'
export default function MainComponent() {
    const [list, setList] = useState(data)
    const [isDarkMode, setIsDarkMode] = useState(false)
    const handleClick = () => {
        setIsDarkMode(!isDarkMode)
    }
    return (
        <Wrap isDarkMode={isDarkMode}>
            <div className="bound">
                <div className="title">
                    Overreacted
                    <button className="btn-style" onClick={handleClick }>toggle</button>
                </div>
                <div className="wrap-content">
                    {list.map((item, index) => (
                        <div key={index} className="wrap-title">
                            <h3 className="item-title">
                                {item.title}
                            </h3>
                            <p className="date-time">{item.dateTime}</p>
                            <p className="messages">{item.message}</p>
                        </div>
                    ))}
                </div>

            </div>
        </Wrap>
    )
}
