/* eslint-disable no-undef */
const { src, dest, watch, parallel } = require("gulp");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const connect = require("gulp-connect");
const eslint = require("gulp-eslint");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const dartSass = require("sass");
const gulpSass = require("gulp-sass");
const livereload = require("gulp-livereload");

const sass = gulpSass(dartSass);

//Build scss
function buildSCSS() {
	return src("src/**/*.scss")
		.pipe(sass())
		.pipe(sass().on("error", sass.logError))
		.pipe(rename({ extname: ".min.css" }))
		.pipe(dest("dist/css"))
		.pipe(connect.reload());
}

//compile css
function compileCSS() {
	return src("src/**/*.scss")
		.pipe(sass())
		.pipe(concat("styles.css"))
		.pipe(dest("src/css"));
}

//Build js
function buildJS() {
	return src("src/**/*.js")
		.pipe(
			babel({
				presets: ["@babel/preset-env"],
			})
		)
		.pipe(concat("index.js"))
		.pipe(uglify())
		.pipe(rename({ extname: ".min.js" }))
		.pipe(dest("dist/"))
		.pipe(connect.reload());
}

//Build html
function buildHTML() {
	return src("src/**/*.html")
		.pipe(dest("dist/"))
		.pipe(connect.reload());
}

//build img
function buildImg() {
	return src("img/**/*.{jpg,png,svg}")
		.pipe(dest("dist/img"));
}

//watch method
function watchSCSS() {
	livereload.listen();
	watch("src/**/*.scss", {ignoreInitial: false},  buildSCSS);
}

function watchCSS() {
	livereload.listen();
	watch("src/**/*.css", {ignoreInitial: false}, buildCSS);
}

function watchJS() {
	livereload.listen();
	watch("src/**/*.js", {ignoreInitial: false},  buildJS);
}

function watchHTML() {
	livereload.listen();
	watch("src/**/*.html", {ignoreInitial: false}, buildHTML);
}

//Eslint
function lintJS() {
	return src(["src/**/*.js"])
		.pipe(eslint(".eslintrc.js"))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
}

function lintWatch() {
	watch("src/**/*.js", {ignoreInitial: false}, lintJS);
}

//Connect server
function connectServerBase() {
	connect.server();
}

function connectServerDevelopment(done) {
	connect.server({
		root: "dist",
		port: 3000,
		livereload: true
	});

	done();
}

function connectServerProduction(done) {
	connect.server({
		root: "dist",
		port: 8080
	});

	done();
}

function serverDevelopment(done) {
	connectServerDevelopment(done);
	watchHTML();
	watchSCSS();
	watchCSS();
	watchJS();
}

function serverProduction(done) {
	connectServerProduction(done);
	buildHTML();
	buildCSS();
	buildJS();
}

module.exports = {
	start: parallel(watchSCSS, watchJS, watchHTML, watchCSS), 
	build: parallel(buildJS, buildSCSS, buildHTML, buildImg),
	"compile:css": compileCSS,
	"lint:watch": lintWatch,
	"lint:js": lintJS,
	"server:base": connectServerBase,
	"server:dev": serverDevelopment,
	"server:prod": serverProduction
};


