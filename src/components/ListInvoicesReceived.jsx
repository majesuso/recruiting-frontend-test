// import { useEffect, useState } from "react"
import {invoicesData} from '../data/invoicesData'


function ListInvoicesReceived() {

    // const [invoices, setInvoices] = useState([]);

    //     useEffect(() => {

    //     fetch('https://recruiting.api.bemmbo.com/invoices/pending')
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    //         .catch(e => console.error(e.message));

    // }, []);

    // console.log(invoices)

    const list = invoicesData.map((invoice) => {
        console.log(invoice.id)
        if (invoice.type === 'received') {
            return (

                <li key={invoice.id}>
                    <label>
                    <input
                        type="radio"
                        id={invoice.id}
                        value={invoice.id}
                        name={invoice.type}
                    />
                    {`${invoice.id} (${invoice.organization_id})`}
                    </label>
                    

                </li>
            )
        }
    })

    return (
        <div>
            <ul>{list}</ul>
        </div>
    )
}

export { ListInvoicesReceived }