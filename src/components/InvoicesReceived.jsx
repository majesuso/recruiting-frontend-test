import { Fragment, useState } from 'react'
import { invoicesData } from '../data/invoicesData'
import { ListCreditNote } from './CreditNote'


function InvoicesReceived() {

    const [selectedInvoice, setSelectedInvoice] = useState('');

    const getSelectedInvoiceValue = (event) => {
        setSelectedInvoice(event.target.value);
    };

    const invoicesReceived = invoicesData.filter((invoice) => invoice.type === 'received');

    const list = invoicesReceived.map((invoice) => {
        return (
            <tr key={invoice.id}>
                <td className="content-start">
                    <label>
                        <input
                            type="radio"
                            id={invoice.id}
                            value={invoice.id}
                            name={invoice.type}
                            onChange={getSelectedInvoiceValue}
                        />
                        {`${invoice.id} (${invoice.organization_id})`}
                    </label>
                </td>
                <td className="content-start">{invoice.amount} {invoice.currency}</td>
                <td className="content-start">{invoice.type}</td>
            </tr>
        )
    });

    return (
        <Fragment>
            <table className="table-auto w-100">
                <thead className="text-base">
                    <tr>
                        <th>Choose an invoice</th>
                    </tr>
                </thead>
                <tbody className="text-xs">
                    {list}
                </tbody>
            </table>

            <ListCreditNote selectedInvoice={selectedInvoice} />

        </Fragment>
    )
}

export { InvoicesReceived }