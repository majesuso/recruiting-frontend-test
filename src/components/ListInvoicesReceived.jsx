import { invoicesData } from '../data/invoicesData'


function ListInvoicesReceived() {


    const list = invoicesData.map((invoice) => {
        console.log(invoice.id)
        if (invoice.type === 'received') {
            return (
                <tbody className="text-xs">
                    <tr>
                        <td className="content-start">
                            <label>
                                <input
                                    type="radio"
                                    id={invoice.id}
                                    value={invoice.id}
                                    name={invoice.type}
                                />
                                {`${invoice.id} (${invoice.organization_id})`}
                            </label>
                        </td>
                        <td className="content-start">{invoice.amount} {invoice.currency}</td>
                        <td className="content-start">{invoice.type}</td>
                    </tr>
                </tbody>
            )
        }
    })

    return (
        <div>
            <table className="table-auto w-80">
                <thead className="text-base">
                    <tr>
                        <th>Choose a invoice</th>
                    </tr>
                </thead>
                {list}
            </table>

        </div>
    )
}

export { ListInvoicesReceived }