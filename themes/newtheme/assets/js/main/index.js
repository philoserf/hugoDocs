// Client state.
(function() {
	const toggleDarkMode = function(dark) {
		if (dark) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	};

	window.Spruce.store(
		// TODO1 namespace these? e.g. hugo_
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
		toggleDarkMode(val === 'dark');
	});
})();

// AlpineJS controllers.
(function() {
	// hc (Hugo Controller) namespace.
	window.hc = {
		colorSchemeController: function() {
			return {
				isLoaded: function() {
					return this.$store.userSettings;
				},
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
