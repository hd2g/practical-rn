{-# language OverloadedStrings #-}
{-# language DeriveGeneric #-}
{-# language DataKinds #-}
{-# language TypeOperators #-}

module Main where

import Prelude

import GHC.Generics (Generic)

import Data.Aeson (FromJSON, ToJSON)
import Data.Text (Text)
import qualified Data.Maybe as Maybe

import Servant
import qualified Network.Wai.Handler.Warp as Warp
import qualified Network.Wai.Logger as Logger

import qualified FeedsAPI as FeedsAPI

main :: IO ()
main = do
  putStrLn "server starting..."
  Logger.withStdoutLogger $ \logger -> do
    let settings = Warp.setPort 8080 $ Warp.setLogger logger Warp.defaultSettings
    Warp.runSettings settings FeedsAPI.app
