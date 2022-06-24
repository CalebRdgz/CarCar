import React from "react"

export default function VehicleModelList({vehicleModels}) {
    return (
        <React.Fragment>
            <h1>All Manufacturers</h1>
                <div className="container-fluid">
                    <table className="table table-striped table-hover">
                        <thread>
                            <tr>
                                <th>Name</th>
                                <th>Manufacturer</th>
                                <th>Picture</th>
                            </tr>
                        </thread>
                        <tbody>
                            {vehicleModels && vehicleModels.map(model => {
                                return (
                                    <tr key={model.id}>
                                        <td>{model.name}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
        </React.Fragment>
    )
}