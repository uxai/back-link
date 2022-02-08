URL = 'https://uxai.net/'

function takemeback(path) {
    // Checks tab history exists and referrer value
    if(history.length > 1 && document.referrer != "") {
        history.back()
    } else {
        if(path == 1) {
            // Grabs the pathname and takes only the top level path
            let top = window.location.pathname.split('/')[1]
            goto = URL + top
            window.location.href = goto;
        } else {
            window.location.href = URL;
        }
    }
}