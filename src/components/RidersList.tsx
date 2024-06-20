import { Rider } from "../services/entityFacade";

interface props {
    riders: Rider[];
    onRiderSelect: (rider: Rider) => void;
}

export default function RidersList({ riders, onRiderSelect }: props) {
    return (
        <div>
            <h1>Riders</h1>
            <table className="text-center">
                <thead>
                    <tr className="">
                        <th>Name</th>
                        <th>Birth Date</th>
                        <th>Mountain Points</th>
                        <th>Sprint Points</th>
                        <th>Total Time</th>
                        <th>Team number</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {riders.map((rider) => (
                        <tr key={rider.id}>
                            <td>{rider.name}</td>
                            <td>{rider.birthDate}</td>
                            <td>{rider.mountainPoints}</td>
                            <td>{rider.sprintPoints}</td>
                            <td>{rider.totalTime}</td>
                            <td>{rider.teamId}</td>
                            <td>
                                <button onClick={() => onRiderSelect(rider)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
