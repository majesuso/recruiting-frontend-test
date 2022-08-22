import { Fragment, useState } from 'react';
import { invoicesData } from '../data/invoicesData';
import { ListCreditNote } from './CreditNote';


function InvoicesReceived() {
    // estado selección de facturas
    const [selectedInvoice, setSelectedInvoice] = useState('');

    // guardando valor de la factura seleccionada en el estado
    const getSelectedInvoiceValue = (event) => {
        setSelectedInvoice(event.target.value);
    };

    // filtro para obtener facturas recibidas
    const invoicesReceived = (invoices) => invoices.filter((invoice) => invoice.type === 'received');

    // obteniendo lista de facturas que sean de tipo 'recibidas'
    const getListInvoices = (invoices) => invoices.map((invoice) => {
        return (
            <tr key={invoice.id} className="odd:bg-white even:bg-violet-100">
                <td className="content-start">
                    <input
                        type="radio"
                        id={invoice.id}
                        value={invoice.id}
                        name={invoice.type}
                        onChange={getSelectedInvoiceValue}
                    />
                </td>
                <td>{`${invoice.id} (${invoice.organization_id})`}</td>
                <td className="content-start">{`${invoice.amount} ${invoice.currency}`}</td>
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
                    {getListInvoices(invoicesReceived(invoicesData))}
                </tbody>
            </table>

            <ListCreditNote selectedInvoice={selectedInvoice} />

        </Fragment>
    )
}

export { InvoicesReceived }