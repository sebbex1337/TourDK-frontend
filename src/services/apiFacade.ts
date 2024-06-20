import { Rider } from "./entityFacade";

const API_URL = "http://localhost:8080";
const RIDER_URL = API_URL + "/api/riders";
const TEAM_URL = API_URL + "/api/teams";

export async function getAllRiders() {
    return await fetch(RIDER_URL).then((res) => res.json());
}

export async function getAllTeams() {
    return await fetch(TEAM_URL).then((res) => res.json());
}

export async function createRider(rider: Rider) {
    return await fetch(RIDER_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(rider),
    }).then((res) => res.json());
}

export async function updateRider(id: number, rider: Rider) {
    return await fetch(`${RIDER_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(rider),
    }).then((res) => res.json());
}
