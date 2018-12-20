
"use strict"

function emojify(name) {
	var out = `<img src="emojis/` + name + `.png">`
	return out
}

Vue.component("wizard", {
    props: ["name","spell"],
    template: `<p v-html="spell(name)"></p>`
})


function cast(emoji) {
	var magic = emojify("magic")
	return function (wizard) {
		return wizard + " " + magic + " " + emoji + " " + magic
	}
}

var app = new Vue({
	el: "#app",
	data: {
		harry    : emojify("harry"   ),	
		ron      : emojify("ron"     ),
		hermione : emojify("hermione")
	},
	methods: {	
		oculus_reparo: cast(emojify("oculus-reparo")),		
		wingardium_leviosa: cast(emojify("wingardium-leviosa")),
		alohomora: cast(emojify("alohomora"))
	}
})
