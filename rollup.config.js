import pkg from './package.json';

export default [
{
	input: 'dist/index.js',
	output: {
		file: 'dist/bundles/angular-crumbs.umd.js',
		name: 'ng.angular-crumbs',
		format: 'umd',
		globals: {
			'@angular/core': 'ng.core',
			'@angular/common': 'ng.common',
			'@angular/platform-browser': 'ng.platform-browser',
			'@angular/router': 'ng.router',
			'rxjs/Observable': 'Rx',
			'rxjs/ReplaySubject': 'Rx',
			'rxjs/add/operator/map': 'Rx.Observable.prototype',
			'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
			'rxjs/add/observable/fromEvent': 'Rx.Observable',
			'rxjs/add/observable/of': 'Rx.Observable'
		},
		sourcemap: false
	}
}
];