// window.onscroll = function () {
//     bgHeader();
// };

// function bgHeader() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         document.getElementById("header").style.backgroundColor = '#1f1f1f';
//     } else {
//         document.getElementById("header").style.backgroundColor = 'transparent';
//     }
// }






$(document).ready(function () {

    $('#navbar-btn').click(function () {
        if ($('#header')) {
            $('#header').css('background-color', '#1f1f1f');
        }
    });

    $("#slider-range").slider({
        range: true,
        min: 18,
        max: 100,
        values: [36, 50],
        slide: function (event, ui) {
            $("#age").val(ui.values[0] + " - " + ui.values[1]);
        }
    });
    $("#age").val($("#slider-range").slider("values", 0) +
        " - " + $("#slider-range").slider("values", 1));


    /* Remove read-msg and check-profile */
    $('.remove').click(function () {
        $(this).parent().parent().css('display', 'none');
    });


    $('#edit-btn-info').click(function () {
        $('.user-profile-info-wrapper').css('display', 'flex');
    });

    $('#close-edit-form-info').click(function () {
        $('.user-profile-info-wrapper').css('display', 'none');
    });


    $('#edit-btn-general-info').click(function () {
        $('.user-profile-general-info-edit-wrapper').css('display', 'flex');
    })

    $('#close-edit-form').click(function () {
        $('.user-profile-general-info-edit-wrapper').css('display', 'none');
    });



    $('#edit-btn-about').click(function () {
        $('.user-profile-about-edit-wrapper').css('display', 'flex');
    });

    $('#close-edit-form-about').click(function () {
        $('.user-profile-about-edit-wrapper').css('display', 'none');
    });


    /* OPEN CHATBOX */
    $('.new-msg').click(function () {
        $('.messanger').css('display', 'block');
    });


    /* HIDE AND SHOW CHATBOX MESSAGE */
    $('.messanger').each(function (index, element) {

        var chatboxBody = $(element).find('.messanger-body');
        var chatboxFooter = $(element).find('.messanger-footer');

        $(element).find('.messanger-header').click(function () {
            $(this).find('.minimize-icon').toggleClass('minimaze-changed-icon');
            $(chatboxBody).toggleClass('chatbox-hidden');
            $(chatboxFooter).toggleClass('chatbox-hidden');
        });

        $(element).children().find('.remove-messanger').click(function () {
            $(element).css('display', 'none');
        });

    });




    /* move overflow-y to the bottom */
    $('.single-chatbox-body').scrollTop($('.single-chatbox-body')[0].scrollHeight);

});

var inputs = document.querySelectorAll( '.input-file' );
Array.prototype.forEach.call( inputs, function( input )
{
    var label	 = input.nextElementSibling,
        labelVal = label.innerHTML;
    console.log(input)
	input.addEventListener( 'change', function( e )
	{
		var fileName = '';
		if( this.files && this.files.length > 1 )
			fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
		else
			fileName = e.target.value.split( "\ " ).pop();

		if( fileName )
			label.querySelector( 'span' ).innerHTML = fileName;
		else
			label.innerHTML = labelVal;
	});
});


/* Drop image file */

function dropImage() {
    var dragAndDrop = document.getElementById('file-upload-area');

    var startUpload = function (files) {
        console.log(files);
    }

    dragAndDrop.ondrop = function (e) {
        e.preventDefault();
        this.className = 'file-upload-area';

        startUpload(e.dataTransfer.files);

    }

    dragAndDrop.ondragover = function () {
        this.className = 'file-upload-area drop';
        return false;
    }

    dragAndDrop.ondragleave = function () {
        this.className = 'file-upload-area';
        return false;
    }
}

dropImage();





/* singleChat send message */

// var singleChatInput = document.querySelector('#single-chatbox-input');
// var singleChatSendBtn = document.getElementsByClassName('single-chatbox-footer-elements-send')[0];
// var singleChatboxBody = document.getElementsByClassName('single-chatbox-body')[0];


// singleChatSendBtn.addEventListener('click', function () {
//     var newMsgDiv = document.createElement('div');
//     newMsgDiv.classList.add('single-chatbox-send');
//     var newMsgDivInner = document.createElement('div');
//     newMsgDivInner.classList.add('single-chatbox-send-text');
//     var newMsgDivInnerP = document.createElement('p');

//     newMsgDivInnerP.innerHTML = singleChatInput.value;

//     newMsgDivInner.appendChild(newMsgDivInnerP);
//     newMsgDiv.appendChild(newMsgDivInner);

//     singleChatboxBody.appendChild(newMsgDiv);

//     singleChatInput.value = '';
// });