const puppeteer = require("puppeteer") // puppeteer@1.18.1

const getScreenshot = async () => {

	const browser = await puppeteer.launch()
	const page    = await browser.newPage()

	await page.goto("https://open.spotify.com/playlist/79HTo91vZmZFi1HLdhh6Ai?si=6bXBcWEHQfaGeEzOOJrQNA")

	// let content = await page.evaluate(() => document.body.innerHTML)

	let content = await page.evaluate(() => {

		playlist = document.querySelector("#main > div > div.Root__top-container > div.Root__main-view > div.main-view-container > div > div > div > div > section > div > div > div.col-xs-12.col-lg-3.col-xl-4 > div > header > div:nth-child(1) > div > div > div > div.mo-info > div > div > span").textContent

		let results = {}

		results[playlist] = []

		let items = document.querySelector("#main > div > div.Root__top-container > div.Root__main-view > div.main-view-container > div > div > div > div > section > div > div > div.col-xs-12.col-lg-9.col-xl-8 > section > ol").querySelectorAll(".react-contextmenu-wrapper > div > li");

			items.forEach((item) => {

				artists = []

				for ( y of item.querySelector(".name > div > div.second-line > .TrackListRow__artists").querySelectorAll(".react-contextmenu-wrapper") ){ artists.push( y.querySelector("span >a").textContent ) }

				 results[playlist].push({

					'name'   : item.querySelector(".name > div >div").textContent,
					'artist' : artists

				})

			})

		return results

	})

	browser.close()

	return content
}

const http = require('http')
const fs   = require('fs')
const port = process.env.PORT || 8080

http.createServer(function (req, res) {

	res.writeHead(200,{'content-type':'text/plain'})

	getScreenshot()
	.then( x => res.end( JSON.stringify(x,null,2) ) )

}).listen(port)

console.log(`Running at port  ${port}`)
  
  
