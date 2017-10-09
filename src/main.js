'use strict'

const preprocessClassData=require('crnx-dita/preprocess-class-data')
const ClassOptions=require('crnx-dita/class-options')
const DiagramOutput=require('crnx-dita/diagram-output')

const classData=preprocessClassData({
	shape: {
	},
	ellipse: {
		parents: 'shape',
	},
	circle: {
		parents: 'ellipse',
	},
	// polygons:
	polygon: {
		parents: 'shape',
	},
	simple_polygon: {
		parents: 'polygon',
	},
	convex_polygon: {
		parents: 'simple_polygon',
	},
	regular_convex_polygon: {
		parents: 'convex_polygon',
	},
	// triangles:
	triangle: {
		parents: 'convex_polygon',
	},
	right_triangle: {
		parents: 'triangle',
	},
	acute_triangle: {
		parents: 'triangle',
	},
	obtuse_triangle: {
		parents: 'triangle',
	},
	isosceles_triangle: {
		parents: 'triangle',
	},
	equilateral_triangle: {
		parents: 'regular_convex_polygon,acute_triangle,isosceles_triangle',
	},
	// quadrilaterals:
	quadrilateral: {
		parents: 'polygon',
	},
	simple_quadrilateral: {
		parents: 'simple_polygon,quadrilateral',
	},
	convex_quadrilateral: {
		parents: 'convex_polygon,quadrilateral',
	},
	trapezoid: {
		parents: 'convex_quadrilateral',
	},
	isosceles_trapezoid: {
		parents: 'trapezoid',
	},
	parallelogram: {
		parents: 'trapezoid',
	},
	rectangle: {
		parents: 'isosceles_trapezoid,parallelogram',
	},
	rhombus: {
		parents: 'parallelogram',
	},
	square: {
		parents: 'regular_convex_polygon,rectangle,rhombus',
	},
})
const defaultClassColumns=['circle','shape','convex_quadrilateral','rhombus','square','rectangle']

$(function(){
	$('.crnx-dita-demo-shapes').each(function(){
		const $container=$(this)
		const classOptions=new ClassOptions(classData,defaultClassColumns)
		const diagramOutput=new DiagramOutput(classOptions)
		$container.empty().append(
			$("<table class='dita'>").append(diagramOutput.$output)
		)
	})
})
