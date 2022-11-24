import bcrypt from 'bcryptjs'

/**
 * Hash password
 */

export const hassPassword = (password) => {
    let salt =  bcrypt.genSaltSync(10);
    return  bcrypt.hashSync(password, salt);
}



/**
 * hash password verify
 */

export const hassPasswordVerify = (password, hashPassword) => {
    
    return bcrypt.compareSync(password, hashPassword)
}


