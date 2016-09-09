"use strict"

var http = require('http')
var cheerio = require('cheerio')
var request = require('request');
var util = require('./util')
let links = 'http://edition.cnn.com/2016/09/08/asia/north-korea-seismic-activity/index.html'
let links2 = 'http://hacktiv8.com'

class Browser {
  run() {
    // Run the browser
    // Display a prompt for a user
    // Parse their input
    // Display useful results by instantiating
    //   a new Page and calling methods on it.
    //
    // Questions:
    //  1. How can a user quit the browser gracefully?
    //  2. How can a user ask for help, i.e., how do they know what commands are available to them?

    request(links, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        //console.log(body) // Show the HTML for the Google homepage.
        let $ = cheerio.load(body)
        let title = $('h1').text()
        let content = $('div.zn-body__paragraph').text()
        console.log(`Title   : ${title}`);
        console.log(`link    : ${links} `);
        console.log(`====================================================`);
      }
    })
  }
}

class Page {
  run() {
    request(links2, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        //console.log(body) // Show the HTML for the Google homepage.
        let $ = cheerio.load(body)
        let title = $('h1').text()
        console.log(`Title   : ${title} characters`);
        console.log(`link    : ${links2} `);
      }
    })
  }
}

var browser = new Browser
var page = new Page
browser.run()
page.run()
