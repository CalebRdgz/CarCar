import React from "react"

export default function ManufacturersList({manufacturers}) {
    return (
        <React.Fragment>
            <h1>All Manufacturers</h1>
                <div className="container-fluid">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Manufacturer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {manufacturers && manufacturers.map(manufacturer => {
                                return (
                                    <tr key={manufacturer.id}>
                                        <td>{manufacturer.name}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
        </React.Fragment>
    )
}