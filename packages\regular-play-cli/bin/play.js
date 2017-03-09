#!/usr/bin/env node
'use strict'

const program = require( 'commander' );
const main = require( '../lib' );
const pkg = require( '../package.json' );

program
	.version( pkg.version )
	.option( '-p, --port <port>', 'port' )
	.option( '-e, --entry <entry>', 'entry' )
	.option( '-d, --out-dir <dist>', 'dist' )
	.option( '-t, --mobile-preview-template', '' )
	.parse( process.argv );
	;

const port = program.port;
const entry = program.entry;
const dist = program.outDir;
const mobilePreviewTemplate = program.mobilePreviewTemplate;

main( {
	port: port,
	entry: entry,
	dist: dist,
	mobilePreviewTemplate: mobilePreviewTemplate,
} );
