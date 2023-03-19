$.mobile.allowCrossDomainPages = true;
_debug = false;

var popUp;
var city_id='';
var category_id='';

var gallery_cat='';
var galstr='';
var player_cat='';
var fix_cat='';

var reg_id="";
var backstore ="";
var lastattemptpage='';

var shop_img='';
var pan_img='';
var aadhar_img='';

var file_pphoto='';
var file_pdoc='';
var file_adimg_front='';
var file_adimg_back='';
var doc_img='';


var json_fb='https://taghash.co/mloyalApps/facebooknayaraenergy.php';
var RSS_twitter='https://taghash.co/mloyalApps/twitter.php?uname=nayaraenergyhome';
var RSS_pinterest='http://103.25.128.61/projects/taghash/mloyalApps/pinteresttantra.php?brand=nayaraenergy';
var RSS_instagram='https://www.instagram.com/nayaraenergy/?__a=1';
var RSS_youtube='http://xceedfbapps.com/mloyalfeeds/youtube.php?brandname=nayaraenergy';
var RSS_tumblr='http://xceedfbapps.com/mloyalfeeds/tumblr.php?brandurl=http://nayaraenergy.tumblr.com';

var brandname='nayaraenergy';
var aboutus_det='nayaraenergy';
var brand_url='https://www.nayaraenergy.com/';
var cart = { cartdata: []};
var indexary=new Array();
var ids = [];
var cityarr=new Array();
var cityidarr=new Array();

user = {
	"balance" : 0,
	"firstname" : "",
	"id" : "",
	"lastname" : "",
	"total" : 0,
	"validity" : "",
	"mobile" : "",
	"datatype":"",
	"other_mobile_no":"",
	"Upi_id":"",
	"store_code_nayaraenergy" : "",
	"email":"",
	"dob":"",
	"membership_slab":"",
	"pincode":"",
	"city":"",
	"age":"",
	"locationn":"",
    "address":"",
	"district":"",
	"gender":"",
	"cattype_ex":"",
	"gst_no":"",
	"pan_no":"",
	"aadhar_no":"",
	"p_photo":"",
	"state":"",
	"IsApproved_se":"",
	"totalpurchaseval":"",
	"totalpurchaseval_approved":"",
	"cashback":"",
	"Nature_Workshop":"",
	"Vehicle_Type":"",
	"vehicleno":"",
	"vehicletype":"",
	"vpa1":"",
	"vpa2":"",
	"card1":"",
	"card2":"",
	"card1_cvv":"",
	"card2_cvv":"",
	"card1_expiry":"",
	"card2_expiry":"",
	"No_of_Mechanics":"",
	"Potential":"",
	"Charger_Available":"",
	"Preferred_Language":"",
	"Preferred_Payment_mode":"",
	"Shop_Name":"",
	"ShopPhoto":"",
	"docPhoto":"",
	"adhPhoto":"",
	"adimg_front":"",
	"adimg_back":"",
	"refer_code":"",
	"manpower":"",
	"infrastructure":"",
	"bankaccountno":"",
	"ongoing_sites":"",
	"completed_sites":"",
	"source":"",
	"point_claim":"",
	"ao_code":"",
	"ao_name":"",
	"mobile_alt":"",
	"uid_nayaraenergy":""

};

store = {
	"store_id" : "",
    "store_name" : "",
	"store_category" : "",
    "redeem_logic" : "",
    "store_members" : "",
	"store_rank" : "",
	"storecode ":"",
	"storefirstname ":"",
	"secode ":"",
	"sename ":"",
	"storemobile":""
};

var SERVER = "https://nayaraenergy.mloyalretail.com/m/";
var SERVER1 = "https://nayaraenergy.mloyalretail.com/";
var SERVER2 = "https://nayaraenergy.mloyalretail.com/APIs/";
var SERVER3 = 'https://nayaraenergy.mloyalretail.com/Rewards/';
var GSERVER2 = "https://nayaraenergy.mloyalretail.com/APIs/";
var GSERVER22 = "https://nayaraenergy.mloyalretail.com/APIs/";


var gbrd='EEDB9B2B-9F25-4304-8C54-9F003441177B';



var SERVER_m = "https://mliveshare.com/"; 
var SERVER1_m = "https://mliveshare.com/user/";
var BITLYS = "https://mliveshare.com/";
var versionurl  ='https://taghash.co/';
var versionurl1  ='https://taghash.co/';


var app_versionCode = '2';

$(document).ready(function(event){
	// $(".scan-point-btn, .scan-inner-container-top").on("click", function(){
	// 	$("#scan-points").hide();
	//   });
	// $(".fthumb-icon").on("click", function(){
	// 	$("#scan-points").show();
	// });

	$( function() {
		 $("#optionspop_profile").enhanceWithin().popup();
		 $("#tnc_popup").enhanceWithin().popup();
	});

	$("#wait").css("display","none");
	
	$(document).ajaxStart(function() {
		   $("#wait").css("display","block");
		});
	  
	$(document).ajaxStop(function() {
		   $("#wait").css("display","none");
		});

	localStorage.setItem('selectedstorenayaraenergy',gbrd);

	//loadState_list();
	//proloadState_list();
	//loadLocation();
	//setToday_date();

	document.addEventListener("backbutton", function(e)
	{
		   if($.mobile.activePage.is('#page-forgot-password'))
		   {
				navigator.app.exitApp();
		   }
		   if($.mobile.activePage.is('#homepage'))
		   {
			   e.preventDefault();
			   var x;
				if (confirm("Are you sure you want to exit?") == true) {
					x = "Yes";
					navigator.app.exitApp();
				} else {
					x = "No";
				}
			   
		   }
		   else 
		   {
			   navigator.app.backHistory();
		   }
	 }, false);


				if(localStorage.getItem("usernamenayaraenergy")!=null && localStorage.getItem("usernamenayaraenergy")!='' && localStorage.getItem("passwordnayaraenergy")!=null && localStorage.getItem("passwordnayaraenergy")!='')
				{
						$('#username_new').val(localStorage.getItem("usernamenayaraenergy"));
						var pass = localStorage.getItem("passwordnayaraenergy");

						if(pass.length>=4)
						{
						  var i=4;
						  while(i>0)
								  {
									$('#codeBox'+i).val(parseInt(pass%10));
									i--;
									pass = parseInt(pass/10);
									
								  }
						}

						//$('#password_myacc').val(localStorage.getItem("passwordnayaraenergy"));
						user.mobile = localStorage.getItem('usernamenayaraenergy');
						var pwd = localStorage.getItem('passwordnayaraenergy');
						var uname = user.mobile;
						user.balance = localStorage.getItem('balance');
						user.firstname = localStorage.getItem('firstname');
						user.lastname = localStorage.getItem('lastname');
						user.id = localStorage.getItem('id');
						user.total = localStorage.getItem('total');
						user.validity = localStorage.getItem('validity');
						user.trans_sms = localStorage.getItem('trans_sms');
						user.mktgsms = localStorage.getItem('mktgsms');
						user.cpns = localStorage.getItem('cpns');
						user.ads = localStorage.getItem('ads');
						user.dob = localStorage.getItem('dob');
						user.emailid = localStorage.getItem('emailid');
						user.store_code_nayaraenergy = localStorage.getItem('store_code_nayaraenergy');
						user.def_store = localStorage.getItem('def_store');
						user.def_city = localStorage.getItem('def_city');
						user.visit_frequency = localStorage.getItem('visit_frequency');
						user.membership_slab = localStorage.getItem('membership_slab');
						
						if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
							user.firstname = '';
						if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
								user.lastname = '';
						if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
								user.emailid = '';
						if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
								user.dob = '';
						if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
								user.mobile = '';
						if(user.balance=='undefined' || user.balance=='null' || user.balance==null)
								user.balance = '0';
						
						$('#update_firstname').val(user.firstname);
						$('#update_lastname').val(user.lastname);

							var dob = user.dob.split('-');
							var mm = dob.length == 3 ? dob[1] : '';
							var dd = dob.length == 3 ? dob[0] : '';
							var yyyy = dob.length == 3 ? dob[2] : '';
							
							/*$('#update_dd').val(dd);
							$('#update_mm').val(mm);
							$('#update_yyyy').val(yyyy);*/

						$('#update_email').val(user.emailid);
						//$('#update_dob').val(user.dob);

						// document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;

						if(user.firstname != '' || user.lastname != ''){
							var fn = user.firstname.substring(0, 1);
							var ln = user.lastname.substring(0, 1);
						}

						document.getElementById("sortname").innerHTML= fn+''+ln;

// **********************************************PROFILE PAGE CHANGES**********************************************
						document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
						document.getElementById("profilepts").innerHTML=user.balance;
						document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
						document.getElementById("profilepts1").innerHTML=user.balance;

						var dob = user.dob.split('-');
			            mm = dob.length == 3 ? dob[1] : '';
			            dd = dob.length == 3 ? dob[0] : '';
			            dd1 = dob.length == 3 ? dob[0] : '';
			            yyyy = dob.length == 3 ? dob[2] : '';
			            yyyy1 = dob.length == 3 ? dob[2] : '';
                        $('#update_dob').val(yyyy+'-'+mm+'-'+dd);


						//document.getElementById("homeshort_nm").innerHTML= user.firstname.substring(0, 1);
						document.getElementById("pr_valid").innerHTML = user.validity;
						
						 $("#wait").css("display","none");

						 $.mobile.changePage( "#gifslider", { transition: "none"} );
						 setTimeout( function() {
							authenticate_new();
						 }, 2000);  // 2 seconds

						 
						if(imageExists('https://taghash.co/NayaraEnergy/uploads/nayaraenergy_'+localStorage.getItem("usernamenayaraenergy")+'.jpg'))
						{
							document.getElementById("update_photo1").src='https://taghash.co/NayaraEnergy/uploads/nayaraenergy_'+localStorage.getItem("usernamenayaraenergy")+'.jpg';
						}           
				 }
				 else if(localStorage.getItem("usernamenayaraenergy")!=null && localStorage.getItem("usernamenayaraenergy")!='' && (localStorage.getItem("passwordnayaraenergy")==null || localStorage.getItem("passwordnayaraenergy")=='')) 
				 {
						$('#username_new').val(localStorage.getItem("usernamenayaraenergy"));
						$.mobile.changePage( "#login_pg_new", { transition: "none"} );
				 }
				 else
				 {	
						$.mobile.changePage( "#page-forgot-password", { transition: "none"} );
						//$.mobile.changePage( "#login_pg", { transition: "none"} );
				 }

});

var toast = function (msg) {
    $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h5>" + msg + "</h5></div>")
            .css({display: "block",
                opacity: 0.97,
                position: "fixed",
                padding: "7px",
                "text-align": "center",
                width: "270px",
                background: "#19b9b5",
                "text-shadow": "none",
                "color": "#ffffff",
                left: ($(window).width() - 284) / 2,
                top: $(window).height() / 2})
            .appendTo($.mobile.pageContainer).delay(1500)
            .fadeOut(400, function () {
                $(this).remove();
            });
}

var toast_p = function (msg) {
    $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h5>" + msg + "</h5></div>")
            .css({display: "block",
                opacity: 0.97,
                position: "fixed",
                padding: "7px",
                "text-align": "center",
                width: "270px",
                background: "#19b9b5",
                "text-shadow": "none",
                "color": "#ffffff",
                left: ($(window).width() - 284) / 2,
                top: $(window).height() / 2})
            .appendTo($.mobile.pageContainer).delay(5500)
            .fadeOut(400, function () {
                $(this).remove();
            });
}

function forget_pswd_confirm()
{ 
		 if($("#tnc-chck1").is(":checked"))
		 {
			forget_pswd();
		 }
		 else
		 {
			toast('Please agree to all terms and conditions');	 
		 }
}

function forget_pswd()
{
	 var mob = $('#forgot_mobile').val();
	 
	 if(mob=='')
	 {
		 toast('Please enter your mobile number');
	 }
	 else if(mob.length==10)
	 {
		 //$.mobile.changePage("#login_pg");
		 $.ajax({
			url: SERVER+'forgot_pswd.asp',
			type: 'GET',
			timeout: 30000,
			data: {'mobileno': mob},
			success: function(data, textStatus, xhr) {
			 console.log(data);
			 console.log(textStatus);
			 if(data.toLowerCase()=='success'){
				 //startWatch();
				 
				 toast('OTP has been sent to your mobile.Please check your SMS.');
			  
				  localStorage.setItem("SMSMNO",mob);
				 
			      //$('#username').val(mob);
				  $('#username_new').val(mob);
				  localStorage.setItem('usernamenayaraenergy',mob);
				 
				  $.mobile.changePage("#login_pg_new");
				  $.mobile.changePage("#otp_pg");
				  
              }
			  else
			  {
				 toast(mob+' is not valid.');
				 $('#forgot_mobile').val('');
			  }
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				   toast('Could not connect to Server, make sure you are connected to Internet');
				}
		});
  }
  else
  {
	  toast('Please enter 10 digits mobile number');
  }
}

// event.which  : The event.which property returns which keyboard key or mouse button was pressed for the event.
// event.keyCode  : Get the Unicode value of the pressed keyboard key
function onKeyUpEvent(index, event) {
	const eventCode = event.which || event.keyCode;
	if (getCodeBoxElement(index).value.length === 1) {
	  if (index !== 4) {
		getCodeBoxElement(index+ 1).focus();
	  } else {
		getCodeBoxElement(index).blur();
		// Submit code
		console.log('submit code ');
	  }
	}
	if (eventCode === 8 && index !== 1) {
	  getCodeBoxElement(index - 1).focus();
	}
  }
  function onFocusEvent(index) {
	for (item = 1; item < index; item++) {
	  const currentElement = getCodeBoxElement(item);
	  if (!currentElement.value) {
		  currentElement.focus();
		  break;
	  }
	}
  }

  function getCodeBoxElement(index) {
	return document.getElementById('codeBox' + index);
  }

  
function authenticate_new()
{
  var uname = $('#username_new').val();
  var pwd = $('#codeBox1').val()+$('#codeBox2').val()+$('#codeBox3').val()+$('#codeBox4').val();

  var phno = localStorage.getItem("phno");
    
  if(phno=='')
		JSON.stringify(phonenos);
  else
	phno='';
 if(uname=='' || pwd==''){
  toast('Please enter Mobile Number /Passcode');
 }
 else{
  $.ajax({
   url: SERVER+'mloyallogin_json.asp', //login.php
   type: 'GET',
   timeout: 50000,
    dataType: 'json', //xml/html/script/json/jsonp
    data: {'username': uname, 'password': pwd},
    complete: function(xhr, textStatus) {
    },
    success: function(data, textStatus, xhr) {
   
	console.log("success"+JSON.stringify(data));
   if(data.status=='success'){
    user.balance = data.balance;
    user.firstname = data.firstname;
    user.id = data.id;
    user.lastname = data.lastname;
    user.total = data.total;
    user.validity = data.validity;
    user.mobile = uname;
	user.trans_sms = data.trans_sms;
	user.mktgsms = data.mktgsms;
	user.cpns = data.cpns;
    user.ads = data.ads;
	user.state = checkforundefined(data.cust_state);
    user.dob = data.dob;
    user.emailid = checkforundefined(data.emailid);
	user.store_code_nayaraenergy = checkforundefined(data.storecode);
	user.def_store = checkforundefined(data.store);
	user.datatype = checkforundefined(data.IdProof_Name);
	user.city = checkforundefined(data.cust_city);
	user.district = checkforundefined(data.Distict);
	user.floor_flat = data.floor_flat;
	user.visit_frequency = data.visit_frequency;
	user.membership_slab = checkforundefined(data.slabid);
	user.uid_nayaraenergy = checkforundefined(data.uid);

	user.vehicletype = checkforundefined(data.Vehicle_type);
	user.vpa1 = checkforundefined(data.VPA1);
	user.vpa2 = checkforundefined(data.VPA2);
	user.card1 = checkforundefined(data.card_number1);
	user.card2 = checkforundefined(data.card_number2);

	user.card1_cvv = checkforundefined(data.Card1_CVV_Number);
	user.card2_cvv = checkforundefined(data.Card2_CVV_Number);
	user.card1_expiry = checkforundefined(data.Card1_Expiry_Date);
	user.card2_expiry = checkforundefined(data.Card2_Expiry_Date);


	user.source = checkforundefined(data.source);
	user.point_claim = checkforundefined(data.point_claim);

	user.ao_code = checkforundefined(data.Area_Office_code);
	user.ao_name = checkforundefined(data.Area_Office_Name);
	user.IsApproved_se = checkforundefined(data.IsApproved);
	user.QtyReqForNextSlab = checkforundefined(data.QtyReqForNextSlab);

	if(user.source=='')
	user.source ='self';

	user.proprietorname = checkforundefined_nonblank(data.ProprietorName);
	user.sapcode = checkforundefined_nonblank(data.SapCode);
    
	user.gender = checkforundefined(data.Gender);
    user.pincode = checkforundefined(data.PostalCode);
	user.address = checkforundefined(data.Address);
	user.userstate = checkforundefined(data.store_state_id);
	user.district11 = checkforundefined(data.district);
	user.aadhar_no =  checkforundefined(data.aadhar_card_no);
    user.adimg_front = checkforundefined(data.aadhar_front_photo);
    user.adimg_back = checkforundefined(data.aadhar_back_photo);
	//user.refer_code = checkforundefined(data.Ref_code);

	
	user.manpower = checkforundefined(data.Manpower);
	user.infrastructure = checkforundefined(data.Infrastructure);
	user.bankaccountno = checkforundefined(data.AccountNo);
	user.gst_no = checkforundefined(data.GstNo);
	user.qualification  = checkforundefined(data.Qualification);
	user.ongoing_sites = checkforundefined(data.OngoingSites);
	user.completed_sites  = checkforundefined(data.CompleteSites);
	user.p_photo = checkforundefined(data.ProfilePphoto);

	if(user.cpns==null || user.cpns=='null' || user.cpns=='undefined')
		user.cpns='0';

	console.log("user.firstname:"+user.firstname);
    
    $('#username').val('');
    $('#password_myacc').val('');
  
   localStorage.setItem('usernamenayaraenergy',uname);
   localStorage.setItem('passwordnayaraenergy',pwd);
   localStorage.setItem('balance',user.balance);
   localStorage.setItem('firstname',user.firstname);
   localStorage.setItem('lastname',user.lastname);
   localStorage.setItem('id',user.id);
   localStorage.setItem('total',user.total);
   localStorage.setItem('validity',user.validity);
   localStorage.setItem('trans_sms',user.trans_sms);
   localStorage.setItem('mktgsms',user.mktgsms);
   localStorage.setItem('cpns',user.cpns);
   localStorage.setItem('ads',user.ads);
   localStorage.setItem('dob',user.dob);
   localStorage.setItem('emailid',user.emailid);
   localStorage.setItem('def_store',user.def_store);
   localStorage.setItem('def_city',user.def_city);
   localStorage.setItem('visit_frequency',user.visit_frequency);
   localStorage.setItem('membership_slab',user.membership_slab);
   // localStorage.setItem('passworddd',pwd);

	
 if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null)
	    user.firstname = '';
 if(user.lastname=='undefined' || user.lastname=='null' || user.lastname==null)
		user.lastname = '';
 if(user.emailid=='undefined' || user.emailid=='null' || user.emailid==null)
		 user.emailid = '';
 if(user.dob=='undefined' || user.dob=='null' || user.dob==null)
		 user.dob = '';
 if(user.mobile=='undefined' || user.mobile=='null' || user.mobile==null)
		user.mobile = '';
 if(user.store_code_nayaraenergy=='undefined' || user.store_code_nayaraenergy=='null' || user.store_code_nayaraenergy==null)
			user.store_code_nayaraenergy = 'HO-001';

	$('#update_firstname').val(user.firstname);
	$('#update_lastname').val(user.lastname);
	$('#update_email').val(user.emailid);
	//$('#update_aadharno').val(user.aadhar_no);

	//$('#update_address').val(user.floor_flat);
	$('#update_mobile').val(user.mobile);

	$('#update_vtype').val(user.vehicletype);

	if(user.vpa1.indexOf("@")>=0)
	{
		$('#update_vpa1_txt').val(user.vpa1.split('@')[0]);
	    $('#update_vpa1_domain').val('@'+user.vpa1.split('@')[1]);
	}

	if(user.vpa2.indexOf("@")>=0)
	{
		$('#update_vpa2_txt').val(user.vpa2.split('@')[0]);
	    $('#update_vpa2_domain').val('@'+user.vpa2.split('@')[1]);
	}

	$('#update_card1').val(user.card1);
	$('#update_card2').val(user.card2);


   $('#update_card1_cvv').val(user.card1_cvv);
   $('#update_card2_cvv').val(user.card2_cvv);
   $('#update_card1_expire_date').val(user.card1_expiry);
   $('#update_card2_expire_date').val(user.card2_expiry);
    
	if(user.id != ''){
		var id1 = user.id.substring(0, 4);
		var id2 = user.id.substring(4, 8);
		var id3 = user.id.substring(8, 10);
	}
    if(user.firstname != '' || user.lastname != ''){
		var fn = user.firstname.substring(0, 1);
		var ln = user.lastname.substring(0, 1);
	}
	document.getElementById("sortname").innerHTML= fn+''+ln;
	document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
	document.getElementById("profilepts").innerHTML=user.balance;
    document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
    document.getElementById("profilepts1").innerHTML=user.balance;
	//document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;
	document.getElementById("pr_valid").innerHTML=user.validity;

	//document.getElementById("firm_nm").innerHTML= user.proprietorname;
	//document.getElementById("sap_code").innerHTML= user.sapcode;


  
	

	/*if(user.p_photo != '')
    {
		if(imageExists(user.p_photo))
		{
			document.getElementById("update_photo").src = user.p_photo;
			document.getElementById("update_photo_self").src = user.p_photo;
			document.getElementById("update_photo1").src = user.p_photo;
			localStorage.setItem('file_pphoto',user.p_photo);
		}
	}*/
	

	if(user.dob!='')
	{
			
		var dob = user.dob.split('-');
		mm = dob.length == 3 ? dob[1] : '';
		dd = dob.length == 3 ? dob[0] : '';
		yyyy = dob.length == 3 ? dob[2] : '';
		mm = mm.trim();
		dd = dd.trim();
		yyyy = yyyy.trim();
		if(dd.length == 1)
			dd = '0'+dd;
		if(mm.length == 1)
			mm = '0'+mm;
		$('#update_dob').val(yyyy+'-'+mm+'-'+dd);
		
	}

	
	
	if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
	{
		//document.getElementById('update_firstname').readOnly = false;
	    //document.getElementById('update_lastname').readOnly = false;

		$.mobile.changePage( "#profilepage", { transition: "flip"} );
    }
    else
    {
		   
	    /*if(localStorage.getItem("profiledone_nayaraenergy"))
		{
			
			if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
			{
				document.getElementById("profilenm").innerHTML= 'Guest';
				document.getElementById("profilenm1").innerHTML='Guest';
			}
			else
			{
				document.getElementById("sortname").innerHTML= fn+''+ln;
				document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
				document.getElementById("profilepts").innerHTML=user.balance;
				document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
				document.getElementById("profilepts1").innerHTML=user.balance;
				//document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;
				//document.getElementById("pr_valid").innerHTML=user.validity;
					
			}

			$.mobile.changePage( "#homepage", { transition: "flip"} );
		}
		else
		{
			 $.mobile.changePage( "#profilepage", { transition: "flip"} );
		}*/

		$.mobile.changePage( "#homepage", { transition: "flip"} );
    }

   }
   else
   {
		 toast('Authenticantion failed');
		 $.mobile.changePage( "#page-forgot-password", { transition: "flip"} );
   }
	
    },
    error: function(xhr, textStatus, errorThrown) {
	user.mobile = localStorage.getItem('usernamenayaraenergy');
	pwd = localStorage.getItem('passwordnayaraenergy');
	uname = user.mobile;
    user.balance = localStorage.getItem('balance');
    user.firstname = localStorage.getItem('firstname');
    user.lastname = localStorage.getItem('lastname');
    user.id = localStorage.getItem('id');
    user.total = localStorage.getItem('total');
    user.validity = localStorage.getItem('validity');
    user.trans_sms = localStorage.getItem('trans_sms');
    user.mktgsms = localStorage.getItem('mktgsms');
    user.cpns = localStorage.getItem('cpns');
    user.ads = localStorage.getItem('ads');
    user.dob = localStorage.getItem('dob');
    user.emailid = localStorage.getItem('emailid');
    user.def_store = localStorage.getItem('def_store');
    user.def_city = localStorage.getItem('def_city');
	user.visit_frequency = localStorage.getItem('visit_frequency');
    /*document.getElementById("pr_name").innerHTML=user.firstname+' '+user.lastname;
	document.getElementById("pr_id").innerHTML=user.id;
	document.getElementById("pr_dob").innerHTML=user.dob;
	//document.getElementById("pr_valid").innerHTML=user.validity;*/
	   if(localStorage.getItem("imagedata")!=null)
	   {
		//document.getElementById("cardImagemenu").src = localStorage.getItem("imagedata");
		//document.getElementById("cardImagepunch").src = localStorage.getItem("imagedata");
	   }
     }
   });
  }
}

function checkforundefined(str)
{
    if(typeof str==undefined || str=='undefined'|| str==null || str=='null')
    {
        str='';
    }
        return str;
}

function checkforundefined_nonblank(str)
{
    if(typeof str==undefined || typeof str==null || str=='undefined'|| str==null || str=='null')
    {
        str= '';
    }
        return str;
}

function imageExists(image_url){

    /*var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();
    return http.status != 404;*/

	return true;
}
    function gotomessages()
	{
		$("#message").css('display', 'block');
		//$("#membership2").css('display', 'none');
		$("#rewards").css('display', 'none');
		$("#points").css('display', 'none');

		
		$.mobile.changePage( "#my_membership", { transition: "none"} );
		showTabContent('inbox', 'msg_history_json.asp');
		

		//document.getElementById("tab1").classList.remove("is-active");
		document.getElementById("tab2").classList.add("is-active");
		document.getElementById("tab3").classList.remove("is-active");
		//document.getElementById("tab4").classList.remove("is-active");
	}

	function showTabContent(id, url) {
		console.log("url -> "+url);
		var tabserver='';
			if(id=='rewardstore' || id=='reward-cat' || id=='reward-brand')
			{
				tabserver = "https://nayaraenergy.mloyalretail.com/Rewards/";
			}
			else
			{
				tabserver = "https://nayaraenergy.mloyalretail.com/m/";
			}
			console.log("tabserver ->"+tabserver);
			console.log("user.mobile ->"+user.mobile);
			$.getJSON(
				tabserver+url, {
				//page: url,
				mno : user.mobile
				// mno : 9876543210
			}, function (json) {
			   console.log("SSSS"+JSON.stringify(json));
					
				renderTemplate(id, json);
			}).error(function () {
				alert("Error: Could not connect to Server, make sure you are connected to Network");
			});
		}

		function gotomembership()
		{
	
			$("#message").css('display', 'none');
			$("#membership2").css('display', 'block');
			$("#rewards").css('display', 'none');
			$("#points").css('display', 'none');
	
			//$("#sidebar").panel("close");
			renderTemplatedetail('aboutus');
			$.mobile.changePage( "#my_membership", { transition: "none"} );	
			//$("#contest_tabs").tabs( "option", "active", 0 );		
	
			document.getElementById("tab1").classList.add("is-active");
			document.getElementById("tab2").classList.remove("is-active");
			document.getElementById("tab3").classList.remove("is-active");
			document.getElementById("tab4").classList.remove("is-active");
		}

















		function renderTemplatedetail(pageID) {
			var str = '';
			
			
			
				switch (pageID) {
					
					
		case 'aboutus':

			console.log('cardname:-'+user.firstname+' '+user.lastname);
			document.getElementById("cardname").innerHTML = user.firstname+' '+user.lastname;
			//document.getElementById("cardname").innerHTML = user.firstname;
		    var uuu='';
			for(var i=0;i<user.id.length;i++)
		    {
             if(i%4==2)
				{
				 uuu = uuu + user.id.charAt(i) +'  ';
				}
			 else
				{
				 uuu = uuu + user.id.charAt(i);
				}
			}
			
			var mobileqr = '';
			if(user.mobile==null || user.mobile=='' || user.mobile=='undefined')
			{
				mobileqr = 'Guest';
			}
			else
		    {
				mobileqr = user.mobile;
			}

		    
			document.getElementById("barimg").innerHTML = '<img src="https://quickchart.io/qr?text='+mobileqr+'&size=80&margin=2" class="img-responsive" />';

			/*if(user.membership_slab=='1' || user.membership_slab=='')
            {
               document.getElementById('baseslab').className = '';
               document.getElementById('silverslab').className = '';
			   document.getElementById('goldslab').className = '';
		       document.getElementById('platinumslab').className = '';

		       document.getElementById('baseslab').className = 'active';
			   document.getElementById("mType").innerHTML = 'Base Member';
            }
            else if(user.membership_slab=='2')
            {
               document.getElementById('baseslab').className = '';
               document.getElementById('silverslab').className = '';
			   document.getElementById('goldslab').className = '';
		       document.getElementById('platinumslab').className = '';

		       document.getElementById('silverslab').className = 'active';
			   document.getElementById("mType").innerHTML = 'Silver Member';
            }
			else if(user.membership_slab=='4')
            {
               document.getElementById('baseslab').className = '';
               document.getElementById('silverslab').className = '';
			   document.getElementById('goldslab').className = '';
		       document.getElementById('platinumslab').className = '';

		       document.getElementById('goldslab').className = 'active';
			   document.getElementById("mType").innerHTML = 'Gold Member';
            }
			else if(user.membership_slab=='3')
            {
               document.getElementById('baseslab').className = '';
               document.getElementById('silverslab').className = '';
			   document.getElementById('goldslab').className = '';
		       document.getElementById('platinumslab').className = '';

		       document.getElementById('platinumslab').className = 'active';
			   document.getElementById("mType").innerHTML = 'Platinum Member';
            }*/

			setUserbalance_aboutus();
        

			break;
			
					case 'page-card':
						
						document.getElementById("barcontent").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn.png" class="mem_acc_icon"></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
						//document.getElementById("welcomehome").innerHTML = 'Welcome '+user.firstname+' '+user.lastname;
						document.getElementById("cardname").innerHTML = user.firstname+' '+user.lastname;
						var uuu='';
						for(var i=0;i<user.id.length;i++)
						{
						 if(i%4==2)
							{
							 uuu = uuu + user.id.charAt(i) +'  ';
							}
						 else
							{
							 uuu = uuu + user.id.charAt(i);
							}
						}
						document.getElementById("cardid").innerHTML = uuu;
						document.getElementById("valid").innerHTML = user.validity;
						var ustr = user.balance;
						var tstr = '';
						if(ustr.length<=8)
					   {
						 for (var k=0;k<(8-ustr.length); k++)
						{
						tstr += '<span class="bdrht" style="">0</span>';
						}
					   }
						for (var j=0;j<ustr.length; j++)
						{
						tstr += '<span class="bdrht" style="">'+ustr.charAt(j)+'</span>';
						}
						
						//document.getElementById("tpoint").innerHTML = tstr;
						document.getElementById("barimg").innerHTML = '<img src="http://delhidaredevilsadda.com/barcode.php?text='+user.mobile+'" style="padding:5px;border: solid 1px #ffffff;border-radius: 1px;background:#ffffff;" />';
			
						document.getElementById("headername").innerHTML='Membership';
						 
						break;
			
			
						case 'page-card-punch':
						
						
			
			
									document.getElementById("barcontentpunch").innerHTML='<img src="img/batch_mem.png" class="batch_mem"><span class="mem_wel_msg">Hi '+user.firstname+'!</span><span><img src="img/pro_btn.png" class="mem_acc_icon"></span><a href="javascript:showLoyalty();"><span class="myacc">My Account</span></a>';
						//document.getElementById("welcomehome").innerHTML = 'Welcome '+user.firstname+' '+user.lastname;
						document.getElementById("cardnamepunch").innerHTML = user.firstname+' '+user.lastname;
						var pstr='<span style="color:#ffffff;"><br><br>';
						console.log("user.visit_frequency)"+user.visit_frequency);
						//user.visit_frequency='2';
						console.log("parseInt(user.visit_frequency)"+parseInt(user.visit_frequency));
						 for (var k1=0;k1<parseInt(user.visit_frequency); k1++)
						{
						pstr += '<img src="img/star11.png"/>';
						}
						 for (var k1=0;k1<10-parseInt(user.visit_frequency); k1++)
						{
						pstr += '<img src="img/star.png"/>';
						}
						pstr +='</span>'
						console.log("pstr"+pstr);
			
			
			
						document.getElementById("card_punches").innerHTML =pstr;
						var uuu='';
						for(var i=0;i<user.id.length;i++)
						{
						 if(i%4==2)
							{
							 uuu = uuu + user.id.charAt(i) +'  ';
							}
						 else
							{
							 uuu = uuu + user.id.charAt(i);
							}
						}
					   
						var ustr = user.balance;
						var tstr = '';
						if(ustr.length<=8)
					   {
						 for (var k=0;k<(8-ustr.length); k++)
						{
						tstr += '<span class="bdrht" style="">0</span>';
						}
					   }
						for (var j=0;j<ustr.length; j++)
						{
						tstr += '<span class="bdrht" style="">'+ustr.charAt(j)+'</span>';
						}
						
						document.getElementById("tpointpunch").innerHTML = tstr;
						
						document.getElementById("headernamepunch").innerHTML='Membership';
						break;
			
						case 'shop':
						str +='<ul data-role="listview" id="ul_shop" class="ul_shop" data-icon="false" data-iconpos="none">';
						str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showshoplinks(\'S1\');" class="lt_shop_a"><h2>Khazana</h2></a></li>';
						str +='</ul>';
						
						$("#" + pageID + " .ui-content").html(str);
				$('#ul_shop').listview();
			   break;
			  
				}
				}
				function setUserbalance_aboutus()
				{
					 $.ajax({
						url: SERVER+'points_history_json.asp',
						type: 'GET',
						timeout: 50000,
						dataType: 'json',
						data: {'mno': user.mobile},
						complete: function(xhr, textStatus) {
						   //called when complete
						},
						success: function(data, textStatus, xhr) {
				
							//console.log('JSONDATA:'+JSON.stringify(data));
							//document.getElementById("tpoint").innerHTML = data.balance;
							document.getElementById("profilepts").innerHTML = data.balance;
							document.getElementById("profilepts1").innerHTML = data.balance;
							document.getElementById("transactions_bal").innerHTML = data.balance;
							//document.getElementById("blink_div").innerHTML = 'You need '+data.move_nxt_pts+' points to move to the next tier';
							
							
						},
						error: function(xhr, textStatus, errorThrown) {
							toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
						}
					  });
				}


		
function renderTemplate(pageID, json) {
	var str = '';
	var str1 = '';
	var oth = document.getElementById("othercontent");
    var main = document.getElementById("cardcontent");

	console.log('pageID'+pageID);
	switch (pageID) {
	case 'loyalty':
				
		str += '<br/><div class="pts_new"><span>' + json.balance + '</span></div>';   
        str += '<p class="tpts">Total Points</p>';
        str += '<a href="javascript:purchaseHistory();" id="ptsEarn" class="ui-btn ui-corner-all"><img src="assets/images/earned-points.png" alt="img" class="eIcon"><span>Earned Points :' + json.earnpoints + '</span><span class="purchaseBtnTxt">My Purchase History</span></a>';
        str += '<a href="javascript:redeemHistory();" id="ptsRedeem" class="ui-btn ui-corner-all"><img src="assets/images/redeemed-points.png" alt="img" class="rIcon"><span>Redeemed Points :' + json.burnpoints + '</span><span class="purchaseBtnTxt">My Purchase History</span></span></a>';
		str += '<a href="javascript:bonusHistory();" id="ptsBonus" class="ui-btn ui-corner-all"><img src="assets/images/earned-points.png" alt="img" class="rIcon"><span>Bonus Points :' + json.bonuspoints + '</span><span class="purchaseBtnTxt">My Purchase History</span></span></a>';
	
		//str += '<a href="#" id="ptsEarn1" class="ui-btn ui-corner-all"><img src="assets/images/earned-points.png" alt="img" class="eIconT"><span class="ernPt1">Earned Points :' + json.earnpoints + '</span><span class="rdmPt1">Redeemed Points :' + json.burnpoints + '</span><span class="purchaseBtnTxt1">My Purchase History</span></a>';
		
		
		
		str += '<div id="purchaseHistory" style="display:none;">';
		str+='<hr><span class="phist">Purchase History</span><hr>';
		for(var i=0;i<json.data.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
			str +='<caption><span style="float:left;">EARNED POINTS <span class="ptsRed">'+json.data[i].earn+'</span></span>  <span class="cap_date">'+json.data[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.data[i].billnumber+'</td><td>'+json.data[i].billamount+'</td><td>'+json.data[i].earn+'</td></tr>';
			str +='</tbody></table><br/>';
		}
		str +='</div>';
		
		
		str += '<div id="redeemHistory" style="display:none;">';
		str+='<hr><span class="phist">Redeem History</span><hr>';
        for(var i=0;i<json.data.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
		    str +='<caption><span style="float:left;">REDEEM POINTS <span class="ptsRed">'+json.data[i].burn+'</span></span>  <span class="cap_date">'+json.data[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.data[i].billnumber+'</td><td>'+json.data[i].billamount+'</td><td>'+json.data[i].burn+'</td></tr>';
			str +='</tbody></table><br/>';
		}
	    str +='</div>';


		str += '<div id="bonusHistory" style="display:none;">';
		str+='<hr><span class="phist">Bonus History</span><hr>';
		for(var i=0;i<json.bonus.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
			str +='<caption><span style="float:left;">BONUS POINTS <span class="ptsRed">'+json.bonus[i].bonuspoints+'</span></span>  <span class="cap_date">'+json.bonus[i].createdon+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.bonus[i].bonuspoints+'</td><td>'+json.bonus[i].flag+'</td></tr>';
			str +='</tbody></table><br/>';
		}
		str +='</div>';

        document.getElementById("points").innerHTML=str;   
		
		
		break;

	case 'loyaltynew':
		
	    str += '<div class="p-3">';
		str += '<div class="pts"><span>' + json.balance + '</span></div>';   
        str += '<p class="tpts">Total Points</p>';

		str += '<a href="javascript:purchaseHistory();" id="ptsEarn" class="ui-btn ui-corner-all"><img src="assets/images/pointredeem.png" alt="img" class="eIcon"><span>Earned Points : ' + json.earnpoints + '</span></a>';
		str += '<a href="javascript:redeemHistory();" id="ptsRedeem" class="ui-btn ui-corner-all"><img src="assets/images/pointredused.png" alt="img" class="eIcon"><span>Redeemed Points : ' + json.burnpoints + '</span></a>';
		str += '<a href="javascript:bonusHistory();" id="ptsEarn" class="ui-btn ui-corner-all"><img src="assets/images/pointredeem.png" alt="img" class="eIcon"><span>Bonus Points : ' + json.bonuspoints + '</span></a>';
		str += '</div>';
		
		str += '<div id="purchaseHistory" style="display:none;">';
		str+='<hr><span class="phist">Earned History</span><hr>';
		for(var i=0;i<json.data.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
			str +='<caption><span style="float:left;">EARNED POINTS <span class="ptsRed">'+json.data[i].earn+'</span></span>  <span class="cap_date">'+json.data[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.data[i].billnumber+'</td><td>'+json.data[i].billamount+'</td><td>'+json.data[i].earn+'</td></tr>';
			str +='</tbody></table><br/>';
		}
		str +='</div>';
		
		
		str += '<div id="redeemHistory" style="display:none;">';
		str+='<hr><span class="phist">Redeem History</span><hr>';
        for(var i=0;i<json.redeem.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
		    str +='<caption><span style="float:left;">REDEEM POINTS <span class="ptsRed">'+json.redeem[i].redeempoints+'</span></span>  <span class="cap_date">'+json.redeem[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.redeem[i].redeempoints+'</td><td>'+json.redeem[i].billnumber+'</td></tr>';
			str +='</tbody></table><br/>';
		}
	    str +='</div>';


		str += '<div id="bonusHistory" style="display:none;">';
		str+='<hr><span class="phist">Bonus History</span><hr>';
		for(var i=0;i<json.bonus.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
			str +='<caption><span style="float:left;">BONUS POINTS <span class="ptsRed">'+json.bonus[i].bonuspoints+'</span></span>  <span class="cap_date">'+json.bonus[i].createdon+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.bonus[i].bonuspoints+'</td><td>'+json.bonus[i].flag+'</td></tr>';
			str +='</tbody></table><br/>';
		}
		str +='</div>';

        document.getElementById("points").innerHTML=str;   
		
		
		break;

		case 'loyaltynew_txns':
		
	    str += '<div class="p-3">';
		str += '<div class="pts"><span>' + json.balance + '</span></div>';   
        str += '<p class="tpts">Total Points</p>';

		str += '<a href="javascript:purchaseHistory_txns();" id="ptsEarn" class="ui-btn ui-corner-all"><img src="assets/images/pointredeem.png" alt="img" class="eIcon"><span>Earned Points : ' + json.earnpoints + '</span></a>';
		str += '<a href="javascript:redeemHistory_txns();" id="ptsRedeem" class="ui-btn ui-corner-all"><img src="assets/images/pointredused.png" alt="img" class="eIcon"><span>Redeemed Points : ' + json.burnpoints + '</span></a>';
		str += '<a href="javascript:bonusHistory_txns();" id="ptsEarn" class="ui-btn ui-corner-all"><img src="assets/images/pointredeem.png" alt="img" class="eIcon"><span>Bonus Points : ' + json.bonuspoints + '</span></a>';
		str += '</div>';
		
		str += '<div id="purchaseHistory_txns" style="display:none;">';
		str+='<hr><span class="phist">Earned History</span><hr>';
		for(var i=0;i<json.data.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
			str +='<caption><span style="float:left;">EARNED POINTS <span class="ptsRed">'+json.data[i].earn+'</span></span>  <span class="cap_date">'+json.data[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.data[i].billnumber+'</td><td>'+json.data[i].billamount+'</td><td>'+json.data[i].earn+'</td></tr>';
			str +='</tbody></table><br/>';
		}
		str +='</div>';
		
		
		str += '<div id="redeemHistory_txns" style="display:none;">';
		str+='<hr><span class="phist">Redeem History</span><hr>';
        for(var i=0;i<json.redeem.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
		    str +='<caption><span style="float:left;">REDEEM POINTS <span class="ptsRed">'+json.redeem[i].redeempoints+'</span></span>  <span class="cap_date">'+json.redeem[i].billdate+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.redeem[i].redeempoints+'</td><td>'+json.redeem[i].billnumber+'</td></tr>';
			str +='</tbody></table><br/>';
		}
	    str +='</div>';


		str += '<div id="bonusHistory_txns" style="display:none;">';
		str+='<hr><span class="phist">Bonus History</span><hr>';
		for(var i=0;i<json.bonus.length;i++)
		{
			str +='<table data-role="none" class="ui-responsive" id="tbl">';
			str +='<caption><span style="float:left;">BONUS POINTS <span class="ptsRed">'+json.bonus[i].bonuspoints+'</span></span>  <span class="cap_date">'+json.bonus[i].createdon+'</span></caption><tbody>';
			str +='<tr><td>'+(i+1)+'.</td><td>'+json.bonus[i].bonuspoints+'</td><td>'+json.bonus[i].flag+'</td></tr>';
			str +='</tbody></table><br/>';
		}
		str +='</div>';

        document.getElementById("points_txns").innerHTML=str;   
		
		
		break;


	case 'specials':
		console.log(JSON.stringify(json));

		if(json.length == 0)
		{
			str = '<div style="text-align:center;">No Events Found</div>';
		}
		else
		{
			str += '<div class="whats_new_slider owl-carousel owl-theme">';

			for (var i=0;i<json.length;i++ )
			{
			
			    console.log('Video:'+json[i].AdVideoURL);
			    if(json[i].AdVideoURL=='' || json[i].AdVideoURL==null  || json[i].AdVideoURL=='null')
				{
				    str += '<div class="wn_offer">';
					str += '<a href="#">';
					str += '<img src='+SERVER+json[i].AdImgURL+' alt="" class="img-responsive" />';
				    str += '</a>';
				    str += '</div>';
				}
				else
				{
					 console.log('Img:'+json[i].AdVideoURL);
					//str += '<div class="whats_new_slider owl-carousel owl-theme">';
					//str += '<div class="specials7"><div><h3>'+json[i].AdName+'</h3><p>'+json[i].AdDesc+'</p>';
					str += '<video width="320" height="240" controls="controls" poster='+SERVER+json[i].AdImgURL+' onClick=this.play();><source src='+SERVER+json[i].AdVideoURL+'  this.play();/></video>';
					//str += '</div></div>';
					//str += '</div>';
					
				}
			}

			str += '</div>';
		}
        
		document.getElementById("whatsnew_div").innerHTML=str;
		
		var _owl2 = $(".whats_new_slider");
		setTimeout(function(){
 			_owl2.owlCarousel({
				items:1,
						loop:false,
						margin:0,
						//merge:true,
						nav:false,
						dots:false,
						autoplay:true,
						autoWidth:false,
						navText: ['<','>']
			});
		}, 100);

		
		break;
	case 'coupons':
		str = '';


        if (json.data.length == 0) 
		 {
                str = '<span style="text-align:center;margin: 0 auto;display: block;">No Coupons Found</span>';
         }
		else
		 {
		   for(var i=0;i<json.data.length;i++)
		{
            str += '<div class="px-3 pb-3">';

            if(json.data[i].couponstatus == 'Active')
            {
                str += '<div class="coupon active">';
            }
            else
            {
                str += '<div class="coupon inactive">';
            }


			str += '<div class="d-flex align-items-center justify-content-between">';
			str += '<div class="w-80">';
			str += '<h2 class="coupon_code">'+json.data[i].couponcode+'</h2>';
			str += '<h3 class="validity">Valid Till : <span>'+json.data[i].validtill+'</span></h3>';
			str += '<h3 class="coupon_no">Coupon Detail : '+json.data[i].offername+'</h3>';
			str += '<a href="#tnc">T&amp;C* </a>';
			str += '<div class="coupon_state"></div>';
		    str += '</div>';
			str += '<div class="w-20">';
			str += '<div class="qr_code"><img src="https://chart.googleapis.com/chart?chs=80x80&cht=qr&chl='+json.data[i].couponcode+'&choe=UTF-8" alt="" /></div>';
			str += '</div>';
			str += '</div>';

            str += '</div>';
			str += '</div>';
		
		}
		}
		//str += '</ul>';
		document.getElementById("rewards").innerHTML=str;
		break;

	case 'inbox':
		console.log('json'+JSON.stringify(json));
		
		str +=' <ul id="MsgUl" class="messages">';
		for(var i=0;i<json.length;i++ )
		{

			str += '<li>';
			str += '<div class="msg_img">';
			str += '<img src="assets/images/open.png" alt="" class="msgImg"/>';
			str += '</div>';
			str += '<div class="MsgBlk">';
			str += '<div class="MsgBdr">';
			str += '<span class="msghdr">DM-NYAENG</span>';
			str += '<span class="msgTime">'+json[i].msgtime+'</span>';
			str += '<span class="msgDate">' + json[i].msgdate + '</span>';
			str += '</div>';
			str += '<div class="msg_body">';
			str += '<span class="msgTxt">'+json[i].msg+'</span>';
			str += '</div>';
			str += '</div>';
			str += '</li>';
	
		}
		
		str +='</ul>';
		document.getElementById("message").innerHTML=str;
		break;


		case 'centre':
   //console.log('inside centre');
      console.log('json'+JSON.stringify(json));
  
  str += '<ul data-role="listview" data-autodividers="false" data-filter="true" data-inset="false" class="ul_locator_sub" id="ul_locator_sub">';
  for (var i=0;i<json.length;i++ )
  {
   var storecontact=json[i].storephone;
   var custcare=json[i].CustomerCare;
   if(storecontact==null)
    storecontact='';
   if(custcare==null)
    custcare='';

   if(json[i].storename.indexOf('Email Admin')==0 || json[i].storename.indexOf('ONLINE')==0 || json[i].storename.indexOf('online')==0 || json[i].storename.indexOf('Paytm App Store')==0 || json[i].storename.indexOf('ShortCode')==0 || json[i].storename.indexOf('Mobile App')==0 || json[i].storename.indexOf('Paytm Store')==0|| json[i].storename.indexOf('MicroSite')==0|| json[i].storename.indexOf('test')==0)
				continue;
   
  
      str += '<li data-icon="false" class="storeList"><h3 class="storeName">'+json[i].storename+','+json[i].storelocation+'</h3><span class="callout1">'+json[i].storeaddress+'</span><br/><br/>';
   if(storecontact!='')
   {
   str += '<a href="tel:'+storecontact+'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external" style="background: #ffffff; border: #ffffff; color: #999;font-weight: normal;  font-size: 13px;">'+storecontact+'</a>';
   }
  if(custcare!='')
   {
   str +='<a href="tel:'+custcare+'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external" style="background: #ffffff; border: #ffffff; color: #999;font-weight: normal;  font-size: 13px;">'+json[i].CustomerCare+'</a>';
   }

  //str +='<div  id=map-canvas'+i+' style="height:250px;width:95%;margin: 0 auto;">';

  str +='</li>';



  
  
  //alert(str);
  //str += '<li data-icon="false" style="background:#eeeeee;margin-top: 5px;margin-bottom: 5px;">'+json[i].storename+','+json[i].storelocation+'<br/><span class="callout1">'+json[i].storeaddress+'</span><br/><br/><a href="tel:'+json[i].storephone+'\'" data-role="button" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external">'+json[i].storephone+'</a><a href="javascript:showTabContent_Map(\''+json[i].storeaddress+'\');" data-role="button" class="ui-btn ui-icon-location ui-btn-icon-left" rel="external">Map</a></li>';
        //str += '<li data-icon="false"><span class="callout-date1">'+json[i].storename+', '+json[i].storelocation+'</span><br/><span class="callout1">'+json[i].storeaddress+'</span><br/><div class="ui-grid-a"><div class="ui-block-a"><a href="tel:'+json[i].storephone+'" class="ui-btn ui-icon-phone ui-btn-icon-left" rel="external">'+json[i].storephone+'</a></div><div class="ui-block-b"><a href="#" class="ui-btn ui-icon-location ui-btn-icon-left" rel="external">Map</a></div></div></li>';
  //str += '<div class="center-box"><div class="callout-date1">'+json[i].storename+', '+json[i].storelocation+'</div><div class="callout1">'+json[i].storeaddress+'<br/><a href="tel:'+json[i].storephone+'" class="ui-btn ui-icon-phone ui-btn-icon-left" data-role="button" rel="external">'+json[i].storephone+'</a></div></div>';
  
  }
  //str +='<div  id=map-canvas'+i+' style="height:250px;width:250px;">';
  str += '</ul>';
  
  document.getElementById("stor").innerHTML=str;

	  /*for (var i=0;i<json.length;i++ )
	  {
			if(json[i].storename.indexOf('Email Admin')==0 || json[i].storename.indexOf('ONLINE')==0 || json[i].storename.indexOf('online')==0 || json[i].storename.indexOf('Paytm App Store')==0 || json[i].storename.indexOf('ShortCode')==0 || json[i].storename.indexOf('Mobile App')==0 || json[i].storename.indexOf('Paytm Store')==0|| json[i].storename.indexOf('MicroSite')==0|| json[i].storename.indexOf('test')==0)
			continue;

			var lat1  = checkforundefined(json[i].storelatitude);
			var long1 = checkforundefined(json[i].storelongitude);
			var add   = lat1+','+long1;
	   

		   showTabContent_Map_latlong(lat1,long1,i);
	  }*/
	   
	 $('#ul_locator_sub').listview();

  break;
		
	case 'defstore':
		//console.log('inside default store'+user.def_store);
	     console.log('json'+JSON.stringify(json));
		//str +='<div  style="text-align:center;width:100%;"><img src="img/c-logo.png" width="137" height="44" /></div>';
		str += '<h2 align="center" style=\"color:#ff0000;font-size:14px;font-weight:normal;\">Default Store : '+user.def_store+'</h2>';
		str += '<a href="#citylist" data-role="button" data-theme="reset" class="ios">View All Stores</a>';
		str += '<h3 align="center" style=\"color:#ff0000;font-size:14px;font-weight:normal;\">Other Stores in your city</h3><h3></h3>';
		//$("#" + pageID + " .ui-content").html(str);
		$("#" + pageID + " .ui-content").html(str+$.render[pageID](json));
		$("a[data-role='button']").button();
		break;
	case 'citylist':
		//console.log('inside citylist');
	    console.log('json'+JSON.stringify(json));
		
        str += '<ul data-role="listview" data-autodividers="false" data-filter="true" data-inset="false" class="ul_locator" id="ul_locator">';
		for (var i=0;i<json.data.length;i++ )
		{
			if(json.data[i].cityid!='9')
			{
				cityidarr[i]=json.data[i].cityid;
				cityarr[i]=json.data[i].cityname;
				//str +='<a href="javascript:getCityId('+json.data[i].cityid+');" data-role="button"  data-theme="reset" class="ios">'+json.data[i].cityname+'</a>'
				str += '<li data-icon="false"><a href="javascript:getCityId('+json.data[i].cityid+');" class="ui-btn ui-icon-location ui-btn-icon-left ui-shadow ui-corner-all">'+json.data[i].cityname+'</a></li>';
			}
		}
		str += '</ul>';
		document.getElementById("stor").innerHTML=str;
		  
        $('#ul_locator').listview();
		//$("a[data-role='button']").button();
		break;

	case 'merchandise':
	  console.log(JSON.stringify(json));
	  
	  /*str += '<h3>Merchandise</h3>';


	  for (var i=0;i<json.length;i++ )
	  {
			
	   str += '<div><div><h3>'+json[i].AdName+'</h3><p>'+json[i].AdDesc+'</p><video width="320" height="240"  poster='+json[i].AdImgURL+' onClick=this.play();><source src='+SERVER+json[i].AdVideoURL+'  this.play();/></video><br/><hr/> <a href="#" data-role="button" id="forgot_button">Order</a></div></div>';

	  }


	  $("#" + pageID + " .ui-content").html(str);*/
	  break;
case 'categorylist':
   console.log(JSON.stringify(json));

  //str = str +'<div class="subheading_t" style="font-size:14px;"><div style="color:#555555;">Welcome '+user.firstname+'</div><div class="submenu_button_right" ><img src="img/coupons.png" style="height:26px;width:auto;"></div></div>';
  str +='<img src="img/rstore.png" style="width:97%;height:auto;"><br/>';
  //str +='<div id="rss_desc1"><ul>';
 // str +='<ul>';
  // for (var i=0;i<json.length;i++ )
  //{
  //str +='<li><a href="javascript:getCatDetails('+json[i].Catid+');" data-theme="reset" class="ios" style="background: url(../img/shop_categoryList.png);height: 78px;color:#000;">'+json[i].CatName+'</a></li>';
  //str +='<li class="s_cn"><a href="javascript:getCatDetails('+json[i].Catid+');" style="background-image: url(../img/s_cn.png);color:#000;text-align:center;">'+json[i].CatName+'</a></li>';
  //}
 // str +='</ul>';
  //str +='</ul></div>';
  $("#" + pageID + " .ui-content").html(str);

  $("a[data-role='button']").button();
   break;
	  case 'rewardsmain':
		
		 $("#" + pageID + " .ui-content").html(str);
		break;
	  case 'viewcart':
		
		//str += '<div class="cartinfo">You have '+json.cartdata.length+' items in your cart</div>';
		
		str += '<ul data-role="listview" data-autodividers="false" data-filter="true" data-inset="false" class="ul_locator_sub" id="cartlist">';
        for (var i=0;i<json.cartdata.length;i++ )
		{
		
		
		str += '<li data-icon="delete" data-iconpos="right" style="background:#eeeeee;margin-top: 5px;margin-bottom: 5px;line-height:90px;"><img src='+json.cartdata[i].url+' style="width: 100px;height: 100px;padding: 5px;"/>'+json.cartdata[i].BrandName+' Offer,Cost:Rs. '+json.cartdata[i].BrandValue+'<br/><span class="callout1">'+json.cartdata[i].BrandDescription+'</span></li>';
        																																					   
																																							   
		
		//	str +='<li><div class="li-img"><img src='+json.cartdata[i].url+' /></div><div class="li-text"><h4 class="li-head">'+json.cartdata[i].BrandName+' Offer,Cost:Rs. '+json.cartdata[i].BrandValue+'</h4><br/><p class="li-sub">'+json.cartdata[i].BrandDescription+'</p></div></li>';
            
		}
		str += '</ul>';
		
		str += '<br clear="all" /><a href="#" data-role="button" id="view_cart" class="btnclass">Redeem</a>';
		console.log("str herrrrrr"+str);
		oth.innerHTML=str; oth.style.display = 'block';  
		 $('#cartlist').listview();
		 $('#view_cart').button();
		break;

	case 'rewardstore':
    
  
       
	  jsonary = json.data;
  
  // str += '<div class="ui-content rsbanner"><span class="vouchers"><a href=\'javascript:addincart('+i+');\' id='+i+'><img src="img/get_voucher.png" class="vouchers" id="vouchers"'+i+'/></a></span><img src="img/featured.png" class="rs_b1" /></div>';
          
  for (var i=0;i<json.data.length;i++ )
  {

   if(json.data[i].BrandDescription=='Featured')
   {
   
   str += '<div class="ui-content rsbanner"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src='+json.data[i].url+' class="rs_b1" /></div>';
   }
   else
   {

   
   //str += '<div class="ui-content rs_msg"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src="http://portico.mloyalengage.com/'+json.data[i].brand_logo+'" class="rs_b2"></div>';
   str += '<div class="ui-content rs_msg"><img src="" class="rs_b2"><div class="amount_date"> <b>Rs. '+json.data[i].gift_voucher_value+'</b><br/>Valid Thru : '+json.data[i].end_date+'</div></div>';
   
   str += '<div class="ui-grid-a msg_cont"><div><img src="'+SERVER1+json.data[i].brand_logo+'" class="img_blogo1"></div><div class="ui-block-a wid20"></div>';
   

   str += '<div class="ui-block-b wid80"><div class="ui-grid-a"><div class="ui-block-a wid60"><span class="headergjw">'+json.data[i].brand_name+' </span><br/>';
   str += '<span class="sub1header">Rewards Manager </span><br/><span class="sub2header">Friday at 10:40 am </span><br/></div>';
   str += '<div class="ui-block-b wid40"><div class="flt_rght">';
   //str += '<a href="javascript:likeMessage_rewards(\''+json.data[i].brand_id+'\',\''+i+'\');" data-role="button"><span id="likingrewards'+i+'"><img src="img/msg_up.png"></span></a>';
   str += '<span><a href="javascript:shareMessage(\''+json.data[i].brand_description+'\');" data-role="button"><img src="img/msg_share.png"></a></span>';
   str += '</div></div></div><hr class="style-one">';
   str += '<div class="ui-grid-solo"><div class="ui-block"><span class="paratxt">'+json.data[i].brand_description;
   str += '</span></div></div></div></div>';
   str += '<div class="ui-grid-solo msg_like_comt"><div class="rs_lk_cmt">';
 //  str += '<span class="msg_lke"><a href=\'javascript:addincart('+i+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   str += '<span class="msg_lke"><a href=\'javascript:getVoucher('+json.data[i].gv_id+','+json.data[i].gift_voucher_value+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   }

 
  }
  //str +='Coming Soon';
  
   oth.innerHTML=str; oth.style.display = 'block';  
    break;
 case 'reward-cat':
   str +='<ul data-role="listview" id="ul_reward-cat" class="ul_shop" data-icon="false" data-iconpos="none">';
   for(var i=0;i<json.data.length;i++)
  {
            str +='<li class="lt_shop" data-theme="a" data-icon="false" data-iconpos="none"><a href="javascript:showcatbrands('+json.data[i].catid+');" class="lt_shop_a"><h2>'+json.data[i].catname+'</h2></a></li>';
  }
 str +='</ul>';
 //str +='Coming Soon';
    $("#" + pageID + " .ui-content").html(str);
    $('#ul_reward-cat').listview();
   break;
   case 'reward-brand':
   for (var i=0;i<json.data.length;i++ )
  {

   if(json.data[i].BrandDescription=='Featured')
   {
   
   str += '<div class="ui-content rsbanner"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src='+json.data[i].url+' class="rs_b1" /></div>';
   }
   else
   {

   
   //str += '<div class="ui-content rs_msg"><a href=\'javascript:addincart('+i+');\' id='+i+'><div class="cartbx">Add to Cart</div></a><br/><img src="http://portico.mloyalengage.com/'+json.data[i].brand_logo+'" class="rs_b2"></div>';
   str += '<div class="ui-content rs_msg"><img src="" class="rs_b2"><span class="amount_date"> <b>Rs. '+json.data[i].gift_voucher_value+'</b><br/>Valid Thru : '+json.data[i].end_date+'</span></div>';
   
   str += '<div class="ui-grid-a msg_cont"><div><img src="'+SERVER1+json.data[i].brand_logo+'" class="img_blogo1"></div><div class="ui-block-a wid20"></div>';
   

   str += '<div class="ui-block-b wid80"><div class="ui-grid-a"><div class="ui-block-a wid60"><span class="headergjw">'+json.data[i].brand_name+' </span><br/>';
   str += '<span class="sub1header">Rewards Manager </span><br/><span class="sub2header">Friday at 10:40 am </span><br/></div>';
   str += '<div class="ui-block-b wid40"><div class="flt_rght">';
  // str += '<a href="javascript:likeMessage_rewards(\''+json.data[i].brand_id+'\',\''+i+'\');" data-role="button"><span id="likingrewards'+i+'"><img src="img/msg_up.png"></span></a>';
   str += '<span><a href="javascript:shareMessage(\''+json.data[i].brand_description+'\');" data-role="button"><img src="img/msg_share.png"></a></span>';
   str += '</div></div></div><hr class="style-one">';
   str += '<div class="ui-grid-solo"><div class="ui-block"><span class="paratxt">'+json.data[i].brand_description;
   str += '</span></div></div></div></div>';
   str += '<div class="ui-grid-solo msg_like_comt"><div class="rs_lk_cmt">';
   //str += '<span class="msg_lke"><a href=\'javascript:addincart('+i+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   str += '<span class="msg_lke"><a href=\'javascript:getVoucher('+json.data[i].gv_id+','+json.data[i].gift_voucher_value+');\' id='+i+'><img src="img/get_voucher.png" id="vouchers"'+i+'/></a></div></div></div></div><br/><br/>';
   }

 
  }
            $("#" + pageID + " .ui-content").html(str);
   break;
			
    case 'socialwall_youtube':
		
		//str += '<a href=\"javascript:loadDataGal(\''+gallery_cat+'\');\" data-role=\"button\" data-theme=\"reset\" class=\"ios\"><span><img src=\"img/cheer/refresh.png\" /></span></a></div>';
		
		for (var i=0;i<json.length;i++ )
		{
			//console.log(JSON.stringify(json[i]));
        if(json[i].link!='')
			{

			//console.log(json[i].link[1].href);
			//console.log(json[i].link[1].href.indexOf("videos/")+7);

			//console.log(json[i].link[1].href.substring(json[i].link[1].href.indexOf("videos/")+7,json[i].link[1].href.indexOf("/related")));
			

			 str1="http://www.youtube.com/embed/"+json[i].link[1].href.substring(json[i].link[1].href.indexOf("videos/")+7,json[i].link[1].href.indexOf("/related"));
			 //console.log(str1);
			
			
				
			   	str += '<div id="rss_desc"><div><span style=\"color:#F39E34;font-size:12px;font-weight:bold;\">'+json[i].title.t+'</span><HR>';
				
				
					str +='<iframe width="95%" height="240" src='+str1+' frameborder="0" allowfullscreen=""></iframe>';
					str +='<br/>'+json[i].content.t;
					
				 
				  str += '</div></div>';
				
				
			}
		}

		
        document.getElementById("contensocial").innerHTML=str;
		break;
		case 'socialwall_facebook':
		for (var i = 0; i < json.data.length; i++)
            {

                if (json.data[i].link != '')
                {
                    var fbid=json.data[i].id;
                    
                    
                    
                    var first_part=fbid.substr(0,fbid.indexOf('_'));
                     
                     var sec_part=fbid.substr(fbid.indexOf('_')+1,fbid.length);
                    
                    
                    var linkfbpost='https://www.facebook.com/'+first_part+'/posts/'+sec_part;
                   
                    
                    
				
				var msg=json.data[i].message;
				if(msg=='' || msg=='undefined' || msg==null || msg=='null')
					{
						msg='';
					}
		
				var lk='';
				if(json.data[i].likes)
				{
					lk= json.data[i].likes.data.length;
				}
				else
				{
					lk= '0';
				}
				

				str+='<div class="ui-grid-solo">';
				str+='<div class="ui-block">';
				str+='<ul class="facebookFeed">';
				str+='<li>';
				str+='<div class="f_feedCon"><div class="f_feed_hdr">';
				//str+='<div class="f_hdr_img"><img src="images/social/profile.jpg" id="f_profile" alt="profile"></div>';
				//<!--<div class="f_hdr_time" id="f_hdr_time">'+jQuery.timeago(json.data[i].updated_time)+'</div>-->
				//str+='<div class="f_hdr_txt"><span class="f_hdr_title" id="f_hdr_title">'+json.data[i].from.name+'</span><br/><span class="f_hdr_desc" id="f_hdr_desc">'+json.data[i].from.category+'</span></div>';
				if(typeof json.data[i].picture !== "undefined" && json.data[i].picture != null)
					{
					str+='<div class="f_feed_bdy"><img src='+json.data[i].picture+' id="f_banner" alt="banner"></div>';
					}
				str+='<div class="f_feed_bdy"><p id="fb_msg">'+msg+'</p></div>';
				str+='<div class=f_feed_ftr><hr class=hori /><div class=f_bdy_lcs><span><img src=img/like.jpg onClick=javascript:openBrowser(\''+linkfbpost+'\');>Like</span><span><img src=img/comment.jpg onClick=javascript:openBrowser(\''+linkfbpost+'\');>Comment</span><span><img src=img/share.jpg onClick=javascript:openBrowser(\''+linkfbpost+'\');>Share</span></div>';
				str+='</div>';
				str+='</li>';
				str+='</ul>';
				str+='</div>';
				str+='</div>';

                }
            }

			document.getElementById("FACEBOOK").innerHTML = str;
            
            break;

		case 'socialwall_twitter':
		for (var i = 0; i < json.length; i++)
            {

               


					str+='<ul class="facebookFeed">';
					str+='<li>';
					str+='<div class="y_feedCon">';
					str+='<div class="ui-grid-a">';
					str+='<div class="ui-block-a" style="width:25%;"><img src="img/twitter.png" alt="twitter" class="y_video"></div>';
					str+='<div class="ui-block-b" style="width:75%;padding-left:10px;">';
					str+='<div class="y_hdr_title">'+json[i].user.name+'</div>';
					//str+='<div class="y_hdr_desc">'+json[i].user.description+'</div>';
					try{
					str+='<div class="f_feed_bdy"><img src='+json[i].entities.media[0].media_url+' id="f_banner" alt="banner" onClick=javascript:openBrowser(\''+json[i].entities.urls.url+'\');></div>';
					}
					catch(err){}
					str+='<div class="y_hdr_desc">'+json[i].text+'</div>';
					//str+='<div class=f_bdy_likes>'+json[i].user.followers_count+' Followers</div>';
					str+='</div></div></div></li></ul>';

                
            }

            document.getElementById("TWITTER").innerHTML = str;

            break;

		case 'socialwall_pinterest':
		console.log(JSON.stringify(json));
		for (var i=0;i<json.length;i++ )
		{
				console.log(json[i].name);
				str+='<ul class="facebookFeed">';
				str+='<li>';
				str+='<div class="f_feedCon"><div class="f_feed_hdr">';
				str+='<div class="f_hdr_txt"><span class="f_hdr_title" id="f_hdr_title">'+brandname+'</span><br/><span class="f_hdr_desc" id="f_hdr_desc">'+json[i].board.name+'<br>'+json[i].desc+'</span></div>';
				str +='<div class="ui-grid-solo"><div class="ui-block"><img src="'+json[i].src+'" ></div></div>';
				str+='</div>';
				str+='</li>';
				str+='</ul>';
		}
        
        
        document.getElementById("PINTEREST").innerHTML=str;
		break;
		case 'socialwall_tumblr':
		console.log(JSON.stringify(json));
		for (var i=0;i<json.length;i++ )
		{
        
         if(json[i].link!='')
			{
		
				str += '<div id="rss_desc"><div><img src="img/ddsmall.jpg"><div style=\"margin: -50px 5px 20px 60px;\"><span style=\"color:#F39E34;font-size:12px;font-weight:bold;\">'+json[i].title+'</span><br/><span style="font-size:11px;color:#999999;"></span></div><HR><div style=\"margin: 10px 10px 10px -20px;\" class="content-responsive">'+json[i].description+'</div><HR><a href=\"javascript:playvideo(\''+json[i].link+'\');\" data-role=\"button\" data-theme=\"reset\" class=\"ios\"><div class=\"see-all\">See All</div></a></div></div>';
				
		
			}
		}
        
        document.getElementById("contensocial").innerHTML=str;
		break;

		case 'socialwall_instagram':

		var json = JSON.parse(json)
		var length = JSON.stringify(json.images.length);

		//console.log('instagram: '+JSON.stringify(json));

		for (var i = 0; i < length; i++)
        {
				str+='<ul class="facebookFeed">';
				str+='<li>';
				str+='<div class="f_feedCon"><div class="f_feed_hdr">';
				//str+='<div class="f_hdr_img"><img src="images/social/profile.jpg" id="f_profile" alt="profile"></div>';
				str+='<div class="f_hdr_txt"><span class="f_hdr_title" id="f_hdr_title">'+json.full_name+'</span><br/>';
				//str+='<span class="f_hdr_desc" id="f_hdr_desc">'+json.images[i].node.edge_media_to_caption.edges[0].node.text+'</span></div>';
				str +='<img style="border: 1px solid #cccccc;text-align: center;width: 98%;height: auto;" src="'+json.images[i].node.display_url+'" />';
				str+='<div class=f_bdy_likes>'+json.images[i].node.edge_liked_by.count+' Likes</div>';
				str+='</div>';
				str+='</li>';
				str+='</ul>';

		}

        document.getElementById("INSTAGRAM").innerHTML = str;

        break;
		
		case 'popuppage4':

       
		for(var i=0;i<json.data.length;i++)
		
		{

		str += '<ul data-role="listview" data-inset="true" class="listPpup ui-listview ui-listview-inset ui-corner-all ui-shadow" data-icon="false">';
		str += '<li class="ui-li-has-thumb ui-first-child ui-last-child"><a href="#" class="ui-btn"><img src="img/rstar.jpg"/>';
		str += '<h2>'+json.data[i].offername+'</h2><p>Coupon Code : '+json.data[i].couponcode+'</p></a>';
		str += '</li></ul>';
               
		
		}
		 $("#" + pageID + " .ui-content").html(str);
		break;
		


	}
}

    function gotopoints()
	{
		$("#message").css('display', 'none');
		//$("#membership2").css('display', 'none');
		$("#rewards").css('display', 'none');
		$("#points").css('display', 'block');

		
		$.mobile.changePage( "#my_membership", { transition: "none"} );
		showTabContent('loyaltynew', 'points_history_json.asp');

	
		//document.getElementById("tab1").classList.remove("is-active");
		document.getElementById("tab2").classList.remove("is-active");
		document.getElementById("tab3").classList.add("is-active");
		//document.getElementById("tab4").classList.remove("is-active");
	}
	function gotorewards()
	{

		$("#message").css('display', 'none');
		//$("#membership2").css('display', 'none');
		$("#rewards").css('display', 'block');
		$("#points").css('display', 'none');

		$.mobile.changePage( "#my_membership", { transition: "none"} );
		showTabContent('coupons', 'cpns_history_json.asp');

		//document.getElementById("tab1").classList.remove("is-active");
		document.getElementById("tab2").classList.remove("is-active");
		document.getElementById("tab3").classList.remove("is-active");
		document.getElementById("tab4").classList.add("is-active");
	}
	
function showScan_new_check()
{   
	stopVideos();
	document.getElementById("filter_panel_div").innerHTML= '';


	/*var bcode1 = '57302XA302-2-2-300260151-3100.40-HSD';
	var bcodenew = bcode1.split('-');
	earn_Scanpage(bcodenew[4],bcodenew[3],bcodenew[0],bcodenew[5]);*/

	     cordova.plugins.barcodeScanner.scan(
			   function (result) {

					//$.mobile.changePage( "#homepage", {transition: "none"} );
                      
					if(result.cancelled == true)
				    {
						//toast('Scanning canceled');
						$.mobile.changePage( "#homepage", {transition: "none"} );
				    }
					else
				    {
						var bcode = result.text;
						var bcode1 = bcode.trim();

						//var bcodenew = bcode1.substr(bcode1.indexOf('uid=')+4,bcode1.length);
						var bcodenew = bcode1.split('-');

						earn_Scanpage(bcodenew[4],bcodenew[3],bcodenew[0],bcodenew[5]);
                       
					}

			  },
			  function (error) {
				  alert("Scanning failed: " + error);
			  },
			  {
				  preferFrontCamera : false, // iOS and Android
				  showFlipCameraButton : true, // iOS and Android
				  showTorchButton : true, // iOS and Android
				  torchOn: false, // Android, launch with the torch switched on (if available)
				  saveHistory: true, // Android, save scan history (default false)
				  prompt : "Place the code inside the scan area", // Android
				  resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
				  formats : "QR_CODE,PDF_417,CODABAR,DATA_MATRIX,RSS14,CODE_39,CODE_93,CODE_128", // default: all but PDF_417 and RSS_EXPANDED
				  orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
				  disableAnimations : true, // iOS
				  disableSuccessBeep: false // iOS and Android
			  }
		   );
           
}

function earn_Scanpage(bill_amount,bill_number,storecode,pcodenm)
{
     //document.getElementById("scan_qr_success_txt").innerHTML ='';

     //alert(SERVER2+"earn_points_json_api.asp");

	  $.ajax({
			url: SERVER2+"earn_points_json_api.asp",
		    type: 'POST',
		    timeout: 50000,
		    dataType: 'json',
		    data:{
			  "mobileno": user.mobile,
			  "bill_number": bill_number,
			  "bill_amount": bill_amount,
			  "period": 'normal',
			  "scode": storecode,
			  "productname": pcodenm
            },
		    beforeSend: function (xhr) {

		     	$("#wait").css("display","block");
				xhr.setRequestHeader('apiuid', 'MLOYALAPI');
				xhr.setRequestHeader('apipswd', 'Ml0yalAP!2o14');
            },
		    complete: function(xhr, textStatus) {
		    	$("#wait").css("display","none");
		    },
			success: function(data, textStatus, xhr) {
			 
			    console.log("data:"+JSON.stringify(data));

			    if(data.error.length>=1)
				{
					toast_p(data.error);
				}
				else
				{
					// toast_p(data.data);
					$("#scan-points").css("display","block");
					document.getElementById("filter_panel_div").innerHTML= data.data;
					$(".overlay").fadeIn("fast");
					$("#filter_panel").slideToggle("fast");

					$('#username_new').val(localStorage.getItem("usernamenayaraenergy"));
					var pass = localStorage.getItem("passwordnayaraenergy");
		
					if(pass.length>=4)
					{
								var i=4;
								while(i>0)
								{
									$('#codeBox'+i).val(parseInt(pass%10));
									i--;
									pass = parseInt(pass/10);
														
								}
				   }
		
					setTimeout( function() {
						  authenticate_new();
					}, 1000);  //1 seconds
			   
				}
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+textStatus);
			}
		});
}

function logoutApp()
{
	localStorage.removeItem("usernamenayaraenergy");
	localStorage.removeItem("passwordnayaraenergy");

	localStorage.removeItem("profiledone_nayaraenergy");
	
    user.mobile='';

	$.mobile.changePage("#page-forgot-password");
}

function updateProfileTest()
{
	
	    var firstname = $('#update_firstname').val();
		// var lastname = $('#update_lastname').val();
		// var mobile = user.mobile;
		// var email = $('#update_email').val();

		var vtype = $('#update_vtype').val();

		var vpa_txt1 = $('#update_vpa1_txt').val();
		var vpa_domain1 = $('#update_vpa1_domain').val();
		var vpa_txt2 = $('#update_vpa2_txt').val();
		var vpa_domain2 = $('#update_vpa2_domain').val();

		var card1 = $('#update_card1').val();
		var card2 = $('#update_card2').val();
        var cardCvv1 = $('#update_card1_cvv').val();
		var card1_expire_date = $('#update_card1_expire_date').val();
		var cardCvv2 = $('#update_card2_cvv').val();
		var card2_expire_date = $('#update_card2_expire_date').val();
        console.log(cardCvv1 + ' ' +card1_expire_date+ ' ' +cardCvv2+ ' ' + card2_expire_date);
		
		if(vpa_txt1.trim()=='')
			var vpamain1 = '';
		else
			var vpamain1 = vpa_txt1+vpa_domain1;
		if(vpa_txt2.trim()=='')
			var vpamain2 = '';
		else
			var vpamain2 = vpa_txt2+vpa_domain2;

		console.log(vpamain1);
		console.log(vpamain2);
		
		
		var mm ='';
		var dd ='';
		var dd1 ='';
		var yyyy = '';
		var yyyy1 = '';

		var birthday = $('#update_dob').val();

		if(birthday!='')
		{
			var dob = birthday.split('-');
			mm = dob.length == 3 ? dob[1] : '';
			dd = dob.length == 3 ? dob[0] : '';
			dd1 = dob.length == 3 ? dob[0] : '';

			yyyy = dob.length == 3 ? dob[2] : '';
			yyyy1 = dob.length == 3 ? dob[2] : '';

           //$('#update_dob1').val(yyyy+'-'+mm+'-'+dd);
		
		}
		if(dd.length==4)
		{
			yyyy=dd1;
			dd=yyyy1;
		}
		
    if(firstname.trim()=='')
	{
		toast('Please enter mandatory fields.');
	}
	else if(vtype=='' || vtype==undefined || vtype==null)
	{
		toast('Please check Vehicle Type');
	}
	// else if(vpa_txt1.trim()=='' || vpa_domain1=='' || vpa_domain1==undefined || vpa_domain1==null)
	// {
	// 	toast('Please check VPA details');
	// }
	// else if(vpa_txt2.trim()=='' || vpa_domain2=='' || vpa_domain2==undefined || vpa_domain2==null)
	// {
	// 	toast('Please check VPA details');
	// }
	// else if(card1.trim()=='' || card2.trim()=='')
	// {
	// 	toast('Please enter card details.');
	// }
	else
	{
		$.mobile.changePage( "#profile-final-pg", {transition: "flip"} );
	}
}

function updateProfile()
{
		var firstname = $('#update_firstname').val();
		var lastname = $('#update_lastname').val();
		var mobile = user.mobile;
		var email = $('#update_email').val();

		var vtype = $('#update_vtype').val();

		var vpa_txt1 = $('#update_vpa1_txt').val();
		var vpa_domain1 = $('#update_vpa1_domain').val();
		var vpa_txt2 = $('#update_vpa2_txt').val();
		var vpa_domain2 = $('#update_vpa2_domain').val();

		var card1 = $('#update_card1').val();
		var card2 = $('#update_card2').val();
        var cardCvv1 = $('#update_card1_cvv').val();
		var card1_expire_date = $('#update_card1_expire_date').val();
		var cardCvv2 = $('#update_card2_cvv').val();
		var card2_expire_date = $('#update_card2_expire_date').val();
        console.log(cardCvv1 + ' ' +card1_expire_date+ ' ' +cardCvv2+ ' ' + card2_expire_date);
		
		if(vpa_txt1.trim()=='')
			var vpamain1 = '';
		else
			var vpamain1 = vpa_txt1+vpa_domain1;
		if(vpa_txt2.trim()=='')
			var vpamain2 = '';
		else
			var vpamain2 = vpa_txt2+vpa_domain2;

		console.log(vpamain1);
		console.log(vpamain2);
		
		
		var mm ='';
		var dd ='';
		var dd1 ='';
		var yyyy = '';
		var yyyy1 = '';

		var birthday = $('#update_dob').val();

		if(birthday!='')
		{
			var dob = birthday.split('-');
			mm = dob.length == 3 ? dob[1] : '';
			dd = dob.length == 3 ? dob[0] : '';
			dd1 = dob.length == 3 ? dob[0] : '';

			yyyy = dob.length == 3 ? dob[2] : '';
			yyyy1 = dob.length == 3 ? dob[2] : '';

           //$('#update_dob1').val(yyyy+'-'+mm+'-'+dd);
		
		}
		if(dd.length==4)
		{
			yyyy=dd1;
			dd=yyyy1;
		}
		
    if(firstname.trim()=='')
	{
		toast('Please enter mandatory fields.');
	}
	else if(vtype=='' || vtype==undefined || vtype==null)
	{
		toast('Please check Vehicle Type');
	}
	// else if(vpa_txt1.trim()=='' || vpa_domain1=='' || vpa_domain1==undefined || vpa_domain1==null)
	// {
	// 	toast('Please check VPA details');
	// }
	// else if(vpa_txt2.trim()=='' || vpa_domain2=='' || vpa_domain2==undefined || vpa_domain2==null)
	// {
	// 	toast('Please check VPA details');
	// }
	// else if(card1.trim()=='' || card2.trim()=='')
	// {
	// 	toast('Please enter card details.');
	// }
	else
	{
    
	 $.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				'FirstName': firstname,
				'LastName': lastname,
				'deviceid': reg_id,
				'cname':'',
				'mobileno': mobile,
				'Emailid': email,
				'dd': dd,
				'mm': mm,
				'yy': yyyy,
                'deviceType': deviceType,
				'doaday': '',
				'doamonth': '',
				'doayear': '',
				'FlatNo': '',
				'PostalCode': '',
				'City': '',
				'Vehicletype': vtype,
				'VPA1': vpamain1,
				'VPA2': vpamain2,
				'cardno1': card1,
				'Card1CVVNumber': cardCvv1,
				'Card1ExpiryDate': card1_expire_date,
				'cardno2': card2,
				'Card2CVVNumber': cardCvv2,
				'Card2ExpiryDate': card2_expire_date
				
  
  
  
			},
			success: function(data, textStatus, xhr) {

				
				localStorage.setItem("profiledone_nayaraenergy","Yes");
				
				if (data.indexOf("Success")>=0)
				{
						toast('Your profile has been updated successfully.');
						user.firstname=firstname;
						user.lastname=lastname;
						user.emailid=email;

				}
				else if(data=='Failed')
					toast('Update failed.');
				else
					toast(data);
					

				
				if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
				{
					document.getElementById("profilenm").innerHTML= 'Guest';
					document.getElementById("profilenm1").innerHTML='Guest';
				}
				else
				{
					var fn='';
					var ln='';
					if(user.firstname != '')
					{
						fn = user.firstname.substring(0, 1);
					}
					if(user.lastname != '')
					{
						ln = user.lastname.substring(0, 1);
					}
					if(user.id != '')
					{
						var id1 = user.id.substring(0, 4);
						var id2 = user.id.substring(4, 8);
						var id3 = user.id.substring(8, 10);
					}

					document.getElementById("sortname").innerHTML= fn+''+ln;
					document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts").innerHTML=user.balance;
					document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts1").innerHTML=user.balance;
					//document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;
					document.getElementById("pr_valid").innerHTML=user.validity;

					//document.getElementById("firm_nm").innerHTML= user.proprietorname;
					//document.getElementById("sap_code").innerHTML= user.sapcode;
						
				}
					
				$.mobile.changePage( "#homepage", {transition: "flip"} );
		         
				
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
  }
		
}

function updateProfile_kyc()
{
		var firstname = $('#update_firstname').val();
		var lastname = $('#update_lastname').val();
		var mobile = user.mobile;
		var email = $('#update_email').val();

		var vtype = $('#update_vtype').val();

		var vpa_txt1 = $('#update_vpa1_txt').val();
		var vpa_domain1 = $('#update_vpa1_domain').val();
		var vpa_txt2 = $('#update_vpa2_txt').val();
		var vpa_domain2 = $('#update_vpa2_domain').val();

		var card1 = $('#update_card1').val();
		var card2 = $('#update_card2').val();
        var cardCvv1 = $('#update_card1_cvv').val();
		var card1_expire_date = $('#update_card1_expire_date').val();
		var cardCvv2 = $('#update_card2_cvv').val();
		var card2_expire_date = $('#update_card2_expire_date').val();
        console.log(cardCvv1 + ' ' +card1_expire_date+ ' ' +cardCvv2+ ' ' + card2_expire_date);
		
		if(vpa_txt1.trim()=='')
			var vpamain1 = '';
		else
			var vpamain1 = vpa_txt1+vpa_domain1;
		if(vpa_txt2.trim()=='')
			var vpamain2 = '';
		else
			var vpamain2 = vpa_txt2+vpa_domain2;

		console.log(vpamain1);
		console.log(vpamain2);
		
		
		var mm ='';
		var dd ='';
		var dd1 ='';
		var yyyy = '';
		var yyyy1 = '';

		var birthday = $('#update_dob').val();

		if(birthday!='')
		{
			var dob = birthday.split('-');
			mm = dob.length == 3 ? dob[1] : '';
			dd = dob.length == 3 ? dob[0] : '';
			dd1 = dob.length == 3 ? dob[0] : '';

			yyyy = dob.length == 3 ? dob[2] : '';
			yyyy1 = dob.length == 3 ? dob[2] : '';

           //$('#update_dob1').val(yyyy+'-'+mm+'-'+dd);
		
		}
		if(dd.length==4)
		{
			yyyy=dd1;
			dd=yyyy1;
		}
		
    /*if(firstname.trim()=='')
	{
		toast('Please enter mandatory fields.');
	}
	else if(vtype=='' || vtype==undefined || vtype==null)
	{
		toast('Please check Vehicle Type');
	}*/
	// else if(vpa_txt1.trim()=='' || vpa_domain1=='' || vpa_domain1==undefined || vpa_domain1==null)
	// {
	// 	toast('Please check VPA details');
	// }
	// else if(vpa_txt2.trim()=='' || vpa_domain2=='' || vpa_domain2==undefined || vpa_domain2==null)
	// {
	// 	toast('Please check VPA details');
	// }
	// else if(card1.trim()=='' || card2.trim()=='')
	// {
	// 	toast('Please enter card details.');
	// }
	//else
	//{
    
	 $.ajax({
			url: SERVER+'mloyalprofileupdate.asp',
			type: 'GET',
			timeout: 30000,
		  	data: {
				'FirstName': firstname,
				'LastName': lastname,
				'deviceid': reg_id,
				'cname':'',
				'mobileno': mobile,
				'Emailid': email,
				'dd': dd,
				'mm': mm,
				'yy': yyyy,
                'deviceType': deviceType,
				'doaday': '',
				'doamonth': '',
				'doayear': '',
				'FlatNo': '',
				'PostalCode': '',
				'City': '',
				'Vehicletype': vtype,
				'VPA1': vpamain1,
				'VPA2': vpamain2,
				'cardno1': card1,
				'Card1CVVNumber': cardCvv1,
				'Card1ExpiryDate': card1_expire_date,
				'cardno2': card2,
				'Card2CVVNumber': cardCvv2,
				'Card2ExpiryDate': card2_expire_date
				
  
  
  
			},
			success: function(data, textStatus, xhr) {

				
				localStorage.setItem("profiledone_nayaraenergy","Yes");
				
				if (data.indexOf("Success")>=0)
				{
						toast('Your profile has been updated successfully.');
						user.firstname=firstname;
						user.lastname=lastname;
						user.emailid=email;

				}
				else if(data=='Failed')
					toast('Update failed.');
				else
					toast(data);
					

				
				if(user.firstname=='undefined' || user.firstname=='null' || user.firstname==null || user.firstname=='')
				{
					document.getElementById("profilenm").innerHTML= 'Guest';
					document.getElementById("profilenm1").innerHTML='Guest';
				}
				else
				{
					var fn='';
					var ln='';
					if(user.firstname != '')
					{
						fn = user.firstname.substring(0, 1);
					}
					if(user.lastname != '')
					{
						ln = user.lastname.substring(0, 1);
					}
					if(user.id != '')
					{
						var id1 = user.id.substring(0, 4);
						var id2 = user.id.substring(4, 8);
						var id3 = user.id.substring(8, 10);
					}

					document.getElementById("sortname").innerHTML= fn+''+ln;
					document.getElementById("profilenm").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts").innerHTML=user.balance;
					document.getElementById("profilenm1").innerHTML= user.firstname+' '+user.lastname;
					document.getElementById("profilepts1").innerHTML=user.balance;
					//document.getElementById("pro_id").innerHTML=id1+' '+id2+' '+id3;
					document.getElementById("pr_valid").innerHTML=user.validity;

					//document.getElementById("firm_nm").innerHTML= user.proprietorname;
					//document.getElementById("sap_code").innerHTML= user.sapcode;
						
				}
					
				$.mobile.changePage( "#homepage", {transition: "flip"} );
		         
				
				
			},
			error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
		
  //}
		
}

function submitFeedback()
{

 var service=$('input[name="service"]:checked').val();
 var product=$('input[name="product"]:checked').val();
 var offers=$('input[name="offers"]:checked').val();
 var store_atmosphere=$('input[name="store_atmosphere"]:checked').val();

 var comments = $('#feedback_enq').val();


 /*if(service==''){
		  toast('Please enter mandatory fields!');
		}
 else{*/

   $.ajax({
    url: SERVER+'feedback_json.asp',
    type: 'GET',
    timeout: 50000,
    dataType: 'html',
    data: {

				'MobileNo': user.mobile,
				'FirstName': '',
				'LastName': '',
				'EmailId': '',       
				'StoreId': '',    
				'Var1': service,   
				'Var2': product,     
				'Var3': offers,
				'Var4': store_atmosphere,    
				'Var5': '',      
				'Var6': '',     
				'Var7': '',        
				'Var8': '',             
				'Var9': '',
				'Var10': '',
				'Var11': '',           
				'Var12': '',
				'Var13': comments,
				'Var14': '',
				'Var15': '',
				'Var16': '',
				'Var17': '',
				'Var18': '',
				'Var19': '',
				'Var20': ''	
					
			},
   
    success: function(data, textStatus, xhr) {

				console.log('JSONDATA:'+JSON.stringify(data));

				toast('Thanks for submitting your valuable feedback.');

				$.mobile.changePage( "#homepage", { transition: "none"} );

				$('input[name="service"]').attr('checked', false);
				$('input[name="service"]').prop('checked',false);
				$('input[name="product"]').attr('checked', false);
				$('input[name="product"]').prop('checked',false);
				$('input[name="offers"]').attr('checked', false);
				$('input[name="offers"]').prop('checked',false);
				$('input[name="store_atmosphere"]').attr('checked', false);
				$('input[name="store_atmosphere"]').prop('checked',false);
				$('#feedback_enq').val('');
    },
    error: function(xhr, textStatus, errorThrown) {
				toast('Could not connect to Server, make sure you are connected to Internet'+textStatus+': '+errorThrown);
    }
  });

 //}

}

function showTrainingVideos()
{
	 document.getElementById("training_vdos_div").innerHTML= '';
	 
	 var tabserver = SERVER+"specials_json.asp";
	 
	 $.getJSON(
            tabserver , {  }, 
		     function (json) {
			   //console.log("SSSSS:" + JSON.stringify(json));
				var str='';
                 
				for(var i=0;i<json.length;i++)
				{
					if(json[i].AdName=='TrainingVideo')
					{
						str+= '<div class="event_block" style="margin-bottom: 25px;">';
						str+= '<div class="event_fig">';
					    str+= '<iframe width="100%" height="200" src='+json[i].AdDesc+' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
						//str+= '<iframe width="100%" height="200" src=https://www.youtube.com/embed/FqRQGaCVrsM&t=3s title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen><img src="assets/images/app_images/update-banner.png" alt=""></iframe>';
				        str+= '</div>';
						str+= '</div>';
					}
		        }

				document.getElementById("training_vdos_div").innerHTML= str;

				$.mobile.changePage( "#training", { transition: "none"} );

    }).error(function () {
        
            toast("Error: Could not connect to Server, make sure you are connected to Network");
       
    });
	 
}

function showTnc_popup()
{

	//$('#tnc_popup').popup();
    //$('#tnc_popup').popup("open");

	location.href="https://taghash.co/NayaraMiniApp/tnc.docx";
}

function close_Popup()
{
	$('#tnc_popup').popup("close");
}

function receivedEvent(id) {
       

 var push = PushNotification.init({ "android": {"senderID": "243289324479"}});
                     push.on('registration', function(data) {
                     
					 reg_id=data.registrationId;
                     });
          
                     push.on('notification', function(data) {
						alert(data.message);
					 
						//showInbox();
                     });
          
                     push.on('error', function(e) {
						//alert(e);
                     }
					);
    }

function capturePhoto_profile()
{
	  //navigator.camera.getPicture(uploadPhoto4, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
	  $("#optionspop_profile").popup();
	  $("#optionspop_profile").popup("open");
}

function capturePhoto4() 
{
	try{
		$("#optionspop_profile").popup("close");
		}catch(err) 
	{	}

	navigator.camera.getPicture(uploadPhoto4, onFail, { quality: 40,destinationType: navigator.camera.DestinationType.FILE_URI,targetWidth:512,targetWidth:512,correctOrientation:true});
}

function capturePhoto4_gallery()
{
	try{
		$("#optionspop_profile").popup("close");
		}catch(err) 
	{	}

	navigator.camera.getPicture(uploadPhoto4, onFail, { quality: 40,
					destinationType: navigator.camera.DestinationType.FILE_URI,
					sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,targetWidth:512,targetWidth:512,correctOrientation:true
				});
}

function onFail(message)
{
	toast('Failed because: ' + message);
}

function uploadPhoto4(imageURI) 
{

				
				/*var b_Image = document.getElementById('update_photo');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;*/

				var b_Image = document.getElementById('update_photo1');
				b_Image.style.display = 'block';
				b_Image.src = imageURI;


				var options = new FileUploadOptions();
				options.fileKey="file";
				//var fName=user.mobile+'_'+Math.floor((Math.random() * 1000) + 1)+(imageURI.substr(imageURI.lastIndexOf('/')+1)).replace('%3A','-');
				//var fName='photo_'+Math.floor((Math.random() * 1000000) + 1);
				var fName='nayaraenergy_'+user.mobile;

				
				options.fileName= fName;
				options.mimeType="image/jpeg";
				options.mimeType="image/png";
				//filenm=versionurl+'uploads/'+options.fileName;
				//file_pphoto = options.fileName+".jpg";

				file_pphoto="https://taghash.co/NayaraEnergy/uploads/"+options.fileName+".jpg";

				localStorage.setItem('file_pphoto',file_pphoto);
				
				var params = {};
				params.value1 = "test";
				params.value2 = "param";
            
                options.params = params;

				var ft = new FileTransfer();

			    var statusDom;
			    var statusDomdiv;

				//var cattype = localStorage.getItem('cattype');
				/*statusDom=document.getElementById("update_photo_status");
				statusDomdiv=document.getElementById("update_photo_status_div");
				
				var ft = new FileTransfer();
				ft.onprogress = function(progressEvent) {
					
					statusDomdiv.style.display = 'block';

   				 if (progressEvent.lengthComputable) {
   				 
       						 
       						 var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100)+1;

       						 
       						 statusDom.value = perc;
							 try{
								  statusDom.setAttribute("data-label", perc+"%");
							 }catch(err){}

       						 
   				 } else {
     				  
     				      
    			}
    			
				};*/

				ft.upload(imageURI, encodeURI("https://taghash.co/NayaraEnergy/upload_photo_new.php"), win, failPhoto4, options, true);
}

function failPhoto4(error) 
{
				toast('Photo upload failed. Please try after sometime: ' + error.code);
				localStorage.removeItem('file_pphoto');
				file_pphoto = '';
				document.getElementById('update_photo1').src = "assets/images/user_pic.png";
				//document.getElementById('update_photo_self').src = "";
}

function showUpdatesbanners_vdo()
{
	 document.getElementById("homepagebanners_update").innerHTML= '';
	 
	 var tabserver = SERVER+"specials_json.asp";
	 
	 $.getJSON(
            tabserver , {  }, 
		     function (json) {
			   //console.log("SSSSS:" + JSON.stringify(json));

				var str='';
				str+='<div class="primary_block mb-20 border_none promo_slider owl-carousel owl-theme p-0">';
                 
				for(var i=0;i<json.length;i++)
				{
					if(json[i].AdName=='Updates')
					{
						str+='<div class="event_fig">';
						//str+='<iframe width="100%" height="200" src='+json[i].AdDesc+' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
						str+='<img src="./assets/images/app_images/update_banner.jpg" alt="" style="width: 100%" />';
						str+='</div>';
					}
		        }
                
				str+='</div>';

				document.getElementById("homepagebanners_update").innerHTML= str;

				$(".promo_slider").owlCarousel({
					items:1,
					loop:false,
					margin:0,
					autoplay:true,
					nav:false,
					dots:true,
					autoplayTimeout:1800
				});

				//$.mobile.changePage( "#homepage", { transition: "none"} );

    }).error(function () {
        
            //toast("Error: Could not connect to Server, make sure you are connected to Network");
       
    });
	 
}

$(document).on("pageshow", "#homepage", function(){
	
	//showUpdatesbanners_vdo();
	//setUserbalance_aboutus();

	stopVideos();

	get_transactions_details_homepage();

});

function loadProducts()
{
	
	var url_new = 'https://www.nayaraenergy.com/';
	var ref_new = cordova.InAppBrowser.open(url_new, '_blank', 'location=yes');

}

function purchaseHistory()
{
	var pop = document.getElementById('purchaseHistory');

	if(pop.style.display=='block')
	{
		pop.style.display = 'none';
	}
    else
	{
		pop.style.display = 'block';
		var pop1 = document.getElementById('redeemHistory');
		var pop2 = document.getElementById('bonusHistory');
		pop1.style.display = 'none';
		pop2.style.display = 'none';
	}
}

function redeemHistory()
{
	var pop = document.getElementById('redeemHistory');
	if(pop.style.display=='block')
	{
		pop.style.display = 'none';
	}
    else
	{
		pop.style.display = 'block';
		var pop1 = document.getElementById('purchaseHistory');
		var pop2 = document.getElementById('bonusHistory');
		pop1.style.display = 'none';
		pop2.style.display = 'none';
	}
}

function bonusHistory()
{
	var pop = document.getElementById('bonusHistory');
	if(pop.style.display=='block')
	{
		pop.style.display = 'none';
	}
    else
	{
		pop.style.display = 'block';
		var pop1 = document.getElementById('purchaseHistory');
		var pop2 = document.getElementById('redeemHistory');
		pop1.style.display = 'none';
		pop2.style.display = 'none';
	}
}

function showwhats_New()
{
	 document.getElementById("whatsnew_div").innerHTML= '';
	 
	 var tabserver = SERVER+"specials_json.asp";
	 
	 $.getJSON(
            tabserver , {  }, 
		     function (json) {
			   //console.log("SSSSS:" + JSON.stringify(json));

				var str='';
                 
				for(var i=0;i<json.length;i++)
				{
					if(json[i].AdName=='Updates')
					{
						str+= '<div class="event_block" style="margin-bottom: 25px;">';
						str+= '<div class="event_fig">';
					    str+= '<iframe width="100%" height="200" src='+json[i].AdDesc+' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
				        str+= '</div>';
						str+= '</div>';
					}
		        }

				document.getElementById("whatsnew_div").innerHTML= str;

				$.mobile.changePage( "#whatsnew", { transition: "none"} );

    }).error(function () {
        
            toast("Error: Could not connect to Server, make sure you are connected to Network");
       
    });
	 
}

$(document).on('pageshow', '#transactions', function (event, ui) {
	stopVideos();
    get_transactions_details();
	setUserbalance_aboutus();
	showTabContent('loyaltynew_txns', 'points_history_json.asp');


	        $('input[type=radio][name=filter_transaction]').change(function() {

					$("#dateduration-emp").hide();
					get_transactions_details_datewise(this.value);
					$("#filter_panel1").toggle();
					$(".overlay").fadeOut("fast");
			});

});

function get_transactions_details()
{
	
	  $.ajax({
		url: SERVER2+'get_transactions_details_json_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': user.mobile },
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

		console.log(JSON.stringify(data));

			var str='';
			var str2='';

			if(data.data[0].msg=='No Records Found.')
			{
				//toast('No Records Found.');
				document.getElementById('txns_pg_div1').innerHTML= '<div class="recent_transfer_header pl-4 pr-4">Earned History</div><span class="no_tx_rcrds">No Records Found.</span>';
			}
			else
			{    
				 str += '<div class="recent_transfer_header pl-4 pr-4">Earned History</div>';
				 str += '<div class="out_wrapper">';
				 str += '<div class="recent_transfer">';
				 for (var i = 0; i < data.data.length; i++)
				 {	
					
					   
							str += '<div class="recent_block pl-4 pr-4">';
							str += '<div class="recent_user_icon1"> <img src="assets/images/pointredeem.png" class="img-responsive" alt=""> </div>';
							str += '<div class="recent_user_details">';						
							str += '<p class="recent_detail_text">Points Received from Nayara Energy</p>';
							str += '<p class="recent_date">'+data.data[i].BillDate+'</p>';
							str += '<p class="recent_date">'+data.data[i].BillNumber+'</p>';
							str += '<p class="recent_date">RO Code: '+data.data1[i].StoreCode+'</p>';
							str += '<p class="recent_date">RO Name: '+data.data1[i].StoreName+'</p>';
						    str += '</div>';
						    str += '<div class="recent_user_points"><h2 class="text_green">+'+data.data[i].Points+'<span>Points</span></h2></div>';						
					        str += '</div>';
					   
							
				 }

				 str += '</div>';
				 str += '</div>';

				 document.getElementById('txns_pg_div1').innerHTML=str;

			}


			if(data.data1[0].msg=='No Records Found.')
			{
				//toast('No Records Found.');
				document.getElementById('txns_pg_div2').innerHTML= '<div class="recent_transfer_header pl-4 pr-4">Redeem History</div><span class="no_tx_rcrds">No Records Found.</span>';
			}
			else
			{
				 str2 += '<div class="recent_transfer_header pl-4 pr-4">Redeem History</div>';
				 str2 += '<div class="out_wrapper">';
				 str2 += '<div class="recent_transfer">';
				 for (var i = 0; i < data.data1.length; i++)
				 {	
					
					    
							str2 += '<div class="recent_block pl-4 pr-4">';
							str2 += '<div class="recent_user_icon1"> <img src="assets/images/pointredused.png" class="img-responsive" alt=""> </div>';
							str2 += '<div class="recent_user_details">';						
							str2 += '<p class="recent_detail_text">Points Redeemed from Nayara Energy</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RedeemDate+'</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RefBillNumber+'</p>';
							str2 += '<p class="recent_date">RO Code: '+data.data1[i].StoreCode+'</p>';
							str2 += '<p class="recent_date">RO Name: '+data.data1[i].StoreName+'</p>';
						    str2 += '</div>';
						    str2 += '<div class="recent_user_points"><h2 class="text_red">-'+data.data1[i].Points+'<span>Points</span></h2></div>';						
					        str2 += '</div>';
					    
							
				 }

				 str2 += '</div>';
				 str2 += '</div>';

				 document.getElementById('txns_pg_div2').innerHTML=str2;

			}

			//$.mobile.changePage("#txns_pg");
		},
		error: function(xhr, textStatus, errorThrown) {

		}
	  });
}

function get_transactions_details_datewise(transact)
{

	//$("#filter_panel1").slideToggle();

	document.getElementById('txns_pg_div1').innerHTML='';
	document.getElementById('txns_pg_div2').innerHTML='';

    //var duration1 = $('input[type=radio][name=filter_transaction]').val();
	var duration=$("#filter_transaction_div :radio:checked").val();
	console.log('duration:'+duration);
	var fromdt ='';
	var enddt = '';
	
	if(duration == 'last1month')
    {
    	var today = new Date();
    	var d = new Date();
    	d.setMonth(d.getMonth() - 1);
    	enddt = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    	fromdt = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    }
    else if(duration == 'last3months')
    {
    	var today = new Date();
    	var d = new Date();
    	d.setMonth(d.getMonth() - 3);
    	enddt = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    	fromdt = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    }
    else if(duration == 'last6months')
    {
    	var today = new Date();
    	var d = new Date();
    	d.setMonth(d.getMonth() - 6);
    	enddt = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    	fromdt = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    }
    else if(duration == 'last1year')
    {
    	var today = new Date();
    	var d = new Date();
    	d.setMonth(d.getMonth() - 12);
    	enddt = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    	fromdt = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    }

	console.log('fromdt:'+fromdt);
	console.log('enddt:'+enddt);
	
	  $.ajax({
		url: SERVER2+'get_transactions_details_json_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': user.mobile,'sdate': fromdt,'edate': enddt },
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

		console.log(JSON.stringify(data));

			var str='';
			var str2='';

			if(data.data[0].msg=='No Records Found.')
			{
				//toast('No Records Found.');
				document.getElementById('txns_pg_div1').innerHTML= '<div class="recent_transfer_header pl-4 pr-4">Earned History</div><span class="no_tx_rcrds">No Records Found.</span>';
			}
			else
			{    
				 str += '<div class="recent_transfer_header pl-4 pr-4">Earned History</div>';
				 str += '<div class="out_wrapper">';
				 str += '<div class="recent_transfer">';
				 for (var i = 0; i < data.data.length; i++)
				 {	
					
					    
							str += '<div class="recent_block pl-4 pr-4">';
							str += '<div class="recent_user_icon1"> <img src="assets/images/pointredeem.png" class="img-responsive" alt=""> </div>';
							str += '<div class="recent_user_details">';						
							str += '<p class="recent_detail_text">Points Received from Nayara Energy</p>';
							str += '<p class="recent_date">'+data.data[i].BillDate+'</p>';
							str += '<p class="recent_date">'+data.data[i].BillNumber+'</p>';
							str += '<p class="recent_date">RO Code: '+data.data1[i].StoreCode+'</p>';
							str += '<p class="recent_date">RO Name: '+data.data1[i].StoreName+'</p>';
						    str += '</div>';
						    str += '<div class="recent_user_points"><h2 class="text_green">+'+data.data[i].Points+'<span>Points</span></h2></div>';						
					        str += '</div>';
					    
							
				 }

				 str += '</div>';
				 str += '</div>';

				 document.getElementById('txns_pg_div1').innerHTML=str;

			}


			if(data.data1[0].msg=='No Records Found.')
			{
				//toast('No Records Found.');
				document.getElementById('txns_pg_div2').innerHTML= '<div class="recent_transfer_header pl-4 pr-4">Redeem History</div><span class="no_tx_rcrds">No Records Found.</span>';
			}
			else
			{
				 str2 += '<div class="recent_transfer_header pl-4 pr-4">Redeem History</div>';
				 str2 += '<div class="out_wrapper">';
				 str2 += '<div class="recent_transfer">';
				 for (var i = 0; i < data.data1.length; i++)
				 {	
					
					    
							str2 += '<div class="recent_block pl-4 pr-4">';
							str2 += '<div class="recent_user_icon1"> <img src="assets/images/pointredused.png" class="img-responsive" alt=""> </div>';
							str2 += '<div class="recent_user_details">';						
							str2 += '<p class="recent_detail_text">Points Redeemed from Nayara Energy</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RedeemDate+'</p>';
							str2 += '<p class="recent_date">'+data.data1[i].RefBillNumber+'</p>';
							str2 += '<p class="recent_date">RO Code: '+data.data1[i].StoreCode+'</p>';
							str2 += '<p class="recent_date">RO Name: '+data.data1[i].StoreName+'</p>';
						    str2 += '</div>';
						    str2 += '<div class="recent_user_points"><h2 class="text_red">-'+data.data1[i].Points+'<span>Points</span></h2></div>';						
					        str2 += '</div>';

							
				 }

				 str2 += '</div>';
				 str2 += '</div>';

				 document.getElementById('txns_pg_div2').innerHTML=str2;

			}

			//$.mobile.changePage("#txns_pg");
		},
		error: function(xhr, textStatus, errorThrown) {

		}
	  });
}

$(document).on('pageshow', '#pointPage', function (event, ui) {
    stopVideos();
	$('#kyc_paytm_id').val(user.mobile);
	update_balancePts();
 
});

function update_balancePts()
{
	  $.ajax({
			url: SERVER2+'get_points_json_api.asp',
			type: 'GET',
			timeout: 300000,
            dataType: "json",
            data: {
			    'apiuid': 'MLOYALAPI',
				'apipswd': 'Ml0yalAP!2o14',
				'mobileno': user.mobile
				},
			success: function(data, textStatus, xhr) {
				
				//console.log('Data:'+JSON.stringify(data));

				if(data.data!='')
				{
					 console.log('BalancePoints:'+data.data[0].BalancePoints);
					 user.balance = data.data[0].BalancePoints;
					 localStorage.setItem('balance',user.balance);

					 document.getElementById("profilepts").innerHTML= data.data[0].BalancePoints;
					 document.getElementById("profilepts1").innerHTML= data.data[0].BalancePoints;
					 $('#kyc_paytm_amount').val(data.data[0].BalancePoints);
				}
				else
				{
					 user.balance = '0';
					 localStorage.setItem('balance',user.balance);

					 document.getElementById("profilepts").innerHTML= '0';
					 document.getElementById("profilepts1").innerHTML= '0';
				}
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet'+errorThrown);
				 $.mobile.changePage( "#homepage", { transition: "none"} );
				}
			 
		});
}

function submitPaytm()
{

    var userid = $('#kyc_paytm_id').val();
    var amount = $('#kyc_paytm_amount').val();

	if(userid=='')
	{
		toast("Please enter Paytm Wallet Number");
	}
	else if(userid.length!=10)
    {
		toast('Please enter valid Paytm Wallet Number');
	}
	else if(amount=='' || amount=='0' )
	{
		toast("Please enter points to redeem");
	}
    else if((parseFloat(amount)) > parseFloat(user.balance))
	{
		toast('Points redeemeed cannot be greater than point balance');
	}
	else
	{
		 burnpoints_byqr(amount,userid);
	}

}

function burnpoints_byqr(camount,userid)
{

	var refbillno = 'nayaraenergy'+Math.floor((Math.random() * 1000000000) + 1);

	$.ajax({
			url: SERVER2+"burn_points_json_api.asp",
			type: 'POST',
		    timeout: 50000,
		    dataType: 'json',
		    data:{
			  "mobileno": user.mobile,
			  "ref_bill_number": refbillno,
			  "redeem_points": camount,
			  "send": '1'
            },
		    beforeSend: function (xhr) {

		     	$("#wait").css("display","block");
				xhr.setRequestHeader('apiuid', 'MLOYALAPI');
				xhr.setRequestHeader('apipswd', 'Ml0yalAP!2o14');

            },
		    complete: function(xhr, textStatus) {
		    	$("#wait").css("display","none");
		    },
			success: function(data, textStatus, xhr) {
			    
				 console.log("data:"+JSON.stringify(data));

				 if(data.data.length>=1)
				 {
					//toast_p(data.data);
					sendGratification(camount,userid);
				 }
				 else
				 {
					 toast_p(data.error);
					 $.mobile.changePage( "#homepage", { transition: "none"} );
				 }
                    
			 },
			error: function(xhr, textStatus, errorThrown) {
				 toast('Could not connect to Server, make sure you are connected to Internet');
			}
		});
}

function sendGratification(amount,userid)
{
	    $.ajax({
				url: "https://taghash.co/grati/penite/send.php",
				type: 'POST',
				timeout: 70000,
				dataType: 'json',
				data:JSON.stringify({
					  "mobileno": userid,
					  "amount": amount
				}),
				beforeSend: function (xhr) {

					$("#wait").css("display","block");

				},
				complete: function(xhr, textStatus) {
					$("#wait").css("display","none");
				},
				success: function(data, textStatus, xhr) {
				 
				 console.log("data:"+JSON.stringify(data));

					if(data.response.status=='ACCEPTED')
					{
						//toast('Request accepted');
						toast_p('RS.('+amount+') will be added to your Paytm wallet after Approval.');
						//burnpoints(amount);

						//document.getElementById("filter_panel_div").innerHTML= 'RS.('+amount+') Will be credited to your Paytm wallet after Approval.';
						//$.mobile.changePage( "#homepage", { transition: "none"} );
						authenticate_after_grati();
						//$(".overlay").fadeIn("fast");
						//$("#filter_panel").slideToggle("fast");
					}
					else
					{
						toast_p('Request failed');
						$.mobile.changePage( "#homepage", {transition: "none"} );
					}

					$.mobile.changePage( "#homepage", { transition: "none"} );
						
				 },
				error: function(xhr, textStatus, errorThrown) {
					 toast('Could not connect to Server, make sure you are connected to Internet');
					}
			});
}

function authenticate_after_grati()
{
						$('#username_new').val(localStorage.getItem("usernamenayaraenergy"));
						var pass = localStorage.getItem("passwordnayaraenergy");

						if(pass.length>=4)
						{
						  var i=4;
						  while(i>0)
								  {
									$('#codeBox'+i).val(parseInt(pass%10));
									i--;
									pass = parseInt(pass/10);
									
								  }
						}

						setTimeout( function() {
							authenticate_new();
						 }, 1000);  // 1 seconds
}

function get_transactions_details_homepage()
{
	
	  $.ajax({
		url: SERVER2+'get_transactions_details_json_api.asp',
		type: 'GET',
		timeout: 50000,
		dataType: 'json',
		data: {'apiuid': 'MLOYALAPI','apipswd':'Ml0yalAP!2o14','mobileno': user.mobile },
		complete: function(xhr, textStatus) {
	   //called when complete
		}, success: function(data, textStatus, xhr) {

		console.log(JSON.stringify(data));

			var str='';
			var str2='';

			if(data.data[0].msg=='No Records Found.')
			{
				//toast('No Records Found.');
				document.getElementById('txns_homepage').innerHTML= '<span class="no_tx_rcrds">No Records Found.</span>';
			}
			else
			{    
				 //str += '<div class="recent_transfer_header pl-4 pr-4">Earned History</div>';
				 //str += '<div class="out_wrapper">';
                 var maxlen = '1';
				 if(data.data.length>=1)
				    maxlen = '1' ;
                 if(data.data.length>=2)
				    maxlen = '2' ;
				 if(data.data.length>=3)
				    maxlen = '3' ;
				 if(data.data.length>=4)
				    maxlen = '4' ;
				 if(data.data.length>=5)
				    maxlen = '5' ;
					 console.log(maxlen)

				 str += '<div class="recent_transfer">';
				 for (var i = 0; i < maxlen; i++)
				 {	
					   
					    //str += '<div class="recent_transfer_header pl-4 pr-4">'+data.data[i].BillDate+'</div>';
						if(data.data[i].TransType == 'Revoke')
					    {
							str += '<div class="recent_block pl-4 pr-4">';
							str += '<div class="recent_user_icon1"> <img src="assets/images/pointredused.png" class="img-responsive" alt=""> </div>';
							str += '<div class="recent_user_details">';						
							str += '<p class="recent_detail_text">Points Revoked from Nayara Energy</p>';
							str += '<p class="recent_date">'+data.data[i].BillDate+'</p>';
							str += '<p class="recent_date">'+data.data[i].BillNumber+'</p>';
						    str += '</div>';
						    str += '<div class="recent_user_points"><h2 class="text_green">-'+data.data[i].Points+'<span>Points</span></h2></div>';						
					        str += '</div>';
						}
						else if(data.data[i].TransType == 'Redeem')
						{
							str += '<div class="recent_block pl-4 pr-4">';
							str += '<div class="recent_user_icon1"> <img src="assets/images/pointredused.png" class="img-responsive" alt=""> </div>';
							str += '<div class="recent_user_details">';						
							str += '<p class="recent_detail_text">Points Redeemed from Nayara Energy</p>';
							str += '<p class="recent_date">'+data.data[i].BillDate+'</p>';
							str += '<p class="recent_date">'+data.data[i].BillNumber+'</p>';
						    str += '</div>';
						    str += '<div class="recent_user_points"><h2 class="text_green">-'+data.data[i].Points+'<span>Points</span></h2></div>';						
					        str += '</div>';
						}
						else
						{
							str += '<div class="recent_block pl-4 pr-4">';
							str += '<div class="recent_user_icon1"> <img src="assets/images/pointredeem.png" class="img-responsive" alt=""> </div>';
							str += '<div class="recent_user_details">';						
							str += '<p class="recent_detail_text">Points Received from Nayara Energy</p>';
							str += '<p class="recent_date">'+data.data[i].BillDate+'</p>';
							str += '<p class="recent_date">'+data.data[i].BillNumber+'</p>';
						    str += '</div>';
						    str += '<div class="recent_user_points"><h2 class="text_green">+'+data.data[i].Points+'<span>Points</span></h2></div>';						
					        str += '</div>';
					    }
				    
							
				 }

				 str += '</div>';
				 //str += '</div>';

				 document.getElementById('txns_homepage').innerHTML=str;

			}


			

			//$.mobile.changePage("#txns_pg");
		},
		error: function(xhr, textStatus, errorThrown) {

		}
	  });
}

function openRewards_new()
{

	toast('coming soon..');
	//$.mobile.changePage("#rewards_pg");

	  /*var url_new = 'https://nayaraenergy.mloyalretail.com/rewardstore/default.asp?uid='+user.uid_nayaraenergy;
		var ref_new = cordova.InAppBrowser.open(url_new, '_blank', 'location=yes');
	
		ref_new.addEventListener('exit', function (event) {
				 
				$('#username_new').val(localStorage.getItem("usernamenayaraenergy"));
				var pass = localStorage.getItem("passwordnayaraenergy");
	
				if(pass.length>=4)
				{
							var i=4;
							while(i>0)
							{
								$('#codeBox'+i).val(parseInt(pass%10));
								i--;
								pass = parseInt(pass/10);
													
							}
			   }
	
				setTimeout( function() {
					  authenticate_new();
				}, 1000);  //1 seconds
		});*/
}

function showRewards_new()
{
	$.mobile.changePage("#pointPage");
}

function openWeb(url)
{
	var ref = window.open(url, '_blank', 'location=yes,toolbar=yes');
}

function purchaseHistory_txns()
{
	var pop = document.getElementById('purchaseHistory_txns');

	if(pop.style.display=='block')
	{
		pop.style.display = 'none';
	}
    else
	{
		pop.style.display = 'block';
		var pop1 = document.getElementById('redeemHistory_txns');
		var pop2 = document.getElementById('bonusHistory_txns');
		pop1.style.display = 'none';
		pop2.style.display = 'none';
	}
}

function redeemHistory_txns()
{
	var pop = document.getElementById('redeemHistory_txns');
	if(pop.style.display=='block')
	{
		pop.style.display = 'none';
	}
    else
	{
		pop.style.display = 'block';
		var pop1 = document.getElementById('purchaseHistory_txns');
		var pop2 = document.getElementById('bonusHistory_txns');
		pop1.style.display = 'none';
		pop2.style.display = 'none';
	}
}
function bonusHistory_txns()
{
	var pop = document.getElementById('bonusHistory_txns');
	if(pop.style.display=='block')
	{
		pop.style.display = 'none';
	}
    else
	{
		pop.style.display = 'block';
		var pop1 = document.getElementById('purchaseHistory_txns');
		var pop2 = document.getElementById('redeemHistory_txns');
		pop1.style.display = 'none';
		pop2.style.display = 'none';
	}
}

function set_card_min_month(){
	var today = new Date();
	//today.setDate(today.getDate() + 1);


	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	var hr = today.getHours();
	var mint = today.getMinutes();

	if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    }
	if(hr<10){
        hr='0'+hr;
    } 
	if(mint<10){
        mint='0'+mint;
    }

	var todaymn = yyyy+'-'+mm;
	var ctime = hr+':'+mint;

	//document.getElementById("durationto_dealermem").value = today;

	document.getElementById("update_card1_expire_date").setAttribute("min", todaymn);
	document.getElementById("update_card2_expire_date").setAttribute("min", todaymn);
}
$(document).on("pageshow", "#profilepage", function(){
	stopVideos();
	set_card_min_month();

});

function home_Scan()
{
	$("#scan-points").css("display","none");
	$.mobile.changePage("#homepage");
	$(".overlay").fadeOut("fast");
}

var stopVideos = function () {
	var videos = document.querySelectorAll('iframe');


	Array.prototype.forEach.call(videos, function (video) {
		
			var src = video.src;
			video.src = src;
		
	});
};