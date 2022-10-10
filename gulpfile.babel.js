import gulp from "gulp";
import htmlmin from "gulp-htmlmin";
import cleanCSS from "gulp-clean-css";
import minify from "gulp-minify";
import clean from "gulp-clean";

let dist = "./dist";
let src = "./src";

// clean files
gulp.task("clean", () =>
  gulp
    .src([`${src}/modules/*.js`, `${src}/main.js`], {
      read: true,
      allowEmpty: true,
    })
    .pipe(clean({ force: true }))
);

// Copy icons folder
gulp.task("copyIconsFolder",() => gulp.src(`${src}/icons/*`).pipe(gulp.dest(`${dist}/assets/icons`)));

// minify and copy preview css file
gulp.task("minifyAndCopyPreviewCssFile", () => {
  return gulp
    .src(`./frame.css`)
    .pipe(
      cleanCSS({ debug: true }, (details) => {
        console.log(`${details.name}: ${details.stats.originalSize}`);
        console.log(`${details.name}: ${details.stats.minifiedSize}`);
      })
    )
    .pipe(gulp.dest(dist));
});

// minify and copy preview js file
gulp.task("minifyAndCopyPreviewJsFile", function () {
  gulp
    .src(`./frame.js`)
    .pipe(
      minify({
        ext: {
          src: "-debug.js",
          min: ".js",
        },
      })
    )
    .pipe(gulp.dest(dist));
});

// Compress html file
gulp.task("minifyPreviewHtml", () => {
  return gulp
    .src(`./frame.html`)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(dist));
});

// Compress html file
gulp.task("minifyIndexHtml", () => {
  return gulp
    .src(`${dist}/index.html`)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(dist));
});

// default gulp 
gulp.task(
  "default",
  gulp.series(
    "clean",
    "copyIconsFolder",
    "minifyPreviewHtml",
    "minifyIndexHtml"
  )
);
