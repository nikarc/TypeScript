/a/lib/tsc.js --w /a/app.ts
//// [/a/app.ts]
var x = 1;
var y = 2;

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/a/app.js]
var x = 1;
var y = 2;



Output::
>> Screen clear
[[90m12:00:11 AM[0m] Starting compilation in watch mode...


[[90m12:00:14 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/app.ts"]
Program options: {"watch":true}
Program files::
/a/lib/lib.d.ts
/a/app.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/app.ts

WatchedFiles::
/a/app.ts:
  {"fileName":"/a/app.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

Change:: Append a line

//// [/a/app.ts]
var x = 1;
var y = 2;
var z = 3;

//// [/a/app.js]
var x = 1;
var y = 2;
var z = 3;



Output::
>> Screen clear
[[90m12:00:17 AM[0m] File change detected. Starting incremental compilation...


[[90m12:00:21 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/app.ts"]
Program options: {"watch":true}
Program files::
/a/lib/lib.d.ts
/a/app.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/app.ts

WatchedFiles::
/a/app.ts:
  {"fileName":"/a/app.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::

exitCode:: ExitStatus.undefined
