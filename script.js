function makeid(l) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    
    for (let i = 0; i < l; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    
    return result;
}

// Make function available globally if needed
window.makeid = makeid;
// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
