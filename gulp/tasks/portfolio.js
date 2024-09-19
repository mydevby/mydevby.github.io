export const portfolio = () => {
    return app.gulp.src(app.path.src.portfolio)
        .pipe(app.gulp.dest(app.path.build.portfolio))
}