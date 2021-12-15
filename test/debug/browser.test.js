/*
Lesli

Copyright (c) 2021, Lesli Technologies, S. A.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.

Lesli JS - JavaScript utilities for JavaScript applications

Powered by LesliTech
Building a better future, one line of code at a time.

@contact  <hello@lesli.tech>
@website  <https://lesli.tech>
@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
*/


// import tools and modules
require("mocha-sinon")
const { expect } = require("chai")
const LesliJS = require("../..")
const utils = require("./../../src/debug/utils")


describe("LesliJS.debug.browser", () => {

    describe("log messages", () => {
        beforeEach(function(){
            this.sinon.stub(console, "log")
        })
    
        it("build - is expected to build a message with the correct log format", function(){
            expect(LesliJS.debug.browser.build("Message", "Module", "Level")).to.be.a("String")
            expect(LesliJS.debug.browser.build("Message", "Module", "Level")).to.equal(utils.buildMessage("Message", "Module", "Level"))
        })
    
        it("log - is expected to log a message in the console", function(){
            LesliJS.debug.browser.log("Log")
            expect(console.log.calledOnce).to.be.true
            expect(console.log.calledWith(utils.buildMessage("Log", null, "log"))).to.be.true
        })
    
        it("msg - is expected to log a message in the console", function(){
            LesliJS.debug.browser.msg("Message")
            expect(console.log.calledOnce).to.be.true
            expect(console.log.calledWith(utils.buildMessage("Message", null, "msg"))).to.be.true
        })

        it("message - is expected to log a message twice", function(){
            LesliJS.debug.browser.message("Title", "Messages")
            expect(console.log.calledTwice).to.be.true
        })

    })

    describe("info messages", () => {
        beforeEach(function(){
            this.sinon.stub(console, "info")
        })

        it("info - is expected to log a info message in the console", function(){
            LesliJS.debug.browser.info("Informative")
            expect(console.info.calledOnce).to.be.true
            expect(console.info.calledWith("%c"+utils.buildMessage("Informative", null, "info"), utils.stylesForBrowser("info"))).to.be.true
        })
    })

    describe("warn messages", () => {
        beforeEach(function(){
            this.sinon.stub(console, "warn")
        })

        it("warn - is expected to log a warn message in the console", function(){
            LesliJS.debug.browser.warn("Warning")
            expect(console.warn.calledOnce).to.be.true
            expect(console.warn.calledWith("%c"+utils.buildMessage("Warning", null, "warn"), utils.stylesForBrowser("warn"))).to.be.true
        })
    })

    describe("error messages", () => {
        beforeEach(function(){
            this.sinon.stub(console, "error")
        })

        it("error - is expected to log an error message in the console", function(){
            LesliJS.debug.browser.error("Error")
            expect(console.error.calledOnce).to.be.true
            expect(console.error.calledWith("%c"+utils.buildMessage("Error", null, "error"), utils.stylesForBrowser("error"))).to.be.true
        })
    })

    describe("fatal messages", () => {
        beforeEach(function(){
            this.sinon.stub(console, "error")
        })

        it("fatal - is expected to log a fatal message in the console", function(){
            LesliJS.debug.browser.fatal("Fatal")
            expect(console.error.calledOnce).to.be.true
            expect(console.error.calledWith("%c"+utils.buildMessage("Fatal", null, "error"), utils.stylesForBrowser("fatal"))).to.be.true
        })
    })






})


