import { Fragment } from "react";
import { invoicesData } from '../data/invoicesData'

function ListCreditNote(selectedInvoice) {

    const creditNotes = invoicesData.filter((invoice) => invoice.type === 'credit_note');

    // console.log({filterCreditNote})

    const creditNotesMatch = creditNotes.filter((creditNote) => creditNote.reference === selectedInvoice);

    console.log({ creditNotesMatch })

    const list = creditNotes.map((creditNote) => {
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
                        <th>Choose a credit note</th>
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