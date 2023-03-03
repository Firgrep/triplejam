* If a component is rendered in two different places (by other different components), and one passes props but the other doesn't, the app won't load (chrome will load blank) and error will read that the component (that is to receive the props) cannot find the props. Error reads:

    "Uncaught TypeError: Cannot read properties of undefined (reading 'map')"

* In the final stages of the program, I was getting errors from the browser about invalid hex value and I saw that the redirectUrl was missing a "/" at the end. I also changed the app on Spotify's side to a new redirect url and made sure that it matched exactly the one in the program. 