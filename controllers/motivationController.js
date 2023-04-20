const express = require("express");

const getMotivation = (req, res) => {
    fetch("https://dummyjson.com/quotes")
        .then((response) => response.json())
        .then((data) => {
            const { quotes } = data;
            const randomQuote = Math.floor(Math.random() * quotes.length);
            res.render("motivation", { title: "Motivation", quotes: quotes[randomQuote] });
        })
        .catch((error) => console.log(error));
};

module.exports = { getMotivation };
