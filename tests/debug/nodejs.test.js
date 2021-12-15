/*
Lesli

Copyright (c) 2020, Lesli Technologies, S. A.

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

Lesli JS debug message - Pretty debug messages for Node and web browsers

Powered by https://www.lesli.tech
Building a better future, one line of code at a time.

@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html
@version  0.1.0-alpha

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
*/
require("mocha-sinon")
const { expect } = require("chai")
const chalk = require("chalk")

const LesliJS = require("../../index")
const utils = require("../../src/debug/utils")

console.debug = LesliJS.debug.nodejs

LesliJS.debug.nodejs.log("Simple message")
LesliJS.debug.nodejs.msg("Standard message")
LesliJS.debug.nodejs.info("Informative message")
LesliJS.debug.nodejs.warn("Warning message")
LesliJS.debug.nodejs.error("Error message")
LesliJS.debug.nodejs.fatal("Fatal error message")
LesliJS.debug.nodejs.hr()
console.debug.log("Simple message")
console.debug.msg("Standard message")
console.debug.info("Informative message")
console.debug.warn("Warning message")
console.debug.error("Error message")
console.debug.fatal("Fatal error message")
console.debug.hr()

console.log(LesliJS.debug.nodejs.build("message", "module", "level"))


describe("LesliJS.debug", () => {

    describe("LesliJS.debug.nodejs", () => {

        beforeEach(function(){
            this.sinon.stub(console, 'log');
        })
        
        it("build - is expected to build a string with the message format", function(){
            expect(LesliJS.debug.nodejs.build("Message", "Module", "Level")).to.be.a("String")
            expect(LesliJS.debug.nodejs.build("Message", "Module", "Level")).to.equal(utils.buildMessage("Message", "Module", "Level"))
        })

        it("log - is expected to log a simple message in the console", function(){
            LesliJS.debug.nodejs.log("Log")
            expect(console.log.calledOnce).to.be.true
            expect(console.log.calledWith(utils.buildMessage("Log", null, "log"))).to.be.true
        })

        it("msg - is expected to log a standard message in the console", function(){
            LesliJS.debug.nodejs.msg("Message")
            expect(console.log.calledOnce).to.be.true
            expect(console.log.calledWith(utils.buildMessage("Message", null, "msg"))).to.be.true
        })

        it("msg - is expected to log a message in the console", function(){
            LesliJS.debug.nodejs.info("Informative")
            expect(console.log.calledOnce).to.be.true
            expect(console.log.calledWith( chalk.whiteBright.bgBlue( utils.buildMessage("Informative", null, "info") ) )).to.be.true
        })
        
        it("warn - is expected to log a warning message in the console", function(){
            LesliJS.debug.nodejs.warn("Warning")
            expect(console.log.calledOnce).to.be.true
            expect(console.log.calledWith( chalk.black.bgYellowBright( utils.buildMessage("Warning", null, "warn") ) )).to.be.true
        })

        it("error - is expected to log an error message in the console", function(){
            LesliJS.debug.nodejs.error("Error")
            expect(console.log.calledOnce).to.be.true
            expect(console.log.calledWith( chalk.whiteBright.bgRedBright( utils.buildMessage("Error", null, "error") ) )).to.be.true
        })

        it("fatal - is expected to log a fatal message in the console", function(){
            LesliJS.debug.nodejs.fatal("Fatal")
            expect(console.log.calledOnce).to.be.true
            expect(console.log.calledWith( chalk.black.bgRedBright( utils.buildMessage("Fatal", null, "fatal") ) )).to.be.true
        })

    })


})