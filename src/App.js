import { Fragment, useState } from 'react';
import { InvoicesReceived } from './components/InvoicesReceived';
import { ListCreditNote } from './components/CreditNote';
import { ModalSuccessfulAssignment } from './components/Modal';

function App() {

  // estado selección de facturas
  const [selectedInvoice, setSelectedInvoice] = useState('');
  // estado modal
  const [modalState, setModalState] = useState(false);

  return (
    <Fragment>
      <InvoicesReceived
        setSelectedInvoice={setSelectedInvoice}
      />

      <ListCreditNote
        selectedInvoice={selectedInvoice}
        setModalState={setModalState}
      />

      <ModalSuccessfulAssignment
        modalState={modalState}
        setModalState={setModalState}
      />
    </Fragment>
  );
}

export default App;
