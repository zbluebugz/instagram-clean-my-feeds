// ==UserScript==
// @name         Instagram - Clean my feeds
// @description  Hide Sponsored posts in Instagram's Feed; Add video controls; Adds a "Following" link in the menu side-bar;
// @supportURL   https://github.com/zbluebugz/instagram-clean-my-feeds/issues
// @version      1.01
// @author       zbluebugz (https://github.com/zbluebugz/)
// @match        https://*.instagram.com/*
// @grant        none
// @license      MIT; https://opensource.org/licenses/MIT
// @icon64       data:image/png;base64,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
// @run-at       document-body
// ==/UserScript==
/*
    v1.01 :: November 2022
        Created script


    Attribution: Mop & Bucket icon:
    - made by Freepik (https://www.freepik.com) @ flaticon (https://www.flaticon.com/)
    - page: https://www.flaticon.com/premium-icon/mop_2383747

*/

(async function () {

    'use strict';

    const postAtt = 'icmfr';
    const log = 'icmfr :: ';

    function doCleanUpAndSomeRepairs() {

        // -- clean out the sponsored articles
        let query = `article > div:not([${postAtt}]) > div > div > header > div:nth-of-type(2) > div:nth-of-type(2) > div > div > span`;
        let posts = document.querySelectorAll(query);
        if (posts.length > 0) {
            posts.forEach(post => {
                let article = post.closest('article > div');
                article.setAttribute(postAtt, 'sponsored');
                article.setAttribute('style', 'display:none !important;');
            })
        }

        // -- repair the videos - enable controls and clean out overlays
        let videos = Array.from(document.querySelectorAll('video:not([controls])'));
        if (videos.length > 0) {
            videos.forEach(vid => {
                // --- add controls
                vid.setAttribute('controls', 'controls');
                // --- remove the overlay(s)
                let pel = vid.parentElement.parentElement.parentElement;
                let nel = pel.nextSibling;
                nel.setAttribute('style', 'display: none !important');
                Array.from(nel.children).forEach( nchild => {
                    nchild.setAttribute('style', 'display: none !important');
                });
                let nel2 = nel.nextSibling;
                nel2.setAttribute('style', 'display: none !important');
            });
        }

        window.setTimeout(doCleanUpAndSomeRepairs, 500);
    }

    let menuTries = 0;
    function addMenuEntry() {
        // -- when you have the menu in the sidebar, it refuses to list the "following" entry.
        // -- so, we put it in!
        let homeLinks = document.querySelectorAll('a[href="/"]');
        console.info(log + 'addMenuEntry() - home links:', homeLinks);
        if (homeLinks.length > 0) {
            let elFollowing = document.createElement('a');
            elFollowing.setAttribute( 'href', 'https://www.instagram.com/?variant=following');
            elFollowing.innerText = 'Following';
            elFollowing.setAttribute('role', 'link');
            elFollowing.setAttribute('tabindex', '0');

            let elFollowingBox = document.createElement('div');
            elFollowingBox.setAttribute('style', 'padding:0.75rem 0.1rem;font-size:xx-small;');
            elFollowingBox.appendChild(elFollowing);

            let homeBox = homeLinks[1]; // want #2 entry.
            homeBox = homeBox.parentElement.parentElement.parentElement;
            homeBox.insertAdjacentElement('afterend', elFollowingBox);
            console.info(log + 'addMenuEntru() - new el:', elFollowingBox);
        }
        else {
            // -- try again in about 1 second
            menuTries++;
            if (menuTries < 15) {
                window.setTimeout(addMenuEntry, 1000);
            }
        }
    };

    window.setTimeout(addMenuEntry, 1000);

    window.setTimeout(doCleanUpAndSomeRepairs, 250);

})();
