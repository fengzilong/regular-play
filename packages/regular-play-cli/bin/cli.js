#!/usr/bin/env node
"use strict"

const merge = require( 'lodash/merge' )
const cac = require( 'cac' )
const co = require( 'co' )
const pkg = require( '../package.json' )
const getDefaultOptions = require( './getDefaultOptions' )
const getCliOptions = require( './getCliOptions' )
const getOptions = require( './getOptions' )

// --- handler ---

function createHandler( mode ) {
	return co.wrap( function * ( input, flags ) {
		const run = require('./run')
		const defaultOptions = getDefaultOptions()
		const userOptions = yield getOptions()
		const cliOptions = getCliOptions( input, flags, mode )
		run( merge( defaultOptions, userOptions, cliOptions ) )
	} )
}

// --- cli ---

const cli = cac()

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
	.option( 'out-dir', {
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
