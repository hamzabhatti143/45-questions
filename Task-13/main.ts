const guestList: string[] = ['Babar Azam', 'M.Amir', 'Virat kohli'];

function createInvitationMessage(guest: string): string {
    return `Dear ${guest}, you are invited to dinner. Please join us for an evening of good food and conversation.`;
}

function printInvitations(guestList: string[]): void {
    guestList.forEach((guest) => {
        const invitationMessage = createInvitationMessage(guest);
        console.log(invitationMessage);
    });
}

printInvitations(guestList);
