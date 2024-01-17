
function save_alert_by_page(page, app, id = null) {

    let elementid = page;
    if (id != null) {
        elementid = id;
    }

    let primary = success = warning = danger = aucun = '';
    let message = CKEDITOR.instances['alert_by_page_message_' + elementid].getData();
    let couleur = document.getElementById('alert_by_page_couleur_' + elementid).value;
    let date_debut = document.getElementById('alert_by_page_date_debut_' + elementid).value;
    let date_fin = document.getElementById('alert_by_page_date_fin_' + elementid).value;

    switch (couleur) {
        case 'primary':
            primary = 'selected';
            break;
        case 'success':
            success = 'selected';
            break;
        case 'warning':
            warning = 'selected';
            break;
        case 'danger':
            danger = 'selected';
            break;
        default:
            aucun = 'selected';
            couleur = 'default';
            break;

    }

    let url = '//' + app + '/ajax/save_alert_by_page.php';
    let data = {
        page: page,
        message: message,
        couleur: couleur,
        date_debut: date_debut,
        date_fin: date_fin,
        id: id
    };
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(url, options).then(response => response.json()).then(data => {
        if (data.error == false) {
            if (id != null)
                document.getElementById('alert_by_page_' + id).remove();

            let div_alert = '';
            if (couleur.length > 4)
                div_alert = ` class='alert alert-${couleur}' `;


            let alert = `
            <div ${div_alert} id='alert_by_page_${data.id}'>
                <div class='float-end'>
                    <a data-bs-toggle='modal' data-bs-target='#modal_by_page_${data.id}' class='btn btn-${couleur} btn-sm'>
                    <i class='bi bi-pencil-square'></i></a>
                </div>
                ${message}
            </div>
            
            <div class='modal fade' id='modal_by_page_${data.id}' tabindex='-1' role='dialog' aria-hidden='true'>
            <div class='modal-dialog modal-xl modal-fullscreen-lg-down'>
            <div class='modal-content animated bounceInRight'>
                <div class='modal-header'>
                     <a onclick='del_alert_by_page(${data.id},"${app}")' class='btn btn-danger float-end'><i class='bi bi-trash'></i></a>
                </div>
                <div class='modal-body'>
    
                    <textarea class='textarea' id='alert_by_page_message_${data.id}' style='width: 100%; height: 300px'>${message}</textarea>
         
        <br>
        <div class='form-group row has-error'>
            <label class='col-sm-2 control-label'>Couleur</label>
            <div class='col-sm-10'>
                <select id='alert_by_page_couleur_${data.id}' class='form-control'>
                    <option value='0' ${aucun}>Default</option>
                    <option value='primary' ${primary}>Primary</option>
                    <option value='success' ${success}>Success</option>
                    <option value='warning' ${warning}>Warning</option>
                    <option value='danger' ${danger}>Danger</option>
                </select>
            </div>
        </div>
    
        <div class='form-group row has-error'>
            <label class='col-sm-2 control-label'>Date de début d'affichage</label>
            <div class='col-sm-10'>
                <input type='date' class='form-control' id='alert_by_page_date_debut_${data.id}' value='${date_debut}'>
            </div>
        </div>
    
        <div class='form-group row has-error'>
            <label class='col-sm-2 control-label'>Date de fin d'affichage</label>
            <div class='col-sm-10'>
                <input type='date' class='form-control' id='alert_by_page_date_fin_${data.id}' value='${date_fin}'>
            </div>
        </div>
    
        <a href='#' class='btn btn-primary float-end ms-3' onclick='save_alert_by_page("${page}","${app}",${data.id})'>Enregistrer</a>
        <button type='button' class='btn btn-secondary float-end ms-3' data-bs-dismiss='modal'>Annuler</button>
        </div>
    
        </div>
        </div>
        </div>`;

            document.getElementById('zone_alert_by_page_' + page).insertAdjacentHTML('beforeend', alert);
            CKEDITOR.replace('alert_by_page_message_' + data.id);
            if (id != null)
                bootstrap.Modal.getInstance(document.getElementById('modal_by_page_' + id)).hide();
            else
                bootstrap.Modal.getInstance(document.getElementById('modal_by_page_' + page)).hide();

        } else {
            console.log(data);
        }
    });
}

function del_alert_by_page(id, app) {
    let url = '//' + app + '/ajax/del_alert_by_page.php';
    let data = {
        id: id
    };
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(url, options).then(response => response.json()).then(data => {
        if (data.error == false) {
            document.getElementById('alert_by_page_' + id).remove();
            bootstrap.Modal.getInstance(document.getElementById('modal_by_page_' + id)).hide();
        } else {
            alert(data.error);
        }
    });
}
