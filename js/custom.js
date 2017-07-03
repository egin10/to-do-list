// event saat diklik
$('.page-scroll').on('click', function (e)
{
	
	//ambil isi href
	var tujuan = $(this).attr('href');
	
	//tangkap element yang bersangkutan
	var elementTujuan = $(tujuan);
	
	$('body').animate(
	{
		scrollTop : elementTujuan.offset().top - 44
	}, 1250, 'swing');
	//console.log(elementTujuan);
	e.preventDefault();
});

$(window).scroll(function ()
{
	var wScroll = $(this).scrollTop();
	
	console.log(wScroll);
	
	
	if(wScroll > 717)
	{
		$('.navbar-default').addClass('navbar-fixed-top');
	}
	else
	{
		$('.navbar-default').removeClass('navbar-fixed-top');
	}
})





$(document).on('click','.menu', function(tambah)
		{
				tambah.preventDefault();
				var id = $(this).attr('href');
				
				//$('#modal-body').html('<img id="gambar_modal" src="img/portfolio/'+id+'/1.png">');
				//$('#prev').html('<button class="prev_btn" data-id="1" data-id_img="'+id+'"><</button>');
				//$('#next').html('<button class="next_btn" data-id="1" data-id_img="'+id+'">></button>');
				//$('#bodi_utama').html('<div id="page_home">Dia mengklik '+id+'</div>');
				
				if(id == 'home')
				{
					$('#bodi_utama').html('<div id="page_home">Welcome M Nur Alfiansyah</div>');
					$('#menu_home').css("background-color","blue");
					$('#menu_todolist').css("background-color","white");
					$('#menu_about').css("background-color","white");
				}
				else if (id == 'todolist')
				{
					$('#bodi_utama').html('<div id="page_home">Kegiatan Apa yang di Lakukan Hari ini</div>');
					$('#menu_home').css("background-color","white");
					$('#menu_todolist').css("background-color","blue");
					$('#menu_about').css("background-color","white");
				}
				else if (id == 'about')
				{
					$('#bodi_utama').html('<div id="page_home">Aplikasi Ini di Buat Hanya Untuk Sekedar Hoby Saja</div>');
					$('#menu_home').css("background-color","white");
					$('#menu_todolist').css("background-color","white");
					$('#menu_about').css("background-color","blue");
				}

				//alert(id);
				
		})	
		
		
		
$(document).on('click','.menu_dp', function(tambah)
		{
				tambah.preventDefault();
				var id = $(this).attr('href');

				
				
				if(id == 'setting')
				{
					$('#bodi_utama').html('<div id="page_home">Ganti Password <br> Ganti Muka</div>');
					$('#menu_home').css("background-color","white");
					$('#menu_todolist').css("background-color","white");
					$('#menu_about').css("background-color","white");
				}
				else if(id == 'logout')
				{
					$('#all_bodi').html('<section><div class="container"><div class="row"><div class="col-xs-12 text-center"><br><br><br><img id="logo" src="img/logo.png"></div></div></div>');
					$('#li_login').html('<li><a href="#" data-toggle="modal" data-target="#myModal">Login</a></li>');
				}
		})
		
$(document).on('click','button#btn_login', function(tambah)
		{
				tambah.preventDefault();
					
				var nama = $('#nama').val();
				var pass = $('#password').val();
				
				if ((nama == 'admin') && (pass == 'admin'))
				{
					//alert('berhasil');
					$('#all_bodi').html('<div class="col-md-2"  id="menu_kiri" style="background-color: #fff; min-height : 500px;"><br><br><br>Side Menu<ul><li class="menu_kiri" id="menu_home"><a href="home" class="menu"> Home </a></li><li class="menu_kiri" id="menu_todolist"><a href="todolist" class="menu"> To Do List </a></li><li class="menu_kiri" id="menu_about"><a href="about" class="menu"> About </a></li></ul></div><div class="col-md-1 text-center"><div id="vr"></div></div><div class="col-md-7 text-center"><div id="bodi_utama" ><br><br><img id="logo" src="img/logo.png"></div></div>');
					$('#li_login').html('<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">M Nur Alfiansyah<span class="caret"></span></button><ul class="dropdown-menu"><li><a class="menu_dp" href="setting">Setting</a></li><li><a class="menu_dp" href="logout">Logout</a></li></ul>');
					$('#li_a_login').remove();
					$('#nama').val('');
					$('#password').val('');
				}
				else
				{
					alert('gagal');
				}
		})		