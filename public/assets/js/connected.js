function upload_file(dossier, domaine) {

    let file_data = $("#file_" + dossier).prop("files")[0];
    let form_data = new FormData();


    form_data.append("folder", dossier);
    form_data.append("file", file_data);

    $.ajax({
        url: "//" + domaine + "/ajax/send_file.php",
        dataType: 'json',
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,
        type: 'post',
        success: function (data) {
            if (data.error == false) {
                $("#file_" + dossier).val('');
                let li = `<li class='dropdown-item' id='${dossier}_${data.fichier}'>
          <a class='btn btn-danger btn-sm float-end' onclick='delete_file(\"${data.fichier}\",\"${dossier}\",\"${domaine}\")'><i class='bi bi-trash'></i></a>
          <a href='${data.url}'>${data.fichier}</a></li>`;
                document.getElementById('folder_' + dossier).innerHTML += li;
            } else {
                alert(data.message);
            }
        }
    });
}

function delete_file(file, dossier, domaine) {
    if (confirm("Confirmez que vous voulez supprimer le fichier !")) {
        let form_data = new FormData();

        form_data.append("file", file);
        form_data.append("folder", dossier);

        $.ajax({
            url: "//" + domaine + "/ajax/del_file.php",
            dataType: 'json',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',
            success: function (data) {
                if (data.error == false)
                    document.getElementById(dossier + '_' + file).remove();
                else
                    alert(data.message);
            }
        });
    }
}