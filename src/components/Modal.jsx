import ReactModal from 'react-modal';

function ModalSuccessfulAssignment({ modalState, setModalState }) {
    return (
        <ReactModal isOpen={modalState}>
            <p>Credit note assigned correctly</p>
            <button onClick={() => setModalState(false)}>Keep assigning</button>
        </ReactModal>
    )
}

export { ModalSuccessfulAssignment }