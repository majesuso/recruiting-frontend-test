// import { data } from "autoprefixer";
import { useEffect, useState } from "react"
// import HttpRequestMock from 'http-request-mock';
// import {invoicesData} from './data/invoicesData.js'


function ListInvoicesReceived() {

    const [invoices, setInvoices] = useState([]);

        useEffect(() => {

        fetch('https://recruiting.api.bemmbo.com/invoices/pending')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(e => console.error(e.message));

    }, []);

    console.log(invoices)

    // const list = invoicesData.map((invoice) => {
    //     if (invoice.type === 'received') {
    //         return (
    //             <li key={invoice.id}>
    //                 <input
    //                     type="radio"
    //                     id={invoice.id}
    //                     value={invoice.id}
    //                     name={invoice.id}
    //                 />
    //             </li>
    //         )
    //     }
    // })

    return (
        <div>
            <ul>
                {/* {list} */}
            </ul>
        </div>
    )
}

export { ListInvoicesReceived }