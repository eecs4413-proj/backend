import express from "express";
class Item{
    constructor(bid,name,description,type,brand,quantity,price)
    {
       this.bid = bid;
       this.name = name;
       this.description = description;
       this.type = type;
       this.brand = brand;
       this.quantity = quantity;
       this.price = price;
    }

    getBid(){return this.bid;}
    getName(){return this.name;}
    getDescription(){return this.description;}
    getType(){return this.type;}
    getBrand(){return this.brand;}
    getQuantity(){return this.quantity;}
    getPrice(){return this.price;}
    setBid(bid){this.bid = bid;}
    setName(name){this.name = name;}
    setDescription(description){this.description = description;}
    setType(type){this.type=type;}
    setBrand(brand){this.brand=brand;}
    setQuantity(quanitty){this.quantity=quanitty;}
    setPrice(price){this.price=price;}
}
module.exports = Item;