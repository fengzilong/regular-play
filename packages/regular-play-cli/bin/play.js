#!/usr/bin/env node
"use strict"

const program = require( 'commander' );
const { dev, build } = require( '../lib' );
const pkg = require( '../package.json' );

program
	.version( pkg.version )
	.option( '-b, --build', 'build files to local disk' )
	.option( '-p, --port <port>', 'port' )
	.option( '-e, --entry <entry>', 'path to entry file' )
	.option( '-d, --out-dir <dist>', 'dist' )
	.option( '-t, --preview-template <previewTemplate>', 'preview template for pc layout' )
	.option( '-m, --mobile-preview-template <mobilePreviewTemplate>', 'preview template for mobile layout' )
	.option( '-f, --resolve-fallback <resolveFallback>', 'fallback to resolve your dependencies' )
	.parse( process.argv );

const isBuild = program.build;
const port = program.port;
const entry = program.entry;
const dist = program.outDir;
const previewTemplate = program.previewTemplate;
const mobilePreviewTemplate = program.mobilePreviewTemplate;
const resolveFallback = program.resolveFallback;

const options = {
	port,
	entry,
	dist,
	previewTemplate,
	mobilePreviewTemplate,
	resolveFallback,
};

if ( isBuild ) {
	build( options );
} else {
	dev( options );
}
