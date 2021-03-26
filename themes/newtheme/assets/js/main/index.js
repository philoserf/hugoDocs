// Client state.
(function() {
	window.Spruce.store(
		// userSettings gets persisted between page navigations.
		// Access it in a Alpine template with constructs like
		//   $store.userSettings.configFileType
		'userSettings',
		{
			// light or dark mode.
			colorScheme: 'light',
			// Used to show the most relevant tab in config listings etc.
			configFileType: 'toml'
		},
		true
	);

	Spruce.watch('userSettings.colorScheme', function(val) {
		// TODO(bep) respect browser setting somehow?
		// See https://tailwindcss.com/docs/dark-mode
		if (val === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});
})();

// AlpineJS controllers.
(function() {
	// hc (Hugo Controller) namespace.
	window.hc = {
		colorSchemeController: function() {
			return {
				isDark: function() {
					return this.$store.userSettings.colorScheme === 'dark';
				},
				toggle: function() {
					this.$store.userSettings.colorScheme = this.isDark() ? 'light' : 'dark';
				}
			};
		}
	};
})();
