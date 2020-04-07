// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(function () {
    $("#loaderbody").addClass("hide");

    $(document).bind('ajaxStart', function () {
        $("#loaderbody").removeClass("hide");
    }).bind('ajaxStop', function () {
        $("#loaderbody").addClass("hide");
    });
});

// #Open modal Add or Edit Transaction
showInPopup = (url, title) => {
    $.ajax({
        type: "GET",
        url: url,
        success: function (res) {
            $("#form-modal .modal-body").html(res);
            $("#form-modal .modal-title").html(title);
            $("#form-modal").modal('show');
        }
    });
};

// #Open Toast notifycation
showInToast = (icon, title) => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
    });

    Toast.fire({
        icon: icon,
        title: title
    });
};

// #Requisition Ajax Post form
jQueryAjaxPost = form => {

    try {
        $.ajax({
            type: "POST",
            url: form.action,
            data: new FormData(form),
            contentType: false,
            processData: false,
            success: function (res) {
                if (res.isValid) {
                    $("#view-all").html(res.html);
                    $("#form-modal .modal-body").html('');
                    $("#form-modal .modal-title").html('');
                    $("#form-modal").modal('hide');

                    showInToast('success','submitted successfully');

                } else {
                    $("#form-modal .modal-body").html(res.html);
                }
            },
            error: function (err) {
                console.log(e);
            }
        });
    } catch (e) {
        console.log(e);
    }

    //to prevent default form submit event
    return false;
};

// #Requisition Ajax Post Delete
jQueryAjaxDelete = form => {
    if (confirm('Are you sure to delete this record?')) {
        try {
            $.ajax({
                type: "POST",
                url: form.action,
                data: new FormData(form),
                contentType: false,
                processData: false,
                success: function (res) {
                    $("#view-all").html(res.html);
                    showInToast('success', 'delete successfully');
                },
                error: function (err) {
                    console.log(e);
                }
            });
        } catch (e) {
            console.log(e);
        }
    }

    //to prevent default form submit event
    return false;
};