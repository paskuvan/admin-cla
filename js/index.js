$(document).ready(function () {
    $("#select-product").change(function () {
        var val = $(this).val();
        if (val) {
            document.getElementById('select-period').disabled = false;
        }
    });
    $("#select-period").change(function () {
        var val = $(this).val();
        if (val) {
            document.getElementById('result-table-data').style.display = 'block';
        }
    });
    $("#select-entreprise").change(function () {
        var val = $(this).val();
        if (val) {
            document.getElementById('div-product-period-selection').style.display = 'block';
        }
    });
    $("#select-type-file").change(function () {
        var value = $(this).val();
        if (value == 'txt' || value == 'csv') {
            document.getElementById('div-include-headers').style.display = 'block';
        } else {
            document.getElementById('div-include-headers').style.display = 'none';
        }
    });
});

function checkAll(inputCheckAll) {
    var inputCheckbox = document.getElementsByTagName('input');
    var downloadButton = document.getElementsByClassName('download-file');
    for(var i=0; i < inputCheckbox.length; i++) {
        if(inputCheckbox[i].type == 'checkbox') {
            inputCheckbox[i].checked = inputCheckAll.checked;
            if (!inputCheckbox[i].checked && i > 0) {
                downloadButton[i-1].style.display = 'initial';
            } else  if (inputCheckbox[i].checked && i > 0){
                downloadButton[i-1].style.display = 'none';
            }
        }
    }
    var isAllChecked = document.getElementById('check-all-downloads');
    if (isAllChecked.checked) {
        document.getElementById('download-all-button').style.display = 'initial';
    } else {
        document.getElementById('download-all-button').style.display = 'none';
    }
}

function downloadFilesSelected(inputCheck) {
    var inputCheckSelected = document.getElementsByClassName('input-check-downloads');
    var downloadButton = document.getElementsByClassName('download-file');
    var count = 0;
    for (var i = 0; i < inputCheckSelected.length; i++) {
        if (inputCheckSelected[i].checked) {
            count++;
        }
        if (count > 1 && i > 0) {
            document.getElementById('download-all-button').style.display = 'initial';
        } else if (i > 0) {
            document.getElementById('download-all-button').style.display = 'none';
        }
    }

    for (var j = 0; j < inputCheckSelected.length; j++) {
        if (inputCheckSelected[j].checked && count > 1) {
            downloadButton[j].style.display = 'none';
        } else if (!inputCheckSelected[j].checked) {
            downloadButton[j].style.display = 'initial';
        } else if (count == 1) {
            downloadButton[j].style.display = 'initial';
        }
    }
}