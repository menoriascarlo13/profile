const {
    parallel,
    series,
    src,
    dest,
    watch
} = require('gulp');

const dartSass = require('sass');
const gulpSass = require('gulp-sass');
const sass = gulpSass(dartSass);
const sassGlob = require('gulp-sass-glob');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const useref = require('gulp-useref');
const cssnano = require('gulp-cssnano');
const minify = require('gulp-minify');
const cache = require('gulp-cache');
const del = require('del');
const rename = require("gulp-rename");
const inject = require("gulp-inject");
const changed = require('gulp-changed');
const RevAll = require("gulp-rev-all");
const imagemin = require('gulp-imagemin');
const injectHTML = require('gulp-inject-in-html');
const beautify = require('gulp-beautify');
const concat = require('gulp-concat');

function styles() {
    return src('build/styles/*.+(scss|sass)')
        .pipe(changed('build/styles/*.+(scss|sass)'))
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(RevAll.revision())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(dest('dist/styles'))
}

function fonts() {
    return src('build/fonts/**/*')
        .pipe(dest('dist/fonts'))
}

function scripts() {
    return src('build/scripts/*.js')
        .pipe(changed('build/scripts/*.js'))
        .pipe(gulpIf('*.js', uglify()))
        .pipe(concat('main.js'))
        .pipe(RevAll.revision())
        .pipe(minify())
        .pipe(dest('dist/scripts'))
}

function images() {
    return src('build/assets/**/*.+(png|jpg|gif|svg|jpeg)')
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(dest('dist/images'))
}

function clean() {
    return del('dist');
}

function cleanJS() {
    return del('dist/scripts');
}

function cleanCSS() {
    return del('dist/styles');
}

function cleanViews() {
    return del('dist/views/*');
}

function removeMain() {
    return del('main.html');
}

function index() {
    return src('index.html')
        .pipe(inject(src(['dist/scripts/*-min.js', 'dist/styles/*'], {
            read: false
        }), {
            addRootSlash: false,
            removeTags: true
        }))
        .pipe(beautify.html({
            indent_size: 2
        }))
        .pipe(useref())
        .pipe(dest('.'));
}

function finalTags() {
    return src('dist/views/main.html')
        .pipe(injectHTML())
        .pipe(dest('./'))
}

function mainRename() {
    return src('main.html')
        .pipe(rename('index.html'))
        .pipe(dest('.'))
}

function injectTags() {
    return src('build/views/**/*.html')
        .pipe(injectHTML())
        .pipe(beautify.html({
            indent_size: 2
        }))
        .pipe(dest('dist/views'))
}

exports.clean = clean;
exports.images = images;

exports.tags = series(
    cleanViews,
    injectTags,
    finalTags,
    mainRename,
    removeMain,
    index
)

exports.styles = series(
    cleanCSS,
    styles,
    series(cleanViews, injectTags, finalTags, mainRename, removeMain),
    index
)

exports.scripts = series(
    cleanJS,
    scripts,
    series(cleanViews, injectTags, finalTags, mainRename, removeMain),
    index
)

exports.build = series(
    clean,
    parallel(fonts, images, styles, scripts),
    series(cleanViews, injectTags, finalTags, mainRename, removeMain),
    index
);

exports.watcher = function() {
    watch(['build/styles/theme/*.scss', 'build/styles/*.scss'], 
    { events: 'all' }, series(
        cleanCSS,
        styles,
        series(cleanViews, injectTags, finalTags, mainRename, removeMain),
        index
    ));

    watch('build/scripts/*.js', { events: 'all' }, series(
        cleanJS,
        scripts,
        series(cleanViews, injectTags, finalTags, mainRename, removeMain),
        index
    ));

    watch(['build/views/*.html','build/views/top/*.html', 'build/views/bottom/*.html', 'build/views/partials/*.html'], 
        { events: 'all' }, 
        series(
        cleanViews,
        injectTags,
        finalTags,
        mainRename,
        removeMain,
        index
    ));
}