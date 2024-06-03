import { browser } from "$app/environment";
import { writable } from "svelte/store";

export const isAdLoaded = writable(true);


/* 
   We are using a writable store from svelte. We are keeping the store in sync with
   the localStorage in the browser.

   Read about localStorage here: 
   https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
   
*/

/* initialize the story_id to '1' if the story_id has not already been stored */
const chat = browser ? window?.localStorage.getItem('chat') ?? "" : ""
export const chat_store = writable(chat)

if (browser) {
        chat_store.subscribe((value) => {
                window?.localStorage.setItem('chat', value);
                console.log(value)
        })
}