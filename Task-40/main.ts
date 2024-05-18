function show_magicians(magicians: string[]): void {
    magicians.forEach((magician) =>{
        console.log(magician);
    });
}

const magicians: string[] = ["Dai Vernon", "Doug Henning", "David Blaine"]
show_magicians(magicians);