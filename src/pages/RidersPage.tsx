import { useEffect, useState } from "react";
import { Rider, Team } from "../services/entityFacade";
import { getAllRiders, getAllTeams } from "../services/apiFacade";
import RidersList from "../components/RidersList";
import RiderForm from "../components/RiderForm";

export default function RidersPage() {
    const [riders, setRiders] = useState<Rider[]>([]);
    const [teams, setTeams] = useState<Team[]>([]);
    const [selectedRider, setSelectedRider] = useState<Rider | null>(null);

    useEffect(() => {
        getAllRiders().then((data) => setRiders(data));
        getAllTeams().then((data) => setTeams(data));
    }, []);

    function handleRiderUpdate(rider: Rider) {
        if (rider.id) {
            const updatedRiders = riders.map((r) => (r.id === rider.id ? rider : r));
            setRiders(updatedRiders);
        } else {
            setRiders([...riders, rider]);
        }
    }

    return (
        <div>
            <RidersList riders={riders} onRiderSelect={setSelectedRider} />
            <RiderForm onRiderUpdate={handleRiderUpdate} teams={teams} rider={selectedRider} />
        </div>
    );
}
