const {src,dest,watch,series}=require("gulp")
const sass =require("gulp-sass")(require("sass"))

function build(){
    return src("scss/**/*.scss")
    .pipe(sass())
    .pipe(dest('css'))
}

function watchstyles(){
    watch(['scss/**/*.scss'],build)
}

exports.default=series(build,watchstyles)