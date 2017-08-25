#!/usr/bin/env node
"use strict"

const merge = require( 'lodash/merge' )
const cac = require( 'cac' )
const co = require( 'co' )
const path = require( 'path' )
const pkg = require( '../package.json' )
const getCliOptions = require( './getCliOptions' )
const getOptions = require( './getOptions' )
const cwd = process.cwd()

// --- handler ---

function createHandler( mode ) {
	return co.wrap( function * ( input, flags ) {
		const run = require('./run')
		const userOptions = yield getOptions()
		const cliOptions = getCliOptions( input, flags, mode )
		run( merge( {
			port: 9000,
			entry: path.resolve( cwd, 'play/index.js' ),
			dist: path.resolve( cwd, 'dist-play' ),
			template: path.resolve( __dirname, '../lib/index.html' ),
			resolveFallback: []
		}, userOptions, cliOptions ) )
	} )
}

// --- cli ---

const cli = cac();

cli
	.command( 'build', 'Build in production mode', createHandler( 'production' ) )

cli
	.command( '*', {
		alias: 'dev',
		desc: 'Run in development mode'
	}, createHandler( 'development' ) )
	.option( 'port', {
		alias: 'p',
		desc: 'Port'
	} )
	.option( 'entry', {
		alias: 'e',
		desc: 'Path to entry file'
	} ).
	option( 'out-dir', {
		alias: 'd',
		dist: 'Dist directory'
	} )
	.option( 'template', {
		alias: 't',
		desc: 'Template for preview'
	} )
	.option( 'resolve-fallback', {
		alias: 'f',
		desc: 'Fallback to resolve your dependencies'
	} )
	.option( 'mobile', {
		alias: 'm',
		desc: 'Use mobile mode'
	} )

cli.parse()
