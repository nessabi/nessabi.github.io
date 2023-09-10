$(`.page-scroll`).on(`click`, function(e){
    let tujuan = $(this).attr(`href`);
    let elementTujuan = $(tujuan)
    $(`html,body`).animete({
        scrollTop: elementTujuan.offset().top-50}, 1250, `swing`
    );

    e.preventDefault();
})