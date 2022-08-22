import { Fragment, useState } from "react";
import { invoicesData } from '../data/invoicesData';
import ReactModal from 'react-modal';


function ListCreditNote(selectedInvoice) {

    // estado modal
    const [modalState, setModalState] = useState(false);

    // encontrar las notas de credito según el id de la factura seleccionada
    const findMatchesCreditNotes = (invoices) => invoices.filter((invoice) => invoice.type === 'credit_note' && invoice.reference === selectedInvoice.selectedInvoice);


    // obteniendo la lista de notas de credito
    const getListCreditNotes = (creditNotes) => creditNotes.map((creditNote) => {
        return (
            <tr key={creditNote.id}>
                <td className="content-start">
                    <input
                        type="radio"
                        id={creditNote.id}
                        value={creditNote.id}
                        name={creditNote.reference}
                    />
                </td>
                <td>{`${creditNote.id} (${creditNote.organization_id})`}</td>
                <td className="content-start">{`${creditNote.amount} ${creditNote.currency}`}</td>
                <td className="content-start">{creditNote.reference}</td>
            </tr>
        )
    });

    return (
        <Fragment>
            <table className="table-auto w-100">
                <thead className="text-base">
                    <tr>
                        <th>{findMatchesCreditNotes(invoicesData).length > 0 && 'Choose a credit note'}</th>
                    </tr>
                </thead>
                <tbody className="text-xs">
                    {getListCreditNotes(findMatchesCreditNotes(invoicesData))}
                </tbody>
            </table>

            {findMatchesCreditNotes(invoicesData).length > 0 && <button className="bg-violet-400 hover:bg-violet-500" onClick={() => {
                setModalState(true);
            }}>
                Asignar
            </button>}

            <ReactModal isOpen={modalState}>
                <p>Credit note assigned correctly</p>
                <button className="bg-violet-400 hover:bg-violet-500" onClick={() => setModalState(false)}> Keep assigning</button>
            </ReactModal>

        </Fragment >
    )
}

export { ListCreditNote }