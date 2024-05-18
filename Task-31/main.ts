let current_users: string[] = ["Huzaifa", "Hadi", "Hasnain", "Umair", "Aarij"];
let new_users: string[] = ["Owais", "HUZAIFA", "HADI", "Basit", "Saad"];

for (let i = 0; i < new_users.length; i++) {
    let isTaken: boolean = current_users.some(user => user.toLowerCase() === new_users[i].toLowerCase());
    if (isTaken) {
        console.log(`The username '${new_users[i]}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${new_users[i]}' is available.`);
    }
}
