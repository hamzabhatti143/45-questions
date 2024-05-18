"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guestList = ['Babar Azam', 'M.Amir', 'Virat kohli'];
function createInvitationMessage(guest) {
    return `Dear ${guest}, you are invited to dinner. Please join us for an evening of good food and conversation.`;
}
function printInvitations(guestList) {
    guestList.forEach((guest) => {
        const invitationMessage = createInvitationMessage(guest);
        console.log(invitationMessage);
    });
}
printInvitations(guestList);
