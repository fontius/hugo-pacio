import autoprefixer from "autoprefixer";
import gulp from "gulp";
import {spawn} from "child_process";
import hugoBin from "hugo-bin";
import gutil from "gulp-util";
import flatten from "gulp-flatten";
import postcss from "gulp-postcss";
import cssNano from "gulp-cssnano";
import sass from "gulp-sass";
import BrowserSync from "browser-sync";
import webpack from "webpack";
import webpackConfig from "./webpack.conf";

const browserSync = BrowserSync.create();

// Hugo arguments
const hugoArgsDefault = ["-d", "../dist", "-s", "site", "-v"];
const hugoArgsPreview = ["--buildDrafts", "--buildFuture"];

// Development tasks
gulp.task("hugo", (cb) => buildSite(cb));
gulp.task("hugo-preview", (cb) => buildSite(cb, hugoArgsPreview));

// Build/production tasks
gulp.task("build", ["css", "js", "fonts"], (cb) => buildSite(cb, [], "production"));
gulp.task("build-preview", ["css", "js", "fonts"], (cb) => buildSite(cb, hugoArgsPreview, "production"));

// Compile CSS with PostCSS modify for SCSS Bulma include paths node modules
gulp.task("css", () => (
  gulp.src("./src/scss/*.scss")
    .pipe(sass({
      outputStyle: "nested",
      precision: 10,
      includePaths: ["node_modules"],
    }))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(cssNano())
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream())
));

// Compile Javascript
gulp.task("js", (cb) => {
  const myConfig = Object.assign({}, webpackConfig);

  webpack(myConfig, (err, stats) => {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      colors: true,
      progress: true
    }));
    browserSync.reload();
    cb();
  });
});

// Move all fonts in a flattened directory
gulp.task('fonts', () => (
  gulp.src("./src/assets/fonts/**/*")
    .pipe(flatten())
    .pipe(gulp.dest("./dist/fonts"))
    .pipe(browserSync.stream())
));

// Development server with browsersync
gulp.task("server", ["hugo", "css", "js", "fonts"], () => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  gulp.watch("./src/js/**/*.js", ["js"]);
  gulp.watch("./src/scss/**/*.scss", ["css"]);
  gulp.watch("./src/fonts/**/*", ["fonts"]);
  gulp.watch("./site/**/*", ["hugo"]);
});

/**
 * Run hugo and build the site
 */
function buildSite(cb, options, environment = "development") {
  const args = options ? hugoArgsDefault.concat(options) : hugoArgsDefault;

  process.env.NODE_ENV = environment;

  return spawn(hugoBin, args, {stdio: "inherit"}).on("close", (code) => {
    if (code === 0) {
      browserSync.reload();
      cb();
    } else {
      browserSync.notify("Hugo build failed :(");
      cb("Hugo build failed");
    }
  });
}
