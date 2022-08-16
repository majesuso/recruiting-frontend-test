import { Fragment, useState } from 'react'
import { invoicesData } from '../data/invoicesData'
import { ListCreditNote } from './CreditNote'


function ListInvoicesReceived() {

    const [selectedInvoice, setSelectedInvoice] = useState({});

    const getSelectedInvoiceValue = (event) => {
        setSelectedInvoice({ ...selectedInvoice, [event.target.name]: event.target.value })
    }

    const list = invoicesData.map((invoice) => {
        if (invoice.type === 'received') {
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
        }
    });

    //console.log(selectedInvoice);

    return (
        <Fragment>
            <table className="table-auto w-80">
                <thead className="text-base">
                    <tr>
                        <th>Choose a invoice</th>
                    </tr>
                </thead>
                <tbody className="text-xs">
                    {list}
                </tbody>
            </table>
            <ListCreditNote
                selectedInvoice={ListCreditNote}
            />
        </Fragment>
    )
}

export { ListInvoicesReceived }