function takemeback(path) {
    // Checks tab history exists and referrer value
    if(history.length > 1 && document.referrer != "") {
        history.back()
    } else {
        if(path == 1) {
            // Grabs the pathname and takes only the top level path
            let top = window.location.pathname.split('/')[1]
            window.location.href = window.location + top;
        } else {
            window.location.href = window.location;
        }
    }
}