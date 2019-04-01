class UserObj {
    constructor(id, name, surname, picture, pictureLarge, email, dob, gender) {
        this.id = id
        this.name = name.charAt(0).toUpperCase() + name.slice(1)
        this.surname = surname.charAt(0).toUpperCase() + surname.slice(1)
        this.picture = picture
        this.pictureLarge = pictureLarge
        this.email = email.slice(0, 3) + '...' + email.slice(email.indexOf('@') - 3, email.length)
        this.dob = dob.date.slice(0, 10)
        this.gender = gender
    }
}

export default UserObj