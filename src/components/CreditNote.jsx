import { Fragment } from "react";
import { invoicesData } from '../data/invoicesData'

function ListCreditNote(selectedInvoice) {

    const matchCreditNotes = invoicesData.filter((invoice) => invoice.type === 'credit_note' && invoice.reference === selectedInvoice.selectedInvoice);

    const list = matchCreditNotes.map((creditNote) => {
        return (
            <tr key={creditNote.id}>
                <td className="content-start">
                    <label>
                        <input
                            type="radio"
                            id={creditNote.id}
                            value={creditNote.id}
                            name={creditNote.type}
                        // onChange={}
                        />
                        {`${creditNote.id} (${creditNote.organization_id})`}
                    </label>
                </td>
                <td className="content-start">{creditNote.amount} {creditNote.currency}</td>
                <td className="content-start">{creditNote.reference}</td>
            </tr>
        )
    });


    return (
        <Fragment>
            <table className="table-auto w-80">
                <thead className="text-base">
                    <tr>
                        <th>{matchCreditNotes.length > 0 ? 'Choose a credit note' : ''}</th>
                    </tr>
                </thead>
                <tbody className="text-xs">
                    {list}
                </tbody>
            </table>
        </Fragment>
    )
}

export { ListCreditNote }