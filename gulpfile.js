var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task("default", function(){
	console.log("Hooray - you created a Gulp Task.");
});

gulp.task("html", function(){
	console.log("Imagine something usefull being done to your HTML here!");
});

gulp.task("styles", function(){
	console.log("Imagine Sass or PostCss task running here!");
});

gulp.task('watch', function(){
	watch("./app/index.html", function(){
		gulp.start("html");
	});
	watch("./app/assets/styles/**/*.css", function(){
		gulp.start("styles");
	});
	
});