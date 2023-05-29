var Jimp = require('jimp');
const OUTPUTFOLDER = './output/'
const SCRIPTTYPE = 'ts'
const ASSET = './assets/crayon.png'
const FILETYPES = [
	'jpg',
	'png',
	'bmp',
	'tiff',
	'gif'
	]
const ACTIONS = {
	'01_write': image => image, //Do Nothing
	'02_contain': image => image.contain(100, 100),
	'03_cover': image => image.cover(100, 100),
	'04_resize': image => image.resize(100, 100),
	'05_scale': image => image.scale(.5),
	'06_scaleToFit': image => image.scaleToFit(100, 100),
	'07_autocrop': image => image.autocrop(),
	'09_crop': image => image.crop(78, 78, 100, 100),
	'10_blit': image => image.blit(image, 100, 100),
	'11_blitcropped': image => image.blit(image, 100, 100, 78, 78, 0, 0),
	'12_composite': image => image.composite(image, 100, 100),
	'13_mask': image => image.mask(image, 100, 100),
	'14_flip_none': image => image.flip(false, false),
	'15_flip_horiz': image => image.flip(true, false),
	'16_flip_vert': image => image.flip(false, true),
	'17_flip_both': image => image.flip(true, true),
	'18_mirror_none': image => image.mirror(false, false),
	'19_mirror_horiz': image => image.mirror(true, false),
	'20_mirror_vert': image => image.mirror(false, true),
	'21_mirror_both': image => image.mirror(true, true),
	'22_rotate_pos': image => image.rotate(90),
	'23_rotate_neg': image => image.rotate(-90),
	'24_brightness': image => image.brightness(.5),
	'25_contrast': image => image.contrast(.5),
	'26_dither565': image => image.dither565(),
	'27_greyscale': image => image.greyscale(),
	'28_invert': image => image.invert(),
	'29_normalize': image => image.normalize(),
	'30_fade': image => image.fade(.5),
	'31_opacity': image => image.opacity(.5),
	'32_opaque': image => image.opaque(),
	'33_gaussian': image => image.gaussian(2),
	'34_blur': image => image.blur(2),
	'35_posterize': image => image.posterize(2),
	'36_sepia': image => image.sepia()
}

const logError = err => console.log(err)

const writeAsAvailableFileTypes = (image, fileNameBase) => {
	FILETYPES.forEach(type => image.write(OUTPUTFOLDER+fileNameBase+'.'+type)) 
}

Object.keys(ACTIONS).forEach(key => {
	Jimp.read(ASSET).then(image => {
		var myImage = ACTIONS[key](image)
		writeAsAvailableFileTypes(myImage, key+'_'+SCRIPTTYPE)
	}).catch(err => {console.log(key);console.log(err)})
})
