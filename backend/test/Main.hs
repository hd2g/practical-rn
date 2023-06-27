module Main (main) where

import Test.Hspec
import Test.Hspec.Runner
import Test.Hspec.Formatters

import qualified FeedsSpec

main :: IO ()
-- main = hspecWith defaultConfig {configFormatter = Just progress} $ do
--  describe "Feeds" FeedsSpec.spec
main = hspec $ do
  describe "FeedsAPI" FeedsSpec.spec
