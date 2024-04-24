// Array of current user 
let current_Users = ["Usman","Ali","Areeba","Zain","Osama"];

// Array of nre users
let new_User = ["Hamza","Ayesha","Ali","Mahad","Areeba"]

// loop through new_user to check for usernames avaibility
new_User.forEach(new_one_user =>{

// Making a condition for username already exits and save in our_condition variable
    let our_condition = current_Users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    // Print Diffent message using If_else statments
    if(our_condition){
        console.log(`sorry ${new_one_user} is already taken!`)

    }else{
        console.log(`This username ${new_one_user} is available`)
    }
})