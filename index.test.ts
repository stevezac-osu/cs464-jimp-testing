import Jimp from "jimp"
const OUTPUTFOLDER = './output/'
const JS = 'js'
const TS = 'ts'
const FILETYPES = [
	'jpg',
	'png',
	'bmp',
	'tiff',
	'gif'
	]
const ACTIONS = [
	'01_write',
	'02_contain',
	'03_cover',
	'04_resize',
	'05_scale',
	'06_scaleToFit',
	'07_autocrop',
	'09_crop',
	'10_blit',
	'11_blitcropped',
	'12_composite',
	'13_mask',
	'14_flip_none',
	'15_flip_horiz',
	'16_flip_vert',
	'17_flip_both',
	'18_mirror_none',
	'19_mirror_horiz',
	'20_mirror_vert',
	'21_mirror_both',
	'22_rotate_pos',
	'23_rotate_neg',
	'24_brightness',
	'25_contrast',
	'26_dither565',
	'27_greyscale',
	'28_invert',
	'29_normalize',
	'30_fade',
	'31_opacity',
	'32_opaque',
	'33_gaussian',
	'34_blur',
	'35_posterize',
	'36_sepia'
]

var key = ACTIONS[0]
FILETYPES.forEach((type:string) => {
	test(key+" -- "+ type, async ()=> {
		console.log("Starting: "+key+" -- "+ type)
		var img_js = await Jimp.read(OUTPUTFOLDER+key+"_"+JS+"."+type)
		var img_ts = await Jimp.read(OUTPUTFOLDER+key+"_"+TS+"."+type)
		var distance = Jimp.distance(img_js, img_ts);
		var diff = Jimp.diff(img_js, img_ts);
		expect(distance).toBeLessThan(.15)
		expect(diff.percent).toBeLessThan(.15)
	})
})

var type = FILETYPES[0]
ACTIONS.forEach((key:string) => {
	test(key+" -- "+ type, async ()=> {
		console.log("Starting: "+key+" -- "+ type)
		var img_js = await Jimp.read(OUTPUTFOLDER+key+"_"+JS+"."+type)
		var img_ts = await Jimp.read(OUTPUTFOLDER+key+"_"+TS+"."+type)
		var distance = Jimp.distance(img_js, img_ts);
		var diff = Jimp.diff(img_js, img_ts);
		expect(distance).toBeLessThan(.15)
		expect(diff.percent).toBeLessThan(.15)
	})
})
