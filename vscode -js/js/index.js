$(document).ready(function(){
	animationBoutons();
	animationTitre();
	animationSousHeaderText();
	zoomLesImage();
	showMessage();
});
	animationContenu();
	scrollerLogosReseauSc();
	zoomCartePersonnage();
	contenuAdv();
	contenuVideo();
	setInterval(SliderImagePre,3000);
	



	function animationBoutons()
	{
		$(".bouton").mouseover(function(){
			$(this).css({background: 'linear-gradient(to right,rgba(255, 255, 255, 1),rgba(255,0,0, 1))'});
		});
		$(".bouton").mouseout(function(){
			$(this).css({background: 'linear-gradient(to right,rgba(255, 255, 255, .40),rgba(255,0,0, .40))'})
		})
	}

	scrollerLogosReseauSc();
	function scrollerLogosReseauSc()
	{
		var logos = document.querySelector(".logo-reseaux-sc");
		window.addEventListener("scroll",()=>{
		const {scrollTop} = document.documentElement;
		if(scrollTop>320)
			logos.style.top=scrollTop+"px";
		});
	}

function animationTitre()
{
	$(".titre").css({left:'0px',transition:'left 0.9s ease-in-out'});
	$("p").css({display:"none"});
	$("p").fadeIn(5000);
}

function animationSousHeaderText()
{
	$(".sous-header-text").css({left:'34%',transition:'left 1s ease-in-out'});
}

function animationContenu()
{
	window.addEventListener("scroll",()=>{
	var cachePardefautHero = document.querySelectorAll(".cacheParDefaut_hero");
	var cachePardefautM = document.querySelectorAll(".cacheParDefaut_m");
	const {scrollTop} = document.documentElement;
	if(scrollTop>900){
		for(let i=0;i<cachePardefautHero.length;i++){
			cachePardefautHero[i].style.transform="scale(1)";
			cachePardefautHero[i].style.transition="transform .5s ease-in-out";
		}
	}
	else if(scrollTop<900){
		for(let i=0;i<cachePardefautHero.length;i++){
			cachePardefautHero[i].style.transform="scale(0)";
			cachePardefautHero[i].style.transition="transform .5s ease-in-out";
		}
	}
	});
	
}

function contenuAdv()
{
	window.addEventListener("scroll",()=>{
	var cachePardefautM = document.querySelectorAll(".cacheParDefaut_m");
	const {scrollTop} = document.documentElement;
	
	if(scrollTop>2360){
		for(let i=0;i<cachePardefautM.length;i++){
			cachePardefautM[i].style.transform="scale(1)";
			cachePardefautM[i].style.transition="transform .5s ease-in-out";
		}
	}

	else if(scrollTop<2360){
		for(let i=0;i<cachePardefautM.length;i++){
			cachePardefautM[i].style.transform="scale(0)";
			cachePardefautM[i].style.transition="transform .5s ease-in-out";
		}
	}
	});
}
function contenuVideo()
{
	window.addEventListener("scroll",()=>{
	var cachePardefautV = document.querySelectorAll(".sous-big-image");
	const {scrollTop} = document.documentElement;
	
	if(scrollTop>3250){
		for(let i=0;i<cachePardefautV.length;i++){
			cachePardefautV[i].style.transform="scale(1)";
			cachePardefautV[i].style.transition="transform .5s ease-in-out";
		}
	}

	else if(scrollTop<3250){
		for(let i=0;i<cachePardefautV.length;i++){
			cachePardefautV[i].style.transform="scale(0)";
			cachePardefautV[i].style.transition="transform .5s ease-in-out";
		}
	}
	});
}

function zoomLesImage()
{
	$(".cacheParDefaut").mouseover(function(){
		$(this).css({transform:'scale(1.1)',transition:'transform .8s ease-in-out'});
	});
	$(".cacheParDefaut").mouseout(function(){
		$(this).css({transform:'scale(1)',transition:'transform .8s ease-in-out'});
	});
}


function zoomCartePersonnage()
{
	var photoText = document.querySelectorAll(".cacheParDefaut1 .photo");
	var contImg = document.querySelectorAll(".cacheParDefaut1");
	for(let i=0;i<contImg.length;i++)
	{
		contImg[i].addEventListener("mouseover",()=>{
			contImg[i].style.transform="scale(1.1)";
			contImg[i].style.transition="scale 1s ease-in-out";
			photoText[i].style.visibility="visible";
			photoText[i].style.opacity="50%";
		});
		contImg[i].addEventListener("mouseout",()=>{
			contImg[i].style.transform="scale(1)";
			contImg[i].style.transition="scale 1s ease-in-out";
			photoText[i].style.visibility="hidden";
		});
	} 
}


function showMessage()
{
	$("#form").click(function(){
		$("#messagePop").css({transform:'scale(1)',transition:'transform 1s ease-in-out'});
	})
	$("#messagePop").click(function(){
		$(this).css({transform:'scale(0)',transition:'transform 1s ease-in-out'});
	})
	
}