import jsonData from '../assets/data/students.json';

export default function getStudentsByStatus() {
    fetch(jsonData)
    .then(response => {
        if (!response.ok) {
            throw new Error("Parsing error " + response.status);
        }
        return response.json();
    })
    .then(json => {
        console.log(json);
    })
    .catch(err => {
        console.log(err);
    })
}