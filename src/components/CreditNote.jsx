import { Fragment, useState } from "react";
import { invoicesData } from '../data/invoicesData';
import ReactModal from 'react-modal';


function ListCreditNote(selectedInvoice) {

    const [selectedCreditNote, setSelectedCreditNote] = useState('');
    const [modalState, setModalState] = useState(false);

    const matchCreditNotes = invoicesData.filter((invoice) => invoice.type === 'credit_note' && invoice.reference === selectedInvoice.selectedInvoice);

    const getSelectedCreditNote = (event) => {
        setSelectedCreditNote(event.target.value);
    }


    const list = matchCreditNotes.map((creditNote) => {
        return (
            <tr key={creditNote.id}>
                <td className="content-start">
                    <input
                        type="radio"
                        id={creditNote.id}
                        value={creditNote.id}
                        name={creditNote.reference}
                        onChange={getSelectedCreditNote}
                    />
                </td>
                <td>{`${creditNote.id} (${creditNote.organization_id})`}</td>
                <td className="content-start">{`${creditNote.amount} ${creditNote.currency}`}</td>
                <td className="content-start">{creditNote.reference}</td>
            </tr>
        )
    });

    const deleteAssignedCreditNotes = () => {
        return matchCreditNotes.filter((creditNote) => creditNote.id !== selectedCreditNote);
    }

    return (
        <Fragment>
            <table className="table-auto w-100">
                <thead className="text-base">
                    <tr>
                        <th>{matchCreditNotes.length > 0 ? 'Choose a credit note' : ''}</th>
                    </tr>
                </thead>
                <tbody className="text-xs">
                    {list}
                </tbody>
            </table>

            {matchCreditNotes.length > 0 && <button className="bg-violet-400 hover:bg-violet-500" onClick={() => {
                setModalState(true);
                deleteAssignedCreditNotes();
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