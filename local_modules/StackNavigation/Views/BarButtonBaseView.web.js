// Copyright (c) 2014-2019, MyMonerᴏ.com
// Copyright (c) 2019 The Bitcoin Confidential Core Developers
//
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
//	conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
//	of conditions and the following disclaimer in the documentation and/or other
//	materials provided with the distribution.
//
// 3. Neither the name of the copyright holder nor the names of its contributors may be
//	used to endorse or promote products derived from this software without specific
//	prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
// THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
// STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
// THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
"use strict"
//
const View = require('../../Views/View.web')
//
class BarButtonBaseView extends View
{
	constructor(options, context)
	{
		if (typeof options.tag !== 'undefined') {
			options.tag = "a" // it's a button
		}
		super(options, context)
		//
		const self = this
		self.didConfigureInteractivity_fn = self.options.didConfigureInteractivity_fn || function(thisView) {}
		self.setup()
	}
	setup()
	{
		const self = this
		const layer = self.layer
		layer.style.cursor = "default" // to prevent ibar
		layer.ondragstart = function(e) { e.preventDefault(); return false; } // disable link dragging
	}
	//
	//
	// Runtime - Imperatives
	//
	SetEnabled(isEnabled)
	{
		const self = this
		self.isEnabled = isEnabled
		const layer = self.layer
		if (self.isEnabled) {
			layer.style.href = "#"
			layer.classList.remove("disabled")
		} else {
			layer.style.href = ""
			layer.classList.add("disabled")
		}
		self.didConfigureInteractivity_fn(self)
	}
}
module.exports = BarButtonBaseView