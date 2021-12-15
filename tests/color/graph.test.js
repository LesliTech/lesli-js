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


// · 
const assert = require('assert');
const LesliJS = require("../../index")


// · 
describe('LesliJS.color', function() {
    describe('blue()', function() {
        it('should return blue with variant default', () => assert.equal(LesliJS.color.blue(), '#3689e6'));
        it('should return blue with variant 100', () => assert.equal(LesliJS.color.blue(100), '#8cd5ff'));
        it('should return blue with variant 300', () => assert.equal(LesliJS.color.blue(300), '#64baff'));
        it('should return blue with variant 500', () => assert.equal(LesliJS.color.blue(500), '#3689e6'));
        it('should return blue with variant 700', () => assert.equal(LesliJS.color.blue(700), '#0d52bf'));
        it('should return blue with variant 900', () => assert.equal(LesliJS.color.blue(900), '#002e99'));
    });
});
