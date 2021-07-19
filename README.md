# CI-MS2-fun-Quiz
https://damianjacob.github.io/CI-MS2-fun-Quiz/

<img src='assets/docs/amiresponsive.png' alt='Am i responsive screenshot'>
The goal of this project is to create an interactive website that contains a quiz game. The site is targeted towards people of all ages who want to have fun and test their knowledge.

## User Goals
1. Have fun with an interactive game
2. Test their knowledge
3. Try to beat the game
4. Follow us on social media
5. Find instructions to the game
## User Stories
1. "As a person who likes games, i expect this game to show my score and my remaining life points"
2. "As a user who has not played many online-games before, i want to see some instructions before playing"
3. "As a person interested in trivia, i want to see if i submitted the wrong response and i want to be shown the correct answer"
4. "As a user who really loves this game, i would like to follow its creator on social media to find out more about them"
5. "As a user who wants to beat the game, i expect to be able to decide myself when to go to the next question"
6. "As a gamer i expect the game to tell me when i've completed a section of it"
## Site Owner Goals
1. To have an good-looking site that incourages users to play
2. To have an clear layout and a page with instructions for the user
3. Have an intuitive interface
4. Have social media links in the site
5. Have a site that is responsive on all devices

## Design Choices
I wanted to create a site that looks fun but still clean.
## Colors
I have chosen a linear gradient for the entire page, from left to right. The gradient goes from a dark blue to violet, which is not a drastic change. After experimenting with colors, i've decided to keep the header and footer in the same color as the rest of the page, and to separate them from the rest of tha page with a double border.
## Fonts
I used the Arial font for my page. I wanted an easily readable sans-serif font.
## Structure 

This site follows a simple structure: At the top there is a header which contains the logo of the site and a link to the "how to play" page. Immediately under the header there is the score area, which contains life points and score, two important pieces of information for the player.
We then have the four quiz categories and the interactive quiz area. In the quiz area, the player can interact with the page by choosing one of the four quiz-categories and answering questions. A correct answer will increment the score, while an incorrect question will decrease the life points. Once the user has reached 0 life points, the game is over and the user will have to start again.

On the instructions page, the game is explained in detail.

## Wireframes
I used balsamiq for the wireframes. The final wireframe is a bit different from the first version, as i made some changes while creating the project.
<!-- ADD WIREFRAME IMAGES HERE -->
<details>
<summary>Wireframes for mobile</summary>
<img src='assets/docs/wireframes/wireframe-mobile.png' alt='mobile wireframe'>
</details>

<details>
<summary>Wireframes for tablet</summary>
<img src='assets/docs/wireframes/wireframe-tablet.png' alt='tablet wireframe'>
</details>

<details>
<summary>Wireframes for desktop</summary>
<img src='assets/docs/wireframes/wireframe-desktop.png' alt='desktop wireframe'>
</details>



## Technologies used

I used html and css for designing the page and JavaScript for the quiz and the user interaction. For the icons i used <a href='https://fontawesome.com/'>font awesome</a>.

## Features
### Existing features
<!-- ADD DROPDOWN IMAGES FOR ALL FEATURES -->
- Nav Bar
The nav bar is very simple and consists of the logo on the left and a link to the "how to play" page on the right side.
<details>
<summary>Screenshot of navbar</summary>
<img src='assets/docs/features/navbar.png' alt='nav bar screenshot'>
</details>

- Score area
<details>
<summary>Screenshot of score area</summary>
<img src='assets/docs/features/score-area.png' alt='score area screenshot'>
</details>

- Categories
<details>
<summary>Screenshot of categories</summary>
<img src='assets/docs/features/categories.png' alt='categories screenshot'>
</details>

- Quiz area
add : select answers, wrong answers, 
<details>
<summary>Screenshot of quiz area</summary>
<img src='assets/docs/features/quiz-area.png' alt='quiz area screenshot'>
</details>

- Pop up messages

- Footer
<details>
<summary>Screenshot of footer</summary>
<img src='assets/docs/features/quiz-area.png' alt='footer screenshot'>
</details>

## Testing

### HTML
No errors were returned when passing through the official W3C validator

### CSS
No errors were found when passing through the official (Jigsaw) validator


### ACCESSIBILITY
There is one error because of an empty form label on index.html, however i need that label to stay empty for my responsive nav bar to show correctly as a hamburger menu.  The same goes for the instruments.html page in the buy modal: there are empty labels because i used icons from font awesome for those labels.
### LIGHTHOUSE
All of the pages in this site have achieved a score over 90 in performance, accessibility, best practices and SEO.
g

### Fixed errors
There have been some errors which i needed to fix:
- HTML: I had used the same id for multiple elements on the instrument page. Both were related to the modal forms: i had used id=fname and id=lname in both modals. I fixed this by renaming the elements in the buy modal and pointing their labels accordingly.
- CSS: I had mistakenly used the rule "background-repeat: no" for 4 different background images. This is incorrect and i changed it to "background-repeat: no-repeat".
- Accessibility: The newsletter button had a low contrast error, so i changed its color in order to obtain a better contrast.
- Lighthouse: the performance of my site was suffering because i had used high-resolution images with a width of around 4000px. I reduced all images with a free online resource (https://www.befunky.com/features/resize-image/) to slightly above their max-width. This allowed my performace to reach a score of over 90.

## Bugs

The hardest bug to resolve was with the grid elements on the about-us.html and contact-us.html pages: once the viewport dropped below 800px (which is my breakpoint for tablets and mobile phones), the grid element overflowed to the right. It was very time consuming to try to figure out what the problem was, and once i discovered that it was overflowing thanks to the help of our tutor support, i tried changing the space and height rules with CSS. This still did not help, so i decided to set the display of the grid container to absolute and position it on the page. This created another bug: when reducing the height of the viewport, some of the content would overlap. I resolved this problem partially by changing the min-height from "100vh" to a set amount of px. There is still a part in my about-us page where the content overflows slightly over the background image at the very bottom (only with smaller screen sizes).

## Deployment
The site was deployed to Github pages. See the live link: https://damianjacob.github.io/CI_MS1_Music_Pro/index.html 

## Credit

### Content
   I took used the modal bootstrap from https://getbootstrap.com/ and followed the documentation from that site to modify the code of the bootstrap. I often referred back to various lessons from Code Institute and to W3schools or MDN.
   For the responsive nav bar using only CSS i followed this tutorial by Kevin Powell: https://www.youtube.com/watch?v=8QKOaTYvYUA

### Media
   All the photos used on the site have been downloaded from one of the following copyright-free sites: Unsplash, StockVault, Pixabay. This includes the pictures of the icons for the social media links. 
   The icons have been taken from font awesome.

## Acknowledgements
I would like to thank my co-students who took their time to answer my questions or doubts on Slack, my mentor Mo Shami who gave me precious advice and lent me his expertise and the tutors of Code Institute who helped me understand the origin of two bugs which i then could fix.