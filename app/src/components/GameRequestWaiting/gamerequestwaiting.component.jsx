import React from 'react'
import { icons } from '../../assets'

import { Spinner } from '../Spinner/spinner.component'

import "./gamerequestwaiting.css"

export function GameRequestWaiting() {
    return (
        <div className="request-wainting-container">
            <div className="request-box">
                <h2>Aguardando User 2...</h2>
                <Spinner />
                <div className="options-box">
                    <button className="cancel">
                        <img src={icons.cancel} alt=""/>
                    </button>
                </div> 
            </div>
        </div>
    )
}
