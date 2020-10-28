import jsonData from '../assets/data/students.json';

enum Status {
    Teletravail = "En Télétravail chez soi",
    Cours = "En cours à IMT Atlantique",
    Malade = "Malade",
    Absent = "Absent"
}

function toStudentsObject(json: any) {
    return JSON.parse(JSON.stringify(json));
}

export default function getStudentsByStatus() {
    const students = toStudentsObject(jsonData);
    let cours = new Array<Object>();
    let teletravail = new Array<Object>();
    let malade = new Array<Object>();
    let absent = new Array<Object>();
    let studentsStatusMap = new Map<String, Array<Object>>();

    students.forEach((student: any) => {
        switch (student.status) {
            case Status.Teletravail:
                teletravail.push(student);
                break;
            case Status.Cours:
                cours.push(student);
                break;
            case Status.Malade:
                malade.push(student);
                break;
            case Status.Absent:
                absent.push(student);
                break;
            default:
                console.log("This status is undefined: " + student.status);
        }
    });

    studentsStatusMap.set(Status.Teletravail, teletravail);
    studentsStatusMap.set(Status.Cours, cours);
    studentsStatusMap.set(Status.Malade, malade);
    studentsStatusMap.set(Status.Absent, absent);

    return studentsStatusMap;
}