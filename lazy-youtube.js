(function () {window.addEventListener('load', function () {let elements = document.getElementsByTagName('youtube');let isInViewport = function (elem) {let bounding = elem.getBoundingClientRect();let minusH = document.documentElement.clientHeight * (-1);return bounding['top'] <= 0 && bounding['top'] >= minusH;};function youtube() {for (let i = 0; i < elements.length; i++) {if (isInViewport(elements[i])) {let newEl = document.createElement('iframe');for (let ai = 0; ai < elements[i].attributes.length; ai++) {if (elements[i].attributes[ai].value == '') {newEl.setAttribute(elements[i].attributes[ai].name, null);} else {newEl.setAttribute(elements[i].attributes[ai].name, elements[i].attributes[ai].value);}}elements[i].parentNode.replaceChild(newEl, elements[i]);}}};setTimeout(youtube, 1000);window.addEventListener('scroll', youtube, false);}, false);})();
