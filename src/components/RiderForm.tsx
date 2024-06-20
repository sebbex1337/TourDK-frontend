import { useEffect, useState } from "react";
import { createRider, updateRider } from "../services/apiFacade";
import { Rider, Team } from "../services/entityFacade";

const EMPTY_RIDER = {
    id: 0,
    name: "",
    birthDate: "",
    mountainPoints: 0,
    sprintPoints: 0,
    totalTime: 0,
    teamId: 0,
};

interface Props {
    onRiderUpdate: (rider: Rider) => void;
    teams: Team[];
    rider?: Rider | null;
}

export default function RiderForm({ onRiderUpdate, teams, rider }: Props) {
    const [formData, setFormData] = useState<Rider>(rider || EMPTY_RIDER);

    useEffect(() => {
        setFormData(rider || EMPTY_RIDER);
    }, [rider]);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("Form submitted");
        console.log(formData);
        if (formData.id > 0) {
            await updateRider(formData.id, formData);
            console.log("Updating rider");
            onRiderUpdate(formData);
        } else {
            await createRider(formData);
            console.log("Creating rider");
            onRiderUpdate(formData);
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        let updatedValue: string | number = value;
        if (["mountainPoints", "sprintPoints", "totalTime"].includes(name)) {
            updatedValue = parseInt(value);
        }
        setFormData({ ...formData, [name]: updatedValue });
    }

    function handleTeamChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const teamId = parseInt(e.target.value);
        setFormData({ ...formData, teamId: teamId });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name: <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
                Birth date: <input type="text" name="birthDate" value={formData.birthDate} onChange={handleChange} />
            </label>
            <label>
                Mountain points: <input type="number" name="mountainPoints" value={formData.mountainPoints} onChange={handleChange} />
            </label>
            <label>
                Sprint points: <input type="number" name="sprintPoints" value={formData.sprintPoints} onChange={handleChange} />
            </label>
            <label>
                Total time: <input type="number" name="totalTime" value={formData.totalTime} onChange={handleChange} />
            </label>
            <label>
                Team:
                <select name="teamId" value={formData.teamId} onChange={handleTeamChange}>
                    <option value="" disabled>
                        Select a Team
                    </option>
                    {teams.map((team: Team) => (
                        <option key={team.id} value={team.id}>
                            {team.name}
                        </option>
                    ))}
                </select>
            </label>
            <button>Save</button>
        </form>
    );
}
