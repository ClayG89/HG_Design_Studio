import React, { Component } from 'react'
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default class Jewelry extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
