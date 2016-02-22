
images = [
	"https://www.newton.ac.uk/files/covers/968361.jpg" ,
	"http://cdn.playbuzz.com/cdn/9e145ff4-233d-4d8d-9257-ca72d14e50dd/099c879d-4909-49ad-a941-73a57ff1dc35.jpg" ,
	"http://cdn.phys.org/newman/gfx/news/hires/2013/takingtheran.jpg",
	"http://drupal.hanswang.info/sites/default/files/a-mc-random-12.jpg"
]

change_img = function () {
	var index = Math.floor ( Math.random()*images.length );
	var html_img = document.getElementById("image") ;
	var img_elem = '<img src="' + images[index] + '">' ;
	console.log(img_elem) ;
	html_img.innerHTML = img_elem ;
}