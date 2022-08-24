import { Fragment } from "react";
import { invoicesData } from '../data/invoicesData';


function ListCreditNote({ selectedInvoice, setModalState }) {

    // encontrar las notas de credito según el id de la factura seleccionada
    const findMatchesCreditNotes = (invoices) => invoices.filter((invoice) => invoice.type === 'credit_note' && invoice.reference === selectedInvoice);

    // obteniendo la lista de notas de credito
    const getListCreditNotes = (creditNotes) => creditNotes.map((creditNote) => {
        return (
            <tr key={creditNote.id}>
                <td className="content-start">
                    <input
                        type="checkbox"
                        id={creditNote.id}
                        value={creditNote.id}
                        name={creditNote.reference}
                    // onChange={getSelectedCreditNote}
                    />
                </td>
                <td>{`${creditNote.id} (${creditNote.organization_id})`}</td>
                <td className="content-start">{`${creditNote.amount} ${creditNote.currency}`}</td>
                <td className="content-start">{creditNote.reference}</td>
            </tr>
        )
    });

    // Función para mostrar el modal
    const showModal = () => setModalState(true);

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

            {findMatchesCreditNotes(invoicesData).length > 0 && <button className="bg-violet-400 hover:bg-violet-500" onClick={() =>
                showModal()
            }>
                Asignar
            </button>}
        </Fragment>
    )
}

export { ListCreditNote }