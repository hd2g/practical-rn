{-# language OverloadedStrings #-}
{-# language DeriveGeneric #-}
{-# language DataKinds #-}
{-# language TypeOperators #-}

module FeedsAPI where

import Prelude

import GHC.Generics (Generic)
import Servant
import Servant.Server
import Data.Aeson
import Data.Text (Text, unpack)
import Data.List (find)
import qualified Data.Maybe as Maybe

type FeedsAPI = ListFeeds
           :<|> FindFeedById

type BaseEndpoint = "feeds"

-- | GET /feeds?page=1&maxResults=10
type ListFeeds = BaseEndpoint
              :> QueryParam "page" Int
              :> QueryParam "maxResults" Int
              :> Get '[JSON] Feeds

-- | GET /feeds/:id
type FindFeedById = BaseEndpoint
                  :> Capture "id" Text
                  :> Get '[JSON] Feed

type Feeds = [Feed]

data Feed = Feed
  { id :: Text
  , subject :: Text
  , description :: Text
  , user :: User
  } deriving (Show, Eq, Read, Generic)

instance ToJSON Feed
instance FromJSON Feed

data User = User
  { icon :: Text
  , name :: Text
  } deriving (Show, Eq, Read, Generic)

instance ToJSON User
instance FromJSON User

app :: Application
app = serve feedsApi server

server :: Server FeedsAPI
server = listFeeds :<|> findFeedsById

listFeeds :: Maybe Int -> Maybe Int -> Handler Feeds
listFeeds pageMaybe maxResultsMaybe = return $ takeBetween start stop listOfFeeds where
  maxResults = Maybe.fromMaybe defaultMaxResultsOfFeeds maxResultsMaybe
  defaultMaxResultsOfFeeds = 5
  page = Maybe.fromMaybe 1 pageMaybe
  start = (page - 1) * maxResults
  stop = start + maxResults

listOfFeeds :: Feeds
listOfFeeds =
  [ Feed "id001" "foo" "foo foo foo" (User "https://path/to/user/icon.png" "taro")
  , Feed "id002" "bar" "bar bar bar" (User "https://path/to/user/icon.png" "sato")
  , Feed "id003" "baz" "baz baz baz" (User "https://path/to/user/icon.png" "ito")
  , Feed "id004" "foo" "foo foo foo" (User "https://path/to/user/icon.png" "taro")
  , Feed "id005" "bar" "bar bar bar" (User "https://path/to/user/icon.png" "sato")
  , Feed "id006" "baz" "baz baz baz" (User "https://path/to/user/icon.png" "ito")
  , Feed "id007" "foo" "foo foo foo" (User "https://path/to/user/icon.png" "taro")
  , Feed "id008" "bar" "bar bar bar" (User "https://path/to/user/icon.png" "sato")
  , Feed "id009" "baz" "baz baz baz" (User "https://path/to/user/icon.png" "ito")
  , Feed "id010" "foo" "foo foo foo" (User "https://path/to/user/icon.png" "taro")
  , Feed "id011" "bar" "bar bar bar" (User "https://path/to/user/icon.png" "sato")
  , Feed "id012" "baz" "baz baz baz" (User "https://path/to/user/icon.png" "ito")
  ]

takeBetween :: Int -> Int -> [a] -> [a]
takeBetween n m = take (m - n) . drop (n - 1)

findFeedsById :: Text -> Handler Feed
findFeedsById id = case find (\(Feed id' _ _ _) -> id == id') listOfFeeds of
  Nothing ->
    throwError
    $ ServerError
    { errHTTPCode = 204
    , errReasonPhrase = "Feed not found: " ++ (unpack id)
    , errBody = ""
    , errHeaders = []
    }
  Just feed -> return feed

feedsApi :: Proxy FeedsAPI
feedsApi = Proxy
