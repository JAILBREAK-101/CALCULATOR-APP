// // THIS IS WHERE WE START TO CHANGE THE THEME OF OUR PAGE, WHEN THE USER CLICKS ON IT.
// // hide the other checkboxes, until i click on them.
// const first_theme = document.getElementById('first');
// const second_theme = document.getElementById('second');
// const third_theme = document.getElementById('third');

// let first_theme_background = 'hsl(6, 63%, 50%)';
// let second_theme_background ='hsl(25, 98%, 40%)';
// let third_theme_background ='hsl(176, 100%, 44%)';
// // THE CHANGING.
// // THE SECOND THEME.
// for (i = 0; i<=2; i++) {
//     second_theme.style.background = 'none';
//     second_theme.style.border = '0';
// }

// // THE THIRD THEME.
// for(i=0; i<=2; i++) {
//     third_theme.style.background = 'none';
//     third_theme.style.border = '0';
// }

// // WHEN WE CLICK ON THE OTHER THEMES (simultaneously)

// // FUNCTION FOR THE CHANGE.
// // Show the current (hide the other ones.)
// let changer = (current_theme, other_theme1, other_theme2) => {
//     current_theme.addEventListener('click', () => {
//         function style_changer (first, second) {
//             for(i=1; i<=4; i++) {
//                 first.style.backgroundColor = 'none';
//                 first.style.border = '0';
//                 // the second selected theme (based on the function).
//                 second.style.backgroundColor = 'none';
//                 second.style.border = '0';
//             }
//         }
//         style_changer(other_theme1, other_theme2)
//         // CHECK FOR THE CURRENT THEME, AND GIVE IT IT'S COLOR, WHEN CLICKED.
//         function check_for_current(current, color) {
//             for (i=1; i<=2; i++) {
//                 current.style.backgroundColor = color;
//                 current.style.border = `1px solid ${color}`;
//             }
//         }

//         // CHECKING AND APPLYING STYLES (after function has been called).
//         if (current_theme == first_theme, first_theme_background) {
//             check_for_current(current_theme);
//         }
//         else if (current_theme == second_theme, second_theme_background) {
//             check_for_current(current_theme);
//         }
//         else if(current_theme == third_theme, third_theme_background) {
//             check_for_current(current_theme);
//         }
//     })
// }

// // CALLING THE FUNCTION FOR CLICK EVENTS ON THE THEMES.
// changer(second_theme, first_theme, third_theme);
// changer(third_theme, second_theme, first_theme);
// changer(first_theme, second_theme, third_theme);

// A CLASS BE ACCESSED THROUGH THE NAME PROPERTY.

// USING LOCAL STORAGE.
const the_color_themes = document.getElementsByName('theme');

// THE FALLBACK FOR NO :HAS() SUPPORT
// const set_theme = function (color_class) {
//     // document.documentElement.className = color_class; 
// }

// THE ACTUAL CODE (store the theme when someone select).
const store_user_theme = function(user_theme) {
    localStorage.setItem("user-theme", user_theme)
    return user_theme;
}

// APPLY THE THEME. (when we refresh, or apply the theme).
function set_theme() {
    // RETRIEVE THE THEME, MEANS GET THE THEME THAT WAS STORED WHEN WE COME BACK, OR WHEN WE REFRESH THE BROWSER.
    const current_theme = localStorage.getItem("user-theme");
    // const current_theme = store_user_theme(user_preference.id);

    // DO THIS FOR EACH THEME (by checking based on preference.)
    the_color_themes.forEach((each_theme) => {
        if (each_theme.id === current_theme) {
            each_theme.checked = true;
        }
    });

    // THIS IS FOR THE :has (support)
    // MAKING THE NAME WITH THE CLASS, TO BE EQUAL TO THE NAME THAT I GIVE EACH RADIO BUTTON IN MY HTML (as a fallback for has.)
    document.documentElement.className = the_color_themes;
    // TO MAKE SURE THE CHECKBOX IS SELECTED.

};

// THE LOCAL STORAGE IS IN THE BROWSER (since Javascript works with it).
// GETTING EACH THEME, WHEN THE USER CLICKS ON IT
the_color_themes.forEach(user_preference => {
    user_preference.addEventListener('click', ()=> {
        // WHEN I CLICK ON A THEME, STORE IT TO THE LOCAL STORAGE.
        // THE VALUE IS STORED IN THE KEY, WHEN CLICKED.
        store_user_theme(user_preference.id);
    })
})

// THIS IS TO MAKE SURE IT LOADS BEFORE THE PAGE DOES.
document.onload = set_theme();