# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Dianneth Murillo**

Time spent: **4** hours spent in total

Link to project: [https://glitch.com/edit/#!/thirsty-frequent-basketball](https://glitch.com/edit/#!/thirsty-frequent-basketball)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Game elements are hidden when game is currently not being played
- [x] Game difficulty settings implemented that change length of pattern and sound durations
- [x] Imported fonts from google fonts

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![Uhh did it load?](https://i.imgur.com/p29SWDs.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
Various css/html/javascript references:
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br
https://www.w3schools.com/css/css_link.asp
https://www.w3schools.com/cssref/pr_margin-bottom.asp
https://www.w3schools.com/tags/tag_footer.asp
https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
https://www.w3schools.com/tags/tag_p.asp
https://www.w3schools.com/cssref/pr_font_weight.asp
https://cssreference.io/property/letter-spacing/
https://www.w3schools.com/css/css3_shadows.asp
https://www.digitalocean.com/community/tutorials/how-to-style-the-html-div-element-with-css
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

Color inspo and fonts:
https://coolors.co/e63946-f1faee-a8dadc-457b9d-1d3557
https://fonts.google.com/specimen/Bungee?preview.text=Pattern%20Game%20Prework%20Project&preview.text_type=custom#standard-styles

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
My challenge was mentally linking all the elements together.

Mutlifile projects? I've done them before. Multifile projects with a different language in each file? Honestly it was pretty dang overwhelming.
It's also been a while since I've done some proper designs in CSS, so relearning all the ins and outs of the commands was something I had to do.

The HTML side of things wasn't that bad, as it seems HTML is the one thing from the 90's that doesn't become super convoluted when you're trying to do something basic.
As I've been pretty addicted to a Markdown notetaking app lately, it wasn't a problem at all for me. 

This was my first exposure to the JavaScript language, but since it was C-based it actually wasn't that bad.
I think the parts I added to the script are pretty good, actually. The language itself is intriguing. It's vague with type declaration but not intuitive like Python.
It feels like it's a halfway-there implementation between C's explicit typing everywhere and Python's implicit typing everywhere.
I suppose the only reason it became standard was because it was the first somewhat-intuitive scripting language that worked nicely with HTML right out of the box.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
My question is what maniac over at JavaScript thought that half-typing was okay? You either go full typing or no typing, you don't go halfway with that.

In all due seriousness, though, I've seen a few videos out there of some youtubers making websites and they can make them so slick so easily.
I think they use React and some libraries and scripts for it? I really want to learn how to use that properly because there's some beautiful effects you can make with that.

I also want to know what the usual desktop app-based workflow for web dev is. Doesn't a site need a host? How do people test it without a server?
And do IDEs help mentally link functions and elements on the webpage better than my head? If they don't, that's one missed-out market.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had a few more hours I would pretty up the code and organize it more. Get a consistent style within the JavaScript and do everything in VS Code.
Working within glitch was nice for getting into web-dev but I really appreciate the theming and spacing niceness of a non-browser code editor.
I would also learn the usual style guidelines of HTML, CSS, and JavaScript. As of right now I only know the guidelines for C and implement that most of the time.

I'd also like to enhance the game logic by adding additional guesses before failing the player, showing the round counter on the page,
showing the guesses left this round on the page, and adding a button per difficulty step so Medium has 5 buttons and Hard has 6 buttons.
I would also add a toggle for timed mode, where if they so chose, they could have a timer counting how long they had left to finish their guesses this round.

As for more complex buttons and sounds, I feel as though this game doesn't need it.
This is a fast and simple game and to make each button show a different picture on click or have a chime attached to it
instead of a simple beep would detract from the speed and stress of the game in its current state of "one mistake ends the game".

Give it a different dressing and throw it into an arcade and I can definitely get on board the idea of fancying it up.



## License

    Copyright Dianneth Murillo

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.