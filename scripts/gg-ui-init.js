
function gg_ui_init() {
	console.warn("GG | Initializing Garhi's Grotto - UI")
	//TODO: Hook up individual classes to options, add custom theme option
	$('body.vtt').addClass('garhis-grotto-ui');
	// $('body.vtt').addClass('gg_hidden');
}

Hooks.once("ready", () => {
	gg_ui_init()
})

// Hooks.on('setup', () => {
//     registerSettings();
// });
