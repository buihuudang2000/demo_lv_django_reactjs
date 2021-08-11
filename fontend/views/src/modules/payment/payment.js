import Nav from '../../component/nav';
import '../../component/css/product.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Payment() {
    return(
        <div>
            <Nav page="payment"/>
            <h1>
                Payment
            </h1>
        </div>
    )

}

export default Payment;