let guestList: string[] = ["Huzaifa", "Usama", "Moiz", "Kamaal"];
const unableToAttend: string = guestList[2];
const newInvitee: string = "Owais";

console.log(`${unableToAttend} can't make it to the dinner.`);

guestList[2] = newInvitee;

console.log("Updated guest list:");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, please join us for dinner on Saturday night.`);
});
