.PHONY: all clean build test repl run

all: clean build

clean:
	cabal new-clean

build:
	cabal new-build

test:
	cabal new-configure --enable-tests
	cabal new-build
	cabal new-test

repl:
	cabal new-repl

start:
	cabal new-run
