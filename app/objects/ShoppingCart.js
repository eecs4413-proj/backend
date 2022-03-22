import express from "express";
class ShoppingCart{
    constructor(userId,items,quantity)
    {
        this.userId = userId;
        this.items = items;
        this.quantity = quantity;
    }
    getUserId()
    {
        return this.userId;
    }
    getItems()
    {
        return this.items;
    }
    getquantity()
    {
        return this.quantity;
    }
    setUserId(userId)
    {
        this.userId = userId;
    }
    setItems(items)
    {
        this.items = items;
    }
    setQuantity(quanitty)
    {
        this.quantity = quanitty;
    }
}

module.exports = ShoppingCart;