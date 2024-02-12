/*! For license information please see serviceworker.js.LICENSE.txt */
importScripts("https://cdn.moengage.com/release/dc_1/serviceworker_cdn.min.latest.js");

console.log('Started', self);
self.addEventListener('install', function(event) {
  self.skipWaiting();
  console.log('Installed', event);
});
self.addEventListener('activate', function(event) {
  console.log('Activated', event);
});
self.addEventListener('push', function(event) {
  console.log('Push message received', event);
});
