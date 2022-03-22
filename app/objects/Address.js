import express from "express";
class Address{
    constructor(addressId, street, province, country,zip,phone)
    {
        this.addressId = addressId;
        this.street = street;
        this.province = province;
        this.country = country;
        this.zip = zip;
        this.phone = phone;
    }

    getAddressId()
    {
        return this.addressId;
    }
    getStreet()
    {
        return this.street;
    }
    getProvince()
    {
        return this.province;
    }
    getZip()
    {
        return this.zip;
    }
    getPhone()
    {
        return this.phone;
    }
    setAddressId(addressId)
    {
        this.addressId = addressId;
    }
    setStreet(street)
    {
        this.street = street;
    }
    setProvince(province)
    {
        this.province = province;
    }
    setCountry(country)
    {
        this.country = country;
    }
    setZip(zip)
    {
        this.zip = zip;
    }
    setPhone(phone)
    {
        this.phone = phone;
    }
}

module.exports = Address;