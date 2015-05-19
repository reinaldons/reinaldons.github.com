
function set_date() {
    var application_response = document.getElementById("application_response")
    var start_date = new Date()
    var end_date = new Date()
    end_date.setDate(start_date.getDate() + 14)

    var start_trial_array = start_date.toUTCString().split(' ')
    var end_date_array = end_date.toUTCString().split(' ')

    application_response.innerHTML = application_response.innerHTML.replace('{start_trial}', start_trial_array[1] + ' ' + start_trial_array[2]).replace('{end_trial}', end_date_array[1] + ' ' + end_date_array[2])
}

set_date()

