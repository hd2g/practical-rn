{-# language OverloadedStrings #-}
{-# language TypeApplications #-}

module FeedsSpec (spec) where

import FeedsAPI (app, Feeds)
import Test.Hspec (Spec, describe, it, shouldBe)
import Test.Hspec.Wai (liftIO, get, request, shouldRespondWith, with)
import Network.Wai.Test (simpleBody, simpleStatus)
-- import Network.HTTP.Type (Status(..))
-- import Test.Hspec.Wai.JSON
import Data.Aeson (decode')

spec :: Spec
spec = with (return app) $ do
  describe "/feeds endpoint response" $ do
    it "status code is 200" $ do
      get "/feeds" `shouldRespondWith` 200

    it "size of response is 10 when maxResults set 10" $ do
      response <- request "GET" "/feeds?maxResults=10" [] ""
      let size = length <$> decode' @Feeds (simpleBody response)
      liftIO $ size `shouldBe` Just 10

  describe "/feeds/:id endpoint response" $ do
    it "status code is 200 when an existing feed id is specified" $ do
      get "/feeds/id001" `shouldRespondWith` 200

    it "status code is 204 unless an existing feed id is specified" $ do
      get "/feeds/not-found-id" `shouldRespondWith` 204
