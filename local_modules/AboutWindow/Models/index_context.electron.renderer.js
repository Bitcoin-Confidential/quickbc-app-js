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

"use strict"
//
// Hydrate context
var context_object_instantiation_descriptions =
[
	{
		module_path: __dirname + "/../../Theme/ThemeController",
		instance_key: "themeController",
		options: {}
	},
	{
		module_path: __dirname + "/../../URLBrowser/URLBrowser.electron",
		instance_key: "urlBrowser",
		options: {}
	}
]
function NewHydratedContext(
	app, 
	menuController
)
{
	var initialContext =
	{
		app: app,
		menuController: menuController,
		isDebug: process.env.NODE_ENV === 'development',
		crossPlatform_appBundledIndexRelativeAssetsRootPath: "../../", // b/c index_context is in MainWindow/Views; must end up /
		appDownloadLink_domainAndPath: "bitcoinconfidential.com"
	}

	return require("../../runtime_context/runtime_context").NewHydratedContext(context_object_instantiation_descriptions, initialContext)
}
module.exports.NewHydratedContext = NewHydratedContext