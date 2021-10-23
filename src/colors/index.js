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

Powered by The Lesli Development Team
Building a better future, one line of code at a time.

@contact  <hello@lesli.tech>
@website  <https://lesli.tech>
@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
*/


// · 
const palette = require('./palette');
const graph = require('./graphs');


// · 
exports.palette = palette;


// · 
exports.blue = (variant = 500) => palette.blue[variant];
exports.lime = (variant = 500) => palette.lime[variant];
exports.mint = (variant = 500) => palette.mint[variant];
exports.grape = (variant = 500) => palette.grape[variant];
exports.berry = (variant = 500) => palette.berry[variant];
exports.cocoa = (variant = 500) => palette.cocoa[variant];
exports.slate = (variant = 500) => palette.slate[variant];
exports.black = (variant = 500) => palette.black[variant];
exports.bubble = (variant = 500) => palette.bubble[variant];
exports.orange = (variant = 500) => palette.orange[variant];
exports.banana = (variant = 500) => palette.banana[variant];
exports.silver = (variant = 500) => palette.silver[variant];


