// ==UserScript==
// @name         <AvatarItemRemove>
// @namespace    http://github.com/iPGz/
// @version      1.0.0
// @description  Removes Minecraft from the OCN website.
// @author       Pugzy
// @match        https://oc.tc/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

// Detect and Replace Overcast Avatars
// by Pugzy, iPGz

var x = document.getElementsByClassName("avatar");

var amount = document.getElementsByClassName("avatar").length;

for (var y = 0; y < amount; y++) {

    var image = x[y];

    var source = image.src;
    var size = image.width;
    var player = source.replace(/https:\/\/avatar.oc.tc\//g, "").replace(/\/[0-9]{1,3}@[0-9]x.png/g, "");

    image.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNjAwIDE0MDVxMCAxMjAtNzMgMTg5LjV0LTE5NCA2OS41aC04NzRxLTEyMSAwLTE5NC02OS41dC03My0xODkuNXEwLTUzIDMuNS0xMDMuNXQxNC0xMDkgMjYuNS0xMDguNSA0My05Ny41IDYyLTgxIDg1LjUtNTMuNSAxMTEuNS0yMHE5IDAgNDIgMjEuNXQ3NC41IDQ4IDEwOCA0OCAxMzMuNSAyMS41IDEzMy41LTIxLjUgMTA4LTQ4IDc0LjUtNDggNDItMjEuNXE2MSAwIDExMS41IDIwdDg1LjUgNTMuNSA2MiA4MSA0MyA5Ny41IDI2LjUgMTA4LjUgMTQgMTA5IDMuNSAxMDMuNXptLTMyMC04OTNxMCAxNTktMTEyLjUgMjcxLjV0LTI3MS41IDExMi41LTI3MS41LTExMi41LTExMi41LTI3MS41IDExMi41LTI3MS41IDI3MS41LTExMi41IDI3MS41IDExMi41IDExMi41IDI3MS41eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==";
    image.style.background = stringToColour(player);
}

// Create a hexadecimal colour based on a string with JavaScript
// http://stackoverflow.com/questions/3426404/create-a-hexadecimal-colour-based-on-a-string-with-javascript

function stringToColour(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 6) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
}

// How-to: Make your own text-replacing Chrome extension like ‘Millennials to Snake People’
// http://9to5google.com/2015/06/14/how-to-make-a-chrome-extensions/

var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Minecraft/gi, 'eSport');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
