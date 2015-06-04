
function select_section(_select) {
    var section_name_array = document.getElementsByName("section_name")

    for (var i=0; i<section_name_array.length; i++) {
        section_name_array[i].innerHTML = _select.value
    }
}

function set_date() {
    var application_response = document.getElementById("application_response")
    var ted_title = document.getElementById("ted_title")
    var start_date = new Date()
    var end_date = new Date()
    end_date.setDate(start_date.getDate() + 14)

    ted_title.innerHTML = ted_title.innerHTML.replace('{ted_start_trial}', start_date.toLocaleDateString('pt-BR')).replace('{ted_end_trial}', end_date.toLocaleDateString('pt-BR'))

    var start_trial_array = start_date.toString().split(' ')
    var end_date_array = end_date.toString().split(' ')

    application_response.innerHTML = application_response.innerHTML.replace('{start_trial}', start_trial_array[2] + ' ' + start_trial_array[1]).replace('{end_trial}', end_date_array[2] + ' ' + end_date_array[1])
}

set_date()

function change_tag(_input, tag_id) {
    var tag_array = document.getElementsByName(tag_id)

    for (var i=0; i<tag_array.length; i++) {
        tag_array[i].innerHTML = _input.value
    }
}

function change_region(_select) {
    var region_array = document.getElementsByName("region")

    for (var i=0; i<region_array.length; i++) {
        region_array[i].innerHTML = _select.value
    }
}
