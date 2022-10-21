// Основной модуль
import gulp from "gulp";
//Импорт путей
import { path } from "./gulp/config/path.js"
//Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js"


//Передаем значения в глобальную переменную
global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path: path,
	gulp: gulp,
	plugins: plugins
}

// Импорт задач
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { fonts } from "./gulp/tasks/fonts.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";

// Наблюдатель за изменениями в файлах
function watcher() {
	gulp.watch(path.watch.fonts, fonts);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.images, images);
}

// Основные задачи
const mainTasks = gulp.series(gulp.parallel(fonts, html, scss, js, images))

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

export { dev }
export { build }

// Выполнение сценария по умолчанию
gulp.task('default', dev);