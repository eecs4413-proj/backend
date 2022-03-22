import express from "express";
class User{
    constructor(email,password,name,address,admin)
    {
        this.email = email;
        this.password = password;
        this.name = name;
        this.address = address;
        this.admin = admin;
    }
    /*
    Get the name of the user object
    */
    getName(){
        return this.name;
    }
    /*
    Get the password of the user object
    */
    getPassword(){
        return this.password;
    }
    /*
    Get the email of the user object
    */
    getEmail(){
        return this.email;
    }
    /*
    Get the address of the user object
    */
    getAddress(){
        return this.address;
    }
    /*
    Get the admin of the user object
    */
    getAdmin(){
        return this.address;
    }
    /*
    Set the user's email
    */
    setEmail(email)
    {
        this.email = email;
    }
    /*
    Set the user's name
    */
    setName(name)
    {
        this.name = name;
    }
    /*
    Set the user's password
    */
    setPassword(password)
    {
        this.password = password;
    }
    /*
    Set the user's address
    */
    setAddress(address)
    {
        this.address = address;
    }
    /*
    Set the user's admin
    */
    setAdmin(admin)
    {
        this.admin = admin;
    }

}

module.exports = User;