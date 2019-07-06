# Slide Affordance

I want to provide realtime slide-caption presentation for live presentations. Put another way, I want captions for the visuals on my slides to be made available to screen readers when that slide appears on the screen. I also want this to happen on a single button click. When I advance a slide, the visually impaired folks get the new captions automatically. Since my slides are on Google Slides that will mean the clicking has to happen in a browser. So I want an extension that will send a POST request (to my captioning webserver) every time a button is pressed on a tab.

## Development

`> npm install --global web-ext`

`> web-ext run`
