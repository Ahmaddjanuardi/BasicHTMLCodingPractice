$(document).ready(function(){
    $("#btnSubmit").submit(function (e){
        e.preventDefault();
        window.scrollTo(0, 0);
        $("#divAlert").removeClass("d-none");
        const nama = $("#inputNama").val();
        $("#alertText").html("Halo " + nama);
    });
    $("#btnClose").click(function (){
        $("#divAlert").addClass("d-none");
    });

    //DRY MODE

    $("#img1").click(function(e){
        e.preventDefault();
        const img1 = $("#img1").attr("src");
        $("#imgParent").attr("src", img1);
        $("#imgParent").css("height", "600px");
        $("#imgParent").css("width", "550px");
    });    
    $("#img2").click(function(e){
        e.preventDefault();
        const img1 = $("#img2").attr("src");
        $("#imgParent").attr("src", img1);
        $("#imgParent").css("height", "600px");
        $("#imgParent").css("width", "550px");
    });    
    $("#img3").click(function(e){
        e.preventDefault();
        const img1 = $("#img3").attr("src");
        $("#imgParent").attr("src", img1);
        $("#imgParent").css("height", "600px");
        $("#imgParent").css("width", "550px");
    });    
    $("#img4").click(function(e){
        e.preventDefault();
        const img1 = $("#img4").attr("src");
        $("#imgParent").attr("src", img1);
        $("#imgParent").css("height", "600px");
        $("#imgParent").css("width", "550px");
    }); 

    //Alert succes
    $("#formShipping").submit(function(e){
        e.preventDefault();
        $(this).addClass("d-none");
        $("#alert").removeClass("d-none");
        const firstname = $("#firstName").val();
        const lastname = $("#lastName").val();
        $("#title").html("Terima Kasih " + firstname +" "+ lastname);
        const isi = $("#address").val();
        $("#Isi").html("Paket akan dikirim ke " + isi);
    });
});
