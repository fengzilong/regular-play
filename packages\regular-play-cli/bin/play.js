#!/usr/bin/env node
'use strict'

const program = require( 'commander' );
const main = require( '../lib' );
const pkg = require( '../package.json' );

program
	.version( pkg.version )
	.option( '-p, --port <port>', 'port' )
	.option( '-e, --entry <entry>', 'path to entry file' )
	.option( '-d, --out-dir <dist>', 'dist' )
	.option( '-t, --preview-template <previewTemplate>', 'preview template for pc layout' )
	.option( '-m, --mobile-preview-template <mobilePreviewTemplate>', 'preview template for mobile layout' )
	.option( '-f, --resolve-fallback <resolveFallback>', 'fallback to resolve your dependencies' )
	.parse( process.argv )
	;

const port = program.port;
const entry = program.entry;
const dist = program.outDir;
const previewTemplate = program.previewTemplate;
const mobilePreviewTemplate = program.mobilePreviewTemplate;
const resolveFallback = program.resolveFallback;

main( {
	port: port,
	entry: entry,
	dist: dist,
	previewTemplate: previewTemplate,
	mobilePreviewTemplate: mobilePreviewTemplate,
	resolveFallback: resolveFallback,
} );
