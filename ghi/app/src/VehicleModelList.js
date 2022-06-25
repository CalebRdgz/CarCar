import React from "react"

export default function VehicleModelList({vehicleModels}) {
    return (
        <React.Fragment>
            <h1>All Models</h1>
                <div className="container-fluid">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Picture</th>
                                <th>Name</th>
                                <th>Manufacturer</th>

                            </tr>
                        </thead>
                        <tbody>
                            {vehicleModels && vehicleModels.map(model => {
                                return (
                                    <tr key={model.id}>
                                        <td><img src={model.picture_url} className="img-thumbnail" /></td>
                                        <td>{model.name}</td>
                                        <td>{model.manufacturer.name}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
        </React.Fragment>
    )
}