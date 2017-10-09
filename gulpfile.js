'use strict'

const gulp=require('gulp')
const gulpTasks=require('crnx-build/gulp-tasks')

gulpTasks(
	gulp,
	"dita demo: shapes",
	['http://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.3.0/styles/default.min.css'],
	['http://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.3.0/highlight.min.js'],
	[require.resolve('crnx-dita')]
)
