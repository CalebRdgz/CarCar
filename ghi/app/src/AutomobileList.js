import React from "react"

export default function AutomobileList({automobiles}) {
    return (
        <React.Fragment>
            <h1>All Automobiles</h1>
                <div className="container-fluid">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>VIN</th>
                                <th>Color</th>
                                <th>Year</th>
                                <th>Model</th>
                                <th>Manufacturer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {automobiles && automobiles.map(auto => {
                                return (
                                    <tr key={auto.id}>
                                        <td>{auto.vin}</td>
                                        <td>{auto.color}</td>
                                        <td>{auto.year}</td>
                                        <td>{auto.model.name}</td>
                                        <td>{auto.model.manufacturer.name}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
        </React.Fragment>
    )
}