//
// $(window).on('resize', function(){
//       var win = $(this);
//       if (win.width() > 900) {
//
//       $('#home-post').addClass('pull-right');
//
//       }
//     else
//     {
//         $('#home-post').removeClass('pull-right');
//     }
//     })
//

$(document).ready(function() {

  $('#confirm-delete').on('show.bs.modal', function(e) {

      var id = e.relatedTarget.getAttribute('href');
      a = $(e.relatedTarget).data('href');
      // var id = /\d+/.exec(url);
      $('.modal-body').html('Are you sure that you want to delete post with id ' +  id + '?');
      $(this).find('.btn-ok').attr('href', $(e.relatedTarget).data('href'));
  });

});
