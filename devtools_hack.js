if (location.protocol === 'chrome-devtools:') {

	setTimeout(function () {

		var __hack_createHTML = function (htmlStr) {
			var frag = document.createDocumentFragment(),
				temp = document.createElement('div');
			temp.innerHTML = htmlStr;
			while (temp.firstChild) {
				frag.appendChild(temp.firstChild);
			}
			return frag;
		};

		var __hack_fuzzyMatch = function (str, pattern) {
			pattern = pattern.split("").reduce(function (a,b) { return a+".*"+b; });
			return (new RegExp(pattern)).test(str);
		};


		/* Custom Shortcuts */
		document.body.onkeydown = function(e) {
			switch (e.keyCode) {
				case 76:
					if (e.altKey && (e.metaKey || e.ctrlKey)) {
						if (document.getElementsByClassName('toggled-left')[0])
							document.getElementsByClassName('toggled-left')[0].click();
						else if (document.getElementsByClassName('toggled-right')[0])
							document.getElementsByClassName('toggled-right')[0].click();
						else if (document.getElementsByClassName('toggled-bottom')[0])
							document.getElementsByClassName('toggled-bottom')[0].click();
						else if (document.getElementsByClassName('toggled-bottom')[0])
							document.getElementsByClassName('toggled-bottom')[0].click();
						else if (document.getElementsByClassName('toggled-undocked')[0])
							document.getElementsByClassName('toggled-undocked')[0].click();
					}
					break;
			}
		};


		/* CSS Quick-searching */
		var searchBox = __hack_createHTML('<style> input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { color: rgba(128,128,128, .5); } .css-search-box:focus { border: 1px solid rgba(128,128,128, .5); } .styles-element-state-pane { padding-top: 20px !important; height: 56px !important; }</style><input class="css-search-box monospace" type="text" placeholder="Find" style="float: right; background-color: transparent; outline: none !important; border: 1px solid rgba(128,128,128, .32); background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAGFBMVEUAAACRlZyRlZySlZuRlZuRlJyQlZ2SlZwapm9KAAAAB3RSTlMAjd6rQGAZKun8xQAAAKdJREFUeNqdk0EOxDAIAwED+f+P9xBaBEGKtr4RD2CJlkJuEFkCVhrFsh6JnbaGHcLhryapvqczEzGf1ckNUVCKd49HaZvwBPpMbUEtG8rLWyJW9lDaq56KC+AFsAJkxBoT1wm3DFYqFGCVHo0yhRZLGmF5jHzInc7nOREnZlPbdvK55BBTyq8E4UroiwgrJoLcGIjfYiamlfhI/LeFLsQEjB/CTIiAfogFCkGFlhykAAAAAElFTkSuQmCC); background-repeat: no-repeat; background-size: auto 80%; background-position: 3px 2px; padding-left: 18px !important; width: 40%;">');
		document.getElementById('inspector-split-view').getElementsByClassName('sidebar-pane-toolbar')[0].insertBefore(searchBox, document.getElementById('inspector-split-view').getElementsByClassName('sidebar-pane-toolbar')[0].childNodes[99]);

		var __hack_cssSearch = function () {
			var s = document.getElementById('inspector-split-view').getElementsByClassName('sidebar-pane-toolbar')[0].getElementsByClassName('css-search-box')[0].value;
			var styleType = ['navigable', 'read-only'];
			for (t=0; t<styleType.length; t++) {
				var styles = document.getElementById('inspector-split-view').getElementsByClassName('styles-pane')[0].getElementsByClassName(styleType[t]);

				if (s !== '') {
					for (i=0; i<styles.length; i++) {
						properties = styles[i].getElementsByClassName('webkit-css-property');
						k = properties.length;
						for (j=0; j<properties.length; j++) {
							if (__hack_fuzzyMatch(properties[j].innerHTML, s) === false) {
								properties[j].parentNode.style.display = "none";
								k--;
							} else {
								properties[j].parentNode.style.display = "list-item";
							}
						}
						if (k <= 0) {
							styles[i].style.display = "none";
						}
					}

					for (i=0; i<properties.length; i++) {
						if (__hack_fuzzyMatch(properties[i].innerHTML, s) === false) {
							properties[i].parentNode.style.display = "none";
						} else {
							properties[i].parentNode.style.display = "list-item";
						}
					}

				} else {
					for (i=0; i<styles.length; i++) {
						styles[i].style.display = "block";
						properties = styles[i].getElementsByClassName('webkit-css-property');
						for (j=0; j<properties.length; j++) {
							properties[j].parentNode.style.display = "list-item";
						}
					}
				}
			}
		};

		document.getElementById('inspector-split-view').getElementsByClassName('sidebar-pane-toolbar')[0].getElementsByClassName('css-search-box')[0].addEventListener('change', __hack_cssSearch, false);
		document.getElementById('inspector-split-view').getElementsByClassName('sidebar-pane-toolbar')[0].getElementsByClassName('css-search-box')[0].addEventListener('keyup', __hack_cssSearch, false);
		document.getElementById('inspector-split-view').getElementsByClassName('sidebar-pane-toolbar')[0].getElementsByClassName('css-search-box')[0].addEventListener('paste', __hack_cssSearch, false);


		/* Toggle the Drawer twice to avoid incorrect element position */
		document.getElementsByClassName('console-status-bar-item')[0].click();
		document.getElementsByClassName('console-status-bar-item')[0].click();
	}, 2400);
}
