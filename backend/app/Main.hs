{-# language OverloadedStrings #-}
{-# language DeriveGeneric #-}
{-# language DataKinds #-}
{-# language TypeOperators #-}

module Main where

import qualified MyLib (someFunc)

import GHC.Generics (Generic)

import Data.Aeson
import Data.Text (Text)

import Servant

import Network.Wai.Handler.Warp as Warp

main :: IO ()
main = do
  Warp.run 8080 app

app :: Application
app = serve helloApi server

server :: Server HelloAPI
server = hello :<|> user where
  hello = return "Hello world"
  user n a = return $ User n a

data User = User
  { name :: Text
  , age :: Int
  } deriving (Eq, Show, Read, Generic)

instance FromJSON User
instance ToJSON User

type HelloAPI = Get '[PlainText] Text
            :<|> "user" :> Capture "name" Text :> Capture "age" Int :> Get '[JSON] User

helloApi :: Proxy HelloAPI
helloApi = Proxy
